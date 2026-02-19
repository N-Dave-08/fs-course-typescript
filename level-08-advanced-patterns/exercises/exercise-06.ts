{
	interface User {
		id: number;
		name: string;
	}

	interface Post {
		id: number;
		title: string;
	}

	function delay(ms: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async function fetchUser(id: number, ms: number = 1000): Promise<User> {
		await delay(ms);

		return {
			id,
			name: `user-${id}`,
		};
	}

	async function fetchPosts(
		userId: number,
		ms: number = 1000,
	): Promise<Post[]> {
		await delay(ms);

		return [
			{
				id: 1,
				title: `post 1 by user-${userId}`,
			},
			{
				id: 2,
				title: `post 1 by user-${userId}`,
			},
		];
	}

	async function loadUserPosts(
		userId: number,
		userDelay?: number,
		postDelay?: number,
	): Promise<void> {
		try {
			const [user, posts] = await Promise.all([
				fetchUser(userId, userDelay),
				fetchPosts(userId, postDelay),
			]);

			console.log("user: ", user);
			console.log("posts: ", posts);
			if (userDelay && postDelay) {
				console.log(
					`total time: ~(user delay: ${userDelay}, post delay: ${postDelay})ms (parallel execution)`,
				);
			}
		} catch (error) {
			console.log("caught error: ", error);
		}
	}

	loadUserPosts(1, 1000, 500);
}
