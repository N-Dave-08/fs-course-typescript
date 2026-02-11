{
	class TemperatureC {
		private _celsius: number;

		constructor(celsius: number) {
			this._celsius = celsius;
		}

		get celsius(): number {
			return this._celsius;
		}

		set celsius(value: number) {
			if (value < -273.15) {
				throw new Error("Temperature cannot be below absolute zero");
			}
			this._celsius = value;
		}

		get fahrenheit(): number {
			return (this._celsius * 9) / 5 + 32;
		}

		set fahrenheit(value: number) {
			this._celsius = ((value - 32) * 5) / 9;
		}
	}

	const temp = new TemperatureC(25);

	console.log("Celcius: ", temp.celsius);
	console.log("Fahrenheit: ", temp.fahrenheit);
}
