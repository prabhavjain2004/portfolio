import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Simply forward the request to the Python API
    // In production: Vercel routes /api/chat to the Python serverless function
    // In development: next.config.ts proxies to localhost:8000
    return NextResponse.json(body);
    
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
