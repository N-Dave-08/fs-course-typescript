{
	class Calculator {
		add(x: number, y: number): number {
			return x + y;
		}

		subtract(x: number, y: number): number {
			return x - y;
		}

		multiply(x: number, y: number): number {
			return x * y;
		}

		divide(x: number, y: number): number {
			if (y === 0) {
				throw new Error("Cannot divide by zero");
			}
			return x / y;
		}
	}

	const calc = new Calculator();

	console.log("10 + 5: ", calc.add(10, 5));
	console.log("10 - 5: ", calc.subtract(10, 5));
	console.log("10 * 5: ", calc.multiply(10, 5));
	console.log("10 / 5: ", calc.divide(10, 5));
}
