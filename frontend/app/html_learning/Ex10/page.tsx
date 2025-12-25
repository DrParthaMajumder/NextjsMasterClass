/**
 * Lesson 10:
 * Demonstrates a basic text input using <input>.
 * Tailwind is used for padding, border, outline, and rounded corners.
 */

export default function Page() {
  return (
    <div className="min-h-screen bg-linear-to-tr from-pink-100 to-pink-600 flex items-center justify-center p-6">
      <div className="flex flex-col bg-linear-to-r from-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl text-white font-bold text-center mb-6">
          User Information
        </h2>

        <div className="text-white space-y-2">
          <label className="block text-sm font-semibold">
            Your Name:
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-900 focus:ring-4 focus:ring-pink-300 transition-all"
          />
        </div>

        <div className="text-white space-y-2">
          <label className="block text-sm font-semibold">
            Your Age:
          </label>
          <input
            type="number"
            placeholder="Enter your age"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-900 focus:ring-4 focus:ring-pink-300 transition-all"
          />
        </div>

        <button className="w-full bg-linear-to-r from-blue-500 to-red-400 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 hover:scale-105 transition-all shadow-lg">
          Submit Information
        </button>
      </div>
    </div>
  );
}
