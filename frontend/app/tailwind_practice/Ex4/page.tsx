/**
 * Example 4: Feature Grid with Interactive Cards
 *
 * Demonstrates advanced Tailwind CSS techniques:
 * - CSS Grid layout (grid, grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
 * - Gradient backgrounds (bg-linear-to-r from-[color] to-[color])
 * - Hover effects and transforms (hover:shadow-xl, hover:scale-105)
 * - Animations (animate-pulse)
 * - Transitions (transition-all duration-300)
 * - Responsive grid columns
 * - Color combinations and opacity variations
 *
 * Note: Uses bg-linear-to-r which should be bg-gradient-to-r for proper Tailwind syntax.
 * This component creates an impressive feature grid with colorful cards
 * that scale and enhance on hover with smooth transitions.
 */
export default function Example4() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
      <div className="bg-linear-to-r from-blue-400 to-blue-600 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
        <h3 className="text-white font-bold text-lg mb-2 animate-pulse">
          Feature 1
        </h3>
        <p className="text-blue-100 text-sm">
          Amazing feature with cool effects
        </p>
      </div>

      <div className="bg-linear-to-r from-purple-400 to-pink-600 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
        <h3 className="text-white font-bold text-lg mb-2 animate-pulse">
          Feature 2
        </h3>
        <p className="text-purple-100 text-sm">Another awesome capability</p>
      </div>

      <div className="bg-linear-to-r from-green-400 to-teal-600 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
        <h3 className="text-white font-bold text-lg mb-2 animate-pulse">
          Feature 3
        </h3>
        <p className="text-green-100 text-sm">Powerful functionality here</p>
      </div>

      <div className="bg-linear-to-r from-orange-400 to-red-600 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
        <h3 className="text-white font-bold text-lg mb-2 animate-pulse">
          Feature 4
        </h3>
        <p className="text-orange-100 text-sm">Exciting new possibilities</p>
      </div>

      <div className="bg-linear-to-r from-indigo-400 to-purple-600 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
        <h3 className="text-white font-bold text-lg mb-2 animate-pulse">
          Feature 5
        </h3>
        <p className="text-indigo-100 text-sm">Innovative solution design</p>
      </div>

      <div className="bg-linear-to-r from-yellow-400 to-orange-600 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
        <h3 className="text-white font-bold text-lg mb-2 animate-pulse">
          Feature 6
        </h3>
        <p className="text-yellow-100 text-sm">Bright and cheerful option</p>
      </div>

      <div className="bg-linear-to-r from-pink-400 to-rose-600 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
        <h3 className="text-white font-bold text-lg mb-2 animate-pulse">
          Feature 7
        </h3>
        <p className="text-pink-100 text-sm">Elegant and stylish choice</p>
      </div>

      <div className="bg-linear-to-r from-cyan-400 to-blue-600 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
        <h3 className="text-white font-bold text-lg mb-2 animate-pulse">
          Feature 8
        </h3>
        <p className="text-cyan-100 text-sm">Cool and refreshing feature</p>
      </div>
    </div>
  );
}
