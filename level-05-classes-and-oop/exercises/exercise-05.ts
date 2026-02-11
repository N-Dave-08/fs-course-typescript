{
	class Product {
		readonly id: number;
		name: string;
		price: number;

		constructor(id: number, name: string, price: number) {
			this.id = id;
			this.name = name;
			this.price = price;
		}
	}

	const prod = new Product(12, "table", 20.99);
	console.log("Current Product: ", prod);

	// this will cause error as indentifier id is readonly
	// prod.id = 23
	prod.name = "chair";
	prod.price = 14.99;

	console.log("Updated Product: ", prod);
}
