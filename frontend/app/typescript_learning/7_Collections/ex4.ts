/*
  Example 4: Map collection (key-value store with unique keys)
  Demonstrates:
  - Map constructor with type parameters: Map<keyType, valueType>
  - Map methods: set(), get()
  - Key-value pair storage
  - Type-safe key and value access
  - Unique keys guarantee
*/

const my_scores = new Map<string, number>();

my_scores.set("math", 95);
my_scores.set("science", 88);

console.log("Scores:", my_scores);
console.log("Math Score:", my_scores.get("math"));
