# Exercises 02: Functions and Control Flow

## Exercise 1: Basic Function

Create `exercise-01.ts` with a function `calculateArea` that:
- Takes two parameters: `width` (number) and `height` (number)
- Returns the area (width * height)
- Has proper type annotations
- Test with width=5, height=10

**File:** `exercise-01.ts`

---

## Exercise 2: Optional Parameters

Create `exercise-02.ts` with a function `createEmail` that:
- Takes `username` (string) and optional `domain` (string, default: "example.com")
- Returns an email string: `username@domain`
- Test with and without the domain parameter

**File:** `exercise-02.ts`

---

## Exercise 3: Rest Parameters

Create `exercise-03.ts` with a function `findMax` that:
- Takes any number of number arguments using rest parameters
- Returns the maximum value
- Test with: findMax(1, 5, 3, 9, 2)

**File:** `exercise-03.ts`

---

## Exercise 4: Arrow Functions

Create `exercise-04.ts` and convert these to arrow functions:
1. `function square(x: number): number { return x * x; }`
2. `function greet(name: string): string { return "Hello, " + name; }`
3. Test both functions

**File:** `exercise-04.ts`

---

## Exercise 5: Conditional Logic

Create `exercise-05.ts` with a function `getGrade` that:
- Takes a score (number)
- Returns grade string based on score:
  - 90-100: "A"
  - 80-89: "B"
  - 70-79: "C"
  - 60-69: "D"
  - Below 60: "F"
- Use if/else or switch statement

**File:** `exercise-05.ts`

---

## Exercise 6: Loops and Arrays

Create `exercise-06.ts` that:
1. Creates an array of numbers [1, 2, 3, 4, 5]
2. Uses a for loop to print each number
3. Uses forEach to print each number squared
4. Uses map to create a new array with doubled values

**File:** `exercise-06.ts`

---

## Exercise 7: Filter and Reduce

Create `exercise-07.ts` that:
1. Has an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
2. Uses filter to get only even numbers
3. Uses reduce to sum all numbers
4. Prints both results

**File:** `exercise-07.ts`

---

## Exercise 8: Function Types

Create `exercise-08.ts` that:
1. Defines a type `MathOperation` as a function: `(a: number, b: number) => number`
2. Creates variables of this type for add, subtract, multiply, divide
3. Creates a function `calculate` that takes an operation and two numbers
4. Tests all operations

**File:** `exercise-08.ts`

---

## Exercise 9: Complex Function

Create `exercise-09.ts` with a function `processNumbers` that:
- Takes an array of numbers
- Returns an object with:
  - `sum`: sum of all numbers
  - `average`: average of all numbers
  - `max`: maximum number
  - `min`: minimum number
- Use appropriate array methods

**File:** `exercise-09.ts`

---

Run each exercise with: `npx ts-node exercise-XX.ts`
