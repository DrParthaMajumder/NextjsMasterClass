/**
 * Lesson 18:
 * Demonstrates embedded content using iframe.
 * Tailwind adds responsive sizing and border styling.
 */

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-4">
      <h2 className="text-xl font-semibold">Embedded Content Example</h2>

      <div className="w-full max-w-2xl text-center">
        <p className="text-red-500 mb-2">LinkedIn content cannot be directly embedded due to security policies.</p>
        <a 
          href="https://www.linkedin.com/in/aditya-hicounselor/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Visit Aditya's LinkedIn Profile
        </a>
      </div>

      <div className="w-full max-w-2xl">
        <h3 className="text-lg font-medium mb-2">
          Embedded YouTube Video (Example)
        </h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          className="border rounded-lg"
          title="YouTube Video"
          allowFullScreen
        />
      </div>
    </div>
  );
}
