"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowLeft, Sun, Star, Shirt, Palette, AlertCircle, Share2 } from "lucide-react";
import { ARCHETYPES } from "@/data/archetypes";
import { getDailyFortune, getFortuneMessage, type DailyFortune } from "@/data/fortune";
import { getMyResult } from "@/utils/resultStorage";
import ThemeToggle from "@/components/ThemeToggle";

export default function FortunePage() {
  const [fortune, setFortune] = useState<DailyFortune | null>(null);
  const [userArchetypeId, setUserArchetypeId] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const myResult = getMyResult();
    if (myResult) {
      setUserArchetypeId(myResult.archetypeId);
      setFortune(getDailyFortune(myResult.archetypeId));
    }
  }, []);

  const userArchetype = userArchetypeId ? ARCHETYPES.find((a) => a.id === userArchetypeId) : null;

  const handleShare = () => {
    if (!fortune || !userArchetype) return;
    const today = new Date().toLocaleDateString("ko-KR", { month: "long", day: "numeric" });
    const shareText = `📅 ${today} 나의 스타일 운세\n\n💫 운세: ${fortune.luckKo} (${fortune.overall}점)\n🎨 행운의 컬러: ${fortune.colorKo}\n👔 행운의 아이템: ${fortune.itemKo}\n\n나도 확인하기 👉 https://vibe-id.vercel.app/fortune`;
    navigator.clipboard.writeText(shareText);
    alert("운세가 복사되었습니다!");
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F9F7] dark:bg-[#0a0a0a]">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <ThemeToggle />

      <div className="min-h-screen flex flex-col items-center px-6 py-12">
        {/* Header */}
        <Link
          href="/"
          className="absolute top-4 left-4 flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={18} />
          <span className="text-sm">홈으로</span>
        </Link>

        {/* Logo */}
        <div className="inline-flex items-center gap-2 mb-8">
          <div className="w-10 h-10 bg-[#171717] dark:bg-white rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white dark:text-[#171717]" />
          </div>
          <span className="text-2xl font-medium tracking-tight dark:text-white">VIBE-ID</span>
        </div>

        {/* No result case */}
        {!userArchetypeId && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="text-6xl mb-4">🔮</div>
            <h1 className="text-2xl font-bold mb-4 dark:text-white">오늘의 스타일 운세</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              먼저 VIBE-ID 테스트를 완료해주세요!
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#171717] dark:bg-white text-white dark:text-[#171717] rounded-lg"
            >
              <Sparkles size={18} />
              <span>테스트하러 가기</span>
            </Link>
          </motion.div>
        )}

        {/* Fortune Display */}
        {fortune && userArchetype && (
          <>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="text-5xl mb-4">🔮</div>
              <h1 className="text-2xl font-bold dark:text-white">오늘의 스타일 운세</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                {new Date().toLocaleDateString("ko-KR", { month: "long", day: "numeric", weekday: "long" })}
              </p>
              <p className="text-sm text-amber-600 dark:text-amber-400 mt-1">
                {userArchetype.nameKo}의 오늘 운세
              </p>
            </motion.div>

            {/* Main Fortune Score */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-44 h-44 mb-8"
            >
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="88"
                  cy="88"
                  r="80"
                  fill="none"
                  stroke="#fef3c7"
                  strokeWidth="12"
                  className="dark:stroke-gray-700"
                />
                <motion.circle
                  cx="88"
                  cy="88"
                  r="80"
                  fill="none"
                  stroke="url(#fortuneGradient)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={502}
                  initial={{ strokeDashoffset: 502 }}
                  animate={{ strokeDashoffset: 502 - (502 * fortune.overall) / 100 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                />
                <defs>
                  <linearGradient id="fortuneGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#EF4444" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl mb-1">{fortune.emoji}</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-3xl font-bold dark:text-white"
                >
                  {fortune.overall}
                </motion.span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{fortune.luckKo}</span>
              </div>
            </motion.div>

            {/* Fortune Message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-sm"
            >
              {getFortuneMessage(fortune)}
            </motion.p>

            {/* Fortune Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="w-full max-w-md space-y-4"
            >
              {/* Lucky Color */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-amber-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                    <Palette size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">행운의 컬러</p>
                    <p className="text-lg font-bold dark:text-white">{fortune.colorKo}</p>
                  </div>
                </div>
              </div>

              {/* Lucky Item */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-amber-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                    <Shirt size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">행운의 아이템</p>
                    <p className="text-lg font-bold dark:text-white">{fortune.itemKo}</p>
                  </div>
                </div>
              </div>

              {/* Avoid Item */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-red-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-rose-500 flex items-center justify-center">
                    <AlertCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">오늘은 피하세요</p>
                    <p className="text-lg font-bold dark:text-white">{fortune.avoidKo}</p>
                  </div>
                </div>
              </div>

              {/* Tip */}
              <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <Star size={20} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800 dark:text-amber-200">{fortune.tip}</p>
                </div>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-8 flex gap-4"
            >
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-6 py-3 bg-[#171717] dark:bg-white text-white dark:text-[#171717] rounded-lg"
              >
                <Share2 size={18} />
                <span className="font-medium">공유하기</span>
              </button>
              <Link
                href="/"
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white rounded-lg"
              >
                <span className="font-medium">홈으로</span>
              </Link>
            </motion.div>

            {/* Tomorrow hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-8 text-sm text-gray-400 dark:text-gray-500"
            >
              내일 다시 확인하세요! 매일 운세가 바뀝니다 ✨
            </motion.p>
          </>
        )}
      </div>
    </main>
  );
}
