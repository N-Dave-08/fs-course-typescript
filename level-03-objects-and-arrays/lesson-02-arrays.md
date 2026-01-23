# Lesson 2: Arrays

## Array Types

TypeScript arrays are typed:

```typescript
const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ["Alice", "Bob", "Charlie"];

// Alternative syntax
const numbers2: Array<number> = [1, 2, 3];
```

## Array Operations

```typescript
const numbers = [1, 2, 3];

// Access elements
console.log(numbers[0]); // 1

// Modify elements
numbers[0] = 10;

// Add elements
numbers.push(4);
numbers.unshift(0);

// Remove elements
numbers.pop();
numbers.shift();
```

## Readonly Arrays

Prevent array modification:

```typescript
const readonlyNumbers: readonly number[] = [1, 2, 3];
// readonlyNumbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'
```

## Tuple Types

Fixed-length arrays with specific types:

```typescript
const point: [number, number] = [10, 20];
const person: [string, number, boolean] = ["Alice", 25, true];

// Access tuple elements
const x = point[0]; // number
const y = point[1]; // number
```

## Array Destructuring

```typescript
const numbers = [1, 2, 3];
const [first, second, third] = numbers;

// With rest
const [head, ...tail] = numbers; // head: 1, tail: [2, 3]
```
