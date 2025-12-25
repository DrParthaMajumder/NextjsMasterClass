# Next.js Master Class

**Developer: Dr. Partha Majumder**

A comprehensive full-stack learning project featuring Next.js frontend with FastAPI backend, demonstrating modern web development patterns, AI integration, and advanced React concepts.

## 🏗️ Project Structure

```
NextjsMasterClass/
├── frontend/                 # Next.js React application
│   ├── app/
│   │   ├── (miscellaneous)/  # Various React components and examples
│   │   │   ├── DOM/         # DOM manipulation examples
│   │   │   ├── BOM/         # Browser Object Model demos
│   │   │   ├── props/       # Component props examples (Ex1, Ex2)
│   │   │   ├── LoadingUI/   # Loading state components
│   │   │   ├── CustomHooks/ # Custom React hooks
│   │   │   ├── UseUtils/    # Utility functions and hooks
│   │   │   └── Streaming/   # Server-sent events examples
│   │   ├── advanced/         # Advanced Next.js features
│   │   ├── advancedFormAction/ # Advanced form handling
│   │   ├── api/             # API route handlers
│   │   ├── basic/           # Basic Next.js examples (Ex1-Ex10)
│   │   ├── hooks/           # Custom React hooks
│   │   ├── html_learning/   # HTML learning examples
│   │   ├── reactflow/       # Interactive diagram components
│   │   ├── tailwind_learning/ # Tailwind CSS basics
│   │   ├── tailwind_practice/ # Tailwind CSS exercises
│   │   └── typescript_learning/ # TypeScript examples
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   └── public/              # Static assets
└── backend/                 # FastAPI Python backend
    ├── app/api/            # API route definitions
    ├── services/           # Business logic and integrations
    │   ├── Gemini/         # Google Gemini AI integration
    │   ├── Langraph_reactflow/ # LangGraph workflows
    │   ├── LanggrapProject/ # LangGraph project implementations
    │   ├── feedback_service.py # User feedback handling
    │   ├── quote_service.py # Quote management
    │   └── post_quote_service.py # Quote creation
    └── main.py             # FastAPI application entry point
```

## 🚀 Features

### Frontend (Next.js)
- **Modern React Patterns**: Components, hooks, props, state management
- **TypeScript Integration**: Full type safety across the application
- **Tailwind CSS**: Modern utility-first styling approach
- **Advanced Routing**: App Router with dynamic routes and layouts
- **Client/Server Components**: Next.js 13+ hybrid rendering
- **API Integration**: Seamless backend communication
- **Interactive Examples**: Hands-on learning modules

### Backend (FastAPI)
- **AI Integration**: Google Gemini API for AI-powered features
- **LangChain Integration**: Advanced AI workflow automation
- **RESTful API**: Clean, documented API endpoints
- **Async/Await**: High-performance asynchronous operations
- **Service Architecture**: Clean separation of business logic
- **CORS Support**: Full frontend-backend integration

## 📚 Learning Modules

### Basic Examples
- **Ex1**: Basic Component Structure
- **Ex2**: Multiple Components Integration
- **Ex3**: Tailwind CSS Styling
- **Ex4**: State Management
- **Ex5**: Event Handling

### Advanced Topics
- **Props Examples**: Basic and advanced prop patterns
- **Custom Hooks**: Reusable stateful logic
- **TypeScript**: Advanced type patterns and interfaces
- **API Integration**: Full-stack data flow
- **Streaming**: Server-sent events and real-time updates

### AI Integration
- **Gemini Chat**: AI-powered conversations
- **Content Generation**: Automated content creation
- **Workflow Automation**: LangGraph integration
- **Flowchart Generation**: Visual AI outputs

## 🛠️ Tech Stack

### Frontend
- **Next.js 14+**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Hooks**: Modern state management
- **React Flow**: Interactive diagram components

### Backend
- **FastAPI**: Modern Python web framework
- **Python 3.13**: Latest Python runtime
- **Google Gemini API**: AI integration
- **LangChain**: AI workflow framework
- **AsyncIO**: Asynchronous Python programming

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Python 3.13 and pip
- Google Gemini API key (for AI features)

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your API keys
```

4. Run the server:
```bash
python main.py
```

5. Visit [http://localhost:8000/docs](http://localhost:8000/docs) for API documentation

## 📖 API Endpoints

### Core Features
- **POST /api/quotes** - Quote management
- **POST /api/feedback** - User feedback collection
- **POST /api/gemini/chat** - AI chat integration
- **GET /api/stream** - Server-sent events

### AI Services
- **Gemini Integration**: Content generation and chat
- **LangGraph Workflows**: Complex AI automation
- **Streaming Responses**: Real-time AI outputs

## 🎯 Key Concepts Demonstrated

### React Patterns
- Component composition and reusability
- Props drilling and state lifting
- Custom hooks for shared logic
- Client vs Server Components
- Error boundaries and error handling

### Next.js Features
- App Router and nested layouts
- Dynamic routing and route handlers
- Server actions and mutations
- Metadata and SEO optimization
- Image optimization and performance

### TypeScript Integration
- Interface definitions and type safety
- Generic components and utilities
- API response typing
- Props validation and documentation

### Full-Stack Architecture
- Frontend-backend communication
- API design best practices
- Error handling and validation
- Authentication and authorization patterns

## 🔧 Development

### Code Quality
- ESLint for JavaScript/TypeScript linting
- Prettier for code formatting
- TypeScript strict mode enabled
- Component documentation with JSDoc

### Performance
- Next.js automatic optimizations
- Image lazy loading and optimization
- Bundle size monitoring
- Server-side rendering where appropriate

## 📚 Learning Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [FastAPI Documentation](https://fastapi.tiangolo.com)

### AI Integration
- [Google Gemini API](https://ai.google.dev/)
- [LangChain Documentation](https://python.langchain.com/)
- [LangGraph Guide](https://langchain-ai.github.io/langgraph/)

## 🤝 Contributing

This is a learning project designed to demonstrate modern web development practices. Feel free to:
- Explore the code examples
- Modify and experiment with components
- Add new learning modules
- Improve existing implementations

## 📄 License

This project is for educational purposes. Feel free to use and modify for learning and development.

## 🎓 Purpose

The Next.js Master Class project serves as a comprehensive learning resource for:
- Modern React development with Next.js
- Full-stack TypeScript applications
- AI integration in web applications
- Best practices and design patterns
- Real-world project structure and organization

Each module is designed to build upon previous concepts, providing a complete learning journey from basic components to advanced AI-powered applications.
