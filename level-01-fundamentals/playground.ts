interface User {
    id: number
    name: string
    email: string
    age: number
}

/**
 * @param name - User's full name
 * @param email - User's email address
 * @param age - User's age
 * @returns A new User object
 */

function createUser(name: string, email: string, age: number): User {
    if (age < 18) {
        throw new Error("User must be at legal age")
    }

    return {
        id: Math.floor(Math.random() * 1000),
        name,
        email,
        age
    }
}

const user1 = createUser("Bob", "bob@email.com", 27)

console.log(user1)