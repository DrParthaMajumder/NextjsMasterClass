"use server";

export async function askGeminiAction(prevState: any, formData: FormData) {
  // Validate formData is not null and has get method
  if (!formData || typeof formData.get !== "function") {
    return { error: "Form data is missing or invalid" };
  }

  const user_input = formData.get("userInput");
  const tone = formData.get("tone");
  const audience = formData.get("audience");
  const length = formData.get("length");

  // Validate required fields
  if (!user_input) {
    return { error: "User input is required" };
  }

  // Call your FastAPI backend
  const response = await fetch("http://127.0.0.1:8000/api/gemini", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_input,
      tone,
      audience,
      length,
    }),
  });

  const data = await response.json();
  return data;
}
