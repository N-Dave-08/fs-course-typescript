# Exercises 07: Modules and Namespaces

## Exercise 1: Basic Export/Import

Create `exercise-01.ts`:
1. File `math.ts` with exported functions `add` and `multiply`
2. File `main.ts` that imports and uses these functions
3. Run main.ts

**Files:** `math.ts`, `main.ts`

---

## Exercise 2: Default Export

Create `exercise-02.ts`:
1. File `calculator.ts` with default export of Calculator class
2. File `main.ts` that imports and uses Calculator
3. Test the calculator

**Files:** `calculator.ts`, `main.ts`

---

## Exercise 3: Mixed Exports

Create `exercise-03.ts`:
1. File `utils.ts` with:
   - Default export: `greet` function
   - Named export: `PI` constant
2. File `main.ts` imports both
3. Use both in main.ts

**Files:** `utils.ts`, `main.ts`

---

## Exercise 4: Type Exports

Create `exercise-04.ts`:
1. File `types.ts` with exported interface `User`
2. File `main.ts` imports type and creates user object
3. Print user properties

**Files:** `types.ts`, `main.ts`

---

## Exercise 5: Re-exports

Create `exercise-05.ts`:
1. File `math.ts` with add, subtract
2. File `advanced.ts` with multiply, divide
3. File `index.ts` re-exports all functions
4. File `main.ts` imports from index.ts

**Files:** `math.ts`, `advanced.ts`, `index.ts`, `main.ts`

---

## Exercise 6: Namespace

Create `exercise-06.ts`:
1. Namespace `StringUtils` with:
   - `toUpperCase(str: string)`
   - `reverse(str: string)`
2. Use namespace functions in main

**File:** `exercise-06.ts`

---

## Exercise 7: Nested Namespace

Create `exercise-07.ts`:
1. Namespace `Shapes` with nested namespaces:
   - `Circle` with `area(radius: number)`
   - `Rectangle` with `area(width: number, height: number)`
2. Use both in main

**File:** `exercise-07.ts`

---

## Exercise 8: Module Organization

Create `exercise-08.ts`:
1. Organize code into modules:
   - `models/User.ts` - User interface
   - `utils/helpers.ts` - Helper functions
   - `main.ts` - Main file that uses both
2. Properly import and use all modules

**Files:** `models/User.ts`, `utils/helpers.ts`, `main.ts`

---

Run exercises with: `npx ts-node main.ts` (or appropriate entry file)
