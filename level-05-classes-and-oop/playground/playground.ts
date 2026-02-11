{
    class TemperatureC {
        constructor(private _value: number) {
            if (Number.isNaN(_value)) throw new Error("Temperature must be a number")
        }

        get value(): number {
            return this._value
        }

        set value(next: number) {
            if (Number.isNaN(next)) throw new Error("Temperature must be a number")
                this._value = next
        }
    }

    const tempC = new TemperatureC(12)

    console.log(tempC.value)

    tempC.value = 24

    console.log(tempC.value)
}