{
	interface User {
		name: string;
		email: string;
		age: number;
	}

	/**
	 *
	 * @param user User properties
	 * @param updates can take only one property
	 * @returns all user properties + the updated proterty
	 */

	function updateUser(user: User, updates: Partial<User>): User {
		return {
			...user,
			...updates,
		};
	}

	const bob: User = {
		name: "Bob",
		email: "bob@domain.com",
		age: 27,
	};
	console.log("original: ", bob);

	const updateBob = updateUser(bob, { email: "bob@gmail.com" });
	console.log("updated: ", updateBob);
}
