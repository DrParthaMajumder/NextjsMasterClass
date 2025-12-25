/**
 * Example 16: Responsive Grid Layout
 *
 * Demonstrates Tailwind CSS responsive grid system:
 * - CSS Grid layout (grid)
 * - Responsive grid columns (grid-cols-2 sm:grid-cols-3 md:grid-cols-4)
 * - Grid spacing (gap-3)
 * - Dynamic content rendering with JavaScript map()
 * - Background colors (bg-gray-300)
 * - Fixed heights (h-24)
 * - Border radius (rounded)
 * - React component patterns
 *
 * This component creates a responsive grid that automatically
 * adjusts the number of columns based on screen size:
 * - 2 columns on mobile (default)
 * - 3 columns on small screens (sm: 640px+)
 * - 4 columns on medium screens (md: 768px+)
 *
 * Demonstrates modern React patterns with Tailwind's responsive
 * grid system for creating adaptive layouts.
 */

// Backticks allow expressions inside strings
export default function Example16() {
  const colors = [
    "bg-blue-400",
    "bg-purple-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-pink-400",
    "bg-indigo-400",
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 p-6">
      {colors.map((item, index) => (
        <div
          key={index}
          className={`${item} h-24 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center text-white font-bold text-lg`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}
