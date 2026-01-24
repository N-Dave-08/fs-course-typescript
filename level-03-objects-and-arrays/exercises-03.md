# Exercises 03: Objects and Arrays

## Learning Objectives

By completing these exercises, you will:
- ✅ Create and manipulate objects
- ✅ Work with arrays and array methods
- ✅ Use TypeScript types for objects and arrays
- ✅ Understand tuple types
- ✅ Work with nested objects and arrays
- ✅ Chain array methods
- ✅ Practice object methods

## Before You Start

**Prerequisites:**
- TypeScript fundamentals (Level 1)
- Functions and control flow (Level 2)
- Understanding of basic types

**Setup:**
1. Navigate to `level-03-objects-and-arrays/`
2. Create `exercises/` directory
3. Work on each exercise file in this folder

---

## Exercise 1: Object Creation

**Objective:** Create typed objects and access properties.

**Instructions:**
Create `exercises/exercise-01.ts` with an object `book` that has:
1. `title` (string)
2. `author` (string)
3. `year` (number)
4. `isAvailable` (boolean)
5. Print all properties

**Expected Code Structure:**
```typescript
// exercises/exercise-01.ts
interface Book {
  title: string;
  author: string;
  year: number;
  isAvailable: boolean;
}

// Create book object
const book: Book = {
  title: "TypeScript Handbook",
  author: "Microsoft",
  year: 2024,
  isAvailable: true,
};

// Print all properties
console.log('Book Title:', book.title);
console.log('Book Author:', book.author);
console.log('Book Year:', book.year);
console.log('Is Available:', book.isAvailable);

// Print entire object
console.log('Full Book Object:', book);
```

**Verification:**
- Run: `npx ts-node exercises/exercise-01.ts`
- All properties should print correctly
- TypeScript should provide autocomplete

**Hints:**
- Define interface for type safety
- Use object literal syntax
- Access properties with dot notation

**Common Mistakes:**
- ❌ Not defining interface
- ❌ Wrong property types
- ❌ Missing properties

**File:** `exercises/exercise-01.ts`

---

## Exercise 2: Array Operations

**Objective:** Practice basic array operations.

**Instructions:**
Create `exercises/exercise-02.ts` that:
1. Creates an array of numbers [1, 2, 3, 4, 5]
2. Adds 6 to the end using `push()`
3. Adds 0 to the beginning using `unshift()`
4. Removes the last element using `pop()`
5. Prints the final array

**Expected Code Structure:**
```typescript
// exercises/exercise-02.ts
const numbers: number[] = [1, 2, 3, 4, 5];

console.log('Original array:', numbers);

// Add to end
numbers.push(6);
console.log('After push(6):', numbers); // [1, 2, 3, 4, 5, 6]

// Add to beginning
numbers.unshift(0);
console.log('After unshift(0):', numbers); // [0, 1, 2, 3, 4, 5, 6]

// Remove last element
const lastElement = numbers.pop();
console.log('Removed element:', lastElement); // 6
console.log('After pop():', numbers); // [0, 1, 2, 3, 4, 5]

// Remove first element (bonus)
const firstElement = numbers.shift();
console.log('Removed first element:', firstElement); // 0
console.log('After shift():', numbers); // [1, 2, 3, 4, 5]
```

**Verification:**
- Array operations work correctly
- Elements added/removed as expected
- Final array is correct

**Hints:**
- `push()` adds to end
- `unshift()` adds to beginning
- `pop()` removes from end
- `shift()` removes from beginning

**Common Mistakes:**
- ❌ Not understanding mutating vs non-mutating methods
- ❌ Wrong method for operation
- ❌ Not checking return values

**File:** `exercises/exercise-02.ts`

---

## Exercise 3: Array Methods

**Objective:** Use map, filter, and reduce methods.

**Instructions:**
Create `exercises/exercise-03.ts` with an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
1. Use `map` to create array of squares
2. Use `filter` to get numbers > 5
3. Use `reduce` to calculate sum
4. Print all results

**Expected Code Structure:**
```typescript
// exercises/exercise-03.ts
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Map to squares
const squares = numbers.map(num => num * num);
console.log('Squares:', squares);
// [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// 2. Filter numbers > 5
const greaterThanFive = numbers.filter(num => num > 5);
console.log('Numbers > 5:', greaterThanFive);
// [6, 7, 8, 9, 10]

// 3. Reduce to sum
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum:', sum); // 55

// 4. Combine operations
const result = numbers
  .filter(num => num > 5)
  .map(num => num * num)
  .reduce((acc, curr) => acc + curr, 0);
console.log('Sum of squares of numbers > 5:', result); // 330
```

**Verification:**
- Map creates new array correctly
- Filter returns correct subset
- Reduce calculates sum correctly
- Chained operations work

**Hints:**
- `map` transforms each element
- `filter` keeps matching elements
- `reduce` accumulates a value
- Methods can be chained

