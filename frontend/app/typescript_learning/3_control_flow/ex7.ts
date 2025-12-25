/*
  if / else
  Executes code based on conditions
*/
let my_age: number = 20;
let country: string = "India";

if (country === "India") {
  console.log("Country is India");

  if (my_age >= 18) {
    console.log("Eligible for voting");
  } else {
    console.log("Not eligible for voting");
  }
} else {
  console.log("Country is NOT India");
}
