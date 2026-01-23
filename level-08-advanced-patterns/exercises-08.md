# Exercises 08: Advanced Patterns

## Exercise 1: Type Guards

Create `exercise-01.ts` with function `processValue`:
- Takes `value: string | number`
- Uses type guard to check type
- If string, return uppercase
- If number, return squared
Test with both types.

**File:** `exercise-01.ts`

---

## Exercise 2: Custom Type Guard

Create `exercise-02.ts`:
1. Interface `Dog` with `bark()` method
2. Interface `Cat` with `meow()` method
3. Type guard `isDog(animal: Dog | Cat): animal is Dog`
4. Function that uses type guard

**File:** `exercise-02.ts`

---

## Exercise 3: Promises

Create `exercise-03.ts`:
1. Function `delay(ms: number): Promise<void>` that waits
2. Function `fetchData(): Promise<string>` that returns data after delay
3. Use `.then()` to process result

**File:** `exercise-03.ts`

---

## Exercise 4: Async/Await

Create `exercise-04.ts`:
1. Async function `loadUser(id: number): Promise<User>`
2. Simulate API call with delay
3. Use async/await to call and print result

**File:** `exercise-04.ts`

---

## Exercise 5: Error Handling

Create `exercise-05.ts`:
1. Async function that may throw error
2. Use try/catch to handle errors
3. Test both success and error cases

**File:** `exercise-05.ts`

---

## Exercise 6: Promise.all

Create `exercise-06.ts`:
1. Two async functions that return different data
2. Use `Promise.all` to wait for both
3. Process results together

**File:** `exercise-06.ts`

---

## Exercise 7: Type Narrowing

Create `exercise-07.ts`:
1. Union type with multiple interfaces
2. Use `in` operator for type narrowing
3. Access type-specific properties safely

**File:** `exercise-07.ts`

---

Run each exercise with: `npx ts-node exercise-XX.ts`
