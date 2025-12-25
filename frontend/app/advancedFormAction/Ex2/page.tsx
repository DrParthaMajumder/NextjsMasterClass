"use client";

import { useActionState } from "react";
import { askGeminiAction } from "./action";

export default function AdvancedFormActionEx1Page() {
  // useActionState handles the server action response
  const [state, formAction] = useActionState(askGeminiAction, {});

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-blue-700">
        Ask Gemini (Server Action)
      </h1>
      <p className="text-gray-700 text-sm">
        This form now calls the server action <code>askGeminiAction</code>{" "}
        directly.
      </p>

      <form
        action={formAction}
        className="space-y-4 bg-white rounded-xl shadow p-4"
      >
        <div className="space-y-1">
          <label className="block text-sm font-medium">
            Your question / topic
          </label>
          <textarea
            name="userInput"
            className="w-full border rounded-md p-2 text-sm min-h-[100px]"
            placeholder="Explain Next.js form actions with a simple example"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium">Tone</label>
            <select
              name="tone"
              className="w-full border rounded-md p-2 text-sm"
            >
              <option value="simple">Simple</option>
              <option value="professional">Professional</option>
              <option value="fun">Fun</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium">Audience</label>
            <select
              name="audience"
              className="w-full border rounded-md p-2 text-sm"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium">Length</label>
            <select
              name="length"
              className="w-full border rounded-md p-2 text-sm"
            >
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="detailed">Detailed</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
        >
          Ask Gemini
        </button>
      </form>

      {/* Render result */}
      {state && (
        <div className="bg-gray-50 border border-gray-200 rounded-md p-4 space-y-3 text-sm mt-4">
          {state.error ? (
            <div className="text-red-600 font-semibold">
              Error: {state.error}
            </div>
          ) : (
            <>
              <h2 className="font-semibold text-lg">Gemini Response</h2>
              {state.suggested_title && (
                <p className="font-semibold">{state.suggested_title}</p>
              )}
              {state.summary && <p>{state.summary}</p>}
              {Array.isArray(state.bullet_points) &&
                state.bullet_points.length > 0 && (
                  <ul className="list-disc list-inside space-y-1">
                    {state.bullet_points.map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              {Array.isArray(state.key_terms) && state.key_terms.length > 0 && (
                <p>
                  <span className="font-medium">Key terms: </span>
                  {state.key_terms.join(", ")}
                </p>
              )}
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600">
                  Raw JSON
                </summary>
                <pre className="mt-2 whitespace-pre-wrap text-xs bg-white p-2 rounded-md border border-gray-200 overflow-x-auto">
                  {JSON.stringify(state, null, 2)}
                </pre>
              </details>
            </>
          )}
        </div>
      )}
    </div>
  );
}
