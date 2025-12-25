/**
 * Lesson 2:
 * Demonstrates HTML headings (h1, h2, h3) inside Next.js.
 * Tailwind is used for sizing and font styling.
 */

export default function Page() {
  return (
    <div className="flex flex-col bg-emerald-400  items-center justify-center p-6 space-y-3 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold animate-pulse">Welcome</h1>
      <h2 className="text-3xl font-semibold">This is a sub-heading</h2>
      <h3 className="text-2xl font-medium">Smaller heading</h3>
    </div>
  );
}
