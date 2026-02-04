type CreateUserInput = {
    email: string
    name: string
    age?: number
}

function isNonEmptyString(value: unknown): value is string {
    return typeof value === "string" && value.trim().length > 0
}

function isValidEmail(value: unknown): value is string {
    if (typeof value !== "string") return false

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(value)
}

function toCreateUserInput(payload: unknown): CreateUserInput {
    if (typeof payload !== "object" || payload === null) {
        throw new Error("Payload must be an object")
    }

    const maybe = payload as Record<string, unknown>

    if (!isValidEmail(maybe.email)) throw new Error("email is required")
    if (!isNonEmptyString(maybe.name)) throw new Error("name is required")

    const age = typeof maybe.age === "number" ? maybe.age : undefined

    return {
        email: maybe.email,
        name: maybe.name,
        age
    }
}

console.log((toCreateUserInput({
    "email": "asd@gmail.com",
    "name": "asdasdasd",
    "age": 27
})))