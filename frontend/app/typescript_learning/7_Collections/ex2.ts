/*
  Example 2: Array of objects (list of typed User objects)
  Demonstrates:
  - Interface definition for object structure
  - Array of typed objects: User[]
  - Object initialization with typed properties
  - Working with complex data structures
*/

interface User {
  name: string;
  age: number;
}

const test_users: User[] = [
  { name: "Partha", age: 26 },
  { name: "Maya", age: 30 },
];

console.log("Users:", test_users);
