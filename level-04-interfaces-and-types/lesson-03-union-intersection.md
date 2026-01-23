# Lesson 3: Union and Intersection Types

## Union Types

A value can be one of several types:

```typescript
type StringOrNumber = string | number;

function processValue(value: StringOrNumber) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

## Discriminated Unions

Use a common property to distinguish union members:

```typescript
type Success = {
  status: "success";
  data: string;
};

type Error = {
  status: "error";
  message: string;
};

type Result = Success | Error;

function handleResult(result: Result) {
  if (result.status === "success") {
    console.log(result.data); // TypeScript knows this is Success
  } else {
    console.log(result.message); // TypeScript knows this is Error
  }
}
```

## Intersection Types

Combine multiple types:

```typescript
type Name = { name: string };
type Age = { age: number };
type Email = { email: string };

type User = Name & Age & Email;

const user: User = {
  name: "Alice",
  age: 25,
  email: "alice@example.com"
};
```

## Type Guards

Narrow union types:

```typescript
function isString(value: string | number): value is string {
  return typeof value === "string";
}

function process(value: string | number) {
  if (isString(value)) {
    // TypeScript knows 'value' is string here
    console.log(value.toUpperCase());
  }
}
```
