# Lesson 2: Mixins

## What are Mixins?

Mixins allow combining multiple classes into one.

## Mixin Pattern

```typescript
// Disposable mixin
class Disposable {
  isDisposed: boolean = false;
  dispose() {
    this.isDisposed = true;
  }
}

// Activatable mixin
class Activatable {
  isActive: boolean = false;
  activate() {
    this.isActive = true;
  }
  deactivate() {
    this.isActive = false;
  }
}

// Combined class
class SmartObject implements Disposable, Activatable {
  constructor() {
    setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
  }

  // Disposable
  isDisposed: boolean = false;
  dispose: () => void;
  
  // Activatable
  isActive: boolean = false;
  activate: () => void;
  deactivate: () => void;
}

// Apply mixins
function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

applyMixins(SmartObject, [Disposable, Activatable]);
```
