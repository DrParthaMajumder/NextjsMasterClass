/*
  Example 3: Optional parameter (b?: number)
  Demonstrates:
  - Optional parameter syntax: param?: type
  - Question mark makes parameter optional
  - Conditional logic for optional parameters
  - Ternary operator usage
  - Function overloading behavior
  - Undefined vs missing parameter handling
*/

function test_multiply(a: number, b?: number): number {
  return b ? a * b : a; //conditional (ternary) operator
}

console.log(test_multiply(4)); // 4
console.log(test_multiply(4, 3)); // 12
