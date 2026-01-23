# Exercises 03: Objects and Arrays

## Exercise 1: Object Creation

Create `exercise-01.ts` with an object `book` that has:
- `title` (string)
- `author` (string)
- `year` (number)
- `isAvailable` (boolean)
Print all properties.

**File:** `exercise-01.ts`

---

## Exercise 2: Array Operations

Create `exercise-02.ts` that:
1. Creates an array of numbers [1, 2, 3, 4, 5]
2. Adds 6 to the end
3. Adds 0 to the beginning
4. Removes the last element
5. Prints the final array

**File:** `exercise-02.ts`

---

## Exercise 3: Array Methods

Create `exercise-03.ts` with an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
1. Use `map` to create array of squares
2. Use `filter` to get numbers > 5
3. Use `reduce` to calculate sum
4. Print all results

**File:** `exercise-03.ts`

---

## Exercise 4: Object Arrays

Create `exercise-04.ts` with an array of person objects:
```typescript
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 }
];
```
1. Find person with age > 25
2. Map to array of names
3. Filter people with age >= 25
4. Calculate average age

**File:** `exercise-04.ts`

---

## Exercise 5: Tuple Types

Create `exercise-05.ts` with:
1. A tuple `coordinates: [number, number]` representing (x, y)
2. A tuple `personInfo: [string, number, boolean]` for (name, age, isActive)
3. Destructure both tuples
4. Print the values

**File:** `exercise-05.ts`

---

## Exercise 6: Nested Objects

Create `exercise-06.ts` with a `user` object containing:
- `name` (string)
- `address` object with `street` and `city`
- `contacts` array of phone numbers (strings)
Access and print nested properties.

**File:** `exercise-06.ts`

---

## Exercise 7: Array of Objects

Create `exercise-07.ts` with an array of products:
```typescript
const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75 }
];
```
1. Find product with id === 2
2. Map to array of prices
3. Filter products with price > 50
4. Calculate total price using reduce

**File:** `exercise-07.ts`

---

## Exercise 8: Complex Array Operations

Create `exercise-08.ts` with numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
1. Filter even numbers
2. Map to their squares
3. Reduce to sum
4. Chain all operations in one expression

**File:** `exercise-08.ts`

---

## Exercise 9: Object Methods

Create `exercise-09.ts` with an object `calculator` that has:
- `add(a: number, b: number): number`
- `subtract(a: number, b: number): number`
- `multiply(a: number, b: number): number`
- `divide(a: number, b: number): number`
Test all methods.

**File:** `exercise-09.ts`

---

## Exercise 10: Array Transformations

Create `exercise-10.ts` that transforms:
```typescript
const data = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 }
];
```
Into an array of strings: `["Alice: 85", "Bob: 92", "Charlie: 78"]`

**File:** `exercise-10.ts`

---

Run each exercise with: `npx ts-node exercise-XX.ts`
