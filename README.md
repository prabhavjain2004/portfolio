# 🤖 AI-Powered Portfolio - Prabhav Jain

An intelligent, AI-powered portfolio website that uses RAG (Retrieval-Augmented Generation) to answer questions about your experience, projects, and skills in real-time.

![Tech Stack](https://img.shields.io/badge/Next.js-15-black)
![Python](https://img.shields.io/badge/Python-3.11-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Latest-green)
![LangChain](https://img.shields.io/badge/LangChain-Latest-orange)

---

## ✨ Features

### 🎯 AI Chat Interface
- **Natural Language Queries**: Ask anything about Prabhav's projects, skills, or experience
- **Instant Responses**: Powered by Groq's ultra-fast LLM inference
- **Context-Aware**: Uses RAG to retrieve relevant information from knowledge base
- **Beautiful UI**: Smooth animations with Framer Motion and Shadcn/ui components

### 📄 Traditional Portfolio
- Clean, professional layout with project showcase
- Skills organized by categories
- Contact and social links
- Fully responsive design

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Python 3.11+
- Groq API key ([Get one here](https://console.groq.com/keys))

### 1. Install Dependencies

```bash
# Install Node dependencies
npm install

# Set up Python virtual environment (Windows)
python -m venv venv
venv\Scripts\activate

# Install Python dependencies
pip install -r requirements.txt
```

### 2. Configure Environment

Create `.env.local` with your Groq API key:

```env
GROQ_API_KEY=your_groq_api_key_here
```

### 3. Add Your Data

Edit these files with your information:
- `api/data/about_me.md` - Your bio, skills, experience
- `api/data/projects.md` - Your project details

### 4. Run Locally

**Terminal 1 - Backend:**
```bash
cd api
uvicorn index:app --reload --port 8000
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

Visit **http://localhost:3000** and start chatting! 🎉

---

## 📁 Project Structure

```
my-portfolio/
├── api/                    # Python FastAPI backend
│   ├── index.py           # API endpoints
│   ├── rag_logic.py       # LangChain RAG logic
│   └── data/              # Knowledge base (edit these!)
├── src/app/               # Next.js pages
│   ├── page.tsx          # AI chat interface
│   └── traditional/      # Traditional portfolio
├── src/components/ui/    # Shadcn/ui components
├── requirements.txt      # Python dependencies
└── vercel.json          # Deployment config
```

---

## 🎨 Tech Stack

**Frontend:**
- Next.js 15, React, TypeScript
- Tailwind CSS, Shadcn/ui
- Framer Motion

**Backend:**
- FastAPI, LangChain
- FAISS vector database
- Groq API (LLM)
- HuggingFace embeddings

---

## 📚 Documentation

- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Frontend setup details
- **[BACKEND_SETUP.md](BACKEND_SETUP.md)** - Backend setup & testing
- **[vercel.json](vercel.json)** - Deployment configuration

---

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Import to [Vercel](https://vercel.com)
3. Add `GROQ_API_KEY` environment variable
4. Deploy! (Both frontend and backend deploy automatically)

---

## 🤝 About

Built by **Prabhav Jain** - AI Developer & Event Tech Innovator

**Made with ❤️ using Next.js, Python, and AI**


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
"# portfolio" 