**Common Mistakes:**
- ❌ Not understanding return values
- ❌ Wrong reduce accumulator logic
- ❌ Forgetting initial value in reduce

**File:** `exercises/exercise-03.ts`

---

## Exercise 4: Object Arrays

**Objective:** Work with arrays of objects.

**Instructions:**
Create `exercises/exercise-04.ts` with an array of person objects and:
1. Find person with age > 25
2. Map to array of names
3. Filter people with age >= 25
4. Calculate average age

**Expected Code Structure:**
```typescript
// exercises/exercise-04.ts
interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
];

// 1. Find person with age > 25
const personOver25 = people.find(person => person.age > 25);
console.log('Person with age > 25:', personOver25);
// { name: "Bob", age: 30 }

// 2. Map to array of names
const names = people.map(person => person.name);
console.log('Names:', names);
// ["Alice", "Bob", "Charlie"]

// 3. Filter people with age >= 25
const adults = people.filter(person => person.age >= 25);
console.log('Adults (age >= 25):', adults);
// [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]

// 4. Calculate average age
const totalAge = people.reduce((sum, person) => sum + person.age, 0);
const averageAge = totalAge / people.length;
console.log('Average age:', averageAge); // 25
```

**Verification:**
- Find returns correct person
- Map creates names array
- Filter returns correct subset
- Average calculated correctly

**Hints:**
- `find()` returns first match or undefined
- `map()` transforms to new array
- `filter()` returns matching elements
- `reduce()` for aggregations

**Common Mistakes:**
- ❌ Using `find()` when `filter()` is needed
- ❌ Wrong property access
- ❌ Division by zero in average

**File:** `exercises/exercise-04.ts`

---

## Exercise 5: Tuple Types

**Objective:** Understand and use tuple types.

**Instructions:**
Create `exercises/exercise-05.ts` with:
1. A tuple `coordinates: [number, number]` representing (x, y)
2. A tuple `personInfo: [string, number, boolean]` for (name, age, isActive)
3. Destructure both tuples
4. Print the values

**Expected Code Structure:**
```typescript
// exercises/exercise-05.ts
// Tuple: fixed-length array with specific types
const coordinates: [number, number] = [10, 20];

// Destructure tuple
const [x, y] = coordinates;
console.log('X coordinate:', x); // 10
console.log('Y coordinate:', y); // 20

// Person info tuple
const personInfo: [string, number, boolean] = ["Alice", 25, true];

// Destructure
const [name, age, isActive] = personInfo;
console.log('Name:', name); // "Alice"
console.log('Age:', age); // 25
console.log('Is Active:', isActive); // true

// Access by index
console.log('First element:', coordinates[0]); // 10
console.log('Second element:', coordinates[1]); // 20
```

**Verification:**
- Tuples have correct types
- Destructuring works
- Can access by index

**Hints:**
- Tuples have fixed length
- Types are position-specific
- Destructuring extracts values
- Useful for returning multiple values

**Common Mistakes:**
- ❌ Confusing tuples with arrays
- ❌ Wrong order in destructuring
- ❌ Accessing wrong index

**File:** `exercises/exercise-05.ts`

---

## Exercise 6: Nested Objects

**Objective:** Work with nested object structures.

**Instructions:**
Create `exercises/exercise-06.ts` with a `user` object containing:
1. `name` (string)
2. `address` object with `street` and `city`
3. `contacts` array of phone numbers (strings)
4. Access and print nested properties

**Expected Code Structure:**
```typescript
// exercises/exercise-06.ts
interface Address {
  street: string;
  city: string;
}

interface User {
  name: string;
  address: Address;
  contacts: string[];
}

const user: User = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "New York",
  },
  contacts: ["555-0100", "555-0101"],
};

// Access nested properties
console.log('User Name:', user.name);
console.log('Street:', user.address.street);
console.log('City:', user.address.city);
console.log('Contacts:', user.contacts);

// Access array elements
console.log('First Contact:', user.contacts[0]);
console.log('Contact Count:', user.contacts.length);
```

**Verification:**
- Nested properties accessible
- Array access works
- Types are correct

**Hints:**
- Use dot notation for nested access
- Define interfaces for nested structures
- Arrays accessed with brackets

**Common Mistakes:**
- ❌ Wrong nesting level
- ❌ Not defining nested interfaces
- ❌ Array index out of bounds

**File:** `exercises/exercise-06.ts`

---

## Exercise 7: Array of Objects

**Objective:** Process arrays of objects with various operations.

**Instructions:**
Create `exercises/exercise-07.ts` with an array of products and:
1. Find product with id === 2
2. Map to array of prices
3. Filter products with price > 50
4. Calculate total price using reduce

