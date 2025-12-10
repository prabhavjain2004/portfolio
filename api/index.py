"""
FastAPI Application for Prabhav's AI Portfolio
Serves the RAG model on Vercel
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os

# Try to import RAG logic, fall back to mock if dependencies not installed
try:
    from rag_logic import process_query, get_rag_chain
    USE_RAG = True
except ImportError:
    USE_RAG = False
    print("WARNING: RAG dependencies not installed. Using mock responses.")

# Initialize FastAPI app
app = FastAPI(
    title="Prabhav Jain's AI Portfolio API",
    description="RAG-powered portfolio assistant",
    version="1.0.0"
)

# Configure CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model for query validation
class Query(BaseModel):
    question: str

# Mock responses when RAG is not available
def mock_process_query(question: str) -> str:
    """Mock responses for testing without full RAG setup"""
    q_lower = question.lower()
    
    if "tapnex" in q_lower:
        return """Tapnex is an innovative event technology platform founded by Prabhav Jain. It's powered by Nexgen FC and provides comprehensive event management solutions including:
        
• Volunteer Management - Efficient coordination and task assignment
• Cashless Access Control - Secure entry and payment systems
• Vendor Settlement - Automated payment reconciliation
• Event Coordination - Real-time updates and communication

The platform streamlines event operations and improves the experience for organizers, volunteers, and attendees."""
    
    elif "rag" in q_lower or "retrieval" in q_lower:
        return """Prabhav has expertise in RAG (Retrieval-Augmented Generation) systems! He's built this very portfolio using:

• LangChain for orchestration
• FAISS for vector similarity search
• Groq API for fast LLM inference
• HuggingFace embeddings for document processing

RAG allows AI systems to retrieve relevant information from a knowledge base before generating responses, making answers more accurate and contextual."""
    
    elif "backend" in q_lower or "fastapi" in q_lower:
        return """Prabhav is skilled in backend development, particularly with:

• FastAPI - Modern Python web framework
• Node.js & Express - JavaScript backend
• Django - Full-featured Python framework
• PostgreSQL & Supabase - Database management

He's built this portfolio's backend using FastAPI, demonstrating his ability to create production-ready APIs with proper CORS, validation, and error handling."""
    
    elif "ai" in q_lower or "ml" in q_lower or "artificial intelligence" in q_lower:
        return """Prabhav specializes in AI and Machine Learning technologies:

• LangChain for AI application development
• RAG (Retrieval-Augmented Generation) systems
• Groq & Gemini APIs for LLM integration
• Vector Databases (FAISS, pgvector)
• Prompt Engineering
• Building production AI applications

He combines his full-stack development skills with cutting-edge AI to create innovative solutions."""
    
    elif "skill" in q_lower or "technology" in q_lower or "tech stack" in q_lower:
        return """Prabhav's technical skills span the full stack:

**Frontend:** React, Next.js, TypeScript, Tailwind CSS, Shadcn/ui, Framer Motion

**Backend:** Python, FastAPI, Node.js, Django, Express.js

**AI/ML:** LangChain, RAG, Groq API, Gemini API, Vector Databases

**Databases:** PostgreSQL, Supabase, MongoDB

**Tools:** Git, Docker, Vercel, VS Code

He's a B.Tech CSE student at Jain University, graduating in April 2027."""
    
    elif "project" in q_lower:
        return """Prabhav has worked on several innovative projects:

1. **Tapnex** - Event technology platform with volunteer management, cashless systems, and vendor settlement

2. **AI-Powered Frontend Code Generator** - Uses Groq API to generate React/Tailwind code from natural language prompts

3. **Swadeshi Prompt Builder** - Helps users craft better AI prompts with a freemium model using Gemini API

4. **This AI Portfolio** - RAG-powered portfolio with Next.js and FastAPI

Check out the traditional portfolio page for more details!"""
    
    elif "contact" in q_lower or "reach" in q_lower or "email" in q_lower:
        return """You can reach Prabhav through:

• Email: Check the traditional portfolio page
• LinkedIn: Available on the traditional portfolio
• GitHub: Find his projects and code
• Twitter: Connect for tech discussions

Or explore the traditional portfolio page for all contact options!"""
    
    elif "cognito" in q_lower:
        return """Prabhav is the Lead of The Cognito Club, where he:

• Manages the executive board
• Coordinates club activities
• Organizes technology-focused events
• Leads a team passionate about innovation and tech

This leadership role demonstrates his ability to manage teams and drive technical initiatives."""
    
    else:
        return f"""Thanks for asking about "{question}"! 

I can help you learn about Prabhav's:
• Projects (like Tapnex)
• Skills (frontend, backend, AI/ML)
• Experience (Cognito Club, event tech)
• Tech stack and expertise

Try asking about specific topics, or check out the traditional portfolio page for a complete overview!

(Note: The RAG system will provide more detailed answers once dependencies are fully installed.)"""

