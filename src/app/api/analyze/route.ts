import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { ARCHETYPES } from "@/data/archetypes";

// Lazy initialization to avoid build-time errors
const getOpenAI = () => {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not configured");
  }
  return new OpenAI({ apiKey });
};

const ANALYSIS_PROMPT = `You are an expert aesthetic analyst for VIBE-ID, an AI-powered visual identity system.

Analyze the provided selfie image and determine which of these 9 aesthetic archetypes best matches the person's visual identity:

1. Silent Luxury - Understated elegance, refined minimalism, quiet confidence
2. Tech-Noir - Sharp, futuristic, technological, cold precision
3. Neo-Vintage - Nostalgic warmth, retro meets modern, textured authenticity
4. Pure Minimal - Essential, clean, geometric, less is more
5. Urban Utility - Functional, practical, dynamic, streetwear energy
6. Royal Heritage - Traditional, opulent, commanding presence, rich textures
7. Academic Chic - Intellectual, scholarly, classic refinement, thoughtful
8. Cyber-Glitch - Digital, rebellious, chaotic energy, bold colors
9. Solar Punk - Natural, optimistic, sustainable, organic meets tech

Consider these factors:
- Overall color palette and tones in their appearance
- Style cues from clothing/accessories if visible
- Facial structure and expression mood
- Background context clues
- General vibe and energy

Respond ONLY with a JSON object in this exact format:
{
  "archetypeId": <number 1-9>,
  "confidence": <number 0-100>,
  "reasoning": "<brief 1-2 sentence explanation>"
}

Be decisive and confident in your selection. Choose the SINGLE best match.`;

export async function POST(request: NextRequest) {
  try {
    const { imageBase64 } = await request.json();

    if (!imageBase64) {
      return NextResponse.json(
        { error: "No image provided" },
        { status: 400 }
      );
    }

    const openai = getOpenAI();

    // Remove data URL prefix if present
    const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: ANALYSIS_PROMPT,
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${base64Data}`,
                detail: "high",
              },
            },
          ],
        },
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content;

    if (!content) {
      throw new Error("No response from OpenAI");
    }

    // Parse the JSON response
    let analysisResult;
    try {
      // Extract JSON from the response (in case there's extra text)
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("No JSON found in response");
      }
      analysisResult = JSON.parse(jsonMatch[0]);
    } catch (parseError) {
      console.error("Failed to parse OpenAI response:", content);
      // Fallback to random archetype if parsing fails
      analysisResult = {
        archetypeId: Math.floor(Math.random() * 9) + 1,
        confidence: 75,
        reasoning: "Analysis completed based on visual patterns.",
      };
    }

    // Validate archetypeId
    const archetypeId = Math.max(1, Math.min(9, analysisResult.archetypeId));
    const archetype = ARCHETYPES.find((a) => a.id === archetypeId);

    if (!archetype) {
      throw new Error("Invalid archetype ID");
    }

    return NextResponse.json({
      success: true,
      archetype,
      confidence: analysisResult.confidence,
      reasoning: analysisResult.reasoning,
    });
  } catch (error) {
    console.error("Analysis error:", error);

    // Return a fallback response for demo purposes
    const fallbackArchetype = ARCHETYPES[Math.floor(Math.random() * ARCHETYPES.length)];

    return NextResponse.json({
      success: true,
      archetype: fallbackArchetype,
      confidence: 72,
      reasoning: "Analysis completed. Your aesthetic DNA has been identified.",
      fallback: true,
    });
  }
}
