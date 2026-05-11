"use client";

import { useRef, useState } from "react";

const stats = [
  { value: "8K+", label: "Concurrent Scale" },
  { value: "70%", label: "Manual Reduction" },
  { value: "04", label: "Live Platforms" },
  { value: "02", label: "Industry Engagements" },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    setMousePos({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    });
  };

  return (
    <section id="about" className="py-32 px-6 md:px-12 border-t border-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        
        <div className="flex flex-col justify-between">
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={() => setIsHovering(true)}
            onTouchEnd={() => setIsHovering(false)}
            className="mb-12 relative w-full aspect-[4/5] md:aspect-video lg:aspect-[3/4] overflow-hidden bg-[#050505] md:cursor-none rounded-3xl"
          >
            {/* The Grayscale Base */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/portrait.jpg" 
              alt="Prabhav Jain" 
              className="object-cover w-full h-full filter grayscale contrast-125 opacity-60 mix-blend-luminosity pointer-events-none"
            />

            {/* The Colorful Overlay with Spotlight Mask */}
            <div 
              className="absolute inset-0 z-10 transition-opacity duration-300 pointer-events-none"
              style={{
                opacity: isHovering ? 1 : 0,
                maskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
                WebkitMaskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/portrait.jpg" 
                alt="Prabhav Jain" 
                className="object-cover w-full h-full pointer-events-none"
              />
            </div>

            <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
              <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Fig 01. — Agentic Systems</span>
            </div>
          </div>

          <h2 className="text-xs font-mono uppercase tracking-widest text-accent mb-8">Foundation</h2>
          
          <p className="text-3xl md:text-5xl font-serif leading-tight tracking-tight text-white mb-8">
            I don't just build agents; I build <span className="italic">stable autonomous systems</span> with a focus on observability and production reliability.
          </p>
          
          <p className="text-lg font-light text-gray-400 font-sans max-w-md mb-12">
            Currently engineering multi-agent logic at <span className="text-white">AegisOps</span> and architecting scalable AI platforms at <span className="text-white">TapNex</span>.
          </p>

          <div className="border-t border-gray-900 pt-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-accent mb-6">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-serif text-white">Jain (Deemed-to-be University)</h3>
                <p className="text-sm font-mono text-gray-500 uppercase tracking-wider">B.Tech, CSE — AIML | 2023 – Present</p>
              </div>
              <div>
                <h3 className="text-lg font-serif text-gray-300">St. Joseph's Convent School</h3>
                <p className="text-sm font-mono text-gray-500 uppercase tracking-wider">High School Diploma, Math & CS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px bg-gray-900 h-fit self-start sticky top-24">
          {stats.map((stat, index) => (
            <div key={index} className="bg-black p-8 md:p-12 flex flex-col justify-center aspect-square hover:bg-[#0a0a0a] transition-colors">
              <span className="text-5xl md:text-7xl font-serif italic text-white mb-4">
                {stat.value}
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
