"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ScannerProps {
  imageUrl: string;
  onComplete: () => void;
}

const SCAN_MESSAGES = [
  "INITIALIZING SCAN...",
  "EXTRACTING AESTHETIC DNA...",
  "ANALYZING BONE STRUCTURE...",
  "DETECTING STYLE PATTERNS...",
  "MAPPING VISUAL IDENTITY...",
  "CALIBRATING ARCHETYPE...",
  "FINALIZING ANALYSIS..."
];

// Facial tracking points (relative positions)
const TRACKING_POINTS = [
  { x: 50, y: 25 },   // Forehead
  { x: 30, y: 40 },   // Left eye
  { x: 70, y: 40 },   // Right eye
  { x: 50, y: 50 },   // Nose bridge
  { x: 35, y: 55 },   // Left cheek
  { x: 65, y: 55 },   // Right cheek
  { x: 50, y: 65 },   // Nose tip
  { x: 40, y: 75 },   // Left mouth
  { x: 60, y: 75 },   // Right mouth
  { x: 50, y: 85 },   // Chin
];

// Connection lines between points
const CONNECTIONS = [
  [0, 1], [0, 2], [1, 2], [1, 3], [2, 3],
  [3, 4], [3, 5], [4, 6], [5, 6], [6, 7],
  [6, 8], [7, 8], [7, 9], [8, 9]
];

export default function Scanner({ imageUrl, onComplete }: ScannerProps) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showPoints, setShowPoints] = useState(false);

  useEffect(() => {
    // Show tracking points after initial scan
    const pointsTimer = setTimeout(() => setShowPoints(true), 1000);

    // Rotate through messages
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % SCAN_MESSAGES.length);
    }, 800);

    // Progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(messageInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => {
      clearTimeout(pointsTimer);
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-md aspect-[3/4] mx-4">
        {/* Image Container */}
        <div className="relative w-full h-full rounded-lg overflow-hidden glow-border">
          {/* User Image */}
          <img
            src={imageUrl}
            alt="Scanning"
            className="w-full h-full object-cover"
          />

          {/* Scan Line */}
          <motion.div
            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent scan-line"
            style={{ boxShadow: "0 0 20px #00D4FF, 0 0 40px #00D4FF" }}
          />

          {/* Grid Overlay */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full">
              {/* Horizontal lines */}
              {[...Array(10)].map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="0"
                  y1={`${(i + 1) * 10}%`}
                  x2="100%"
                  y2={`${(i + 1) * 10}%`}
                  stroke="#00D4FF"
                  strokeWidth="0.5"
                />
              ))}
              {/* Vertical lines */}
              {[...Array(8)].map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={`${(i + 1) * 12.5}%`}
                  y1="0"
                  x2={`${(i + 1) * 12.5}%`}
                  y2="100%"
                  stroke="#00D4FF"
                  strokeWidth="0.5"
                />
              ))}
            </svg>
          </div>

          {/* Tracking Points & Lines */}
          {showPoints && (
            <svg className="absolute inset-0 w-full h-full">
              {/* Connection lines */}
              {CONNECTIONS.map(([from, to], idx) => (
                <motion.line
                  key={`line-${idx}`}
                  x1={`${TRACKING_POINTS[from].x}%`}
                  y1={`${TRACKING_POINTS[from].y}%`}
                  x2={`${TRACKING_POINTS[to].x}%`}
                  y2={`${TRACKING_POINTS[to].y}%`}
                  stroke="#00D4FF"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                />
              ))}

              {/* Tracking points */}
              {TRACKING_POINTS.map((point, idx) => (
                <motion.g key={idx}>
                  {/* Outer ring */}
                  <motion.circle
                    cx={`${point.x}%`}
                    cy={`${point.y}%`}
                    r="8"
                    fill="none"
                    stroke="#00D4FF"
                    strokeWidth="1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.5 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  />
                  {/* Inner dot */}
                  <motion.circle
                    cx={`${point.x}%`}
                    cy={`${point.y}%`}
                    r="3"
                    fill="#00D4FF"
                    className="tracking-point"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: idx * 0.05 + 0.1 }}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  />
                </motion.g>
              ))}
            </svg>
          )}

          {/* Corner Brackets */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#00D4FF]" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#00D4FF]" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#00D4FF]" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#00D4FF]" />
        </div>

        {/* Status Text */}
        <div className="mt-8 text-center">
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-[#00D4FF] font-mono text-sm tracking-[0.2em] pulse-text"
          >
            {SCAN_MESSAGES[messageIndex]}
          </motion.p>

          {/* Progress Bar */}
          <div className="mt-4 mx-auto max-w-xs">
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00D4FF] to-[#00FF88]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="mt-2 text-gray-500 font-mono text-xs">
              {progress}% COMPLETE
            </p>
          </div>
        </div>

        {/* Data Readouts */}
        <div className="absolute top-4 right-4 text-right font-mono text-xs text-[#00D4FF]/60">
          <p>SYS: ACTIVE</p>
          <p>FPS: 60</p>
          <p>RES: 1080p</p>
        </div>

        <div className="absolute bottom-4 left-4 font-mono text-xs text-[#00D4FF]/60">
          <p>VIBE-ID v1.0</p>
          <p>AESTHETIC ENGINE</p>
        </div>
      </div>
    </div>
  );
}
