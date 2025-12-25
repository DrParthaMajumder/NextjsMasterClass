// Example 8: Demonstrates TypeScript parameter properties shortcut
class Person {
  constructor(
    public name: string,
    private age: number,
  ) {}

  info() {
    console.log(this.name, this.age);
  }
}

const p_test = new Person("Partha", 22);
p_test.info();
