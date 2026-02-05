# Exercises 02: Functions and Control Flow

## Learning Objectives

By completing these exercises, you will:
- ✅ Write functions with proper TypeScript types
- ✅ Use optional and default parameters
- ✅ Work with rest parameters
- ✅ Convert functions to arrow functions
- ✅ Implement conditional logic
- ✅ Use loops and array methods
- ✅ Understand function types

## Before You Start

**Prerequisites:**
- TypeScript environment set up
- Completed Level 1 exercises
- Understanding of basic types and variables

**Setup:**
1. Navigate to `level-02-functions-and-control-flow/`
2. Create `exercises/` directory
3. Work on each exercise file in this folder

---

## Exercise 1: Basic Function

**Objective:** Create a typed function with parameters and return type.

**Instructions:**
Create `exercises/exercise-01.ts` with a function `calculateArea` that:
1. Takes two parameters: `width` (number) and `height` (number)
2. Returns the area (width * height)
3. Has proper type annotations
4. Test with width=5, height=10

**Expected Code Structure:**
```typescript
// exercises/exercise-01.ts
/**
 * Calculates the area of a rectangle
 * @param width - Width of the rectangle
 * @param height - Height of the rectangle
 * @returns Area of the rectangle
 */
function calculateArea(width: number, height: number): number {
  return width * height;
}

// Test the function
const area1 = calculateArea(5, 10);
console.log(`Area of 5x10 rectangle: ${area1}`); // 50

const area2 = calculateArea(3, 7);
console.log(`Area of 3x7 rectangle: ${area2}`); // 21
```

**Verification:**
- Run: `npx ts-node exercises/exercise-01.ts`
- Expected output: `50` and `21`
- Hover over function in IDE - should show types

**Hints:**
- Annotate parameters: `(width: number, height: number)`
- Annotate return type: `: number`
- Function body calculates and returns result

**Common Mistakes:**
- ❌ Missing type annotations
- ❌ Wrong return type
- ❌ Not returning a value

**File:** `exercises/exercise-01.ts`

---

## Exercise 2: Optional Parameters

**Objective:** Use optional parameters with default values.

**Instructions:**
Create `exercises/exercise-02.ts` with a function `createEmail` that:
1. Takes `username` (string) and optional `domain` (string, default: "example.com")
2. Returns an email string: `username@domain`
3. Test with and without the domain parameter

**Expected Code Structure:**
```typescript
// exercises/exercise-02.ts
/**
 * Creates an email address
 * @param username - Username part of email
 * @param domain - Domain part (optional, defaults to "example.com")
 * @returns Complete email address
 */
function createEmail(username: string, domain: string = "example.com"): string {
  return `${username}@${domain}`;
}

// Test with default domain
const email1 = createEmail("alice");
console.log(email1); // "alice@example.com"

// Test with custom domain
const email2 = createEmail("bob", "gmail.com");
console.log(email2); // "bob@gmail.com"
```

**Verification:**
- Function works with one argument (uses default)
- Function works with two arguments (uses provided)
- TypeScript shows optional parameter

**Hints:**
- Use `=` for default parameter values
- Default parameters must come after required parameters
- Can have multiple optional parameters

**Common Mistakes:**
- ❌ Required parameters after optional ones
- ❌ Wrong default value syntax
- ❌ Not testing both cases

**File:** `exercises/exercise-02.ts`

---

## Exercise 3: Rest Parameters

**Objective:** Use rest parameters to accept variable arguments.

**Instructions:**
Create `exercises/exercise-03.ts` with a function `findMax` that:
1. Takes any number of number arguments using rest parameters
2. Returns the maximum value
3. Test with: `findMax(1, 5, 3, 9, 2)`

**Expected Code Structure:**
```typescript
// exercises/exercise-03.ts
/**
 * Finds the maximum value from variable arguments
 * @param numbers - Variable number of numbers
 * @returns Maximum value
 */
function findMax(...numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error('At least one number is required');
  }
  return Math.max(...numbers);
}

// Test the function
const max1 = findMax(1, 5, 3, 9, 2);
console.log(`Max of [1, 5, 3, 9, 2]: ${max1}`); // 9

const max2 = findMax(10, 20, 15);
console.log(`Max of [10, 20, 15]: ${max2}`); // 20
```

