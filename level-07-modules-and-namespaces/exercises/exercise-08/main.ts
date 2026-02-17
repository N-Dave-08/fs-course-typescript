import { createUser, type User } from "./models/User";
import { formatEmail, validateEmail } from "./utils/helpers";

const bob: User = {
	id: 918273,
	name: "Bob",
	email: "BOB@DOMAIN.COM",
};

const formattedEmail = formatEmail(bob.email);

const formattedUser: User = {
	...bob,
	email: formattedEmail,
};

console.log("Formatted email: ", formattedEmail);

if (validateEmail(formattedEmail)) {
	const user = createUser(
		formattedUser.id,
		formattedUser.name,
		formattedUser.email,
	);
	console.log("Created user: ", user);
}
