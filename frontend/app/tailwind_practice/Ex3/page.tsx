/**
 * Example 3: Responsive Typography
 *
 * Demonstrates Tailwind CSS responsive design:
 * - Responsive text sizing (text-lg sm:text-xl md:text-2xl lg:text-3xl)
 * - Breakpoint-specific utilities (sm:, md:, lg:)
 * - Fluid typography scaling
 *
 * This component showcases how text size automatically adjusts
 * based on screen width using Tailwind's responsive prefixes.
 *
 * Breakpoints:
 * - sm: 640px and up
 * - md: 768px and up
 * - lg: 1024px and up
 */
export default function Example3() {
  return (
    <p className="text-emerald-500 sm:text-pink-600 md:text-pink-900 lg:text-red-700 text-center text-lg  sm:text-xl md:text-2xl lg:text-3xl  max-w-5xl mx-auto">
      Responsive text size changes based on screen width!
    </p>
  );
}
