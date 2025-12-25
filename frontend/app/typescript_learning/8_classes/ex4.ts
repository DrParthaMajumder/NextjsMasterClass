// Example 4: Demonstrates polymorphism (same method, different behavior)
class Shape {
  area(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  area(): number {
    return 3.14 * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(public side: number) {
    super();
  }

  area(): number {
    return this.side * this.side;
  }
}

const shapes: Shape[] = [new Circle(5), new Square(4)];
shapes.forEach((s) => console.log(s.area()));
