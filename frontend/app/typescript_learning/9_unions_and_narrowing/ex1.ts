/* 
  Example 1: Union Types
  A variable can hold more than one type.
  Here: string | number
*/

function printId(id: string | number) {
  console.log("Your ID is:", id);
}

printId("abc123");
printId(101);
