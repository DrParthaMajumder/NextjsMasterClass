"use client";

import { useEffect, useState } from "react";

// BomExample4
// Demonstrates reading from the BOM window object via window.innerWidth.
// Captures the current viewport width when the component mounts.
// Tailwind CSS is used to style the text displaying the screen width.

export default function BomExample4() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <p className="flex items-center justify-center bg-blue-100 p-4 mt-4 text-lg font-medium text-gray-800 max-w-2xl mx-auto rounded-lg shadow-md">
      Screen width: {width}px
    </p>
  );
}
