{
	function delay(ms: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	function fetchData(): Promise<string> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve("data loaded");
			}, 1000);
		});
	}

	// fetchData()
	// 	.then((data) => {
	// 		console.log("data: ", data);
	// 		return delay(1000);
	// 	})
	// 	.then(() => {
	// 		console.log("deplay completed");
	// 	})
	// 	.catch((error) => {
	// 		console.error(error);
	// 	});

	// cleaner version
	async function run() {
		try {
			const data = await fetchData();
			console.log("data: ", data);
			await delay(1000);
			console.log("delay completed");
		} catch (error) {
			console.error("error: ", error);
		}
	}

	run();
}
