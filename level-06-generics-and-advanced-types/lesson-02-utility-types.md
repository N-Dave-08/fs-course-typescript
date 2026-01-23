# Lesson 2: Utility Types

## Partial

Make all properties optional:

```typescript
interface User {
  name: string;
  age: number;
  email: string;
}

type PartialUser = Partial<User>;
// { name?: string; age?: number; email?: string; }
```

## Required

Make all properties required:

```typescript
interface Config {
  apiKey?: string;
  timeout?: number;
}

type RequiredConfig = Required<Config>;
// { apiKey: string; timeout: number; }
```

## Pick

Select specific properties:

```typescript
interface User {
  name: string;
  age: number;
  email: string;
}

type UserName = Pick<User, "name" | "email">;
// { name: string; email: string; }
```

## Omit

Remove specific properties:

```typescript
interface User {
  name: string;
  age: number;
  email: string;
}

type UserWithoutEmail = Omit<User, "email">;
// { name: string; age: number; }
```

## Readonly

Make all properties readonly:

```typescript
interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;
// { readonly name: string; readonly age: number; }
```

## Record

Create object type with specific keys and values:

```typescript
type UserRoles = Record<string, boolean>;
// { [key: string]: boolean; }

const roles: UserRoles = {
  admin: true,
  user: false
};
```
