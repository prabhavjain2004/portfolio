// Client-side API utility to communicate with the FastAPI backend
// CRITICAL: Read the public environment variable set on Vercel
const API_BASE_URL = process.env.NEXT_PUBLIC_RAG_API_URL;

/**
 * Response interface from the chat API
 */
interface ChatResponse {
  answer: string;
}

/**
 * Sends a question to the AI backend and returns the answer
 * @param question - The user's question about Prabhav's portfolio
 * @returns The AI-generated answer
 */
export async function askAI(question: string): Promise<string> {
  try {
    // 1. Check for API Base URL Configuration
    if (!API_BASE_URL) {
      // In production, this error guides the developer to set the ENV var
      throw new Error('RAG API URL is not configured. Please set NEXT_PUBLIC_RAG_API_URL.');
    }

    // Create an AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    // 2. Use the absolute external URL provided by the environment variable
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('API error:', errorData);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ChatResponse = await response.json();
    
    if (!data.answer || data.answer.trim() === '') {
      throw new Error('Empty response from API');
    }
    
    return data.answer;
  } catch (error) {
    console.error('Error calling AI API:', error);
    
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        return "The request timed out. The AI might be taking too long to respond. Please try again with a simpler question or check out the traditional portfolio page.";
      }
      console.error('Error details:', error.message);
    }
    
    return "I'm sorry, I'm having trouble connecting to the AI service right now. Please try again later or check out the traditional portfolio page.";
  }
}