**Verification:**
- Function accepts variable number of arguments
- Returns correct maximum
- Works with different argument counts

**Hints:**
- Use `...numbers: number[]` for rest parameters
- Rest parameter must be last
- Can use `Math.max()` or manual comparison

**Common Mistakes:**
- ❌ Rest parameter not last
- ❌ Wrong syntax for rest parameters
- ❌ Not handling empty array case

**File:** `exercises/exercise-03.ts`

---

## Exercise 4: Arrow Functions

**Objective:** Convert regular functions to arrow functions.

**Instructions:**
Create `exercises/exercise-04.ts` and convert these to arrow functions:
1. `function square(x: number): number { return x * x; }`
2. `function greet(name: string): string { return "Hello, " + name; }`
3. Test both functions

**Expected Code Structure:**
```typescript
// exercises/exercise-04.ts
// Original function
function square(x: number): number {
  return x * x;
}

// Arrow function equivalent
const squareArrow = (x: number): number => {
  return x * x;
};

// Arrow function with implicit return
const squareArrowShort = (x: number): number => x * x;

// Original function
function greet(name: string): string {
  return "Hello, " + name;
}

// Arrow function equivalent
const greetArrow = (name: string): string => {
  return `Hello, ${name}`;
};

// Arrow function with implicit return
const greetArrowShort = (name: string): string => `Hello, ${name}`;

// Test all versions
console.log('Square (regular):', square(5)); // 25
console.log('Square (arrow):', squareArrow(5)); // 25
console.log('Square (arrow short):', squareArrowShort(5)); // 25

console.log('Greet (regular):', greet('Alice')); // "Hello, Alice"
console.log('Greet (arrow):', greetArrow('Bob')); // "Hello, Bob"
console.log('Greet (arrow short):', greetArrowShort('Charlie')); // "Hello, Charlie"
```

**Verification:**
- All versions produce same results
- Types are preserved
- Arrow functions work correctly

**Hints:**
- Arrow function syntax: `(params) => expression`
- Implicit return for single expressions
- Need braces and return for multiple statements
- `this` binding differs (important in classes)

**Common Mistakes:**
- ❌ Wrong arrow function syntax
- ❌ Forgetting return in multi-line arrow functions
- ❌ Not preserving types

**File:** `exercises/exercise-04.ts`

---

## Exercise 5: Conditional Logic

**Objective:** Implement conditional logic with if/else and switch.

**Instructions:**
Create `exercises/exercise-05.ts` with a function `getGrade` that:
1. Takes a score (number)
2. Returns grade string based on score:
   - 90-100: "A"
   - 80-89: "B"
   - 70-79: "C"
   - 60-69: "D"
   - Below 60: "F"
3. Use if/else or switch statement

**Expected Code Structure:**
```typescript
// exercises/exercise-05.ts
/**
 * Converts numeric score to letter grade
 * @param score - Numeric score (0-100)
 * @returns Letter grade
 */
function getGrade(score: number): string {
  if (score >= 90 && score <= 100) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

// Alternative using switch (with Math.floor)
function getGradeSwitch(score: number): string {
  const tens = Math.floor(score / 10);
  
  switch (tens) {
    case 10:
    case 9:
      return 'A';
    case 8:
      return 'B';
    case 7:
      return 'C';
    case 6:
      return 'D';
    default:
      return 'F';
  }
}

// Test the function
console.log('Score 95:', getGrade(95)); // "A"
console.log('Score 85:', getGrade(85)); // "B"
console.log('Score 75:', getGrade(75)); // "C"
console.log('Score 65:', getGrade(65)); // "D"
console.log('Score 55:', getGrade(55)); // "F"
```

**Verification:**
- All score ranges return correct grades
- Edge cases work (90, 80, 70, 60)
- Invalid scores handled (optional)

**Hints:**
- Use if/else for ranges
- Use switch for discrete values
- Consider edge cases (boundaries)
- Can add validation for score range

