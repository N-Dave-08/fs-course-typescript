{
	interface User {
		id: number;
		name: string;
		email: string;
		password: string;
	}

	type SafeUser = Omit<User, "password">;

	function getSafeUser(user: User): SafeUser {
		const { password: _, ...safeUser } = user;
		return safeUser;
	}

	const user: User = {
		id: 123,
		name: "Bob",
		email: "bob@mail.com",
		password: "bobpassword",
	};

	console.log("safe user info: ", getSafeUser(user));
}
