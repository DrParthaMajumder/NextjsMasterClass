// void: "no useful return value" from a function

function logMessage(msg: string): void {
  console.log(msg);
  // return;        // OK
  // return undefined; // Also allowed, but not needed
}

const result = logMessage("Hello");
// result has type void – you should not use it for data

// undefined: an actual value
let maybeNumber: number | undefined = undefined;
maybeNumber = 42;

// Function that returns undefined explicitly
function getMaybe(): undefined {
  return undefined;
}
