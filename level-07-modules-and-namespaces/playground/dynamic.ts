async function loadModule() {
	const math = await import("./math");
	console.log(math.add(3, 5));
}

loadModule();
