# Exercises 08: Advanced Patterns

## Learning Objectives

By completing these exercises, you will:
- ✅ Use type guards for type narrowing
- ✅ Create custom type guards
- ✅ Work with Promises
- ✅ Use async/await patterns
- ✅ Handle errors in async code
- ✅ Use Promise.all for parallel operations
- ✅ Practice advanced TypeScript patterns

## Before You Start

**Prerequisites:**
- All previous TypeScript levels
- Understanding of types and functions
- Knowledge of async operations

**Setup:**
1. Navigate to `level-08-advanced-patterns/`
2. Create `exercises/` directory
3. Work on each exercise file

---

## Exercise 1: Type Guards

**Objective:** Use type guards to narrow types.

**Instructions:**
Create `exercises/exercise-01.ts` with function `processValue`:
1. Takes `value: string | number`
2. Uses type guard to check type
3. If string, return uppercase
4. If number, return squared

**Expected Code Structure:**
```typescript
// exercises/exercise-01.ts
function processValue(value: string | number): string | number {
  // Type guard: typeof check
  if (typeof value === 'string') {
    // TypeScript knows value is string here
    return value.toUpperCase();
  } else {
    // TypeScript knows value is number here
    return value * value;
  }
}

// Test with both types
const result1 = processValue('hello');
console.log('String result:', result1); // "HELLO"

const result2 = processValue(5);
console.log('Number result:', result2); // 25
```

**Verification:**
- Type guards work
- Type narrowing occurs
- Correct results for each type

**File:** `exercises/exercise-01.ts`

---

## Exercise 2: Custom Type Guard

**Objective:** Create custom type guard function.

**Instructions:**
Create `exercises/exercise-02.ts` with custom type guard.

**Expected Code Structure:**
```typescript
// exercises/exercise-02.ts
interface Dog {
  bark(): void;
  breed: string;
}

interface Cat {
  meow(): void;
  color: string;
}

// Custom type guard
function isDog(animal: Dog | Cat): animal is Dog {
  return 'bark' in animal;
}

function makeSound(animal: Dog | Cat): void {
  if (isDog(animal)) {
    // TypeScript knows animal is Dog
    animal.bark();
    console.log('Breed:', animal.breed);
  } else {
    // TypeScript knows animal is Cat
    animal.meow();
    console.log('Color:', animal.color);
  }
}

// Test
const dog: Dog = {
  bark: () => console.log('Woof!'),
  breed: 'Golden Retriever',
};

const cat: Cat = {
  meow: () => console.log('Meow!'),
  color: 'orange',
};

makeSound(dog);
makeSound(cat);
```

**Verification:**
- Custom type guard works
- Type narrowing works
- Can access type-specific properties

**File:** `exercises/exercise-02.ts`

---

## Exercise 3: Promises

**Objective:** Work with Promises.

**Instructions:**
Create `exercises/exercise-03.ts` with Promise-based functions.

**Expected Code Structure:**
```typescript
// exercises/exercise-03.ts
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data loaded successfully');
    }, 1000);
  });
}

// Use .then()
fetchData()
  .then((data) => {
    console.log('Data:', data);
    return delay(500);
  })
  .then(() => {
    console.log('Delay completed');
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

**Verification:**
- Promises work correctly
- Chaining works
- Error handling works

**File:** `exercises/exercise-03.ts`

---

## Exercise 4: Async/Await

**Objective:** Use async/await syntax.

**Instructions:**
Create `exercises/exercise-04.ts` with async functions.

**Expected Code Structure:**
```typescript
// exercises/exercise-04.ts
interface User {
  id: number;
  name: string;
  email: string;
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loadUser(id: number): Promise<User> {
  await delay(500); // Simulate API call
  return {
    id,
    name: `User ${id}`,
    email: `user${id}@example.com`,
  };
}

async function main() {
  try {
    const user = await loadUser(1);
    console.log('Loaded user:', user);
  } catch (error) {
    console.error('Error loading user:', error);
  }
}

main();
```

**Verification:**
- Async/await works
- Error handling works
- Code is cleaner than promises

**File:** `exercises/exercise-04.ts`

---

## Exercise 5: Error Handling

**Objective:** Handle errors in async code.

**Instructions:**
Create `exercises/exercise-05.ts` with error handling.

**Expected Code Structure:**
```typescript
// exercises/exercise-05.ts
async function riskyOperation(success: boolean): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  
  if (!success) {
    throw new Error('Operation failed');
  }
  
