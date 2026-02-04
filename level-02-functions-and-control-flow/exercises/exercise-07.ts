{
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    console.log("===== filter =====")
    const filtered = numbers.filter((n) => n % 2 === 0)
    console.log(filtered)

    console.log("\n===== reduce =====")
    const reduced = numbers.reduce((t, n) => t + n, 0)
    console.log(reduced)
}