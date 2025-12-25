/*
  TAILWIND CSS LEARNING PATH - SMALL EXAMPLES
  
  Goal: Learn Tailwind CSS one concept at a time
  Approach: Each file focuses on specific classes with clear examples
  
  Current File: Component Patterns
  Classes Covered: cards, modals, navigation, badges
  
  Key Concepts:
  - Card Components: shadow, rounded, padding, hover effects
  - Modal Patterns: fixed positioning, overlay, z-index
  - Navigation: flex layouts, active states, responsive
  - Badges & Tags: small elements, colors, positioning
  
  Component Patterns:
  - Card: bg-white rounded-lg shadow-md p-6 hover:shadow-lg
  - Modal: fixed inset-0 bg-black bg-opacity-50 z-50
  - Navigation: flex space-x items-center justify-between
  - Badge: inline-block px-2 py-1 text-xs font-semibold rounded-full
  
  Hover States:
  - hover:shadow-lg, hover:scale-105, hover:bg-opacity-80
  - transition-all, transition-shadow, transition-transform
  
  Positioning:
  - absolute, relative, fixed, sticky
  - top-0, right-0, bottom-0, left-0
  - inset-0 (top-0 right-0 bottom-0 left-0)
  
  Usage Tips:
  - Combine shadows and borders for depth
  - Use consistent spacing patterns
  - Consider mobile-first responsive design
  - Test component interactions thoroughly
  - Use semantic HTML with Tailwind styling
*/

export default function ComponentPatterns() {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Component Patterns Example
      </h1>

      <div className="bg-blue-200 p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Card Components
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Basic Card
            </h3>
            <p className="text-gray-600 text-sm">
              Simple card with shadow and hover effect
            </p>
          </div>

          <div className="bg-linear-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg hover:shadow-xl transition-all p-6 text-white">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">Gradient Card</h3>
            <p className="text-white text-opacity-90 text-sm">
              Card with gradient background
            </p>
          </div>

          <div className="bg-white border-l-4 border-green-500 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Bordered Card
            </h3>
            <p className="text-gray-600 text-sm">
              Card with left border accent
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-xl p-6 text-white">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-full mr-4"></div>
              <div>
                <h3 className="text-lg font-semibold">Dark Card</h3>
                <p className="text-gray-400 text-sm">Dark theme card</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Badges & Tags
        </h2>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
              Primary
            </span>
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
              Success
            </span>
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">
              Error
            </span>
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-yellow-500 rounded-full">
              Warning
            </span>
            <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
              Default
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded">
              Tag 1
            </span>
            <span className="inline-block px-2 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded">
              Tag 2
            </span>
            <span className="inline-block px-2 py-1 text-xs font-medium text-pink-600 bg-pink-100 rounded">
              Tag 3
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Navigation Pattern
        </h2>

        <nav className="bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded"></div>
              <span className="text-white font-semibold">Logo</span>
            </div>

            <div className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-white hover:text-blue-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Sign In
            </button>
          </div>
        </nav>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Modal Example (Simulated)
        </h2>

        <div className="relative bg-gray-100 rounded-lg p-8">
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full mx-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Modal Title
              </h3>
              <p className="text-gray-600 mb-6">
                This is a modal dialog example using fixed positioning and
                overlays.
              </p>
              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Confirm
                </button>
                <button className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-center">Modal overlay example</p>
        </div>
      </div>
    </div>
  );
}
