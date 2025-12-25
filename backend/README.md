# Backend API Server

FastAPI backend server for the Next.js Master Class application with AI integration capabilities.

## Features

### AI Integration
- Google Gemini API integration
- LangChain integration for advanced AI workflows
- Streaming responses support

### API Endpoints
- Quote management system
- Feedback collection
- AI chat and content generation
- Flowchart generation

### Architecture
- Clean service layer architecture
- Async/await patterns
- Environment configuration
- CORS support for frontend integration

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your API keys
```

3. Run the server:
```bash
python main.py
```

## API Documentation
Once running, visit `http://localhost:8000/docs` for interactive API documentation.

## Services
- **Gemini**: AI chat and content generation
- **Quotes**: Quote management system
- **Feedback**: User feedback collection
- **LangGraph**: Advanced AI workflow integration

## Purpose
Backend API server providing AI-powered features and data management for the Next.js frontend application.
