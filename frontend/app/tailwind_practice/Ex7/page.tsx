/**
 * Example 7: Spacing and Animation Demo
 *
 * Demonstrates Tailwind CSS spacing and animation utilities:
 * - Padding and margin (p-8, m-8)
 * - Background colors (bg-yellow-300)
 * - Border radius (rounded-lg)
 * - Animations (animate-pulse)
 * - Visual feedback effects
 *
 * This component showcases basic spacing utilities combined
 * with a pulsing animation effect to create visual emphasis.
 * The large padding and margin create significant whitespace
 * around the content for demonstration purposes.
 */
export default function Example7() {
  return (
    <div className="p-8 m-8 bg-yellow-300 rounded-lg animate-pulse">
      Padding = 8, Margin = 8
    </div>
  );
}
