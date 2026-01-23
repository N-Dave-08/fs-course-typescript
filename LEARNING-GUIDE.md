# TypeScript Course Setup Guide

This guide will walk you through setting up your TypeScript development environment step by step.

## Prerequisites

Before starting, ensure you have:

1. **Node.js 22+ LTS** installed
   - Check version: `node --version`
   - Download: [nodejs.org](https://nodejs.org/)
   - Should show: `v22.x.x` or higher

2. **pnpm** package manager installed
   - Check version: `pnpm --version`
   - Install: `npm install -g pnpm`
   - Or use: `corepack enable` (comes with Node.js)

3. **Code Editor** (VS Code recommended)
   - Download: [code.visualstudio.com](https://code.visualstudio.com/)
   - Install TypeScript extension for better IntelliSense

## Initial Setup

### Step 1: Navigate to Course Directory

```bash
cd fs-course-typescript
```

### Step 2: Initialize Package.json

Run the following command to create a `package.json` file:

```bash
pnpm init
```

You'll be prompted with questions. You can press Enter to accept defaults, or customize as needed.

### Step 3: Install TypeScript and Dependencies

Install TypeScript and required development dependencies:

```bash
pnpm add -D typescript@^5.7.0 ts-node@^10.9.0 @types/node@^22.0.0
```

This installs:
- **typescript@^5.7.0** - The TypeScript compiler (latest stable)
- **ts-node@^10.9.0** - Run TypeScript files directly without compilation
- **@types/node@^22.0.0** - Type definitions for Node.js

### Step 4: Create TypeScript Configuration

Create a `tsconfig.json` file in the root directory with the following content:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "moduleResolution": "node",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

**Key Configuration Options:**
- `target: "ES2022"` - Compiles to modern JavaScript
- `strict: true` - Enables all strict type checking
- `outDir: "./dist"` - Compiled JavaScript output directory
- `sourceMap: true` - Generates source maps for debugging

### Step 5: Verify Installation

Verify TypeScript is installed correctly:

```bash
npx tsc --version
```

You should see: `Version 5.7.x` or higher

### Step 6: Test Your Setup

Run the test setup script to validate your environment:

```bash
npx ts-node test_setup.ts
```

You should see output confirming:
- TypeScript is working
- TypeScript version 5.7+
- Node.js version 22+

## Workflow

### Running TypeScript Files

**Option 1: Using ts-node (Recommended for learning)**
```bash
npx ts-node your-file.ts
```

**Option 2: Compile then run**
```bash
# Compile TypeScript to JavaScript
npx tsc

# Run the compiled JavaScript
node dist/your-file.js
```

### Working with Lessons

1. **Read the lesson** - Understand the concepts
2. **Type out examples** - Don't copy-paste, type them yourself
3. **Experiment** - Modify examples to see what happens
4. **Complete exercises** - Write your own solutions

### Working with Exercises

1. Create a new `.ts` file for each exercise
2. Write your solution
3. Run it: `npx ts-node exercise-01.ts`
4. Fix any errors
5. Verify the output matches expectations

## Troubleshooting

### Issue: "Command not found: pnpm"

**Solution:**
```bash
npm install -g pnpm
# Or enable corepack (comes with Node.js 16.9+)
corepack enable
```

### Issue: "TypeScript version mismatch"

**Solution:**
```bash
# Remove node_modules and reinstall
rm -rf node_modules
pnpm install
```

### Issue: "Cannot find module" errors

**Solution:**
- Ensure you're in the correct directory
- Run `pnpm install` to install dependencies
- Check that `tsconfig.json` exists and is properly configured

### Issue: Type errors in VS Code

**Solution:**
- Restart VS Code
- Ensure TypeScript extension is installed
- Check VS Code is using workspace TypeScript: `Ctrl+Shift+P` → "TypeScript: Select TypeScript Version" → "Use Workspace Version"

## Next Steps

Once your environment is set up:

1. ✅ Verify setup with `npx ts-node test_setup.ts`
2. 📖 Start with [Level 1: Fundamentals](./level-01-fundamentals/lesson-01-introduction.md)
3. 💻 Complete exercises for each level before moving forward
4. 📚 Use [Resources](./resources/) folder for quick reference

## Additional Resources

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Cheatsheet](./resources/typescript-cheatsheet.md)

Happy coding! 🚀
