# Lesson 3: Conditional Types

## Basic Conditional Types

Conditional types select types based on conditions:

```typescript
type IsArray<T> = T extends Array<any> ? true : false;

type Test1 = IsArray<number[]>;  // true
type Test2 = IsArray<string>;   // false
```

## Infer Keyword

Extract types from other types:

```typescript
type ArrayElementType<T> = T extends Array<infer U> ? U : never;

type Element = ArrayElementType<number[]>; // number
```

## Distributive Conditional Types

Conditional types distribute over union types:

```typescript
type ToArray<T> = T extends any ? T[] : never;

type StrArrOrNumArr = ToArray<string | number>;
// string[] | number[]
```

## Mapped Types

Transform types by mapping over properties:

```typescript
type Optional<T> = {
  [P in keyof T]?: T[P];
};

interface User {
  name: string;
  age: number;
}

type OptionalUser = Optional<User>;
// { name?: string; age?: number; }
```

## Template Literal Types

Create string literal types:

```typescript
type EventName<T extends string> = `on${Capitalize<T>}`;

type ClickEvent = EventName<"click">; // "onClick"
type SubmitEvent = EventName<"submit">; // "onSubmit"
```
