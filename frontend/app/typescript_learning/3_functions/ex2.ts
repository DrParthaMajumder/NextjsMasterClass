/*
  Example 2: Function returning a string
  Demonstrates:
  - String parameter type annotation
  - String return type annotation
  - Template literals in TypeScript
  - String interpolation with type safety
  - Function usage with typed parameters
*/

function test_greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(test_greet("Partha"));
