/**
 * Lesson 13:
 * Demonstrates the <select> dropdown with options.
 * Tailwind gives padding, border, and rounded corners.
 */

export default function Page() {
  return (
    <div className="flex items-center justify-center p-6 space-x-3 max-w-2xl mx-auto">
      <label className="font-bold">Choose a fruit:</label>

      <select className="px-3 py-2 text-fuchsia-600 border rounded w-64 focus:ring-2 focus:ring-blue-500">
        <option>Apple</option>
        <option>Mango</option>
        <option>Banana</option>
      </select>
    </div>
  );
}
