"use client";

import { motion } from "framer-motion";
import { Heart, Zap, Palette, Home, Sparkles } from "lucide-react";
import { ARCHETYPES, type ArchetypeData } from "@/data/archetypes";
import {
  COMPATIBILITY_MATRIX,
  getCompatibilityDescription,
  getChemistryBreakdown
} from "@/data/compatibility";

interface CompatibilityResultProps {
  myArchetype: ArchetypeData;
  friendArchetype: ArchetypeData;
}

export default function CompatibilityResult({ myArchetype, friendArchetype }: CompatibilityResultProps) {
  const chemistry = getChemistryBreakdown(myArchetype.id, friendArchetype.id);
  const description = getCompatibilityDescription(chemistry.overall);

  const chemistryBars = [
    { label: "패션 궁합", value: chemistry.fashion, icon: <Sparkles size={14} />, color: "from-pink-500 to-rose-400" },
    { label: "라이프스타일", value: chemistry.lifestyle, icon: <Home size={14} />, color: "from-blue-500 to-cyan-400" },
    { label: "미적 감각", value: chemistry.aesthetic, icon: <Palette size={14} />, color: "from-purple-500 to-violet-400" },
    { label: "에너지", value: chemistry.energy, icon: <Zap size={14} />, color: "from-amber-500 to-yellow-400" },
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Main Score */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="text-center mb-8"
      >
        <div className="relative inline-block">
          {/* Animated ring */}
          <svg className="w-40 h-40">
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#e5e5e5"
              strokeWidth="8"
              className="dark:stroke-gray-700"
            />
            <motion.circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={440}
              initial={{ strokeDashoffset: 440 }}
              animate={{ strokeDashoffset: 440 - (440 * chemistry.overall) / 100 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="50%" stopColor="#FFD93D" />
                <stop offset="100%" stopColor="#6BCB77" />
              </linearGradient>
            </defs>
          </svg>

          {/* Score in center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-5xl font-bold dark:text-white"
            >
              {chemistry.overall}
            </motion.span>
            <span className="text-sm text-gray-500 dark:text-gray-400">% 궁합</span>
          </div>
        </div>

        {/* Level & Emoji */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-4"
        >
          <span className="text-4xl">{description.emoji}</span>
          <h3 className="text-xl font-bold mt-2 dark:text-white">{description.level}</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1">{description.messageKo}</p>
        </motion.div>
      </motion.div>

      {/* Archetype Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex items-center justify-center gap-4 mb-8"
      >
        <div className="text-center">
          <div className={`w-16 h-16 rounded-full ${myArchetype.cssClass} flex items-center justify-center text-2xl shadow-lg`}>
            {myArchetype.textColor === "light" ? "👤" : "👤"}
          </div>
          <p className="mt-2 text-sm font-medium dark:text-white">{myArchetype.nameKo}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">나</p>
        </div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
        >
          <Heart className="w-8 h-8 text-red-500" fill="#ef4444" />
        </motion.div>

        <div className="text-center">
          <div className={`w-16 h-16 rounded-full ${friendArchetype.cssClass} flex items-center justify-center text-2xl shadow-lg`}>
            {friendArchetype.textColor === "light" ? "👤" : "👤"}
          </div>
          <p className="mt-2 text-sm font-medium dark:text-white">{friendArchetype.nameKo}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">친구</p>
        </div>
      </motion.div>

      {/* Chemistry Breakdown */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700"
      >
        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
          케미 분석
        </h4>
        <div className="space-y-4">
          {chemistryBars.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 + idx * 0.1 }}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                <span className="text-sm font-bold dark:text-white">{item.value}%</span>
              </div>
              <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.value}%` }}
                  transition={{ duration: 0.8, delay: 1.8 + idx * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Fun Fact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2 }}
        className="mt-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl text-center"
      >
        <p className="text-sm text-gray-600 dark:text-gray-300">
          💡 <strong>{myArchetype.nameKo}</strong>와 <strong>{friendArchetype.nameKo}</strong>의 조합은
          {chemistry.overall >= 80 ? (
            <span className="text-green-500"> 최고의 스타일 파트너가 될 수 있어요!</span>
          ) : chemistry.overall >= 60 ? (
            <span className="text-blue-500"> 서로 다른 매력을 발견할 수 있어요!</span>
          ) : (
            <span className="text-purple-500"> 독특한 케미를 만들어낼 수 있어요!</span>
          )}
        </p>
      </motion.div>
    </div>
  );
}
