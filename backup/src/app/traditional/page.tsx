import Link from "next/link";

export default function TraditionalPortfolio() {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Prabhav Jain</h1>
          <p className="text-xl text-gray-600">AI Developer & Event Tech Innovator</p>
          <Link 
            href="/"
            className="inline-block mt-4 text-blue-600 hover:text-blue-800 underline"
          >
            ← Back to AI Portfolio
          </Link>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I am a third-year B.Tech student in Computer Science and Engineering (AIML specialization) 
            at Jain (Deemed-to-be) University, Bangalore. My professional identity is centered around 
            Automation Engineering and AI Workflow Design — specifically, building AI-powered automation 
            systems that eliminate friction from real-world processes.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Projects</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold">Tapnex - Event Technology Platform</h3>
              <p className="text-gray-700">
                Comprehensive event management solution with volunteer management, cashless access control, 
                vendor settlement, and real-time coordination features.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold">AI-Powered Frontend Code Generator</h3>
              <p className="text-gray-700">
                Web application that generates React and Tailwind CSS code from natural language prompts 
                using the Groq API for near-instant code generation.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold">Swadeshi Prompt Builder</h3>
              <p className="text-gray-700">
                Freemium web application helping users build high-quality prompts for AI models, 
                featuring &quot;Janata&quot; (free) and &quot;Maharaja&quot; (pro) tiers.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Programming Languages</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Python (Primary)</li>
                <li>• JavaScript</li>
                <li>• HTML / CSS</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Frameworks & Tools</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Django, Flask, FastAPI</li>
                <li>• React, Next.js</li>
                <li>• LangChain, RAG Systems</li>
                <li>• PostgreSQL, Supabase</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Leadership & Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">The Cognito Club - Lead/Coordinator</h3>
              <p className="text-gray-600">Jain (Deemed-to-be) University | 2023 - Present</p>
              <p className="text-gray-700">
                Founded and built The Cognito Club from scratch, organized 2+ major tech events 
                with 100+ attendees each, and conducted 10+ workshops on AI and automation.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">Under25 Fellow</h3>
              <p className="text-gray-600">July 2024 – July 2025</p>
              <p className="text-gray-700">
                Organized Under25 Day at Jain University with 250+ student attendees, 
                managing communication, planning, and cross-team coordination.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700">
            Feel free to reach out for collaboration opportunities, automation projects, 
            or discussions about AI and workflow optimization.
          </p>
          <div className="mt-4">
            <Link 
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Try the AI Portfolio Assistant
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}