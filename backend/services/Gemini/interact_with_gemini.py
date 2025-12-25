import os
from typing import Dict, Any

from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import JsonOutputParser

load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise RuntimeError("GEMINI_API_KEY is not set in the environment")

model = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    temperature=0.3,
    api_key=api_key,
)

parser = JsonOutputParser()  # expects the model to output valid JSON

prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            """
You are a backend helper that MUST return **only valid JSON**.

Rules:
- Do not include any natural-language explanation outside the JSON.
- Do not add comments, markdown, or backticks.
- The JSON must be a single object (no arrays at the top level).
- All string values must be plain text (no newlines like "\n\n" unless needed).
""",
        ),
        (
            "human",
            """
User message: {user_input}
Target audience: {audience}
Writing tone: {tone}
Desired length: {length}

Generate a clear explanation of the topic for this audience and tone.
Then return **only** a JSON object with exactly these fields.
Use this as a type example (do NOT treat these as template variables):

{{
  "summary": "string",                 // 2-4 sentence overview
  "bullet_points": ["string", ...],   // 3-7 key bullet points
  "suggested_title": "string",        // short title for the content
  "difficulty_level": "beginner | intermediate | advanced",
  "key_terms": ["string", ...]        // important technical terms or concepts
}}

Make sure the JSON you actually return is syntactically valid and matches this shape.
""",
        ),
    ]
)


async def generate_gemini_response(payload: Dict[str, Any]) -> Dict[str, Any]:
    """Call Gemini via LangChain and return a structured JSON dict.

    Expected payload keys:
      - user_input: str (main message or question)
      - tone: str (e.g. "simple", "professional")
      - audience: str (e.g. "beginner", "advanced")
      - length: str (e.g. "short", "medium", "detailed")
    """

    user_input = payload.get("user_input", "")
    tone = payload.get("tone", "neutral")
    audience = payload.get("audience", "general")
    length = payload.get("length", "medium")

    chain = prompt | model | parser

    result: Dict[str, Any] = await chain.ainvoke(
        {
            "user_input": user_input,
            "tone": tone,
            "audience": audience,
            "length": length,
        }
    )

    # result is already a dict from JsonOutputParser
    return result