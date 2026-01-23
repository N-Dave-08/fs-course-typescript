# Lesson 2: Imports and Exports

## Import Types

Import only types:

```typescript
// types.ts
export interface User {
  name: string;
  age: number;
}

// main.ts
import type { User } from "./types";
// Or: import { type User } from "./types";
```

## Import All

```typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

// main.ts
import * as Math from "./math";
console.log(Math.add(5, 3));
```

## Dynamic Imports

Load modules at runtime:

```typescript
async function loadModule() {
  const math = await import("./math");
  console.log(math.add(5, 3));
}
```

## Export Types

```typescript
// types.ts
export type Status = "active" | "inactive";
export interface User {
  name: string;
  status: Status;
}
```

## Module Resolution

TypeScript resolves modules based on `tsconfig.json` settings:
- `moduleResolution: "node"` - Node.js style resolution
- `moduleResolution: "classic"` - Classic TypeScript resolution
