function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  const result = divide(10, 0); // This will throw
  console.log("Result:", result);
} catch (err: unknown) {
  if (err instanceof Error) {
    console.log("Error:", err.message);
  }
}

console.log("Program continues...");
