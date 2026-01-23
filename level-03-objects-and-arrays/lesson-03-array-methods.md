# Lesson 3: Array Methods

## forEach

Iterate over array elements:

```typescript
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(num);
});
```

## map

Transform each element:

```typescript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
// [2, 4, 6, 8, 10]
```

## filter

Select elements that meet a condition:

```typescript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((num) => num % 2 === 0);
// [2, 4]
```

## reduce

Accumulate values:

```typescript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
// 15
```

## find

Find first matching element:

```typescript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
const user = users.find((u) => u.id === 2);
// { id: 2, name: "Bob" }
```

## some and every

Check conditions:

```typescript
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some((num) => num % 2 === 0); // true
const allPositive = numbers.every((num) => num > 0);  // true
```

## Type-Safe Array Methods

TypeScript provides type safety for all array methods:

```typescript
const numbers: number[] = [1, 2, 3];
const strings = numbers.map((num) => num.toString()); // string[]
```
