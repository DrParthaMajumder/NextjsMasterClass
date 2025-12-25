/*
  Example 5: Set collection (stores only unique values)
  Demonstrates:
  - Set constructor with type parameter: Set<type>
  - Set methods: add(), has()
  - Automatic duplicate removal
  - Unique value guarantee
  - Fast lookup operations
*/

const uniqueNumbers = new Set<number>();

uniqueNumbers.add(10);
uniqueNumbers.add(20);
uniqueNumbers.add(10); // duplicate ignored

console.log("Set:", uniqueNumbers);
console.log("Has 10:", uniqueNumbers.has(10));
console.log("Has 30:", uniqueNumbers.has(30));
