/**
 * Example 15: Loading Spinner Component
 *
 * Demonstrates Tailwind CSS loading animations:
 * - Fixed dimensions (w-10, h-10)
 * - Border styling (border-4, border-gray-300, border-t-blue-500)
 * - Circular shape (rounded-full)
 * - Spin animation (animate-spin)
 * - Responsive sizing (max-w-2xs, mx-auto)
 * - Centering (flex, items-center, justify-center)
 *
 * This component creates a classic loading spinner using
 * Tailwind's border utilities and built-in spin animation.
 * The blue top border against gray borders creates the
 * illusion of rotation. Commonly used for loading states.
 */
export default function Example15() {
  return (
    <div className="w-10 h-10 border-4 border-gray-300 border-b-emerald-500 border-t-fuchsia-700 rounded-full animate-spin mx-auto"></div>
  );
}
