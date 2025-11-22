import { GoogleGenAI } from "@google/genai";
import { ChatMessage, ProfileData } from "../types";
import { PROFILE_DATA } from "../constants";

// Initialize Gemini Client
// Note: process.env.API_KEY is assumed to be injected by the environment/framework
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const GENERATION_CONFIG = {
  systemInstruction: `You are a helpful and professional AI assistant for Tilak Kadlaskar's portfolio website. 
  Your goal is to answer questions about Tilak based on his profile data.
  
  Here is Tilak's Profile Data:
  ${JSON.stringify(PROFILE_DATA, null, 2)}
  
  Guidelines:
  1. Be polite, professional, and concise.
  2. Only answer questions related to Tilak's professional background, skills, projects, and experience.
  3. If you don't know the answer based on the provided data, simply say you don't have that information.
  4. Encourage the user to contact Tilak for more details if they are interested in hiring him.
  5. Keep responses relatively short (under 100 words) unless detailed technical explanation is required.
  `,
};

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, but I cannot function without a valid API Key. Please configure the environment.";
  }

  try {
    // Construct the chat history for the model
    // We filter out any failed messages or system errors from the UI history if necessary
    // For simplicity, we just send the new message with the system instruction config
    
    // Since the @google/genai SDK manages chat history in a Chat session, 
    // we will use a single turn generation here for simplicity in this stateless service function,
    // or we could maintain a chat session instance if we had a stateful service.
    // For this implementation, to keep it stateless and simple, we will just send the prompt with context instructions.
    // A better approach for long conversations is ai.chats.create, but that requires persisting the 'chat' object.
    
    // Let's try to use the chat model for better context retention if we were persisting the object.
    // Given the constraint of this function signature, we will use generateContent with the full context every time 
    // OR (better) use a Chat session if we can assume short sessions.
    
    // Let's use generateContent for the single response pattern which is robust for simple assistants.
    // We append the history to the prompt manually or use the Chat API if we want to keep state.
    
    // REVISED STRATEGY: Use ai.chats.create effectively.
    // We will map the UI history to the API history format.
    
    const chatHistory = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: GENERATION_CONFIG,
      history: chatHistory
    });

    const response = await chat.sendMessage({ message: newMessage });
    
    return response.text || "I didn't get a response. Please try again.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request. Please try again later.";
  }
};
