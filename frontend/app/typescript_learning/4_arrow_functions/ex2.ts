/*
  Example 2: Implicit return
  Demonstrates:
  - Arrow function with implicit return
  - No curly braces needed for single expression
  - No 'return' keyword required
  - Even more concise syntax
  - Type inference for return type
  - Common pattern for simple operations
*/

const square = (x: number): number => x * x;

console.log("Square:", square(6)); // Output: Square: 36
