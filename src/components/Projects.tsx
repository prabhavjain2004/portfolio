"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform, useVelocity } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { projectsData, Project } from "@/lib/projectData";
import { AITrainingPlacementArchitecture, ResearchArchitecture, InterviewArchitecture, CDASArchitecture } from "./ProjectDiagrams";

const PREVIEW_W = 460;
const PREVIEW_H = 340;

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Preview card follows the cursor with a spring and tilts with horizontal velocity
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 220, damping: 28, mass: 0.6 };
  const previewX = useSpring(mouseX, springConfig);
  const previewY = useSpring(mouseY, springConfig);
  const tilt = useTransform(useSpring(useVelocity(mouseX), { stiffness: 120, damping: 30 }), [-2000, 0, 2000], [-7, 0, 7]);

  const placePreview = (clientX: number, clientY: number, snap = false) => {
    const drift = (1 - clientX / window.innerWidth) * 60;
    const left = Math.max(window.innerWidth - PREVIEW_W - 56 - drift, 24);
    const top = Math.min(Math.max(clientY - PREVIEW_H / 2, 16), window.innerHeight - PREVIEW_H - 16);
    mouseX.set(left);
    mouseY.set(top);
    if (snap) {
      previewX.jump(left);
      previewY.jump(top);
    }
  };

  const openProject = (project: Project, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setHoveredId(null);
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setHoveredId(null);
    triggerRef.current?.focus();
  };

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProject();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent scroll when modal open, and move focus into the dialog
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  const getDiagram = (id: string) => {
    switch (id) {
      case "ai-training-placement": return <AITrainingPlacementArchitecture />;
      case "research-agent": return <ResearchArchitecture />;
      case "ai-interviewer": return <InterviewArchitecture />;
      case "cdas": return <CDASArchitecture />;
      default: return null;
    }
  };

  const renderRow = (project: Project, idx: number, offset: number) => {
    const dimmed = hoveredId !== null && hoveredId !== project.id;

    return (
      <motion.li
        key={project.id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
      >
        <button
          type="button"
          aria-haspopup="dialog"
          onClick={(e) => openProject(project, e.currentTarget)}
          onMouseEnter={(e) => {
            if (hoveredId === null) placePreview(e.clientX, e.clientY, true);
            setHoveredId(project.id);
          }}
          onFocus={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            placePreview(window.innerWidth * 0.55, rect.top + rect.height / 2, hoveredId === null);
            setHoveredId(project.id);
          }}
          onBlur={() => setHoveredId(null)}
          style={{ opacity: dimmed ? 0.18 : 1 }}
          data-cursor="small"
          className="work-row group relative w-full flex items-baseline gap-5 md:gap-10 py-8 md:py-10 border-t border-gray-900 text-left transition-opacity duration-300 focus-visible:outline-none"
        >
          <span className="absolute top-0 left-0 h-px w-full bg-accent origin-left scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100 transition-transform duration-700 ease-out" />

          <span className="font-mono text-xs md:text-sm text-accent tracking-widest w-8 shrink-0">
            {String(offset + idx + 1).padStart(2, "0")}
          </span>

          <span className="flex-1 min-w-0">
            <span className="relative block font-serif tracking-tight leading-[0.95] text-[clamp(2.25rem,6.5vw,6rem)] transition-transform duration-500 ease-out group-hover:translate-x-3 md:group-hover:translate-x-6 group-focus-visible:translate-x-3 md:group-focus-visible:translate-x-6">
              <span className="work-outline block">{project.title}</span>
              <span aria-hidden="true" className="work-fill absolute inset-0 block">{project.title}</span>
            </span>
            <span className="md:hidden block mt-4 text-sm font-light text-gray-400 leading-relaxed">{project.tagline}</span>
          </span>

          <span className="hidden sm:flex flex-col items-end gap-4 shrink-0 font-mono text-xs uppercase tracking-widest text-gray-400">
            <span>{project.year}</span>
            <ArrowUpRight
              size={28}
              strokeWidth={1.5}
              className="transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent group-focus-visible:text-accent"
            />
          </span>
        </button>
      </motion.li>
    );
  };

  const clientProjects = projectsData.slice(0, 3);
  const personalProjects = projectsData.slice(3);
  const activeProject = projectsData.find((p) => p.id === hoveredId) ?? null;

  const groupLabel = (label: string, count: number) => (
    <div className="flex items-center gap-4 mb-6 font-mono text-xs uppercase tracking-widest text-gray-400">
      <span>{label}</span>
      <span className="h-px flex-1 bg-gray-900" />
      <span>{String(count).padStart(2, "0")}</span>
    </div>
  );

  return (
    <section id="projects" className="py-32 px-6 md:px-12 relative selection:bg-accent selection:text-black">
      <div className="max-w-6xl mx-auto">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-accent mb-4">Selected Work</h2>
            <h3 className="text-6xl md:text-8xl font-serif italic tracking-tight">Index.</h3>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-gray-400 md:text-right">
            <span className="hidden md:inline">Hover to preview — click for the case study</span>
            <span className="md:hidden">Tap for the case study</span>
          </p>
        </header>

        <div
          onMouseMove={(e) => placePreview(e.clientX, e.clientY)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {groupLabel("Client Work", clientProjects.length)}
          <ul className="mb-24 border-b border-gray-900">
            {clientProjects.map((project, idx) => renderRow(project, idx, 0))}
          </ul>

          {groupLabel("Personal Projects", personalProjects.length)}
          <ul className="border-b border-gray-900">
            {personalProjects.map((project, idx) => renderRow(project, idx, clientProjects.length))}
          </ul>
        </div>
      </div>

      {/* Cursor-following preview (desktop) */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            aria-hidden="true"
            style={{ x: previewX, y: previewY, rotate: tilt, width: PREVIEW_W, height: PREVIEW_H }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block fixed top-0 left-0 z-40 pointer-events-none overflow-hidden rounded-2xl border border-gray-800 bg-[#0a0a0a] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 flex flex-col"
              >
                <div className="relative h-[190px] border-b border-gray-900 overflow-hidden bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:18px_18px]">
                  <div className="absolute inset-x-0 top-0 z-[5] h-12 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 z-[5] h-8 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                  <span className="absolute top-4 left-5 z-10 font-mono text-[10px] uppercase tracking-widest text-accent">
                    {activeProject.year} — {activeProject.hasArchitecture ? "Architecture" : "Stack"}
                  </span>
                  {activeProject.hasArchitecture ? (
                    <div className="absolute inset-0 px-4 pt-8 pb-2 opacity-70 [&_svg]:h-full [&_svg]:w-full [&_svg]:scale-[1.9]">
                      {getDiagram(activeProject.id)}
                    </div>
                  ) : (
                    <div className="absolute inset-0 px-5 pt-10 flex flex-wrap content-start gap-2">
                      {activeProject.tech.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-gray-800 font-mono text-[10px] uppercase tracking-widest text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif italic text-5xl text-white leading-none">{activeProject.stat.value}</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">{activeProject.stat.label}</span>
                  </div>
                  <p className="text-xs font-light text-gray-400 leading-relaxed line-clamp-2">{activeProject.tagline}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
          >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={`${selectedProject.title} case study`}
                onKeyDown={(e) => {
                  if (e.key !== "Tab") return;
                  const focusable = e.currentTarget.querySelectorAll<HTMLElement>("a[href], button");
                  if (!focusable.length) return;
                  const first = focusable[0];
                  const last = focusable[focusable.length - 1];
                  if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                  } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                  }
                }}
                className="relative bg-[#080808] border border-gray-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] p-8 md:p-16 cursor-default scrollbar-hide selection:bg-accent selection:text-black"
              >
                <button 
                  ref={closeButtonRef}
                  onClick={closeProject}
                  aria-label="Close case study"
                  className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors z-20"
                >
                  <X size={32} />
                </button>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-mono text-xs uppercase tracking-widest text-accent mb-6"
                >
                  {selectedProject.year} — Case Study
                </motion.div>

                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl font-serif tracking-tight text-white mb-4"
                >
                  {selectedProject.title}
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg md:text-xl text-accent/80 font-mono italic mb-16 border-l-2 border-accent/20 pl-6 py-2"
                >
                  {selectedProject.tagline}
                </motion.p>

                {(selectedProject.github || selectedProject.live) && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="flex flex-wrap gap-4 mb-16 -mt-8"
                  >
                    {selectedProject.github && (
                      <a 
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono uppercase tracking-widest text-accent border border-accent/20 hover:border-accent hover:bg-accent/10 px-6 py-3 rounded-full transition-all duration-300"
                      >
                        GitHub Repo ↗
                      </a>
                    )}
                    {selectedProject.live && (
                      <a 
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono uppercase tracking-widest text-white border border-gray-800 hover:border-gray-600 hover:bg-white/5 px-6 py-3 rounded-full transition-all duration-300"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </motion.div>
                )}

                {selectedProject.alertCallout && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.38 }}
                    className="mb-12 p-6 rounded-2xl border border-accent/30 bg-accent/5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                  >
                    <span className="text-accent font-mono text-[11px] uppercase tracking-widest px-3 py-1 rounded-full border border-accent/40 shrink-0">
                      Production SLA
                    </span>
                    <p className="text-white font-sans text-sm md:text-base leading-relaxed">
                      {selectedProject.alertCallout}
                    </p>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 gap-20">
                  <div className="space-y-16">
                    {[
                      { title: "Problem", content: selectedProject.problem },
                      { title: "Approach & Architecture", content: selectedProject.approach },
                      ...(selectedProject.evaluation ? [{ title: "Agent Evaluation", content: selectedProject.evaluation }] : []),
                      ...(selectedProject.observability ? [{ title: "Observability & Reliability", content: selectedProject.observability }] : []),
                      { title: "Outcome & Scale", content: selectedProject.outcome }
                    ].map((section, idx) => (
                      <motion.section 
                        key={section.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                      >
                        <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent/80 mb-6 border-b border-gray-900 pb-2 w-fit">{section.title}</h4>
                        <p className="text-gray-300 font-light leading-relaxed text-lg md:text-xl">{section.content}</p>
                      </motion.section>
                    ))}
                  </div>

                  {selectedProject.hasArchitecture && (
                    <motion.section 
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                      className="bg-[#050505] border border-gray-900 rounded-3xl p-6 md:p-12 overflow-hidden"
                    >
                      <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-400 mb-12 border-b border-gray-900 pb-2 w-fit">System Architecture</h4>
                      <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
                        <div className="min-w-[600px]">
                          {getDiagram(selectedProject.id)}
                        </div>
                      </div>
                      <div className="md:hidden text-[10px] font-mono text-gray-500 mt-4 text-center">
                        Swipe to explore architecture →
                      </div>
                    </motion.section>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-gray-900 pt-16">
                    <motion.section
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                    >
                      <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-400 mb-8 border-b border-gray-900 pb-2 w-fit">Tech Stack</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.tech.map((tag, i) => (
                          <span key={i} className="text-[11px] font-mono text-gray-400 border border-gray-800 px-4 py-2 rounded-full hover:border-accent/30 hover:text-white transition-colors cursor-default bg-gray-900/30">{tag}</span>
                        ))}
                      </div>
                    </motion.section>
                    
                    <motion.section
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 }}
                    >
                      <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-400 mb-8 border-b border-gray-900 pb-2 w-fit">Impact Metrics</h4>
                      <ul className="space-y-4">
                        {selectedProject.metrics.map((metric, i) => (
                          <li key={i} className="text-sm md:text-base font-light text-gray-400 flex items-start gap-4 group">
                            <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors shrink-0" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </motion.section>
                  </div>
                </div>
              </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
