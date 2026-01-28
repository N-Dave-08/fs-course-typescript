function processValue(value: string | number): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase())
    } else {
        console.log(value.toFixed(2))
    }
}

processValue(2.75645435)
processValue("hello")