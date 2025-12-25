"use client";
// 🌟 Example: Next.js Client Component fetching data from FastAPI using Axios
/*
  - Backend: FastAPI at http://127.0.0.1:8000/api/quote
  - Purpose: Call FastAPI from the browser (Client Component)
  - Uses Axios for easy async requests and error handling
*/

import { useState } from "react";
import axios from "axios";

export default function QuoteClient() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Function to fetch data when user clicks button
  async function fetchQuote() {
    try {
      setLoading(true);
      setError("");
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const res = await axios.get("http://127.0.0.1:8000/api/quote");
      console.log("res:", res);
      setQuote(res.data.quote); //res.data is automatically created by Axios — it contains the JSON data returned by your FastAPI backend
    } catch (err) {
      console.error("Error fetching quote:", err);
      setError("Failed to fetch quote from FastAPI");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col bg-pink-200 items-center justify-around p-6 text-lg text-green-700 w-full mx-auto">
      <button
        onClick={fetchQuote}
        className="px-4 py-2 bg-green-600 text-white rounded-lg"
        disabled={loading}
      >
        {loading ? "Loading..." : "Get Quote"}
      </button>

      {error && <p className="mt-4 text-red-600">{error}</p>}
      {quote && <p className="mt-4 font-semibold">{quote}</p>}
    </div>
  );
}
