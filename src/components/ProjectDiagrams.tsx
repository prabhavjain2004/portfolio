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

export const JTapArchitecture = () => (
  <svg viewBox="0 0 680 500" className="w-full h-auto font-sans">
    <defs><ArrowHead /></defs>
    
    {/* Tier 1 */}
    <Node x={260} y={20} title="NL Query Router" subtitle="Classifies intent → dispatches" color="var(--diagram-purple)" />
    
    {/* Tier 2 */}
    <rect x={40} y={110} width="600" height="150" rx="12" fill="none" stroke="var(--diagram-border)" strokeDasharray="4 4" />
    <text x={50} y={130} fill="var(--diagram-text)" className="text-[10px] uppercase tracking-widest">LangGraph Agent Layer</text>
    
    <g transform="translate(60, 150)">
      <Node x={0} y={0} width={135} height={40} title="Syllabus Parser" />
      <Node x={145} y={0} width={135} height={40} title="Learning Path" />
      <Node x={290} y={0} width={135} height={40} title="Resume Analyzer" />
      <Node x={435} y={0} width={135} height={40} title="Risk Detection" color="var(--diagram-coral)" />
      
      <Node x={0} y={55} width={135} height={40} title="Interview Prep" />
      <Node x={145} y={55} width={135} height={40} title="Progress Tracker" />
      <Node x={290} y={55} width={135} height={40} title="Career Advisor" />
      <Node x={435} y={55} width={135} height={40} title="Content Curation" />
    </g>

    {/* Tier 3 */}
    <Node x={160} y={300} title="LLM-as-Judge" subtitle="Output quality gate" color="var(--diagram-amber)" />
    <Node x={360} y={300} title="Langfuse" subtitle="Trace + Latency observability" color="var(--diagram-teal)" />

    {/* Connections */}
    <path d="M340 70 L340 110" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
    <path d="M340 260 L340 300" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
    
    {/* Retry loop */}
    <path d="M160 325 Q 40 325, 40 185 L 60 185" fill="none" stroke="var(--diagram-amber)" strokeDasharray="4 4" markerEnd="url(#arrowhead)" />
    <text x={45} y={290} transform="rotate(-90 45 290)" fill="var(--diagram-amber)" className="text-[10px]">Retry if quality fails</text>

    {/* Infra Strip */}
    <g transform="translate(40, 420)">
      <rect width="600" height="60" rx="8" fill="#111" stroke="var(--diagram-border)" />
      <text x={10} y={20} fill="var(--diagram-text)" className="text-[9px] uppercase tracking-widest">Infrastructure</text>
      <text x={60} y={40} fill="var(--diagram-text)" className="text-[12px]">BullMQ → Risk Detection</text>
      <text x={220} y={40} fill="var(--diagram-text)" className="text-[12px]">Redis → BullMQ</text>
      <text x={350} y={40} fill="var(--diagram-text)" className="text-[12px]">PostgreSQL ↔ Agents</text>
      <text x={520} y={40} fill="var(--diagram-text)" className="text-[12px]">Gemini API</text>
    </g>
  </svg>
);

export const ResearchArchitecture = () => (
  <svg viewBox="0 0 680 500" className="w-full h-auto font-sans">
    <defs><ArrowHead /></defs>
    
    {/* Left Panel - Boss-Worker */}
    <g transform="translate(20, 20)">
      <text x={0} y={0} fill="var(--diagram-text)" className="text-[10px] uppercase tracking-widest">Boss-Worker Hierarchy</text>
      <Node x={90} y={20} width={180} height={50} title="BossAgent" subtitle="Orchestrates + Scores via LLM" color="var(--diagram-purple)" />
      
      <g transform="translate(0, 110)">
        <Node x={0} y={0} width={115} height={40} title="ResearchAgent" subtitle="Search Cascade" color="var(--diagram-teal)" />
        <Node x={125} y={0} width={115} height={40} title="AnalystAgent" subtitle="Pattern/Insights" color="var(--diagram-teal)" />
        <Node x={250} y={0} width={115} height={40} title="StrategyAgent" subtitle="Action Plan" color="var(--diagram-teal)" />
      </g>
      
      <Node x={90} y={200} width={180} height={60} title="ReflectionModule" subtitle="Lower of Boss/Worker (Thresh: 0.70)" color="var(--diagram-amber)" />
      
      {/* Feedback loop */}
      <path d="M90 230 Q 0 230, 0 45 L 90 45" fill="none" stroke="var(--diagram-amber)" strokeDasharray="4 4" markerEnd="url(#arrowhead)" />
      
      {/* Supporting nodes */}
      <Node x={0} y={300} width={115} height={35} title="Memory (SQLite)" subtitle="Session History" />
      <Node x={125} y={300} width={115} height={35} title="ModelRouter" subtitle="OpenRouter Free" />
      <Node x={250} y={300} width={115} height={35} title="WebSocket UI" subtitle="Live Logs/Viz" />
      
      <path d="M180 70 L 60 110" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
      <path d="M180 70 L 180 110" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
      <path d="M180 70 L 300 110" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
      
      <path d="M60 150 L 160 200" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
      <path d="M180 150 L 180 200" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
      <path d="M300 150 L 200 200" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
    </g>
    
    <line x1="390" y1="40" x2="390" y2="460" stroke="var(--diagram-border)" strokeDasharray="4 4" />
    
    {/* Right Panel - FSM */}
    <g transform="translate(420, 20)">
      <text x={0} y={0} fill="var(--diagram-text)" className="text-[10px] uppercase tracking-widest">StateMachine (9 States)</text>
      
      {["IDLE", "PLANNING", "TOOL_EXECUTION", "OBSERVATION", "REFLECTION"].map((state, i) => (
        <Node key={state} x={40} y={20 + i * 55} width={160} height={40} title={state} color="var(--diagram-border)" />
      ))}
      
      <Node x={40} y={295} width={160} height={50} title="CONFIDENCE" subtitle="EVALUATION" color="var(--diagram-amber)" />
      
      <Node x={40} y={395} width={160} height={40} title="COMPLETE" subtitle="Confidence ≥ 0.70" color="#22c55e" />
      <Node x={220} y={300} width={100} height={40} title="ERROR" subtitle="RECOVERY" color="var(--diagram-coral)" />
      
      {/* FSM Connections */}
      {[0, 1, 2, 3, 4].map(i => (
        <path key={i} d={`M120 ${60 + i * 55} L 120 ${75 + i * 55}`} stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
      ))}
      <path d="M120 345 L 120 395" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
      <path d="M200 320 L 220 320" stroke="var(--diagram-gray)" markerEnd="url(#arrowhead)" />
      
      {/* Replanning loop */}
      <path d="M40 320 Q 0 320, 0 100 L 40 100" fill="none" stroke="var(--diagram-amber)" strokeDasharray="4 4" markerEnd="url(#arrowhead)" />
      <text x={10} y={220} transform="rotate(-90 10 220)" fill="var(--diagram-amber)" className="text-[10px]">REPLANNING (retries ≤ 3)</text>
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

