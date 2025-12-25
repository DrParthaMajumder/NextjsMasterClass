/*
  🌟 Recommended: Use native fetch() in Next.js (Server Component)
  - Backend: FastAPI at http://127.0.0.1:8000/api/quote
  - Purpose: Fetch data directly from FastAPI using built-in fetch()
  - cache: "no-store" → always get the latest data (no caching)
*/

export default async function QuotePage() {
  // Simulate loading delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch("http://127.0.0.1:8000/api/quote", {
    cache: "no-store",
  });

  console.log("res:", res);

  if (!res.ok) {
    throw new Error("Failed to fetch quote from FastAPI");
  }

  const data = await res.json(); // converts the raw HTTP response into actual JSON data
  console.log("data:", data);
  return (
    <div className="flex flex-col bg-pink-100 items-center justify-center p-6 text-xl text-blue-700 w-full mx-auto">
      <p>💬 Quote from FastAPI:</p>
      <p className="mt-2 font-semibold">{data.quote}</p>
    </div>
  );
}
