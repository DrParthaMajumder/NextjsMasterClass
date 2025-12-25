/*
  Example 1: Typed parameters & typed return value
  Demonstrates:
  - Function parameter types: param: type
  - Function return type annotation: (): returnType
  - Type safety for function inputs and outputs
  - TypeScript enforces correct types at compile time
  - Basic arithmetic function with type safety
*/

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(3, 7)); // 10
