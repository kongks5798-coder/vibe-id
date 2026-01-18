"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import UploadZone from "@/components/UploadZone";
import Scanner from "@/components/Scanner";
import ResultCard from "@/components/ResultCard";
import type { ArchetypeData } from "@/data/archetypes";

type AppState = "landing" | "scanning" | "result";

export default function Home() {
  const [state, setState] = useState<AppState>("landing");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [archetype, setArchetype] = useState<ArchetypeData | null>(null);

  const handleImageSelect = useCallback(async (url: string, file: File) => {
    setImageUrl(url);
    setState("scanning");

    try {
      // Convert file to base64
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = async () => {
        const base64 = reader.result as string;

        // Call the analysis API
        const response = await fetch("/api/analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imageBase64: base64 }),
        });

        const data = await response.json();

        if (data.success && data.archetype) {
          setArchetype(data.archetype);
        }
      };
    } catch (error) {
      console.error("Analysis failed:", error);
    }
  }, []);

  const handleScanComplete = useCallback(() => {
    if (archetype) {
      setState("result");
    }
  }, [archetype]);

  const handleReset = useCallback(() => {
    setState("landing");
    setImageUrl("");
    setArchetype(null);
  }, []);

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {/* Landing State */}
        {state === "landing" && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col items-center justify-center px-6"
          >
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              {/* Logo */}
              <div className="inline-flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-[#171717] rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-medium tracking-tight">VIBE-ID</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-4 tesla-heading">
                Discover Your
                <br />
                <span className="text-gray-400">Aesthetic DNA</span>
              </h1>

              {/* Subheadline */}
              <p className="text-gray-500 text-lg max-w-md mx-auto">
                One selfie. Nine possibilities.
                <br />
                Find your visual identity through AI.
              </p>
            </motion.div>

            {/* Upload Zone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-md"
            >
              <UploadZone onImageSelect={handleImageSelect} />
            </motion.div>

            {/* Footer Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 text-center"
            >
              <p className="tesla-caption mb-4">9 AESTHETIC ARCHETYPES</p>
              <div className="flex flex-wrap justify-center gap-3 max-w-lg">
                {[
                  "Silent Luxury",
                  "Tech-Noir",
                  "Neo-Vintage",
                  "Pure Minimal",
                  "Urban Utility",
                  "Royal Heritage",
                  "Academic Chic",
                  "Cyber-Glitch",
                  "Solar Punk",
                ].map((name) => (
                  <span
                    key={name}
                    className="text-xs px-3 py-1.5 bg-gray-100 rounded-full text-gray-600"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Bottom Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="fixed bottom-8 text-xs text-gray-400 tracking-[0.2em]"
            >
              POWERED BY AI AESTHETIC ENGINE
            </motion.p>
          </motion.div>
        )}

        {/* Scanning State */}
        {state === "scanning" && (
          <Scanner imageUrl={imageUrl} onComplete={handleScanComplete} />
        )}

        {/* Result State */}
        {state === "result" && archetype && (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ResultCard
              archetype={archetype}
              userImage={imageUrl}
              onReset={handleReset}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
