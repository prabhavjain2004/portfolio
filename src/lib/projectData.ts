import React from "react";

export interface Project {
  id: string;
  title: string;
  year: string;
  tagline: string;
  problem: string;
  approach: string;
  outcome: string;
  tech: string[];
  metrics: string[];
  hasArchitecture?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "j-tap",
    title: "AI Training & Placement",
    year: "2026",
    tagline: "Institution-grade multi-agent platform for 8,000+ concurrent users",
    problem: "Jain University needed a unified platform to manage training, placement prep, and academic performance for thousands of students — with no existing automation for syllabus tracking, learning paths, or risk detection.",
    approach: "Designed and built the full AI agent layer using LangGraph with 8 specialized agents operating under a Natural Language Query Router. Built evaluation workflows using LLM-as-Judge scoring and integrated Langfuse for end-to-end observability. Contributed ~50% of the NestJS backend alongside full ownership of the agent layer.",
    outcome: "Platform handles 8,000+ concurrent users. Risk Detection System triggers alerts within 5 minutes of threshold breach with full audit logging. All agents instrumented with task success rate tracking.",
    tech: ["LangGraph", "NestJS", "PostgreSQL", "Redis", "BullMQ", "Langfuse", "LLM-as-Judge", "OpenAI API"],
    metrics: [
      "8,000+ concurrent users",
      "8 specialized agents",
      "<5 min alert latency on risk threshold breach",
      "Full audit logging on all agent actions"
    ],
    hasArchitecture: true
  },
  {
    id: "limp",
    title: "Land Data Intelligence",
    year: "2026",
    tagline: "Automation pipelines for real-time legal-tech workflows",
    problem: "Legal-tech client needed automated document parsing, notification dispatch, and real-time event handling across a complex land data management platform — all previously done manually.",
    approach: "Built Python automation pipelines for notification dispatch, data fetching, and document parsing. Designed webhook-triggered workflows for real-time event handling across all platform modules using Django, Celery, and AWS S3.",
    outcome: "Replaced manual workflows with automated pipelines. Real-time event handling via webhooks reduced processing delays significantly.",
    tech: ["Python", "Django", "PostgreSQL", "Redis", "Celery", "AWS S3", "Webhooks"],
    metrics: [
      "Full automation of document parsing pipeline",
      "Webhook-triggered real-time event handling",
      "Built for Abhivruddhi Ventures"
    ]
  },
  {
    id: "tapnex",
    title: "TapNex — Event Tech Platform",
    year: "2025",
    tagline: "Full event-ops product deployed across live environments",
    problem: "Live events needed a unified system for ticketing, access control, stall management, volunteer coordination, and automated meal/gaming systems — no off-the-shelf product covered all of it.",
    approach: "Designed and shipped 4 platforms as sole engineer: ticketing, registration, hostel meals, and gaming café. Integrated Razorpay and Cashfree payment gateways. Built on Flutter (mobile), NestJS (backend), and Supabase PostgreSQL.",
    outcome: "70% reduction in manual processing overhead. All 4 platforms deployed in live event environments with real users.",
    tech: ["Flutter", "NestJS", "Supabase", "PostgreSQL", "React", "Razorpay", "Cashfree"],
    metrics: [
      "70% reduction in manual overhead",
      "4 live platforms shipped",
      "Sole engineer across frontend, backend, and deployment"
    ]
  },
  {
    id: "research-agent",
    title: "Autonomous Research Agent",
    year: "2025",
    tagline: "Hierarchical multi-agent system with FSM-based state management",
    problem: "Standard single-agent research loops lack reliability — they lose state on failure, can't coordinate parallel subtasks, and produce unstructured output. Needed a system that was observable and recoverable.",
    approach: "Built a supervisor agent that coordinates specialized worker agents via FSM (Finite State Machine) state transitions and interrupt handling. Workers use ReAct reasoning loops with dynamic tool calling to do multi-step retrieval. System is designed for observability — every state transition is logged.",
    outcome: "Hierarchical architecture enables reliable multi-step research with structured output. Interrupt handling allows graceful recovery without restarting the full pipeline.",
    tech: ["LangGraph", "ReAct", "FSM", "RAG", "pgvector", "Python", "FastAPI"],
    metrics: [
      "FSM-based state transitions with full logging",
      "Interrupt handling for graceful failure recovery",
      "Multi-step retrieval with dynamic tool calling"
    ],
    hasArchitecture: true
  },
  {
    id: "ai-interviewer",
    title: "AI Interviewer System",
    year: "2025",
    tagline: "Stateful LangGraph workflow with session memory and structured evaluation",
    problem: "Most AI interview tools are stateless — they can't maintain context across a full interview session or generate meaningful evaluation reports tied to the candidate's actual resume and the job description.",
    approach: "Built a stateful LangGraph workflow where the agent pauses for user input at each turn, evaluates responses in the context of the full conversation history, and generates a structured report at the end. Resume and JD are uploaded at session start and used throughout.",
    outcome: "Full session memory across multi-turn interviews. End report includes scores, gap analysis, and improvement suggestions — all grounded in the uploaded resume and JD.",
    tech: ["LangGraph", "Session Memory", "OpenAI API", "Python", "FastAPI"],
    metrics: [
      "Full session memory across multi-turn interview",
      "Resume + JD grounded evaluation",
      "Structured report: scores + gap analysis + suggestions"
    ],
    hasArchitecture: true
  }
];
