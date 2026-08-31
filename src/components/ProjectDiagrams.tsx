import React from "react";

const ArrowHead = () => (
  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="var(--diagram-gray)" />
  </marker>
);

const Node = ({ x, y, width = 160, height = 50, title, subtitle, color = "var(--diagram-border)", textColor = "var(--diagram-text-bright)", dashed = false }: any) => (
  <g transform={`translate(${x}, ${y})`}>
    <rect 
      width={width} 
      height={height} 
      rx="8" 
      fill="var(--diagram-bg)" 
      stroke={color} 
      strokeWidth="1"
      strokeDasharray={dashed ? "4 4" : "0"}
    />
    <text x={width / 2} y={height / 2 - 4} textAnchor="middle" fill={textColor} className="text-[14px] font-medium select-none">
      {title}
    </text>
    {subtitle && (
      <text x={width / 2} y={height / 2 + 14} textAnchor="middle" fill="var(--diagram-text)" className="text-[10px] select-none uppercase tracking-tighter">
        {subtitle}
      </text>
    )}
  </g>
);

export const AITrainingPlacementArchitecture = () => (
  <svg viewBox="0 0 680 500" className="w-full h-auto font-sans">
    <defs><ArrowHead /></defs>
    
    {/* Tier 1 */}
    <Node x={240} y={20} width={200} height={50} title="NL Query Router" subtitle="Intent classification → 3+ downstream agents" color="var(--diagram-purple)" />
    
    {/* Tier 2 */}
    <rect x={40} y={110} width="600" height="150" rx="12" fill="none" stroke="var(--diagram-border)" strokeDasharray="4 4" />
    <text x={50} y={130} fill="var(--diagram-text)" className="text-[10px] uppercase tracking-widest">LangGraph Agent Layer (8 Specialized Agents)</text>
    
    <g transform="translate(60, 150)">
      <Node x={0} y={0} width={135} height={40} title="Syllabus Parser" />
      <Node x={145} y={0} width={135} height={40} title="Learning Path" />
      <Node x={290} y={0} width={135} height={40} title="Resume Analyzer" />
      <Node x={435} y={0} width={135} height={40} title="Risk Detection" subtitle="<5m alert breach" color="var(--diagram-coral)" />
      
      <Node x={0} y={55} width={135} height={40} title="Practice Assistant" />
      <Node x={145} y={55} width={135} height={40} title="Progress Tracker" />
      <Node x={290} y={55} width={135} height={40} title="Interview Prep" />
      <Node x={435} y={55} width={135} height={40} title="Content Curation" />
    </g>

    {/* Tier 3 */}
    <Node x={160} y={300} title="LLM-as-Judge" subtitle="Agent evaluation workflows" color="var(--diagram-amber)" />
    <Node x={360} y={300} title="Langfuse" subtitle="End-to-end observability" color="var(--diagram-teal)" />

    {/* Connections */}
    <path d="M340 70 L340 110" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
    <path d="M340 260 L340 300" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
    
    {/* Reliability loop */}
    <path d="M160 325 Q 40 325, 40 185 L 60 185" fill="none" stroke="var(--diagram-amber)" strokeDasharray="4 4" markerEnd="url(#arrowhead)" />
    <text x={45} y={290} transform="rotate(-90 45 290)" fill="var(--diagram-amber)" className="text-[10px]">Retry & Recovery Logic</text>

    {/* Infra Strip */}
    <g transform="translate(40, 420)">
      <rect width="600" height="60" rx="8" fill="#111" stroke="var(--diagram-border)" />
      <text x={10} y={20} fill="var(--diagram-text)" className="text-[9px] uppercase tracking-widest">Infrastructure Layer (~50% NestJS Contribution)</text>
      <text x={60} y={40} fill="var(--diagram-text)" className="text-[12px]">BullMQ → Job Queues</text>
      <text x={230} y={40} fill="var(--diagram-text)" className="text-[12px]">Redis → Cache & Queue</text>
      <text x={400} y={40} fill="var(--diagram-text)" className="text-[12px]">PostgreSQL ↔ Audit Logs</text>
      <text x={560} y={40} fill="var(--diagram-text)" className="text-[12px]">Gemini</text>
    </g>
  </svg>
);

