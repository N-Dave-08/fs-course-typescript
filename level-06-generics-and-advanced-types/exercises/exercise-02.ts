{
	class Stack<T> {
		private items: T[] = [];

		push(item: T): void {
			this.items.push(item);
		}

		pop(): T | undefined {
			return this.items.pop();
		}

		isEmpty(): boolean {
			return this.items.length === 0;
		}

		size(): number {
			return this.items.length;
		}

		peek(): T | undefined {
			return this.items[this.items.length - 1];
		}
	}

	const numberStack = new Stack<number>();

	// add numbers to the private items[]
	numberStack.push(12);
	numberStack.push(13);
	numberStack.push(14);
	console.log(numberStack);

	// remove the last elemement in the items[]
	numberStack.pop();
	console.log(numberStack);

	// check if empty or nah
	console.log(numberStack.isEmpty());

	// check the length
	console.log(numberStack.size());

	// show the last element in the items[]
	console.log(numberStack.peek());
}
