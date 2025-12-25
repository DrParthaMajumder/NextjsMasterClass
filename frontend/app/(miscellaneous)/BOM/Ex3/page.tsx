"use client";

import { useEffect } from "react";

// BomExample3
// Demonstrates using the BOM Web Storage API via window.localStorage.
// On mount, it stores a name in localStorage and logs the stored value.
// Tailwind CSS is used to style the explanatory paragraph.

export default function BomExample3() {
  useEffect(() => {
    localStorage.setItem("name", "Partha");
    console.log("Stored name:", localStorage.getItem("name"));
  }, []);

  return (
    <p className="flex items-center justify-center bg-purple-600 p-4 mt-4 text-lg text-white max-w-2xl mx-auto rounded-lg shadow-md">
      Open the console to see the value stored in localStorage.
    </p>
  );
}
