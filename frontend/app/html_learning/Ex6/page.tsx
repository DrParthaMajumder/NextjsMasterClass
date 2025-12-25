/**
 * Lesson 6:
 * Demonstrates how to display an image using <img>.
 * Tailwind is used for width, height, border and rounding.
 */

export default function Page() {
  return (
    <div className="flex items-center justify-center p-6">
      <img
        src="/globe.svg"
        alt="Globe"
        className="w-48 h-48 bg-fuchsia-800 rounded-lg border hover:animate-spin transition-transform"
      />
    </div>
  );
}
