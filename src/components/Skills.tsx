"use client";

import { useState } from "react";
import { ExternalLink, Eye, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Agents",
    skills: ["LangGraph", "LangChain", "OpenAI API", "Gemini", "A2A Communication", "FSM", "ReAct Pattern", "Plan-and-Execute", "Tool Calling", "Mem0", "Human-in-the-Loop", "LangGraph Checkpointers"]
  },
  {
    title: "Vector & Reliability",
    skills: ["pgvector", "ChromaDB", "Pinecone", "Langfuse", "LangSmith", "Guardrails", "Retry Logic", "LLM-as-Judge", "OpenMeter"]
  },
  {
    title: "Backend & Infra",
    skills: ["FastAPI", "NestJS", "Node.js", "Python", "TypeScript", "Docker", "GCP", "PostgreSQL", "Redis", "BullMQ", "Kafka"]
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Flutter", "Framer Motion"]
  }
];

const certifications = [
  { 
    name: "Python for Data Science & AI", 
    issuer: "IBM", 
    date: "2025", 
    link: "https://www.coursera.org/account/accomplishments/verify/2JJIZDPOHARX" 
  },
  { 
    name: "Introduction to Generative AI", 
    issuer: "Google Cloud", 
    date: "2024", 
    link: "https://www.skills.google/public_profiles/a9e22907-8d35-44b0-b305-7d1966b24777/badges/13219041" 
  },
  { 
    name: "DevOps Essentials", 
    issuer: "IBM", 
    date: "2024", 
    link: "https://www.credly.com/badges/acff5f80-51e6-41dd-9ad3-fa297e197bdd/print" 
  },
  { 
    name: "British Council IELTS", 
    issuer: "British Council", 
    date: "2023", 
    image: "/British_council_certificate.jpeg" 
  },
  { 
    name: "Microsoft AI Skills Challenge", 
    issuer: "Microsoft Azure", 
    date: "2024", 
    image: "/microsoft ai skills challenge.jpeg" 
  }
];

export default function Skills() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="skills" className="py-32 px-6 md:px-12 border-t border-gray-900 selection:bg-accent selection:text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-accent mb-4">Technical Stack</h2>
          <h3 className="text-5xl md:text-7xl font-serif tracking-tight">Arsenal.</h3>
        </div>

        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="border-t border-gray-900 pt-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-6">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx} 
                      className="px-3 py-1 text-sm font-sans text-gray-400 border border-gray-800 rounded-full hover:text-white hover:border-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 border-t border-gray-900 pt-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-accent mb-8">Selected Credentials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {certifications.map((cert, idx) => (
                <div key={idx} className="group relative flex flex-col border-b border-gray-900 pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-white font-serif text-xl group-hover:text-accent transition-colors">{cert.name}</span>
                    <div className="flex gap-3">
                      {cert.link && (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {cert.image && (
                        <button onClick={() => setSelectedImage(cert.image!)} className="text-gray-500 hover:text-white transition-colors">
                          <Eye size={18} />
                        </button>
                      )}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{cert.issuer} — {cert.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors flex items-center gap-2 font-mono text-xs uppercase tracking-widest"
              >
                Close <X size={20} />
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={selectedImage} 
                alt="Certificate" 
                className="w-full h-auto rounded-lg shadow-2xl border border-gray-800"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
