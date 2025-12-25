"use client";

export default function DomExample2() {
const changeColor = () => {
  const box = document.getElementById("color-box");
  if (box) {
    // Toggle Tailwind classes instead of inline styles
    if (box.classList.contains("bg-pink-600")) {
      box.classList.remove("bg-pink-600");
      box.classList.add("bg-green-600");
    } else {
      box.classList.remove("bg-green-600");
      box.classList.add("bg-pink-600");
    }
  }
};

  return (
    <div className="flex flex-col items-center justify-centerp-5 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4">Next.js DOM Example 2</h2>

      <div
        id="color-box"
        className="w-40 h-40 rounded-full bg-pink-600 flex items-center justify-center mb-4"
      >
        Box
      </div>

      <button
        onClick={changeColor}
        className="px-5 py-2 bg-green-600 text-white rounded"
      >
        Change Box Color
      </button>
    </div>
  );
}
