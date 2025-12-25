import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as {
      name?: string;
      message?: string;
    } | null;

    if (!body || !body.name || !body.message) {
      return NextResponse.json(
        { message: "Invalid payload. 'name' and 'message' are required." },
        { status: 400 },
      );
    }

    // Optional: simulate work similar to your FastAPI latency so UI spinners are visible
    await new Promise((r) => setTimeout(r, 800));

    // Here you could call your real backend, DB, or other services.
    // For now, we mirror FastAPI-style success response shape.
    return NextResponse.json(
      { message: `Thanks ${body.name}! We received: ${body.message}` },
      { status: 200 },
    );
  } catch (err) {
    console.error("/api/feedback error:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
