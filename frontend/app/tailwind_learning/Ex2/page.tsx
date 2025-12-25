/*
  TAILWIND CSS LEARNING PATH - SMALL EXAMPLES
  
  Goal: Learn Tailwind CSS one concept at a time
  Approach: Each file focuses on specific classes with clear examples
  
  Current File: Spacing Basics
  Classes Covered: padding, margin, gap
  
  Key Concepts:
  - Padding: p-{size}, px-{size}, py-{size}, pt-{size}, pr-{size}, pb-{size}, pl-{size}
  - Margin: m-{size}, mx-{size}, my-{size}, mt-{size}, mr-{size}, mb-{size}, ml-{size}
  - Gap: gap-{size}, gap-x-{size}, gap-y-{size} (for flex/grid)
  - Space between: space-x-{size}, space-y-{size} (for direct child spacing)
  
  Size Scale:
  - 0: 0px, 1: 4px, 2: 8px, 3: 12px, 4: 16px, 5: 20px, 6: 24px, 8: 32px, 10: 40px, 12: 48px
  - Auto: auto, px: 1px
  
  Usage Tips:
  - Padding creates space inside elements, Margin creates space outside
  - Use gap for flex/grid containers instead of margin on children
  - Use space-x/space-y for flex containers with direct children
  - Consider responsive spacing with prefixes (sm:, md:, lg:, xl:)
*/

export default function SpacingBasics() {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-fuchsia-600 mb-8">
        Spacing Example
      </h1>

      <div className="bg-red-50 border-2 border-b-fuchsia-700 p-8 rounded-lg shadow-md max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Padding Examples
        </h2>

        <div className="bg-blue-300 p-2 mb-4 rounded">p-2 (8px padding)</div>

        <div className="bg-green-300 p-4 mb-4 rounded">p-4 (16px padding)</div>

        <div className="bg-purple-300 p-6 mb-4 rounded">p-6 (24px padding)</div>
      </div>

      <div className="bg-red-50 border-2 border-b-fuchsia-700 p-8 rounded-lg shadow-md max-w-lg mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Margin Examples
        </h2>

        <div className="bg-red-300 p-4 m-2 rounded">
          m-2 (8px margin all sides)
        </div>

        <div className="bg-yellow-300 p-4 mx-4 rounded">
          mx-4 (16px margin left/right)
        </div>

        <div className="bg-pink-300 p-4 my-4 rounded">
          my-4 (16px margin top/bottom)
        </div>
      </div>
    </div>
  );
}
