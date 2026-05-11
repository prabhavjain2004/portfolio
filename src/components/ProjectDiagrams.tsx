import React from "react";

export const JTapArchitecture = () => (
  <svg viewBox="0 0 800 500" className="w-full h-auto text-gray-400 font-mono text-[12px]">
    <rect x="300" y="20" width="200" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
    <text x="400" y="45" textAnchor="middle" fill="currentColor">User Query</text>
    
    <path d="M400 60 L400 100" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" />
    
    <rect x="250" y="100" width="300" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
    <text x="400" y="125" textAnchor="middle" fill="currentColor">NL Query Router (Supervisor)</text>
    
    <path d="M400 140 L400 180" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" />
    
    <rect x="150" y="180" width="500" height="120" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />
    <text x="160" y="195" fill="currentColor" className="text-[10px]">8 Specialized Agents</text>
    
    <text x="250" y="220" fill="currentColor">Syllabus Parser</text>
    <text x="250" y="240" fill="currentColor">Learning Path Gen</text>
    <text x="250" y="260" fill="currentColor">Resume Analyzer</text>
    <text x="250" y="280" fill="currentColor">Risk Detection</text>
    
    <text x="450" y="220" fill="currentColor">Interview Prep</text>
    <text x="450" y="240" fill="currentColor">Progress Tracker</text>
    <text x="450" y="260" fill="currentColor">Career Advisor</text>
    <text x="450" y="280" fill="currentColor">Scraper Agent</text>
    
    <path d="M400 300 L400 340" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" />
    
    <rect x="250" y="340" width="300" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
    <text x="400" y="365" textAnchor="middle" fill="currentColor">LLM-as-Judge Eval Layer</text>
    
    <path d="M400 380 L400 420" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" />
    
    <text x="200" y="445" fill="currentColor">Langfuse</text>
    <text x="400" y="445" textAnchor="middle" fill="currentColor">PG + Redis</text>
    <text x="600" y="445" textAnchor="end" fill="currentColor">BullMQ</text>
    
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="currentColor" />
      </marker>
    </defs>
  </svg>
);

export const ResearchArchitecture = () => (
  <svg viewBox="0 0 800 450" className="w-full h-auto text-gray-400 font-mono text-[12px]">
    <rect x="325" y="20" width="150" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
    <text x="400" y="45" textAnchor="middle" fill="currentColor">User Input</text>
    
    <path d="M400 60 L400 100" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" />
    
    <rect x="250" y="100" width="300" height="60" fill="none" stroke="currentColor" strokeWidth="1" />
    <text x="400" y="125" textAnchor="middle" fill="currentColor">Supervisor Agent (FSM)</text>
    <text x="400" y="145" textAnchor="middle" fill="currentColor" className="text-[10px]">PLAN → DISPATCH → AGGREGATE</text>
    
    <path d="M400 160 L400 200" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" />
    
    <rect x="200" y="200" width="400" height="100" fill="none" stroke="currentColor" strokeWidth="1" />
    <text x="400" y="230" textAnchor="middle" fill="currentColor">Worker Agents (ReAct Loop)</text>
    <text x="400" y="255" textAnchor="middle" fill="currentColor" className="text-[10px]">Tool Calls: Web, DB, Docs, Synthesis</text>
    
    <path d="M400 300 L400 340" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" />
    
    <rect x="250" y="340" width="300" height="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
    <text x="400" y="365" textAnchor="middle" fill="currentColor">Interrupt Handler (Recovery)</text>
    
    <path d="M400 380 L400 410" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" />
    <text x="400" y="435" textAnchor="middle" fill="currentColor">Structured Output</text>

    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="currentColor" />
      </marker>
    </defs>
  </svg>
);

export const InterviewArchitecture = () => (
  <svg viewBox="0 0 800 500" className="w-full h-auto text-gray-400 font-mono text-[12px]">
    <text x="400" y="30" textAnchor="middle" fill="currentColor">Upload Resume + JD</text>
    <path d="M400 40 L400 70" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" />
    
    <rect x="300" y="70" width="200" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
    <text x="400" y="95" textAnchor="middle" fill="currentColor">Session Initializer</text>
    
    <path d="M400 110 L400 140" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" />
    
    <rect x="200" y="140" width="400" height="200" fill="none" stroke="currentColor" strokeWidth="1" />
    <text x="400" y="165" textAnchor="middle" fill="currentColor">Interview Loop (LangGraph State)</text>
    
    <rect x="250" y="180" width="300" height="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />
    <text x="400" y="205" textAnchor="middle" fill="currentColor" className="text-[10px]">1. Generate Question</text>
    <text x="400" y="235" textAnchor="middle" fill="currentColor" className="text-white">PAUSE — WAIT FOR USER</text>
    <text x="400" y="265" textAnchor="middle" fill="currentColor" className="text-[10px]">2. Evaluate Response in Context</text>
    <text x="400" y="295" textAnchor="middle" fill="currentColor" className="text-[10px]">3. Update Session State</text>
    
    <path d="M400 340 L400 380" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" />
    
    <rect x="300" y="380" width="200" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
    <text x="400" y="405" textAnchor="middle" fill="currentColor">Report Generator</text>
    
    <text x="400" y="460" textAnchor="middle" fill="currentColor">Scores • Gap Analysis • Suggestions</text>

    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="currentColor" />
      </marker>
    </defs>
  </svg>
);
