export interface User {
	name: string;
	age: number;
}

export type Status = "active" | "inactive";
export interface UserStatus {
	name: string;
	status: Status;
}
