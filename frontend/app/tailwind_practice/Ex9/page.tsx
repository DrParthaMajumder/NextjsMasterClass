/**
 * Example 9: Input Form with Button
 *
 * Demonstrates Tailwind CSS form styling:
 * - Full-screen layout (min-h-screen, flex, items-center, justify-center)
 * - Form input styling (border, p-2, rounded, w-full)
 * - Button styling (bg-green-600, text-white, px-4, py-2, rounded-full)
 * - Flexbox layout with spacing (flex, gap-3)
 * - Responsive sizing (max-w-2xs, mx-auto)
 * - Interactive elements
 *
 * This component creates a simple form interface with an input field
 * and submit button, demonstrating proper form styling and layout
 * using Tailwind's utility classes.
 */
export default function Example9() {
  return (
    <div className="bg-gray-300 rounded-2xl flex items-center justify-center gap-3 p-6 max-w-xs mx-auto">
      <input
        type="text"
        placeholder="Enter your name"
        className="border border-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-300 p-2 rounded w-full"
      />
      <button className="bg-purple-800 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200 shadow-md hover:shadow-lg">
        Submit
      </button>
    </div>
  );
}
