/*
  Example 4: Type Narrowing using typeof
  Helps TypeScript understand the exact type at runtime.
*/

function printValue(val: string | number) {
  if (typeof val === "string") {
    console.log("Uppercase:", val.toUpperCase());
  } else {
    console.log("Number fixed:", val.toFixed(2));
  }
}

printValue("hello world");
printValue(42.6789);
