namespace stringUtils {
	export function toUpperCase(str: string): string {
		return str.toUpperCase();
	}
	export function reverse(str: string): string {
		return str.split("").reverse().join("");
	}
	export function capitalize(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	}
}

console.log(stringUtils.toUpperCase("hello"));
console.log(stringUtils.reverse("hello"));
console.log(stringUtils.capitalize("hello"));
