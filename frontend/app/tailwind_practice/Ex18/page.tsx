"use client";
import React, { useState, useEffect } from "react";

export default function Example18() {
  const [showToast, setShowToast] = useState(true);

  // Auto-hide toast after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    // Clean up timer when component unmounts
    return () => clearTimeout(timer); 
  }, []);

  // Manual dismiss function
  const dismissToast = () => {
    setShowToast(false);
  };

  // Don't render if toast is hidden
  if (!showToast) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="px-4 py-2 bg-black text-white rounded-lg shadow-lg animate-bounce flex items-center gap-2">
        <span>New message received!</span>
        <button
          onClick={dismissToast}
          className="text-white hover:text-gray-300 focus:outline-none"
          aria-label="Dismiss notification"
        >
          ×
        </button>
      </div>
    </div>
  );
}
