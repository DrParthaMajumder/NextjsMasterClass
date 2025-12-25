import React from "react";

/*
 * Example17: Focus state input component
 * Demonstrates Tailwind CSS focus states with:
 * - Centered layout using flexbox utilities
 * - Input field with border and padding
 * - Custom focus styles (outline removal and blue ring)
 * - Responsive width and rounded corners
 * Used for practicing Tailwind focus state utilities
 */

export default function Example17() {
  return (
    <div className="flex items-center justify-center max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Focus me"
        className="border-2 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
      />
    </div>
  );
}
