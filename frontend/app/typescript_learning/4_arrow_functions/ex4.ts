/*
  Example 4: Generic arrow function
  Demonstrates:
  - Generic type parameter: <T>
  - Type preservation through function
  - Identity function pattern
  - Generic arrow function syntax
  - Type inference for generic functions
  - Reusable utility functions
*/

const identity = <T>(value: T): T => value;

console.log("Identity:", identity("Hello"));
// Output: Identity: Hello
