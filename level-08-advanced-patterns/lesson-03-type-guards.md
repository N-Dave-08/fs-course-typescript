# Lesson 3: Type Guards

## typeof Type Guards

```typescript
function isString(value: string | number): value is string {
  return typeof value === "string";
}

function process(value: string | number) {
  if (isString(value)) {
    // TypeScript knows 'value' is string here
    console.log(value.toUpperCase());
  } else {
    // TypeScript knows 'value' is number here
    console.log(value.toFixed(2));
  }
}
```

## instanceof Type Guards

```typescript
class Dog {
  bark(): void {
    console.log("Woof!");
  }
}

class Cat {
  meow(): void {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
```

## in Operator Type Guards

```typescript
interface Bird {
  fly(): void;
}

interface Fish {
  swim(): void;
}

function move(animal: Bird | Fish) {
  if ("fly" in animal) {
    animal.fly();
  } else {
    animal.swim();
  }
}
```

## Custom Type Guards

```typescript
interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  permissions: string[];
}

function isAdmin(user: User | Admin): user is Admin {
  return "permissions" in user;
}

function processUser(user: User | Admin) {
  if (isAdmin(user)) {
    console.log(user.permissions);
  } else {
    console.log(user.email);
  }
}
```
