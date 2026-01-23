# Exercises 01: TypeScript Fundamentals

## Learning Objectives

By completing these exercises, you will:
- ✅ Understand how to declare variables with different types
- ✅ Practice using type annotations and type inference
- ✅ Learn to work with string and arithmetic operations
- ✅ Experience TypeScript's type checking in action
- ✅ Understand the difference between `let` and `const`
- ✅ Practice type narrowing with union types

## Before You Start

**Prerequisites:**
- TypeScript environment set up (see [LEARNING-GUIDE.md](../../LEARNING-GUIDE.md))
- Basic understanding of JavaScript variables
- Code editor with TypeScript support

**Setup:**
1. Navigate to the `level-01-fundamentals/` directory
2. Create a new folder called `exercises/` (if it doesn't exist)
3. Work on each exercise file in this folder

---

## Exercise 1: Basic Types

**Objective:** Practice declaring variables with explicit type annotations.

**Instructions:**
Create a file `exercises/exercise-01.ts` and declare variables with the following types:

1. A variable `age` of type `number` with value `25`
2. A variable `name` of type `string` with value `"TypeScript"`
3. A variable `isLearning` of type `boolean` with value `true`
4. A variable `score` that TypeScript infers as a number (don't use type annotation)

**Expected Code Structure:**
```typescript
// exercise-01.ts
let age: number = 25;
let name: string = "TypeScript";
let isLearning: boolean = true;
let score = 100; // TypeScript infers this as number
```

**Verification:**
- Run: `npx ts-node exercises/exercise-01.ts`
- Hover over `score` in your IDE - it should show type `number`
- No TypeScript errors should appear

**Hints:**
- Use `let` for variables that might be reassigned
- For `score`, just assign a number value without the type annotation
- TypeScript will automatically infer the type

**Common Mistakes:**
- ❌ Forgetting the colon (`:`) in type annotations
- ❌ Using quotes around numbers: `age: number = "25"` (should be `25`)
- ❌ Using `let` when you meant `const` for constants

**File:** `exercises/exercise-01.ts`

---

## Exercise 2: Type Annotations

**Objective:** Understand how type annotations prevent errors and observe TypeScript's error messages.

**Instructions:**
Create `exercises/exercise-02.ts` and:

1. Declare a variable `temperature` with explicit type `number` and value `72.5`
2. Declare a variable `city` with explicit type `string` and value `"New York"`
3. Try assigning a string to `temperature` and observe the error
4. Comment out the incorrect assignment and fix it

**Step-by-Step:**
```typescript
// Step 1 & 2: Declare variables
let temperature: number = 72.5;
let city: string = "New York";

// Step 3: Try this (it will cause an error)
// temperature = "hot"; // ❌ This should show an error

// Step 4: Fix it by assigning a number
temperature = 85; // ✅ Correct
```

**Expected Error Message:**
```
Type 'string' is not assignable to type 'number'
```

**Verification:**
- TypeScript should show a red squiggly line under the incorrect assignment
- The error message should explain the type mismatch
- After fixing, no errors should remain

**Learning Point:**
This exercise demonstrates TypeScript's compile-time type checking. The error appears before you run the code, preventing runtime bugs.

**File:** `exercises/exercise-02.ts`

---

## Exercise 3: String Operations

**Objective:** Practice string concatenation and template literals.

**Instructions:**
Create `exercises/exercise-03.ts` and:

1. Create variables `firstName` and `lastName` (both strings)
2. Concatenate them with a space to create `fullName`
3. Use a template literal to create a greeting: `"Hello, [fullName]!"`
4. Print the greeting using `console.log()`

**Example Solution:**
```typescript
// exercise-03.ts
let firstName: string = "John";
let lastName: string = "Doe";

// Method 1: String concatenation
let fullName: string = firstName + " " + lastName;

// Method 2: Template literal (recommended)
let greeting: string = `Hello, ${fullName}!`;

console.log(greeting); // Output: "Hello, John Doe!"
```

**Expected Output:**
```
Hello, John Doe!
```

**Verification:**
- Run the file and verify the output
- Try different first and last names
- Experiment with both concatenation (`+`) and template literals (`` `${}` ``)

**Hints:**
- Template literals use backticks (`` ` ``) not single or double quotes
- Use `${variableName}` inside template literals for interpolation
- Template literals can span multiple lines

**Common Mistakes:**
- ❌ Using single/double quotes instead of backticks for template literals
- ❌ Forgetting the `${}` syntax: `` `Hello, fullName!` `` (wrong) vs `` `Hello, ${fullName}!` `` (correct)
- ❌ Not including the space between first and last name

**File:** `exercises/exercise-03.ts`

---

## Exercise 4: Arithmetic Operations

**Objective:** Practice arithmetic operations with type-safe numbers.

**Instructions:**
Create `exercises/exercise-04.ts` and:

1. Declare two number variables `a = 15` and `b = 4`
2. Calculate and print each of the following:
   - Sum (a + b)
   - Difference (a - b)
   - Product (a * b)
   - Quotient (a / b)
   - Remainder (a % b)

**Example Solution:**
```typescript
// exercise-04.ts
let a: number = 15;
let b: number = 4;

let sum: number = a + b;
let difference: number = a - b;
let product: number = a * b;
let quotient: number = a / b;
let remainder: number = a % b;

console.log(`Sum: ${sum}`);           // 19
console.log(`Difference: ${difference}`); // 11
console.log(`Product: ${product}`);   // 60
console.log(`Quotient: ${quotient}`);  // 3.75
console.log(`Remainder: ${remainder}`); // 3
```

**Expected Output:**
```
Sum: 19
Difference: 11
Product: 60
Quotient: 3.75
Remainder: 3
```

**Verification:**
- Check that all calculations are correct
- Verify TypeScript infers all result variables as `number`
- Try different values for `a` and `b`

**Hints:**
- The modulo operator (`%`) returns the remainder after division
- Division in TypeScript/JavaScript always returns a floating-point number (even if the result is a whole number)
- You can use template literals to format the output nicely

**Common Mistakes:**
- ❌ Using `^` for exponentiation (use `**` instead)
- ❌ Expecting integer division (TypeScript/JavaScript always does floating-point division)
- ❌ Confusing modulo (`%`) with division (`/`)

**File:** `exercises/exercise-04.ts`

---

## Exercise 5: Type Inference

**Objective:** Understand how TypeScript infers types automatically and observe what happens when you try to assign incompatible types.

**Instructions:**
Create `exercises/exercise-05.ts` and:

1. Declare variables without type annotations:
   - `count = 10`
   - `message = "Hello"`
   - `active = true`
2. Try to assign incompatible types to each variable and observe the errors
3. Add comments explaining what TypeScript inferred for each variable

**Example Solution:**
```typescript
// exercise-05.ts
// TypeScript infers 'number' from the initial value
let count = 10;
// count = "ten"; // ❌ Error: Type 'string' is not assignable to type 'number'

// TypeScript infers 'string' from the initial value
let message = "Hello";
// message = 123; // ❌ Error: Type 'number' is not assignable to type 'string'

// TypeScript infers 'boolean' from the initial value
let active = true;
// active = "yes"; // ❌ Error: Type 'string' is not assignable to type 'boolean'

// Comments explaining inference:
// count: TypeScript inferred as 'number' because initial value is 10
// message: TypeScript inferred as 'string' because initial value is "Hello"
// active: TypeScript inferred as 'boolean' because initial value is true
```

**Verification:**
- Hover over each variable in your IDE to see the inferred type
- Uncomment the error lines to see TypeScript's error messages
- Verify that TypeScript correctly inferred the types

**Learning Point:**
TypeScript is smart enough to infer types from initial values, so you don't always need explicit type annotations. However, it still enforces type safety.

**Hints:**
- Hover over variables in VS Code to see their inferred types
- The errors will show you what TypeScript expects
- Type inference works for `let`, `const`, and function return types

**File:** `exercises/exercise-05.ts`

---

## Exercise 6: Type Errors

**Objective:** Experience TypeScript catching type errors and learn how to fix them.

**Instructions:**
Create `exercises/exercise-06.ts` and:

1. Declare `num: number = 10` and `str: string = "5"`
2. Try to add them: `let result = num + str` (this will cause an error)
3. Observe the error message TypeScript provides
4. Fix it by converting the string to a number using `Number()` or `parseInt()`

**Step-by-Step:**
```typescript
// exercise-06.ts
let num: number = 10;
let str: string = "5";

// Step 2: This will cause an error
// let result = num + str; // ❌ Error: Operator '+' cannot be applied to types 'number' and 'string'

// Step 3: Read the error message carefully
// Error message: "Operator '+' cannot be applied to types 'number' and 'string'"

// Step 4: Fix by converting string to number
let result1 = num + Number(str);        // Method 1: Using Number()
let result2 = num + parseInt(str, 10);  // Method 2: Using parseInt()

console.log(result1); // 15
console.log(result2); // 15
```

**Expected Error Message:**
```
Operator '+' cannot be applied to types 'number' and 'string'
```

**Verification:**
- The error should appear immediately in your IDE
- After fixing, the code should compile and run
- The result should be `15` (not `"105"`)

**Learning Point:**
TypeScript prevents you from accidentally concatenating numbers and strings, which would produce unexpected results in JavaScript.

**Hints:**
- `Number(str)` converts a string to a number
- `parseInt(str, 10)` also converts to a number (the `10` is the radix/base)
- Template literals automatically convert numbers to strings: `` `${num}${str}` `` would give `"105"`

**Common Mistakes:**
- ❌ Using type assertion (`as number`) instead of actual conversion
- ❌ Forgetting that `+` with strings does concatenation, not addition
- ❌ Not understanding the difference between `Number()` and `parseInt()`

**File:** `exercises/exercise-06.ts`

---

## Exercise 7: Constants

**Objective:** Understand the difference between `let` and `const`, and why constants are useful.

**Instructions:**
Create `exercises/exercise-07.ts` and:

1. Declare a constant `PI` with value `3.14159`
2. Declare a constant `APP_NAME` with value `"TypeScript Course"`
3. Try to reassign them and observe the errors
4. Add a comment explaining why constants are useful

**Example Solution:**
```typescript
// exercise-07.ts
const PI: number = 3.14159;
const APP_NAME: string = "TypeScript Course";

// Try to reassign (this will cause errors)
// PI = 3.14; // ❌ Error: Cannot assign to 'PI' because it is a constant
// APP_NAME = "New Name"; // ❌ Error: Cannot assign to 'APP_NAME' because it is a constant

// Why constants are useful:
// 1. Prevents accidental reassignment
// 2. Makes code more readable (you know the value won't change)
// 3. Helps catch bugs early
// 4. Signals intent that this value should never change
```

**Expected Error Messages:**
```
Cannot assign to 'PI' because it is a constant
Cannot assign to 'APP_NAME' because it is a constant
```

**Verification:**
- TypeScript should show errors when you try to reassign
- The errors should be clear about why reassignment isn't allowed
- Constants work the same way as in JavaScript, but with type safety

**Learning Point:**
Using `const` by default is a best practice. Only use `let` when you actually need to reassign the variable.

**Hints:**
- Use `const` for values that don't change
- Use `let` only when you need to reassign
- Constants can still have their properties modified if they're objects

**Common Mistakes:**
- ❌ Using `let` for values that never change
- ❌ Trying to reassign constants and being surprised by the error
- ❌ Not understanding that `const` prevents reassignment, not mutation (for objects)

**File:** `exercises/exercise-07.ts`

---

## Exercise 8: Type Narrowing

**Objective:** Practice using type guards to narrow union types.

**Instructions:**
Create `exercises/exercise-08.ts` and write a function `processValue` that:

1. Takes a parameter `value` of type `string | number`
2. If it's a string, print it in uppercase using `.toUpperCase()`
3. If it's a number, print it with 2 decimal places using `.toFixed(2)`
4. Test the function with both string and number inputs

**Example Solution:**
```typescript
// exercise-08.ts
function processValue(value: string | number): void {
  // Type narrowing: TypeScript knows the type in each branch
  if (typeof value === "string") {
    // TypeScript knows 'value' is string here
    console.log(value.toUpperCase());
  } else {
    // TypeScript knows 'value' is number here
    console.log(value.toFixed(2));
  }
}

// Test with string
processValue("hello"); // Output: "HELLO"

// Test with number
processValue(3.14159); // Output: "3.14"
```

**Expected Output:**
```
HELLO
3.14
```

**Verification:**
- The function should work with both string and number inputs
- TypeScript should not show errors for `.toUpperCase()` or `.toFixed()`
- Hover over `value` in each branch to see how TypeScript narrowed the type

**Learning Point:**
TypeScript uses control flow analysis to narrow types. After a type check (`typeof value === "string"`), TypeScript knows the type in that branch.

**Hints:**
- Use `typeof` operator for type checking
- TypeScript automatically narrows types after type guards
- You can use `else` for the other type in a union

**Common Mistakes:**
- ❌ Not using type guards, trying to call methods that don't exist on the union type
- ❌ Using type assertions instead of type narrowing
- ❌ Forgetting that `typeof` returns a string: `"string"`, `"number"`, etc.

**Advanced Challenge:**
Try adding a third case for when `value` could also be `null` or `undefined`. How would you handle that?

**File:** `exercises/exercise-08.ts`

---

## Running Exercises

### Method 1: Run Individual Files

For each exercise file:

```bash
# Navigate to the level directory
cd level-01-fundamentals

# Run individual exercises
npx ts-node exercises/exercise-01.ts
npx ts-node exercises/exercise-02.ts
npx ts-node exercises/exercise-03.ts
# ... and so on
```

### Method 2: Run All Exercises

Create a simple script to run all exercises:

```bash
# Run all exercises at once
for file in exercises/exercise-*.ts; do
  echo "Running $file..."
  npx ts-node "$file"
  echo ""
done
```

### Method 3: Watch Mode (for development)

Use `ts-node-dev` for automatic re-running:

```bash
# Install ts-node-dev
pnpm add -D ts-node-dev

# Run with watch mode
npx ts-node-dev --respawn exercises/exercise-01.ts
```

## Verification Checklist

After completing all exercises, verify:

- [ ] All files compile without TypeScript errors
- [ ] All files run and produce expected output
- [ ] You understand the difference between `let` and `const`
- [ ] You can use type annotations and type inference appropriately
- [ ] You understand how TypeScript catches type errors
- [ ] You can use type narrowing with union types

## Troubleshooting

### Issue: "Cannot find module 'ts-node'"

**Solution:**
```bash
# Install ts-node
pnpm add -D ts-node

# Or use npx (no installation needed)
npx ts-node exercises/exercise-01.ts
```

### Issue: TypeScript errors not showing

**Solution:**
1. Check that your IDE has TypeScript support enabled
2. Restart TypeScript server: `Ctrl+Shift+P` → "TypeScript: Restart TS Server"
3. Verify `tsconfig.json` exists in the project root

### Issue: "File is not a module"

**Solution:**
Add an export statement at the top of your file:
```typescript
export {}; // Makes the file a module
```

### Issue: Exercises not producing expected output

**Solution:**
1. Check that you're using `console.log()` to print values
2. Verify your calculations are correct
3. Make sure you're running the correct file

## Next Steps

After completing these exercises:

1. ✅ **Review**: Go back through each exercise and understand why it works
2. ✅ **Experiment**: Try modifying the exercises to see what happens
3. ✅ **Practice**: Create your own similar exercises
4. 📖 **Continue**: Move to the next lesson or level
5. 💻 **Solutions**: Check the `solutions/` folder (only after trying yourself!)

## Solutions

Reference implementations are available in the `solutions/` folder. **Try to solve exercises yourself first!** Only look at solutions if you're stuck or want to compare approaches.

**Remember:** The goal is learning, not just completing the exercises. Take time to understand each concept.

---

**Good luck! Happy coding! 🚀**
