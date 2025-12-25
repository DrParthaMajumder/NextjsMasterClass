/*
  Example 3: Returning an object
  Demonstrates:
  - Arrow function returning object literal
  - Parentheses around object required (to distinguish from block)
  - Property shorthand syntax (name: name becomes just name)
  - Object creation with arrow functions
  - Common pattern for factory functions
*/

const createUser = (name: string, age: number) => ({
  name,
  age,
});

console.log("User:", createUser("Partha", 25));
// Output: User: { name: 'Partha', age: 25 }
