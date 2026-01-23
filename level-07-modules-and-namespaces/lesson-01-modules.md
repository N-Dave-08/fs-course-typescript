# Lesson 1: Modules

## ES Modules

TypeScript supports ES6 module syntax:

```typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}
```

## Importing Modules

```typescript
// main.ts
import { add, subtract } from "./math";

console.log(add(5, 3));      // 8
console.log(subtract(5, 3)); // 2
```

## Default Exports

```typescript
// calculator.ts
export default class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}

// main.ts
import Calculator from "./calculator";
const calc = new Calculator();
```

## Named and Default Exports

```typescript
// utils.ts
export const PI = 3.14159;

export default function greet(name: string): string {
  return `Hello, ${name}!`;
}

// main.ts
import greet, { PI } from "./utils";
```

## Re-exports

```typescript
// index.ts
export { add, subtract } from "./math";
export { Calculator } from "./calculator";
```
