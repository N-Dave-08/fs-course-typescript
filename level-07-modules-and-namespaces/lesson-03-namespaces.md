# Lesson 3: Namespaces

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

// Both functions are available
Utils.add(5, 3);
Utils.multiply(5, 3);
```

## Namespaces vs Modules

- **Modules**: Use for file-based organization (recommended)
- **Namespaces**: Use for logical grouping within files (legacy)

Modern TypeScript prefers ES modules over namespaces.
