const baseFallback = (question: string) => `Thanks for asking about "${question}"!

I can help you explore Prabhav's:
• Projects (like Tapnex)
• Skills (frontend, backend, AI/ML)
• Experience (Cognito Club, event tech)
• Tech stack and expertise

Try asking about specific topics, or check out the traditional portfolio page for a complete overview!

(Note: The detailed AI responses will return once the full RAG setup is available.)`;

export function getMockResponse(question: string): string {
  const qLower = question.toLowerCase();

  if (qLower.includes("tapnex")) {
    return `Tapnex is an innovative event technology platform founded by Prabhav Jain. It's powered by Nexgen FC and delivers:

• Volunteer Management with real-time coordination
• Cashless Access Control for smooth entry and payments
• Vendor Settlement automation to reconcile payouts
• Event Coordination dashboards for organizers

The goal is to streamline large-scale events while creating a great experience for organizers, volunteers, and attendees.`;
  }

  if (qLower.includes("rag") || qLower.includes("retrieval")) {
    return `Prabhav builds Retrieval-Augmented Generation (RAG) systems end to end. This portfolio assistant uses:

• LangChain for orchestration
• FAISS for similarity search
• Groq for ultra-fast LLM inference
• HuggingFace embeddings for document prep

RAG lets the assistant pull context from curated knowledge before answering, so responses stay accurate and grounded.`;
  }

  if (qLower.includes("backend") || qLower.includes("fastapi")) {
    return `Backend engineering is a core strength for Prabhav. He ships production-ready services with:

• FastAPI and Python
• Node.js with Express
• Django for full-featured apps
• PostgreSQL and Supabase for data

This portfolio's backend is modeled with FastAPI principles—clean routing, validation, and graceful fallbacks.`;
  }

  if (
    qLower.includes("ai") ||
    qLower.includes("ml") ||
    qLower.includes("artificial intelligence")
  ) {
    return `AI and ML projects are where Prabhav spends most of his time:

• LangChain for rapid AI prototyping
• Groq & Gemini APIs for LLM-powered products
• Vector databases like FAISS and pgvector
• Retrieval-Augmented Generation workflows
• Prompt engineering and evaluation

He focuses on shipping AI that feels practical—tools people can actually use.`;
  }

  if (
    qLower.includes("skill") ||
    qLower.includes("technology") ||
    qLower.includes("tech stack")
  ) {
    return `Here's the quick rundown of Prabhav's stack:

Frontend: React, Next.js, TypeScript, Tailwind, shadcn/ui, Framer Motion
Backend: Python, FastAPI, Node.js, Django, Express.js
AI/ML: LangChain, RAG, Groq API, Gemini API, vector databases
Databases: PostgreSQL, Supabase, MongoDB
Tools: Git, Docker, Vercel, VS Code

He's a B.Tech CSE student at Jain University, graduating in April 2027.`;
  }

  if (qLower.includes("project")) {
    return `A few highlight projects from Prabhav's portfolio:

1. Tapnex – Event tech platform with volunteer management, cashless control, and vendor settlement
2. AI Frontend Code Generator – Uses Groq to turn natural language into React + Tailwind components
3. Swadeshi Prompt Builder – A freemium product that helps craft high-quality prompts via Gemini API
4. This AI Portfolio – Combines Next.js and a RAG backend to deliver interactive answers

The traditional portfolio page has case studies and links.`;
  }

  if (
    qLower.includes("contact") ||
    qLower.includes("reach") ||
    qLower.includes("email")
  ) {
    return `You can get in touch with Prabhav through:

• Email – listed on the traditional portfolio page
• LinkedIn – connect for professional updates
• GitHub – explore repositories and contributions
• Twitter – follow along for tech discussions

The traditional portfolio consolidates every channel.`;
  }

  if (qLower.includes("cognito")) {
    return `Prabhav leads The Cognito Club, where he:

• Guides the executive board
• Plans and executes events
• Mentors members on tech initiatives
• Keeps the club focused on innovation and impact

It highlights his ability to blend leadership with hands-on technology work.`;
  }

  return baseFallback(question);
}
