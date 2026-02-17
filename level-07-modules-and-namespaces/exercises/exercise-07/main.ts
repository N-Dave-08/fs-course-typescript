namespace Shapes {
	export namespace Circle {
		export function area(radius: number): number {
			return Math.PI * (radius * radius);
		}
		export function circumference(radius: number): number {
			return 2 * Math.PI * radius;
		}
	}
	export namespace Rectangle {
		export function area(width: number, height: number): number {
			return width * height;
		}
		export function circumference(width: number, height: number): number {
			return 2 * (width + height);
		}
	}
}

console.log("Area of a Circle with a radius of 2: ", Shapes.Circle.area(2));
console.log(
	"Circumference of a Circle with a radius of 2: ",
	Shapes.Circle.circumference(2),
);
console.log(
	"Area of a Retangle with the height and width of 2: ",
	Shapes.Rectangle.area(2, 2),
);
console.log(
	"Circumference of a Rectangle with the height and width of 2: ",
	Shapes.Rectangle.circumference(2, 2),
);
