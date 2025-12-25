/**
 * Example 20: Gradient Hero Component
 *
 * Demonstrates Tailwind CSS gradient and advanced styling:
 * - Gradient backgrounds (bg-gradient-to-br, from-blue-500, to-purple-600)
 * - Typography hierarchy (text-4xl, font-bold, text-lg, mt-4)
 * - Centered layout (text-center, p-10)
 * - Card container (rounded-2xl)
 * - Button gradients (bg-gradient-to-br, from-pink-400, to-purple-600)
 * - Interactive effects (hover:scale-105, transition, shadow)
 * - Color contrast (text-white, text-blue-600)
 *
 * This component creates a modern hero section with:
 * - Eye-catching gradient background
 * - Compelling headline and descriptive text
 * - Gradient-styled call-to-action button
 * - Smooth hover animations and transitions
 * - Professional landing page aesthetic
 * - Responsive and accessible design
 */
export default function Example20() {
  return (
    <div className="text-center p-10 bg-linear-to-br from-blue-500 to-purple-600 text-white rounded-2xl">
      <h1 className="text-4xl font-bold">Welcome to Tailwind</h1>
      <p className="mt-4 text-lg">Learn styling faster by doing!</p>

      <button className="mt-6 px-6 py-3 bg-linear-to-br from-pink-400 to-purple-600 text-white rounded-lg shadow hover:scale-105 transition">
        Get Started
      </button>
    </div>
  );
}
