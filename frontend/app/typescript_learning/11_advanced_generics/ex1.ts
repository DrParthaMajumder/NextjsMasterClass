// ex1.ts – Constrained generic: T must have length
// the function isn’t “computing” the length itself. It’s just reading the `
// length property from whatever object you pass.

function logLength<T extends { length: number }>(value: T): void {
  console.log("Length:", value.length);
}

logLength("hello");
logLength([1, 2, 3]);
// logLength(123); // Error: number has no "length" property
