interface Animal {
    name: string
}

interface Dog extends Animal {
    breed: string
}

const dog: Dog = {
    name: "Bruno",
    breed: "bulldog"
}

console.log('Dog name: ', dog.name)
console.log('Dog name: ', dog.breed)

const animal: Animal = dog
console.log('As animal: ', animal.name)