"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";

export default function AnalysisCounter() {
  const [count, setCount] = useState(12847);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    // Animate count on mount
    const duration = 2000;
    const steps = 60;
    const increment = count / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= count) {
        setDisplayCount(count);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [count]);

  // Simulate occasional increments
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 dark:border-gray-700">
      <Users size={16} className="text-[#171717] dark:text-white" />
      <span className="text-sm font-medium text-[#171717] dark:text-white">
        <span className="font-bold">{displayCount.toLocaleString()}</span>명 분석 완료
      </span>
    </div>
  );
}
