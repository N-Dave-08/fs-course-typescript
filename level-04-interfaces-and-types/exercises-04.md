# Exercises 04: Interfaces and Types

## Learning Objectives

By completing these exercises, you will:
- ✅ Define and use interfaces
- ✅ Work with optional and required properties
- ✅ Extend interfaces
- ✅ Use type aliases
- ✅ Understand union and intersection types
- ✅ Create discriminated unions
- ✅ Define function types

## Before You Start

**Prerequisites:**
- TypeScript fundamentals
- Understanding of objects and arrays
- Completed previous levels

**Setup:**
1. Navigate to `level-04-interfaces-and-types/`
2. Create `exercises/` directory
3. Work on each exercise file

---

## Exercise 1: Basic Interface

**Objective:** Create and use a basic interface.

**Instructions:**
Create `exercises/exercise-01.ts` with an interface `Book` that has:
1. `title: string`
2. `author: string`
3. `pages: number`
4. Create a book object and print its properties

**Expected Code Structure:**
```typescript
// exercises/exercise-01.ts
interface Book {
  title: string;
  author: string;
  pages: number;
}

// Create book object
const book: Book = {
  title: "TypeScript Deep Dive",
  author: "Basarat Ali Syed",
  pages: 500,
};

// Print properties
console.log('Book Title:', book.title);
console.log('Book Author:', book.author);
console.log('Book Pages:', book.pages);
console.log('Full Book:', book);
```

**Verification:**
- Interface defines structure
- Object matches interface
- All properties accessible
- TypeScript provides autocomplete

**Hints:**
- Interfaces define object shapes
- Objects must match interface exactly
- Properties are type-checked

**File:** `exercises/exercise-01.ts`

---

## Exercise 2: Optional Properties

**Objective:** Use optional properties in interfaces.

**Instructions:**
Create `exercises/exercise-02.ts` with interface `User`:
1. `name: string` (required)
2. `email: string` (required)
3. `age?: number` (optional)
4. Create users with and without age

**Expected Code Structure:**
```typescript
// exercises/exercise-02.ts
interface User {
  name: string;
  email: string;
  age?: number; // Optional property
}

// User with age
const userWithAge: User = {
  name: "Alice",
  email: "alice@example.com",
  age: 25,
};

// User without age
const userWithoutAge: User = {
  name: "Bob",
  email: "bob@example.com",
  // age is optional, so we can omit it
};

console.log('User with age:', userWithAge);
console.log('User without age:', userWithoutAge);

// Check if age exists
if (userWithAge.age !== undefined) {
  console.log(`${userWithAge.name} is ${userWithAge.age} years old`);
}
```

**Verification:**
- Can create users with age
- Can create users without age
- Optional property works correctly

**Hints:**
- Use `?` for optional properties
- Check for undefined before using
- Optional properties can be omitted

**File:** `exercises/exercise-02.ts`

---

## Exercise 3: Extending Interfaces

**Objective:** Extend interfaces to create specialized types.

**Instructions:**
Create `exercises/exercise-03.ts` with:
1. Interface `Animal` with `name: string`
2. Interface `Dog` extends `Animal` with `breed: string`
3. Create a dog object

**Expected Code Structure:**
```typescript
// exercises/exercise-03.ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

// Dog has both name (from Animal) and breed
const dog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever",
};

console.log('Dog name:', dog.name);
console.log('Dog breed:', dog.breed);

// Can also use as Animal
const animal: Animal = dog;
console.log('As animal:', animal.name);
```

**Verification:**
- Dog has both properties
- Inheritance works
- Can use as base type

**Hints:**
- `extends` inherits all properties
- Can extend multiple interfaces
- Child must include parent properties

**File:** `exercises/exercise-03.ts`

---

## Exercise 4: Type Aliases

**Objective:** Create and use type aliases.

**Instructions:**
Create `exercises/exercise-04.ts` with type aliases:
1. `UserId = string | number`
2. `Status = "active" | "inactive"`
3. Create variables using these types

**Expected Code Structure:**
```typescript
// exercises/exercise-04.ts
// Type alias for union type
type UserId = string | number;

// Type alias for literal union
type Status = "active" | "inactive";

// Use type aliases
const userId1: UserId = "user-123";
const userId2: UserId = 456;
// const userId3: UserId = true; // ❌ Error

const status1: Status = "active";
const status2: Status = "inactive";
// const status3: Status = "pending"; // ❌ Error

console.log('User IDs:', userId1, userId2);
console.log('Statuses:', status1, status2);
```

**Verification:**
- Type aliases work correctly
- Union types accept multiple types
- Literal unions restrict values

**Hints:**
- `type` creates type alias
- Union: `A | B` means A or B
- Literal union: specific string values

**File:** `exercises/exercise-04.ts`

---

## Exercise 5: Union Types

**Objective:** Use union types in functions.

**Instructions:**
Create `exercises/exercise-05.ts` with function `processValue`:
1. Takes parameter `value: string | number`
2. If string, return uppercase
3. If number, return squared
4. Test with both types

