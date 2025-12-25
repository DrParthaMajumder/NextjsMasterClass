"use client";
// 🌟 Example: Next.js Client Component auto-fetching data from FastAPI using useEffect + Axios
/*
  - Backend: FastAPI at http://127.0.0.1:8000/api/quote
  - Purpose: Fetch data automatically when component mounts
  - Uses Axios inside useEffect()
*/

import { useState, useEffect } from "react";
import axios from "axios";

export default function QuoteClient() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔹 Fetch data once when the component loads
  useEffect(() => {
    async function fetchQuote() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const res = await axios.get("http://127.0.0.1:8000/api/quote");
        setQuote(res.data.quote);
      } catch (err) {
        console.error("Error fetching quote:", err);
        setError("Failed to fetch quote from FastAPI");
      } finally {
        setLoading(false);
      }
    }

    fetchQuote(); // ✅ Trigger fetch on component mount
  }, []); // Empty dependency array = runs only once

  if (loading) return <p className="p-6 text-green-600">Loading...</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  return (
    <div className="p-6 text-lg text-green-700">
      <p>💬 Quote from FastAPI:</p>
      <p className="mt-2 font-semibold">{quote}</p>
    </div>
  );
}
