type CountByParity = {
    even: number
    odd: number
}

const list = [1, 2, 3, 4, 5]


const counts = list.reduce<CountByParity>(
    (acc, n) => {
        if (n % 2 === 0) acc.even += 1
        else acc.odd += 1
        return acc
    },
    {
        even: 0,
        odd: 0
    }
)

console.log(counts)