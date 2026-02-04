type MathOperation = (a: number, b: number) => number

const add: MathOperation = (a ,b) => a + b
const subtract: MathOperation = (a ,b) => a - b
const multiply: MathOperation = (a ,b) => a * b
const divide: MathOperation = (a ,b) => {
    if (b === 0) {
        throw new Error("Division by zero")
    }
    return a / b
}

function calculate(
    operation: MathOperation,
    a: number,
    b: number
): number {
    return operation(a, b)
}

console.log(`Math: ${calculate(add, 2, 2)}`)
console.log(`Subtract: ${calculate(subtract, 3, 2)}`)
console.log(`Multiply: ${calculate(multiply, 2, 2)}`)
console.log(`Divide: ${calculate(divide, 10, 2)}`)