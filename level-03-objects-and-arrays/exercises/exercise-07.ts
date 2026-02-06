type Product = {
    id: number
    name: string
    price: number
}

const products: Product[] = [
    {
        id: 1,
        name: "table",
        price: 79.99
    },
    {
        id: 2,
        name: "chair",
        price: 59.99
    },
    {
        id: 3,
        name: "ladder",
        price: 19.99
    },
]

const productTwo = products.find(product => product.id === 2)
console.log('Product id 2: ', productTwo)

const prices = products.map((product) => product.price)
console.log('\nPrices: ', prices)

const highPrice = products.filter(product => product.price > 50)
console.log('\nExpensive products: ', highPrice)

const totalPrice = products.reduce((t, p) => t + p.price, 0)
console.log('\nTotal price: ', totalPrice)