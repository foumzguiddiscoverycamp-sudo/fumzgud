
import { GoogleGenAI } from "@google/genai";

// فحص وجود المفتاح وتأمين كائن process
const getApiKey = () => {
  try {
    return (typeof process !== 'undefined' && process.env?.API_KEY) || '';
  } catch {
    return '';
  }
};

export const getDesertTips = async (language: 'en' | 'fr'): Promise<string> => {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    return language === 'en' 
      ? "Welcome to Foum Zguid! Remember to drink plenty of water and respect the desert nature."
      : "Bienvenue à Foum Zguid ! Pensez à boire beaucoup d'eau et à respecter la nature du désert.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const prompt = language === 'en' 
      ? "As a desert travel expert for Foum Zguid Discovery Camp, give 3 short, essential tips for someone visiting the Sahara for the first time. Keep it friendly and professional."
      : "En tant qu'expert du voyage dans le désert pour Foum Zguid Discovery Camp, donnez 3 conseils essentiels et courts pour quelqu'un qui visite le Sahara pour la première fois. Restez amical et professionnel.";

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        maxOutputTokens: 200,
        temperature: 0.7
      }
    });

    return response.text || (language === 'en' ? "Bring water, wear sunscreen, and respect the dunes." : "Apportez de l'eau, portez de la crème solaire et respectez les dunes.");
  } catch (error) {
    console.error("Gemini Error:", error);
    return language === 'en' ? "Enjoy the magical dunes of Chegaga!" : "Profitez des dunes magiques de Chegaga !";
  }
};
