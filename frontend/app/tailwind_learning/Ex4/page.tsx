/*
  TAILWIND CSS LEARNING PATH - SMALL EXAMPLES
  
  Goal: Learn Tailwind CSS one concept at a time
  Approach: Each file focuses on specific classes with clear examples
  
  Current File: Colors & Backgrounds
  Classes Covered: bg colors, text colors, gradients
  
  Key Concepts:
  - Background Colors: bg-{color}-{shade}
  - Text Colors: text-{color}-{shade}
  - Border Colors: border-{color}-{shade}
  - Gradients: bg-gradient-to-{direction} from-{color} to-{color}
  
  Color Palette:
  - Shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
  - Colors: slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
  
  Gradient Directions:
  - to-t, to-tr, to-r, to-br, to-b, to-bl, to-l, to-tl
  
  Usage Tips:
  - Use semantic colors (gray-500 for text, gray-100 for backgrounds)
  - Consider accessibility with proper contrast ratios
  - Use opacity modifiers: bg-blue-500/50 for 50% opacity
  - Custom colors can be added in tailwind.config.js
*/

export default function ColorsBasics() {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
        Colors & Backgrounds Example
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Background Colors
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-red-500 text-white p-4 rounded text-center">
            red-500
          </div>
          <div className="bg-blue-500 text-white p-4 rounded text-center">
            blue-500
          </div>
          <div className="bg-green-500 text-white p-4 rounded text-center">
            green-500
          </div>
          <div className="bg-yellow-500 text-black p-4 rounded text-center">
            yellow-500
          </div>
          <div className="bg-purple-500 text-white p-4 rounded text-center">
            purple-500
          </div>
          <div className="bg-pink-500 text-white p-4 rounded text-center">
            pink-500
          </div>
          <div className="bg-gray-800 text-white p-4 rounded text-center">
            gray-800
          </div>
          <div className="bg-indigo-500 text-white p-4 rounded text-center">
            indigo-500
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Text Colors
        </h2>

        <div className="space-y-3">
          <p className="text-red-600 text-lg">text-red-600</p>
          <p className="text-blue-600 text-lg">text-blue-600</p>
          <p className="text-green-600 text-lg">text-green-600</p>
          <p className="text-purple-600 text-lg">text-purple-600</p>
          <p className="text-gray-600 text-lg">text-gray-600</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gradients</h2>

        <div className="bg-linear-to-r from-blue-400 to-purple-600 text-white p-6 rounded-lg mb-4 text-center font-semibold">
          bg-linear-to-r from-blue-400 to-purple-600
        </div>

        <div className="bg-linear-to-l from-green-400 to-blue-500 text-white p-6 rounded-lg text-center font-semibold">
          bg-linear-to-l from-green-400 to-blue-500
        </div>
      </div>
    </div>
  );
}
