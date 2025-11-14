import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { question } = body;
    
    if (!question || typeof question !== 'string') {
      return NextResponse.json(
        {
          answer: "Please provide a valid question.",
          status: "error"
        },
        { status: 400 }
      );
    }
    
    // In development, proxy to local Python server
    // In production, this won't be hit - Vercel routes directly to Python function
    const isDev = process.env.NODE_ENV === 'development';
    
    if (isDev) {
      try {
        // Forward to local Python FastAPI server
        const pythonResponse = await fetch('http://127.0.0.1:8000/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question }),
        });
        
        if (!pythonResponse.ok) {
          throw new Error(`Python API returned ${pythonResponse.status}`);
        }
        
        const data = await pythonResponse.json();
        return NextResponse.json(data);
        
      } catch (fetchError) {
        console.error("Error connecting to Python API:", fetchError);
        return NextResponse.json(
          {
            answer: "I'm having trouble connecting to the AI service. Make sure the Python backend is running on port 8000. Run: cd api && python index.py",
            status: "error"
          },
          { status: 503 }
        );
      }
    }
    
    // In production, this code shouldn't be reached
    // Vercel should route /api/* directly to Python functions
    return NextResponse.json(
      {
        answer: "API routing error. Check Vercel configuration.",
        status: "error"
      },
      { status: 500 }
    );
    
  } catch (error) {
    console.error("Error in chat route:", error);
    return NextResponse.json(
      {
        answer: "I'm sorry, something went wrong. Please try again.",
        status: "error"
      },
      { status: 500 }
    );
  }
}
