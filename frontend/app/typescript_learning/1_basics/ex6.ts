/*
  never:
  Function that never returns a value.
  Usually because it always throws an error.
*/
function throwError(message: string): never {
  throw new Error(message);
}

throwError("Something went wrong here."); // program stops here
console.log("This line never runs");
