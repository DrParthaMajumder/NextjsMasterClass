/**
 * Example 1: Basic Button Component
 *
 * Demonstrates fundamental Tailwind CSS utilities:
 * - Flexbox layout with centering (flex, items-center, justify-center)
 * - Color transitions on hover (bg-blue-400 hover:bg-fuchsia-800)
 * - Text styling and padding (text-white, px-4, py-2)
 * - Border radius and transitions (rounded-lg, transition)
 * - Responsive sizing (max-w-2xl, mx-auto)
 *
 * This component showcases a simple interactive button with
 * color-changing hover effects and proper centering.
 */
export default function Example1() {
  // <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
  return (
    <button className="flex items-center justify-center bg-blue-400 hover:bg-fuchsia-800 text-white px-4 py-2 rounded-lg transition max-w-xl mx-auto">
      Click Me
    </button>
  );
}
