/*
  Example 1: Basic Async Function
  Demonstrates:
  - How to create an async function
  - Async functions automatically return Promises
  - Using await to get the resolved value
*/

async function test_greet1() {
  return "Hello World";
}

async function main1() {
  const msg = await test_greet1();
  console.log(msg);
}

main1();
