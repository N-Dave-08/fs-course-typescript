# Exercises 06: Generics and Advanced Types

## Learning Objectives

By completing these exercises, you will:
- ✅ Create generic functions and classes
- ✅ Use generic constraints
- ✅ Work with utility types (Partial, Pick, Omit, Record)
- ✅ Understand conditional types
- ✅ Use mapped types
- ✅ Practice advanced TypeScript patterns

## Before You Start

**Prerequisites:**
- TypeScript fundamentals
- Interfaces and types
- Classes knowledge
- Understanding of type system

**Setup:**
1. Navigate to `level-06-generics-and-advanced-types/`
2. Create `exercises/` directory
3. Work on each exercise file

---

## Exercise 1: Generic Function

**Objective:** Create a generic function that works with any type.

**Instructions:**
Create `exercises/exercise-01.ts` with generic function `getFirst`:
1. Takes array of type T
2. Returns first element of type T
3. Test with number and string arrays

**Expected Code Structure:**
```typescript
// exercises/exercise-01.ts
/**
 * Gets the first element of an array
 * @param array - Array of any type
 * @returns First element or undefined
 */
function getFirst<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[0] : undefined;
}

// Test with number array
const numbers = [1, 2, 3, 4, 5];
const firstNumber = getFirst(numbers);
console.log('First number:', firstNumber); // 1

// Test with string array
const strings = ['apple', 'banana', 'cherry'];
const firstString = getFirst(strings);
console.log('First string:', firstString); // "apple"

// Test with empty array
const empty: number[] = [];
const firstEmpty = getFirst(empty);
console.log('First of empty:', firstEmpty); // undefined

// TypeScript infers the return type
const num = getFirst([10, 20, 30]); // Type: number | undefined
const str = getFirst(['a', 'b', 'c']); // Type: string | undefined
```

**Verification:**
- Function works with different types
- TypeScript infers types correctly
- Handles empty arrays

**Hints:**
- `<T>` declares generic type parameter
- T can be any type
- TypeScript infers T from usage

**File:** `exercises/exercise-01.ts`

---

## Exercise 2: Generic Class

**Objective:** Create a generic Stack class.

**Instructions:**
Create `exercises/exercise-02.ts` with generic class `Stack<T>`.

**Expected Code Structure:**
```typescript
// exercises/exercise-02.ts
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

// Test with number stack
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log('Number stack size:', numberStack.size()); // 3
console.log('Popped:', numberStack.pop()); // 3

// Test with string stack
const stringStack = new Stack<string>();
stringStack.push('first');
stringStack.push('second');
console.log('String stack peek:', stringStack.peek()); // "second"
```

**Verification:**
- Stack works with different types
- Type safety maintained
- All methods work

**File:** `exercises/exercise-02.ts`

---

## Exercise 3: Generic Constraints

**Objective:** Use constraints to limit generic types.

**Instructions:**
Create `exercises/exercise-03.ts` with constrained generic function.

**Expected Code Structure:**
```typescript
// exercises/exercise-03.ts
/**
 * Gets length of value that has length property
 * T must extend { length: number }
 */
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

// Works with string
const strLength = getLength('hello');
console.log('String length:', strLength); // 5

// Works with array
const arrLength = getLength([1, 2, 3, 4]);
console.log('Array length:', arrLength); // 4

// Works with any object with length
const objLength = getLength({ length: 10, data: 'test' });
console.log('Object length:', objLength); // 10

// This would cause an error:
// getLength(42); // ❌ Error: number doesn't have length property
```

**Verification:**
- Constraint works correctly
- Only compatible types allowed
- Type safety enforced

**Hints:**
- `extends` constrains generic type
- Must satisfy constraint
- Enables access to constrained properties

**File:** `exercises/exercise-03.ts`

---

## Exercise 4: Utility Types - Partial

**Objective:** Use Partial utility type.

**Instructions:**
Create `exercises/exercise-04.ts` with Partial type usage.

