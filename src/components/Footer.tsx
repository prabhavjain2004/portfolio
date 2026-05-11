import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-gray-900 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-lg font-serif text-white">Prabhav Jain</span>
          <span className="text-xs font-mono uppercase tracking-widest text-gray-600">Agentic AI Engineer</span>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="https://github.com/prabhavjain2004" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <Github size={20} strokeWidth={1.5} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/prabhavjain2004" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <Linkedin size={20} strokeWidth={1.5} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
        
      </div>
    </footer>
  );
}
