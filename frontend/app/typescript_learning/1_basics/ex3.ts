/*
  Example 3:
  Explains variables and constants in TypeScript.
  - let: mutable
  - const: immutable
  - Block scoping using {}
*/

let x = 90;
x = 95;

const pi = 3.14;
// pi=3.15; // Error: Cannot assign to 'pi' because it is a constant or a read-only property

console.log("x:", x);
console.log("pi:", pi);
