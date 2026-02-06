interface Calculator {
    add(a: number, b: number): number
    subtract(a: number, b: number): number
    multiply(a: number, b: number): number
    division(a: number, b: number): number
}

const calculator: Calculator = {
    add(a: number, b: number): number {
        return a + b
    },
    subtract(a: number, b: number): number {
        return a - b
    },
    multiply(a: number, b: number): number {
        return a * b
    },
    division(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Cannot divide by zero")
        }
        return a / b
    }
}

console.log('20 + 5 = ', calculator.add(20, 5))
console.log('20 - 5 = ', calculator.subtract(20, 5))
console.log('20 * 5 = ', calculator.multiply(20, 5))
console.log('20 / 5 = ', calculator.division(20, 5))