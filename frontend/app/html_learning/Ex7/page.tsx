/**
 * Lesson 7:
 * Demonstrates an unordered list using <ul> and <li>.
 * Tailwind adds spacing and list style.
 */

export default function Page() {
  return (
    <div className="flex items-center justify-center p-10">
      <ul className="list-disc px-10 space-y-2 text-red-800">
        <li className="hover:animate-pulse cursor-pointer transition-transform hover:scale-110">Apple</li>
        <li className="hover:animate-pulse cursor-pointer transition-transform hover:scale-110">Mango</li>
        <li className="hover:animate-pulse cursor-pointer transition-transform hover:scale-110">Banana</li>
      </ul>
    </div>
  );
}
