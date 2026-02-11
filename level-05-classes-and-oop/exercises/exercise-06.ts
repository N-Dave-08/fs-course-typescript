{
	class Animal {
		protected name: string;

		constructor(name: string) {
			this.name = name;
		}
	}

	class Dog extends Animal {
		breed: string;

		constructor(name: string, breed: string) {
			super(name);
			this.breed = breed;
		}

		getName(): string {
			return this.name;
		}
	}

	const myDog = new Dog("Bruno", "Bulldog");

	console.log("My dog's name: ", myDog.getName());
	console.log("My dog's breed: ", myDog.breed);
}
