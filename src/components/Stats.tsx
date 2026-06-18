/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { statsData } from "../data";

function Counter({ value }: { value: string }) {
  const numberPart = parseInt(value, 10);
  const suffix = value.replace(String(numberPart), "");
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView && !isNaN(numberPart)) {
      let start = 0;
      const end = numberPart;
      const duration = 1500; // 1.5 seconds animation
      let animationFrameId: number;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out quadratic function
        const easeProgress = progress * (2 - progress);
        const currentCount = Math.floor(easeProgress * (end - start) + start);
        setCount(currentCount);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrameId);
    }
  }, [isInView, numberPart]);

  return (
    <span ref={ref} className="tabular-nums tracking-tight">
      {isNaN(numberPart) ? value : `${count}${suffix}`}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative py-20 md:py-24 bg-sand border-y border-primary-sage/10 tech-bg-grid-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-2xs font-mono uppercase tracking-[0.25em] text-secondary-green font-semibold">
            METRICS THAT MATTER
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-dark-premium mt-1">
            Trusted By Growing Businesses Worldwide
          </h2>
          <p className="text-sm text-dark-premium/70 max-w-lg mx-auto mt-2 font-normal">
            Our numbers are reflection of our complete dedication to delivery speed, custom design detail, and long-term business scaling.
          </p>
        </motion.div>

        {/* Bento Grid layout */}
        <div 
          id="stats-bento-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center"
        >
          {statsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-milk-white/90 backdrop-blur-sm p-8 rounded-2xl border border-primary-sage/10 hover:border-primary-sage/30 hover:scale-[1.02] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center"
              id={`stat-container-${item.id}`}
            >
              {/* Bold Accent Text with Custom Easy-In-View Counter */}
              <h3 
                id={`stat-value-${item.id}`}
                className="text-4xl sm:text-5xl font-sans font-extrabold text-deep-forest mb-2 select-none"
              >
                <Counter value={item.value} />
              </h3>
              
              {/* Detailed Neutral Label */}
              <p 
                id={`stat-label-${item.id}`}
                className="text-xs font-sans font-medium text-dark-premium/80 tracking-wide uppercase"
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
