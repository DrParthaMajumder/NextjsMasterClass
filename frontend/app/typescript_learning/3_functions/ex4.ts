/*
  Example 4: Default parameter (exponent = 2)
  Demonstrates:
  - Default parameter syntax: param: type = defaultValue
  - Automatic value assignment when parameter omitted
  - Exponentiation operator (**)
  - Function flexibility with default values
  - Override behavior when parameter provided
  - Common pattern for optional configuration
*/

function test_power(base: number, exponent: number = 2): number {
  return base ** exponent;
}

console.log(test_power(5)); // 25
console.log(test_power(5, 3)); // 125
