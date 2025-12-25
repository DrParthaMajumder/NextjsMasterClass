/**
 * Example 6: Dark Mode Toggle Component
 *
 * Demonstrates React state management with Tailwind CSS:
 * - React hooks (useState) for state management
 * - Dark mode utilities (dark:, dark:bg-blue-600, dark:text-white)
 * - Conditional class application based on state
 * - Event handling (onClick)
 * - Color transitions between light and dark themes
 * - Responsive and adaptive styling
 *
 * This component showcases how to implement a dark mode toggle
 * using React state and Tailwind's dark mode variants. The UI
 * dynamically changes colors based on the dark state.
 */
"use client";

import { useState } from "react";

export default function Example6() {
  const [dark, setDark] = useState(false);

  const handleToggle = () => {
    setDark((prev) => !prev);
  };

  return (
    <div className={dark ? "dark min-h-screen p-6" : "min-h-screen p-6"}>
      <div className="min-h-screen flex flex-col items-center justify-center text-center mt-4 p-4 bg-gray-200 dark:bg-gray-700 text-pink-500 dark:text-white rounded dark:rounded-2xl w-full mx-auto">
        <img
          src="/globe.svg"
          alt="Globe"
          className="w-36 h-36 mb-4 hover:animate-spin transition-transform duration-500 ease-in-out"
        />
        <button
          onClick={handleToggle}
          className="px-4 py-2 bg-gray-900 dark:bg-blue-600 text-white rounded"
        >
          Toggle Dark Mode
        </button>
        <p>This box changes color in dark mode.</p>
      </div>
    </div>
  );
}
