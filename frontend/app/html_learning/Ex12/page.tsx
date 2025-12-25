/**
 * Lesson 12:
 * Demonstrates a <textarea> for multi-line text input.
 * Tailwind adds size, border, and focus styling.
 */

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-4 max-w-xl mx-auto">
      <div className="flex items-center w-full">
        <label className="font-bold w-20 text-right mr-4">Name:</label>
        <input
          type="text"
          placeholder="Enter your name..."
          className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center w-full">
        <label className="font-bold w-20 text-right mr-4 pt-2">Message:</label>
        <textarea
          rows={3}
          placeholder="Write your message here..."
          className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
    </div>
  );
}
