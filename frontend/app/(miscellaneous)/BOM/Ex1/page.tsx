"use client";

// BomExample1
// Demonstrates a simple Browser Object Model (BOM) API: window.alert.
// When the button is clicked, an alert dialog is shown in the browser.
// Tailwind CSS is used to style the button with hover and transform effects.

export default function BomExample1() {
  const showAlert = () => {
    alert("Hello from BOM!"); //alert() is part of the BOM — Browser Object Model.
  };

  return (
    <button
      onClick={showAlert}
      className="flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transition-transform transform hover:-translate-y-0.5 max-w-sm mx-auto"
    >
      Click for Alert
    </button>
  );
}
