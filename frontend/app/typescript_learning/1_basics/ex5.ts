/*
  unknown:
  Similar to any, BUT safer.
  You must check the type before using it.
*/
let value: unknown = "Hello";

value = "xyz";
if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✓ safe
}

// console.log(value.toUpperCase());  // ❌ Error — unknown is not guaranteed to be string
