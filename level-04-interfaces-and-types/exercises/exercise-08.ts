{
    interface Product {
        id: string | number
        name: string
        price: number
        inStock?: boolean
    }

    const products: Product[] = [
        {
            id: "2k3jn4",
            name: "table",
            price: 24.99
        },
        {
            id: "l2k3m4",
            name: "ladder",
            price: 39.99,
            inStock: true
        },
        {
            id: "0a98sd",
            name: "chair",
            price: 19.99,
            inStock: true
        }
    ]

    const expensiveProducts = products.filter(p => p.price > 20)
    console.log('Expensice Products: ', expensiveProducts)

    const inStockProducts = products.filter(p => p.inStock)
    console.log('In stock Products: ', inStockProducts)
}