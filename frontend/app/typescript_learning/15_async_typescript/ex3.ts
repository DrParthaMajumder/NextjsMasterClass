/*
  Example 3: Error Handling with Async/Await
  Demonstrates:
  - Creating a Promise that rejects
  - Try/catch blocks with async/await
  - Error handling in asynchronous operations
  - Proper error management patterns
*/

function getData(): Promise<string> {
  return new Promise((_, reject) => {
    reject("Something went wrong!");
  });
}

async function main3() {
  try {
    const result = await getData();
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

main3();