export const ResearchArchitecture = () => (
  <svg viewBox="0 0 680 500" className="w-full h-auto font-sans">
    <defs><ArrowHead /></defs>
    
    {/* Left Panel - Supervisor-Worker Coordination */}
    <g transform="translate(20, 20)">
      <text x={0} y={0} fill="var(--diagram-text)" className="text-[10px] uppercase tracking-widest">Supervisor Coordination</text>
      <Node x={80} y={20} width={200} height={50} title="Supervisor Agent" subtitle="Coordinates specialized workers" color="var(--diagram-purple)" />
      
      <g transform="translate(0, 110)">
        <Node x={0} y={0} width={115} height={40} title="Research Worker" subtitle="Multi-step retrieval" color="var(--diagram-teal)" />
        <Node x={125} y={0} width={115} height={40} title="Analyst Worker" subtitle="Pattern analysis" color="var(--diagram-teal)" />
        <Node x={250} y={0} width={115} height={40} title="Synthesis Worker" subtitle="Structured output" color="var(--diagram-teal)" />
      </g>
      
      <Node x={80} y={200} width={200} height={50} title="Interrupt Handling" subtitle="Human-in-the-Loop & State Resume" color="var(--diagram-amber)" />
      
      {/* Feedback loop */}
      <path d="M80 225 Q 0 225, 0 45 L 80 45" fill="none" stroke="var(--diagram-amber)" strokeDasharray="4 4" markerEnd="url(#arrowhead)" />
      
      {/* Supporting nodes */}
      <Node x={0} y={290} width={115} height={40} title="Session Memory" subtitle="State Persistence" />
      <Node x={125} y={290} width={115} height={40} title="Dynamic Tools" subtitle="External Tool Calling" />
      <Node x={250} y={290} width={115} height={40} title="WebSocket UI" subtitle="Streaming Output" />
      
      <path d="M180 70 L 60 110" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
      <path d="M180 70 L 180 110" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
      <path d="M180 70 L 300 110" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
      
      <path d="M60 150 L 160 200" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
      <path d="M180 150 L 180 200" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
      <path d="M300 150 L 200 200" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
    </g>
    
    <line x1="390" y1="40" x2="390" y2="460" stroke="var(--diagram-border)" strokeDasharray="4 4" />
    
    {/* Right Panel - State-Machine Execution Flow */}
    <g transform="translate(420, 20)">
      <text x={0} y={0} fill="var(--diagram-text)" className="text-[10px] uppercase tracking-widest">State-Machine & ReAct Loop</text>
      
      {[
        { title: "TASK INITIALIZATION", sub: "Supervisor receives query" },
        { title: "STATE TRANSITION", sub: "Dispatches to worker agent" },
        { title: "ReAct REASONING LOOP", sub: "Thought → Action → Observation" },
        { title: "DYNAMIC TOOL CALLING", sub: "Multi-step external retrieval" },
        { title: "STRUCTURED OUTPUT", sub: "Validated schema generation" }
      ].map((item, i) => (
        <Node key={item.title} x={20} y={20 + i * 75} width={200} height={50} title={item.title} subtitle={item.sub} color={i === 2 ? "var(--diagram-teal)" : i === 4 ? "#22c55e" : "var(--diagram-border)"} />
      ))}
      
      {/* Sequential connections */}
      {[0, 1, 2, 3].map(i => (
        <path key={i} d={`M120 ${70 + i * 75} L 120 ${95 + i * 75}`} stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
      ))}
      
      {/* ReAct loop back */}
      <path d="M220 270 Q 250 270, 250 220 Q 250 170, 220 170" fill="none" stroke="var(--diagram-teal)" strokeDasharray="4 4" markerEnd="url(#arrowhead)" />
      <text x={255} y={225} fill="var(--diagram-teal)" className="text-[9px]">Iterate until complete</text>
    </g>
  </svg>
);

