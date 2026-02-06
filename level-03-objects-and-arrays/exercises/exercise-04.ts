type Person = {
    name: string
    age: number
}

const people: Person[] = [
    {
        name: "Bob",
        age: 26
    },
    {
        name: "Alice",
        age: 21
    },
    {
        name: "Jacob",
        age: 25
    },
]

const adults = people.find(p => p.age > 25)
console.log('Adults:', adults)

const names = people.map(p => p.name)
console.log(`\nNames: ${names}`)

const middleAge = people.filter(p => p.age >= 25)
console.log('\nMiddle age:', middleAge)

const totlaAge = people.reduce((sum, p) => sum + p.age, 0)
const avgAge = totlaAge / people.length
console.log('\nAverage age:', avgAge)