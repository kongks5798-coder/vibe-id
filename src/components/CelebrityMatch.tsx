"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, RefreshCw } from "lucide-react";
import { getRandomCelebrityMatch, calculateLookalikeScore, type CelebrityProfile } from "@/data/celebrities";

interface CelebrityMatchProps {
  archetypeId: number;
}

export default function CelebrityMatch({ archetypeId }: CelebrityMatchProps) {
  const [celebrity, setCelebrity] = useState<CelebrityProfile | null>(null);
  const [score, setScore] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const celeb = getRandomCelebrityMatch(archetypeId);
    setCelebrity(celeb);
    setScore(calculateLookalikeScore(archetypeId, celeb));
  }, [archetypeId]);

  const handleRefresh = () => {
    setIsRevealed(false);
    setTimeout(() => {
      const celeb = getRandomCelebrityMatch(archetypeId);
      setCelebrity(celeb);
      setScore(calculateLookalikeScore(archetypeId, celeb));
      setIsRevealed(true);
    }, 300);
  };

  const handleReveal = () => {
    setIsRevealed(true);
  };

  if (!celebrity) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles size={20} className="text-amber-500" />
          <h3 className="text-lg font-medium dark:text-white">나와 닮은 셀럽 Vibe</h3>
        </div>
        {isRevealed && (
          <button
            onClick={handleRefresh}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <RefreshCw size={14} />
            <span>다시</span>
          </button>
        )}
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-5 border border-amber-100 dark:border-amber-800/30">
        {!isRevealed ? (
          // Unrevealed State
          <motion.button
            onClick={handleReveal}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-8 flex flex-col items-center gap-3"
          >
            <div className="text-5xl animate-bounce">🎁</div>
            <p className="text-amber-700 dark:text-amber-300 font-medium">터치해서 확인하기!</p>
            <p className="text-sm text-amber-600/70 dark:text-amber-400/70">당신과 Vibe가 닮은 셀럽은?</p>
          </motion.button>
        ) : (
          // Revealed State
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="text-center"
          >
            {/* Celebrity Avatar */}
            <div className="relative w-24 h-24 mx-auto mb-4">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-4xl shadow-lg">
                ⭐
              </div>
              {/* Score Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute -bottom-1 -right-1 bg-white dark:bg-gray-800 rounded-full px-2 py-1 shadow-md border border-amber-200 dark:border-amber-700"
              >
                <span className="text-sm font-bold text-amber-600 dark:text-amber-400">{score}%</span>
              </motion.div>
            </div>

            {/* Celebrity Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-xl font-bold dark:text-white">{celebrity.nameKo}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{celebrity.name}</p>
            </motion.div>

            {/* Vibe Score */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4"
            >
              <p className="text-sm text-amber-700 dark:text-amber-300">
                Vibe 유사도 <strong>{score}%</strong>
              </p>
              <div className="w-full h-2 bg-amber-200 dark:bg-amber-900/50 rounded-full mt-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${score}%` }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Traits */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 flex flex-wrap justify-center gap-2"
            >
              {celebrity.traits.map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-xs text-gray-600 dark:text-gray-300 border border-amber-200 dark:border-amber-700"
                >
                  {trait}
                </span>
              ))}
            </motion.div>

            {/* Fun Fact */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4 text-sm text-amber-600 dark:text-amber-400 italic"
            >
              &ldquo;{celebrity.funFact}&rdquo;
            </motion.p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
