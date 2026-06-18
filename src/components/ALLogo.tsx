/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

interface ALLogoProps {
  className?: string;
  size?: number;
  lightMode?: boolean;
}

export default function ALLogo({ className = "", size = 44, lightMode = false }: ALLogoProps) {
  // Brand colors mapping:
  // Primary Sage: #9CB080
  // Secondary Green: #618764
  // Deep Forest: #2B5748
  // Dark Premium: #273338

  return (
    <motion.div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      style={{ width: size, height: size }}
      id="al-logo-container"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        {/* Background Crest Circle */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke={lightMode ? "#2B5748" : "#9CB080"}
          strokeWidth="1.5"
          strokeOpacity="0.4"
          strokeDasharray="4 4"
        />

        {/* Outer Solid Luxury Border Ring */}
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke={lightMode ? "#2B5748" : "#9CB080"}
          strokeWidth="1"
          strokeOpacity="0.15"
        />

        {/* Botanical Organic Leaf 1 (Crossing under 'A' and looping through 'L') */}
        <path
          d="M25 65C32 55 45 42 55 45C63 47.5 58 60 48 58C38 56 32 40 42 32C52 24 64 28 72 38"
          stroke="#9CB080"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.75"
        />

        {/* Leaf details / buds */}
        <path
          d="M32 55C31.5 50 34 48 36 51C38 54 35 56 32 55Z"
          fill="#618764"
          fillOpacity="0.8"
        />
        <path
          d="M48 44C44 41 46 38 49 40C52 42 50 45 48 44Z"
          fill="#9CB080"
          fillOpacity="0.9"
        />
        <path
          d="M62 33C59 30 62 26 64 29C66 32 64 34 62 33Z"
          fill="#618764"
          fillOpacity="0.85"
        />

        {/* 'A' Glyph - Majestic luxury high-contrast serif structure */}
        {/* Left thick leg of A */}
        <path
          d="M36 70L46 32H51L41 70H36Z"
          fill={lightMode ? "#273338" : "#FAFDFB"}
          className="transition-colors duration-300"
        />
        {/* Right main leg of A with elegant flare */}
        <path
          d="M45.5 32H52.5L62.5 70H57L51.5 48L45.5 32Z"
          fill={lightMode ? "#2B5748" : "#9CB080"}
          className="transition-colors duration-300"
        />
        {/* Thin cross bar of A */}
        <path
          d="M42 60H54.5"
          stroke={lightMode ? "#273338" : "#FAFDFB"}
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* 'L' Glyph - Shifted slightly and overlapping A's foot */}
        <path
          d="M50.5 33H54V65H68V69H50.5V33Z"
          fill={lightMode ? "#2B5748" : "#9CB080"}
          fillOpacity="0.95"
          className="transition-colors duration-300"
        />

        {/* Little decorative organic crown leaf at very top */}
        <path
          d="M50 8C48.5 12 50 15 51.5 12C53 9 51.5 6 50 8Z"
          fill="#9CB080"
        />
      </svg>
    </motion.div>
  );
}
