
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ServerConfiguration, Category } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateConfigurationSummary = async (config: ServerConfiguration): Promise<string> => {
  const softwareInfo = config[Category.SOFTWARE].id !== 'sw-none' 
      ? `- Software: ${config[Category.SOFTWARE].label} (${config[Category.SOFTWARE].description})`
      : '- Software: None (Clean Install)';

  const prompt = `
    Based on the following cloud server configuration, generate a creative server name and a professional, brief summary of its ideal use case.
    The summary should be concise (2-3 sentences) and highlight the strengths of this particular build, considering the hardware and any pre-installed software.
    Format the output as a simple string, with the name first, followed by a newline, and then the summary.

    Configuration:
    - CPU: ${config[Category.CPU].label} (${config[Category.CPU].description})
    - RAM: ${config[Category.RAM].label} (${config[Category.RAM].description})
    - Storage: ${config[Category.STORAGE].label} (${config[Category.STORAGE].description})
    - OS: ${config[Category.OS].label} (${config[Category.OS].description})
    ${softwareInfo}

    Example Output:
    RetailReady Powerhouse
    Engineered for retail operations, this server combines robust processing power with a pre-configured Retail Suite. It's an all-in-one solution for managing inventory, point-of-sale transactions, and customer data with high efficiency and reliability.
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating summary with Gemini API:", error);
    return "Error: Could not generate a summary for this configuration.";
  }
};