const nums = [1, 2, 3, 4, 5, 6, 7, 9, 10]

const squares = nums.map(num => num * num)
console.log(`Squares: ${squares}`)

const greaterThanFive = nums.filter(num => num > 5)
console.log(`\nGreater than five: ${greaterThanFive}`)

const totalSum = nums.reduce((t, n) => t + n, 0)
console.log(`\nTotal sum of all numbers: ${totalSum}`)

const combined = nums
    .filter(num => num > 5)
    .map(num => num * num)
    .reduce((t, n) => t + n, 0)
console.log(`\nResult of combined operations: ${combined}`)