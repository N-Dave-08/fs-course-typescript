# Lesson 3: Namespaces

## Learning Objectives

By the end of this lesson, you will be able to:
- Explain what namespaces are and why they exist historically
- Define and use namespaces (including nested namespaces)
- Understand namespace merging and when it happens
- Decide when namespaces are appropriate vs when modules are better (modern default)
- Recognize common pitfalls (global scope, bundlers, mixing with modules)

## Why Namespaces Matter (Mostly Historical)

Before ES modules became the standard, namespaces were a common way to:
- avoid polluting the global scope
- group related functions/types in a single “module-like” object

Today, **ES modules are the default choice** for new codebases, but namespaces still show up in:
- older TypeScript code
- some browser “script tag” projects
- certain declaration file patterns (`.d.ts`)

```mermaid
flowchart LR
  global[GlobalScope] --> ns[Namespace]
  ns --> api[GroupedAPI]
```

## Namespace Definition

Namespaces group related code:

```typescript
namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b;
  }

  export function subtract(a: number, b: number): number {
    return a - b;
  }
}

console.log(MathUtils.add(5, 3));
```

### Key idea: `export` controls what’s visible

Without `export`, members are internal to the namespace block.

## Nested Namespaces

```typescript
namespace Geometry {
  export namespace Circle {
    export function area(radius: number): number {
      return Math.PI * radius ** 2;
    }
  }

  export namespace Rectangle {
    export function area(width: number, height: number): number {
      return width * height;
    }
  }
}

console.log(Geometry.Circle.area(5));
```

### When nesting is useful

It can mirror “submodules” when you’re not using file-based modules.

## Namespace Merging

Namespaces with the same name merge:

```typescript
namespace Utils {
  export function add(a: number, b: number): number {
    return a + b;
  }
}

namespace Utils {
  export function multiply(a: number, b: number): number {
    return a * b;
  }
}

Utils.add(5, 3);
Utils.multiply(5, 3);
```

### Why merging exists

It supports splitting declarations across files in older patterns and in `.d.ts` files.

## Namespaces vs Modules (Modern Recommendation)

- **Modules**: file-based organization using `import`/`export` (recommended for modern apps)
- **Namespaces**: logical grouping inside the same “global compilation unit” (legacy in most cases)

Modern TypeScript prefers ES modules over namespaces because:
- bundlers and Node.js understand modules
- dependencies are explicit
- tree-shaking and code splitting work better

## Real-World Scenario: When Namespaces Still Make Sense

### Script-tag apps without bundlers

If you load a single compiled JS file in the browser (no bundler, no ESM), namespaces can be a pragmatic way to avoid globals:

```typescript
namespace App {
  export function start() {
    console.log("App started");
  }
}
```

Then you can call `App.start()` from a script context.

## Best Practices

### 1) Prefer modules for new projects

Use namespaces only if you have a specific reason (legacy constraints).

### 2) Avoid mixing namespaces and modules casually

Once you use `import`/`export` in a file, it becomes a module and global namespace patterns behave differently.

### 3) Treat namespace APIs like public APIs

Only export what callers should use.

## Common Pitfalls and Solutions

### Pitfall 1: Assuming namespaces work the same in module files

**Problem:**
You add `export {}` or an `import` and suddenly namespace symbols aren’t global anymore.

**Solution:**
Either:
- stay in module land (preferable), or
- keep the namespace usage in non-module script compilation patterns

### Pitfall 2: Global pollution in multi-file builds

**Problem:** Namespaces can create “ambient” globals if your build compiles multiple files into the same scope.

**Solution:** Prefer ES modules so every dependency is explicit.

## Troubleshooting

### Issue: "Cannot find name 'X'" when using a namespace

**Symptoms:**
- You reference a namespace symbol but TypeScript can’t see it.

**Solutions:**
1. Ensure the namespace declaration is in the compilation context (included by `tsconfig.json`).
2. If using modules, import what you need instead of relying on global namespace visibility.

### Issue: Runtime: `NamespaceName is not defined`

**Symptoms:**
- TypeScript compiles but at runtime the namespace object doesn’t exist.

**Solutions:**
1. Confirm the file defining the namespace is actually loaded/executed.
2. Avoid mixing ESM bundling with global namespace assumptions.

## Next Steps

Now that you understand namespaces and how they compare to modules:

1. ✅ **Practice**: Create a small namespace API and call it from the same file
2. ✅ **Experiment**: Refactor that namespace into ES modules (`export`/`import`)
3. 📖 **Next Level**: Continue to the next TypeScript level
4. 💻 **Complete Exercises**: Work through [Exercises 07](./exercises-07.md)

## Additional Resources

- [TypeScript Handbook: Modules](https://www.typescriptlang.org/docs/handbook/modules/introduction.html)
- [TypeScript Handbook: Namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html)

---

**Key Takeaways:**
- Namespaces are a legacy grouping tool that predates modern ES modules.
- Namespace merging can combine multiple declarations with the same name.
- Prefer ES modules for new code (clear boundaries, bundler support).
- Namespaces can still be useful in no-bundler, script-style environments.
