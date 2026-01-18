"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function TermsPage() {
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

          <h1 className="text-3xl font-medium dark:text-white">이용약관</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            최종 업데이트: 2026년 1월 18일
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4 dark:text-white">1. 서비스 소개</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              VIBE-ID는 인공지능(AI)을 활용하여 사용자의 미적 페르소나를 분석하는 서비스입니다.
              사용자가 업로드한 셀피를 기반으로 9가지 미적 아키타입 중
              가장 적합한 유형을 추천해 드립니다.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4 dark:text-white">2. 서비스 이용</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              서비스 이용에 관한 사항:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 dark:text-gray-300">
              <li>본 서비스는 무료로 제공됩니다.</li>
              <li>서비스 이용을 위해 회원가입이 필요하지 않습니다.</li>
              <li>만 14세 이상의 사용자가 이용할 수 있습니다.</li>
              <li>AI 분석 결과는 참고용이며, 절대적인 기준이 아닙니다.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4 dark:text-white">3. 이용자의 의무</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              이용자는 다음 행위를 하여서는 안 됩니다:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 dark:text-gray-300">
              <li>타인의 사진을 무단으로 업로드하는 행위</li>
              <li>불법적인 목적으로 서비스를 이용하는 행위</li>
              <li>서비스의 정상적인 운영을 방해하는 행위</li>
              <li>부적절하거나 유해한 콘텐츠를 업로드하는 행위</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4 dark:text-white">4. 서비스 제공자의 책임</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              VIBE-ID는 다음 사항에 대해 책임지지 않습니다:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 dark:text-gray-300">
              <li>AI 분석 결과의 정확성 또는 완전성</li>
              <li>서비스 이용으로 인한 간접적 손해</li>
              <li>천재지변 등 불가항력으로 인한 서비스 중단</li>
              <li>이용자의 귀책사유로 인한 문제</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4 dark:text-white">5. 지적재산권</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              서비스와 관련된 모든 지적재산권은 Field Nine Solutions에 귀속됩니다.
              사용자가 업로드한 이미지에 대한 권리는 사용자에게 있으며,
              VIBE-ID는 서비스 제공 목적으로만 해당 이미지를 일시적으로 처리합니다.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4 dark:text-white">6. 서비스 변경 및 중단</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              VIBE-ID는 서비스 개선을 위해 사전 고지 없이 서비스 내용을 변경할 수 있습니다.
              단, 중요한 변경사항은 서비스 내 공지를 통해 안내드립니다.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4 dark:text-white">7. 분쟁 해결</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              본 약관에 관한 분쟁은 대한민국 법률에 따라 해결되며,
              관할 법원은 서울중앙지방법원으로 합니다.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4 dark:text-white">8. 연락처</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              서비스 이용에 관한 문의사항은 아래로 연락해 주세요:
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
