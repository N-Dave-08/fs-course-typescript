{
	/**
	 *
	 * @param values array of values
	 * @returns the first value of the element in the array
	 */

	function getFirst<T>(values: T[]): T | undefined {
		return values.length > 0 ? values[0] : undefined;
	}

	const nums: number[] = [1, 2, 3, 4, 5, 6];
	const firstNum = getFirst(nums);
	console.log(firstNum);

	const fruits: string[] = ["apple", "orange", "mango"];
	const firstFruits = getFirst(fruits);
	console.log(firstFruits);

	const empty: string[] = [];
	const testEmpty = getFirst(empty);
	console.log(testEmpty);
}
