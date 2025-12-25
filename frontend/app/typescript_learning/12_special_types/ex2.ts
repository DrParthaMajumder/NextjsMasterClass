// unknown: you must check or narrow before using
// unknown cannot be used without type checking or assertion.

let valueUnknown: unknown = "hello";

valueUnknown = 123.5; // OK to assign anything

// Not allowed without narrowing:
// valueUnknown.toFixed();     // Error
// valueUnknown.toUpperCase(); // Error

if (typeof valueUnknown === "number") {
  // Now TS knows it's a number
  console.log(valueUnknown.toFixed(2));
}

if (typeof valueUnknown === "string") {
  console.log(valueUnknown.toUpperCase());
}
