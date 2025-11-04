"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink, Mail, Linkedin, Twitter } from "lucide-react";

export default function TraditionalPortfolio() {
  // Placeholder data - you'll replace this with your actual data
  const projects = [
    {
      title: "Project Name 1",
      description: "A brief description of your project. Explain what problem it solves and what makes it unique.",
      techStack: ["Python", "FastAPI", "React", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/project1",
      liveUrl: "https://project1.com",
    },
    {
      title: "Project Name 2",
      description: "Another exciting project description. Highlight the key features and technologies used.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/yourusername/project2",
      liveUrl: "https://project2.com",
    },
    {
      title: "Project Name 3",
      description: "Describe your third project here. Focus on the impact and technical challenges you solved.",
      techStack: ["LangChain", "Groq", "Pinecone", "FastAPI"],
      githubUrl: "https://github.com/yourusername/project3",
      liveUrl: null, // No live demo
    },
  ];

  const skills = {
    "Languages": ["Python", "TypeScript", "JavaScript", "SQL"],
    "Frontend": ["React", "Next.js", "Tailwind CSS", "Shadcn/ui"],
    "Backend": ["FastAPI", "Node.js", "Express", "Django"],
    "AI/ML": ["LangChain", "OpenAI", "Groq", "RAG", "Vector DBs"],
    "Tools & Others": ["Git", "Docker", "PostgreSQL", "MongoDB", "Vercel"],
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
      {/* Back to AI Chat Link */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/">
          <Button variant="outline" className="bg-zinc-900/50 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white backdrop-blur-sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to AI Chat
          </Button>
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <section className="mb-20 pt-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Prabhav Jain
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light">
            AI Developer & Event Tech Innovator building intelligent solutions
          </p>
        </section>

        {/* About Me Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
            <CardContent className="pt-6">
              <p className="text-zinc-300 leading-relaxed text-lg">
                [Your bio goes here. Talk about your background, what drives you, your passion for AI and technology, 
                and what you're currently working on. Make it personal and engaging. Mention your journey, key achievements, 
                and what makes you unique as a developer.]
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg mt-4">
                [Add another paragraph if needed. Perhaps mention your education, notable experiences, or future goals.]
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={index} className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:border-zinc-700 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-zinc-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-white">Skills</h2>
          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <Badge 
                          key={index}
                          variant="outline"
                          className="bg-zinc-800/50 border-zinc-700 text-zinc-300 hover:bg-zinc-700"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-white">Contact</h2>
          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
            <CardContent className="pt-6">
              <p className="text-zinc-300 mb-6 text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="outline"
                  className="bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                  asChild
                >
                  <a href="mailto:your.email@example.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                  asChild
                >
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                  asChild
                >
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                  asChild
                >
                  <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                    <Twitter className="mr-2 h-4 w-4" />
                    Twitter
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center text-zinc-500 text-sm pb-10">
          <p>© {new Date().getFullYear()} Prabhav Jain. Built with Next.js, Tailwind CSS, and Shadcn/ui.</p>
        </footer>
      </div>
      </div>
    </div>
  );
}
