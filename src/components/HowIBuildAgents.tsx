"use client";

import { motion } from "framer-motion";

const phases = [
  {
    step: "01",
    name: "ORCHESTRATE",
    title: "Multi-Agent Systems",
    summary: "Structuring coordination across specialized agents rather than relying on monolithic prompts.",
    items: [
      "LangGraph workflows",
      "Supervisor / worker patterns",
      "Dynamic tool calling",
      "State-machine transitions",
      "Natural language intent routing"
    ]
  },
  {
    step: "02",
    name: "EVALUATE",
    title: "Measurable Evals",
    summary: "Making agent performance deterministic and quantifiable rather than relying on subjective gut checks.",
    items: [
      "LLM-as-Judge scoring",
      "Task success rate tracking",
      "Agent evaluation workflows",
      "Output quality verification",
      "Context-grounded consistency"
    ]
  },
  {
    step: "03",
    name: "OBSERVE",
    title: "Execution Visibility",
    summary: "Instrumenting agent execution paths to trace decisions, tool calls, and latency bottlenecks.",
    items: [
      "Langfuse integration",
      "End-to-end execution observability",
      "Full audit logging",
      "OpenMeter tracking",
      "Tool call & session inspection"
    ]
  },
  {
    step: "04",
    name: "RECOVER",
    title: "Production Reliability",
    summary: "Engineering resilience harnesses so failures trigger controlled recovery instead of catastrophic crashes.",
    items: [
      "Input & output guardrails",
      "Retry logic",
      "Timeout handling",
      "Failure recovery routines",
      "Controlled fallback responses"
    ]
  }
];

export default function HowIBuildAgents() {
  return (
    <section className="py-32 px-6 md:px-12 border-t border-gray-900 selection:bg-accent selection:text-black">
      <div className="max-w-6xl mx-auto">
        
        <div className="max-w-2xl mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-accent mb-4">Engineering Framework</h2>
          <h3 className="text-5xl md:text-7xl font-serif italic tracking-tight mb-6">How I Build Agents.</h3>
          <p className="text-base md:text-lg font-light text-gray-400 leading-relaxed">
            Taking autonomous systems from architecture to production requires more than prompt tuning. It demands an engineering loop centered on orchestration, evaluation, observability, and recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-900 rounded-3xl overflow-hidden border border-gray-900">
          {phases.map((phase, idx) => (
            <motion.div 
              key={phase.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-black p-8 md:p-10 flex flex-col justify-between hover:bg-[#070707] transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-900">
                  <span className="font-mono text-xs text-accent uppercase tracking-widest">
                    {phase.step} — {phase.name}
                  </span>
                </div>

                <h4 className="text-xl font-serif text-white mb-3 group-hover:text-accent transition-colors">
                  {phase.title}
                </h4>

                <p className="text-xs font-sans text-gray-400 leading-relaxed mb-6">
                  {phase.summary}
                </p>
              </div>

              <div className="border-t border-gray-900 pt-6 mt-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block mb-3">Capabilities</span>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="text-xs font-mono text-gray-400 flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent/60 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
