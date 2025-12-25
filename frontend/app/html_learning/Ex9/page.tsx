/**
 * Lesson 9:
 * Demonstrates a simple HTML <button>.
 * Tailwind adds padding, colors, hover effect, and rounded corners.
 */

export default function Page() {
  return (
    <div className="flex items-center justify-center max-w-sm mx-auto p-6">
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 hover:scale-105 transition-transform">
        Click Me
      </button>
    </div>
  );
}
