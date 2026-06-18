/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, MessageSquareQuote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsData } from "../data";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Dynamically calculate visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // Tablet
      } else if (window.innerWidth < 1280) {
        setVisibleCount(3); // Laptop
      } else {
        setVisibleCount(4); // Desktop HD
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = testimonialsData.length;
  // Maximum starting index to avoid blank items at the end
  const maxIndex = totalSlides - visibleCount;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= maxIndex) {
          return 0; // Infinite loop wrap-around
        }
        return prevIndex + 1;
      });
    }, 4500); // Auto-scroll every 4.5 seconds

    return () => resetTimeout();
  }, [currentIndex, maxIndex]);

  const handlePrev = () => {
    resetTimeout();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const handleNext = () => {
    resetTimeout();
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-sand overflow-hidden border-b border-primary-sage/10">
      {/* Dynamic Grid Background Accent */}
      <div className="absolute inset-0 tech-bg-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Section Header */}
        <div id="testimonials-header" className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 md:mb-20">
          <div className="text-left max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquareQuote className="w-4 h-4 text-secondary-green" />
              <span className="text-2xs uppercase tracking-[0.25em] text-secondary-green font-semibold font-mono">
                CLIENTS REVIEWS
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-dark-premium leading-tight">
              What Our Growth Partners Say
            </h2>
            <p className="text-sm text-dark-premium/70 mt-3 font-normal">
              Read real testaments of complete commitment to detailed custom designs, rapid delivery speeds, and transparent operational systems.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-2.5 mt-6 sm:mt-0" id="testimonials-controls">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-primary-sage/20 bg-milk-white hover:bg-primary-sage hover:text-dark-premium flex items-center justify-center text-dark-premium shadow-sm transition-all duration-300"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-primary-sage/20 bg-milk-white hover:bg-primary-sage hover:text-dark-premium flex items-center justify-center text-dark-premium shadow-sm transition-all duration-300"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Tracks Frame */}
        <div className="relative w-full overflow-hidden" id="testimonials-viewport">
          <div
            className="flex transition-transform duration-700 ease-out-expo"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              width: `${(totalSlides / visibleCount) * 100}%`,
            }}
          >
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="px-3 md:px-4"
                style={{ width: `${100 / totalSlides}%` }}
                id={`testimonial-slide-${item.id}`}
              >
                {/* Review Card Layout */}
                <div className="bg-milk-white border border-primary-sage/10 hover:border-primary-sage/35 rounded-[2rem] p-7 md:p-8 h-full flex flex-col justify-between shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 text-left">
                  
                  {/* Top: Row with Stars & Quote Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < item.rating ? "text-primary-sage fill-primary-sage" : "text-primary-sage/20"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-secondary-green/30">
                        <MessageSquareQuote className="w-10 h-10 rotate-180" />
                      </span>
                    </div>

                    {/* Review text */}
                    <p className="text-xs sm:text-sm text-dark-premium/85 leading-relaxed font-normal italic mb-6">
                      "{item.review}"
                    </p>
                  </div>

                  {/* Reviewer signature block */}
                  <div className="pt-5 border-t border-primary-sage/5">
                    <h4 className="text-sm font-bold text-dark-premium tracking-tight leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-2xs font-mono font-bold tracking-wider text-secondary-green mt-1">
                      {item.position}, <span className="text-dark-premium/70">{item.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Dot Indicators representing the carousel pages */}
        <div className="flex justify-center gap-1.5 mt-8" id="testimonials-indicator-dots">
          {Array.from({ length: 3 }).map((_, i) => {
            const destIndex = maxIndex > 0 ? Math.round((i / 2) * maxIndex) : 0;
            const isButtonActive = maxIndex > 0 ? Math.round((currentIndex / maxIndex) * 2) === i : i === 0;
            return (
              <button
                key={i}
                onClick={() => {
                  resetTimeout();
                  setCurrentIndex(destIndex);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isButtonActive ? "w-6 bg-secondary-green" : "w-2 bg-primary-sage/30"
                }`}
                aria-label={`Go to slide page ${i + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
