function delay(ms: number): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

function fetchData(): Promise<string> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("data loaded successfully");
		}, 1000);
	});
}

fetchData()
	.then((data) => {
		console.log("data: ", data);
		return delay(500);
	})
	.then(() => {
		console.log("delay completed");
	})
	.catch((error) => {
		console.error("error: ", error);
	});
