# Lesson 2: Type Aliases

## Basic Type Aliases

Create custom type names:

```typescript
type Age = number;
type Name = string;

const age: Age = 25;
const name: Name = "Alice";
```

## Object Type Aliases

```typescript
type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "Alice",
  age: 25
};
```

## Union Types

Combine multiple types:

```typescript
type Status = "active" | "inactive" | "pending";
type ID = string | number;

const status: Status = "active";
const id: ID = "123"; // or 123
```

## Intersection Types

Combine multiple types into one:

```typescript
type Name = {
  name: string;
};

type Age = {
  age: number;
};

type Person = Name & Age;

const person: Person = {
  name: "Alice",
  age: 25
};
```

## Type Aliases for Functions

```typescript
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;
```
