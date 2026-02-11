{
	class Animal {
		name: string;

		constructor(name: string) {
			this.name = name;
		}

		speak(): string {
			return `${this.name} makes a sound`;
		}
	}

	class Mammal extends Animal {
		warmBlooded: boolean = true;

		// constructor(name: string) {
		// 	super(name);
		// }

		giveBirth(): string {
			return `${this.name} gives birth to live young`;
		}
	}

	class Dog extends Mammal {
		breed: string;

		constructor(name: string, breed: string) {
			super(name);
			this.breed = breed;
		}

		speak(): string {
			return `${this.name} barks`;
		}

		fetch(): string {
			return `${this.name} fetches ball`;
		}
	}

	const dog = new Dog("Bruno", "Bulldog");

	console.log("Name: ", dog.name);
	console.log("isWarmblooded: ", dog.warmBlooded);
	console.log("Breed: ", dog.breed, "\n");

	console.log(dog.speak());
	console.log(dog.giveBirth());
	console.log(dog.fetch());
}
