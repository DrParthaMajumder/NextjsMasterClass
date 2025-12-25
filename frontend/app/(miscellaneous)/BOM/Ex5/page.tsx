"use client";
import { useEffect } from "react";

// BomExample5
// Demonstrates using BOM timer functions via window.setTimeout and window.clearTimeout.
// Starts a 2-second timer on mount and logs a message when it finishes.
// Tailwind CSS is used to style the timer description text.

// Hey browser, run this function after 2 seconds
export default function BomExample5() {
  useEffect(() => {
    const id = window.setTimeout(() => {
      console.log("Timer finished!");
    }, 2000);

    return () => window.clearTimeout(id);
  }, []);

  return (
    <p className="flex items-center justify-center bg-pink-500 p-4 mt-4 text-xl text-center text-white max-w-2xl mx-auto rounded-lg shadow-md">
      A 2-second timer is running. Check the console for the completion message.
    </p>
  );
}