**Common Mistakes:**
- ❌ Wrong comparison operators (>= vs >)
- ❌ Missing edge cases
- ❌ Not handling invalid scores

**File:** `exercises/exercise-05.ts`

---

## Exercise 6: Loops and Arrays

**Objective:** Use different loop types and array methods.

**Instructions:**
Create `exercises/exercise-06.ts` that:
1. Creates an array of numbers [1, 2, 3, 4, 5]
2. Uses a for loop to print each number
3. Uses forEach to print each number squared
4. Uses map to create a new array with doubled values

**Expected Code Structure:**
```typescript
// exercises/exercise-06.ts
const numbers = [1, 2, 3, 4, 5];

// 1. For loop
console.log('=== For Loop ===');
for (let i = 0; i < numbers.length; i++) {
  console.log(`Number ${i + 1}: ${numbers[i]}`);
}

// 2. For...of loop (modern approach)
console.log('\n=== For...of Loop ===');
for (const num of numbers) {
  console.log(`Number: ${num}`);
}

// 3. forEach
console.log('\n=== forEach ===');
numbers.forEach((num, index) => {
  console.log(`Number ${index + 1} squared: ${num * num}`);
});

// 4. map
console.log('\n=== map ===');
const doubled = numbers.map(num => num * 2);
console.log('Original:', numbers);
console.log('Doubled:', doubled);
```

**Verification:**
- All loops work correctly
- forEach processes each element
- map creates new array
- Original array unchanged

**Hints:**
- `for` loop: traditional, full control
- `for...of`: simpler, iterates values
- `forEach`: functional, side effects
- `map`: functional, returns new array

**Common Mistakes:**
- ❌ Modifying array during iteration
- ❌ Using `map` when `forEach` is needed
- ❌ Not understanding return values

**File:** `exercises/exercise-06.ts`

---

## Exercise 7: Filter and Reduce

**Objective:** Use filter and reduce array methods.

**Instructions:**
Create `exercises/exercise-07.ts` that:
1. Has an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
2. Uses filter to get only even numbers
3. Uses reduce to sum all numbers
4. Prints both results

**Expected Code Structure:**
```typescript
// exercises/exercise-07.ts
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter: Get even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers); // [2, 4, 6, 8, 10]

// Filter: Get odd numbers
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log('Odd numbers:', oddNumbers); // [1, 3, 5, 7, 9]

// Reduce: Sum all numbers
const sum = numbers.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);
console.log('Sum of all numbers:', sum); // 55

// Reduce: Find maximum
const max = numbers.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, numbers[0]);
console.log('Maximum:', max); // 10

// Reduce: Count even numbers
const evenCount = numbers.reduce((count, num) => {
  return num % 2 === 0 ? count + 1 : count;
}, 0);
console.log('Count of even numbers:', evenCount); // 5
```

**Verification:**
- Filter returns correct subset
- Reduce calculates correct sum
- Can use reduce for other aggregations

**Hints:**
- `filter`: returns new array with matching elements
- `reduce`: accumulates value from array
- Reduce takes accumulator and current value
- Provide initial value for reduce

**Common Mistakes:**
- ❌ Forgetting initial value in reduce
- ❌ Wrong filter condition
- ❌ Not understanding reduce accumulator

**File:** `exercises/exercise-07.ts`

---

## Exercise 8: Function Types

**Objective:** Define and use function types.

**Instructions:**
Create `exercises/exercise-08.ts` that:
1. Defines a type `MathOperation` as a function: `(a: number, b: number) => number`
2. Creates variables of this type for add, subtract, multiply, divide
3. Creates a function `calculate` that takes an operation and two numbers
4. Tests all operations

