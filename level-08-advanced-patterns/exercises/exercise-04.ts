{
	interface User {
		id: number;
		name: string;
		email: string;
	}

	function delay(ms: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async function loadUser(id: number): Promise<User> {
		await delay(500)
		return {
			id,
			name: `user ${id}`,
			email: `user${id}@domain.com`
		}
	}

	async function main() {
		try {
			const user = await loadUser(1)
			console.log('loaded user: ', user)
		} catch (error) {
			console.error('error loading user: ', error)
		}
	}

	main()
}