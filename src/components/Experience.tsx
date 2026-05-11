const experiences = [
  {
    company: "AegisOps Techlabs",
    role: "Agentic AI Engineer Intern",
    dates: "Nov 2025 – Apr 2026",
    bullets: [
      "Architected LangGraph-based multi-agent workflows end-to-end, owning agent architecture from design to deployment.",
      "Developed Python/FastAPI backend with REST and SSE interfaces enabling real-time agent execution and streaming outputs.",
      "Implemented production RAG pipelines using pgvector and OpenAI embeddings for multi-step reasoning.",
      "Designed multi-tier memory architecture (session state, working memory, long-term context) enabling persistent reasoning.",
      "Instrumented agent observability using Langfuse and OpenMeter; implemented guardrails and retry logic for production reliability."
    ]
  },
  {
    company: "TapNex (NexGen FC)",
    role: "AI Engineer Intern",
    dates: "Jul 2025 – Nov 2025",
    bullets: [
      "Designed and shipped 4 production platforms (React, Node.js, PostgreSQL) for ticketing, registration, and automated systems.",
      "Served as sole engineer across product scoping, frontend, backend, and deployment.",
      "Executed Razorpay and Cashfree integrations, resulting in a 70% reduction in manual processing overhead."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-24">
          <h2 className="text-xs font-mono uppercase tracking-widest text-accent mb-4">Experience</h2>
          <h3 className="text-5xl md:text-7xl font-serif italic tracking-tight">Timeline.</h3>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group border-t border-gray-900 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 hover:bg-[#050505] transition-colors px-4 -mx-4 rounded-2xl">
              
              <div className="md:col-span-3">
                <span className="text-xs font-mono uppercase tracking-widest text-gray-500 group-hover:text-accent transition-colors">
                  {exp.dates}
                </span>
              </div>
              
              <div className="md:col-span-4">
                <h3 className="text-3xl font-serif text-white mb-2">{exp.company}</h3>
                <h4 className="text-sm font-sans text-gray-400">{exp.role}</h4>
              </div>
              
              <div className="md:col-span-5">
                <ul className="space-y-4">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm font-sans text-gray-400 leading-relaxed relative pl-4">
                      <span className="absolute left-0 top-2 w-1 h-1 bg-gray-800 rounded-full" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
