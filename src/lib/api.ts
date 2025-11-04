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
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ChatResponse = await response.json();
    return data.answer;
  } catch (error) {
    console.error('Error calling AI API:', error);
    return "I'm sorry, I'm having trouble connecting to the AI service right now. Please try again later or check out the traditional portfolio page.";
  }
}
