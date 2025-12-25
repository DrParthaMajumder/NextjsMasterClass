/**
 * Example 14: User Profile Card Component
 *
 * Demonstrates Tailwind CSS profile card layout:
 * - Horizontal flex layout (flex, items-center, gap-4)
 * - Centering and responsive sizing (justify-center, max-w-2xs, mx-auto)
 * - Image styling (w-12, h-12, rounded-full)
 * - Local asset integration (/globe.svg)
 * - Hover animations (hover:animate-spin)
 * - Typography hierarchy (font-semibold, text-gray-500, text-sm)
 * - Color theming (text-fuchsia-800, text-fuchsia-500)
 *
 * This component creates a user profile card with an avatar,
 * name, and title. The avatar spins on hover and the component
 * uses a fuchsia color scheme for consistent theming.
 * Demonstrates integration of local SVG assets with Tailwind styling.
 */
export default function Example14() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto border-2 border-amber-700 flex flex-col items-center justify-center gap-4">
      <img
        src="/globe.svg"
        className="w-24 h-24 rounded-full hover:animate-spin transition-transform duration-500 ease-in-out border-4 border-white shadow-lg"
      />
      <div className="text-center mt-4">
        <p className="text-2xl font-bold text-gray-900 mb-2">Partha Majumder</p>
        <p className="text-gray-600 text-sm">Senior Software Developer</p>
      </div>
    </div>
  );
}
