"use client";

import { useState } from "react";
import axios from "axios";

// Page: app/advancedFormAction/Ex1/page.tsx
// Lets the user call the Gemini backend via the Next.js API route /api/askGemini

export default function AdvancedFormActionEx1Page() {
  const [userInput, setUserInput] = useState("");
  const [tone, setTone] = useState("simple");
  const [audience, setAudience] = useState("beginner");
  const [length, setLength] = useState("medium");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post("/api/askGemini", {
        user_input: userInput,
        tone,
        audience,
        length,
      });

      setResult(response.data);
    } catch (err: any) {
      if (err.response?.data) {
        const data = err.response.data;
        setError(
          data.detail ||
            data.error ||
            "Something went wrong calling /api/askGemini",
        );
      } else {
        setError(String(err));
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-blue-700">
        Ask Gemini (Form Action Demo)
      </h1>
      <p className="text-gray-700 text-sm">
        This page sends your input to the Next.js API route{" "}
        <code>/api/askGemini</code>, which forwards the request to the FastAPI{" "}
        <code>/api/gemini</code> endpoint.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white rounded-xl shadow p-4"
      >
        <div className="space-y-1">
          <label className="block text-sm font-medium">
            Your question / topic
          </label>
          <textarea
            className="w-full border rounded-md p-2 text-sm min-h-[100px]"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Explain Next.js form actions with a simple example"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium">Tone</label>
            <select
              className="w-full border rounded-md p-2 text-sm"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            >
              <option value="simple">Simple</option>
              <option value="professional">Professional</option>
              <option value="fun">Fun</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium">Audience</label>
            <select
              className="w-full border rounded-md p-2 text-sm"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium">Length</label>
            <select
              className="w-full border rounded-md p-2 text-sm"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            >
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="detailed">Detailed</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:bg-gray-400 flex items-center gap-2"
        >
          {loading && (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          )}
          <span>{loading ? "Asking Gemini..." : "Ask Gemini"}</span>
        </button>
      </form>

      {error && (
        <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-3">
          Error: {error}
        </div>
      )}

      {result && (
        <div className="bg-gray-50 border border-gray-200 rounded-md p-4 space-y-3 text-sm">
          <h2 className="font-semibold text-lg">Gemini Response</h2>
          {result.suggested_title && (
            <p className="font-semibold">{result.suggested_title}</p>
          )}
          {result.summary && <p>{result.summary}</p>}

          {Array.isArray(result.bullet_points) &&
            result.bullet_points.length > 0 && (
              <ul className="list-disc list-inside space-y-1">
                {result.bullet_points.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

          {Array.isArray(result.key_terms) && result.key_terms.length > 0 && (
            <p>
              <span className="font-medium">Key terms: </span>
              {result.key_terms.join(", ")}
            </p>
          )}

          <details className="mt-2">
            <summary className="cursor-pointer text-blue-600">Raw JSON</summary>
            <pre className="mt-2 whitespace-pre-wrap text-xs bg-white p-2 rounded-md border border-gray-200 overflow-x-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
}
