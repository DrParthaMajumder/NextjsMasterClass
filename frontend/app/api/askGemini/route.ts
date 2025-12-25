// app/api/askGemini/route.ts
import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = "http://127.0.0.1:8000/api/gemini";

export async function POST(req: NextRequest) {
  try {
    // Read JSON body from the frontend
    const body = await req.json(); // { user_input, tone, audience, length }

    const res = await fetch(BACKEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      return NextResponse.json(
        { error: "Backend error", detail: error.detail ?? null },
        { status: 500 },
      );
    }

    const data = await res.json();
    // data has: summary, bullet_points, suggested_title, difficulty_level, key_terms
    return NextResponse.json(data, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Failed to call Gemini backend", detail: String(err) },
      { status: 500 },
    );
  }
}
