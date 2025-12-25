/*
  Example 6: Record type (object with known key-value types)
  Demonstrates:
  - Record utility type: Record<keyType, valueType>
  - Type-safe object with consistent key-value structure
  - All keys must be of same type (string)
  - All values must be of same type (string)
  - Useful for dictionaries, lookup tables, configuration objects
*/

type FruitColor = Record<string, string>;

const fruits: FruitColor = {
  apple: "red",
  banana: "yellow",
  mango: "orange",
};

console.log("Fruits:", fruits);
console.log("Apple Color:", fruits.apple);
console.log("Banana Color:", fruits.banana);
console.log("Mango Color:", fruits.mango);
