# Common TypeScript Patterns

## Null Safety

```typescript
function process(value: string | null): string {
  if (!value) {
    return "default";
  }
  return value.toUpperCase();
}
```

## Optional Chaining

```typescript
const name = user?.profile?.name ?? "Unknown";
```

## Type Assertions

```typescript
const value = someValue as string;
// Or: const value = <string>someValue;
```

## Discriminated Unions

```typescript
type Success = { status: "success"; data: string };
type Error = { status: "error"; message: string };
type Result = Success | Error;

function handle(result: Result) {
  if (result.status === "success") {
    console.log(result.data);
  } else {
    console.log(result.message);
  }
}
```

## Builder Pattern

```typescript
class QueryBuilder {
  private query: string = "";
  
  select(fields: string): this {
    this.query += `SELECT ${fields}`;
    return this;
  }
  
  from(table: string): this {
    this.query += ` FROM ${table}`;
    return this;
  }
  
  build(): string {
    return this.query;
  }
}
```

## Factory Pattern

```typescript
interface Animal {
  speak(): void;
}

class Dog implements Animal {
  speak(): void {
    console.log("Woof!");
  }
}

class Cat implements Animal {
  speak(): void {
    console.log("Meow!");
  }
}

function createAnimal(type: "dog" | "cat"): Animal {
  switch (type) {
    case "dog":
      return new Dog();
    case "cat":
      return new Cat();
  }
}
```

## Singleton Pattern

```typescript
class Database {
  private static instance: Database;
  
  private constructor() {}
  
  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
```
