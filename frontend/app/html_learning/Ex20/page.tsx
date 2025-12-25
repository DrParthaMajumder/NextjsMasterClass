/**
 * Lesson 20:
 * Demonstrates accessibility features with ARIA labels and semantic attributes.
 * Tailwind adds visual styling while maintaining accessibility.
 */

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold">Accessibility Example</h2>

      <div className="w-full space-y-4">
        <div>
          <label
            htmlFor="search-input"
            className="block text-sm font-medium mb-2"
          >
            Search:
          </label>
          <input
            id="search-input"
            type="search"
            placeholder="Search..."
            aria-label="Search products"
            aria-describedby="search-help"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p id="search-help" className="text-sm text-gray-600 mt-1">
            Enter keywords to search for products
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Progress:</label>
          <div
            role="progressbar"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
            className="w-full bg-gray-200 rounded-full h-4"
          >
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: "75%" }}
            />
          </div>
          <span className="text-sm text-gray-600">75% complete</span>
        </div>

        <button
          aria-label="Close dialog"
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          × Close
        </button>
      </div>
    </div>
  );
}
