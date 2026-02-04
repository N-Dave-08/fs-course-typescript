interface NumberStats {
    sum: number
    avg: number
    max: number
    min: number
}

function processNumbers(numbers: number[]): NumberStats {
    if (numbers.length === 0) {
        throw new Error('Array cannot be empty')
    }

    const sum = numbers.reduce((t, n) => t + n, 0)
    const avg = sum / numbers.length
    const max = Math.max(...numbers)
    const min = Math.min(...numbers)

    return {
        sum, 
        avg, 
        max,
        min
    }
}

console.log(processNumbers([1, 2, 3, 4, 5]))