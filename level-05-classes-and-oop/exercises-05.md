# Exercises 05: Classes and OOP

## Exercise 1: Basic Class

Create `exercise-01.ts` with class `Rectangle`:
- Properties: `width`, `height` (both numbers)
- Constructor takes width and height
- Method `area()` returns area
- Method `perimeter()` returns perimeter
Create instance and test methods.

**File:** `exercise-01.ts`

---

## Exercise 2: Class with Methods

Create `exercise-02.ts` with class `Calculator`:
- Methods: `add`, `subtract`, `multiply`, `divide`
- All take two numbers and return a number
- Test all operations

**File:** `exercise-02.ts`

---

## Exercise 3: Inheritance

Create `exercise-03.ts`:
1. Class `Vehicle` with `brand` and `start()` method
2. Class `Car` extends `Vehicle` with `model` property
3. Override `start()` in Car
4. Create car instance and test

**File:** `exercise-03.ts`

---

## Exercise 4: Access Modifiers

Create `exercise-04.ts` with class `BankAccount`:
- Private `balance: number`
- Public methods: `deposit`, `withdraw`, `getBalance`
- Test that balance cannot be accessed directly

**File:** `exercise-04.ts`

---

## Exercise 5: Readonly Properties

Create `exercise-05.ts` with class `Product`:
- Readonly `id: number`
- `name: string`
- `price: number`
- Try to modify id and observe error

**File:** `exercise-05.ts`

---

## Exercise 6: Protected Members

Create `exercise-06.ts`:
1. Class `Animal` with protected `name: string`
2. Class `Dog` extends `Animal` with method `getName()`
3. Test that name is accessible in Dog but not outside

**File:** `exercise-06.ts`

---

## Exercise 7: Complex Class

Create `exercise-07.ts` with class `Student`:
- Properties: `id`, `name`, `grades` (array of numbers)
- Methods: `addGrade`, `getAverage`, `getHighestGrade`
- Test all methods

**File:** `exercise-07.ts`

---

## Exercise 8: Method Overriding

Create `exercise-08.ts`:
1. Class `Shape` with `area()` returning 0
2. Class `Circle` extends `Shape`, overrides `area()`
3. Class `Rectangle` extends `Shape`, overrides `area()`
4. Test all classes

**File:** `exercise-08.ts`

---

## Exercise 9: Class with Getters/Setters

Create `exercise-09.ts` with class `Temperature`:
- Private `_celsius: number`
- Getter `celsius` returns value
- Setter `celsius` sets value
- Getter `fahrenheit` converts to Fahrenheit
- Test getters and setters

**File:** `exercise-09.ts`

---

## Exercise 10: Multiple Inheritance Levels

Create `exercise-10.ts`:
1. Class `Animal` with `name`
2. Class `Mammal` extends `Animal` with `warmBlooded = true`
3. Class `Dog` extends `Mammal` with `breed`
4. Create Dog instance and access all properties

**File:** `exercise-10.ts`

---

Run each exercise with: `npx ts-node exercise-XX.ts`
