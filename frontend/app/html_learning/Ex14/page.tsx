/**
 * Lesson 14:
 * Demonstrates radio buttons for selecting one option.
 * Tailwind adds spacing and label styling.
 */

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center bg-fuchsia-100 p-6 space-y-2 max-w-2xl mx-auto">
      <p className="font-bold">Select your gender:</p>

      <div className="flex flex-col items-start space-y-2 text-fuchsia-600">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="gender"
            value="male"
            className="accent-fuchsia-600"
          />
          Male
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="gender"
            value="female"
            className="accent-fuchsia-600"
          />
          Female
        </label>
      </div>
    </div>
  );
}
