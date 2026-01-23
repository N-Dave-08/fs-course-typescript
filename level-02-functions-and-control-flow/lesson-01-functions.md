# Lesson 1: Functions

## Function Declarations

TypeScript functions include type annotations for parameters and return types:

```typescript
function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, 3); // 8
```

## Function Types

You can specify function types:

```typescript
let mathOperation: (x: number, y: number) => number;

mathOperation = add; // OK
// mathOperation = "not a function"; // Error
```

## Optional Parameters

Use `?` to make parameters optional:

```typescript
function greet(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}!`;
  }
  return `Hello, ${name}!`;
}

greet("Alice");           // "Hello, Alice!"
greet("Bob", "Mr.");      // "Hello, Mr. Bob!"
```

## Default Parameters

Provide default values:

```typescript
function multiply(a: number, b: number = 1): number {
  return a * b;
}

multiply(5);    // 5 (b defaults to 1)
multiply(5, 3); // 15
```

## Rest Parameters

Handle variable number of arguments:

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3);        // 6
sum(1, 2, 3, 4, 5);  // 15
```

## Return Types

TypeScript infers return types, but you can specify them:

```typescript
function getMessage(): string {
  return "Hello, TypeScript!";
}

function noReturn(): void {
  console.log("This function returns nothing");
}
```
