# main.py
import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from app.api.routes.v1 import quote_service_router
from app.api.routes.v1 import post_quote_router
from app.api.routes.v1 import feedback_router
from app.api.routes.v1 import gemini_router
from app.api.routes.v1 import gemini_router_streaming
from app.api.routes.v1 import test_langgraph_router

load_dotenv()
os.environ["GOOGLE_API_KEY"] = os.getenv("GEMINI_API_KEY", "")

app = FastAPI()

# Allow Next.js frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:3000"]
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(quote_service_router.router, prefix="/api")
app.include_router(post_quote_router.router, prefix="/api")
app.include_router(feedback_router.router, prefix="/api")
app.include_router(gemini_router.router, prefix="/api")
app.include_router(gemini_router_streaming.router, prefix="/api")
app.include_router(test_langgraph_router.router, prefix="/api")

@app.get("/")
def root():
    return {"message": "FastAPI is running!"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)