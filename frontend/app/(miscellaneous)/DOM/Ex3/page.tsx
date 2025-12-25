"use client";

export default function DomExample3() {
  const toggleMessage = () => {
    const msg = document.getElementById("secret-3696");
    console.log("Message element:", msg);
    console.log("Current classes:", msg?.className);
    if (msg) {
      // Toggle Tailwind's hidden class instead of inline styles
      if (msg.classList.contains("hidden")) {
        msg.classList.remove("hidden");
      } else {
        msg.classList.add("hidden");
      }
    }
  };

  return (
    <div className="flex flex-col bg-pink-500 items-center justify-center text-center max-w-2xs mx-auto gap-5 p-5">
      <h2 className="text-xl font-semibold">Next.js DOM Example 3</h2>

      <p id="secret-3696" className="mb-4">
        This is a secret message controlled by the DOM!
      </p>

      <button
        onClick={toggleMessage}
        className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Show / Hide Message
      </button>
    </div>
  );
}
