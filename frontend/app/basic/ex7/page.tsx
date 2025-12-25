/**
 * ✅ Next.js useState Example (Client Component)
 *
 * This component demonstrates how to use the `useState` hook
 * inside a Next.js 15+ App Router project.
 *
 * - `use client` → Required because Server Components can’t use state or effects.
 * - `useState(0)` → Initializes a counter starting from 0.
 * - `setCount` → Updates the counter and triggers re-render.
 *
 * Example route: /example
 */

"use client";

import { useState } from "react";

export default function CounterPage() {
  // Declare a state variable
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center my-10 space-y-4">
      <h1 className="text-3xl font-bold text-indigo-500">
        Next.js useState Example
      </h1>
      <p className="text-xl">Count: {count}</p>

      <div className="space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-600 text-white rounded-xl"
        >
          ➕ Increment
        </button>

        <button
          onClick={() => setCount((prev) => Math.max(0, prev - 1))}
          className="px-4 py-2 bg-red-600 text-white rounded-xl"
        >
          ➖ Decrement
        </button>

        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-700 text-white rounded-xl"
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}
