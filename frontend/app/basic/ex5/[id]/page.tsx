// app/basic/ex5/[id]/page.tsx
// Server Component version
// Displays the blog post ID from the URL
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-10">
        Dynamic Route Example: Server Component
      </h1>
      <p className="text-lg text-gray-700">
        You opened page with ID:{" "}
        <span className="font-semibold text-green-600 hover:animate-pulse transition-transform">{id}</span>
      </p>
    </div>
  );
}
