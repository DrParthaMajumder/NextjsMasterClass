/*
  Example 3: Type Aliases
  Demonstrates:
  - Type alias syntax: type TypeName = { ... }
  - Reusable type definitions
  - Alternative to interface for object shapes
  - Type vs interface differences
  - Better for unions, intersections, primitives
  - Cleaner code with meaningful type names
*/

// TOPIC : Type aliases
// Create your own reusable type names
type Point = {
  x: number;
  y: number;
};

const p: Point = { x: 10, y: 20 };
// const p1: Point = { x: '10', y: 20 }; // Error
console.log("p:", p);
