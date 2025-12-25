/*
  TAILWIND CSS LEARNING PATH - SMALL EXAMPLES
  
  Goal: Learn Tailwind CSS one concept at a time
  Approach: Each file focuses on specific classes with clear examples
  
  Current File: Typography Basics
  Classes Covered: text sizes, font weights, text colors, alignment
  
  Key Concepts:
  - Text sizing: text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl
  - Font weights: font-thin, font-light, font-normal, font-medium, font-semibold, font-bold, font-extrabold
  - Text colors: text-{color}-{shade} (e.g., text-blue-600, text-gray-500)
  - Text alignment: text-left, text-center, text-right, text-justify
  
  Usage Tips:
  - Text sizing uses rem units by default (1rem = 16px)
  - Colors follow naming convention: {color}-{shade} (50-900)
  - Font weights map to standard CSS font-weight values
  - Always consider responsive text sizing with prefixes (sm:, md:, lg:, xl:)
*/

export default function TailwindBasics() {
  return (
    <div className="bg-fuchsia-200 p-10">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Typography Example
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Text Sizes
        </h2>

        <p className="text-lg text-gray-600 mb-2">text-lg</p>
        <p className="text-base text-gray-700 mb-2">text-base</p>
        <p className="text-sm text-gray-500 mb-4">text-sm</p>

        <div className="text-center">
          <span className="font-bold">Bold</span> |
          <span className="font-semibold ml-2">Semibold</span> |
          <span className="font-normal ml-2">Normal</span>
        </div>
      </div>
    </div>
  );
}
