// Example 4: Next.js Image
// Demonstrates optimized image rendering with Tailwind
import Image from "next/image";

export default function ImagePage() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-5 text-green-600">
        Next.js Image Example
      </h1>
      <Image 
        src="/globe.svg" 
        alt="Next.js Logo" 
        width={200} 
        height={200}
        className="rounded-lg shadow-lg bg-amber-950 hover:animate-spin transition-transform"
      />
    </div>
  );
}
