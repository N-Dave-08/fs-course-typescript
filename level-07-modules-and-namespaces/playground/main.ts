import { Calc, Calculator } from "./index";
import { upper } from "./string";
import greet, { randomNumber } from "./utils";
import type { User, UserStatus } from "./types";
import log from "./logger";

console.log(Calc.add(2, 2));

console.log(Calc.subtract(3, 1));

console.log(upper("Hello"));

const calc = new Calculator();

console.log(calc.add(2, 2));

console.log(greet("Bob"));

console.log(Calc.add(2, randomNumber));

const bob: User = {
	name: "Bob",
	age: 24,
};

console.log(bob);

log("hello world");

const userStatus: UserStatus = {
	name: "Alice",
	status: "active",
};

console.log(userStatus);

