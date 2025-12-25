"use client";

import { useEffect, useState } from "react";

/*
  TAILWIND CSS LEARNING PATH - SMALL EXAMPLES
  
  Goal: Learn Tailwind CSS one concept at a time
  Approach: Each file focuses on specific classes with clear examples
  
  Current File: Dark Mode & Theming
  Classes Covered: dark mode, color schemes, custom themes
  
  Key Concepts:
  - Dark Mode: dark: prefix for dark-specific styles
  - Color Schemes: bg-gray-100 dark:bg-gray-800
  - Text Colors: text-gray-800 dark:text-gray-200
  - Border Colors: border-gray-200 dark:border-gray-700
  
  Dark Mode Strategy:
  - Strategy: class (add 'dark' class to HTML element)
  - Strategy: media (prefers-color-scheme: dark)
  - Strategy: data (data-theme="dark")
  
  Common Dark Patterns:
  - Backgrounds: bg-white dark:bg-gray-800
  - Text: text-gray-900 dark:text-gray-100
  - Borders: border-gray-200 dark:border-gray-700
  - Cards: bg-gray-50 dark:bg-gray-900
  
  Semantic Color Classes:
  - Gray scales: gray-50 to gray-900
  - Blue scales: blue-50 to blue-900
  - Semantic: text-primary, bg-secondary (custom)
  
  Usage Tips:
  - Use semantic color names for consistency
  - Test contrast ratios in both themes
  - Consider system preference with prefers-color-scheme
  - Use CSS variables for custom theme colors
  - Provide theme toggle for user control
*/
export default function DarkModeBasics() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    console.log("document:", document);
    console.log("document element:", document.documentElement);

    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-8 min-h-screen transition-colors duration-300">
      <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8">
        Dark Mode & Theming Example
      </h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-xl max-w-2xl mx-auto mb-8 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Theme Toggle
        </h2>

        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-400 rounded-full animate-ping mr-2"></div>
            <span className="text-gray-700 dark:text-gray-300">Light</span>
          </div>

          <button
            type="button"
            onClick={handleToggle}
            className="w-12 h-6 bg-gray-800 dark:bg-gray-300 rounded-full relative transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
            aria-label="Toggle dark mode"
          >
            <div
              className={`absolute top-1 left-1 w-4 h-4 bg-red-700 rounded-full transition-transform ${
                isDark ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>

          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-800 dark:bg-gray-50 animate-ping rounded-full mr-2"></div>
            <span className="text-gray-700 dark:text-gray-300">Dark</span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-center">
          Toggle switch for theme switching (simulated)
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-xl max-w-2xl mx-auto mb-8 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Adaptive Cards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 transition-colors">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Light/Dark Card
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Adapts to theme automatically
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-lg p-4 transition-colors">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
              Blue Theme
            </h3>
            <p className="text-blue-600 dark:text-blue-400 text-sm">
              Blue-based theme variant
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg p-4 transition-colors">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
              Green Theme
            </h3>
            <p className="text-green-600 dark:text-green-400 text-sm">
              Green-based theme variant
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900 border border-purple-200 dark:border-purple-700 rounded-lg p-4 transition-colors">
            <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">
              Purple Theme
            </h3>
            <p className="text-purple-600 dark:text-purple-400 text-sm">
              Purple-based theme variant
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-xl max-w-2xl mx-auto mb-8 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Form Elements
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Input Field
            </label>
            <input
              type="text"
              placeholder="Enter text..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Textarea
            </label>
            <textarea
              rows={10}
              placeholder="Enter message..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Select Dropdown
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-xl max-w-2xl mx-auto transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Status Indicators
        </h2>

        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-700 dark:text-gray-300">Online</span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-700 dark:text-gray-300">Away</span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <span className="text-gray-700 dark:text-gray-300">Offline</span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 dark:text-gray-300">Busy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
