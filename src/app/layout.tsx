import type { Metadata } from "next";
import { Inter, Instrument_Serif, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const instrument = Instrument_Serif({ weight: "400", subsets: ["latin"], variable: "--font-instrument" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-mono" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prabhav.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prabhav Jain | Agentic AI Engineer & Architect",
    template: "%s | Prabhav Jain",
  },
  description:
    "Portfolio of Prabhav Jain, an Agentic AI Engineer specializing in production-grade multi-agent architectures, stateful LLM workflows, LangGraph, and full-stack autonomous systems.",
  keywords: [
    "Prabhav Jain",
    "Agentic AI Engineer",
    "AI Systems Architect",
    "LangGraph",
    "Multi-Agent Systems",
    "Autonomous Agents",
    "LLM Engineering",
    "CDAS.ai",
    "NestJS",
    "FastAPI",
    "TypeScript",
    "Python",
  ],
  authors: [{ name: "Prabhav Jain", url: "https://github.com/prabhavjain2004" }],
  creator: "Prabhav Jain",
  publisher: "Prabhav Jain",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Prabhav Jain | Agentic AI Engineer",
    description:
      "Building production-grade autonomous systems, multi-agent frameworks, and deterministic execution pipelines.",
    siteName: "Prabhav Jain Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prabhav Jain | Agentic AI Engineer",
    description:
      "Building production-grade autonomous systems, multi-agent frameworks, and deterministic execution pipelines.",
    creator: "@prabhavjain2004",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Prabhav Jain",
    jobTitle: "Agentic AI Engineer",
    url: siteUrl,
    sameAs: [
      "https://github.com/prabhavjain2004",
      "https://www.linkedin.com/in/prabhavjain2004",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Agentic AI Frameworks",
      "LangGraph",
      "NestJS",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "TypeScript",
      "Python",
    ],
    description:
      "Agentic AI Engineer building production-grade autonomous multi-agent systems and full-stack software architectures.",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${instrument.variable} ${spaceMono.variable} font-sans bg-black text-white antialiased md:cursor-none`}
      >
        {children}
      </body>
    </html>
  );
}
