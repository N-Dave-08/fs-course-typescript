{
    interface Book {
        title: string
        author: string
        pages: number
    }
    
    const book: Book = {
        title: "Harry Potter",
        author: "Dave Jacobs",
        pages: 256
    }

    console.log('Title: ', book.title)
    console.log('Author: ', book.author)
    console.log('Pages: ', book.pages)
    console.log('Full book: ', book)
}