from fastapi import APIRouter
from services.quote_service import get_quote

router = APIRouter()

@router.get("/quote")
def read_quote():
    return get_quote()