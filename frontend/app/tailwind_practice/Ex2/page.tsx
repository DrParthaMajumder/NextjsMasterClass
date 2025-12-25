/**
 * Example 2: Card Component with Layout
 *
 * Demonstrates Tailwind CSS layout and styling:
 * - Full-screen container with flexbox centering (min-h-screen, flex, items-center, justify-center)
 * - Background colors (bg-gray-100, bg-white)
 * - Spacing utilities (p-6, max-w-4xl, mx-auto)
 * - Shadow effects (shadow-lg)
 * - Border radius (rounded-xl)
 * - Typography (font-semibold, text-lg, text-gray-600)
 *
 * This component creates a centered card design with proper
 * spacing, shadows, and typography hierarchy.
 */
export default function Example2() {
  return (
    <div className="flex items-center justify-center bg-gray-100 max-w-2xl p-6 mx-auto">
      <div className="bg-emerald-600 p-8 text-gray-50 text-center shadow-lg rounded-xl max-w-2xs mx-auto">
        <h2 className="font-bold text-lg animate-pulse">Hello Card</h2>
        <p className="font-semibold">This is a simple card.</p>
      </div>
    </div>
  );
}
