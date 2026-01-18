// ═══════════════════════════════════════════════════════════════════════════
// VIBE-ID: Archetype Compatibility Matrix & Rarity System
// ═══════════════════════════════════════════════════════════════════════════

// Archetype IDs:
// 1: Silent Luxury, 2: Tech-Noir, 3: Neo-Vintage, 4: Pure Minimal
// 5: Urban Utility, 6: Royal Heritage, 7: Academic Chic, 8: Cyber-Glitch, 9: Solar Punk

// Compatibility matrix (0-100)
// Higher = better chemistry
export const COMPATIBILITY_MATRIX: Record<number, Record<number, number>> = {
  1: { 1: 85, 2: 45, 3: 78, 4: 92, 5: 38, 6: 88, 7: 75, 8: 25, 9: 42 }, // Silent Luxury
  2: { 1: 45, 2: 90, 3: 35, 4: 55, 5: 82, 6: 30, 7: 40, 8: 95, 9: 65 }, // Tech-Noir
  3: { 1: 78, 2: 35, 3: 88, 4: 60, 5: 45, 6: 85, 7: 92, 8: 28, 9: 55 }, // Neo-Vintage
  4: { 1: 92, 2: 55, 3: 60, 4: 95, 5: 70, 6: 65, 7: 80, 8: 48, 9: 72 }, // Pure Minimal
  5: { 1: 38, 2: 82, 3: 45, 4: 70, 5: 90, 6: 35, 7: 55, 8: 78, 9: 85 }, // Urban Utility
  6: { 1: 88, 2: 30, 3: 85, 4: 65, 5: 35, 6: 92, 7: 88, 8: 22, 9: 40 }, // Royal Heritage
  7: { 1: 75, 2: 40, 3: 92, 4: 80, 5: 55, 6: 88, 7: 90, 8: 35, 9: 62 }, // Academic Chic
  8: { 1: 25, 2: 95, 3: 28, 4: 48, 5: 78, 6: 22, 7: 35, 8: 92, 9: 75 }, // Cyber-Glitch
  9: { 1: 42, 2: 65, 3: 55, 4: 72, 5: 85, 6: 40, 7: 62, 8: 75, 9: 88 }, // Solar Punk
};

// Compatibility descriptions based on score ranges
export const getCompatibilityDescription = (score: number): { level: string; emoji: string; message: string; messageKo: string } => {
  if (score >= 90) {
    return {
      level: "PERFECT MATCH",
      emoji: "💫",
      message: "You're aesthetic soulmates!",
      messageKo: "완벽한 미적 소울메이트! 같은 감성을 공유해요",
    };
  } else if (score >= 80) {
    return {
      level: "GREAT CHEMISTRY",
      emoji: "🔥",
      message: "Your vibes complement each other beautifully",
      messageKo: "서로의 스타일이 아름답게 조화를 이뤄요",
    };
  } else if (score >= 65) {
    return {
      level: "GOOD BALANCE",
      emoji: "✨",
      message: "Different but harmonious - you balance each other",
      messageKo: "다르지만 조화로워요. 서로를 보완하는 관계",
    };
  } else if (score >= 50) {
    return {
      level: "INTERESTING MIX",
      emoji: "🎭",
      message: "Opposites can attract - creative tension!",
      messageKo: "반대가 끌린다! 창의적 긴장감이 있는 조합",
    };
  } else if (score >= 35) {
    return {
      level: "CHALLENGING",
      emoji: "⚡",
      message: "Very different aesthetics - but that's exciting!",
      messageKo: "매우 다른 감성 - 하지만 그게 매력!",
    };
  } else {
    return {
      level: "OPPOSITE POLES",
      emoji: "🌓",
      message: "Complete opposites - a rare and unique combination",
      messageKo: "완전한 반대 - 희귀하고 독특한 조합",
    };
  }
};

