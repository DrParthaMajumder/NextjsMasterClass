// Example 6: Demonstrates abstract class and abstract method
abstract class Employee {
  constructor(public name: string) {}

  abstract calculateSalary(): number;

  describe() {
    console.log(`Employee: ${this.name}`);
  }
}

class FullTime extends Employee {
  calculateSalary() {
    return 50000;
  }
}

const emp = new FullTime("John");
emp.describe();
console.log(emp.calculateSalary());
