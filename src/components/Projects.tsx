"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { projectsData, Project } from "@/lib/projectData";
import { JTapArchitecture, ResearchArchitecture, InterviewArchitecture } from "./ProjectDiagrams";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent scroll when modal open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  const getDiagram = (id: string) => {
    switch (id) {
      case "j-tap": return <JTapArchitecture />;
      case "research-agent": return <ResearchArchitecture />;
      case "ai-interviewer": return <InterviewArchitecture />;
      default: return null;
    }
  };

  const renderProjectCard = (project: Project, idx: number, baseIdx: number) => {
    const bgColorMap: Record<string, string> = {
      "j-tap": "#111111",
      "limp": "#1a1a1a",
      "tapnex": "#0a0a0a",
      "research-agent": "#222222",
      "ai-interviewer": "#161616"
    };

    return (
      <motion.div 
        key={project.id} 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        onClick={() => setSelectedProject(project)}
        className="sticky top-12 md:top-24 w-full rounded-3xl p-8 md:p-16 border border-gray-800 shadow-2xl mb-[10vh] cursor-pointer group"
        style={{ 
          backgroundColor: bgColorMap[project.id] || "#111111",
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
            
            <h3 className="text-4xl md:text-6xl font-serif tracking-tight mb-6 flex items-center gap-4 group-hover:text-accent transition-colors">
              {project.title}
              <ArrowRight size={32} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
            </h3>
            
            <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed mb-8">
              {project.tagline}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((tag, tIdx) => (
                <span key={tIdx} className="px-4 py-2 rounded-full border border-gray-800 text-xs font-mono uppercase tracking-widest group-hover:border-gray-600 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="text-accent font-mono text-xs uppercase tracking-widest border border-accent/20 px-4 py-2 rounded-full">
            Case Study ↗
          </div>
        </div>
      </motion.div>
    );
  };

  const clientProjects = projectsData.slice(0, 3);
  const personalProjects = projectsData.slice(3);

  return (
    <section id="projects" className="py-32 px-6 md:px-12 relative selection:bg-accent selection:text-black">
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-xs font-mono uppercase tracking-widest text-accent mb-4">Commercial Deliverables</h2>
        <h3 className="text-6xl md:text-8xl font-serif italic tracking-tight">Client Work.</h3>
      </div>
      <div className="max-w-5xl mx-auto relative mb-32">
        {clientProjects.map((project, idx) => renderProjectCard(project, idx, 0))}
      </div>

      <div className="max-w-6xl mx-auto mb-24 pt-32 border-t border-gray-900">
        <h2 className="text-xs font-mono uppercase tracking-widest text-accent mb-4">Personal Projects</h2>
        <h3 className="text-6xl md:text-8xl font-serif italic tracking-tight">Explorations.</h3>
      </div>
      <div className="max-w-5xl mx-auto relative">
        {personalProjects.map((project, idx) => renderProjectCard(project, idx, clientProjects.length))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#080808] border border-gray-900 w-full max-w-3xl max-h-full overflow-y-auto rounded-[2rem] p-8 md:p-16 cursor-default scrollbar-hide"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>

              <div className="font-mono text-xs uppercase tracking-widest text-accent mb-6">
                {selectedProject.year} — Project Details
              </div>

              <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-white mb-4">
                {selectedProject.title}
              </h2>
              
              <p className="text-lg md:text-xl text-accent/80 font-mono italic mb-12">
                {selectedProject.tagline}
              </p>

              <div className="grid grid-cols-1 gap-12">
                <div className="space-y-12">
                  <section>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4 border-b border-gray-900 pb-2 w-fit">Problem</h4>
                    <p className="text-gray-300 font-light leading-relaxed">{selectedProject.problem}</p>
                  </section>
                  
                  <section>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4 border-b border-gray-900 pb-2 w-fit">Approach</h4>
                    <p className="text-gray-300 font-light leading-relaxed">{selectedProject.approach}</p>
                  </section>
                  
                  <section>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4 border-b border-gray-900 pb-2 w-fit">Outcome</h4>
                    <p className="text-gray-300 font-light leading-relaxed">{selectedProject.outcome}</p>
                  </section>
                </div>

                {selectedProject.hasArchitecture && (
                  <section className="bg-black/50 border border-gray-900 rounded-2xl p-8">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-8 border-b border-gray-900 pb-2 w-fit">Architecture Visualization</h4>
                    <div className="w-full">
                      {getDiagram(selectedProject.id)}
                    </div>
                  </section>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <section>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4 border-b border-gray-900 pb-2 w-fit">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tag, i) => (
                        <span key={i} className="text-[10px] font-mono text-gray-400 border border-gray-900 px-3 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </section>
                  
                  <section>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4 border-b border-gray-900 pb-2 w-fit">Key Metrics</h4>
                    <ul className="space-y-2">
                      {selectedProject.metrics.map((metric, i) => (
                        <li key={i} className="text-sm font-light text-gray-400 flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
