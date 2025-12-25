from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from services.Langraph_reactflow.test_langgraph import run_qa


router = APIRouter()


class LangGraphQARequest(BaseModel):
    question: str


@router.post("/langgraph/qa")
def langgraph_qa(request: LangGraphQARequest):
    """Run the sequential LangGraph QA pipeline using Tavily + Gemini."""

    try:
        answer = run_qa(request.question)
        return {"answer": answer}
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))

