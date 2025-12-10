// Client-side API utility to communicate with the FastAPI backend
const API_BASE_URL = process.env.NEXT_PUBLIC_RAG_API_URL;

interface ChatResponse {
  answer: string;
}

export async function askAI(question: string): Promise<string> {
  try {
    if (!API_BASE_URL) {
      throw new Error('RAG API URL is not configured. Please set NEXT_PUBLIC_RAG_API_URL.');
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

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