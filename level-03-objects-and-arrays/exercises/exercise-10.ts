interface ScoreData {
    name: string
    score: number
}

const data: ScoreData[] = [
    {
        name: "Bob",
        score: 97
    },
    {
        name: "Alce",
        score: 79
    },
    {
        name: "Jacob",
        score: 85
    },
    {
        name: "Marry",
        score: 89
    },
]

const formatted = data.map(item => `${item.name}: ${item.score}`)
console.log('Formatted: ', formatted)

const detailed = data.map(item => 
    `${item.name} score ${item.score} points`
)
console.log('Detailed: ', detailed)