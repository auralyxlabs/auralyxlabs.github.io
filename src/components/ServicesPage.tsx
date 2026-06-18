/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  HelpCircle, 
  Plus, 
  Minus, 
  CheckCircle2, 
  ArrowRight,
  Package,
  Globe,
  Smartphone,
  ShoppingBag,
  Palette,
  Gamepad2,
  FileText
} from "lucide-react";
import { faqData, techStackData, servicesData } from "../data";
import WhyChooseUs from "./WhyChooseUs";
import CTA from "./CTA";

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const getIcon = (id: string) => {
    switch (id) {
      case "srv-web-custom": return Globe;
      case "srv-app": return Smartphone;
      case "srv-ecommerce": return ShoppingBag;
      case "srv-uiux": return Palette;
      case "srv-game": return Gamepad2;
      case "srv-fyp": default: return FileText;
    }
  };

  const handleScrollToContact = () => {
    const contactSec = document.querySelector("#contact");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-milk-white text-dark-premium" id="services-page-root">
      
      {/* 1. Cinematic Services Page Hero */}
      <section className="relative pt-36 pb-20 bg-dark-premium tech-bg-grid-dark flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-45">
          <div className="absolute top-1/4 left-10 w-[30rem] h-[30rem] bg-primary-sage/10 rounded-full filter blur-[110px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-green/10 rounded-full filter blur-[100px] animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-deep-forest border border-primary-sage/20 mb-6 shadow-sm backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary-sage animate-spin" />
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-primary-sage">
              AGENCY CAPABILITIES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-milk-white leading-tight max-w-3xl"
          >
            Curated Capabilities For <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-sage to-secondary-green">Digital Dominance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-base sm:text-lg text-milk-white/80 max-w-xl mt-6 font-normal leading-relaxed"
          >
            Review our detailed developmental scope, technologies registry, and FAQs designed to align our technical experts directly with your business growth milestones.
          </motion.p>
        </div>
      </section>

      {/* 2. Detailed Service Overview with STATS, IMAGE, and RICH INFO (Alternating Premium Layout) */}
      <section className="relative py-24 md:py-32 bg-milk-white overflow-hidden" id="capabilities-deep-dive">
        <div id="services-details-container" className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-24 md:space-y-36">
          
          {/* Detailed Row Section Header */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary-sage" />
              <span className="text-2xs uppercase tracking-[0.25em] text-secondary-green font-semibold font-mono">DEVELOPMENT CAPABILITIES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-dark-premium leading-tight">
              Deep-Dive Developmental Scope
            </h2>
            <p className="text-sm text-dark-premium/70 mt-4 leading-relaxed font-normal">
              We engineer custom software systems, interactive interfaces, and pixel-precise designs without using general templates, guaranteeing optimized speed and code longevity.
            </p>
          </div>

          {/* List of Services with alternating columns, beautiful stats and graphics */}
          <div className="space-y-24 md:space-y-36" id="services-detailed-list">
            {servicesData.map((service, idx) => {
              const ServiceIcon = getIcon(service.id);
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={service.id}
                  id={`detailed-service-row-${service.id}`}
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
                >
                  {/* Left (or Right): Gorgeous Mockup Image & Client Success Stats */}
                  <motion.div 
                    className="w-full lg:w-1/2 relative group"
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Background Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary-sage/25 to-secondary-green/25 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000 pointer-events-none" />
                    
                    {/* Main Image Frame */}
                    <div className="relative rounded-[2.2rem] bg-sand border-2 border-primary-sage/15 overflow-hidden shadow-md">
                      <img 
                        src={service.image} 
                        alt={`${service.title} illustration`}
                        className="w-full h-[280px] sm:h-[350px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700 select-none"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Category Floater Badge */}
                      <span className="absolute top-5 left-5 bg-dark-premium/90 backdrop-blur-md text-[10px] font-mono font-bold tracking-wider text-primary-sage px-3.5 py-1.5 rounded-full uppercase border border-primary-sage/20 shadow-sm">
                        {service.category || "Scope scope"}
                      </span>
                    </div>

                    {/* Dynamic Stats Box (Positioned floating over the image container) */}
                    {service.stats && service.stats.length > 0 && (
                      <div className="absolute -bottom-6 right-6 md:-right-6 bg-milk-white border border-primary-sage/15 rounded-2xl p-5 shadow-lg flex items-center gap-6 z-20 max-w-xs sm:max-w-sm">
                        {service.stats.map((stat, statIdx) => (
                          <div key={statIdx} className="text-left">
                            <p className="text-xl sm:text-2xl font-extrabold text-secondary-green tracking-tight leading-none mb-1">
                              {stat.value}
                            </p>
                            <p className="text-[10px] font-mono tracking-wide uppercase text-dark-premium/65 font-bold leading-tight">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>

                  {/* Right (or Left): In-Depth Text Specs, Bullets & Included Deliverables */}
                  <motion.div 
                    className="w-full lg:w-1/2 text-left space-y-6"
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-sage/15 border border-primary-sage/20 flex items-center justify-center shrink-0">
                        <ServiceIcon className="w-5 h-5 text-deep-forest" />
                      </div>
                      <span className="text-[11px] font-mono font-bold tracking-widest text-secondary-green uppercase">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3.5xl font-sans font-extrabold tracking-tight text-dark-premium leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-dark-premium/85 leading-relaxed font-normal">
                      {service.longDescription || service.description}
                    </p>

                    {/* Features list bullet grid */}
                    {service.bullets && service.bullets.length > 0 && (
                      <div className="space-y-3 pt-2">
                        <h4 className="text-[10px] font-mono tracking-wider font-extrabold uppercase text-dark-premium/50 block">
                          Scope Parameters
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5" id={`detailed-bullets-grid-${service.id}`}>
                          {service.bullets.map((b, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-dark-premium/90">
                              <CheckCircle2 className="w-4 h-4 text-primary-sage shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Package deliverables list */}
                    {service.deliverables && service.deliverables.length > 0 && (
                      <div className="pt-4 border-t border-primary-sage/10 space-y-2.5">
                        <h4 className="text-[10px] font-mono tracking-wider font-extrabold uppercase text-dark-premium/50 block">
                          Launch Deliverables Package
                        </h4>
                        <div className="flex flex-wrap gap-2" id={`detailed-deliverables-${service.id}`}>
                          {service.deliverables.map((deliv, idx) => (
                            <div 
                              key={idx}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sand/80 border border-primary-sage/10 text-[9px] font-mono font-bold text-deep-forest uppercase tracking-wider"
                            >
                              <Package className="w-3.5 h-3.5 text-secondary-green shrink-0" />
                              <span>{deliv}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA element */}
                    <div className="pt-6">
                      <button
                        onClick={handleScrollToContact}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-milk-white bg-dark-premium hover:bg-secondary-green hover:text-dark-premium shadow-md transition-all duration-300"
                        id={`detailed-service-cta-${service.id}`}
                      >
                        {service.ctaText || "Select Capabilities Block"}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Benefits Section (Render the WhyChooseUs component) */}
      <WhyChooseUs />

      {/* 4. Elite Tech Stack Section */}
      <section className="relative py-24 md:py-32 bg-sand overflow-hidden border-b border-primary-sage/10" id="tech-stack">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <span className="text-2xs font-mono uppercase tracking-[0.25em] text-secondary-green font-semibold">
              OUR ARSENAL
            </span>
            <h2 className="text-3xl md:text-4.5xl font-sans font-extrabold tracking-tight text-dark-premium mt-1">
              Engineered With Verified Modern Technologies
            </h2>
            <p className="text-sm text-dark-premium/70 max-w-lg mx-auto mt-3 font-normal">
              We construct all applications on robust structural architectures to eliminate loading lag, securing maximum longevity and compliance.
            </p>
          </div>

          {/* Grid stack categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {Object.entries(techStackData).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-milk-white/95 rounded-2xl p-6 border border-primary-sage/10 shadow-sm"
              >
                <span className="text-[10px] font-mono font-bold text-secondary-green uppercase tracking-wider block mb-4 border-b border-primary-sage/10 pb-2">
                  {category}
                </span>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="text-xs flex items-center gap-2 font-normal text-dark-premium/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary-sage shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ Section Accordion */}
      <section className="relative py-24 md:py-32 bg-milk-white overflow-hidden border-b border-primary-sage/10" id="faq">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          
          {/* Header */}
          <div className="flex flex-col items-center mb-16">
            <HelpCircle className="w-6 h-6 text-secondary-green mb-3" />
            <h2 className="text-3xl md:text-4.5xl font-sans font-extrabold tracking-tight text-dark-premium">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-dark-premium/70 mt-3 max-w-md mx-auto font-normal">
              Get direct clarity regarding our customization scope, response times, and post-launch partnership rules.
            </p>
          </div>

          {/* Accordion list */}
          <div className="space-y-4" id="faq-accordion-group">
            {faqData.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="rounded-2xl border border-primary-sage/10 bg-sand/40 hover:bg-sand/65 transition-all duration-200 overflow-hidden text-left"
                  id={`faq-item-${idx}`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5.5 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-dark-premium pr-4 leading-snug">
                      {faq.question}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-milk-white flex items-center justify-center shrink-0 border border-primary-sage/10 text-deep-forest font-semibold shadow-sm">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6.5 text-xs sm:text-sm text-dark-premium/80 leading-relaxed font-normal border-t border-primary-sage/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Strategic Services CTA */}
      <CTA 
        title="Ready to Unleash Your Brand's Full Capacity?"
        description="Book a strategic consultation with our co-founders to review wireframes, custom schemas, and project requirements."
        primaryText="Book a Consultation"
        secondaryText="Contact Our COO"
        variant="forest"
      />
      
    </div>
  );
}
