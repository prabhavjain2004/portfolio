"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between p-6 md:p-12 relative overflow-hidden selection:bg-accent selection:text-black">
      
      {/* Top Nav / Meta */}
      <div className="flex justify-between items-start z-10 font-mono text-xs uppercase tracking-widest mt-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <span className="block text-gray-400">Location</span>
          <span className="block mt-1">Bengaluru, IN</span>
        </motion.div>
      </div>

      {/* Center massive typography */}
      <div className="flex flex-col items-center justify-center flex-grow z-10 w-full relative">
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[18vw] md:text-[15vw] leading-[0.8] tracking-tighter text-center relative"
        >
          <span className="italic block -ml-[5vw] md:-ml-[10vw]">PRABHAV</span>
          <span className="block ml-[5vw] md:ml-[10vw]">JAIN</span>
        </motion.h1>

        {/* Floating Accent Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute right-10 bottom-20 md:right-32 md:bottom-32 text-accent font-mono text-xs uppercase tracking-[0.3em] rotate-90 origin-right"
        >
          Agentic AI Engineer
        </motion.div>
      </div>

      {/* Bottom info */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10 border-t border-gray-900 pt-8"
      >
        <div className="md:col-span-2">
          <p className="text-xl md:text-2xl font-light text-gray-400 max-w-xl leading-relaxed">
            I engineer <span className="text-white italic font-serif">reliable autonomous systems</span> that survive real-world production. No demos. Just code that ships.
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end justify-end text-sm font-mono uppercase tracking-widest gap-2">
          <a href="/PrabhavResume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors pb-1 border-b border-white hover:border-accent text-white">Download CV ↓</a>
          <div className="h-2"></div>
          <a href="#projects" className="hover:text-accent transition-colors pb-1 border-b border-transparent hover:border-accent">Index of Work ↗</a>
          <a href="#contact" className="hover:text-accent transition-colors pb-1 border-b border-transparent hover:border-accent">Initiate Contact ↗</a>
        </div>
      </motion.div>
      
    </section>
  );
}
