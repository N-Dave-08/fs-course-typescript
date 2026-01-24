# Lesson 1: Functions

## Learning Objectives

By the end of this lesson, you will be able to:
- Explain why TypeScript function typing matters (beyond “it prevents bugs”)
- Write typed function declarations and expressions (including callbacks)
- Use optional, default, and rest parameters correctly
- Understand return types: inferred vs explicit, `void`, and `never`
- Define function *types* (type aliases, call signatures) and apply them safely
- Recognize common pitfalls (optional params, `any`, overload confusion)

## Why Functions Matter in TypeScript

Functions are where **data crosses boundaries**:
- From one module to another
- From user input into business logic
- From an API response into your app

When you add types to function inputs/outputs, you:
- Make the function’s contract explicit
- Get safer refactors (you’ll see what breaks immediately)
- Get better autocomplete + navigation in your editor

#### Mental model

```mermaid
flowchart LR
  caller[CallerCode] -->|arguments| fn[Function]
  fn -->|returnValue| caller
  fn -->|throws| err[ErrorPath]
```

## Function Declarations vs Function Expressions

### Function declaration (hoisted)

```typescript
function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, 3); // 8
```

### Function expression (not hoisted)

```typescript
const subtract = function (a: number, b: number): number {
  return a - b;
};
```

### When to choose which

- **Prefer declarations** for named utilities (readability + stack traces).
- **Prefer expressions** when you want to pass the function around as a value.

## Parameter Types and Return Types

TypeScript can infer a lot, but **you should usually annotate**:
- **parameters** (to avoid implicit `any`)
- **public function return types** (so refactors don’t accidentally change the contract)

```typescript
function formatUser(name: string, age: number): string {
  return `${name} (${age})`;
}
```

### Inferred return types (great for local helpers)

```typescript
function isEven(n: number) {
  return n % 2 === 0; // inferred boolean
}
```

## Optional Parameters

Optional parameters use `?` and always imply the type includes `undefined`.

```typescript
function greet(name: string, title?: string): string {
  if (title) return `Hello, ${title} ${name}!`;
  return `Hello, ${name}!`;
}

greet("Alice");      // "Hello, Alice!"
greet("Bob", "Mr."); // "Hello, Mr. Bob!"
```

### Important rule

Optional parameters should typically come **after required ones**.

```typescript
// ✅ good
function log(message: string, context?: Record<string, unknown>) {}

// ❌ confusing API design (and often disallowed by TS)
// function log(context?: Record<string, unknown>, message: string) {}
```

## Default Parameters

Default parameters behave like “optional with a fallback value”.

```typescript
function multiply(a: number, b: number = 1): number {
  return a * b;
}

multiply(5);    // 5
multiply(5, 3); // 15
```

### Default params still have types

If the default is `1`, TS infers `b` is `number` automatically.

## Rest Parameters

Rest parameters collect arguments into an array.

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3);       // 6
sum(1, 2, 3, 4, 5); // 15
```

### Rest parameters with tuples (more precise)

If you want “at least one value”, you can use a tuple rest type:

```typescript
function sumAtLeastOne(...numbers: [number, ...number[]]): number {
  return numbers.reduce((t, n) => t + n, 0);
}

sumAtLeastOne(1);    // ok
// sumAtLeastOne();  // error
```

## `void` and `never` Return Types

### `void`: “I return nothing meaningful”

```typescript
function logInfo(message: string): void {
  console.log(message);
}
```

### `never`: “this function does not successfully return”

Use `never` when the function:
- always throws, or
- always loops forever

```typescript
function fail(message: string): never {
  throw new Error(message);
}
```

This is useful for exhaustive checks later (you’ll see this in type guards).

## Function Types (Typing the Function Value)

### Inline function type

```typescript
let mathOperation: (x: number, y: number) => number;

mathOperation = add; // OK
// mathOperation = "not a function"; // Error
```

### Type alias (recommended)

```typescript
type BinaryNumberOp = (x: number, y: number) => number;

const divide: BinaryNumberOp = (x, y) => x / y;
```

### Call signatures (object-based typing)

Call signatures are useful when you want **a callable object**:

```typescript
type Formatter = {
  (value: number): string; // callable signature
  unit: string;            // extra metadata
};

const formatSeconds: Formatter = Object.assign(
  (value: number) => `${value}s`,
  { unit: "seconds" }
);

formatSeconds(5);        // "5s"
formatSeconds.unit;      // "seconds"
```

## Callbacks and Higher-Order Functions

Functions that accept functions are extremely common (array methods, event handlers, middleware).

```typescript
function mapNumbers(values: number[], mapper: (n: number) => number): number[] {
  return values.map(mapper);
}

const doubled = mapNumbers([1, 2, 3], (n) => n * 2); // [2, 4, 6]
```

### Best practice: type the callback, not the world

Keep callback types narrow and specific so misuse is caught early.

## Function Overloads (When One Name Has Multiple Shapes)

Overloads are useful when:
- the return type depends on the input type, and
- a union alone becomes too vague.

```typescript
function parseInput(value: string): number;
function parseInput(value: number): number;
function parseInput(value: string | number): number {
  if (typeof value === "string") return Number(value);
  return value;
}

