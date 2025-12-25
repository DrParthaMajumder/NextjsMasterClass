"use client";

import { useState } from "react";
import MyButton from "./_components/MyButton";

export default function FunctionPropsExample() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  // Function to pass as prop
  const handleIncrement = () => {
    setCount(count + 1);
    setMessage("Button was clicked!");
  };

  // Another function to pass as prop
  const handleReset = () => {
    setCount(0);
    setMessage("Counter reset!");
  };

  // Function with parameters
  const handleCustomMessage = (msg: string) => {
    setMessage(msg);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Function Props Example
      </h1>

      <div className="space-y-6">
        {/* Pass handleIncrement function as prop */}
        <MyButton label="Click Me!" onClick={handleIncrement} />

        {/* Pass handleReset function as prop */}
        <MyButton label="Reset" onClick={handleReset} color="red" />

        {/* Pass arrow function as prop */}
        <MyButton
          label="Say Hello"
          onClick={() => handleCustomMessage("Hello from function prop!")}
          color="green"
        />
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Results:</h2>
        <p className="text-lg">
          Count: <strong>{count}</strong>
        </p>
        <p className="text-lg">
          Message: <strong>{message}</strong>
        </p>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">How Function Props Work:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Parent</strong> defines functions (handleIncrement,
            handleReset)
          </li>
          <li>
            <strong>Parent</strong> passes functions as props to child
            components
          </li>
          <li>
            <strong>Child</strong> calls the function when events happen (like
            onClick)
          </li>
          <li>
            <strong>Child</strong> doesn't know what the function does - just
            calls it
          </li>
          <li>
            This allows <strong>child → parent communication</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}
