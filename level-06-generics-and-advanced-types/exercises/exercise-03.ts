{
	/**
	 *
	 * @param value can be string or array
	 * @returns lenght of that value
	 */

	function getLength<T extends { length: number }>(value: T): number {
		return value.length;
	}

	console.log(getLength("hello"));
	console.log(getLength([1, 2, 3]));
}
