{
	class Student {
		id: number;
		name: string;
		private grades: number[] = [];

		constructor(id: number, name: string) {
			this.id = id;
			this.name = name;
		}

		addGrade(grade: number): void {
			if (grade < 0 || grade > 100) {
				throw new Error("Grade must be between 0 and 100");
			}
			this.grades.push(grade);
		}

		getAverage(): number {
			if (this.grades.length === 0) {
				return 0;
			}
			const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
			return sum / this.grades.length;
		}

		getHighestGrade(): number {
			if (this.grades.length === 0) {
				return 0;
			}
			return Math.max(...this.grades);
		}

		getAllGrades(): number[] {
			return [...this.grades];
		}
	}

	const student1 = new Student(1, "Bob");
	student1.addGrade(97);
	student1.addGrade(89);
	student1.addGrade(91);

	console.log(`Bob's grades: ${student1.getAllGrades()}`);
	console.log(`Bob's highest grade: ${student1.getHighestGrade()}`);
	console.log(`Bob's average grade: ${student1.getAverage()}`);
}
