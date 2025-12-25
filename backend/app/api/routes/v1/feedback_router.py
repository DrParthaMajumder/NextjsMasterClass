from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.feedback_service import process_feedback

router = APIRouter()

class FeedbackRequest(BaseModel):
    name: str
    message: str

@router.post("/feedback")
async def create_feedback(request: FeedbackRequest):
    result = process_feedback(request.name, request.message)

    if "error" in result:
        raise HTTPException(status_code=400, detail=result["error"])

    return result
