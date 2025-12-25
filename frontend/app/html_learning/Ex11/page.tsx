/**
 * Lesson 11:
 * Demonstrates a simple HTML <form> with a text input and a submit button.
 * Tailwind adds spacing, border, and button styles.
 */

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form className="space-y-4 w-80 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Employee Form
        </h2>

        <div className="w-full space-y-2">
          <label className="text-sm font-bold text-gray-700">Name:</label>
          <input
            type="text"
            placeholder="Enter your name..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        <div className="w-full space-y-2">
          <label className="text-sm font-bold text-gray-700">Age:</label>
          <input
            type="number"
            placeholder="Enter your age..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
