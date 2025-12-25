/*
  TAILWIND CSS LEARNING PATH - SMALL EXAMPLES
  
  Goal: Learn Tailwind CSS one concept at a time
  Approach: Each file focuses on specific classes with clear examples
  
  Current File: Borders & Shadows
  Classes Covered: borders, shadows, rounded corners
  
  Key Concepts:
  - Border Width: border, border-2, border-4, border-8
  - Border Sides: border-t, border-r, border-b, border-l, border-x, border-y
  - Border Style: border-solid, border-dashed, border-dotted, border-double, border-none
  - Shadow Sizes: shadow, shadow-sm, shadow-md, shadow-lg, shadow-xl, shadow-2xl, shadow-inner
  - Border Radius: rounded, rounded-sm, rounded-md, rounded-lg, rounded-xl, rounded-2xl, rounded-3xl, rounded-full
  
  Border Colors:
  - border-{color}-{shade} (e.g., border-blue-500, border-gray-300)
  
  Shadow Colors:
  - shadow-{color} (e.g., shadow-blue-500/25)
  
  Usage Tips:
  - Use border-0 to remove borders completely
  - Combine border styles: border-2 border-dashed border-red-500
  - Use rounded-none for sharp corners
  - Shadows work best with light backgrounds for depth
  - Consider responsive borders/shadows with prefixes
*/

export default function BordersBasics() {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-8">
        Borders & Shadows Example
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Border Widths
        </h2>

        <div className="space-y-4">
          <div className="border border-red-500 p-4 rounded">border (1px)</div>
          <div className="border-2 border-blue-500 p-4 rounded">
            border-2 (2px)
          </div>
          <div className="border-4 border-red-500 p-4 rounded">
            border-4 (4px)
          </div>
          <div className="border-20 border-green-500 p-4 rounded ">
            border-8 (8px)
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Shadow Sizes
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow-sm">shadow-sm</div>
          <div className="bg-white p-4 rounded shadow">shadow</div>
          <div className="bg-white p-4 rounded shadow-md">shadow-md</div>
          <div className="bg-white p-4 rounded shadow-lg">shadow-lg</div>
          <div className="bg-white p-4 rounded shadow-xl">shadow-xl</div>
          <div className="bg-white p-4 rounded shadow-2xl">shadow-2xl</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Rounded Corners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-blue-500 text-white p-4 rounded-none text-center">
            none
          </div>
          <div className="bg-blue-500 text-white p-4 rounded text-center">
            rounded
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
            lg
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-xl text-center">
            xl
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-2xl text-center">
            2xl
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-full text-center">
            full
          </div>
        </div>
      </div>
    </div>
  );
}
