/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowRight, Sparkles, FolderKanban, CheckCircle2, Layout, Award } from "lucide-react";
import { motion } from "motion/react";
import { siteMetadata } from "../data";

export default function Hero() {
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

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-36 pb-20 lg:pt-44 lg:pb-32 bg-dark-premium tech-bg-grid-dark flex items-center overflow-hidden"
    >
      {/* Decorative Custom Orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary-sage/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/4 right-10 w-[40rem] h-[40rem] bg-deep-forest/20 rounded-full filter blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Texts Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-deep-forest/30 border border-primary-sage/25 mb-8 shadow-sm backdrop-blur-md"
            id="hero-tagline-wrapper"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary-sage animate-pulse" />
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-primary-sage">
              Premium Development Agency
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            id="hero-main-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-milk-white leading-[1.1] mb-6"
          >
            Digital Experiences That Make <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-sage to-secondary-green">Brands Stand Out</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            id="hero-description"
            className="text-base sm:text-lg text-milk-white/80 max-w-xl font-normal leading-relaxed mb-10"
          >
            We transform ideas into high-performance web systems, responsive apps, and bespoke online stores that help businesses launch, scale, and capture global value.
          </motion.p>

          {/* Buttons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            id="hero-btn-container"
          >
            <button
              onClick={() => handleScrollTo("#contact")}
              className="px-8 py-4 bg-primary-sage text-dark-premium text-sm font-bold uppercase tracking-widest rounded-full hover:bg-milk-white transition-all duration-300 shadow-md font-sans flex items-center justify-center gap-2 group border border-primary-sage hover:border-milk-white"
              id="hero-primary-cta"
            >
              {siteMetadata.hero.primaryBtn}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScrollTo("#case-studies")}
              className="px-8 py-4 border border-primary-sage/30 hover:border-primary-sage/80 text-milk-white hover:text-primary-sage text-sm font-bold uppercase tracking-widest rounded-full transition-all duration-300 bg-transparent hover:bg-primary-sage/5 shadow-sm flex items-center justify-center"
              id="hero-secondary-cta"
            >
              {siteMetadata.hero.secondaryBtn}
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-deep-forest/40 pt-6 w-full"
            id="hero-trust-indicators"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-milk-white/60 uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-primary-sage" />
              Strategic Growth Partner
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-milk-white/60 uppercase tracking-wider">
              <FolderKanban className="w-4 h-4 text-secondary-green" />
              Creative & Development Experts
            </div>
          </motion.div>
        </div>

        {/* Media Column - Workspace Atmosphere */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full max-w-md aspect-square rounded-[2rem] overflow-hidden p-3 bg-gradient-to-br from-deep-forest to-dark-premium border border-primary-sage/20 shadow-2xl"
            id="hero-frame-container"
          >
            <div className="relative rounded-[1.5rem] overflow-hidden aspect-square flex justify-center items-center bg-dark-premium/40">
              <img
                src={siteMetadata.hero.illustration}
                alt="Auralyx Labs Workspace Environment"
                className="w-full h-full object-cover select-none object-center brightness-90 contrast-105"
                referrerPolicy="no-referrer"
                id="hero-cinematic-banner-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-premium/60 via-transparent to-transparent pointer-events-none" />

              {/* Glassmorphic Indicator 1 - Creative Design */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 left-6 bg-dark-premium/85 backdrop-blur-md p-3.5 rounded-xl border border-primary-sage/30 shadow-lg flex items-center gap-3 max-w-[190px]"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-sage/15 flex items-center justify-center shrink-0">
                  <Layout className="w-4 h-4 text-primary-sage" />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-primary-sage/70 uppercase tracking-wide">CREATIVE FLOW</p>
                  <p className="text-xs font-semibold text-milk-white">Bespoke Layouts</p>
                </div>
              </motion.div>

              {/* Glassmorphic Indicator 2 - Conversion Metric */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-6 right-6 bg-dark-premium/85 backdrop-blur-md p-3.5 rounded-xl border border-primary-sage/30 shadow-lg flex items-center gap-3 max-w-[190px]"
              >
                <div className="w-8 h-8 rounded-lg bg-secondary-green/15 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-secondary-green" />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-secondary-green/70 uppercase tracking-wide">GROWTH METRIC</p>
                  <p className="text-xs font-semibold text-milk-white">High Conversion</p>
                </div>
              </motion.div>
            </div>

            {/* Glowing Backdrop Circle */}
            <div className="absolute -inset-10 bg-gradient-to-r from-primary-sage/10 to-deep-forest/10 rounded-full blur-3xl filter -z-10 animate-pulse pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
