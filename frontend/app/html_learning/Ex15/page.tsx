/**
 * Lesson 15:
 * Demonstrates checkboxes for selecting multiple options.
 * Tailwind adds spacing and alignment.
 */

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center bg-fuchsia-200 p-6 space-y-2 max-w-4xl mx-auto">
      <p className="font-medium">Select your hobbies:</p>

      <div className="flex flex-col items-start space-y-2">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="accent-fuchsia-600" /> Reading
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" className="accent-fuchsia-600" /> Traveling
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" className="accent-fuchsia-600" /> Gaming
        </label>
      </div>
    </div>
  );
}
