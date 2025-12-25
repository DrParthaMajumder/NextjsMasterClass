/*
  Example 4: Sequential Async Operations
  Demonstrates:
  - Running async operations one after another (sequentially)
  - Each await waits for the previous one to complete
  - Total execution time is sum of all operations
  - Use case: When order matters and each step depends on previous
*/

function sequentialTask(name: string, time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(name), time);
  });
}

async function main4() {
  const a = await sequentialTask("A", 1000);
  console.log(a);

  const b = await sequentialTask("B", 1000);
  console.log(b);

  const c = await sequentialTask("C", 1000);
  console.log(c);
}

main4();
