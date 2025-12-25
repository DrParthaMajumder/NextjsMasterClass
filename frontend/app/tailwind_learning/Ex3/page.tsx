/*
  TAILWIND CSS LEARNING PATH - SMALL EXAMPLES
  
  Goal: Learn Tailwind CSS one concept at a time
  Approach: Each file focuses on specific classes with clear examples
  
  Current File: Layout Basics
  Classes Covered: flex, grid, justify, align
  
  Key Concepts:
  - Display: flex, grid, block, inline-block, hidden
  
  Flexbox:
  - Direction: flex-row, flex-row-reverse, flex-col, flex-col-reverse
  - Justify Content: justify-start, justify-end, justify-center, justify-between, justify-around, justify-evenly
  - Align Items: items-start, items-end, items-center, items-baseline, items-stretch
  - Wrap: flex-wrap, flex-wrap-reverse, flex-nowrap
  
  Grid:
  - Template Columns: grid-cols-{1-12}, grid-cols-none
  - Template Rows: grid-rows-{1-6}, grid-rows-none
  - Gap: gap-{size}, gap-x-{size}, gap-y-{size}
  
  Usage Tips:
  - Use flex for 1D layouts (row or column), grid for 2D layouts
  - Combine justify-items and align-items for grid alignment
  - Use responsive prefixes for different screen sizes
  - Consider using container queries for component-level responsiveness
*/

export default function LayoutBasics() {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
        Layout Example
      </h1>

      <div className="bg-pink-100 border-2 border-pink-300 p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Flexbox Layout
        </h2>

        <div className="flex items-center justify-between bg-gray-100 p-4 rounded mb-4">
          <div className="bg-blue-500 text-white px-4 py-2 rounded">Left</div>
          <div className="bg-green-500 text-white px-4 py-2 rounded">
            Center
          </div>
          <div className="bg-red-500 text-white px-4 py-2 rounded">Right</div>
        </div>

        <div className="flex justify-center items-center bg-gray-100 p-4 rounded">
          <div className="bg-purple-500 text-white px-4 py-2 rounded">
            Centered
          </div>
        </div>
      </div>

      <div className="bg-pink-100 border-2 border-pink-300 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Grid Layout
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-blue-500 text-white p-4 rounded text-center">
            1
          </div>
          <div className="bg-green-500 text-white p-4 rounded text-center">
            2
          </div>
          <div className="bg-red-500 text-white p-4 rounded text-center">3</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-purple-500 text-white p-4 rounded text-center">
            A
          </div>
          <div className="bg-yellow-500 text-black p-4 rounded text-center">
            B
          </div>
        </div>
      </div>
    </div>
  );
}
