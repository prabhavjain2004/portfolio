// Client-side API utility to communicate with the FastAPI backend

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
    // Create an AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    const response = await fetch('/api/chat', {
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