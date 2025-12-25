/*
  Example 6: Real-world API Call with Fetch
  Demonstrates:
  - Making HTTP requests with fetch API
  - TypeScript typing for API responses
  - Real-world async data fetching pattern
  - Error handling with network requests
  - Working with JSON responses
  
  Note: In real applications, you'd want to:
  - Add proper error handling
  - Define interfaces for the response type
  - Add request timeout handling
  - Handle network connectivity issues
*/

async function getTodo1() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
}

getTodo1();
