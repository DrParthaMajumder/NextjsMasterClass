import { useState } from "react";
import axios from "axios";

export function useAskGemini() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any | null>(null);

  async function askGemini({
    userInput,
    tone,
    audience,
    length,
  }: {
    userInput: string;
    tone: string;
    audience: string;
    length: string;
  }) {
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

  return { askGemini, loading, error, result };
}
