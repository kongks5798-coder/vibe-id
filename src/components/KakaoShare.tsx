"use client";

import { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import type { ArchetypeData } from "@/data/archetypes";

declare global {
  interface Window {
    Kakao: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Share: {
        sendDefault: (options: object) => void;
      };
    };
  }
}

interface KakaoShareProps {
  archetype: ArchetypeData;
  resultUrl?: string;
}

export default function KakaoShare({ archetype, resultUrl }: KakaoShareProps) {
  useEffect(() => {
    // Load Kakao SDK
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js";
    script.async = true;
    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        // Using a placeholder key - replace with actual key in production
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY || "demo");
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleKakaoShare = () => {
    if (!window.Kakao?.Share) {
      // Fallback: Copy to clipboard
      const shareText = `나의 VIBE-ID: ${archetype.name} (${archetype.nameKo})\n\n"${archetype.narrative}"\n\n나도 테스트하기 👉 https://vibe-id.vercel.app`;
      navigator.clipboard.writeText(shareText);
      alert("공유 링크가 복사되었습니다!");
      return;
    }

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `나의 VIBE-ID: ${archetype.name}`,
        description: `"${archetype.narrative}" - ${archetype.nameKo}`,
        imageUrl: "https://vibe-id.vercel.app/og-image.png",
        link: {
          mobileWebUrl: resultUrl || "https://vibe-id.vercel.app",
          webUrl: resultUrl || "https://vibe-id.vercel.app",
        },
      },
      buttons: [
        {
          title: "나도 테스트하기",
          link: {
            mobileWebUrl: "https://vibe-id.vercel.app",
            webUrl: "https://vibe-id.vercel.app",
          },
        },
      ],
    });
  };

  return (
    <button
      onClick={handleKakaoShare}
      className="flex items-center gap-2 px-6 py-3 bg-[#FEE500] text-[#000000] rounded-lg hover:bg-[#FDD835] transition-colors"
    >
      <MessageCircle size={18} />
      <span className="text-sm font-medium tracking-wide">카카오톡</span>
    </button>
  );
}
