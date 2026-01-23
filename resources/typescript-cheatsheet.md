# TypeScript Cheatsheet

## Basic Types

```typescript
let num: number = 42;
let str: string = "hello";
let bool: boolean = true;
let arr: number[] = [1, 2, 3];
let obj: { name: string; age: number } = { name: "Alice", age: 25 };
```

## Functions

```typescript
function add(a: number, b: number): number {
  return a + b;
}

const multiply = (a: number, b: number): number => a * b;
```

## Interfaces

```typescript
interface User {
  name: string;
  age?: number;
  readonly id: number;
}
```

## Classes

```typescript
class Person {
  private name: string;
  public age: number;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  
  greet(): string {
    return `Hello, ${this.name}`;
  }
}
```

## Generics

```typescript
function identity<T>(arg: T): T {
  return arg;
}

class Box<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}
```

## Utility Types

```typescript
type Partial<T> = { [P in keyof T]?: T[P] };
type Pick<T, K extends keyof T> = { [P in K]: T[P] };
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type Readonly<T> = { readonly [P in keyof T]: T[P] };
```

## Modules

```typescript
// Export
export function add(a: number, b: number): number {
  return a + b;
}

// Import
import { add } from "./math";
```

## Type Guards

```typescript
function isString(value: any): value is string {
  return typeof value === "string";
}
```

## Async/Await

```typescript
async function fetchData(): Promise<string> {
  const data = await someAsyncCall();
  return data;
}
```
