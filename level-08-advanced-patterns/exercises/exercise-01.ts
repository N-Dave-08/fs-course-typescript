function processvalue(value: string | number): string | number | undefined {
	if (typeof value === "string") {
		return value.toUpperCase();
	} else if (typeof value === "number") {
		return value * value;
	}
}

console.log(processvalue("hello"));
console.log(processvalue(12));
