# Exercises 07: Modules and Namespaces

## Learning Objectives

By completing these exercises, you will:
- ✅ Export and import functions and classes
- ✅ Use default and named exports
- ✅ Export and import types
- ✅ Organize code into modules
- ✅ Use namespaces
- ✅ Re-export modules
- ✅ Structure TypeScript projects

## Before You Start

**Prerequisites:**
- TypeScript fundamentals
- Understanding of functions and classes
- File system knowledge

**Setup:**
1. Navigate to `level-07-modules-and-namespaces/`
2. Create `exercises/` directory
3. Work on each exercise in subdirectories

---

## Exercise 1: Basic Export/Import

**Objective:** Create and use module exports.

**Instructions:**
Create two files:
1. `exercises/exercise-01/math.ts` with exported functions
2. `exercises/exercise-01/main.ts` that imports and uses them

**Expected Code Structure:**
```typescript
// exercises/exercise-01/math.ts
/**
 * Adds two numbers
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Multiplies two numbers
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

// Can export multiple items
export const PI = 3.14159;
```

```typescript
// exercises/exercise-01/main.ts
import { add, multiply, PI } from './math';

// Use imported functions
const sum = add(10, 5);
console.log('Sum:', sum); // 15

const product = multiply(4, 7);
console.log('Product:', product); // 28

console.log('PI:', PI); // 3.14159
```

**Verification:**
- Run: `npx ts-node exercises/exercise-01/main.ts`
- Functions work correctly
- Imports resolve correctly

**Hints:**
- `export` makes items available
- `import { ... }` imports named exports
- Use relative paths for local files

**Files:** `exercises/exercise-01/math.ts` and `exercises/exercise-01/main.ts`

---

## Exercise 2: Default Export

**Objective:** Use default exports.

**Instructions:**
Create files with default export.

**Expected Code Structure:**
```typescript
// exercises/exercise-02/calculator.ts
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }
}

// Default export
export default Calculator;
```

```typescript
// exercises/exercise-02/main.ts
import Calculator from './calculator';

const calc = new Calculator();
console.log('10 + 5 =', calc.add(10, 5)); // 15
console.log('10 - 5 =', calc.subtract(10, 5)); // 5
```

**Verification:**
- Default import works
- Can rename on import
- Only one default per module

**File:** `exercises/exercise-02/calculator.ts` and `exercises/exercise-02/main.ts`

---

## Exercise 3: Mixed Exports

**Objective:** Combine default and named exports.

**Instructions:**
Create module with both export types.

**Expected Code Structure:**
```typescript
// exercises/exercise-03/utils.ts
// Named export
export const PI = 3.14159;

export function square(x: number): number {
  return x * x;
}

// Default export
export default function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

```typescript
// exercises/exercise-03/main.ts
import greet, { PI, square } from './utils';

// Use default export
const message = greet('Alice');
console.log(message); // "Hello, Alice!"

// Use named exports
console.log('PI:', PI); // 3.14159
console.log('Square of 5:', square(5)); // 25
```

**Verification:**
- Both export types work
- Can import together
- Default comes first in import

**File:** `exercises/exercise-03/utils.ts` and `exercises/exercise-03/main.ts`

---

## Exercise 4: Type Exports

**Objective:** Export and import types.

**Instructions:**
Create files that export and import types.

**Expected Code Structure:**
```typescript
// exercises/exercise-04/types.ts
export interface User {
  id: number;
  name: string;
  email: string;
}

export type Status = 'active' | 'inactive';
```

```typescript
// exercises/exercise-04/main.ts
import type { User, Status } from './types';
// Or: import { type User, type Status } from './types';

const user: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
};

const status: Status = 'active';

console.log('User:', user);
console.log('Status:', status);
```

**Verification:**
- Types export correctly
- Types import correctly
- Type safety maintained

**File:** `exercises/exercise-04/types.ts` and `exercises/exercise-04/main.ts`

---

## Exercise 5: Re-exports

**Objective:** Re-export modules from index file.

**Instructions:**
Create multiple modules and re-export from index.

**Expected Code Structure:**
```typescript
// exercises/exercise-05/math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}
```

```typescript
// exercises/exercise-05/advanced.ts
export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}
```

```typescript
// exercises/exercise-05/index.ts
// Re-export all from math
export * from './math';

// Re-export all from advanced
export * from './advanced';

// Can also re-export with different names
export { multiply as mult, divide as div } from './advanced';
```

```typescript
// exercises/exercise-05/main.ts
// Import all from index
import { add, subtract, multiply, divide, mult, div } from './index';

