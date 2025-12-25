/*
  break
  Exits the loop completely when a condition is met
*/

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Stopping at", i);
    break; // exit the loop when i is 5
  }
  console.log("i:", i);
}

// Output:
// i: 1
// i: 2
// i: 3
// i: 4
// Stopping at 5
