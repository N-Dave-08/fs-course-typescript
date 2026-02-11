{
	class Shape {
		area(): number {
			return 0;
		}

		perimeter(): number {
			return 0;
		}
	}

	class Circle extends Shape {
		private radius: number;

		constructor(radius: number) {
			super();
			this.radius = radius;
		}

		area(): number {
			return Math.PI * this.radius ** 2;
		}

		perimeter(): number {
			return 2 * Math.PI * this.radius;
		}

		getRadius(): number {
			return this.radius;
		}
	}

	class Rectangle extends Shape {
		private height: number;
		private width: number;

		constructor(height: number, width: number) {
			super();
			this.height = height;
			this.width = width;
		}

		area(): number {
			return this.height * this.width;
		}

		perimeter(): number {
			return 2 * (this.width + this.height);
		}

		getHeight(): number {
			return this.height;
		}

		getWidth(): number {
			return this.width;
		}
	}

	const circle = new Circle(25);

	console.log("Radius of the Circle: ", circle.getRadius());
	console.log("Area of the Circle: ", circle.area());
	console.log("Perimeter of the Circle: ", circle.perimeter());

	const rect = new Rectangle(12, 12);

	console.log("\nHeight of the Rectangle: ", rect.getHeight());
	console.log("Width of the Rectangle: ", rect.getWidth());
	console.log("Area of the Rectangle: ", rect.area());
	console.log("Perimeter of the Rectangle: ", rect.perimeter());
}
