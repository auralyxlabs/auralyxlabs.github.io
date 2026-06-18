/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ListTodo, HelpCircle, ShieldCheck, Activity } from "lucide-react";

export interface CustomPhase {
  step: string;
  phaseLabel: string;
  title: string;
  description: string;
}

export default function Process() {
  const phases: CustomPhase[] = [
    {
      step: "01",
      phaseLabel: "PHASE 01",
      title: "Discovery",
      description: "Review business model, custom schemas, and project requirements.",
    },
    {
      step: "02",
      phaseLabel: "PHASE 02",
      title: "Strategy",
      description: "Formulate tech stack blueprints, delivery roadmaps, and exact SLAs.",
    },
    {
      step: "03",
      phaseLabel: "PHASE 03",
      title: "Design",
      description: "Draft responsive wireframes, customized layout grids, and brand aesthetics.",
    },
    {
      step: "04",
      phaseLabel: "PHASE 04",
      title: "Engineering",
      description: "Code stable, high-performance modular assets over agile sprints.",
    },
    {
      step: "05",
      phaseLabel: "PHASE 05",
      title: "QA & Auditing",
      description: "Perform detailed cross-browser testing and Lighthouse security reviews.",
    },
    {
      step: "06",
      phaseLabel: "PHASE 06",
      title: "Launch",
      description: "Deploy production container builds to Cloud Run with live SSL routing.",
    },
    {
      step: "07",
      phaseLabel: "PHASE 07",
      title: "Optimization",
      description: "Conduct active analytics checks, speed updates, and feature audits.",
    },
  ];

  return (
    <section 
      id="process" 
      className="relative py-16 md:py-20 bg-deep-forest text-milk-white overflow-hidden border-b border-primary-sage/10"
    >
      {/* Decorative Blur Orbs to establish subtle glowing depth */}
      <div className="absolute left-1/4 top-10 w-[40rem] h-[25rem] bg-secondary-green/20 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-10 w-[40rem] h-[25rem] bg-primary-sage/15 rounded-full filter blur-[140px] pointer-events-none" />

      {/* Grid subtle layout mesh to align visual aesthetics */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(250,253,251,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(250,253,251,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div id="process-section-header" className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.25em] text-primary-sage uppercase mb-4">
            OPERATIONAL DELIVERY
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-milk-white max-w-3xl leading-tight">
            Our Battle-Tested Process
          </h2>
          <p className="text-xs md:text-sm text-milk-white/75 max-w-2xl mt-4 leading-relaxed font-normal">
            Seven transparent phases ensuring every custom release builds smoothly, ships on time, and completely secures your business model.
          </p>
        </div>

        {/* Horizontal Connective Timeline (For Standard Screens) */}
        <div className="hidden lg:block relative mb-12" id="desktop-process-timeline-wrapper">
          {/* Connecting Line Track */}
          <div className="absolute top-[39px] left-[6%] right-[6%] h-[2px] bg-white/10 z-0" id="timeline-horizontal-track-bar">
            {/* Sliding colored accent track indicator */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-sage via-secondary-green to-primary-sage opacity-85" />
          </div>

          <div className="grid grid-cols-7 gap-4 relative z-10" id="timeline-horizontal-nodes-grid">
            {phases.map((phase, idx) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center group"
                id={`timeline-desktop-node-col-${phase.step}`}
              >
                {/* Connecting Circle Button Node */}
                <div 
                  className="w-20 h-20 rounded-full bg-deep-forest border-2 border-primary-sage/30 hover:border-primary-sage flex items-center justify-center transition-all duration-300 relative group-hover:scale-105 group-hover:glow-primary cursor-pointer select-none mb-6 shrink-0"
                  id={`timeline-desktop-circle-${phase.step}`}
                >
                  {/* Subtle hover internal scale ripple */}
                  <span className="absolute inset-1 rounded-full bg-milk-white/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
                  
                  <span className="text-base font-serif font-medium text-primary-sage group-hover:text-milk-white tracking-tight transition-colors duration-200">
                    {phase.step}
                  </span>
                </div>

                {/* Meta Labels Stack */}
                <div className="px-1.5" id={`timeline-desktop-content-stack-${phase.step}`}>
                  <span className="text-[10px] font-mono tracking-widest text-[#9CB080]/70 font-semibold uppercase block mb-2">
                    {phase.phaseLabel}
                  </span>
                  <h3 className="text-base font-serif font-semibold text-milk-white tracking-wide mb-2.5 group-hover:text-primary-sage transition-colors duration-200">
                    {phase.title}
                  </h3>
                  <p className="text-2xs text-milk-white/70 leading-relaxed font-normal">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vertical Connected Track Process (For Tablets & Mobile) */}
        <div className="lg:hidden relative space-y-10 pl-6 md:pl-10" id="mobile-process-timeline-stack">
          {/* Vertical alignment trace line bar */}
          <div className="absolute top-4 bottom-4 left-[21px] md:left-[29px] w-[2px] bg-gradient-to-b from-primary-sage/75 via-secondary-green/40 to-primary-sage/10" id="timeline-mobile-vertical-bar" />

          {phases.map((phase, idx) => (
            <motion.div
              key={phase.step}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative flex gap-5 md:gap-8 items-start text-left group"
              id={`timeline-mobile-row-${phase.step}`}
            >
              {/* Connecting Circle Node */}
              <div 
                className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-deep-forest border border-primary-sage/40 flex items-center justify-center shrink-0 z-10 select-none relative group-hover:bg-secondary-green/20 group-hover:border-primary-sage/85 transition-all duration-300 shadow-sm"
                id={`timeline-mobile-circle-${phase.step}`}
              >
                <span className="text-xs md:text-sm font-serif font-medium text-primary-sage group-hover:text-milk-white">
                  {phase.step}
                </span>
              </div>

              {/* Text Description Block */}
              <div className="pt-1.5 md:pt-3">
                <span className="text-[9px] font-mono tracking-[0.18em] text-[#9CB080]/80 font-bold uppercase block mb-1">
                  {phase.phaseLabel}
                </span>
                <h3 className="text-base font-serif font-bold text-milk-white mb-2 tracking-wide">
                  {phase.title}
                </h3>
                <p className="text-xs text-milk-white/75 leading-relaxed font-normal max-w-xl">
                  {phase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
