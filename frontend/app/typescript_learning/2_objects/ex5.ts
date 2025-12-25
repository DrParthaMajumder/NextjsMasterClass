/*
  Example 5: Object containing a method
  Demonstrates:
  - Object methods (functions inside objects)
  - Method definition syntax: propertyName: function(params) { ... }
  - Method calling syntax: object.method(args)
  - Function parameters with type annotations
  - Return type inference
  - Object-oriented programming basics
  - Method vs regular function concepts
*/

const calculator = {
  // 'add' is a method of the 'calculator' object.
  // It takes two numbers (a and b) and returns their sum.
  add: function (a: number, b: number) {
    return a + b;
  },
};

// Call the 'add' method on the 'calculator' object with 10 and 20.
// The result (30) is printed to the console.
console.log(calculator.add(10, 20)); // Output: 30
