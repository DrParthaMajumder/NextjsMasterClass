/**
 * Lesson 3:
 * Demonstrates HTML <p> paragraphs.
 * Shows spacing and basic text styling using Tailwind.
 */

export default function Page() {
  return (
    <div className="flex flex-col bg-rose-300 items-center justify-center p-6 max-w-2xl mx-auto space-y-4">
      <p className="font-serif">This is my first paragraph.</p>
      <p className="text-base">This is another paragraph.</p>
    </div>
  );
}
