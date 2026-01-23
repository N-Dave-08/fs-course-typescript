# Lesson 1: Interfaces

## Interface Definition

Interfaces define the shape of objects:

```typescript
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "Alice",
  age: 25
};
```

## Optional Properties

```typescript
interface User {
  name: string;
  email: string;
  age?: number; // Optional
}
```

## Readonly Properties

```typescript
interface Config {
  readonly apiKey: string;
  timeout: number;
}
```

## Extending Interfaces

```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever"
};
```

## Interface vs Type Alias

Interfaces are similar to type aliases but can be extended and merged:

```typescript
// Interface (can be extended)
interface Person {
  name: string;
}

// Type alias (cannot be extended the same way)
type PersonType = {
  name: string;
};
```
