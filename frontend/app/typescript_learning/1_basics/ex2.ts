// Type inference examples

/*
  Example 2:
  Shows how TypeScript automatically infers types
  based on the assigned values.
  Here, "city" becomes a string,
  and "count" becomes a number without manually specifying types.
*/

let my_city = "Tokyo";
let count = 100;

console.log("my_city:", my_city);
console.log(typeof my_city);
console.log("count:", count);
console.log(typeof count);
