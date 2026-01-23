# Lesson 3: Access Modifiers

## Public (Default)

All members are public by default:

```typescript
class Person {
  public name: string; // public is optional
  age: number;         // Also public

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

## Private

Private members are only accessible within the class:

```typescript
class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount();
// account.balance; // Error: Property 'balance' is private
account.deposit(100);
console.log(account.getBalance()); // 100
```

## Protected

Protected members are accessible in the class and subclasses:

```typescript
class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  getName(): string {
    return this.name; // OK: protected members accessible in subclasses
  }
}
```

## Readonly

Make properties read-only:

```typescript
class Person {
  readonly id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const person = new Person(1, "Alice");
// person.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
```
