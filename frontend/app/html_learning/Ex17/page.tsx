/**
 * Lesson 17:
 * Demonstrates semantic HTML5 elements: header, nav, main, section, article, footer.
 * Tailwind adds spacing and visual hierarchy.
 */

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <header className="bg-blue-100 p-4 rounded-lg">
        <h1 className="text-2xl font-bold">Website Header</h1>
      </header>

      <nav className="bg-gray-100 p-4 rounded-lg">
        <ul className="flex space-x-4 list-none">
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <main className="bg-white p-6 rounded-lg border">
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Main Section</h2>
          <article className="bg-gray-50 p-4 rounded">
            <h3 className="font-medium mb-2">Article Title</h3>
            <p>This is an article within the main section.</p>
          </article>
        </section>
      </main>

      <footer className="bg-gray-200 p-4 rounded-lg text-center">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
