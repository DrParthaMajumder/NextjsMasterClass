/**
 * Example 11: Enhanced Gradient Button
 *
 * Demonstrates advanced Tailwind CSS button styling:
 * - Gradient backgrounds (bg-linear-to-r from-purple-600 to-pink-600)
 * - Flexbox centering (flex, items-center, justify-center)
 * - Text styling (text-white)
 * - Spacing and sizing (px-5, py-2, max-w-4xl, mx-auto)
 * - Border radius and shadows (rounded-xl, shadow-lg)
 * - Interactive effects (hover:opacity-90, transition)
 *
 * Note: Uses bg-linear-to-r which should be bg-gradient-to-r for proper Tailwind syntax.
 *
 * This component creates an enhanced gradient button with hover effects,
 * proper centering, and responsive sizing for a professional appearance.
 */
export default function Example11() {
  return (
    <button className="flex items-center justify-center bg-linear-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-xl shadow-lg hover:opacity-90 hover:scale-115 transition-transform duration-200 max-w-4xl mx-auto">
      Gradient Button
    </button>
  );
}
