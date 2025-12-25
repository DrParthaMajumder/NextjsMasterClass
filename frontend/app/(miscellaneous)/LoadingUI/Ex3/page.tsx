"use client";
/*
  🌟 Next.js Client Component — Feedback Form using Next.js API Route

  🧩 What this does:
  - Takes user input: name + message
  - Updates React state using onChange()
  - When the user clicks "Submit Feedback" → handleSubmit() runs
  - handleSubmit() reads latest state values and sends them to our Next.js API route via Axios POST
  - Shows a **loading spinner** and disables the button while sending

  💡 Flow:
    Input fields → update state → button click → use state → POST to internal API

  🖥️ API route example:
    POST /api/feedback
    Body: { name: "Alice", message: "Great service!" }
*/

import { useState } from "react";
import React from "react";
import axios from "axios";
import Image from "next/image";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!name || !message) {
      setStatus("❌ Please fill out all fields!");
      return;
    }

    try {
      setLoading(true);
      setStatus("⏳ Sending...");

      // Optional: simulate delay so spinner is visible
      await new Promise((r) => setTimeout(r, 1200));

      const response = await axios.post("/api/feedback", { name, message });

      setStatus(`✅ Success: ${response.data.message}`);
      setName("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-4">
      <h2 className="text-2xl font-bold text-blue-700 text-center">
        💬 Feedback Form
      </h2>

      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded-lg"
        disabled={loading}
      />

      <textarea
        placeholder="Your feedback message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border p-2 rounded-lg"
        disabled={loading}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full font-semibold py-2 rounded-lg transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        {loading ? "Submitting..." : "Submit Feedback"}
      </button>

      {status && (
        <p
          className={`text-center mt-2 ${
            status.startsWith("✅")
              ? "text-green-600"
              : status.startsWith("❌")
                ? "text-red-600"
                : "text-gray-600"
          }`}
        >
          {status}
        </p>
      )}
      {loading && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Submitting feedback"
        >
          <div className="flex w-[min(92vw,420px)] flex-col items-center gap-4 rounded-2xl bg-white/95 p-6 shadow-2xl ring-1 ring-black/5">
            <div className="rounded-full bg-blue-50 p-4">
              <Image
                src="/Spinner.svg"
                alt="Loading"
                width={64}
                height={64}
                priority
              />
            </div>
            <div className="text-center space-y-1">
              <p className="text-base font-semibold text-gray-900">
                Processing your feedback
              </p>
              <p className="text-sm text-gray-600">
                This usually takes a moment…
              </p>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
              <div className="h-full w-1/2 animate-pulse bg-linear-to-r from-blue-500 via-blue-400 to-blue-600"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
