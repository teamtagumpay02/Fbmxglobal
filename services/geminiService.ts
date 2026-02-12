
import { GoogleGenAI } from "@google/genai";

export const getYieldExplanation = async (userEarnings: number) => {
  // Defensive check for process.env to avoid ReferenceError: process is not defined
  const apiKey = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : undefined;

  if (!apiKey) {
    console.warn("FBMX Global: Gemini API Key is missing. AI insights will be disabled.");
    return "Optimize your portfolio by reinvesting rewards every 7 days for maximum compound effect.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `The user has earned $${userEarnings} in the FBMX Global Web3 ecosystem. Provide a short, motivating 1-sentence tip on how they can maximize their yield through compounding or referrals. Keep it crypto-savvy and encouraging.`,
    });
    
    return response.text || "Keep growing your team to unlock higher matching bonuses!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Compound your daily rewards to leverage the power of exponential growth!";
  }
};
