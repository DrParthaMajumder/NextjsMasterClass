// ✅ This is a client-side dynamic routing example in Next.js.
// It uses `useParams()` from `next/navigation` to access the dynamic `id` in the URL (e.g., /basic/ex5/123).
// Works in Next.js 15+ and must include `"use client"` because it uses a React hook.

"use client";
import { useParams } from "next/navigation";

export default function DynamicClientPage() {
  const {id} = useParams();

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 p-5">
        Dynamic Route Example:Client Side
      </h1>
      <p className="text-lg text-gray-700 p-5">
        You opened page with ID:{" "}
        <span className="font-semibold text-green-600 hover: animate-pulse transition-transform">{id}</span>
      </p>
    </div>
  );
}
