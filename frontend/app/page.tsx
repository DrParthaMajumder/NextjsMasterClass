// Home page listing links to basic Next.js examples
// Each link navigates to a separate example page
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Next.js Masterclass Examples
        </h1>
        <p className="text-gray-600 mt-2">
          Explore the basics on the left and advanced topics on the right.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Basic Examples */}
          <section className="rounded-2xl border bg-white shadow-sm hover:shadow-md transition p-6">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">
              Basic Examples
            </h2>
            <ul className="space-y-3">
              <li>
                {/* Link to Example 1 */}
                <Link
                  href="/basic/ex1"
                  className="group inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900"
                >
                  <span className="h-2 w-2 rounded-full bg-indigo-400 group-hover:bg-indigo-600" />
                  Ex1: Basic Component
                </Link>
              </li>
              <li>
                {/* Link to Example 2 */}
                <Link
                  href="/basic/ex2"
                  className="group inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900"
                >
                  <span className="h-2 w-2 rounded-full bg-indigo-400 group-hover:bg-indigo-600" />
                  Ex2: Multiple Components
                </Link>
              </li>
              <li>
                {/* Link to Example 3 */}
                <Link
                  href="/basic/ex3"
                  className="group inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900"
                >
                  <span className="h-2 w-2 rounded-full bg-indigo-400 group-hover:bg-indigo-600" />
                  Ex3: Styling with Tailwind
                </Link>
              </li>
              <li>
                {/* Link to Example 4 */}
                <Link
                  href="/basic/ex4"
                  className="group inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900"
                >
                  <span className="h-2 w-2 rounded-full bg-indigo-400 group-hover:bg-indigo-600" />
                  Ex4: Image Optimization
                </Link>
              </li>
              <li>
                {/* Link to Example 5 */}
                <Link
                  href="/basic/ex5/344345"
                  className="group inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900"
                >
                  <span className="h-2 w-2 rounded-full bg-indigo-400 group-hover:bg-indigo-600" />
                  Ex5: Dynamic Routes (Server)
                </Link>
              </li>
              <li>
                {/* Link to Example 6 */}
                <Link
                  href="/basic/ex6/3443"
                  className="group inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900"
                >
                  <span className="h-2 w-2 rounded-full bg-indigo-400 group-hover:bg-indigo-600" />
                  Ex6: Dynamic Routes (Client)
                </Link>
              </li>
              <li>
                {/* Link to Example 7 */}
                <Link
                  href="/basic/ex7"
                  className="group inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900"
                >
                  <span className="h-2 w-2 rounded-full bg-indigo-400 group-hover:bg-indigo-600" />
                  Ex7: useState Hook
                </Link>
              </li>
              <li>
                {/* Link to Example 8 */}
                <Link
                  href="/basic/ex8"
                  className="group inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900"
                >
                  <span className="h-2 w-2 rounded-full bg-indigo-400 group-hover:bg-indigo-600" />
                  Ex8: Component Functions
                </Link>
              </li>
              <li>
                {/* Link to Example 9 */}
                <Link
                  href="/basic/ex9"
                  className="group inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900"
                >
                  <span className="h-2 w-2 rounded-full bg-indigo-400 group-hover:bg-indigo-600" />
                  Ex9: Utility Functions
                </Link>
              </li>
            </ul>
          </section>

          {/* Advanced Examples */}
          <section className="rounded-2xl border bg-white shadow-sm hover:shadow-md transition p-6">
            <h2 className="text-xl font-semibold text-pink-600 mb-4">
              Advanced Examples
            </h2>
            <ul className="space-y-3">
              <li>
                {/* Link to Example 1 */}
                <Link
                  href="/advanced/Ex1"
                  className="group inline-flex items-center gap-2 text-pink-700 hover:text-pink-900"
                >
                  <span className="h-2 w-2 rounded-full bg-pink-400 group-hover:bg-pink-600" />
                  Ex1: Fetching Data from FastAPI using Native fetch()
                </Link>
              </li>
              <li>
                {/* Link to Example 2*/}
                <Link
                  href="/advanced/Ex2"
                  className="group inline-flex items-center gap-2 text-pink-700 hover:text-pink-900"
                >
                  <span className="h-2 w-2 rounded-full bg-pink-400 group-hover:bg-pink-600" />
                  Ex2: Auto-fetching data from FastAPI using useEffect
                </Link>
              </li>
              <li>
                {/* Link to Example 3*/}
                <Link
                  href="/advanced/Ex3"
                  className="group inline-flex items-center gap-2 text-pink-700 hover:text-pink-900"
                >
                  <span className="h-2 w-2 rounded-full bg-pink-400 group-hover:bg-pink-600" />
                  Ex3: Fetching Data from FastAPI using Axios
                </Link>
              </li>
              <li>
                {/* Link to Example 4*/}
                <Link
                  href="/advanced/Ex4"
                  className="group inline-flex items-center gap-2 text-pink-700 hover:text-pink-900"
                >
                  <span className="h-2 w-2 rounded-full bg-pink-400 group-hover:bg-pink-600" />
                  Ex4: Fetching Data from FastAPI using Axios
                </Link>
              </li>
              <li>
                {/* Link to Example 5*/}
                <Link
                  href="/advanced/Ex5"
                  className="group inline-flex items-center gap-2 text-pink-700 hover:text-pink-900"
                >
                  <span className="h-2 w-2 rounded-full bg-pink-400 group-hover:bg-pink-600" />
                  Ex5: Feedback Form (POST)
                </Link>
              </li>
            </ul>
          </section>

          {/* Tailwind CSS Examples */}
          <section className="rounded-2xl border bg-white shadow-sm hover:shadow-md transition p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-4">
              Tailwind CSS Learning Path
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/tailwinds/Ex1"
                  className="group inline-flex items-center gap-2 text-green-700 hover:text-green-900"
                >
                  <span className="h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-600" />
                  Ex1: Typography Basics
                </Link>
              </li>
              <li>
                <Link
                  href="/tailwinds/Ex2"
                  className="group inline-flex items-center gap-2 text-green-700 hover:text-green-900"
                >
                  <span className="h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-600" />
                  Ex2: Spacing (Padding & Margin)
                </Link>
              </li>
              <li>
                <Link
                  href="/tailwinds/Ex3"
                  className="group inline-flex items-center gap-2 text-green-700 hover:text-green-900"
                >
                  <span className="h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-600" />
                  Ex3: Layout (Flexbox & Grid)
                </Link>
              </li>
              <li>
                <Link
                  href="/tailwinds/Ex4"
                  className="group inline-flex items-center gap-2 text-green-700 hover:text-green-900"
                >
                  <span className="h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-600" />
                  Ex4: Colors & Backgrounds
                </Link>
              </li>
              <li>
                <Link
                  href="/tailwinds/Ex5"
                  className="group inline-flex items-center gap-2 text-green-700 hover:text-green-900"
                >
                  <span className="h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-600" />
                  Ex5: Borders & Shadows
                </Link>
              </li>
              <li>
                <Link
                  href="/tailwinds/Ex6"
                  className="group inline-flex items-center gap-2 text-green-700 hover:text-green-900"
                >
                  <span className="h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-600" />
                  Ex6: Responsive Design
                </Link>
              </li>
              <li>
                <Link
                  href="/tailwinds/Ex7"
                  className="group inline-flex items-center gap-2 text-green-700 hover:text-green-900"
                >
                  <span className="h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-600" />
                  Ex7: Interactive & Transitions
                </Link>
              </li>
            </ul>
          </section>

          {/* HTML Learning Examples */}
          <section className="rounded-2xl border bg-white shadow-sm hover:shadow-md transition p-6">
            <h2 className="text-xl font-semibold text-orange-600 mb-4">
              HTML Learning Path
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/html_learning/Ex1"
                  className="group inline-flex items-center gap-2 text-orange-700 hover:text-orange-900"
                >
                  <span className="h-2 w-2 rounded-full bg-orange-400 group-hover:bg-orange-600" />
                  Ex1: Basic HTML Tags
                </Link>
              </li>
              <li>
                <Link
                  href="/html_learning/Ex2"
                  className="group inline-flex items-center gap-2 text-orange-700 hover:text-orange-900"
                >
                  <span className="h-2 w-2 rounded-full bg-orange-400 group-hover:bg-orange-600" />
                  Ex2: Forms and Inputs
                </Link>
              </li>
              <li>
                <Link
                  href="/html_learning/Ex3"
                  className="group inline-flex items-center gap-2 text-orange-700 hover:text-orange-900"
                >
                  <span className="h-2 w-2 rounded-full bg-orange-400 group-hover:bg-orange-600" />
                  Ex3: Tables and Semantic HTML
                </Link>
              </li>
              <li>
                <Link
                  href="/html_learning/Ex4"
                  className="group inline-flex items-center gap-2 text-orange-700 hover:text-orange-900"
                >
                  <span className="h-2 w-2 rounded-full bg-orange-400 group-hover:bg-orange-600" />
                  Ex4: Media and Embedding
                </Link>
              </li>
              <li>
                <Link
                  href="/html_learning/Ex6"
                  className="group inline-flex items-center gap-2 text-orange-700 hover:text-orange-900"
                >
                  <span className="h-2 w-2 rounded-full bg-orange-400 group-hover:bg-orange-600" />
                  Ex6: Progress & Time Elements
                </Link>
              </li>
              <li>
                <Link
                  href="/html_learning/Ex7"
                  className="group inline-flex items-center gap-2 text-orange-700 hover:text-orange-900"
                >
                  <span className="h-2 w-2 rounded-full bg-orange-400 group-hover:bg-orange-600" />
                  Ex7: Form Validation & Input Types
                </Link>
              </li>
              <li>
                <Link
                  href="/html_learning/Ex8"
                  className="group inline-flex items-center gap-2 text-orange-700 hover:text-orange-900"
                >
                  <span className="h-2 w-2 rounded-full bg-orange-400 group-hover:bg-orange-600" />
                  Ex8: Accessibility & ARIA
                </Link>
              </li>
              <li>
                <Link
                  href="/html_learning/Ex9"
                  className="group inline-flex items-center gap-2 text-orange-700 hover:text-orange-900"
                >
                  <span className="h-2 w-2 rounded-full bg-orange-400 group-hover:bg-orange-600" />
                  Ex9: Interactive Elements
                </Link>
              </li>
              <li>
                <Link
                  href="/html_learning/Ex10"
                  className="group inline-flex items-center gap-2 text-orange-700 hover:text-orange-900"
                >
                  <span className="h-2 w-2 rounded-full bg-orange-400 group-hover:bg-orange-600" />
                  Ex10: Meta Tags & Head Structure
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
