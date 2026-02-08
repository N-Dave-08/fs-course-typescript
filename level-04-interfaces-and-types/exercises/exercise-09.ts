{
    type Calculator = (a: number, b: number) => number

    const add: Calculator = (a, b) => a + b
    const subtract: Calculator = (a, b) => a - b
    const multiply: Calculator = (a, b) => a * b
    const divide: Calculator = (a, b) => a / b

    function executeOpetation(
        operation: Calculator,
        a: number,
        b: number
    ): number {
        return operation(a, b)
    }

    console.log('Add: (10, 5)', executeOpetation(add, 10, 5))
    console.log('Subtract: (10, 5)', executeOpetation(subtract, 10, 5))
    console.log('Multiply: (10, 5)', executeOpetation(multiply, 10, 5))
    console.log('Divide: (10, 5)', executeOpetation(divide, 10, 5))
}