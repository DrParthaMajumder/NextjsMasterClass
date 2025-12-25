/*
  Example 1: Basic class with constructor and method
  Demonstrates:
  - Class syntax: class ClassName { ... }
  - Property declarations with types
  - Constructor method for object initialization
  - 'this' keyword for accessing instance properties
  - Method definitions within classes
  - Object instantiation with 'new' keyword
  - Template literals in methods
*/

class Car {
  brand: string;
  speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  drive() {
    console.log(`${this.brand} is driving at ${this.speed} km/h`);
  }
}

const c1 = new Car("BMW", 120);
c1.drive();
