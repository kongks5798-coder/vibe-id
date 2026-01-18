"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowLeft, Trophy, RotateCcw, Share2 } from "lucide-react";
import { ARCHETYPES } from "@/data/archetypes";
import { getRandomQuestions, calculateGameResult, type StyleQuestion, type GameResult } from "@/data/styleGame";
import { getMyResult } from "@/utils/resultStorage";
import ThemeToggle from "@/components/ThemeToggle";

type GameState = "intro" | "playing" | "result";

export default function StyleGamePage() {
  const [gameState, setGameState] = useState<GameState>("intro");
  const [questions, setQuestions] = useState<StyleQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: number; choiceId: string }[]>([]);
  const [result, setResult] = useState<GameResult | null>(null);
  const [userArchetypeId, setUserArchetypeId] = useState<number | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  useEffect(() => {
    const myResult = getMyResult();
    if (myResult) {
      setUserArchetypeId(myResult.archetypeId);
    }
    setQuestions(getRandomQuestions());
  }, []);

  const startGame = () => {
    setQuestions(getRandomQuestions());
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setSelectedAnswer(null);
    setGameState("playing");
  };

  const handleAnswer = (choiceId: string) => {
    setSelectedAnswer(choiceId);

    setTimeout(() => {
      const newAnswers = [...answers, { questionId: questions[currentQuestion].id, choiceId }];
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        // Game finished
        if (userArchetypeId) {
          const gameResult = calculateGameResult(userArchetypeId, newAnswers);
          setResult(gameResult);
        }
        setGameState("result");
      }
    }, 500);
  };

  const handleShare = () => {
    if (!result) return;
    const shareText = `나의 Vibe 이해도: ${result.percentage}%! 🎯\n${result.messageKo}\n\n너도 테스트해봐 👉 https://vibe-id.vercel.app/game`;
    navigator.clipboard.writeText(shareText);
    alert("결과가 복사되었습니다!");
  };

  const userArchetype = userArchetypeId ? ARCHETYPES.find((a) => a.id === userArchetypeId) : null;

  return (
    <main className="min-h-screen bg-[#F9F9F7] dark:bg-[#0a0a0a]">
      <ThemeToggle />

      <AnimatePresence mode="wait">
        {/* Intro Screen */}
        {gameState === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
          >
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

            {/* Game Intro */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <div className="text-6xl mb-4">🎮</div>
              <h1 className="text-3xl font-bold mb-4 dark:text-white">스타일 밸런스 게임</h1>
              <p className="text-gray-500 dark:text-gray-400 max-w-md">
                5개의 스타일 질문에 답하고
                <br />
                당신이 자신의 Vibe를 얼마나 이해하는지 확인하세요!
              </p>
            </motion.div>

            {!userArchetypeId ? (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <p className="text-amber-600 dark:text-amber-400 mb-4">
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
            ) : (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                {userArchetype && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    당신의 Vibe: <strong className="text-[#171717] dark:text-white">{userArchetype.nameKo}</strong>
                  </p>
                )}
                <button
                  onClick={startGame}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl text-lg font-bold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
                >
                  게임 시작! 🚀
                </button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Playing Screen */}
        {gameState === "playing" && questions[currentQuestion] && (
          <motion.div
            key={`question-${currentQuestion}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
          >
            {/* Progress */}
            <div className="absolute top-4 left-4 right-4 flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <ArrowLeft size={18} />
              </Link>
              <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {currentQuestion + 1}/{questions.length}
              </span>
            </div>

            {/* Question */}
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm mb-4">
                {questions[currentQuestion].category}
              </span>
              <h2 className="text-2xl font-bold dark:text-white">
                {questions[currentQuestion].questionKo}
              </h2>
            </div>

            {/* Options */}
            <div className="w-full max-w-md space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(questions[currentQuestion].optionA.id)}
                className={`w-full p-6 rounded-2xl border-2 text-left transition-all ${
                  selectedAnswer === questions[currentQuestion].optionA.id
                    ? "border-purple-500 bg-purple-50 dark:bg-purple-900/30"
                    : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-purple-300"
                }`}
              >
                <span className="text-2xl mb-2 block">A</span>
                <p className="font-medium dark:text-white">
                  {questions[currentQuestion].optionA.descriptionKo}
                </p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(questions[currentQuestion].optionB.id)}
                className={`w-full p-6 rounded-2xl border-2 text-left transition-all ${
                  selectedAnswer === questions[currentQuestion].optionB.id
                    ? "border-pink-500 bg-pink-50 dark:bg-pink-900/30"
                    : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-pink-300"
                }`}
              >
                <span className="text-2xl mb-2 block">B</span>
                <p className="font-medium dark:text-white">
                  {questions[currentQuestion].optionB.descriptionKo}
                </p>
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Result Screen */}
        {gameState === "result" && result && (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
          >
            <Link
              href="/"
              className="absolute top-4 left-4 flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <ArrowLeft size={18} />
              <span className="text-sm">홈으로</span>
            </Link>

            {/* Result Card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="text-center mb-8"
            >
              <div className="text-6xl mb-4">
                {result.percentage >= 80 ? "🏆" : result.percentage >= 60 ? "🎯" : result.percentage >= 40 ? "💫" : "🌱"}
              </div>

              {/* Score Circle */}
              <div className="relative w-40 h-40 mx-auto mb-6">
                <svg className="w-full h-full transform -rotate-90">
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
                    stroke="url(#gameGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={440}
                    initial={{ strokeDashoffset: 440 }}
                    animate={{ strokeDashoffset: 440 - (440 * result.percentage) / 100 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                  />
                  <defs>
                    <linearGradient id="gameGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-4xl font-bold dark:text-white"
                  >
                    {result.percentage}%
                  </motion.span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">이해도</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                {result.correctCount}/{result.totalQuestions} 정답!
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{result.messageKo}</p>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-3 w-full max-w-xs"
            >
              <button
                onClick={startGame}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium"
              >
                <RotateCcw size={18} />
                <span>다시 도전</span>
              </button>

              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white rounded-lg font-medium"
              >
                <Share2 size={18} />
                <span>결과 공유</span>
              </button>

              <Link
                href="/"
                className="flex items-center justify-center gap-2 px-6 py-3 text-gray-500 dark:text-gray-400"
              >
                <span>메인으로 돌아가기</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