**Expected Code Structure:**
```typescript
// exercises/exercise-08.ts
// Define function type
type MathOperation = (a: number, b: number) => number;

// Create operations
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
const multiply: MathOperation = (a, b) => a * b;
const divide: MathOperation = (a, b) => {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
};

// Function that uses operation type
function calculate(
  operation: MathOperation,
  a: number,
  b: number
): number {
  return operation(a, b);
}

// Test all operations
console.log('10 + 5 =', calculate(add, 10, 5)); // 15
console.log('10 - 5 =', calculate(subtract, 10, 5)); // 5
console.log('10 * 5 =', calculate(multiply, 10, 5)); // 50
console.log('10 / 5 =', calculate(divide, 10, 5)); // 2

// Can also use operations directly
console.log('Direct add:', add(20, 30)); // 50
```

**Verification:**
- Function type works correctly
- All operations work
- Type safety enforced

**Hints:**
- Function type syntax: `(params) => returnType`
- Can assign functions to typed variables
- TypeScript ensures function matches type
- Useful for callbacks and higher-order functions

**Common Mistakes:**
- ❌ Wrong function type syntax
- ❌ Functions don't match type signature
- ❌ Not handling edge cases (division by zero)

**File:** `exercises/exercise-08.ts`

---

## Exercise 9: Complex Function

**Objective:** Create a function that processes arrays and returns an object.

**Instructions:**
Create `exercises/exercise-09.ts` with a function `processNumbers` that:
1. Takes an array of numbers
2. Returns an object with:
   - `sum`: sum of all numbers
   - `average`: average of all numbers
   - `max`: maximum number
   - `min`: minimum number
3. Use appropriate array methods

**Expected Code Structure:**
```typescript
// exercises/exercise-09.ts
interface NumberStats {
  sum: number;
  average: number;
  max: number;
  min: number;
}

/**
 * Processes an array of numbers and returns statistics
 * @param numbers - Array of numbers
 * @returns Statistics object
 */
function processNumbers(numbers: number[]): NumberStats {
  if (numbers.length === 0) {
    throw new Error('Array cannot be empty');
  }

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);

  return {
    sum,
    average,
    max,
    min,
  };
}

// Test the function
const stats1 = processNumbers([1, 2, 3, 4, 5]);
console.log('Stats for [1, 2, 3, 4, 5]:', stats1);
// { sum: 15, average: 3, max: 5, min: 1 }

const stats2 = processNumbers([10, 20, 30]);
console.log('Stats for [10, 20, 30]:', stats2);
// { sum: 60, average: 20, max: 30, min: 10 }
```

**Verification:**
- Function calculates all statistics correctly
- Returns properly typed object
- Handles edge cases (empty array)

**Hints:**
- Use `reduce` for sum
- Calculate average from sum
- Use `Math.max/min` with spread operator
- Define return type interface

**Common Mistakes:**
- ❌ Wrong calculation formulas
- ❌ Not handling empty array
- ❌ Not typing return value

**File:** `exercises/exercise-09.ts`

---

## Running Exercises

For each exercise file:

```bash
npx ts-node exercises/exercise-01.ts
npx ts-node exercises/exercise-02.ts
# ... and so on
```

## Verification Checklist

After completing all exercises, verify:

- [X] All functions have proper type annotations
- [X] Optional parameters work correctly
- [X] Rest parameters accept variable arguments
- [X] Arrow functions work as expected
- [X] Conditional logic handles all cases
- [X] Loops and array methods work correctly
- [X] Function types are properly defined
- [X] Complex functions return correct results

## Troubleshooting

### Issue: Function not returning value

**Solution:**
- Check function has `return` statement
- Verify return type matches annotation
- Ensure all code paths return a value

### Issue: Type errors in functions

**Solution:**
- Check parameter types match usage
- Verify return type matches actual return
- Ensure function type signatures are correct

## Next Steps

1. ✅ **Review**: Understand function patterns
2. ✅ **Experiment**: Create more complex functions
3. 📖 **Continue**: Move to [Level 3: Objects and Arrays](../level-03-objects-and-arrays/lesson-01-objects.md)
4. 💻 **Complete**: Work through all exercises

---

**Key Takeaways:**
- Always type function parameters and return types
- Use default parameters for optional values
- Rest parameters accept variable arguments
- Arrow functions are concise but have different `this` binding
- Array methods (map, filter, reduce) are powerful
- Function types enable type-safe callbacks

**Good luck! Happy coding! 🚀**
