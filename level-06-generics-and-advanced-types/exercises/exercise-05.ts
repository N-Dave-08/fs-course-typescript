{
	interface Product {
		id: number;
		name: string;
		description: string;
		price: number;
		category: string;
	}

	type ProductSummary = Pick<Product, "name" | "price">;

	function getSummary(product: Product): ProductSummary {
		return {
			name: product.name,
			price: product.price,
		};
	}

	const chair: Product = {
		id: 123,
		name: "chair",
		description: "this is a good chair",
		price: 12.99,
		category: "appliances",
	};
	console.log("product full info: ", chair);

	const chairSummary = getSummary(chair);
	console.log("product summary: ", chairSummary);
}
