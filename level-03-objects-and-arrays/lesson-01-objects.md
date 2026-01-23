# Lesson 1: Objects

## Object Types

TypeScript allows you to define object shapes:

```typescript
const person: { name: string; age: number } = {
  name: "Alice",
  age: 25
};
```

## Object Properties

Access and modify object properties:

```typescript
const person = {
  name: "Alice",
  age: 25
};

console.log(person.name); // "Alice"
person.age = 26;          // Modify property
```

## Optional Properties

Mark properties as optional with `?`:

```typescript
const person: {
  name: string;
  age?: number; // Optional
} = {
  name: "Alice"
  // age is optional, so we can omit it
};
```

## Readonly Properties

Make properties read-only:

```typescript
const config: {
  readonly apiKey: string;
  timeout: number;
} = {
  apiKey: "abc123",
  timeout: 5000
};

// config.apiKey = "new"; // Error: Cannot assign to 'apiKey' because it is a read-only property
config.timeout = 10000; // OK
```

## Nested Objects

Objects can contain other objects:

```typescript
const user: {
  name: string;
  address: {
    street: string;
    city: string;
  };
} = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "New York"
  }
};
```
