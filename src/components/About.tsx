/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, MapPin, Award, ShieldCheck, Zap, ArrowUpRight, TrendingUp, Cpu } from "lucide-react";
import { siteMetadata } from "../data";

export default function About() {
  const [activeTab, setActiveTab] = useState("story");

  const tabs = [
    {
      id: "story",
      label: "Founder Story",
      title: "Bridging Architectural Integrity & Business Scaling",
      description: "Formed as an elite co-founding collective of deep software architects and experienced operations leaders, Auralyx Labs was built to challenge the status quo. We bypass basic standardized low-value templates, treating custom code as highly valuable, permanent corporate assets that scale organically.",
      bullets: [
        "100% custom-tailored database structures with normalized schema architectures",
        "Direct partnership alignment on your technical objectives right from day one",
        "Aesthetic luxury interfaces designed with meticulous, high-contrast layouts"
      ],
      tag: "Elite Design & Code"
    },
    {
      id: "philosophy",
      label: "Our Standards",
      title: "100% Co-Founder Involvement & Delivery Security",
      description: "We operate with total, transparent agency integrity. Unlike massive design factories that offload tasks to junior practitioners, our co-founding executives Myda, Komal, and Tahreem remain hands-on active contributors on every custom project, securing stable performance.",
      bullets: [
        "Direct communication channels with the technical co-founders writing your systems",
        "Predictive sprint cycles utilizing zero loose assumptions or handoff delays",
        "Rigorous verification standards with standard pre-flight code security checks"
      ],
      tag: "Guaranteed Integrity"
    },
    {
      id: "value",
      label: "Strategic ROI",
      title: "Converting Active User Traffic Into Measurable Value",
      description: "A professional system should reduce back-office duplication, prevent cart abandonment, and load instantly on every browser. We build responsive cross-platform pathways, speed-optimized payment checkouts, and normalized query databases that maximize business revenue.",
      bullets: [
        "Saves administration costs by automating redundant paperwork tasks",
        "Custom high-speed checkouts that keep luxury consumers deeply engaged",
        "Thorough documentation bundles so you hold absolute system autonomy"
      ],
      tag: "Productive Technology"
    }
  ];

  const activeContent = tabs.find((t) => t.id === activeTab) || tabs[0];

  const stats = [
    { value: "100%", label: "Live Launch Delivery Rate", icon: Award },
    { value: "<1.8s", label: "Median Page Load Speed", icon: Zap },
    { value: "SLA", label: "Guaranteed Response Time", icon: ShieldCheck }
  ];

  return (
    <section
      id="about"
      className="relative py-16 md:py-20 bg-milk-white overflow-hidden border-b border-primary-sage/10"
    >
      {/* Dynamic Background Grid Pattern to fill space elegantly */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#153B2D05_1px,transparent_1px),linear-gradient(to_bottom,#153B2D05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Highlight background radial glow */}
      <div className="absolute top-1/3 right-0 w-[50rem] h-[50rem] bg-primary-sage/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Intro Manifesto Header */}
        <div className="max-w-3xl mb-12" id="about-intro-header">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-green/60 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-green"></span>
            </span>
            <span className="text-2xs uppercase tracking-[0.2em] text-secondary-green font-bold font-mono">
              WHO WE ARE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold tracking-tight text-dark-premium leading-tight mb-4">
            Bespoke Engineering for Ambitious Business Milestones
          </h2>
          <p className="text-sm md:text-md text-dark-premium/75 leading-relaxed font-normal">
            Auralyx Labs operates as a premier digital creation and development ecosystem. We turn ambitious corporate goals into beautifully organized, responsive systems that replace slow, manual spreadsheets with professional high-performance software.
          </p>
        </div>

        {/* Interactive Layout Content Grid */}
        <div id="about-interactive-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Block: Tab Navigation & Tab Content Inside Card */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="bg-sand p-6 md:p-8 rounded-[2rem] border border-primary-sage/15 shadow-sm relative overflow-hidden flex-1 flex flex-col justify-between" id="about-interactive-view">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary-sage/10 to-transparent blur-3xl rounded-full pointer-events-none" />
              
              <div>
                {/* 1. Tab Bar Selector Links */}
                <div className="flex border-b border-primary-sage/15 pb-2.5 space-x-6 overflow-x-auto scrollbar-none" id="about-tabs-strip">
                  {tabs.map((tab) => {
                    const isSelected = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`text-xs md:text-sm font-sans tracking-wide font-medium pb-2 relative transition-all uppercase cursor-pointer whitespace-nowrap ${
                          isSelected ? "text-deep-forest font-bold" : "text-dark-premium/50 hover:text-dark-premium"
                        }`}
                        id={`btn-tab-${tab.id}`}
                      >
                        {tab.label}
                        {isSelected && (
                          <motion.div
                            layoutId="aboutActiveLine"
                            className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-secondary-green"
                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* 2. Responsive Content Pane */}
                <div className="mt-8 text-left" id="about-pane-contents">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-milk-white border border-primary-sage/15 text-[10px] font-mono text-secondary-green font-bold mb-4 uppercase tracking-wider">
                        <Sparkles className="w-3 h-3" />
                        {activeContent.tag}
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-sans font-extrabold tracking-tight text-dark-premium mb-4 leading-snug">
                        {activeContent.title}
                      </h3>
                      
                      <p className="text-xs md:text-sm text-dark-premium/80 leading-relaxed mb-6 font-normal">
                        {activeContent.description}
                      </p>

                      <ul className="space-y-3" id="about-tab-bullets">
                        {activeContent.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-3 text-xs text-dark-premium/90 items-start font-normal">
                            <div className="w-4.5 h-4.5 rounded-full bg-primary-sage/20 flex items-center justify-center shrink-0 mt-0.5 text-deep-forest font-bold font-mono text-[9px]">
                              {i + 1}
                            </div>
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Location Badge (Clean alignment in footer) */}
              <div className="mt-10 pt-6 border-t border-primary-sage/15 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-deep-forest" />
                  <span className="text-xs font-mono text-dark-premium/80 font-bold">{siteMetadata.location}</span>
                </div>
                <div className="text-[10px] font-mono text-dark-premium/45 tracking-wide uppercase select-none">
                  Auralyx Labs &copy; 2026 Creative HQ
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Live Stats Counters & Compact Branding Showcase */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            
            {/* Live Metrics Container */}
            <div className="grid grid-cols-1 gap-4 flex-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-sand p-6 rounded-[1.8rem] border border-primary-sage/15 flex items-center gap-5 hover:border-primary-sage/40 hover:bg-milk-white transition-all duration-300 shadow-2xs group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-sage/15 flex items-center justify-center text-deep-forest shrink-0 group-hover:bg-secondary-green group-hover:text-milk-white transition-all duration-300">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl md:text-3xl font-sans font-black text-dark-premium tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-dark-premium/50 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Micro Branding Highlight Card to fully align context */}
            <div className="bg-dark-premium text-milk-white p-6 rounded-[1.8rem] border border-deep-forest/30 flex flex-col justify-between relative overflow-hidden" id="about-micro-identity-card">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-green/10 rounded-full filter blur-2xl pointer-events-none" />
              <div>
                <Cpu className="w-8 h-8 text-secondary-green mb-4" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-primary-sage mb-2">Our Architecture Seal</h4>
                <p className="text-2xs text-milk-white/70 leading-relaxed font-normal">
                  All custom code packages produced by our labs are packaged in isolated modular containers, featuring standard pre-rendered routes, secure APIs, and responsive UI grid rules. No external server load delays allowed.
                </p>
              </div>
              <div className="flex items-center gap-2 justify-end mt-4 text-secondary-green text-[10px] font-mono font-bold uppercase tracking-widest hover:text-white transition-colors duration-300">
                <span>View System Standards</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
