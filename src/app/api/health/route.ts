import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "healthy",
    message: "Prabhav's portfolio mock API is running",
    rag_enabled: false
  });
}
