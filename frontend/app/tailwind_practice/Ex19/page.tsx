/**
 * Example 19: Pricing Card Component
 *
 * Demonstrates Tailwind CSS pricing card layout:
 * - Card container styling (bg-white, p-6, rounded-2xl, shadow-lg)
 * - Centered layout (text-center, max-w-xs, mx-auto)
 * - Typography hierarchy (text-xl, font-bold, text-gray-600, text-4xl, font-extrabold)
 * - Pricing display (text-4xl, font-extrabold, mt-4)
 * - Button styling (w-full, bg-blue-600, text-white, py-2, rounded-lg)
 * - Interactive states (hover:bg-blue-700, transition)
 *
 * This component creates a professional pricing card with:
 * - Plan title and description
 * - Prominent pricing display
 * - Call-to-action button with hover effects
 * - Clean, modern design suitable for SaaS pricing pages
 * - Responsive and accessible layout
 */
export default function Example19() {
  return (
    <div className="max-w-xs mx-auto bg-gray-200 border-2 border-pink-400 p-6 rounded-2xl shadow-lg text-center">
      <h2 className="text-xl font-bold text-gray-900">Pro Plan</h2>
      <p className="text-gray-500 mt-2">Great for professionals.</p>

      <p className="text-4xl font-extrabold mt-4 text-gray-900">$19</p>

      <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 hover:scale-115 transition">
        Subscribe
      </button>
    </div>
  );
}