// Chemistry aspects breakdown
export const getChemistryBreakdown = (id1: number, id2: number) => {
  const baseScore = COMPATIBILITY_MATRIX[id1]?.[id2] || 50;

  // Generate varied sub-scores around the base
  const variance = () => Math.floor(Math.random() * 20) - 10;

  return {
    overall: baseScore,
    fashion: Math.min(100, Math.max(0, baseScore + variance())),
    lifestyle: Math.min(100, Math.max(0, baseScore + variance())),
    aesthetic: Math.min(100, Math.max(0, baseScore + variance())),
    energy: Math.min(100, Math.max(0, baseScore + variance())),
  };
};

// ═══════════════════════════════════════════════════════════════════════════
// Rarity System
// ═══════════════════════════════════════════════════════════════════════════

// Simulated distribution (based on realistic personality distributions)
// More common archetypes have higher percentages
export const ARCHETYPE_DISTRIBUTION: Record<number, number> = {
  1: 8.2,   // Silent Luxury - Rare (aspirational)
  2: 11.5,  // Tech-Noir - Uncommon
  3: 14.8,  // Neo-Vintage - Common (trending)
  4: 18.2,  // Pure Minimal - Very Common (popular)
  5: 15.3,  // Urban Utility - Common
  6: 4.5,   // Royal Heritage - Very Rare
  7: 12.8,  // Academic Chic - Uncommon
  8: 6.2,   // Cyber-Glitch - Rare
  9: 8.5,   // Solar Punk - Rare
};

export type RarityTier = "LEGENDARY" | "EPIC" | "RARE" | "UNCOMMON" | "COMMON";

export interface RarityInfo {
  tier: RarityTier;
  percentile: number;
  label: string;
  labelKo: string;
  color: string;
  bgColor: string;
  description: string;
}

export const getRarityInfo = (archetypeId: number): RarityInfo => {
  const distribution = ARCHETYPE_DISTRIBUTION[archetypeId] || 10;

  // Calculate percentile (lower distribution = higher percentile/rarer)
  const percentile = 100 - distribution;

  if (distribution <= 5) {
    return {
      tier: "LEGENDARY",
      percentile,
      label: "LEGENDARY",
      labelKo: "레전더리",
      color: "text-amber-500",
      bgColor: "bg-gradient-to-r from-amber-500 to-yellow-400",
      description: `상위 ${distribution.toFixed(1)}%의 희귀한 Vibe`,
    };
  } else if (distribution <= 8) {
    return {
      tier: "EPIC",
      percentile,
      label: "EPIC",
      labelKo: "에픽",
      color: "text-purple-500",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      description: `상위 ${distribution.toFixed(1)}%의 특별한 Vibe`,
    };
  } else if (distribution <= 12) {
    return {
      tier: "RARE",
      percentile,
      label: "RARE",
      labelKo: "레어",
      color: "text-blue-500",
      bgColor: "bg-gradient-to-r from-blue-500 to-cyan-400",
      description: `상위 ${distribution.toFixed(1)}%의 독특한 Vibe`,
    };
  } else if (distribution <= 15) {
    return {
      tier: "UNCOMMON",
      percentile,
      label: "UNCOMMON",
      labelKo: "언커먼",
      color: "text-green-500",
      bgColor: "bg-gradient-to-r from-green-500 to-emerald-400",
      description: `상위 ${distribution.toFixed(1)}%`,
    };
  } else {
    return {
      tier: "COMMON",
      percentile,
      label: "COMMON",
      labelKo: "커먼",
      color: "text-gray-500",
      bgColor: "bg-gradient-to-r from-gray-400 to-gray-500",
      description: `많은 사람들이 공유하는 Vibe`,
    };
  }
};

// Get total analyzed count (simulated, increases over time)
export const getTotalAnalyzed = (): number => {
  const baseCount = 12847;
  const daysSinceLaunch = Math.floor((Date.now() - new Date("2026-01-15").getTime()) / (1000 * 60 * 60 * 24));
  const growth = daysSinceLaunch * Math.floor(Math.random() * 50 + 100);
  return baseCount + growth;
};

// Get count of users with same archetype
export const getSameArchetypeCount = (archetypeId: number): number => {
  const total = getTotalAnalyzed();
  const percentage = ARCHETYPE_DISTRIBUTION[archetypeId] || 10;
  return Math.floor(total * (percentage / 100));
};