export const InterviewArchitecture = () => (
  <svg viewBox="0 0 680 600" className="w-full h-auto font-sans">
    <defs><ArrowHead /></defs>
    
    {/* Layer 1: Live */}
    <g transform="translate(20, 20)">
      <rect width="460" height="140" rx="12" fill="none" stroke="var(--diagram-teal)" strokeDasharray="4 4" />
      <text x={10} y={20} fill="var(--diagram-teal)" className="text-[10px] uppercase tracking-widest font-bold">Live Layer</text>
      
      <Node x={20} y={40} width={180} height={40} title="LiveInterviewer" subtitle="Gemini 2.5 Flash Native Audio" color="var(--diagram-teal)" />
      <Node x={220} y={40} width={120} height={40} title="Phase FSM" subtitle="warm_up → deep_dive" />
      <Node x={20} y={90} width={180} height={40} title="build_instruction()" subtitle="Progressive difficulty" />
      <Node x={220} y={90} width={120} height={40} title="ResumeProfile" subtitle="ChromaDB entity grounding" />
    </g>

    {/* Layer 2: Logic */}
    <g transform="translate(20, 180)">
      <rect width="460" height="100" rx="12" fill="none" stroke="var(--diagram-purple)" strokeDasharray="4 4" />
      <text x={10} y={20} fill="var(--diagram-purple)" className="text-[10px] uppercase tracking-widest font-bold">Logic Layer</text>
      
      <Node x={20} y={40} width={180} height={50} title="AuditorAgent" subtitle="Zero LLM · asyncio.create_task()" color="var(--diagram-purple)" />
      <Node x={220} y={45} width={120} height={40} title="AuditorNote" subtitle="hesitation/metrics/flags" />
      <Node x={350} y={45} width={90} height={40} title="Redis" subtitle="State Persistence" />
    </g>

    {/* Layer 3: Coaching */}
    <g transform="translate(20, 300)">
      <rect width="460" height="160" rx="12" fill="none" stroke="var(--diagram-amber)" strokeDasharray="4 4" />
      <text x={10} y={20} fill="var(--diagram-amber)" className="text-[10px] uppercase tracking-widest font-bold">Coaching Layer (Post-Interview)</text>
      
      <Node x={20} y={40} width={150} height={40} title="CoachAgent" subtitle="Gemini 2.5 Flash" color="var(--diagram-amber)" />
      <Node x={180} y={40} width={130} height={40} title="MirrorResult" subtitle="Resume vs Answer" />
      <Node x={320} y={40} width={120} height={40} title="EliteScript" subtitle="50-100 words STAR" />
      <Node x={20} y={100} width={420} height={45} title="CoachReport" subtitle="6-category Wellfound report saved to Redis" />
    </g>

    {/* Output Panel */}
    <g transform="translate(500, 20)">
      <text x={0} y={0} fill="var(--diagram-text)" className="text-[10px] uppercase tracking-widest">User-Facing Surface</text>
      <Node x={0} y={20} width={160} height={100} title="Live Heatmap" subtitle="Real-time Auditor signals" color="var(--diagram-purple)" />
      <Node x={0} y={140} width={160} height={100} title="STAR Rewrites" subtitle="EliteScript generation" color="var(--diagram-amber)" />
      <Node x={0} y={260} width={160} height={100} title="Wellfound Report" subtitle="Post-interview analytics" color="var(--diagram-amber)" />
      
      <g transform="translate(0, 380)">
        {["Depth", "Clarity", "Consistency", "Solving", "Impact", "Fit"].map((cat, i) => (
          <text key={cat} x={i % 2 * 80} y={Math.floor(i / 2) * 20} fill="var(--diagram-text)" className="text-[9px] uppercase">{cat}</text>
        ))}
      </g>
    </g>

    {/* Cross-layer connections */}
    <path d="M110 160 L 110 180" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
    <path d="M110 280 L 110 300" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
    <path d="M340 230 L 500 70" stroke="var(--diagram-purple)" opacity="0.3" markerEnd="url(#arrowhead)" />
    <path d="M440 340 L 500 190" stroke="var(--diagram-amber)" opacity="0.3" markerEnd="url(#arrowhead)" />
    <path d="M440 422 L 500 310" stroke="var(--diagram-amber)" opacity="0.3" markerEnd="url(#arrowhead)" />
  </svg>
);

