/**
 * Lesson 1:
 * Basic HTML structure inside a Next.js 16 page.
 * Shows a heading and a paragraph using Tailwind CSS.
 */

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto p-6">
      <h1 className="bg-emerald-600 text-2xl font-bold mb-4 min-w-lg text-center">
        Hello World!
      </h1>
      <p className="text-center text-gray-700 mt-2 leading-relaxed max-w-lg">This is the smallest HTML example inside a Next.js 16 page.</p>
    </div>
  );
}
