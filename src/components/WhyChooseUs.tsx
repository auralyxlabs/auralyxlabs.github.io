/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Users, 
  Briefcase, 
  MessageSquare, 
  TrendingUp, 
  Cpu, 
  Calendar, 
  LifeBuoy, 
  Award,
  CircleDot
} from "lucide-react";

interface ChoiceItem {
  title: string;
  description: string;
}

const choicesData: ChoiceItem[] = [
  {
    title: "Expert Development Team",
    description: "Our core specialists combine deep component layout expertise, clean state isolation, and elite design sensibilities to build bespoke platforms."
  },
  {
    title: "Business-Focused Solutions",
    description: "We bypass generic visual fluff to focus strictly on real-world objectives: client acquisition speed, cart retention, and brand fidelity."
  },
  {
    title: "Complete Delivery Honesty",
    description: "You receive direct check-in logs, transparent timeline updates on schedules, and active visual preview staging links throughout the sprint."
  },
  {
    title: "Scalable Custom Codes",
    description: "We deploy cleanly constructed, zero-bloat code structures capable of accommodating viral customer bursts without load delays or breakdowns."
  },
  {
    title: "Modern Premium Frameworks",
    description: "We assemble products using industry-vetted systems like React 19, TypeScript models, Tailwind CSS v4, and secure database schemas."
  },
  {
    title: "Impeccable Timing",
    description: "Our predictive phase constraints guarantee that we launch on scheduled release days with 100% stable performance and zero hypercare delays."
  },
  {
    title: "Strategic Growth Partner",
    description: "We don't just hand off assets; we support your long-term scaling with dedicated check-ups, analytical reviews, and performance audits."
  },
  {
    title: "Refusal to Compromise",
    description: "Every padding variable, responsive break, text tracking alignment, and navigation route is curated to deliver an elite digital card feel."
  }
];

export default function WhyChooseUs() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return Users;
      case 1: return Briefcase;
      case 2: return MessageSquare;
      case 3: return TrendingUp;
      case 4: return Cpu;
      case 5: return Calendar;
      case 6: return LifeBuoy;
      case 7: default: return Award;
    }
  };

  return (
    <section id="why-choose-us" className="relative py-24 md:py-32 bg-milk-white overflow-hidden border-b border-primary-sage/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div id="why-choose-header" className="flex flex-col items-start text-left mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-4">
            <CircleDot className="w-4 h-4 text-secondary-green animate-pulse" />
            <span className="text-2xs uppercase tracking-[0.25em] text-secondary-green font-semibold font-mono">
              ENGINEERING INTEGRITY
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-dark-premium max-w-2xl leading-tight">
            Curated For Brands Who Refuse To Compromise On Detail
          </h2>
          <p className="text-sm text-dark-premium/70 max-w-lg mt-4 font-normal">
            We operate and execute on a layout model that values modular clean codes, transparent partnership, and authentic strategic growth.
          </p>
        </div>

        {/* Features Grid */}
        <div id="why-choose-bento" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {choicesData.map((choice, idx) => {
            const IconComponent = getIcon(idx);
            return (
              <motion.div
                key={choice.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group p-8 rounded-3xl bg-sand/60 border border-primary-sage/10 hover:border-primary-sage/45 hover:bg-sand hover:shadow-md hover:scale-[1.02] transition-all duration-300 text-left"
                id={`why-choose-${idx}`}
              >
                {/* Visual Icon Box */}
                <div className="w-10 h-10 rounded-xl bg-milk-white border border-primary-sage/15 flex items-center justify-center mb-6 group-hover:border-primary-sage/40 group-hover:bg-primary-sage/5 transition-all duration-300 shadow-sm">
                  <IconComponent className="w-4 h-4 text-deep-forest group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="text-sm font-bold text-dark-premium tracking-wide uppercase mb-2">
                  {choice.title}
                </h3>
                <p className="text-xs sm:text-sm text-dark-premium/80 leading-relaxed font-normal">
                  {choice.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