**Expected Code Structure:**
```typescript
// exercises/exercise-04.ts
interface User {
  name: string;
  age: number;
  email: string;
}

/**
 * Updates user with partial data
 * All properties are optional
 */
function updateUser(user: User, updates: Partial<User>): User {
  return {
    ...user,
    ...updates, // Only update provided fields
  };
}

const user: User = {
  name: 'Alice',
  age: 25,
  email: 'alice@example.com',
};

// Update only name
const updated1 = updateUser(user, { name: 'Alice Updated' });
console.log('Updated user:', updated1);

// Update multiple fields
const updated2 = updateUser(user, { 
  age: 26, 
  email: 'newemail@example.com' 
});
console.log('Updated user 2:', updated2);

// Partial makes all properties optional
const partialUser: Partial<User> = {
  name: 'Bob',
  // age and email are optional
};
```

**Verification:**
- Partial makes all properties optional
- Can update subset of properties
- Type safety maintained

**File:** `exercises/exercise-04.ts`

---

## Exercise 5: Utility Types - Pick

**Objective:** Use Pick to select specific properties.

**Instructions:**
Create `exercises/exercise-05.ts` with Pick utility type.

**Expected Code Structure:**
```typescript
// exercises/exercise-05.ts
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}

// Pick only id and name
type ProductSummary = Pick<Product, 'id' | 'name'>;

function getProductSummary(product: Product): ProductSummary {
  return {
    id: product.id,
    name: product.name,
    // Can't include price, description, category
  };
}

const product: Product = {
  id: 1,
  name: 'Laptop',
  price: 999,
  description: 'Gaming laptop',
  category: 'Electronics',
};

const summary = getProductSummary(product);
console.log('Product summary:', summary);
// { id: 1, name: 'Laptop' }

// Can create objects of Pick type
const summaries: ProductSummary[] = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Mouse' },
];
```

**Verification:**
- Pick selects specified properties
- Type only includes picked properties
- Type safety enforced

**File:** `exercises/exercise-05.ts`

---

## Exercise 6: Utility Types - Omit

**Objective:** Use Omit to exclude properties.

**Instructions:**
Create `exercises/exercise-06.ts` with Omit utility type.

**Expected Code Structure:**
```typescript
// exercises/exercise-06.ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string; // Sensitive - should be omitted
  role: string;
}

// Omit password for safe user display
type SafeUser = Omit<User, 'password'>;

function getUserSafe(user: User): SafeUser {
  const { password, ...safeUser } = user;
  return safeUser;
}

const user: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  password: 'hashed_password',
  role: 'user',
};

const safeUser = getUserSafe(user);
console.log('Safe user:', safeUser);
// { id: 1, name: 'Alice', email: 'alice@example.com', role: 'user' }
// password is omitted

// Can create objects of Omit type
const safeUsers: SafeUser[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'user' },
  // password is not allowed here
];
```

**Verification:**
- Omit excludes specified properties
- Type doesn't include omitted properties
- Useful for security

**File:** `exercises/exercise-06.ts`

---

## Exercise 7: Record Type

**Objective:** Use Record for key-value mappings.

**Instructions:**
Create `exercises/exercise-07.ts` with Record type.

**Expected Code Structure:**
```typescript
// exercises/exercise-07.ts
// Record<Keys, Value> creates object type
type StudentScores = Record<string, number>;

const scores: StudentScores = {
  'Alice': 95,
  'Bob': 87,
  'Charlie': 92,
  'Diana': 88,
};

// Calculate average score
function calculateAverage(scores: StudentScores): number {
  const values = Object.values(scores);
  if (values.length === 0) return 0;
  
  const sum = values.reduce((acc, score) => acc + score, 0);
  return sum / values.length;
}

const average = calculateAverage(scores);
console.log('Average score:', average.toFixed(2)); // 90.50

// Record with specific keys
type Status = 'pending' | 'approved' | 'rejected';
type StatusConfig = Record<Status, { color: string; icon: string }>;

const statusConfig: StatusConfig = {
  pending: { color: 'yellow', icon: '⏳' },
  approved: { color: 'green', icon: '✅' },
  rejected: { color: 'red', icon: '❌' },
};
```

