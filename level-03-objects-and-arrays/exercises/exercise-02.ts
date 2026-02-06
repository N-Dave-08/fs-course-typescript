{
    const list = [1, 2, 3, 4, 5]
    console.log(`Originial list: ${list}`)

    list.push(6)
    console.log(`\nAfter push(6): ${list}`)

    list.unshift(0)
    console.log(`\nAfter unshift(0): ${list}`)

    list.pop()
    console.log(`\nAfter pop(): ${list}`)
}