/**
 * Example 10: Alert/Error Message Component
 *
 * Demonstrates Tailwind CSS alert styling:
 * - Background colors (bg-red-100)
 * - Border styling (border, border-red-400)
 * - Text colors (text-red-700)
 * - Padding (p-4)
 * - Border radius (rounded)
 * - Color coordination for consistent theming
 *
 * This component creates a styled alert/error message box
 * with coordinated red colors for backgrounds, borders, and text
 * to provide clear visual feedback for error states.
 */
export default function Example10() {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded">
      Error: Something went wrong!
    </div>
  );
}
