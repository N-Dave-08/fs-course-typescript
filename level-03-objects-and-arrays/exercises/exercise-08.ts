{
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const evens = numbers.filter(n => n % 2 === 0)
    console.log('Even numbers: ', evens)

    const squares = evens.map(n => n * n)
    console.log('Squares: ', squares)

    const sum = squares.reduce((t, n) => t + n, 0)
    console.log('Total sum: ', sum)

    const combined = numbers
        .filter(n => n % 2 === 0)
        .map(n => n * n)
        .reduce((t, n) => t + n, 0)
    console.log('Combined operations: ', combined)
}