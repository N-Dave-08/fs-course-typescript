# Exercises 06: Generics and Advanced Types

## Exercise 1: Generic Function

Create `exercise-01.ts` with generic function `getFirst`:
- Takes array of type T
- Returns first element of type T
- Test with number and string arrays

**File:** `exercise-01.ts`

---

## Exercise 2: Generic Class

Create `exercise-02.ts` with generic class `Stack<T>`:
- Private array of type T
- Method `push(item: T)`
- Method `pop(): T | undefined`
- Method `isEmpty(): boolean`
Test with number and string stacks.

**File:** `exercise-02.ts`

---

## Exercise 3: Generic Constraints

Create `exercise-03.ts` with function `getLength`:
- Generic type T that extends `{ length: number }`
- Returns length of argument
- Test with string and array

**File:** `exercise-03.ts`

---

## Exercise 4: Utility Types - Partial

Create `exercise-04.ts`:
1. Interface `User` with name, age, email
2. Create function that takes `Partial<User>`
3. Test with partial user object

**File:** `exercise-04.ts`

---

## Exercise 5: Utility Types - Pick

Create `exercise-05.ts`:
1. Interface `Product` with id, name, price, description
2. Use `Pick` to create type with only id and name
3. Create object of that type

**File:** `exercise-05.ts`

---

## Exercise 6: Utility Types - Omit

Create `exercise-06.ts`:
1. Interface `User` with id, name, password, email
2. Use `Omit` to create type without password
3. Create safe user object

**File:** `exercise-06.ts`

---

## Exercise 7: Record Type

Create `exercise-07.ts`:
1. Use `Record<string, number>` for scores
2. Create object mapping student names to scores
3. Calculate average score

**File:** `exercise-07.ts`

---

## Exercise 7: Conditional Types

Create `exercise-08.ts` with conditional type:
```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
```
Test with different types.

**File:** `exercise-08.ts`

---

## Exercise 9: Mapped Types

Create `exercise-09.ts`:
1. Interface `Config` with apiKey, timeout, retries
2. Create mapped type that makes all properties readonly
3. Use it to create readonly config

**File:** `exercise-09.ts`

---

Run each exercise with: `npx ts-node exercise-XX.ts`
