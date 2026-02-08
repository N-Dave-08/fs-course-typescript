{
    function processValue(value: string | number) {
        if (typeof value === "string") {
            return value.toUpperCase()
        } else if (typeof value === "number") {
            return value.toFixed(2)
        }
    }

    console.log("String Result: ", processValue("this is a string"))
    console.log("Number Result: ", processValue(123.123))
}