/**
 * Example 8: Animated Circle Component
 *
 * Demonstrates Tailwind CSS shapes and animations:
 * - Fixed dimensions (w-16, h-16)
 * - Flexbox centering (flex, items-center, justify-center)
 * - Background colors (bg-purple-500)
 * - Circular shapes (rounded-full)
 * - Animations (animate-pulse)
 * - Responsive sizing (max-w-2xl, mx-auto)
 *
 * Note: Contains syntax error with comma in className (max-w-2xl, mx-auto)
 *
 * This component creates a simple animated circle that pulses
 * continuously, demonstrating how to combine shape utilities
 * with animation effects.
 */
export default function Example8() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full animate-pulse mx-auto">
        hi
      </div>
      <div className="flex items-center justify-center text-center bg-pink-300 p-2 rounded-lg w-full max-w-2xl mx-auto">hi</div>
    </div>
  );
}
