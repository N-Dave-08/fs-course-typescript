export function formatEmail(email: string): string {
	return email.toLowerCase();
}

export function validateEmail(email: string): boolean {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
