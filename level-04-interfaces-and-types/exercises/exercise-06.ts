{
    type HasName = {
        name: string
    }
    type HasAge = {
        age: number
    }
    type Person = HasName & HasAge

    const person: Person = {
        name: "Bob",
        age: 25
    }

    console.log('person name: ', person.name)
    console.log('person age: ', person.age)
}