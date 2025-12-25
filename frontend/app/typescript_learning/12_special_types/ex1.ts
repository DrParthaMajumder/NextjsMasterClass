// any: turns off type checking for that value (dangerous)
// Avoid putting any in your main app logic

let valueAny: any = "hello";

valueAny = 123; // OK
valueAny.toUpperCase(); // OK at compile time, may crash at runtime

// Problem: TS cannot protect you
function logLengthAny(input: any) {
  console.log(input.length); // might be undefined at runtime
}

logLengthAny("text"); // OK
logLengthAny(42); // Runtime error: length is undefined
