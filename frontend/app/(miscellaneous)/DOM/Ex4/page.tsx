"use client";

import { useState } from "react";

export default function DomExample4() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleMessage = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="flex flex-col bg-pink-500 items-center justify-center text-center max-w-2xs mx-auto gap-5 p-5">
      <h2 className="text-xl font-semibold">Next.js DOM Example 4 (with React state)</h2>

      {isVisible && (
        <p id="secret-3696" className="mb-4">
          This is a secret message controlled by React state!
        </p>
      )}

      <button
        onClick={toggleMessage}
        className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Show / Hide Message
      </button>
    </div>
  );
}
