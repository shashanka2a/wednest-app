'use client';

import { GoogleGenAI, Type } from "@google/genai";
import { BudgetPlan } from '../types';

const getAiClient = () => {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found. Please set NEXT_PUBLIC_GEMINI_API_KEY or GEMINI_API_KEY environment variable.");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateBudgetPlan = async (city: string, budget: string, guestCount: string): Promise<BudgetPlan> => {
  const ai = getAiClient();
  
  const prompt = `
    I am planning a wedding in ${city}, India with a total budget of ₹${budget} for ${guestCount} guests.
    Act as a professional Indian Wedding Planner for Tier-2/Tier-3 cities.
    Provide a realistic budget allocation breakdown.
    
    Strictly Output JSON with this schema:
    {
      "totalBudget": "string (formatted with commas)",
      "summary": "string (a warm, encouraging 2-sentence summary tailored to the city)",
      "allocation": [
        { "category": "string", "amount": "string", "tips": "string (1 short tip for saving money in this category)" }
      ]
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            totalBudget: { type: Type.STRING },
            summary: { type: Type.STRING },
            allocation: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  category: { type: Type.STRING },
                  amount: { type: Type.STRING },
                  tips: { type: Type.STRING }
                }
              }
            }
          }
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as BudgetPlan;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};