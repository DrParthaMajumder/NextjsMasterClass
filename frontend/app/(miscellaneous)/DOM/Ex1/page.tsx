"use client";
import { useEffect } from "react";

export default function DomExample() {
  const changeText = () => {
    const title = document.getElementById("mytitle");
    if (title) {
      // Toggle between two different texts
      if (title.innerText === "DOM changed this text!") {
        title.innerText = "This text will change using DOM";
      } else {
        title.innerText = "DOM changed this text!";
      }
    }
  };

  return (
    <div className="flex flex-col items-center bg-blue-100 justify-center max-w-2xl p-5 mx-auto">
      <h2 className="text-xl font-semibold mb-4">Next.js DOM Example</h2>

      <p id="mytitle" className="text-lg mb-4">This text will change using DOM</p>

      <button onClick={changeText} className="px-5 py-2 bg-pink-500 text-white rounded-md">
        Change Text
      </button>
    </div>
  );
}
