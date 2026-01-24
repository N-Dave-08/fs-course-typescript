# Lesson 1: Classes

## Learning Objectives

By the end of this lesson, you will be able to:
- Define TypeScript classes with typed fields, constructors, and methods
- Understand how class instances differ from plain objects
- Initialize properties safely (constructor params, defaults)
- Use `this` correctly inside methods and class properties
- Recognize common pitfalls (uninitialized fields, `this` binding, overly-mutable state)

## Why Classes Matter in TypeScript

Classes are useful when you need:
- encapsulation (state + behavior)
- invariants (rules enforced in one place)
- reusable abstractions (e.g., a service with dependencies)

In TypeScript, class typing helps you catch invalid states early.

```mermaid
flowchart LR
  classDef[ClassDefinition] --> instance[Instance]
  instance --> methods[Methods]
  instance --> fields[Fields]
```

## Class Definition

TypeScript classes are similar to JavaScript but with type annotations:

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, I'm ${this.name}`;
  }
}

const person = new Person("Alice", 25);
console.log(person.greet());
```

### What TypeScript adds here

- `name: string` / `age: number` are field declarations
- constructor parameters are typed
- methods can specify return types (`: string`)

## Property Initialization

Properties can be initialized:
- at declaration
- inside the constructor

```typescript
class Point {
  x: number = 0;
  y: number = 0;

  constructor(x?: number, y?: number) {
    if (x !== undefined) this.x = x;
    if (y !== undefined) this.y = y;
  }
}
```

### Preferred modern pattern: parameter properties

TypeScript can declare and assign fields directly from constructor parameters:

```typescript
class User {
  constructor(public name: string, public age: number) {}
}
```

This reduces boilerplate while keeping types explicit.

## Methods

Class methods can have typed parameters and return types:

```typescript
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }
}
```

## `this` and Method Calls

Methods rely on `this`. In JavaScript, how you call a method matters:

```typescript
class Counter {
  count = 0;

  increment() {
    this.count += 1;
  }
}

const c = new Counter();
const fn = c.increment;
// fn(); // can fail at runtime depending on strict mode / binding
```

To avoid `this` issues for callbacks, you can use an arrow property:

```typescript
class SafeCounter {
  count = 0;
  increment = () => {
    this.count += 1;
  };
}
```

## Real-World Scenario: A Simple Service Class

```typescript
type Logger = { info(message: string): void };

class UserService {
  constructor(private logger: Logger) {}

  createUser(email: string) {
    this.logger.info(`Creating user: ${email}`);
    return { id: "u1", email };
  }
}
```

This is a common pattern in backend code: a service class with dependencies.

## Best Practices

### 1) Keep state private where possible

Even before access modifiers (next lesson), design your API so it’s hard to misuse.

### 2) Prefer small classes

If the class has too many responsibilities, split it into smaller ones.

### 3) Favor composition over inheritance (most of the time)

Inheritance can be powerful but often becomes rigid; composition stays flexible.

## Common Pitfalls and Solutions

### Pitfall 1: Forgetting to initialize fields

**Problem:**

```typescript
class Bad {
  name: string; // declared but not initialized
  // constructor missing assignment
}
```

**Solution:**
Initialize or assign in the constructor, or use definite assignment (`!`) carefully.

```typescript
class Good {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
```

### Pitfall 2: `this` binding bugs when passing methods

**Problem:** Passing a method as a callback can lose `this`.

**Solution:** Use arrow properties for callbacks, or bind manually.

## Troubleshooting

### Issue: "Property 'x' has no initializer and is not definitely assigned in the constructor"

**Symptoms:**
- TypeScript complains about a field that might be uninitialized.

**Solutions:**
1. Initialize the field where declared:
   ```typescript
   class A { count = 0; }
   ```
2. Assign it in the constructor.
3. Use `!` only if you truly guarantee assignment before use.

### Issue: Runtime error when calling a method as a callback

**Symptoms:**
- You see errors like “Cannot read properties of undefined”.

**Solutions:**
1. Use an arrow property for the method.
2. Use `.bind(this)` when passing the method.

## Next Steps

Now that you understand basic classes:

1. ✅ **Practice**: Create a `User` class with 2 fields and 2 methods
2. ✅ **Experiment**: Pass a method as a callback and fix the `this` binding bug
3. 📖 **Next Lesson**: Learn about [Inheritance](./lesson-02-inheritance.md)
4. 💻 **Complete Exercises**: Work through [Exercises 05](./exercises-05.md)

## Additional Resources

- [TypeScript Handbook: Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [TypeScript Handbook: More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

---

**Key Takeaways:**
- Classes bundle state (fields) and behavior (methods) together.
- TypeScript adds typed fields, typed constructors, and typed methods.
- Initialize fields to avoid invalid/uninitialized states.
- Be careful with `this` when passing methods as callbacks.
- Use small, focused classes and prefer composition when possible.
