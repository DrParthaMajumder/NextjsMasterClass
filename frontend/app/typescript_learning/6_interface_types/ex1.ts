/*
  Example 1: Basic Interface Definition
  Demonstrates:
  - Interface syntax: interface InterfaceName { ... }
  - Object shape definition with typed properties
  - Type enforcement for object creation
  - Compile-time type checking
  - Interface as contract for object structure
  - Error prevention with wrong types
*/

// TOPIC 6: Interfaces
// Interfaces define the shape and types of objects
interface User {
  name: string;
  age: number;
}

const person: User = { name: "Bob", age: 30 };
// const person1: User = { name: "Bob", age: '30' }; // Error
console.log("perons:", person);
