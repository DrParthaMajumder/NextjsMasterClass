/**
 * Example 12: Interactive Hover Card
 *
 * Demonstrates Tailwind CSS card interactions:
 * - Flexbox layout (flex, flex-col, items-center, justify-center)
 * - Background colors (bg-pink-500)
 * - Text styling (text-white)
 * - Spacing and sizing (p-6, max-w-2xs, mx-auto)
 * - Border radius and shadows (rounded-xl, shadow-md)
 * - Transform effects (transform)
 * - Hover animations (hover:animate-ping)
 * - Transitions (transition)
 * - Typography hierarchy (font-bold, text-lg, mt-2)
 *
 * This component creates an interactive card that performs
 * a ping animation on hover, demonstrating advanced hover effects
 * and animations combined with proper card styling.
 */
export default function Example12() {
  return (
    <div className="flex flex-col text-center w-50 h-50 rounded-full items-center justify-center bg-pink-500 text-white p-6 shadow-md transform hover:animate-ping transition-all duration-300 mx-auto">
      <h2 className="font-bold text-lg">Hover Card</h2>
      <p className="mt-2">This card enlarges on hover.</p>
    </div>
  );
}
