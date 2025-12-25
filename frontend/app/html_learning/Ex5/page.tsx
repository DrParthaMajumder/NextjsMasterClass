/**
 * Lesson 5:
 * Demonstrates the HTML <a> tag for links.
 * Uses Tailwind for colors, underline, and hover effect.
 */

export default function Page() {
  return (
    <div className="flex items-center justify-center bg-gray-100 w-full mx-auto p-6">
      <a
        href="https://google.com"
        className="text-blue-500 underline hover:text-fuchsia-600"
      >
        Go to Google
      </a>
    </div>
  );
}
