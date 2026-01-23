# Lesson 4: Async Patterns

## Promises

TypeScript provides type safety for Promises:

```typescript
function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
}

fetchData().then((data) => {
  console.log(data); // TypeScript knows 'data' is string
});
```

## Async/Await

```typescript
async function loadUser(id: number): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}

async function main() {
  try {
    const user = await loadUser(1);
    console.log(user.name);
  } catch (error) {
    console.error("Failed to load user:", error);
  }
}
```

## Promise Types

```typescript
type AsyncResult<T> = Promise<T>;

async function getData(): AsyncResult<string> {
  return "data";
}
```

## Error Handling

```typescript
async function riskyOperation(): Promise<string> {
  try {
    const result = await someAsyncCall();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Operation failed: ${error.message}`);
    }
    throw error;
  }
}
```

## Promise.all

```typescript
async function loadMultiple(): Promise<[User, Post[]]> {
  const [user, posts] = await Promise.all([
    loadUser(1),
    loadPosts(1)
  ]);
  return [user, posts];
}
```
