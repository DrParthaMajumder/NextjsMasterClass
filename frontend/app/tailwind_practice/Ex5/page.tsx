/**
 * Example 5: Navigation Bar Component
 *
 * Demonstrates Tailwind CSS navigation layout:
 * - Flexbox layout with justification (flex, justify-between, items-center)
 * - Background and text colors (bg-gray-800, text-white)
 * - Spacing utilities (p-4, gap-4)
 * - Typography (text-xl, font-bold)
 * - List styling without bullets (flex removes default list styling)
 *
 * This component creates a modern navigation bar with a brand name
 * on the left and navigation links on the right, using flexbox
 * for proper alignment and spacing.
 */
export default function Example5() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white w-full">
      <h1 className="text-xl font-bold animate-pulse">Paravision Lab</h1>
      <ul className="flex gap-4">
        <li className="hover:text-yellow-300 transition-colors cursor-pointer">Home</li>
        <li className="hover:text-yellow-300 transition-colors cursor-pointer">About</li>
        <li className="hover:text-yellow-300 transition-colors cursor-pointer">Blogs</li>
        <li className="hover:text-yellow-300 transition-colors cursor-pointer">Products</li>
        <li className="hover:text-yellow-300 transition-colors cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
