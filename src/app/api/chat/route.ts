import { NextRequest, NextResponse } from "next/server";
import { getMockResponse } from "@/lib/mock-responses";

export async function POST(request: NextRequest) {
  let body: { question?: unknown };

  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json(
      {
        answer: "I couldn't read your question. Please try again.",
        status: "error",
        error: "invalid_json"
      },
      { status: 400 }
    );
  }

  const question = typeof body.question === "string" ? body.question.trim() : "";

  if (!question) {
    return NextResponse.json(
      {
        answer: "Please ask a question so I can help you.",
        status: "error",
        error: "missing_question"
      },
      { status: 400 }
    );
  }

  try {
    const answer = getMockResponse(question);

    return NextResponse.json({
      answer,
      status: "success",
      mode: "mock"
    });
  } catch (error) {
    console.error("Mock chat route failed", error);
    return NextResponse.json(
      {
        answer: "I'm sorry, I'm having trouble connecting to the AI service right now. Please try again later or check out the traditional portfolio page.",
        status: "error",
        error: "route_failure"
      },
      { status: 500 }
    );
  }
}
