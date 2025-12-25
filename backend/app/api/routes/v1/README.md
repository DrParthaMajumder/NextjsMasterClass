# API Version 1 Routes

This folder contains all v1 API endpoints for the FastAPI backend.

## Routes

### feedback_router.py
- User feedback collection endpoints
- POST /api/feedback for submitting feedback
- Feedback storage and processing

### gemini_router.py
- Google Gemini AI integration
- POST /api/askGemini for AI responses
- Content generation and chat functionality

### gemini_router_streaming.py
- Streaming AI responses
- Real-time AI chat capabilities
- Server-sent events implementation

### post_quote_router.py
- Quote creation and management
- POST /api/quotes for adding new quotes
- Quote validation and storage

### quote_service_router.py
- Quote retrieval endpoints
- GET /api/quotes for fetching quotes
- Quote listing and search functionality

### test_langgraph_router.py
- LangGraph workflow testing
- AI workflow integration endpoints
- Complex AI chain demonstrations

## Features
- Async route handlers
- Error handling and validation
- Request/response models
- AI service integration
- Data persistence

## Purpose
Production-ready API endpoints providing core functionality for the frontend application including AI services, content management, and user interactions.
