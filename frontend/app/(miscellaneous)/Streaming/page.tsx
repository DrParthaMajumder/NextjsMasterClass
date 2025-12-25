"use client";

import { useState } from "react";
import axios from "axios";

export default function StreamingPage() {
  const [userInput, setUserInput] = useState("");
  const [tone, setTone] = useState("simple");
  const [audience, setAudience] = useState("beginner");
  const [length, setLength] = useState("medium");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [streamedContent, setStreamedContent] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setStreamedContent("");
    setIsComplete(false);

    try {
      // fetch() only establishes the connection. The actual data comes later through reader.read() calls
      const response = await fetch("http://127.0.0.1:8000/api/gemini-stream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_input: userInput,
          tone,
          audience,
          length,
        }),
      });

      console.log("response:", response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader(); //optional chaining operator
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error("Response body is not readable");
      }

      while (true) {
        const { done, value } = await reader.read();
        console.log("done:", done);
        console.log("value:", value);

        if (done) {
          setIsComplete(true);
          break;
        }

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const data = JSON.parse(line.slice(6));

              if (data.type === "content") {
                setStreamedContent((prev) => prev + data.content);
                // Smooth scroll to bottom as content grows
                setTimeout(() => {
                  const element = document.getElementById("streaming-content");
                  if (element) {
                    element.scrollTop = element.scrollHeight;
                  }
                }, 50);
              } else if (data.type === "done") {
                setIsComplete(true);
                break;
              }
            } catch (parseError) {
              console.error("Error parsing SSE data:", parseError);
            }
          }
        }
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong with streaming");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-blue-700">
        Ask Gemini (Streaming Demo)
      </h1>
      <p className="text-gray-700 text-sm">
        This page sends your input to the FastAPI streaming endpoint{" "}
        <code>/api/gemini-stream</code> and displays responses in real-time.
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
            placeholder="Explain Next.js streaming with Server-Sent Events"
            required
            disabled={loading}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium">Tone</label>
            <select
              className="w-full border rounded-md p-2 text-sm"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
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
          <span>{loading ? "Streaming..." : "Ask Gemini (Streaming)"}</span>
        </button>
      </form>

      {error && (
        <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-3">
          Error: {error}
        </div>
      )}

      {(streamedContent || loading) && (
        <div className="bg-gray-50 border border-gray-200 rounded-md p-4 space-y-3 text-sm animate-fadeIn">
          <h2 className="font-semibold text-lg flex items-center gap-2">
            Gemini Response (Streaming)
            {loading && (
              <span className="w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
            )}
            {isComplete && (
              <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded animate-fadeIn">
                Complete
              </span>
            )}
          </h2>

          <div
            id="streaming-content"
            className="whitespace-pre-wrap text-gray-800 leading-relaxed relative max-h-96 overflow-y-auto scroll-smooth"
          >
            <div className="transition-all duration-300 ease-in-out">
              {streamedContent}
            </div>
            {loading && !streamedContent && (
              <div className="flex items-center gap-2 text-gray-400 italic">
                <span>Waiting for response</span>
                <div className="flex gap-1">
                  <span
                    className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></span>
                  <span
                    className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></span>
                  <span
                    className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></span>
                </div>
              </div>
            )}
            {loading && streamedContent && (
              <span className="inline-block w-2 h-4 bg-linear-to-r from-blue-600 to-purple-600 animate-pulse ml-1 rounded-sm"></span>
            )}
          </div>
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-md p-3 text-xs text-blue-800">
        <strong>How it works:</strong>
        <ul className="list-disc list-inside mt-1 space-y-1">
          <li>Uses Server-Sent Events (SSE) for real-time streaming</li>
          <li>Direct call to FastAPI streaming endpoint</li>
          <li>Response appears character by character as it's generated</li>
          <li>No need to wait for the complete response</li>
        </ul>
      </div>
    </div>
  );
}
