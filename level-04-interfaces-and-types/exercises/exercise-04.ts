{
    type UserId = string | number
    type Status = "active" | "inactive"

    const userId1: UserId = "k1j2n3kjn123"
    const userId2: UserId = 203984

    const status1: Status = "active"
    const status2: Status = "inactive"

    console.log(`UserIDs: ${userId1}, ${userId2}`)
    console.log(`Statuses: ${status1}, ${status2}`)
}