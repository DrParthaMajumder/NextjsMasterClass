/*
  Example 2: Literal Types
  Variable can only have specific fixed values.
  Here: "success" | "error"
*/

function showStatus(status: "success" | "error") {
  if (status === "success") {
    console.log("Operation completed successfully!");
  } else {
    console.log("Something went wrong!");
  }
}

showStatus("success");
showStatus("error");
