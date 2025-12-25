/*
  Example 2: Promise with setTimeout
  Demonstrates:
  - Creating a Promise that resolves after a delay
  - Using setTimeout inside a Promise constructor
  - Async/await with time-based operations
  - Real-world simulation of async operations
*/

function waitOneSecond(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done after 1 second");
    }, 1000);
  });
}

async function main2() {
  console.log("Waiting...");
  const result = await waitOneSecond();
  console.log(result);
}

main2();
