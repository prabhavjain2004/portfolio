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
    id: "ai-training-placement",
    title: "AI Training and Placement",
    year: "2026",
    tagline: "AI agent layer powering placement readiness for 8,000+ university students — risk alerts in under 5 minutes.",
    problem: "University training & placement cells operate on fragmented tooling — attendance tracked on spreadsheets, assessments on generic platforms with no institutional context, and at-risk students identified only after irreversible damage to their placement readiness. No single system ties syllabus progress, assessment performance, and individual risk signals into one real-time view. AI Training and Placement was built to close that gap for a university with 8,000+ concurrent users.",
    approach: "I designed and built the entire AI agent layer — 8 LangGraph agents orchestrated through a Natural Language Query Router that classifies student intent and dispatches to the appropriate specialist agent. I implemented an LLM-as-Judge evaluation loop using Gemini API to score agent output quality before it reaches the student, and integrated Langfuse for full observability across every agent call, trace, and latency event. I also built approximately 50% of the NestJS backend, including the BullMQ job queue pipelines powering background agent execution and the Risk Detection System, which monitors student performance thresholds continuously and fires trainer alerts within 5 minutes of a breach. This was a collaborative university project — I owned the full AI layer and a substantial portion of the backend infrastructure.",
    outcome: "The platform supports 8,000 concurrent users with a sub-300ms API p95 target and sub-4s agent response p95. The Risk Detection System fires proactive alerts within 5 minutes of a student breaching an attendance or assessment threshold. The NL Query Router correctly dispatches to the appropriate agent across the 8-agent surface, with LLM-as-Judge acting as a quality gate on every AI-generated student-facing response.",
    tech: ["LangGraph", "NestJS", "PostgreSQL", "Redis", "BullMQ", "Langfuse", "Gemini API", "TypeScript"],
    metrics: [
      "8,000+ concurrent users",
      "Risk Detection System: alerts within 5 minutes of threshold breach",
      "8 specialized LangGraph agents",
      "LLM-as-Judge quality gate on every agent output",
      "API p95 target: < 300ms | Agent response p95: < 4s",
      "Full distributed tracing via Langfuse"
    ],
    hasArchitecture: true
  },
  {
    id: "limp",
    title: "Land Data Intelligence Platform",
    year: "2026",
    tagline: "Python automation pipelines and webhook-driven real-time workflows for a mission-critical land operations platform.",
    problem: "Large-scale land acquisition operations generate a continuous stream of legal documents, government workflow updates, and field status changes that need to reach the right stakeholders instantly. Manual coordination between advocates, revenue officers, and field surveyors created information lag and legal compliance risk — a missed hearing deadline or late document upload can have serious consequences. The platform needed automated pipelines that react to operational events without human intervention.",
    approach: "I built the Python automation layer — specifically the Celery-backed pipelines responsible for notification dispatch (WhatsApp + SMS triggers for task assignments, hearing compliance deadlines, and overdue escalations with a 3-attempt retry at 15-minute intervals), document parsing workflows that extract and classify structured data from uploaded legal and revenue documents, and external data fetching routines that keep operational state synchronized. I built the webhook-triggered real-time workflows that fire on field events — document uploads, task overdue events, and compliance deadline breaches all propagate automatically. Event streams are routed through Kafka for ordered, replayable processing, with Cassandra absorbing the high-volume audit log — an append-only, non-deletable record required for legal compliance. This was a client engagement; I was a key contributor to the backend automation and pipeline layer.",
    outcome: "Notification dispatch fires automatically within 2 minutes of a trigger event. Document parsing pipelines eliminated manual data entry for the most frequent legal and revenue document types. The Kafka + Cassandra audit pipeline provides a durable, replayable event record across all operational activity — compliant with the no-hard-delete requirement enforced across the platform.",
    tech: ["Python", "Django", "PostgreSQL", "Redis", "Celery", "AWS S3", "Kafka", "Cassandra"],
    metrics: [
      "Notification dispatch within 2 minutes of trigger event",
      "3-attempt retry with 15-minute intervals and delivery status logging",
      "Kafka-backed event streams: ordered, replayable, zero data loss",
      "Cassandra audit log: append-only, high-volume durability",
      "Webhook-triggered workflows: zero manual intervention required",
      "8 role types with row-level access enforcement at API layer"
    ]
  },
  {
    id: "tapnex",
    title: "TapNex",
    year: "2025",
    tagline: "Four event tech platforms. One engineer. Zero manual bottlenecks.",
    problem: "Large-scale college events spanning ticketing, hostel meal allocation, gaming café access, and on-site registration are typically managed through disconnected manual systems. Check-in queues form, meal counts drift, gaming café slots get double-booked, and event staff spend the entire day firefighting coordination failures rather than running the event.",
    approach: "I designed and built all four platforms end-to-end as the sole engineer: a QR-based ticketing platform with entry validation, an on-site registration system, a hostel meal allocation tracker with real-time counts, and a gaming café slot booking system. I integrated both Razorpay and Cashfree for payment processing — covering the full payment lifecycle from checkout initiation to webhook-confirmed settlement. The entire stack runs on NestJS + Supabase with Flutter frontends, built and deployed by me independently.",
    outcome: "The four platforms collectively reduced manual event overhead by 70% compared to the prior manual process. Both Razorpay and Cashfree payment gateways processed successfully. QR-based entry eliminated queue buildup at check-in points, and real-time tracking dashboards gave event staff live operational visibility for the first time.",
    tech: ["Flutter", "NestJS", "Supabase", "PostgreSQL", "Razorpay", "Cashfree"],
    metrics: [
      "70% reduction in manual event overhead",
      "4 live platforms built as sole engineer",
      "Dual payment gateway integration (Razorpay + Cashfree)",
      "QR-based entry validation with real-time deduplication",
      "Live meal and slot tracking dashboards"
    ]
  },
  {
    id: "research-agent",
    title: "Autonomous Research Execution Agent",
    year: "2025",
    tagline: "A self-evaluating research system that replans before it hallucinates.",
    problem: "General-purpose LLMs answer confidently regardless of evidence quality — there's no feedback mechanism to catch weak research before it becomes output. For synthesis tasks requiring web search, pattern recognition, and strategic recommendations, a single LLM call is architecturally fragile. The challenge was building a system that orchestrates specialized agents, rigorously evaluates its own output, and triggers replanning automatically when confidence falls below threshold — without human intervention.",
    approach: "I built a boss-worker multi-agent system with a BossAgent orchestrating three specialized workers: ResearchAgent (Tavily primary search with DuckDuckGo + Google fallback, and a scraping cascade through BeautifulSoup → Playwright), AnalystAgent (pattern recognition + LLM insights), and StrategyAgent (recommendations + action plan). The system runs on a 9-state StateMachine (IDLE → PLANNING → TOOL_EXECUTION → OBSERVATION → REFLECTION → CONFIDENCE_EVALUATION → REPLANNING → ERROR_RECOVERY → COMPLETE). Confidence scoring is dual-layer: each worker self-scores its output, and the BossAgent independently evaluates it via a separate LLM call using Gemma 3-12B; the system uses the lower of the two as the operative score (conservative, default threshold: 0.70). If confidence is below threshold, the FSM enters REPLANNING and retries up to N times (default: 3); critically low scores trigger ERROR_RECOVERY. A ReflectionModule handles the evaluate_output logic with configurable high/low thresholds. SQLite-backed MemorySystem persists sessions, decisions, confidence scores, and tool outputs across runs. ModelRouter routes to four OpenRouter free-tier models by task complexity (SIMPLE → Gemma 3-4B, MODERATE → Gemma 3-4B, COMPLEX → Qwen 3-4B or Gemma 3-12B, LONG_CONTEXT → Llama 3.2-3B). Real-time WebSocket UI streams live logs, confidence scores, and session history.",
    outcome: "The conservative dual-scoring approach catches overconfident agent outputs the worker itself wouldn't flag — because the BossAgent evaluates independently. The REPLANNING loop means output quality improves across retries rather than returning stale results. MemorySystem SQLite persistence allows sessions to be resumed, audited, and compared. OpenRouter free-tier routing keeps the system zero-cost while dynamically allocating stronger models for complex reasoning tasks.",
    tech: ["LangGraph", "FastAPI", "OpenRouter", "SQLite", "WebSockets", "Python", "Tavily API", "BeautifulSoup", "Playwright"],
    metrics: [
      "Dual confidence scoring: worker self-score ∩ BossAgent LLM score",
      "Default confidence threshold: 0.70",
      "9-state FSM with automated replanning on low confidence",
      "Max 3 retries before ERROR_RECOVERY",
      "3 specialized worker agents (Research, Analyst, Strategy)",
      "Search cascade: Tavily (primary) → DuckDuckGo → Google",
      "Scraping: BeautifulSoup → Playwright cascade",
      "4-model OpenRouter routing: Qwen 3-4B / Gemma 3-12B / Llama 3.2-3B / Gemma 3-4B",
      "SQLite session persistence across research runs",
      "Real-time WebSocket UI with live confidence visualization",
      "100% personal project — designed and built entirely by me"
    ],
    hasArchitecture: true
  },
  {
    id: "ai-interviewer",
    title: "AI Interviewer System",
    year: "2025",
    tagline: "Real-time voice interviews with a zero-LLM auditor and STAR coaching — three agents that never block each other.",
    problem: "Existing AI interview tools are either turn-based with noticeable latency, or evaluate performance only after the session — too late for candidates to understand in real time what's going wrong. The deeper problem: resume claims are rarely stress-tested. Interviewers ask generic questions that let candidates give vague answers without exposing articulation gaps between what the resume says and what they can actually explain under pressure. A real system needs parallel real-time evaluation that doesn't impact the live conversation.",
    approach: "I built a 3-agent system with strict separation enforced in code. Agent 1: LiveInterviewer (Gemini 2.5 Flash Native Audio Live) conducts the voice interview via WebSocket. Agent 2: AuditorAgent — zero LLM calls, pure Python heuristics, runs as asyncio.create_task() so it never blocks the audio path. It scores every student turn: hesitation, tech clarity, metrics, and red flags. Agent 3: CoachAgent (Gemini 2.5 Flash) runs as a FastAPI BackgroundTask only after finished — it generates a CoachReport with MirrorResult (resume vs answer consistency) and EliteScript (STAR) rewrites. Session state in Redis (Upstash) with 24hr TTL; ChromaDB for resume RAG.",
    outcome: "AuditorAgent runs at zero LLM cost during the live interview — pure heuristics means no API latency on the conversation path. Resume entity grounding makes every substantive question target something specific on the resume, making vague answers structurally impossible to hide behind. The MirrorEngine catches articulation gaps with enough specificity to produce an EliteScript the candidate can actually memorize.",
    tech: ["LangGraph", "FastAPI", "Gemini 2.5 Flash Live", "Redis (Upstash)", "ChromaDB", "WebSockets", "Python", "asyncio"],
    metrics: [
      "Real-time voice: WebSocket audio streaming, 16kHz PCM mono",
      "AuditorAgent: zero LLM calls, zero latency impact",
      "4-phase interview FSM: warm_up → deep_dive → stress_test → finished",
      "Progressive difficulty: EASY → MEDIUM → CHALLENGING",
      "Every deep_dive + stress_test question grounded to a resume entity",
      "6 real-time AuditorNote signals per turn",
      "Red flag detection: vague ownership, passive voice, missing metrics",
      "MirrorResult: resume_claim vs student_said consistency",
      "EliteScript: 50–100 words, STAR structure, verified metric",
      "Coach runs as FastAPI BackgroundTask — never blocks session",
      "100% personal project — designed and built entirely by me"
    ],
    hasArchitecture: true
  }
];