parseInput("42"); // number
parseInput(42);   // number
```

### Common overload mistake

Don’t make the implementation signature narrower than the overloads.

## Common Pitfalls and Solutions

### Pitfall 1: Optional params + falsy checks

**Problem:**

```typescript
function greetWithTitle(name: string, title?: string) {
  // If title is "" (empty string), this branch will be skipped.
  if (title) return `Hello ${title} ${name}`;
  return `Hello ${name}`;
}
```

**Solution:** If empty string is valid, check explicitly:

```typescript
if (title !== undefined) { /* ... */ }
```

### Pitfall 2: Letting implicit `any` sneak in

**Problem:**

If `noImplicitAny` is off, untyped params become `any` silently:

```typescript
// Bad: parameters are any
// function add(a, b) { return a + b; }
```

**Solution:**

```typescript
function addSafe(a: number, b: number): number {
  return a + b;
}
```

## Troubleshooting

### Issue: "Parameter implicitly has an 'any' type"

**Symptoms:**
- You see an error like: `Parameter 'x' implicitly has an 'any' type.`

**Solutions:**
1. Add a parameter type:
   ```typescript
   function greet(name: string) {
     return `Hello ${name}`;
   }
   ```
2. If you truly want dynamic input, prefer `unknown` and validate (avoid `any`).

### Issue: "Type '(x: string) => number' is not assignable to type '(x: number) => number'"

**Symptoms:**
- Assigning a function to a callback/type alias fails with an “is not assignable” error.

**Solutions:**
1. Align parameter types so the function matches the expected signature:
   ```typescript
   type Mapper = (x: number) => number;
   const ok: Mapper = (x) => x * 2;
   ```
2. If you intended multiple accepted inputs, widen the *expected* type (e.g., union) and narrow inside.

## Real-World Scenario: Validating Input at an API Boundary

When you build APIs, you often take unknown input and convert it into a safe, typed shape.

```typescript
type CreateUserInput = {
  email: string;
  name: string;
  age?: number;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function toCreateUserInput(payload: unknown): CreateUserInput {
  if (typeof payload !== "object" || payload === null) {
    throw new Error("Payload must be an object");
  }

  const maybe = payload as Record<string, unknown>;

  if (!isNonEmptyString(maybe.email)) throw new Error("email is required");
  if (!isNonEmptyString(maybe.name)) throw new Error("name is required");

  const age = typeof maybe.age === "number" ? maybe.age : undefined;

  return { email: maybe.email, name: maybe.name, age };
}
```

Why this matters:
- **Typed function signatures** show the contract clearly.
- Guard/validation functions let you safely move from `unknown` → known types.

## More Depth: Destructuring and “Named Parameters”

Instead of positional parameters (easy to mix up), you can accept a single object.

```typescript
type CreateProductArgs = {
  id: string;
  name: string;
  priceCents: number;
  tags?: string[];
};

function createProduct({ id, name, priceCents, tags = [] }: CreateProductArgs) {
  return { id, name, priceCents, tags };
}

createProduct({ id: "p1", name: "Keyboard", priceCents: 4999 });
```

Benefits:
- Call sites are self-documenting
- Optional values are easier to manage
- Adding new parameters is not a breaking change (in many cases)

## More Depth: Async Functions and Promise Return Types

If a function is `async`, its return type is always a `Promise<...>`.

```typescript
type User = { id: string; email: string };

async function loadUser(id: string): Promise<User> {
  const res = await fetch(`/api/users/${id}`);
  if (!res.ok) throw new Error("Failed to load user");
  return (await res.json()) as User;
}
```

### Pitfall: forgetting to `await`

```typescript
async function demo() {
  const userPromise = loadUser("u1"); // Promise<User>
  const user = await loadUser("u1");  // User
  return { userPromise, user };
}
```

## Best Practices (Deeper)

### 1) Annotate API boundaries

If a function is:
- exported from a module, or
- used by multiple files, or
- used by other people

…prefer explicit parameter + return types.

### 2) Prefer `unknown` over `any` at boundaries

If you receive input you don’t trust (network, user, JSON), use `unknown` and validate.

### 3) Prefer small functions with single responsibility

If a function is doing multiple things, split it:
- parsing
- validating
- transforming
- formatting

## Quick Reference (Cheat Sheet)

```typescript
// function declaration
function fn(a: number): string { return String(a); }

// function expression
const fnExpr = function (a: number): string { return String(a); };

// arrow function
const fnArrow = (a: number): string => String(a);

// optional parameter
function greet(name: string, title?: string) {}

// default parameter
function repeat(text: string, times: number = 2) {}

// rest parameter
function sum(...values: number[]) {}

// function type alias
type Mapper<T> = (value: T) => T;
```

## Next Steps

Now that you understand functions and function typing:

1. ✅ **Practice**: Write 3 utility functions and fully type their inputs/outputs
2. ✅ **Experiment**: Try optional/default/rest parameters in the same function
3. 📖 **Next Lesson**: Learn about [Arrow Functions](./lesson-02-arrow-functions.md)
4. 💻 **Complete Exercises**: Work through [Exercises 02](./exercises-02.md)

## Additional Resources

- [TypeScript Handbook: More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- [TypeScript Handbook: Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [TypeScript Handbook: Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

---

**Key Takeaways:**
- Function signatures are contracts: inputs + outputs.
- Annotate function parameters to avoid implicit `any`.
- Use explicit return types on exported/public functions to lock the contract.
- Optional parameters imply `undefined` and should usually come last.
- Default parameters provide safe fallbacks and keep call sites clean.
- Rest parameters model variable-length inputs; tuple rest types can enforce “at least one”.
- Use function type aliases/call signatures to type callbacks cleanly.
- Use overloads when return type depends on input shape.
