/**
 * Example 13: Badge/Tag Component
 *
 * Demonstrates Tailwind CSS badge styling:
 * - Inline-flex layout (flex, items-center, justify-center)
 * - Background colors (bg-fuchsia-900)
 * - Text styling (text-white, text-sm)
 * - Spacing and sizing (px-3, py-1, w-18, h-18, max-w-2xs, mx-auto)
 * - Border radius (rounded-full)
 * - Hover animations (hover:animate-ping)
 * - Transitions (transition)
 *
 * This component creates a pill-shaped badge/tag with hover effects,
 * commonly used for status indicators, labels, or categories.
 * The ping animation on hover provides visual feedback.
 */
export default function Example13() {
  return (
    <span className="flex items-center justify-center px-16 py-8 bg-fuchsia-900 text-white rounded-full text-sm w-20 h-20 mx-auto hover:animate-ping transition transform">
      Success
    </span>
  );
}
