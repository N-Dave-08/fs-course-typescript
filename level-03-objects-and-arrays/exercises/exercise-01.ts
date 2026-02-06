type Book = {
    title: string
    author: string
    year: number
    isAvailable: boolean
}

const book: Book = {
    title: "Harry Potter",
    author: "Dave Jacobs",
    year: 1998,
    isAvailable: true
}

console.log(`Title: ${book.title}`)
console.log(`Author: ${book.author}`)
console.log(`Year: ${book.year}`)
console.log(`isAvailable: ${book.isAvailable}`)