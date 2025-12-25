/*
  continue
  Skips the current loop iteration and moves to the next one
*/

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // skip even numbers
  }
  console.log("Odd number:", i);
}

// Output:
// Odd number: 1
// Odd number: 3
// Odd number: 5
// Odd number: 7
// Odd number: 9
