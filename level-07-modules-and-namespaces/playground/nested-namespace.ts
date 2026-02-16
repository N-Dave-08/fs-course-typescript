namespace Geometry {
	export namespace Circle {
		export function area(radius: number): number {
			return Math.PI * radius * 2;
		}
	}

	export namespace Rectangle {
		export function area(width: number, height: number) {
			return width * height;
		}
	}
}

console.log(Geometry.Circle.area(6));
console.log(Geometry.Rectangle.area(10, 10));