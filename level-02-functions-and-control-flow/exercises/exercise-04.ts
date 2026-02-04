/**
 * 
 * @param x 
 * @returns 
 */

function squareOriginal(x: number): number { return x * x; }

const square = (x: number): number => x * x
console.log(square(2))

function greetOriginal(name: string): string { return "Hello, " + name; }

const greet = (name: string): string => `Hello, ${name}`
console.log(greet("Bob"))