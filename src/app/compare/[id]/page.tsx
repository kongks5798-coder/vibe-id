"use client";

import { useEffect, useState, useCallback, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowLeft, Users } from "lucide-react";
import { ARCHETYPES, type ArchetypeData } from "@/data/archetypes";
import { getResultById, saveResult, getMyResult, type StoredResult } from "@/utils/resultStorage";
import UploadZone from "@/components/UploadZone";
import Scanner from "@/components/Scanner";
import CompatibilityResult from "@/components/CompatibilityResult";
import ThemeToggle from "@/components/ThemeToggle";

type PageState = "loading" | "invite" | "scanning" | "result";

export default function ComparePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const friendResultId = resolvedParams.id;

  const [state, setState] = useState<PageState>("loading");
  const [friendResult, setFriendResult] = useState<StoredResult | null>(null);
  const [friendArchetype, setFriendArchetype] = useState<ArchetypeData | null>(null);
  const [myArchetype, setMyArchetype] = useState<ArchetypeData | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  // Load friend's result on mount
  useEffect(() => {
    // Check if we already have our own result
    const myResult = getMyResult();
    let hasMyResult = false;

    if (myResult) {
      const myArch = ARCHETYPES.find((a) => a.id === myResult.archetypeId);
      if (myArch) {
        setMyArchetype(myArch);
        hasMyResult = true;
      }
    }

    // Try to load friend's result from URL param
    // In a real app, this would fetch from a database
    // For now, we'll decode from the ID
    const friendIdNum = parseInt(friendResultId.slice(-1)) || 1;
    const friendArch = ARCHETYPES.find((a) => a.id === friendIdNum) || ARCHETYPES[0];
    setFriendArchetype(friendArch);
    setFriendResult({ id: friendResultId, archetypeId: friendArch.id, timestamp: Date.now() });

    // If we have our result, go straight to comparison
    if (hasMyResult) {
      setState("result");
    } else {
      setState("invite");
    }
  }, [friendResultId]);

  const handleImageSelect = useCallback(async (url: string, file: File) => {
    setImageUrl(url);
    setState("scanning");

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = async () => {
        const base64 = reader.result as string;

        const response = await fetch("/api/analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imageBase64: base64 }),
        });

        const data = await response.json();

        if (data.success && data.archetype) {
          setMyArchetype(data.archetype);
          saveResult(data.archetype, data.confidence);
        }
      };
    } catch (error) {
      console.error("Analysis failed:", error);
    }
  }, []);

  const handleScanComplete = useCallback(() => {
    if (myArchetype) {
      setState("result");
    }
  }, [myArchetype]);

  if (state === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F9F7] dark:bg-[#0a0a0a]">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F9F9F7] dark:bg-[#0a0a0a]">
      <ThemeToggle />

      <AnimatePresence mode="wait">
        {/* Invite State - Friend hasn't tested yet */}
        {state === "invite" && friendArchetype && (
          <motion.div
            key="invite"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
          >
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

            {/* Friend's Challenge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <div className={`w-24 h-24 rounded-full ${friendArchetype.cssClass} mx-auto mb-4 flex items-center justify-center shadow-xl`}>
                <Users className={`w-10 h-10 ${friendArchetype.textColor === "light" ? "text-white" : "text-black"}`} />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">친구의 Vibe</p>
              <h2 className="text-2xl font-bold dark:text-white">{friendArchetype.name}</h2>
              <p className="text-gray-500 dark:text-gray-400">{friendArchetype.nameKo}</p>
            </motion.div>

            {/* Challenge Text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 dark:text-white">
                우리의 Vibe 궁합은?
              </h1>
              <p className="text-gray-500 dark:text-gray-400 max-w-md">
                친구가 당신과의 스타일 궁합을 확인하고 싶어해요!
                <br />
                셀카를 올려서 케미를 확인해보세요 ✨
              </p>
            </motion.div>

            {/* Upload Zone */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="w-full max-w-md"
            >
              <UploadZone onImageSelect={handleImageSelect} />
            </motion.div>
          </motion.div>
        )}

        {/* Scanning State */}
        {state === "scanning" && (
          <Scanner imageUrl={imageUrl} onComplete={handleScanComplete} />
        )}

        {/* Result State - Show Compatibility */}
        {state === "result" && myArchetype && friendArchetype && (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center py-12 px-6"
          >
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

            <h1 className="text-2xl font-bold mb-8 dark:text-white">Vibe 궁합 결과</h1>

            {/* Compatibility Result */}
            <CompatibilityResult
              myArchetype={myArchetype}
              friendArchetype={friendArchetype}
            />

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="mt-8 flex flex-col gap-3 w-full max-w-md"
            >
              <Link
                href="/"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#171717] dark:bg-white text-white dark:text-[#171717] rounded-lg hover:bg-[#2a2a2a] dark:hover:bg-gray-200 transition-colors"
              >
                <Sparkles size={18} />
                <span className="text-sm font-medium">나도 테스트하기</span>
              </Link>

              <button
                onClick={() => {
                  const shareText = `나와 친구의 Vibe 궁합: ${myArchetype.nameKo} x ${friendArchetype.nameKo} 🔥\n\n나도 테스트하기 👉 https://vibe-id.vercel.app`;
                  navigator.clipboard.writeText(shareText);
                  alert("공유 링크가 복사되었습니다!");
                }}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-[#171717] dark:border-gray-600 text-[#171717] dark:text-white rounded-lg hover:bg-[#171717] hover:text-white dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-sm font-medium">결과 공유하기</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
