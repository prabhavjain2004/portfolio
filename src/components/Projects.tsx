"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

const clientProjects = [
  {
    title: "AI Training & Placement",
    description: "Institution-grade platform for 8,000+ concurrent users with 8 specialized agents including Syllabus Parser, Learning Path Generator, and Resume Analyzer.",
    tags: ["LangGraph", "Multi-Agent", "NestJS"],
    year: "2026",
    color: "#111111"
  },
  {
    title: "Land Data Intelligence",
    description: "Automation pipelines for notification dispatch, document parsing, and webhook-triggered real-time workflows for legal-tech clients.",
    tags: ["Python", "Django", "AWS"],
    year: "2026",
    color: "#1a1a1a"
  },
  {
    title: "TapNex — Event Tech Platform",
    description: "Full event-tech product: ticketing, access control, stall management, and automated meal/gaming systems deployed in live environments.",
    tags: ["Flutter", "NestJS", "Supabase"],
    year: "2025",
    color: "#0a0a0a"
  }
];

const personalProjects = [
  {
    title: "Autonomous Research Agent",
    description: "Hierarchical multi-agent system focusing on observability and reliability via FSM and interrupt handling with ReAct loops.",
    tags: ["LangGraph", "ReAct", "RAG"],
    links: { github: "https://github.com/prabhavjain2004" },
    year: "2025",
    color: "#222222"
  },
  {
    title: "AI Interviewer System",
    description: "Stateful LangGraph workflow with session memory and structured evaluation reports generated from complex datasets.",
    tags: ["LangGraph", "Stateful", "Memory", "Evaluation"],
    links: { github: "https://github.com/prabhavjain2004" },
    year: "2025",
    color: "#161616"
  }
];

export default function Projects() {
  const renderProject = (project: any, idx: number, baseIdx: number) => (
    <motion.div 
      key={idx} 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="sticky top-12 md:top-24 w-full rounded-3xl p-8 md:p-16 border border-gray-800 shadow-2xl mb-[10vh]"
      style={{ 
        backgroundColor: project.color,
        zIndex: baseIdx + idx,
        transformOrigin: "top center",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-accent font-mono text-sm tracking-widest">{String(baseIdx + idx + 1).padStart(2, '0')}</span>
            <span className="w-12 h-px bg-gray-800" />
            <span className="font-mono text-xs uppercase tracking-widest text-gray-400">{project.year}</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-serif tracking-tight mb-6">{project.title}</h3>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed mb-8">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag: string, tIdx: number) => (
              <span key={tIdx} className="px-4 py-2 rounded-full border border-gray-800 text-xs font-mono uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>
        {project.links && project.links.github && (
          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white text-black hover:bg-accent transition-colors flex-shrink-0">
            <Github size={24} />
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-32 px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-xs font-mono uppercase tracking-widest text-accent mb-4">Commercial Deliverables</h2>
        <h3 className="text-6xl md:text-8xl font-serif italic tracking-tight">Client Work.</h3>
      </div>
      <div className="max-w-5xl mx-auto relative mb-32">
        {clientProjects.map((project, idx) => renderProject(project, idx, 0))}
      </div>

      <div className="max-w-6xl mx-auto mb-24 pt-32 border-t border-gray-900">
        <h2 className="text-xs font-mono uppercase tracking-widest text-accent mb-4">Personal Projects</h2>
        <h3 className="text-6xl md:text-8xl font-serif italic tracking-tight">Explorations.</h3>
      </div>
      <div className="max-w-5xl mx-auto relative">
        {personalProjects.map((project, idx) => renderProject(project, idx, clientProjects.length))}
      </div>
    </section>
  );
}
