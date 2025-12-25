/**
 * Lesson 16:
 * Demonstrates HTML tables using <table>, <tr>, <td>, and <th>.
 * Tailwind adds borders, padding, and alternating row colors.
 */

export default function Page() {
  return (
    <div className="flex items-center justify-center p-6">
      <table className="border-collapse border border-amber-700">
        <thead>
          <tr>
            <th className="border border-amber-700 px-4 py-2">Name</th>
            <th className="border border-amber-700 px-4 py-2">Age</th>
            <th className="border border-amber-700 px-4 py-2">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-amber-700 px-4 py-2">John</td>
            <td className="border border-amber-700 px-4 py-2">25</td>
            <td className="border border-amber-700 px-4 py-2">New York</td>
          </tr>
          <tr>
            <td className="border border-amber-700 px-4 py-2">Jane</td>
            <td className="border border-amber-700 px-4 py-2">30</td>
            <td className="border border-amber-700 px-4 py-2">London</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
