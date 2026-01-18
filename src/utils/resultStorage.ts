// ═══════════════════════════════════════════════════════════════════════════
// VIBE-ID: Result Storage & Sharing System
// ═══════════════════════════════════════════════════════════════════════════

import type { ArchetypeData } from "@/data/archetypes";

export interface StoredResult {
  id: string;
  archetypeId: number;
  timestamp: number;
  confidence?: number;
}

// Generate a short unique ID for sharing
export const generateResultId = (): string => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  let result = "";
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// Save result to localStorage
export const saveResult = (archetype: ArchetypeData, confidence?: number): string => {
  const id = generateResultId();
  const result: StoredResult = {
    id,
    archetypeId: archetype.id,
    timestamp: Date.now(),
    confidence,
  };

  // Save to localStorage
  localStorage.setItem(`vibe-id-result-${id}`, JSON.stringify(result));

  // Also save as "my" result for comparison
  localStorage.setItem("vibe-id-my-result", JSON.stringify(result));

  return id;
};

// Get result by ID
export const getResultById = (id: string): StoredResult | null => {
  try {
    const stored = localStorage.getItem(`vibe-id-result-${id}`);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error("Failed to get result:", e);
  }
  return null;
};

// Get my saved result
export const getMyResult = (): StoredResult | null => {
  try {
    const stored = localStorage.getItem("vibe-id-my-result");
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error("Failed to get my result:", e);
  }
  return null;
};

// Generate share URL
export const getShareUrl = (resultId: string): string => {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://vibe-id.vercel.app";
  return `${baseUrl}/compare/${resultId}`;
};

// Generate compare URL (when friend has their result too)
export const getCompareUrl = (myId: string, friendId: string): string => {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://vibe-id.vercel.app";
  return `${baseUrl}/compare/${myId}/${friendId}`;
};