export const CDASArchitecture = () => (
  <svg viewBox="0 0 720 520" className="w-full h-auto font-sans">
    <defs><ArrowHead /></defs>
    
    {/* Left Column: Ingestion & Schema Discovery */}
    <g>
      <text x="180" y="25" textAnchor="middle" fill="var(--diagram-text-bright)" className="text-[12px] uppercase tracking-widest font-bold font-mono">
        1. Ingestion & Schema Discovery
      </text>
      
      <Node x="75" y="60" width="210" height="45" title="CSV Dataset" subtitle="Client File Upload" color="var(--diagram-teal)" />
      <Node x="75" y="140" width="210" height="45" title="5-Stage Cleaning Pipeline" subtitle="Pandas Auto-Imputation" color="var(--diagram-border)" />
      <Node x="75" y="220" width="210" height="45" title="Jaccard Join Detector" subtitle="Semantic Schema Proposal" color="var(--diagram-purple)" />
      <Node x="75" y="300" width="210" height="45" title="Tabular Session Store" subtitle="Compact Schema Profiles" color="var(--diagram-border)" />

      {/* Vertical Flow Lines */}
      <path d="M 180 105 L 180 140" fill="none" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
      <path d="M 180 185 L 180 220" fill="none" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
      <path d="M 180 265 L 180 300" fill="none" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
    </g>

    {/* Divider line */}
    <line x1="360" y1="40" x2="360" y2="480" stroke="var(--diagram-border)" strokeDasharray="4 4" />

    {/* Right Column: Sandboxed Execution & Synthesis */}
    <g>
      <text x="550" y="25" textAnchor="middle" fill="var(--diagram-text-bright)" className="text-[12px] uppercase tracking-widest font-bold font-mono">
        2. Sandboxed Execution & Synthesis
      </text>
      
      <Node x="445" y="60" width="210" height="45" title="Natural Language Query" subtitle="Next.js Chat UI" color="var(--diagram-teal)" />
      <Node x="445" y="140" width="210" height="45" title="Context & Memory Assembler" subtitle="Sliding Window (deque)" color="var(--diagram-border)" />
      <Node x="445" y="220" width="210" height="45" title="Gemini 3.0 Flash" subtitle="Strict Code Generation Only" color="var(--diagram-amber)" />
      <Node x="445" y="300" width="210" height="45" title="Python Sandbox" subtitle="Isolated Execution Namespace" color="var(--diagram-coral)" />

      {/* Branching outputs */}
      <Node x="380" y="385" width="155" height="45" title="Plotly Serializer" subtitle="Interactive Chart" color="var(--diagram-teal)" />
      <Node x="565" y="385" width="155" height="45" title="LLM Synthesis & Guard" subtitle="Conversational Response" color="var(--diagram-amber)" />
      
      {/* Final Presentation */}
      <Node x="445" y="460" width="210" height="45" title="Interactive Chat View" subtitle="Deterministic Presentation" color="var(--diagram-teal)" />

      {/* Vertical Flow Lines */}
      <path d="M 550 105 L 550 140" fill="none" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
      <path d="M 550 185 L 550 220" fill="none" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
      <path d="M 550 265 L 550 300" fill="none" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />

      {/* Sandbox Splitting Flow Lines */}
      <path d="M 515 345 C 515 365, 457.5 365, 457.5 385" fill="none" stroke="var(--diagram-teal)" markerEnd="url(#arrowhead)" />
      <text x="475" y="365" textAnchor="end" fill="var(--diagram-teal)" className="text-[8px] font-mono font-bold select-none">IF CHART</text>
      
      <path d="M 585 345 C 585 365, 642.5 365, 642.5 385" fill="none" stroke="var(--diagram-amber)" markerEnd="url(#arrowhead)" />
      <text x="625" y="365" textAnchor="start" fill="var(--diagram-amber)" className="text-[8px] font-mono font-bold select-none">IF TEXT</text>

      {/* Dynamic converged return flow to presentation */}
      <path d="M 457.5 430 C 457.5 448, 515 448, 515 460" fill="none" stroke="var(--diagram-teal)" markerEnd="url(#arrowhead)" />
      <text x="470" y="448" textAnchor="end" fill="var(--diagram-teal)" className="text-[8px] font-mono select-none">Plotly JSON</text>

      <path d="M 642.5 430 C 642.5 448, 585 448, 585 460" fill="none" stroke="var(--diagram-amber)" markerEnd="url(#arrowhead)" />
      <text x="630" y="448" textAnchor="start" fill="var(--diagram-amber)" className="text-[8px] font-mono select-none">Clean Text</text>
    </g>

    {/* Intersystem Link: Session Schema Injection */}
    <path d="M 285 322 C 375 322, 355 162, 445 162" fill="none" stroke="var(--diagram-purple)" strokeDasharray="4 4" markerEnd="url(#arrowhead)" />
    <text x="360" y="240" textAnchor="middle" fill="var(--diagram-purple)" className="text-[9px] font-mono font-bold select-none bg-black px-1">
      Inject Schema
    </text>
  </svg>
);



