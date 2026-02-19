{
	interface Circle {
		kind: "circle";
		radius: number;
	}

	interface Rectangle {
		kind: "rectangle";
		width: number;
		height: number;
	}

	type Shape = Circle | Rectangle;

	function getArea(shape: Shape): number {
		switch (shape.kind) {
			case "circle":
				return Math.PI * shape.radius * shape.radius;
			case "rectangle":
				return shape.width * shape.height;
		}
	}

	const circle: Circle = { kind: "circle", radius: 5 };
	const rectangle: Rectangle = { kind: "rectangle", width: 10, height: 10 };

	console.log(
		`area of a circle with the radius of ${circle.radius} is ${getArea(circle)}`,
	);
	console.log(
		`area of a rectangle with the width of ${rectangle.width} and height of ${rectangle.height} is ${getArea(rectangle)}`,
	);
}
