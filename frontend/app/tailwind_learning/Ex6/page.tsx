/*
  TAILWIND CSS LEARNING PATH - SMALL EXAMPLES
  
  Goal: Learn Tailwind CSS one concept at a time
  Approach: Each file focuses on specific classes with clear examples
  
  Current File: Responsive Design
  Classes Covered: responsive prefixes, display, position
  
  Key Concepts:
  - Breakpoint Prefixes: sm:, md:, lg:, xl:, 2xl:
  - Responsive Display: block, inline-block, flex, grid, hidden
  - Responsive Position: static, fixed, absolute, relative, sticky
  
  Breakpoint Values:
  - sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px
  
  Responsive Patterns:
  - Mobile-first: default styles, override with prefixes
  - Show/hide: block md:hidden (mobile only), hidden md:block (desktop only)
  - Layout changes: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  
  Position Types:
  - static: default positioning
  - relative: positioned relative to itself
  - absolute: positioned relative to nearest positioned ancestor
  - fixed: positioned relative to viewport
  - sticky: positioned based on scroll position
  
  Usage Tips:
  - Always design mobile-first, then enhance for larger screens
  - Use container queries for component-level responsiveness
  - Test responsive behavior at actual breakpoints
  - Consider touch targets for mobile (minimum 44px)
*/

export default function ResponsiveBasics() {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 p-10 mb-8">
        Responsive Design Example
      </h1>

      <div className="bg-white p-12 rounded-lg shadow-md max-w-4xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Responsive Text Sizes
        </h2>

        <div className="bg-blue-100 p-6 rounded-lg text-center">
          <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-blue-800 md:text-pink-700 lg:text-amber-800">
            Responsive Heading
          </h3>
          <p className="text-sm md:text-base mt-2 text-gray-600 md:text-pink-700 lg:text-amber-800 ">
            Random text
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold text-gray-800  md:text-pink-700 lg:text-amber-800 mb-4">
          Responsive Grid
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-red-500 text-white p-4 rounded text-center">1</div>
          <div className="bg-green-500 text-white p-4 rounded text-center">
            2
          </div>
          <div className="bg-blue-500 text-white p-4 rounded text-center">
            3
          </div>
          <div className="bg-purple-500 text-white p-4 rounded text-center">
            4
          </div>
          <div className="bg-yellow-500 text-black p-4 rounded text-center">
            5
          </div>
          <div className="bg-pink-500 text-white p-4 rounded text-center">
            6
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-4 text-center">
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Display & Position
        </h2>

        <div className="space-y-4">
          <div className="bg-green-100 p-4 rounded block md:hidden">
            Hidden on desktop, visible on mobile
          </div>

          <div className="bg-blue-100 p-4 rounded hidden md:block">
            Hidden on mobile, visible on desktop
          </div>

          <div className="relative bg-gray-100 p-4 rounded h-32">
            <div className="absolute bottom-2 right-2 bg-red-500 text-white px-3 py-1 rounded">
              Absolute Position
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
