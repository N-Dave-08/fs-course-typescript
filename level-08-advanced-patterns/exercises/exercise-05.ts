{
	async function riskyOperation(success: boolean): Promise<string> {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		if (!success) {
			throw new Error("operation failed");
		}

		return "operation successful";
	}

	async function testOperation() {
		// test success
		try {
			const result = await riskyOperation(true);
			console.log("success: ", result);
		} catch (error) {
			console.error("error: ", error);
		}

		// test failed
		try {
			await riskyOperation(false);
		} catch (error) {
			console.error("caught error: ", error);
		}
	}

	testOperation();
}