  return 'Operation succeeded';
}

async function testOperation() {
  // Test success case
  try {
    const result = await riskyOperation(true);
    console.log('Success:', result);
  } catch (error) {
    console.error('Unexpected error:', error);
  }

  // Test error case
  try {
    await riskyOperation(false);
  } catch (error) {
    console.log('Caught error:', (error as Error).message);
  }
}

testOperation();
```

**Verification:**
- Errors caught correctly
- Success cases work
- Error messages clear

**File:** `exercises/exercise-05.ts`

---

## Exercise 6: Promise.all

**Objective:** Use Promise.all for parallel operations.

**Instructions:**
Create `exercises/exercise-06.ts` with Promise.all.

**Expected Code Structure:**
```typescript
// exercises/exercise-06.ts
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchUser(id: number): Promise<{ id: number; name: string }> {
  await delay(500);
  return { id, name: `User ${id}` };
}

async function fetchPosts(userId: number): Promise<Array<{ id: number; title: string }>> {
  await delay(300);
  return [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
  ];
}

async function loadUserData(userId: number) {
  // Fetch both in parallel
  const [user, posts] = await Promise.all([
    fetchUser(userId),
    fetchPosts(userId),
  ]);

  console.log('User:', user);
  console.log('Posts:', posts);
  console.log('Total time: ~500ms (parallel, not sequential)');
}

loadUserData(1);
```

**Verification:**
- Promise.all works
- Operations run in parallel
- Faster than sequential

**File:** `exercises/exercise-06.ts`

---

## Exercise 7: Type Narrowing

**Objective:** Use `in` operator for type narrowing.

**Instructions:**
Create `exercises/exercise-07.ts` with `in` operator.

**Expected Code Structure:**
```typescript
// exercises/exercise-07.ts
interface Circle {
  kind: 'circle';
  radius: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

type Shape = Circle | Rectangle;

function getArea(shape: Shape): number {
  // Use 'in' operator for type narrowing
  if ('radius' in shape) {
    // TypeScript knows shape is Circle
    return Math.PI * shape.radius * shape.radius;
  } else {
    // TypeScript knows shape is Rectangle
    return shape.width * shape.height;
  }
}

// Test
const circle: Circle = { kind: 'circle', radius: 5 };
const rectangle: Rectangle = { kind: 'rectangle', width: 10, height: 5 };

console.log('Circle area:', getArea(circle).toFixed(2)); // 78.54
console.log('Rectangle area:', getArea(rectangle)); // 50
```

**Verification:**
- `in` operator works
- Type narrowing occurs
- Can access type-specific properties

**File:** `exercises/exercise-07.ts`

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

- [ ] Type guards work correctly
- [ ] Custom type guards work
- [ ] Promises work
- [ ] Async/await works
- [ ] Error handling works
- [ ] Promise.all works
- [ ] Type narrowing works
- [ ] All code is type-safe

## Troubleshooting

### Issue: Type narrowing not working

**Solution:**
- Check type guard syntax
- Verify `is` return type
- Check TypeScript version

### Issue: Promise errors

**Solution:**
- Always use try/catch
- Handle rejections
- Check async/await usage

## Next Steps

1. ✅ **Review**: Understand advanced patterns
2. ✅ **Experiment**: Create more patterns
3. 📖 **Complete**: Review all TypeScript levels
4. 💻 **Practice**: Build projects using these patterns

---

**Key Takeaways:**
- Type guards narrow union types
- Custom type guards use `is` return type
- Promises handle async operations
- Async/await simplifies promise code
- Always handle errors
- Promise.all runs operations in parallel
- `in` operator checks property existence

**Good luck! Happy coding! 🚀**
