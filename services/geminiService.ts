
import { GoogleGenAI } from "@google/genai";

export const getYieldExplanation = async (userEarnings: number) => {
  try {
    // FIX: Always use new GoogleGenAI({ apiKey: process.env.API_KEY }) as per strict guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // FIX: Generate content using the recommended 'gemini-3-flash-preview' for basic text tasks
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `The user has earned $${userEarnings} in the FBMX Global Web3 ecosystem. Provide a short, motivating 1-sentence tip on how they can maximize their yield through compounding or referrals. Keep it crypto-savvy and encouraging.`,
    });
    
    // FIX: Access response content via the .text property directly (not a method)
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Compound your daily rewards to leverage the power of exponential growth!";
  }
};
