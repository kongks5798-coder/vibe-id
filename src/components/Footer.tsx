"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white/50 backdrop-blur-sm dark:bg-gray-900/50 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-[#171717] dark:bg-white rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white dark:text-[#171717]" />
            </div>
            <span className="text-lg font-medium tracking-tight dark:text-white">VIBE-ID</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            AI Aesthetic Persona Analysis
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-8 mb-6 text-sm">
          <Link
            href="/privacy"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            개인정보처리방침
          </Link>
          <Link
            href="/terms"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            이용약관
          </Link>
          <a
            href="mailto:contact@fieldnine.io"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            문의하기
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 dark:text-gray-500">
          <p>© 2026 Field Nine Solutions. All rights reserved.</p>
          <p className="mt-1">
            Powered by GPT-4o Vision | Made with Tesla-style minimalism
          </p>
        </div>
      </div>
    </footer>
  );
}
