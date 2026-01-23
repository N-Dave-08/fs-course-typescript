# Lesson 2: Inheritance

## Extending Classes

Use `extends` to create subclasses:

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name); // Call parent constructor
    this.breed = breed;
  }

  speak(): void {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak(); // "Buddy barks"
```

## Method Overriding

Subclasses can override parent methods:

```typescript
class Shape {
  area(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
```

## Super Keyword

Access parent class methods and properties:

```typescript
class Parent {
  greet(): string {
    return "Hello from parent";
  }
}

class Child extends Parent {
  greet(): string {
    return super.greet() + " and child";
  }
}
```
