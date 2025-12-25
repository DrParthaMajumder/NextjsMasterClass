/*
  Example 5: Parallel Async Operations with Promise.all
  Demonstrates:
  - Running multiple async operations simultaneously (in parallel)
  - Promise.all waits for all promises to resolve
  - Total execution time is the longest single operation
  - Use case: When operations are independent and can run together
  - Returns array of results in the same order as input
*/

function parallelTask(name: string, time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(name), time);
  });
}

async function main5() {
  const results = await Promise.all([
    parallelTask("A", 1000),
    parallelTask("B", 2000),
    parallelTask("C", 1500),
  ]);

  console.log(results);
}

main5();
