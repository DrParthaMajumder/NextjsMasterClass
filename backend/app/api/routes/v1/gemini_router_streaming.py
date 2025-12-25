from typing import Literal

from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

from services.Gemini.interact_with_gemini_streaming import generate_gemini_streaming_response


router = APIRouter()


class GeminiRequest(BaseModel):
    user_input: str
    tone: Literal["simple", "professional", "fun"] = "simple"
    audience: Literal["beginner", "intermediate", "advanced"] = "beginner"
    length: Literal["short", "medium", "detailed"] = "medium"


@router.post("/gemini-stream")
async def call_gemini_streaming(request: GeminiRequest):
    """Streaming endpoint for Gemini responses using Server-Sent Events."""
    try:
        # Convert Pydantic model to dict
        payload = request.model_dump()
        
        # Create streaming response
        return StreamingResponse(
            generate_gemini_streaming_response(payload),
            media_type="text/event-stream",
            headers={
                "Cache-Control": "no-cache",
                "Connection": "keep-alive",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
            }
        )
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))