**Expected Code Structure:**
```typescript
// exercises/exercise-05.ts
function processValue(value: string | number): string | number {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value * value;
  }
}

// Test with string
const result1 = processValue("hello");
console.log('String result:', result1); // "HELLO"

// Test with number
const result2 = processValue(5);
console.log('Number result:', result2); // 25
```

**Verification:**
- Function handles both types
- Type narrowing works
- Correct results for each type

**File:** `exercises/exercise-05.ts`

---

## Exercise 6: Intersection Types

**Objective:** Combine types with intersection.

**Instructions:**
Create `exercises/exercise-06.ts` with:
1. Type `HasName = { name: string }`
2. Type `HasAge = { age: number }`
3. Type `Person = HasName & HasAge`
4. Create a person object

**Expected Code Structure:**
```typescript
// exercises/exercise-06.ts
type HasName = {
  name: string;
};

type HasAge = {
  age: number;
};

// Intersection: must have both
type Person = HasName & HasAge;

const person: Person = {
  name: "Alice",
  age: 25,
  // Must have both name and age
};

console.log('Person:', person);
```

**Verification:**
- Intersection requires all properties
- Type combines correctly
- Object must satisfy all types

**Hints:**
- `&` combines types (AND)
- `|` is union (OR)
- Intersection = must have all

**File:** `exercises/exercise-06.ts`

---

## Exercise 7: Discriminated Union

**Objective:** Create and use discriminated unions.

**Instructions:**
Create `exercises/exercise-07.ts` with discriminated union and handler function.

**Expected Code Structure:**
```typescript
// exercises/exercise-07.ts
type Success = {
  status: "success";
  data: string;
};

type Failure = {
  status: "error";
  message: string;
};

type Result = Success | Failure;

function handleResult(result: Result): void {
  // TypeScript narrows based on status
  if (result.status === "success") {
    console.log('Success! Data:', result.data);
    // TypeScript knows result is Success here
  } else {
    console.error('Error! Message:', result.message);
    // TypeScript knows result is Failure here
  }
}

// Test both cases
handleResult({ status: "success", data: "Operation completed" });
handleResult({ status: "error", message: "Something went wrong" });
```

**Verification:**
- Discriminated union works
- Type narrowing based on status
- Both cases handled

**Hints:**
- Common property (`status`) discriminates
- TypeScript narrows based on value
- Useful for error handling

**File:** `exercises/exercise-07.ts`

---

## Exercise 8: Complex Types

**Objective:** Work with complex type combinations.

**Instructions:**
Create `exercises/exercise-08.ts` with interface `Product` and operations.

**Expected Code Structure:**
```typescript
// exercises/exercise-08.ts
interface Product {
  id: string | number;
  name: string;
  price: number;
  inStock?: boolean;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: "2", name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75, inStock: false },
];

// Filter by price > 50
const expensiveProducts = products.filter(p => p.price > 50);
console.log('Products > $50:', expensiveProducts);

// Filter in stock
const inStockProducts = products.filter(p => p.inStock === true);
console.log('In stock products:', inStockProducts);
```

**Verification:**
- Union types in properties work
- Optional properties work
- Array operations work

**File:** `exercises/exercise-08.ts`

---

## Exercise 9: Function Type Aliases

**Objective:** Define and use function types.

**Instructions:**
Create `exercises/exercise-09.ts` with function type aliases.

**Expected Code Structure:**
```typescript
// exercises/exercise-09.ts
type Calculator = (a: number, b: number) => number;

const add: Calculator = (a, b) => a + b;
const subtract: Calculator = (a, b) => a - b;
const multiply: Calculator = (a, b) => a * b;

function executeOperation(
  operation: Calculator,
  a: number,
  b: number
): number {
  return operation(a, b);
}

// Test all operations
console.log('10 + 5 =', executeOperation(add, 10, 5)); // 15
console.log('10 - 5 =', executeOperation(subtract, 10, 5)); // 5
console.log('10 * 5 =', executeOperation(multiply, 10, 5)); // 50
```

**Verification:**
- Function types work
- Can pass functions as parameters
- Type safety maintained

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

- [X] Interfaces define object shapes
- [X] Optional properties work
- [X] Interface extension works
- [X] Type aliases work
- [X] Union types work
- [X] Intersection types work
- [X] Discriminated unions work
- [X] Function types work

## Troubleshooting

### Issue: Property does not exist

**Solution:**
- Check interface definition
- Verify property names
- Check for typos

### Issue: Type not assignable

**Solution:**
- Check type compatibility
- Verify union/intersection logic
- Ensure all required properties

## Next Steps

1. ✅ **Review**: Understand interfaces and types
2. ✅ **Experiment**: Create more complex types
3. 📖 **Continue**: Move to [Level 5: Classes and OOP](../level-05-classes-and-oop/lesson-01-classes.md)
4. 💻 **Complete**: Work through all exercises

---

**Key Takeaways:**
- Interfaces define object contracts
- Optional properties use `?`
- Interfaces can extend other interfaces
- Type aliases create reusable types
- Union types: `A | B` (either)
- Intersection types: `A & B` (both)
- Discriminated unions enable type narrowing

**Good luck! Happy coding! 🚀**
