{
    interface User {
        name: string
        email: string
        age?: number
    }

    const user1: User = {
        name: "Bob",
        email: "bob@email.com"
    }

    const user2: User = {
        name: "Jacob",
        email: "jacob@email.com",
        age: 25
    }

    console.log('User without age: ', user1)
    console.log('User with age: ', user2)

    // if age exists
    if (user2.age !== undefined) {
        console.log(`${user2.name} is ${user2.age} years old`)
    }
}