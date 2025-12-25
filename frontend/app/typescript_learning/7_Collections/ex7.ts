/*
  Example 7: Index signature object (dynamic key-value collection)
  Demonstrates:
  - Index signature syntax: [key: keyType]: valueType
  - Dynamic object with flexible key names
  - Type-safe dynamic property access
  - Similar to Record but more flexible interface syntax
  - Useful for dictionaries, API responses, configuration objects
*/

interface Dictionary {
  [key: string]: string;
}

const dict: Dictionary = {
  hello: "namaste",
  bye: "tata",
};

console.log("Dictionary:", dict);
console.log("Hello:", dict.hello);
console.log("Bye:", dict.bye);