# Shared helpers so we can expose both `/api/*` and bare paths
def _health_payload() -> dict:
    return {
        "status": "healthy",
        "message": "Prabhav's AI Portfolio API is running",
        "rag_enabled": USE_RAG
    }


def _chat_payload(question: str) -> dict:
    try:
        print(f"\n=== Processing chat request ===")
        print(f"Question: {question}")
        print(f"USE_RAG: {USE_RAG}")
        
        if not question or question.strip() == "":
            return {
                "answer": "Please provide a valid question.",
                "status": "error"
            }
        
        if USE_RAG:
            try:
                print("Using RAG system...")
                answer = process_query(question)
                print(f"RAG answer: {answer}")
            except Exception as rag_error:
                # Log and fall back when RAG wiring is incomplete in prod
                import traceback
                print(f"RAG error: {rag_error}")
                print(traceback.format_exc())
                print("Falling back to mock responses...")
                answer = mock_process_query(question)
        else:
            print("Using mock responses...")
            answer = mock_process_query(question)

        if not answer or answer.strip() == "":
            print("WARNING: Empty answer generated")
            answer = "I apologize, but I couldn't generate a proper answer. Could you try rephrasing your question?"

        print(f"Final answer: {answer[:100]}...")
        return {
            "answer": answer,
            "status": "success",
            "mode": "rag" if USE_RAG else "mock"
        }
    except Exception as e:
        import traceback
        print(f"ERROR in _chat_payload: {e}")
        print(traceback.format_exc())
        return {
            "answer": "I apologize, but I'm having trouble processing your question right now. Please try again or check out the traditional portfolio page.",
            "status": "error",
            "error": str(e)
        }


def _warmup_payload() -> dict:
    """Warmup the RAG system by initializing it"""
    try:
        if USE_RAG:
            print("Warming up RAG system...")
            chain = get_rag_chain()
            if chain:
                print("RAG system warmed up successfully!")
                return {
                    "status": "success",
                    "message": "RAG system is ready",
                    "warmed_up": True
                }
            else:
                return {
                    "status": "error", 
                    "message": "Failed to initialize RAG system",
                    "warmed_up": False
                }
        else:
            return {
                "status": "success",
                "message": "Using mock responses (RAG not available)",
                "warmed_up": True
            }
    except Exception as e:
        print(f"Warmup error: {e}")
        return {
            "status": "error",
            "message": f"Warmup failed: {str(e)}",
            "warmed_up": False
        }

def _root_payload() -> dict:
    return {
        "message": "Welcome to Prabhav Jain's AI Portfolio API",
        "endpoints": {
            "/api/health": "Health check",
            "/api/chat": "Chat with AI assistant (POST)",
            "/api/warmup": "Warmup RAG system (GET)",
            "/health": "Health check (no prefix)",
            "/chat": "Chat with AI assistant (POST, no prefix)",
            "/warmup": "Warmup RAG system (GET, no prefix)"
        },
        "rag_enabled": USE_RAG
    }


# Health check endpoints
@app.get("/api/health")
async def health_check_prefixed():
    """Check if the API is running (legacy /api prefix)"""
    return _health_payload()


@app.get("/health")
async def health_check():
    """Check if the API is running (Vercel function root path)"""
    return _health_payload()


# Main chat endpoints
@app.post("/api/chat")
async def chat_prefixed(query: Query):
    """Support legacy /api/chat path"""
    return _chat_payload(query.question)


@app.post("/chat")
async def chat(query: Query):
    """Primary chat endpoint for Vercel function root path"""
    return _chat_payload(query.question)


# Root endpoints for Vercel and local usage
@app.get("/api")
async def root_prefixed():
    """Root endpoint with /api prefix"""
    return _root_payload()


@app.get("/")
async def root():
    """Root endpoint at function base path"""
    return _root_payload()

# Warmup endpoints
@app.get("/api/warmup")
async def warmup_prefixed():
    """Warmup RAG system (legacy /api prefix)"""
    return _warmup_payload()

@app.get("/warmup")
async def warmup():
    """Warmup RAG system (no prefix)"""
    return _warmup_payload()

# Vercel serverless function handler
handler = app