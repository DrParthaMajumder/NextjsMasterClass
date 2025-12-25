/**
 * Lesson 4:
 * Shows bold, italic, strong, and emphasized text.
 * Uses Tailwind classes for styling inside JSX.
 */

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center bg-green-200 p-6 space-y-3">
      <p>
        This is <span className="font-bold">bold</span> text.
      </p>
      <p>
        This is <span className="italic">italic</span> text.
      </p>

      <p>
        This is <span className="font-mono"> Nothing to show</span> some text.
      </p>

      <p className="text-lg">
        Server Status:{" "}
        <span className="text-green-600 animate-pulse font-bold">Online</span>
      </p>
    </div>
  );
}
