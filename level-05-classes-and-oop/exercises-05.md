# Exercises 05: Classes and OOP

## Learning Objectives

By completing these exercises, you will:
- ✅ Create TypeScript classes
- ✅ Use constructors and methods
- ✅ Understand inheritance
- ✅ Work with access modifiers
- ✅ Use getters and setters
- ✅ Practice OOP principles

## Before You Start

**Prerequisites:**
- TypeScript fundamentals
- Understanding of objects
- Interfaces and types knowledge

**Setup:**
1. Navigate to `level-05-classes-and-oop/`
2. Create `exercises/` directory
3. Work on each exercise file

---

## Exercise 1: Basic Class

**Objective:** Create your first TypeScript class.

**Instructions:**
Create `exercises/exercise-01.ts` with class `Rectangle`:
1. Properties: `width`, `height` (both numbers)
2. Constructor takes width and height
3. Method `area()` returns area
4. Method `perimeter()` returns perimeter
5. Create instance and test methods

**Expected Code Structure:**
```typescript
// exercises/exercise-01.ts
class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

// Create instance
const rect = new Rectangle(10, 5);

// Test methods
console.log('Width:', rect.width);
console.log('Height:', rect.height);
console.log('Area:', rect.area()); // 50
console.log('Perimeter:', rect.perimeter()); // 30
```

**Verification:**
- Class creates instances correctly
- Methods work as expected
- Properties accessible

**Hints:**
- Use `class` keyword
- Constructor initializes properties
- Methods use `this` to access properties

**File:** `exercises/exercise-01.ts`

---

## Exercise 2: Class with Methods

**Objective:** Create a class with multiple methods.

**Instructions:**
Create `exercises/exercise-02.ts` with class `Calculator` and test all operations.

**Expected Code Structure:**
```typescript
// exercises/exercise-02.ts
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }
}

// Test all operations
const calc = new Calculator();

console.log('10 + 5 =', calc.add(10, 5)); // 15
console.log('10 - 5 =', calc.subtract(10, 5)); // 5
console.log('10 * 5 =', calc.multiply(10, 5)); // 50
console.log('10 / 5 =', calc.divide(10, 5)); // 2
```

**Verification:**
- All methods work correctly
- Error handling works
- Can create multiple instances

**File:** `exercises/exercise-02.ts`

---

## Exercise 3: Inheritance

**Objective:** Understand class inheritance.

**Instructions:**
Create `exercises/exercise-03.ts` with inheritance:
1. Class `Vehicle` with `brand` and `start()` method
2. Class `Car` extends `Vehicle` with `model` property
3. Override `start()` in Car
4. Create car instance and test

**Expected Code Structure:**
```typescript
// exercises/exercise-03.ts
class Vehicle {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  start(): string {
    return `${this.brand} vehicle started`;
  }
}

class Car extends Vehicle {
  model: string;

  constructor(brand: string, model: string) {
    super(brand); // Call parent constructor
    this.model = model;
  }

  // Override parent method
  start(): string {
    return `${this.brand} ${this.model} car started`;
  }

  // Additional method
  drive(): string {
    return `Driving ${this.brand} ${this.model}`;
  }
}

// Test inheritance
const car = new Car('Toyota', 'Camry');
console.log(car.brand); // "Toyota" (inherited)
console.log(car.model); // "Camry"
console.log(car.start()); // "Toyota Camry car started" (overridden)
console.log(car.drive()); // "Driving Toyota Camry"
```

**Verification:**
- Inheritance works
- Override works
- Can access parent properties
- `super()` calls parent constructor

**Hints:**
- `extends` creates inheritance
- `super()` calls parent constructor
- Can override parent methods
- Inherits all parent members

**File:** `exercises/exercise-03.ts`

---

## Exercise 4: Access Modifiers

**Objective:** Use private, public, and protected modifiers.

**Instructions:**
Create `exercises/exercise-04.ts` with class `BankAccount`:
1. Private `balance: number`
2. Public methods: `deposit`, `withdraw`, `getBalance`
3. Test that balance cannot be accessed directly

**Expected Code Structure:**
```typescript
// exercises/exercise-04.ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error('Deposit amount must be positive');
    }
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      throw new Error('Withdrawal amount must be positive');
    }
    if (amount > this.balance) {
      throw new Error('Insufficient funds');
    }
    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

// Test the class
const account = new BankAccount();
account.deposit(100);
console.log('Balance:', account.getBalance()); // 100

account.withdraw(30);
console.log('Balance:', account.getBalance()); // 70

// This will cause an error:
// console.log(account.balance); // ❌ Error: Property 'balance' is private
```

