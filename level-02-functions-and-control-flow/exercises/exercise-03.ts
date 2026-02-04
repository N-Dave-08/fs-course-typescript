/**
 * 
 * @param numbers 
 * @returns 
 */

function findMax(...numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error('At least one number is required')
    }
    return Math.max(...numbers)
}

console.log(findMax(1, 2, 3, 4)) // must be 4