**Expected Code Structure:**
```typescript
// exercises/exercise-07.ts
interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75 },
];

// 1. Find product with id === 2
const product = products.find(p => p.id === 2);
console.log('Product with id 2:', product);
// { id: 2, name: "Mouse", price: 25 }

// 2. Map to array of prices
const prices = products.map(p => p.price);
console.log('Prices:', prices);
// [999, 25, 75]

// 3. Filter products with price > 50
const expensiveProducts = products.filter(p => p.price > 50);
console.log('Products > $50:', expensiveProducts);
// [{ id: 1, name: "Laptop", price: 999 }, { id: 3, name: "Keyboard", price: 75 }]

// 4. Calculate total price
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log('Total Price:', totalPrice); // 1099
```

**Verification:**
- Find works correctly
- Map extracts prices
- Filter returns correct products
- Total calculated correctly

**File:** `exercises/exercise-07.ts`

---

## Exercise 8: Complex Array Operations

**Objective:** Chain multiple array methods together.

**Instructions:**
Create `exercises/exercise-08.ts` with numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
1. Filter even numbers
2. Map to their squares
3. Reduce to sum
4. Chain all operations in one expression

**Expected Code Structure:**
```typescript
// exercises/exercise-08.ts
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Step by step
const evens = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evens); // [2, 4, 6, 8, 10]

const squares = evens.map(num => num * num);
console.log('Squares:', squares); // [4, 16, 36, 64, 100]

const sum = squares.reduce((acc, curr) => acc + curr, 0);
console.log('Sum:', sum); // 220

// Chained in one expression
const result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * num)
  .reduce((acc, curr) => acc + curr, 0);

console.log('Chained result:', result); // 220
```

**Verification:**
- Each step works correctly
- Chained expression produces same result
- Operations are in correct order

**Hints:**
- Methods execute left to right
- Each method returns new array (except reduce)
- Can chain as many as needed

**File:** `exercises/exercise-08.ts`

---

## Exercise 9: Object Methods

**Objective:** Create objects with methods.

**Instructions:**
Create `exercises/exercise-09.ts` with an object `calculator` that has methods for basic operations.

**Expected Code Structure:**
```typescript
// exercises/exercise-09.ts
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  multiply(a: number, b: number): number;
  divide(a: number, b: number): number;
}

const calculator: Calculator = {
  add(a: number, b: number): number {
    return a + b;
  },
  subtract(a: number, b: number): number {
    return a - b;
  },
  multiply(a: number, b: number): number {
    return a * b;
  },
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  },
};

// Test all methods
console.log('10 + 5 =', calculator.add(10, 5)); // 15
console.log('10 - 5 =', calculator.subtract(10, 5)); // 5
console.log('10 * 5 =', calculator.multiply(10, 5)); // 50
console.log('10 / 5 =', calculator.divide(10, 5)); // 2
```

**Verification:**
- All methods work correctly
- Types are correct
- Error handling works

**File:** `exercises/exercise-09.ts`

---

## Exercise 10: Array Transformations

**Objective:** Transform array of objects to array of strings.

**Instructions:**
Create `exercises/exercise-10.ts` that transforms the data array into formatted strings.

**Expected Code Structure:**
```typescript
// exercises/exercise-10.ts
interface ScoreData {
  name: string;
  score: number;
}

const data: ScoreData[] = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
];

// Transform to array of strings
const formatted = data.map(item => `${item.name}: ${item.score}`);
console.log('Formatted:', formatted);
// ["Alice: 85", "Bob: 92", "Charlie: 78"]

// Alternative: More detailed format
const detailed = data.map(item => 
  `${item.name} scored ${item.score} points`
);
console.log('Detailed:', detailed);
```

**Verification:**
- Transformation works correctly
- Strings formatted properly
- Original array unchanged

**File:** `exercises/exercise-10.ts`

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

- [ ] Objects created with proper types
- [ ] Array operations work correctly
- [ ] Array methods (map, filter, reduce) work
- [ ] Nested objects accessible
- [ ] Tuples used correctly
- [ ] Object methods work
- [ ] Array transformations work
- [ ] All code is type-safe

## Troubleshooting

### Issue: Property does not exist

**Solution:**
- Check interface definition
- Verify property names match
- Check for typos

### Issue: Array method not working

**Solution:**
- Ensure array is not empty
- Check method syntax
- Verify return values

## Next Steps

1. ✅ **Review**: Understand objects and arrays
2. ✅ **Experiment**: Create more complex structures
3. 📖 **Continue**: Move to [Level 4: Interfaces and Types](../level-04-interfaces-and-types/lesson-01-interfaces.md)
4. 💻 **Complete**: Work through all exercises

---

**Key Takeaways:**
- Objects store key-value pairs with types
- Arrays are typed collections
- Array methods (map, filter, reduce) are powerful
- Methods can be chained
- Nested structures need proper typing
- Tuples have fixed length and types

**Good luck! Happy coding! 🚀**
