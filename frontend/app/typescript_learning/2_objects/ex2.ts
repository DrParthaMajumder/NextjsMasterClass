/*
  Example 2: Object with explicit type annotation
  Demonstrates:
  - Inline object type annotation: { property: type; ... }
  - Explicit type safety for object properties
  - Type checking during object creation
  - Property access with type guarantees
  - Useful when interfaces are overkill for simple objects
*/

const user: { username: string; isAdmin: boolean } = {
  username: "partha123",
  isAdmin: false,
};

console.log(user);
console.log(user.username); // Output: partha123
console.log(user.isAdmin); // Output: false
