# 🌟 FastAPI router that defines the POST endpoint for submitting quotes

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.post_quote_service import process_quote

router = APIRouter()

class QuoteRequest(BaseModel):
    author: str
    quote: str


@router.post("/quote")
async def create_quote(request: QuoteRequest):
    result = process_quote(request.author, request.quote)

    if "error" in result:
        raise HTTPException(status_code=400, detail=result["error"])

    return result