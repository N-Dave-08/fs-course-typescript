# Lesson 3: Type Guards

## Learning Objectives

By the end of this lesson, you will be able to:
- Explain what type guards are and why narrowing matters
- Use built-in narrowing (`typeof`, `instanceof`, `in`)
- Write custom type guards using type predicates (`value is T`)
- Use assertion functions (`asserts value is T`) to enforce narrowing
- Recognize common pitfalls (unsafe “duck typing”, null/undefined checks, incorrect guards)

## Why Type Guards Matter

TypeScript often represents “real world uncertainty” with unions:
- `string | number`
- `User | Admin`
- `Success | Error`

To use union-specific members safely, you must **narrow** the type first.

```mermaid
flowchart TD
  union[UnionType A|B] --> guard{TypeGuard}
  guard -->|A| useA[UseAMembers]
  guard -->|B| useB[UseBMembers]
```

## `typeof` Narrowing

`typeof` works for primitives (string, number, boolean, bigint, symbol, undefined, function, object).

```typescript
function isString(value: string | number): value is string {
  return typeof value === "string";
}

function process(value: string | number) {
  if (isString(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

### Common pattern: null checks

```typescript
function printLength(value: string | null) {
  if (value === null) return;
  console.log(value.length); // value is string here
}
```

## `instanceof` Narrowing

`instanceof` works with classes (runtime constructor functions).

```typescript
class Dog {
  bark(): void {
    console.log("Woof!");
  }
}

class Cat {
  meow(): void {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
```

### Important limitation

`instanceof` does not work for interfaces, because interfaces do not exist at runtime.

## `in` Operator Narrowing

`in` checks for a property key at runtime.

```typescript
interface Bird {
  fly(): void;
}

interface Fish {
  swim(): void;
}

function move(animal: Bird | Fish) {
  if ("fly" in animal) {
    animal.fly();
  } else {
    animal.swim();
  }
}
```

### Use `in` carefully

If both union members might have the property (optional, or shared), `in` won’t narrow the way you expect.

## Custom Type Guards (Type Predicates)

Custom guards let you define safe checks for complex shapes:

```typescript
interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  permissions: string[];
}

function isAdmin(user: User | Admin): user is Admin {
  return "permissions" in user;
}

function processUser(user: User | Admin) {
  if (isAdmin(user)) {
    console.log(user.permissions);
  } else {
    console.log(user.email);
  }
}
```

## Assertion Functions (`asserts`)

Sometimes you want to throw an error if the value is wrong, and narrow if it’s correct.

```typescript
function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("Expected a string");
  }
}

function handle(input: unknown) {
  assertIsString(input);
  input.toUpperCase(); // input is string here
}
```

## Real-World Scenario: Validating API Input

When data comes from the outside world (`unknown`), type guards are how you safely “turn it into” a trusted type.

```typescript
type CreateUserInput = { email: string; age?: number };

function isCreateUserInput(value: unknown): value is CreateUserInput {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return typeof v.email === "string" && (v.age === undefined || typeof v.age === "number");
}
```

## Best Practices

### 1) Prefer discriminated unions when possible

If you control the types, add a tag like `kind` or `status` and narrow on that.

### 2) Keep guards correct and minimal

A guard must reflect reality. If it returns true too easily, it becomes a bug factory.

### 3) Validate external input at runtime

TypeScript types do not validate data. Guard/parse `unknown` before use.

## Common Pitfalls and Solutions

### Pitfall 1: Incorrect guard that “lies”

**Problem:**

```typescript
function isUser(value: any): value is { email: string } {
  return true; // ❌ always true
}
```

**Solution:** Check the actual shape and types before returning true.

### Pitfall 2: Using `as` instead of narrowing

**Problem:** `const u = input as User` silences errors but doesn’t protect you at runtime.

**Solution:** Use guards/parsers, especially at boundaries (API, files, env vars).

## Troubleshooting

### Issue: "Property 'x' does not exist on type ..."

**Symptoms:**
- You try to access a union-specific member.

**Solutions:**
1. Narrow first (`typeof`, `instanceof`, `in`, discriminant tag).
2. Add a custom type guard function.

### Issue: Type guard doesn’t narrow

**Symptoms:**
- You wrote a check, but TypeScript still shows the union.

**Solutions:**
1. Ensure your guard function returns a **type predicate**: `value is T`.
2. Ensure the check is strong enough for TS to narrow.
3. Avoid checks against optional/shared properties that don’t uniquely identify a branch.

## Next Steps

Now that you understand type guards:

1. ✅ **Practice**: Write a guard for `unknown` input and use it to safely access fields
2. ✅ **Experiment**: Convert a guard to an `asserts` function and observe how the type narrows
3. 📖 **Next Lesson**: Learn about [Async Patterns](./lesson-04-async-patterns.md)
4. 💻 **Complete Exercises**: Work through [Exercises 08](./exercises-08.md)

## Additional Resources

- [TypeScript Handbook: Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [TypeScript Handbook: More on Functions (type predicates)](https://www.typescriptlang.org/docs/handbook/2/functions.html)

---

**Key Takeaways:**
- Type guards narrow unions so you can use branch-specific members safely.
- `typeof` works for primitives; `instanceof` works for classes; `in` works for property presence.
- Custom guards use `value is T`; assertion functions use `asserts value is T`.
- Validate `unknown` at boundaries—types alone don’t protect runtime data.
