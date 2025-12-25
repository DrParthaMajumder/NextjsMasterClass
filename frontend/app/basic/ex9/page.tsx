// ✅ Example 2: Function outside the component
// This function does NOT directly depend on React state.
// It only contains logic (like adding 1) and can be reused anywhere.
// Use this pattern for reusable helper logic or utilities.

"use client"; // Needed for interactivity (useState, onClick)
import { useState } from "react";

function getNextCount(currentCount: number) {
  return currentCount + 1;
}

export default function CounterPage() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(getNextCount(count)); // Call external function
  }

  // Step 4: Return JSX
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Counter: {count}
      </h1>

      <button
        onClick={handleIncrease}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Increase
      </button>
    </div>
  );
}
