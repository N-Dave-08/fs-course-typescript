{
    const numbers = [1, 2, 3, 4, 5]

    console.log('===== for loop =====')
    for (let i = 0; i < numbers.length; i++) {
        console.log(`Number ${i + 1}: ${numbers[i]}`)
    }

    console.log('===== for...of (modern approach) =====')
    for (const n of numbers) {
        console.log(`Number ${n}`)
    }

    console.log('===== forEach (double each number) =====')
    numbers.forEach((n, i) => {
        console.log(`Number ${i + 1}: ${n * 2}`)
    })

    console.log('===== map =====')
    const doubled = numbers.map((n) => n * 2)
    console.log(`Doubled by map: ${doubled}`)
}