**Verification:**
- Private property not accessible
- Public methods work
- Encapsulation enforced

**Hints:**
- `private` - only accessible in class
- `public` - accessible everywhere (default)
- `protected` - accessible in class and subclasses

**File:** `exercises/exercise-04.ts`

---

## Exercise 5: Readonly Properties

**Objective:** Use readonly properties.

**Instructions:**
Create `exercises/exercise-05.ts` with class `Product`:
1. Readonly `id: number`
2. `name: string`
3. `price: number`
4. Try to modify id and observe error

**Expected Code Structure:**
```typescript
// exercises/exercise-05.ts
class Product {
  readonly id: number;
  name: string;
  price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id; // Can set in constructor
    this.name = name;
    this.price = price;
  }
}

const product = new Product(1, 'Laptop', 999);
console.log('Product ID:', product.id); // 1

// This will cause an error:
// product.id = 2; // ❌ Error: Cannot assign to 'id' because it is a read-only property

// But can modify other properties
product.name = 'Gaming Laptop';
product.price = 1299;
console.log('Updated product:', product);
```

**Verification:**
- Readonly property set in constructor
- Cannot modify after creation
- Other properties modifiable

**File:** `exercises/exercise-05.ts`

---

## Exercise 6: Protected Members

**Objective:** Understand protected access modifier.

**Instructions:**
Create `exercises/exercise-06.ts` with protected members.

**Expected Code Structure:**
```typescript
// exercises/exercise-06.ts
class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

class Dog extends Animal {
  private breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  // Can access protected name from parent
  public getFullInfo(): string {
    return `${this.name} is a ${this.breed}`; // ✅ Can access protected name
  }
}

const dog = new Dog('Buddy', 'Golden Retriever');
console.log(dog.getName()); // "Buddy"
console.log(dog.getFullInfo()); // "Buddy is a Golden Retriever"

// This will cause an error:
// console.log(dog.name); // ❌ Error: Property 'name' is protected
```

**Verification:**
- Protected accessible in subclass
- Not accessible outside class hierarchy
- Inheritance works

**File:** `exercises/exercise-06.ts`

---

## Exercise 7: Complex Class

**Objective:** Create a class with multiple properties and methods.

**Instructions:**
Create `exercises/exercise-07.ts` with class `Student`.

**Expected Code Structure:**
```typescript
// exercises/exercise-07.ts
class Student {
  id: number;
  name: string;
  private grades: number[] = [];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  addGrade(grade: number): void {
    if (grade < 0 || grade > 100) {
      throw new Error('Grade must be between 0 and 100');
    }
    this.grades.push(grade);
  }

  getAverage(): number {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }

  getHighestGrade(): number {
    if (this.grades.length === 0) {
      return 0;
    }
    return Math.max(...this.grades);
  }

  getAllGrades(): number[] {
    return [...this.grades]; // Return copy
  }
}

// Test the class
const student = new Student(1, 'Alice');
student.addGrade(85);
student.addGrade(92);
student.addGrade(78);

console.log('Student:', student.name);
console.log('Average:', student.getAverage()); // 85
console.log('Highest:', student.getHighestGrade()); // 92
console.log('All grades:', student.getAllGrades()); // [85, 92, 78]
```

**Verification:**
- All methods work
- Private array protected
- Calculations correct

**File:** `exercises/exercise-07.ts`

---

## Exercise 8: Method Overriding

**Objective:** Override methods in subclasses.

**Instructions:**
Create `exercises/exercise-08.ts` with shape hierarchy.

**Expected Code Structure:**
```typescript
// exercises/exercise-08.ts
class Shape {
  area(): number {
    return 0; // Base implementation
  }

  perimeter(): number {
    return 0;
  }
}

class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  // Override area method
  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  // Override perimeter method
  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  // Override area method
  area(): number {
    return this.width * this.height;
  }

  // Override perimeter method
  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

// Test all shapes
const circle = new Circle(5);
console.log('Circle area:', circle.area().toFixed(2)); // 78.54
console.log('Circle perimeter:', circle.perimeter().toFixed(2)); // 31.42

const rectangle = new Rectangle(10, 5);
console.log('Rectangle area:', rectangle.area()); // 50
console.log('Rectangle perimeter:', rectangle.perimeter()); // 30
```

