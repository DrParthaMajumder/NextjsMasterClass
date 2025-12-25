/**
 * Lesson 8:
 * Demonstrates an ordered list using <ol> and <li>.
 * Tailwind adds numbered style and spacing.
 */

export default function Page() {
  return (
    <div className="flex bg-emerald-200 items-center justify-center p-6 max-w-2xl mx-auto">
      <ol className="list-decimal pl-10 space-y-3 text-purple-900">
        <li className="cursor-pointer hover:animate-pulse hover:text-purple-700 transition-colors hover:scale-105 hover:translate-x-2 hover:font-bold hover:bg-purple-100 p-2 rounded-lg">Step One</li>
        <li className="cursor-pointer hover:animate-pulse hover:text-purple-700 transition-colors hover:scale-105 hover:translate-x-2 hover:font-bold hover:bg-purple-100 p-2 rounded-lg">Step Two</li>
        <li className="cursor-pointer hover:animate-pulse hover:text-purple-700 transition-colors hover:scale-105 hover:translate-x-2 hover:font-bold hover:bg-purple-100 p-2 rounded-lg">Step Three</li>
      </ol>
    </div>
  );
}
