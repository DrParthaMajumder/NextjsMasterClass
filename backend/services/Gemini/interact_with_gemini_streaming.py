import os
import json
from typing import Dict, Any, AsyncGenerator

from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate

load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise RuntimeError("GEMINI_API_KEY is not set in the environment")

model = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    temperature=0.3,
    api_key=api_key,
    streaming=True,  # Enable streaming
)

prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            """
You are a backend helper that provides clear, structured explanations.

Rules:
- Provide comprehensive explanations based on the user's requirements
- Use appropriate tone and complexity for the target audience
- Structure your response to be easily readable
- Include relevant examples when helpful
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
Provide a comprehensive response that addresses the user's needs.
""",
        ),
    ]
)


async def generate_gemini_streaming_response(payload: Dict[str, Any]) -> AsyncGenerator[str, None]: #AsyncGenerator[ <YIELD_TYPE> , <RETURN_TYPE> ]
    """Call Gemini via LangChain with streaming and yield JSON chunks.
    
    Expected payload keys:
      - user_input: str (main message or question)
      - tone: str (e.g. "simple", "professional")
      - audience: str (e.g. "beginner", "advanced")
      - length: str (e.g. "short", "medium", "detailed")
    
    Yields:
      - JSON-formatted SSE messages with content chunks
    """
    
    user_input = payload.get("user_input", "")
    tone = payload.get("tone", "neutral")
    audience = payload.get("audience", "general")
    length = payload.get("length", "medium")

    # Format the prompt
    formatted_prompt = prompt.format_prompt(
        user_input=user_input,
        tone=tone,
        audience=audience,
        length=length,
    )

    # Start streaming response
    async for chunk in model.astream(formatted_prompt): #Send this prompt to the Gemini API and give me the response as a stream of small chunks.
        if chunk.content:
            # Format as Server-Sent Event
            sse_data = {
                "type": "content",
                "content": chunk.content,
                "timestamp": str(chunk.response_metadata.get("timestamp", "")) if chunk.response_metadata else None
            }
            yield f"data: {json.dumps(sse_data)}\n\n"
    
    # Send completion signal
    completion_data = {
        "type": "done",
        "message": "Stream completed"
    }
    yield f"data: {json.dumps(completion_data)}\n\n"