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
  evaluation?: string;
  observability?: string;
  alertCallout?: string;
  hasArchitecture?: boolean;
  github?: string;
  live?: string;
}

export const projectsData: Project[] = [
  {
    id: "ai-training-placement",
    title: "AI Training and Placement",
    year: "2026",
    tagline: "8 specialized agents · 8,000+ users · <5m alert breach",
    problem: "University training and placement cells operate on fragmented systems — attendance tracked on spreadsheets, assessments on generic platforms with no institutional context, and at-risk students identified too late for intervention. The platform required an institution-grade AI agent layer to unify syllabus progression, personalized practice, resume analysis, and real-time student risk monitoring for 8,000+ concurrent users.",
    approach: "I designed and built the full AI agent layer comprising 8 specialized agents: Syllabus Parser, Learning Path Generator, Resume Analyzer, Risk Detection System, AI Practice Assistant, Content Curation, Interview Prep, and a Natural Language Query Router that dispatches requests to 3+ downstream agents based on intent. Alongside full ownership of the agent layer, I contributed ~50% of the NestJS backend, engineering PostgreSQL schemas, Redis caching, and BullMQ job queue pipelines powering background agent tasks.",
    evaluation: "Built evaluation workflows across the agent layer using LLM-as-Judge scoring and task success metrics, making agent behavior measurable rather than relying on subjective outputs.",
    observability: "Instrumented agent execution with Langfuse for end-to-end observability and full audit logging. Implemented guardrails, retry logic, timeout handling, and failure recovery to keep agents stable under production load.",
    alertCallout: "Risk Detection System triggers alerts within 5 minutes of threshold breach with full audit logging.",
    outcome: "Deployed to serve 8,000+ concurrent users with an API p95 target under 300ms and agent response p95 under 4s. The Risk Detection System proactively alerts trainers within 5 minutes of a student breaching an attendance or assessment threshold, and the NL Query Router accurately orchestrates across the 8-agent surface.",
    tech: ["LangGraph", "NestJS", "PostgreSQL", "Redis", "BullMQ", "Langfuse", "Gemini API", "TypeScript"],
    metrics: [
      "8,000+ concurrent users",
      "8 specialized agents orchestrated via NL Query Router",
      "Risk alerts triggered within 5 minutes of threshold breach",
      "Evaluation workflows across agents with LLM-as-Judge scoring",
      "Task success rate tracking & full audit logging",
      "End-to-end Langfuse observability",
      "~50% NestJS backend contribution (PostgreSQL, Redis, BullMQ)"
    ],
    hasArchitecture: true
  },
  {
    id: "tapnex",
    title: "TapNex",
    year: "2025",
    tagline: "Four production platforms shipped as sole engineer · 70% manual reduction",
    problem: "Live campus events spanning ticketing, hostel meal allocation, gaming café reservations, and on-site registration suffered from disconnected manual operations, causing queue buildup, meal count drift, and double-booked facilities.",
    approach: "Designed and shipped 4 production platforms (ticketing, registration, hostel meals, and gaming café) as the sole engineer. Led product scoping, frontend implementation, backend services, database design, and deployment. Integrated Razorpay and Cashfree payment gateways for complete payment processing.",
    outcome: "The 4 platforms collectively reduced manual processing overhead by 70%. Successfully eliminated check-in queues through QR entry validation with real-time deduplication and delivered live tracking dashboards for event organizers.",
    tech: ["React", "Node.js", "NestJS", "PostgreSQL", "Supabase", "Razorpay", "Cashfree"],
    metrics: [
      "4 production platforms shipped as sole engineer",
      "70% reduction in manual processing overhead",
      "Dual payment integration: Razorpay + Cashfree",
      "Sole engineering across scoping, frontend, backend & deployment"
    ]
  },
  {
    id: "limp",
    title: "Land Data Intelligence Platform",
    year: "2026",
    tagline: "Python automation pipelines and webhook-triggered workflows for real-time event handling.",
    problem: "Large-scale land documentation and compliance workflows involve continuous document uploads, hearing deadlines, and status updates that require reliable automated pipelines across platform modules without manual coordination delay.",
    approach: "Built Python automation pipelines for notification dispatch, data fetching, and legal/revenue document parsing. Designed webhook-triggered workflows for real-time event handling across platform modules, ensuring reliable data synchronization and delivery status logging.",
    outcome: "Automated notification dispatch and document processing workflows eliminated manual data entry, enabling instant event propagation across platform modules with full delivery tracking.",
    tech: ["Python", "Django", "PostgreSQL", "Redis", "Celery", "REST APIs", "Webhooks"],
    metrics: [
      "Python automation pipelines for notification dispatch & data fetching",
      "Webhook-triggered workflows for real-time event handling",
      "Automated document parsing pipelines for structured data extraction"
    ]
  },
  {
    id: "research-agent",
    title: "Autonomous Research Execution Agent",
    year: "2025",
    tagline: "Supervisor agent coordinating specialized workers via state-machine transitions and ReAct loops.",
    problem: "Single-prompt LLM research workflows produce unchecked outputs and lack structured coordination for multi-step information gathering. Building an autonomous research system requires orchestrating specialized roles, managing state transitions, and handling interrupts during long runs.",
    approach: "Designed a hierarchical multi-agent system where a Supervisor Agent coordinates specialized worker agents through state-machine transitions and interrupt handling. Specialized workers execute ReAct reasoning loops with dynamic tool calling for multi-step retrieval and structured output generation.",
    evaluation: "Implemented context-aware evaluation and reflection steps across worker agents to verify research consistency before producing final structured reports.",
    outcome: "Demonstrated controlled task delegation between supervisor and specialized workers with state-machine stability. Dynamic tool calling and ReAct loops reliably execute multi-step retrieval and produce structured synthesis without losing conversational state.",
    tech: ["LangGraph", "FastAPI", "Python", "WebSockets", "RAG Pipelines", "Tool Calling"],
    metrics: [
      "Supervisor agent coordinating specialized workers",
      "State-machine transitions & interrupt handling",
      "ReAct reasoning loops with dynamic tool calling",
      "Multi-step retrieval with structured output generation"
    ],
    hasArchitecture: true,
    github: "https://github.com/prabhavjain2004/Autonomous-Research-Execution-Agent"
  },
  {
    id: "ai-interviewer",
    title: "AI Interviewer System",
    year: "2025",
    tagline: "Stateful LangGraph workflow with session memory and context-aware candidate evaluation.",
    problem: "Standard interview preparation tools ask generic questions without grounding candidate answers against their specific resume claims, missing articulation gaps between what resumes claim and what candidates can explain under pressure.",
    approach: "Built a stateful LangGraph workflow with session memory and interrupt handling where the agent pauses for user input, evaluates candidate responses in context, and resumes with full conversational continuity. Dynamically generates role-specific questions from uploaded resume and JD context.",
    evaluation: "Evaluates candidate responses in real-time context and generates structured reports with scores, gap analysis, and targeted improvement suggestions.",
    outcome: "Delivers conversational continuity across interview phases with resume and JD entity grounding. Generates actionable feedback reports highlighting articulation gaps and strengths.",
    tech: ["LangGraph", "FastAPI", "Python", "Redis", "ChromaDB", "WebSockets", "asyncio"],
    metrics: [
      "Stateful LangGraph workflow with session memory",
      "Interrupt handling: agent pauses for user response & resumes",
      "Dynamic question generation grounded in resume & JD context",
      "Structured reports with scores, gap analysis & improvement recommendations"
    ],
    hasArchitecture: true,
    github: "https://github.com/prabhavjain2004/ai-interviewer"
  },
  {
    id: "cdas",
    title: "CDAS.ai",
    year: "2026",
    tagline: "Autonomous 5-stage cleaning, dynamic schema-aware prompt injection, and secure code-execution sandbox for conversational BI.",
    problem: "Retrieval-Augmented Generation (RAG) is fundamentally designed for unstructured text, making it highly unreliable and mathematically inaccurate when applied to structured, multi-file tabular data. Traditional conversational BI systems suffer from severe LLM hallucinations during arithmetic calculations, struggle with dynamic schema matching, and are bloated by heavy orchestration frameworks that add latency, introduce dependency risks, and strip away granular control over prompt construction and JSON parsing.",
    approach: "I designed and built CDAS.ai from the ground up to guarantee 100% mathematical accuracy and secure deterministic execution. I bypassed unstructured RAG entirely in favor of Schema-Aware Prompt Injection—automatically profiling uploaded CSV files (data types, statistical distributions, null ratios, and sample rows) to inject a compact, highly structured context directly into the LLM. Rather than relying on the LLM to perform calculations, the agent is restricted to acting purely as a code author, generating strict Pandas/Plotly code executed within a hardened Python namespace execution sandbox. I integrated directly with the native Google GenAI SDK (Gemini 3.0 Flash), providing precise control over JSON formatting, schema validation, and recovery. To support multi-table queries, I built a hybrid Semantic Relationship Detector combining an LLM schema proposal layer with programmatic validation via Jaccard index overlap checks. For stateful memory, I engineered a highly optimized sliding-window memory system using collections.deque to preserve the last 5 conversation turns in-memory, keeping latency and token costs strictly bounded.",
    outcome: "CDAS.ai delivers bulletproof mathematical accuracy by executing code rather than hallucinating numerical answers. The 5-stage non-destructive data cleaning pipeline automatically sanitizes raw user datasets, while the hybrid Semantic Relationship Detector dynamically discovers joins without hardcoded databases. The system achieves exceptionally low latency by utilizing direct GenAI SDK calls and an optimized sliding-window memory buffer, keeping conversational BI responsive, safe, and enterprise-ready.",
    tech: ["Next.js", "FastAPI", "Pandas", "Plotly Express", "Gemini 3.0 Flash", "Docker", "Python", "TypeScript"],
    metrics: [
      "Autonomous 5-stage cleaning pipeline (datetime inference, median/mode imputation, IQR outlier flags, normalizations)",
      "Hybrid Semantic Join Detector: LLM schema proposal + Jaccard index data overlap validation",
      "100% mathematical accuracy: restrictive Python code generation vs. direct LLM calculation",
      "Secure Sandbox: restricted Python execution namespace preventing data or server compromise",
      "Bounded collections.deque Memory: 5-turn sliding window for ultra-low latency & token efficiency",
      "Schema-Aware Prompt Injection: profiling tabular structures directly into context instead of fragile RAG",
      "Direct Google GenAI SDK integration: minimal dependency weight, custom JSON parsing, and rapid error recovery"
    ],
    hasArchitecture: true,
    github: "https://github.com/prabhavjain2004/Conversational-Data-Analysis-System"
  }
];

