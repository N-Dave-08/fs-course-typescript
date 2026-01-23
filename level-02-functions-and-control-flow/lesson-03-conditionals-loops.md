# Lesson 3: Conditionals and Loops

## If/Else Statements

TypeScript conditionals work like JavaScript, with type narrowing:

```typescript
function processValue(value: string | number) {
  if (typeof value === "string") {
    // TypeScript knows 'value' is string here
    console.log(value.toUpperCase());
  } else {
    // TypeScript knows 'value' is number here
    console.log(value.toFixed(2));
  }
}
```

## Ternary Operator

```typescript
const age = 20;
const status = age >= 18 ? "adult" : "minor";
```

## Switch Statements

```typescript
function getDayName(day: number): string {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    default:
      return "Unknown";
  }
}
```

## For Loops

```typescript
// Traditional for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// For...of loop (arrays)
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}

// For...in loop (objects)
const person = { name: "Alice", age: 25 };
for (const key in person) {
  console.log(key, person[key as keyof typeof person]);
}
```

## While Loops

```typescript
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
```

## Array Methods (Functional Approach)

```typescript
const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach((num) => console.log(num));

// map
const doubled = numbers.map((num) => num * 2);

// filter
const evens = numbers.filter((num) => num % 2 === 0);

// reduce
const sum = numbers.reduce((total, num) => total + num, 0);
```
