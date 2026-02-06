{
    const coordinates: [number, number] = [10, 20]
    const [x, y] = coordinates
    console.log('X coordinate', x)
    console.log('X coordinate', y)

    const personInfo: [string, number, boolean] = ["Bob", 26, true]
    const [name, age, isActive] = personInfo
    console.log('Name: ', name)
    console.log('Age: ', age)
    console.log('isActive: ', isActive)

    // access by index
    console.log('First coordinate: ', coordinates[0])
}