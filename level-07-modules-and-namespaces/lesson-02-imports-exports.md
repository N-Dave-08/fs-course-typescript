# Lesson 2: Imports and Exports

## Learning Objectives

By the end of this lesson, you will be able to:
- Use common import styles (`{ named }`, `default`, `* as ns`)
- Import types safely using `import type` (and understand why it matters)
- Use dynamic imports (`await import(...)`) and know when they’re appropriate
- Export types and values cleanly (and avoid leaking internal-only types)
- Understand the basics of module resolution and why imports sometimes fail
- Recognize common pitfalls (type/value confusion, path issues, wrong resolution settings)

## Why Imports/Exports Matter

Imports and exports are how modules define boundaries:
- **imports**: what you depend on
- **exports**: what you promise to provide

They impact:
- build output (what code gets emitted)
- tree-shaking (what can be removed)
- runtime correctness (ESM vs CJS and resolution rules)

```mermaid
flowchart LR
  consumer[consumer.ts] -->|import| provider[provider.ts]
  provider -->|export| api[PublicAPI]
```

## Importing Types

In TypeScript, types exist only at compile time. `import type` makes this explicit.

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

### Why `import type` is useful

- clarifies intent (“this is not runtime code”)
- can prevent certain runtime/bundler edge cases
- helps maintain ESM/CJS interop clarity

## Named Imports and Default Imports

```typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}
```

```typescript
import { add } from "./math";
```

Default import example:

```typescript
// logger.ts
export default function log(message: string) {
  console.log(message);
}
```

```typescript
import log from "./logger";
```

## Import All (`* as Namespace`)

Use this when you want a module namespace object:

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

### When this is a good idea

- avoiding name collisions
- building “module-like” APIs
- migrating from older patterns

## Dynamic Imports

Dynamic imports load modules at runtime.

```typescript
async function loadModule() {
  const math = await import("./math");
  console.log(math.add(5, 3));
}
```

### When to use dynamic import

- code splitting (web apps)
- optional dependencies (only load if feature is used)
- heavy modules that should not load on startup

## Exporting Types and Values

Exporting types:

```typescript
// types.ts
export type Status = "active" | "inactive";
export interface User {
  name: string;
  status: Status;
}
```

Exporting values and types together is common:

```typescript
export const DEFAULT_TIMEOUT_MS = 5_000;
export type TimeoutMs = number;
```

## Module Resolution (Why imports sometimes fail)

TypeScript resolves modules based on `tsconfig.json` settings and your runtime/bundler.

Two common resolution strategies:
- `moduleResolution: "node"`: Node.js-style resolution (historically common)
- `moduleResolution: "bundler"`: bundler-friendly resolution (common in modern tools)

If imports fail, it’s usually one of:
- wrong path
- wrong file name/case (Windows vs Linux differences)
- mismatch between TS resolution and runtime resolution

## Real-World Scenario: Avoiding Type/Value Confusion

```typescript
import type { User } from "./types";
import { parseUser } from "./parseUser";

export function handle(input: unknown): User {
  return parseUser(input);
}
```

Types stay types; runtime code stays runtime code.

## Best Practices

### 1) Use `import type` for types

It improves clarity and avoids accidental runtime imports.

### 2) Keep exports intentional

Prefer exporting from a small set of entrypoints (like `index.ts`) rather than exporting everything everywhere.

### 3) Prefer named exports in shared code

It reduces ambiguity and refactor pain.

## Common Pitfalls and Solutions

### Pitfall 1: Importing a type as a value

**Problem:**
You import something that is only a type but treat it like a runtime value.

**Solution:**
Use `import type` and keep runtime utilities separate.

### Pitfall 2: Default export mismatch

**Problem:** `import x from "./mod"` but `mod` doesn’t have a default export.

**Solution:** Use named import (`import { x } ...`) or add a default export intentionally.

## Troubleshooting

### Issue: "Cannot find module './x' or its corresponding type declarations"

**Symptoms:**
- TypeScript can’t resolve an import.

**Solutions:**
1. Confirm the path and file name (including casing).
2. Check `tsconfig.json` `moduleResolution`, `baseUrl`, and `paths` (if configured).
3. Ensure your runtime/bundler resolves modules the same way TypeScript does.

### Issue: "The requested module does not provide an export named ..."

**Symptoms:**
- Runtime error in ESM when import/export names don’t match.

**Solutions:**
1. Confirm named vs default exports.
2. Confirm the exported symbol exists and is spelled the same.

## Next Steps

Now that you understand imports and exports:

1. ✅ **Practice**: Convert a file to use `import type` for its interfaces
2. ✅ **Experiment**: Use `* as` imports, then refactor to named imports and compare
3. 📖 **Next Lesson**: Learn about [Namespaces](./lesson-03-namespaces.md)
4. 💻 **Complete Exercises**: Work through [Exercises 07](./exercises-07.md)

## Additional Resources

- [TypeScript Handbook: Modules](https://www.typescriptlang.org/docs/handbook/modules/introduction.html)
- [TypeScript Handbook: Type-Only Imports and Exports](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export)

---

**Key Takeaways:**
- `import type` keeps type-only dependencies explicit.
- Named imports and default imports solve different problems; be consistent.
- Dynamic imports are runtime, async, and useful for optional/loading scenarios.
- Many “cannot find module” issues are resolution/path mismatches, not TypeScript itself.