**Verification:**
- Override works correctly
- Each class has own implementation
- Polymorphism works

**File:** `exercises/exercise-08.ts`

---

## Exercise 9: Getters and Setters

**Objective:** Use getters and setters for property access.

**Instructions:**
Create `exercises/exercise-09.ts` with class `Temperature`.

**Expected Code Structure:**
```typescript
// exercises/exercise-09.ts
class Temperature {
  private _celsius: number;

  constructor(celsius: number) {
    this._celsius = celsius;
  }

  // Getter for celsius
  get celsius(): number {
    return this._celsius;
  }

  // Setter for celsius
  set celsius(value: number) {
    if (value < -273.15) {
      throw new Error('Temperature cannot be below absolute zero');
    }
    this._celsius = value;
  }

  // Getter for fahrenheit (computed property)
  get fahrenheit(): number {
    return (this._celsius * 9) / 5 + 32;
  }

  // Setter for fahrenheit
  set fahrenheit(value: number) {
    this._celsius = ((value - 32) * 5) / 9;
  }
}

// Test getters and setters
const temp = new Temperature(25);
console.log('Celsius:', temp.celsius); // 25
console.log('Fahrenheit:', temp.fahrenheit.toFixed(2)); // 77.00

temp.celsius = 30;
console.log('New Celsius:', temp.celsius); // 30
console.log('New Fahrenheit:', temp.fahrenheit.toFixed(2)); // 86.00

temp.fahrenheit = 100;
console.log('Set to 100°F, Celsius:', temp.celsius.toFixed(2)); // 37.78
```

**Verification:**
- Getters work
- Setters work
- Validation in setters
- Computed properties work

**File:** `exercises/exercise-09.ts`

---

## Exercise 10: Multiple Inheritance Levels

**Objective:** Create inheritance chain with multiple levels.

**Instructions:**
Create `exercises/exercise-10.ts` with multi-level inheritance.

**Expected Code Structure:**
```typescript
// exercises/exercise-10.ts
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): string {
    return `${this.name} makes a sound`;
  }
}

class Mammal extends Animal {
  warmBlooded: boolean = true;

  constructor(name: string) {
    super(name);
  }

  giveBirth(): string {
    return `${this.name} gives birth to live young`;
  }
}

class Dog extends Mammal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  // Override speak
  speak(): string {
    return `${this.name} barks`;
  }

  // Additional method
  fetch(): string {
    return `${this.name} fetches the ball`;
  }
}

// Test inheritance chain
const dog = new Dog('Buddy', 'Golden Retriever');

// Access properties from all levels
console.log('Name:', dog.name); // "Buddy" (from Animal)
console.log('Warm blooded:', dog.warmBlooded); // true (from Mammal)
console.log('Breed:', dog.breed); // "Golden Retriever" (from Dog)

// Call methods
console.log(dog.speak()); // "Buddy barks" (overridden)
console.log(dog.giveBirth()); // "Buddy gives birth to live young" (from Mammal)
console.log(dog.fetch()); // "Buddy fetches the ball" (from Dog)
```

**Verification:**
- Multi-level inheritance works
- Can access all parent properties
- Override works at any level
- All methods accessible

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

- [X] Classes create instances correctly
- [X] Constructors work
- [X] Methods work
- [X] Inheritance works
- [X] Access modifiers work
- [X] Getters/setters work
- [X] Override works
- [X] All code is type-safe

## Troubleshooting

### Issue: Property not accessible

**Solution:**
- Check access modifier
- Verify inheritance setup
- Check property exists

### Issue: Override not working

**Solution:**
- Verify extends keyword
- Check method signatures match
- Ensure super() is called

## Next Steps

1. ✅ **Review**: Understand OOP in TypeScript
2. ✅ **Experiment**: Create more complex classes
3. 📖 **Continue**: Move to [Level 6: Generics and Advanced Types](../level-06-generics-and-advanced-types/lesson-01-generics.md)
4. 💻 **Complete**: Work through all exercises

---

**Key Takeaways:**
- Classes encapsulate data and behavior
- Constructors initialize instances
- Inheritance enables code reuse
- Access modifiers control visibility
- Getters/setters provide controlled access
- Method overriding enables polymorphism
- TypeScript adds type safety to OOP

**Good luck! Happy coding! 🚀**
