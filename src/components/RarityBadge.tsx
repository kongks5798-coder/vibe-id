"use client";

import { motion } from "framer-motion";
import { Sparkles, Crown, Gem, Star, Circle } from "lucide-react";
import { getRarityInfo, getSameArchetypeCount, getTotalAnalyzed, type RarityTier } from "@/data/compatibility";

interface RarityBadgeProps {
  archetypeId: number;
  showCount?: boolean;
  size?: "sm" | "md" | "lg";
}

const tierIcons: Record<RarityTier, React.ReactNode> = {
  LEGENDARY: <Crown size={14} />,
  EPIC: <Gem size={14} />,
  RARE: <Sparkles size={14} />,
  UNCOMMON: <Star size={14} />,
  COMMON: <Circle size={14} />,
};

export default function RarityBadge({ archetypeId, showCount = true, size = "md" }: RarityBadgeProps) {
  const rarity = getRarityInfo(archetypeId);
  const sameCount = getSameArchetypeCount(archetypeId);
  const totalCount = getTotalAnalyzed();

  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2",
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Rarity Badge */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
        className={`inline-flex items-center gap-1.5 ${sizeClasses[size]} ${rarity.bgColor} text-white font-bold rounded-full shadow-lg`}
      >
        {tierIcons[rarity.tier]}
        <span>{rarity.label}</span>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-sm text-gray-500 dark:text-gray-400"
      >
        {rarity.description}
      </motion.p>

      {/* Count Stats */}
      {showCount && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500"
        >
          <span>
            전체 <strong className="text-gray-600 dark:text-gray-300">{totalCount.toLocaleString()}</strong>명 중
          </span>
          <span>
            <strong className={rarity.color}>{sameCount.toLocaleString()}</strong>명이 같은 Vibe
          </span>
        </motion.div>
      )}
    </div>
  );
}
