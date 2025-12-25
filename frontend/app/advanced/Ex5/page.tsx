"use client";
/*
  🌟 Next.js Client Component — Feedback Form with Loading Modal

  🧩 Features:
  - Shows a full-screen loading modal when data is being sent
  - Uses CSS spinner instead of GIF (lighter & smoother)
  - Automatically hides the modal after API response
*/

import { useState } from "react";
import axios from "axios";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false); // 🌀 Loading state

  async function handleSubmit() {
    if (!name || !message) {
      setStatus("❌ Please fill out all fields!");
      return;
    }

    try {
      setStatus("");
      setIsLoading(true); // 🔥 Show loading modal

      const response = await axios.post("http://127.0.0.1:8000/api/feedback", {
        name,
        message,
      });

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setStatus(`✅ Success: ${response.data.message}`);
      setName("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong!");
    } finally {
      setIsLoading(false); // ⛔ Hide loading modal
    }
  }

  return (
    <div className="relative max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-4">
      <h2 className="text-2xl font-bold text-blue-700 text-center">
        💬 Feedback Form
      </h2>

      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded-lg"
      />

      <textarea
        placeholder="Your feedback message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border p-2 rounded-lg"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        disabled={isLoading} // prevent double clicks
      >
        {isLoading ? "Sending..." : "Submit Feedback"}
      </button>

      {status && <p className="text-center mt-2">{status}</p>}

      {/* 🌟 Loading Modal */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-3">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-blue-600 font-semibold">
              Sending your feedback...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
