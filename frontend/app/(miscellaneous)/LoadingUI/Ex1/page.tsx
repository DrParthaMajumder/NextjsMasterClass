"use client";
/*
  🌟 Next.js Client Component — Feedback Form connected to FastAPI

  🧩 What this does:
  - Takes user input: name + message
  - Updates React state using onChange()
  - When the user clicks "Submit Feedback" → handleSubmit() runs
  - handleSubmit() reads latest state values and sends them to FastAPI via Axios POST
  - Shows a **loading spinner** and disables the button while sending

  💡 Flow:
    Input fields → update state → button click → use state → send to backend

  🖥️ Backend example:
    POST http://127.0.0.1:8000/api/feedback
    Body: { name: "Alice", message: "Great service!" }
*/

import { useState } from "react";
import axios from "axios";

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

      const response = await axios.post("http://127.0.0.1:8000/api/feedback", {
        name,
        message,
      });

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
        className={`w-full font-semibold py-2 rounded-lg transition flex items-center justify-center space-x-2 ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Sending...</span>
          </>
        ) : (
          "Submit Feedback"
        )}
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
    </div>
  );
}
