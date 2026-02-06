{
    type Address = {
        street: string
        city: string
    }
    
    type Person = {
        name: string
        address: Address
        contacts: string[]
    }

    const person1: Person = {
        name: "Bob",
        address: {
            street: "Paltok",
            city: "Malolos"
        },
        contacts: ["+63019328", "+63019356", "+63019334"]
    }

    console.log('Name', person1.name)
    console.log('Street', person1.address.street)
    console.log('City', person1.address.city)
    console.log('Contacts', person1.contacts)

    // array elements
    console.log('First contact', person1.contacts[0])
    console.log('Contacts count', person1.contacts.length)
}