# Lesson 2: Arrow Functions

## Arrow Function Syntax

Arrow functions provide concise syntax:

```typescript
// Traditional function
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

// Arrow function (single expression, implicit return)
const add = (a: number, b: number): number => a + b;
```

## Arrow Functions with One Parameter

Parentheses optional for single parameter:

```typescript
const double = (x: number): number => x * 2;
const square = (x: number): number => x * x;
```

## Arrow Functions with No Parameters

Use empty parentheses:

```typescript
const getMessage = (): string => "Hello, TypeScript!";
```

## Arrow Functions as Callbacks

Commonly used with array methods:

```typescript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);
const evens = numbers.filter((num) => num % 2 === 0);
const sum = numbers.reduce((total, num) => total + num, 0);
```

## This Binding

Arrow functions preserve `this` from the enclosing scope:

```typescript
class Counter {
  count = 0;
  
  increment = () => {
    this.count++; // 'this' refers to Counter instance
  };
}
```

## When to Use Arrow Functions

- **Use arrow functions for**: Callbacks, short functions, preserving `this`
- **Use regular functions for**: Methods, when you need `arguments` object, hoisting
