{
	class Vehicle {
		brand: string;

		constructor(brand: string) {
			this.brand = brand;
		}

		start(): string {
			return `${this.brand} vehicle started`;
		}
	}

	class Car extends Vehicle {
		model: string;

		constructor(brand: string, model: string) {
			super(brand);
			this.model = model;
		}

		start(): string {
			return `${this.brand} ${this.model} car started`;
		}
	}

	const vehicle = new Vehicle("Kia");
	console.log("Vehicle class: ", vehicle.start());

	const car = new Car("Toyota", "Vios");
	console.log("\nBrand: ", car.brand);
	console.log("Model: ", car.model);

	// start() method has been overidden
	console.log("Method: ", car.start());
}
