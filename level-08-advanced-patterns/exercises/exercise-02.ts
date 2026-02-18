{
	interface Dog {
		bark(): void;
		breed: string;
	}

	interface Cat {
		meow(): void;
		color: string;
	}

	function isDog(animal: Dog | Cat): animal is Dog {
		return "bark" in animal;
	}

	function isCat(animal: Dog | Cat): animal is Cat {
		return "meow" in animal;
	}

	function makeSound(animal: Dog | Cat): void {
		if (isDog(animal)) {
			animal.bark();
			console.log("breed: ", animal.breed);
		} else if (isCat(animal)) {
			animal.meow();
			console.log("color: ", animal.color);
		}
	}

	const dog: Dog = {
		bark() {
			console.log("woof");
		},
		breed: "Bulldog",
	};
	makeSound(dog);

	const cat: Cat = {
		meow() {
			console.log("meow");
		},
		color: "yellow",
	};
	makeSound(cat);
}
