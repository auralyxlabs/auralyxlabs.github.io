/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Calendar, Sparkles } from "lucide-react";

interface CTAProps {
  title?: string;
  description?: string;
  primaryText?: string;
  secondaryText?: string;
  variant?: "glass" | "sage" | "forest";
}

export default function CTA({
  title = "Ready To Elevate Your Digital Presence?",
  description = "Connect with our development experts to conceptualize layout grids, mobile apps, and custom stores designed to capture massive business value.",
  primaryText = "Get Started",
  secondaryText = "Book a Consultation",
  variant = "glass"
}: CTAProps) {
  
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  // Color theme definitions
  const containerStyles = () => {
    switch (variant) {
      case "sage":
        return "bg-secondary-green text-milk-white border-primary-sage/15";
      case "forest":
        return "bg-deep-forest text-milk-white border-primary-sage/20";
      case "glass":
      default:
        return "bg-sand text-dark-premium border-primary-sage/10";
    }
  };

  const buttonPrimaryStyles = () => {
    switch (variant) {
      case "sage":
      case "forest":
        return "bg-milk-white text-dark-premium hover:bg-primary-sage hover:text-dark-premium border-white";
      case "glass":
      default:
        return "bg-primary-sage text-dark-premium hover:bg-deep-forest hover:text-milk-white border-primary-sage";
    }
  };

  return (
    <section className="relative py-14 overflow-hidden bg-milk-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className={`rounded-[2.5rem] p-10 md:p-14 border shadow-md relative overflow-hidden text-center ${containerStyles()}`}
          id="cta-enclosure"
        >
          {/* Subtle glowing elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-sage/10 to-transparent blur-xl pointer-events-none" />

          <div className="flex justify-center mb-6">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] font-bold border ${
              variant === "glass" ? "bg-milk-white border-primary-sage/25 text-secondary-green" : "bg-milk-white/10 border-white/15 text-primary-sage"
            }`}>
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>GROW WITH AURALYX</span>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4.5xl font-sans font-extrabold tracking-tight leading-tight max-w-2xl mx-auto mb-4">
            {title}
          </h3>
          <p className={`text-xs md:text-sm max-w-xl mx-auto mb-8 font-normal leading-relaxed ${
            variant === "glass" ? "text-dark-premium/80" : "text-milk-white/80"
          }`}>
            {description}
          </p>

          {/* Reusable Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto" id="cta-button-holder">
            <button
              onClick={() => handleScrollTo("#contact")}
              className={`w-full sm:w-auto px-7 py-3 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-sm flex items-center justify-center gap-2 border ${buttonPrimaryStyles()}`}
              id="cta-primary-btn"
            >
              {primaryText}
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScrollTo("#contact")}
              className={`w-full sm:w-auto px-7 py-3 bg-transparent border text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${
                variant === "glass" 
                  ? "border-primary-sage/35 text-dark-premium hover:bg-primary-sage/10" 
                  : "border-white/30 text-milk-white hover:bg-white/5"
              }`}
              id="cta-secondary-btn"
            >
              <Calendar className="w-4 h-4" />
              {secondaryText}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