**Verification:**
- Record creates key-value type
- Works with string keys
- Can use with union types

**File:** `exercises/exercise-07.ts`

---

## Exercise 8: Conditional Types

**Objective:** Create and use conditional types.

**Instructions:**
Create `exercises/exercise-08.ts` with conditional types.

**Expected Code Structure:**
```typescript
// exercises/exercise-08.ts
// Conditional type: if T extends null | undefined, return never, else return T
type NonNullable<T> = T extends null | undefined ? never : T;

// Test the type
type Test1 = NonNullable<string>; // string
type Test2 = NonNullable<string | null>; // string
type Test3 = NonNullable<number | undefined>; // number
type Test4 = NonNullable<null>; // never

// Function using conditional type
function processValue<T>(value: NonNullable<T>): void {
  console.log('Processing:', value);
}

processValue('hello'); // ✅ OK
processValue(42); // ✅ OK
// processValue(null); // ❌ Error
// processValue(undefined); // ❌ Error

// More complex conditional type
type ArrayElementType<T> = T extends (infer U)[] ? U : never;

type StringArrayElement = ArrayElementType<string[]>; // string
type NumberArrayElement = ArrayElementType<number[]>; // number
type NotArray = ArrayElementType<string>; // never
```

**Verification:**
- Conditional types work
- Type inference works
- Type narrowing occurs

**Hints:**
- `extends` checks type compatibility
- `?` and `:` work like ternary
- `infer` extracts types
- `never` excludes types

**File:** `exercises/exercise-08.ts`

---

## Exercise 9: Mapped Types

**Objective:** Create mapped types.

**Instructions:**
Create `exercises/exercise-09.ts` with mapped types.

**Expected Code Structure:**
```typescript
// exercises/exercise-09.ts
interface Config {
  apiKey: string;
  timeout: number;
  retries: number;
}

// Mapped type: make all properties readonly
type ReadonlyConfig = {
  readonly [K in keyof Config]: Config[K];
};

// Create readonly config
const readonlyConfig: ReadonlyConfig = {
  apiKey: 'secret-key',
  timeout: 5000,
  retries: 3,
};

// This would cause an error:
// readonlyConfig.apiKey = 'new-key'; // ❌ Error: Cannot assign

// Mapped type: make all properties optional
type OptionalConfig = {
  [K in keyof Config]?: Config[K];
};

const optionalConfig: OptionalConfig = {
  apiKey: 'key',
  // timeout and retries are optional
};

// Mapped type: make all properties nullable
type NullableConfig = {
  [K in keyof Config]: Config[K] | null;
};

const nullableConfig: NullableConfig = {
  apiKey: 'key',
  timeout: null, // Can be null
  retries: 3,
};
```

**Verification:**
- Mapped types transform properties
- Readonly works
- Optional works
- Type safety maintained

**Hints:**
- `[K in keyof T]` iterates properties
- Can transform each property
- Useful for utility types

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

- [X] Generic functions work with multiple types
- [X] Generic classes are reusable
- [X] Constraints limit types appropriately
- [X] Utility types work correctly
- [X] Conditional types narrow types
- [X] Mapped types transform properties
- [X] All code is type-safe

## Troubleshooting

### Issue: Generic type not inferred

**Solution:**
- Provide explicit type parameter
- Check type constraints
- Verify usage matches declaration

### Issue: Utility type not working

**Solution:**
- Check syntax
- Verify source type exists
- Ensure properties match

## Next Steps

1. ✅ **Review**: Understand generics and advanced types
2. ✅ **Experiment**: Create more complex types
3. 📖 **Continue**: Move to [Level 7: Modules and Namespaces](../level-07-modules-and-namespaces/lesson-01-modules.md)
4. 💻 **Complete**: Work through all exercises

---

**Key Takeaways:**
- Generics enable reusable, type-safe code
- Constraints limit generic types
- Utility types transform existing types
- Conditional types enable type logic
- Mapped types transform object properties
- Advanced types enable powerful patterns

**Good luck! Happy coding! 🚀**
