# Lesson 1: Generics

## Generic Functions

Generics allow functions to work with multiple types:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42);
const str = identity<string>("hello");
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

## Multiple Type Parameters

```typescript
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const result = pair<string, number>("Alice", 25);
```

## Generic Constraints

Limit what types can be used:

```typescript
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
  console.log(arg.length);
}

logLength("hello");     // OK: string has length
logLength([1, 2, 3]);   // OK: array has length
// logLength(42);       // Error: number doesn't have length
```
