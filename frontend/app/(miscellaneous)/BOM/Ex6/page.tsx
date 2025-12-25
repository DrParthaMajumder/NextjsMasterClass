"use client";

// BomExample6
// Demonstrates using the BOM history API via window.history.back().
// Clicking the button navigates the user back one step in the browser history.
// Tailwind CSS is used to style the navigation button.

export default function BomExample6() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={goBack}
      className="flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 hover:shadow-lg transition-transform transform hover:-translate-y-0.5 w-full max-w-sm mx-auto mt-4"
    >
      Go Back (BOM)
    </button>
  );
}
