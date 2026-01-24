# Lesson 1: Generics

## Learning Objectives

By the end of this lesson, you will be able to:
- Explain what generics are and why they matter
- Write generic functions and let TypeScript infer type parameters
- Write generic classes and understand how `T` flows through fields/methods
- Use multiple type parameters (`<T, U>`) and return tuple types safely
- Apply generic constraints (`extends`) to require specific capabilities
- Recognize common pitfalls (overusing generics, unnecessary explicit type args, weak constraints)

## Why Generics Matter

Generics let you write **reusable, type-safe** code:
- without copying/pasting for each type
- without falling back to `any`

Think of generics as “types as parameters”.

```mermaid
flowchart LR
  input[Value] --> fn[GenericFunction<T>]
  fn --> output[SameTypeOut]
```

## Generic Functions

Generics allow functions to work with multiple types:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42);
const str = identity<string>("hello");
```

### Type inference (you usually don’t need `<T>`)

Most of the time, TypeScript infers `T` from the argument:

```typescript
const a = identity(123);      // T inferred as number
const b = identity("hello");  // T inferred as string
```

### A more practical generic example: get first element

```typescript
function first<T>(items: T[]): T | undefined {
  return items.length > 0 ? items[0] : undefined;
}

const firstNum = first([1, 2, 3]);       // number | undefined
const firstStr = first(["a", "b", "c"]); // string | undefined
```

## Generic Classes

Classes can be generic:

```typescript
class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(42);
const stringBox = new Box<string>("hello");
```

### Why this is useful

The class preserves the type:
- `Box<number>` returns `number` from `getValue()`
- `Box<string>` returns `string`

## Multiple Type Parameters

Use multiple generic parameters when you truly have multiple independent types:

```typescript
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const result = pair("Alice", 25); // inferred [string, number]
```

## Generic Constraints

Constraints let you require certain properties/methods on `T`.

```typescript
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
  console.log(arg.length);
}

logLength("hello");     // OK: string has length
logLength([1, 2, 3]);   // OK: array has length
// logLength(42);       // ❌ Error: number doesn't have length
```

### Common constraint pattern: key access with `keyof`

```typescript
function getProp<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: "u1", age: 25 };
const id = getProp(user, "id");   // string
const age = getProp(user, "age"); // number
```

## Real-World Scenario: Generic API Result Type

```typescript
type ApiSuccess<T> = { status: "success"; data: T };
type ApiError = { status: "error"; message: string };
type ApiResult<T> = ApiSuccess<T> | ApiError;

type User = { id: string; email: string };

function handleResult(result: ApiResult<User>) {
  if (result.status === "success") {
    return result.data.email;
  }
  return `Error: ${result.message}`;
}
```

## Best Practices

### 1) Prefer inference at call sites

Write `identity(123)` not `identity<number>(123)` unless inference fails.

### 2) Use constraints to keep generics meaningful

If your generic accepts literally anything, ask whether it should just be `unknown` or a concrete type.

### 3) Don’t over-genericize

Generics are powerful, but too many type parameters can reduce readability.

## Common Pitfalls and Solutions

### Pitfall 1: Using `any` instead of generics

**Problem:**

```typescript
function badIdentity(arg: any): any {
  return arg;
}
```

**Solution:**

```typescript
function goodIdentity<T>(arg: T): T {
  return arg;
}
```

### Pitfall 2: Weak constraints

**Problem:** Allowing `T extends object` when you really need a `length` or a specific key.

**Solution:** Constrain to what you actually use: `T extends { length: number }`, `K extends keyof T`, etc.

## Troubleshooting

### Issue: Generic type not inferred

**Symptoms:**
- TypeScript shows `T` as `unknown` or you get “cannot infer type parameter” messages.

**Solutions:**
1. Provide an explicit type argument at the call site:
   ```typescript
   identity<number>(123);
   ```
2. Adjust the function signature so `T` appears in parameter positions (inference works from inputs).

### Issue: "Type 'X' does not satisfy the constraint ..."

**Symptoms:**
- You pass a value that doesn’t match `T extends ...`.

**Solutions:**
1. Fix the value to satisfy the constraint.
2. Broaden the constraint if the function truly supports more shapes.

## Next Steps

Now that you understand generics:

1. ✅ **Practice**: Write a `first<T>(items: T[])` helper and use it with 3 types
2. ✅ **Experiment**: Add a constraint (`extends`) and see what invalid calls TypeScript prevents
3. 📖 **Next Lesson**: Learn about [Utility Types](./lesson-02-utility-types.md)
4. 💻 **Complete Exercises**: Work through [Exercises 06](./exercises-06.md)

## Additional Resources

- [TypeScript Handbook: Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [TypeScript Handbook: More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- [TypeScript Handbook: Keyof Type Operator](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)

---

**Key Takeaways:**
- Generics provide reusable, type-safe functions and classes.
- Type parameters (`<T>`) are usually inferred from inputs.
- Constraints (`extends`) require specific capabilities (like `length` or keys).
- Multiple type parameters are useful when types are independent.
- Prefer meaningful constraints and avoid overusing generics.
