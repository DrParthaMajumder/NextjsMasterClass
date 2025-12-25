"use client";
/*
  🌟 Next.js Client Component — POST request to FastAPI using Axios
  - Endpoint: http://127.0.0.1:8000/api/quote
  - Method: POST
  - Sends author and quote to FastAPI
*/

import { useState } from "react";
import axios from "axios";

export default function QuotePostClient() {
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Function to send POST request to FastAPI
  async function submitQuote() {
    try {
      setLoading(true);
      setError("");
      setResponse("");

      if (!author.trim() || !quote.trim   ()) {
        setError("Author and quote cannot be empty");
        return;
      }

      console.log("Sending data:", { author, quote });
      const res = await axios.post("http://127.0.0.1:8000/api/quote", {
        author,
        quote,
      });

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setResponse(res.data.message);
    } catch (err: any) {
      console.error("Error posting quote:", err);
      setError(err.response?.data?.detail || "Failed to submit quote");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold text-blue-700">Submit a Quote</h2>

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="w-full border p-2 rounded-lg"
      />

      <textarea
        placeholder="Your quote"
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
        className="w-full border p-2 rounded-lg"
      />

      <button
        onClick={submitQuote}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        {loading ? "Submitting..." : "Submit Quote"}
      </button>

      {response && <p className="text-green-700 mt-2 hover:animate-pulse transition-transform">{response}</p>}
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
}