console.log('10 + 5 =', add(10, 5));
console.log('10 - 5 =', subtract(10, 5));
console.log('10 * 5 =', multiply(10, 5));
console.log('10 / 5 =', divide(10, 5));
```

**Verification:**
- Re-exports work
- Can import from index
- All functions accessible

**Files:** Create all files in `exercises/exercise-05/`

---

## Exercise 6: Namespace

**Objective:** Use TypeScript namespaces.

**Instructions:**
Create namespace with utility functions.

**Expected Code Structure:**
```typescript
// exercises/exercise-06.ts
namespace StringUtils {
  export function toUpperCase(str: string): string {
    return str.toUpperCase();
  }

  export function reverse(str: string): string {
    return str.split('').reverse().join('');
  }

  export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
}

// Use namespace
const upper = StringUtils.toUpperCase('hello');
console.log('Uppercase:', upper); // "HELLO"

const reversed = StringUtils.reverse('TypeScript');
console.log('Reversed:', reversed); // "tpircSepyT"

const capitalized = StringUtils.capitalize('hello world');
console.log('Capitalized:', capitalized); // "Hello world"
```

**Verification:**
- Namespace works
- Functions accessible
- Code organized

**File:** `exercises/exercise-06.ts`

---

## Exercise 7: Nested Namespace

**Objective:** Create nested namespaces.

**Instructions:**
Create namespace with nested namespaces.

**Expected Code Structure:**
```typescript
// exercises/exercise-07.ts
namespace Shapes {
  export namespace Circle {
    export function area(radius: number): number {
      return Math.PI * radius * radius;
    }

    export function circumference(radius: number): number {
      return 2 * Math.PI * radius;
    }
  }

  export namespace Rectangle {
    export function area(width: number, height: number): number {
      return width * height;
    }

    export function perimeter(width: number, height: number): number {
      return 2 * (width + height);
    }
  }
}

// Use nested namespaces
const circleArea = Shapes.Circle.area(5);
console.log('Circle area:', circleArea.toFixed(2)); // 78.54

const rectArea = Shapes.Rectangle.area(10, 5);
console.log('Rectangle area:', rectArea); // 50
```

**Verification:**
- Nested namespaces work
- Can access nested functions
- Organization clear

**File:** `exercises/exercise-07.ts`

---

## Exercise 8: Module Organization

**Objective:** Organize code into proper module structure.

**Instructions:**
Create organized module structure.

**Expected Code Structure:**
```
exercises/exercise-08/
├── models/
│   └── User.ts
├── utils/
│   └── helpers.ts
└── main.ts
```

```typescript
// exercises/exercise-08/models/User.ts
export interface User {
  id: number;
  name: string;
  email: string;
}

export function createUser(id: number, name: string, email: string): User {
  return { id, name, email };
}
```

```typescript
// exercises/exercise-08/utils/helpers.ts
export function formatEmail(email: string): string {
  return email.toLowerCase().trim();
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

```typescript
// exercises/exercise-08/main.ts
import { User, createUser } from './models/User';
import { formatEmail, validateEmail } from './utils/helpers';

const email = 'ALICE@EXAMPLE.COM';
const formatted = formatEmail(email);
console.log('Formatted email:', formatted);

if (validateEmail(formatted)) {
  const user = createUser(1, 'Alice', formatted);
  console.log('Created user:', user);
}
```

**Verification:**
- Module structure works
- Imports resolve correctly
- Code is organized

**Files:** Create all files in `exercises/exercise-08/`

---

## Running Exercises

For each exercise:

```bash
# Exercise 1-4, 6-7
npx ts-node exercises/exercise-XX/main.ts

# Exercise 5
npx ts-node exercises/exercise-05/main.ts

# Exercise 8
npx ts-node exercises/exercise-08/main.ts
```

## Verification Checklist

After completing all exercises, verify:

- [ ] Named exports work
- [ ] Default exports work
- [ ] Mixed exports work
- [ ] Type exports work
- [ ] Re-exports work
- [ ] Namespaces work
- [ ] Nested namespaces work
- [ ] Module organization works

## Troubleshooting

### Issue: "Cannot find module"

**Solution:**
- Check file paths
- Verify file extensions
- Check tsconfig.json module settings

### Issue: Import errors

**Solution:**
- Verify export syntax
- Check import paths
- Ensure files exist

## Next Steps

1. ✅ **Review**: Understand modules and namespaces
2. ✅ **Experiment**: Create more complex structures
3. 📖 **Continue**: Move to [Level 8: Advanced Patterns](../level-08-advanced-patterns/lesson-01-decorators.md)
4. 💻 **Complete**: Work through all exercises

---

**Key Takeaways:**
- `export` makes items available to other modules
- `import` brings items into current module
- Default exports: one per module
- Named exports: multiple per module
- Namespaces organize code
- Re-exports create barrel files
- Organize code into logical modules

**Good luck! Happy coding! 🚀**
