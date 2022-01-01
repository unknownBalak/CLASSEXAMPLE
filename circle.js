class Cirlce extends Shape {
  constructor(radius) {
    super(radius, radius);
  }
  calculateArea() {
    return `Radius of the circle is ${super.calculateArea() * 3}`;
  }
}

let circle = new Cirlce(5);

console.log(circle.calculateArea());
