from typing import Literal

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from services.Gemini.interact_with_gemini import generate_gemini_response


router = APIRouter()


class GeminiRequest(BaseModel):
    user_input: str
    tone: Literal["simple", "professional", "fun"] = "simple"
    audience: Literal["beginner", "intermediate", "advanced"] = "beginner"
    length: Literal["short", "medium", "detailed"] = "medium"


@router.post("/gemini")
async def call_gemini(request: GeminiRequest):
    try:
        result = await generate_gemini_response(request.model_dump())
        return result
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))
