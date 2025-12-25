"use client";

import { useEffect } from "react";

// BomExample2
// Demonstrates using the BOM location object via window.location.href.
// Logs the current page URL to the browser console when the component mounts.
// Tailwind CSS is used to style the instructional paragraph text.

export default function BomExample2() {
  useEffect(() => {
    console.log("Current URL:", window.location.href);
  }, []);

  return (
    <p className="flex items-center justify-center bg-pink-600 p-4 mt-4 text-2xl text-white max-w-2xl mx-auto">
      Check the browser console to see the current URL.
    </p>
  );
}
