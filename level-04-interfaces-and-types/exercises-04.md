# Exercises 04: Interfaces and Types

## Exercise 1: Basic Interface

Create `exercise-01.ts` with an interface `Book`:
- `title: string`
- `author: string`
- `pages: number`
Create a book object and print its properties.

**File:** `exercise-01.ts`

---

## Exercise 2: Optional Properties

Create `exercise-02.ts` with interface `User`:
- `name: string` (required)
- `email: string` (required)
- `age?: number` (optional)
Create users with and without age.

**File:** `exercise-02.ts`

---

## Exercise 3: Extending Interfaces

Create `exercise-03.ts`:
1. Interface `Animal` with `name: string`
2. Interface `Dog` extends `Animal` with `breed: string`
3. Create a dog object

**File:** `exercise-03.ts`

---

## Exercise 4: Type Aliases

Create `exercise-04.ts` with type aliases:
- `UserId = string | number`
- `Status = "active" | "inactive"`
Create variables using these types.

**File:** `exercise-04.ts`

---

## Exercise 5: Union Types

Create `exercise-05.ts` with function `processValue`:
- Takes parameter `value: string | number`
- If string, return uppercase
- If number, return squared
Test with both types.

**File:** `exercise-05.ts`

---

## Exercise 6: Intersection Types

Create `exercise-06.ts`:
1. Type `HasName = { name: string }`
2. Type `HasAge = { age: number }`
3. Type `Person = HasName & HasAge`
4. Create a person object

**File:** `exercise-06.ts`

---

## Exercise 7: Discriminated Union

Create `exercise-07.ts` with:
```typescript
type Success = { status: "success"; data: string };
type Failure = { status: "error"; message: string };
type Result = Success | Failure;
```
Create function `handleResult` that processes both cases.

**File:** `exercise-07.ts`

---

## Exercise 8: Complex Types

Create `exercise-08.ts` with interface `Product`:
- `id: string | number`
- `name: string`
- `price: number`
- `inStock?: boolean`
Create array of products and filter by price > 50.

**File:** `exercise-08.ts`

---

## Exercise 9: Function Type Aliases

Create `exercise-09.ts`:
1. Type `Calculator = (a: number, b: number) => number`
2. Create add, subtract, multiply functions
3. Create function that takes Calculator and executes it

**File:** `exercise-09.ts`

---

Run each exercise with: `npx ts-node exercise-XX.ts`
