"""
Simple development server to run the FastAPI backend locally
Run with: python app.py
"""

import uvicorn
from api.index import app

if __name__ == "__main__":
    print("Starting FastAPI development server...")
    print("API will be available at: http://127.0.0.1:8000")
    print("Health check: http://127.0.0.1:8000/health")
    print("Chat endpoint: http://127.0.0.1:8000/chat")
    print("\nPress Ctrl+C to stop the server")
    
    uvicorn.run(
        app,
        host="127.0.0.1",
        port=8000,
        reload=True,
        log_level="info"
    )