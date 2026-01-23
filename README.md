# Full Stack Course: TypeScript

**START HERE** - This is the foundation course for all full stack development.

## Overview

This comprehensive TypeScript course provides a solid foundation in TypeScript programming, which is essential for modern full stack development. TypeScript is a prerequisite for both the Frontend and Backend courses.

## Course Structure

This course consists of **8 progressive levels**, each building on the previous:

1. **Level 1: TypeScript Fundamentals** - Introduction, types, variables, basic operations
2. **Level 2: Functions and Control Flow** - Functions, arrow functions, conditionals, loops
3. **Level 3: Objects and Arrays** - Objects, arrays, array methods, iteration
4. **Level 4: Interfaces and Types** - Interfaces, type aliases, union and intersection types
5. **Level 5: Classes and OOP** - Classes, inheritance, access modifiers
6. **Level 6: Generics and Advanced Types** - Generics, utility types, conditional types
7. **Level 7: Modules and Namespaces** - ES modules, imports/exports, namespaces
8. **Level 8: Advanced Patterns** - Decorators, mixins, type guards, async patterns

## Prerequisites

- **Node.js 22+ LTS** - [Download here](https://nodejs.org/)
- **pnpm** - Package manager ([Installation guide](https://pnpm.io/installation))
- **Code Editor** - VS Code recommended with TypeScript extension

## Getting Started

1. **Read the Setup Guide**: Start with [LEARNING-GUIDE.md](./LEARNING-GUIDE.md) for complete setup instructions
2. **Install Dependencies**: Follow the guide to install TypeScript and configure your environment
3. **Verify Setup**: Run `npx ts-node test_setup.ts` to verify your environment
4. **Start Learning**: Begin with Level 1 and progress sequentially

## Learning Flow

1. **Set Up Environment**: Install TypeScript, configure tsconfig.json, set up IDE
2. **Read Lessons**: Go through lessons sequentially, type out examples
3. **Attempt Exercises**: Write your own TypeScript solutions
4. **Test Solutions**: Compile and run code, verify output
5. **Debug and Iterate**: Fix errors, refine solutions
6. **Move Forward**: Complete level before moving to next

## File Structure

```
fs-course-typescript/
├── README.md (this file)
├── LEARNING-GUIDE.md (setup instructions)
├── tsconfig.json (TypeScript configuration)
├── test_setup.ts (environment validation)
├── level-01-fundamentals/ (lessons and exercises)
├── level-02-functions-and-control-flow/
├── level-03-objects-and-arrays/
├── level-04-interfaces-and-types/
├── level-05-classes-and-oop/
├── level-06-generics-and-advanced-types/
├── level-07-modules-and-namespaces/
├── level-08-advanced-patterns/
└── resources/ (cheatsheets and reference materials)
```

## Related Courses

After completing this course, proceed to:

- **fs-course-frontend** - Next.js frontend development (requires TypeScript)
- **fs-course-backend** - Express.js backend API (requires TypeScript)
- **fs-course-database** - Database fundamentals (can be done in parallel)

## Cross-Repository Integration

This TypeScript course is the foundation for the entire full stack development journey:

- **Required by**: `fs-course-frontend` and `fs-course-backend` (both use TypeScript extensively)
- **Used in**: All other courses for type-safe code
- **Integration**: TypeScript knowledge is essential for understanding code in all other repositories

### Learning Path

1. **Start here** - Complete this TypeScript course first
2. **Then choose**:
   - Frontend path: TypeScript → Frontend → Testing
   - Backend path: TypeScript → Database → Backend → Testing
   - Full stack: TypeScript → Database → Backend → Frontend → Caching → Error Tracking → Testing → Infrastructure

## Tech Stack

- **TypeScript**: 5.7+ (latest stable)
- **Node.js**: 22+ LTS
- **Package Manager**: pnpm

## Troubleshooting

If you encounter issues:

1. Verify Node.js version: `node --version` (should be 22+)
2. Verify pnpm installation: `pnpm --version`
3. Check TypeScript installation: `npx tsc --version`
4. Review [LEARNING-GUIDE.md](./LEARNING-GUIDE.md) troubleshooting section

## Contributing

This is a learning course. Focus on understanding concepts and completing exercises before moving forward.
