// This example shows how TypeScript enums work.
// Enums give names to numeric values. The first value starts at 0 by default.
// We can access the numeric value (e.g., Status.Pending → 0)
// and also access the name using reverse lookup (Status[0] → "Pending").

enum Status {
  Pending, // 0
  InProgress, // 1
  Done, // 2
}

let taskStatus: Status = Status.Pending;
let taskProgress: Status = Status.InProgress;
let taskDone: Status = Status.Done;

console.log("Task Status:", taskStatus); // 0
console.log("Task Progress:", taskProgress); // 1
console.log("Task Done:", taskDone); // 2
console.log("Task Status Name:", Status[0]); // "Pending"
console.log("Task Progress Name:", Status[1]);
