"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F7] dark:bg-[#0a0a0a] py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            <span className="text-sm">돌아가기</span>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#171717] dark:bg-white rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white dark:text-[#171717]" />
            </div>
            <span className="text-xl font-medium dark:text-white">VIBE-ID</span>
          </div>

          <h1 className="text-3xl font-medium dark:text-white">개인정보처리방침</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            최종 업데이트: 2026년 1월 18일
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4 dark:text-white">1. 수집하는 정보</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              VIBE-ID는 서비스 제공을 위해 다음 정보를 처리합니다:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 dark:text-gray-300">
              <li>업로드된 이미지: AI 분석을 위해 일시적으로 처리되며, 분석 완료 후 즉시 삭제됩니다.</li>
              <li>분석 결과: 사용자의 브라우저에만 저장되며, 서버에 저장되지 않습니다.</li>
              <li>이용 통계: 익명화된 서비스 이용 통계 (분석 횟수 등)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4 dark:text-white">2. 정보의 이용 목적</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              수집된 정보는 다음 목적으로만 사용됩니다:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 dark:text-gray-300">
              <li>AI 기반 미적 페르소나 분석 서비스 제공</li>
              <li>서비스 품질 개선 및 통계 분석</li>
              <li>사용자 경험 향상</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4 dark:text-white">3. 정보의 보유 및 삭제</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              업로드된 이미지는 분석 목적으로만 일시적으로 처리되며,
              분석이 완료되면 즉시 서버에서 삭제됩니다.
              분석 결과는 사용자의 브라우저 세션에만 저장되며,
              브라우저를 닫으면 자동으로 삭제됩니다.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4 dark:text-white">4. 제3자 제공</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              VIBE-ID는 사용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.
              단, 다음의 경우에는 예외로 합니다:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 dark:text-gray-300">
              <li>법령에 의해 요구되는 경우</li>
              <li>서비스 제공에 필요한 경우 (OpenAI API를 통한 이미지 분석)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4 dark:text-white">5. 사용자 권리</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              사용자는 언제든지 다음 권리를 행사할 수 있습니다:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 dark:text-gray-300">
              <li>서비스 이용 중단</li>
              <li>개인정보 처리에 대한 문의</li>
              <li>개인정보 삭제 요청</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4 dark:text-white">6. 연락처</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              개인정보 처리에 관한 문의사항은 아래로 연락해 주세요:
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              이메일:{" "}
              <a
                href="mailto:contact@fieldnine.io"
                className="text-[#171717] dark:text-white underline"
              >
                contact@fieldnine.io
              </a>
            </p>
          </section>
        </div>

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#171717] dark:bg-white text-white dark:text-[#171717] rounded-lg hover:bg-[#2a2a2a] dark:hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">메인으로 돌아가기</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
