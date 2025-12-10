"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { askAI } from "@/lib/api";
import { Sparkles } from "lucide-react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const promptStarters = [
    "What is Tapnex?",
    "Explain his work with RAG",
    "Show me his backend projects",
    "Tell me about his AI experience"
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse(null);

    try {
      const answer = await askAI(query);
      setResponse(answer);
    } catch (error) {
      setResponse("Sorry, something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePromptStarter = (prompt: string) => {
    setQuery(prompt);
    // Auto-submit after setting the query
    setTimeout(() => {
      const form = document.querySelector('form');
      if (form) {
        form.requestSubmit();
      }
    }, 100);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black font-sans overflow-hidden">
      {/* Background gradient and grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black"></div>
      
      {/* Radial gradient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* Main content */}
      <motion.main 
        className="relative z-10 flex flex-col items-center justify-center px-6 py-20 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header */}
        <motion.h1 
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Prabhav Jain
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-zinc-400 mb-12 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          AI Developer & Event Tech Innovator
        </motion.p>

        {/* Search input */}
        <motion.form 
          onSubmit={handleSubmit}
          className="w-full max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            <Input 
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask me anything about my projects, skills, or experience..."
              className="h-14 text-lg bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-purple-500 focus:ring-purple-500/20 backdrop-blur-sm pr-12"
              disabled={isLoading}
            />
            <Button 
              type="submit"
              size="icon"
              className="absolute right-2 top-2 h-10 w-10 bg-purple-600 hover:bg-purple-700 text-white"
              disabled={isLoading || !query.trim()}
            >
              <Sparkles className="h-5 w-5" />
            </Button>
          </div>
        </motion.form>

        {/* Prompt starters */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {promptStarters.map((prompt, index) => (
            <Button 
              key={index}
              variant="outline" 
              onClick={() => handlePromptStarter(prompt)}
              disabled={isLoading}
              className="bg-zinc-900/50 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-600 backdrop-blur-sm transition-all"
            >
              {prompt}
            </Button>
          ))}
        </motion.div>

        {/* Loading State */}
        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-2xl mb-8"
            >
              <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
                <CardContent className="pt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <Skeleton className="h-4 w-4 rounded-full bg-zinc-700" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-full bg-zinc-700" />
                      <Skeleton className="h-4 w-5/6 bg-zinc-700" />
                      <Skeleton className="h-4 w-4/6 bg-zinc-700" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Response Display */}
          {response && !isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-2xl mb-8"
            >
              <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="h-4 w-4 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-zinc-300 leading-relaxed whitespace-pre-wrap">
                        {response}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Traditional portfolio link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link 
            href="/traditional"
            className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm underline underline-offset-4"
          >
            Or, view the traditional portfolio →
          </Link>
        </motion.div>
      </motion.main>
    </div>
  );
}