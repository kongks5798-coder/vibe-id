"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { toPng } from "html-to-image";
import { Download, Share2, RotateCcw } from "lucide-react";
import type { ArchetypeData } from "@/data/archetypes";

interface ResultCardProps {
  archetype: ArchetypeData;
  userImage: string;
  onReset: () => void;
}

export default function ResultCard({ archetype, userImage, onReset }: ResultCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!cardRef.current) return;

    try {
      const dataUrl = await toPng(cardRef.current, {
        quality: 1,
        pixelRatio: 2,
      });

      const link = document.createElement("a");
      link.download = `vibe-id-${archetype.name.toLowerCase().replace(/\s+/g, "-")}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Failed to generate image:", error);
    }
  };

  const handleShare = async () => {
    if (!cardRef.current) return;

    try {
      const dataUrl = await toPng(cardRef.current, {
        quality: 1,
        pixelRatio: 2,
      });

      // Convert data URL to blob
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      const file = new File([blob], "vibe-id-result.png", { type: "image/png" });

      if (navigator.share && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: `My VIBE-ID: ${archetype.name}`,
          text: `I'm a ${archetype.name}! ${archetype.narrative}`,
          files: [file],
        });
      } else {
        // Fallback: copy to clipboard or download
        handleDownload();
      }
    } catch (error) {
      console.error("Failed to share:", error);
      handleDownload();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#F9F9F7]">
      {/* Result Card - 9:16 Ratio for Instagram Stories */}
      <motion.div
        ref={cardRef}
        className={`relative w-full max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl card-reveal ${archetype.cssClass}`}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Top Section - Branding */}
        <div className="absolute top-0 left-0 right-0 p-6">
          <div className={`flex justify-between items-start ${archetype.textColor === "light" ? "text-white" : "text-black"}`}>
            <div>
              <p className="text-xs font-medium tracking-[0.3em] opacity-60">YOUR AESTHETIC DNA</p>
              <h1 className="text-2xl font-medium tracking-tight mt-1">VIBE-ID</h1>
            </div>
            <div className="text-right">
              <p className="text-xs font-mono opacity-60">#{String(archetype.id).padStart(2, "0")}</p>
            </div>
          </div>
        </div>

        {/* Center Section - User Image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square">
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20">
            <img
              src={userImage}
              alt="Your photo"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute -inset-4 rounded-full border border-white/10" />
          <div className="absolute -inset-8 rounded-full border border-white/5" />
        </div>

        {/* Bottom Section - Archetype Info */}
        <div className={`absolute bottom-0 left-0 right-0 p-6 ${archetype.textColor === "light" ? "text-white" : "text-black"}`}>
          {/* Archetype Name */}
          <div className="text-center mb-6">
            <p className="text-xs font-medium tracking-[0.3em] opacity-60 mb-2">YOUR ARCHETYPE</p>
            <h2 className="text-3xl font-medium tracking-tight">{archetype.name}</h2>
            <p className="text-sm opacity-70 mt-1">{archetype.nameKo}</p>
          </div>

          {/* Narrative */}
          <p className={`text-sm text-center opacity-80 mb-6 italic ${archetype.textColor === "light" ? "text-white/90" : "text-black/90"}`}>
            &ldquo;{archetype.narrative}&rdquo;
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            {[
              { label: "MODERN", value: archetype.metrics.modernityIndex },
              { label: "SHARP", value: archetype.metrics.sharpness },
              { label: "HARMONY", value: archetype.metrics.harmony },
              { label: "UNIQUE", value: archetype.metrics.uniqueness },
            ].map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-lg font-medium">{metric.value}</div>
                <div className="text-[8px] tracking-[0.1em] opacity-50">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Keywords */}
          <div className="flex flex-wrap justify-center gap-2">
            {archetype.keywords.map((keyword) => (
              <span
                key={keyword}
                className={`text-[10px] px-2 py-1 rounded-full tracking-wider uppercase ${
                  archetype.textColor === "light"
                    ? "bg-white/10 text-white/80"
                    : "bg-black/10 text-black/80"
                }`}
              >
                {keyword}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-current/10 flex justify-between items-center">
            <p className="text-[10px] tracking-[0.2em] opacity-40">VIBE-ID.IO</p>
            <p className="text-[10px] tracking-[0.1em] opacity-40">
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-6 py-3 bg-[#171717] text-white rounded-lg hover:bg-[#2a2a2a] transition-colors"
        >
          <Download size={18} />
          <span className="text-sm font-medium tracking-wide">SAVE</span>
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-6 py-3 bg-[#171717] text-white rounded-lg hover:bg-[#2a2a2a] transition-colors"
        >
          <Share2 size={18} />
          <span className="text-sm font-medium tracking-wide">SHARE</span>
        </button>

        <button
          onClick={onReset}
          className="flex items-center gap-2 px-6 py-3 border border-[#171717] text-[#171717] rounded-lg hover:bg-[#171717] hover:text-white transition-colors"
        >
          <RotateCcw size={18} />
          <span className="text-sm font-medium tracking-wide">RETRY</span>
        </button>
      </motion.div>

      {/* Archetype Details (Below Card) */}
      <motion.div
        className="mt-12 max-w-md text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-lg font-medium mb-3">About {archetype.name}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{archetype.narrativeKo}</p>
        <p className="mt-4 text-xs text-gray-400 italic">Visual DNA: {archetype.visualDNA}</p>
      </motion.div>
    </div>
  );
}
