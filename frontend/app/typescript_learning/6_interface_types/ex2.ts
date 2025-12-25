/*
  Example 2: Optional Properties
  Demonstrates:
  - Optional property syntax: propertyName?: type
  - Question mark indicates property may be undefined
  - Flexible object shapes with required and optional fields
  - Partial object implementation
  - Common pattern for configuration objects
  - Type safety with optional properties
*/

// TOPIC 7: Optional properties
// Use ? to mark that a property may or may not exist
interface Book {
  title: string;
  pages?: number;
}

const b1: Book = { title: "TS Guide" }; // valid
console.log("b1:", b1);
