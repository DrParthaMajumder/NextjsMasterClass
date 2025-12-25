// app/basic/ex8/page.tsx
// ✅ Example: Counter with functions inside the component

"use client"; // Needed in Next.js for interactivity (useState, onClick, etc.)
import { useState } from "react";

export default function CounterPage() {
  // Step 1: Create state variable
  const [count, setCount] = useState(0);

  // Step 2: Define functions inside (they depend on state)
  function increaseCount() {
    setCount((prev) => prev + 1);
  }

  function decreaseCount() {
    // Prevent going below 0 (optional, but nice UX)
    setCount((prev) => Math.max(0, prev - 1));
  }

  function resetCount() {
    setCount(0);
  }

  // Step 3: Use it in JSX
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-6">
      <h1 className="text-4xl font-bold text-blue-600">Counter: {count}</h1>

      <div className="flex gap-4">
        <button
          onClick={increaseCount}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Increase
        </button>

        <button
          onClick={decreaseCount}
          disabled={count === 0}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          Decrease
        </button>

        <button
          onClick={resetCount}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
