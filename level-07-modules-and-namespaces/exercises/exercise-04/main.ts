import type { Status, User } from "./types";

const user: User = {
	id: 987324,
	name: "Bob",
	email: "bob@domain.com",
};

const status: Status = "active";

console.log(`${user.name} is ${status}`);
