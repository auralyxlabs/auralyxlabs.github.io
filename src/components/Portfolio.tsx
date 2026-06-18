/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Layers, CheckCircle2, ChevronRight, Sparkles, User, Clock, Briefcase, Plus } from "lucide-react";
import { caseStudiesData } from "../data";

export default function Portfolio() {
  const handleConsultLink = () => {
    const contactSec = document.querySelector("#contact");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="case-studies" className="relative py-24 md:py-32 bg-sand overflow-hidden border-b border-primary-sage/10">
      {/* Immersive Background Blur Shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary-sage/10 rounded-full filter blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[40rem] h-[40rem] bg-secondary-green/5 rounded-full filter blur-[140px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div id="portfolio-section-header" className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-4 h-4 text-secondary-green" />
            <span className="text-2xs uppercase tracking-[0.25em] text-secondary-green font-semibold font-mono">
              CASE STUDIES OF TRUTH
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-dark-premium max-w-2xl leading-tight">
            Digital Growth Partnerships In Action
          </h2>
          <p className="text-sm text-dark-premium/70 max-w-lg mt-4 font-normal">
            Read how our development experts deploy high-performance applications, custom stores, and automated solutions.
          </p>
        </div>

        {/* Case Studies Loop */}
        <div id="portfolio-case-studies" className="space-y-24 md:space-y-36">
          {caseStudiesData.map((project, idx) => {
            const isFeatured = project.id === "case-wazeer";
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isFeatured 
                    ? "bg-milk-white border border-primary-sage/30 rounded-[3rem] p-8 md:p-14 shadow-lg glow-primary relative" 
                    : ""
                }`}
                id={`case-study-card-${project.id}`}
              >
                {/* Wazeer International Featured Flag badge */}
                {isFeatured && (
                  <div className="absolute top-0 left-8 md:left-14 -translate-y-1/2 flex items-center gap-1.5 px-4.5 py-1.8 rounded-full bg-deep-forest text-primary-sage font-mono text-[10px] font-semibold uppercase tracking-widest border border-primary-sage/35 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-primary-sage animate-spin" />
                    Featured Growth Showcase
                  </div>
                )}

                {/* Media Column / Screenshot Mockup */}
                <div className={`lg:col-span-6 relative p-3 rounded-[2.2rem] bg-milk-white border border-primary-sage/15 shadow-sm overflow-hidden ${
                  isEven ? "" : "lg:order-2"
                }`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-sand">
                    <img
                      src={project.image}
                      alt={project.client}
                      className="w-full h-full object-cover object-center transform hover:scale-[1.04] transition-all duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Floating pill: Project Category */}
                    <div className="absolute top-4 left-4 bg-dark-premium/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest font-semibold border border-primary-sage/20 text-primary-sage">
                      {project.category}
                    </div>

                    {/* Highly stylish corporate brand logo placeholder inside mockup */}
                    <div className="absolute bottom-4 left-4 bg-milk-white/95 backdrop-blur-md px-4.5 py-2.5 rounded-xl border border-primary-sage/10 text-xs font-mono font-black tracking-[0.25em] text-deep-forest uppercase flex items-center gap-1.5 shadow-md">
                      <div className="w-2.5 h-2.5 rounded-full bg-secondary-green shrink-0 animate-ping" />
                      {project.logoText}
                    </div>
                  </div>
                </div>

                {/* Text Details Column */}
                <div className={`lg:col-span-6 flex flex-col text-left ${isEven ? "" : "lg:order-1"}`}>
                  
                  {/* Industry & Timeline line */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mb-4 text-xs font-mono font-semibold uppercase tracking-wider text-secondary-green">
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{project.industry}</span>
                    </div>
                    <span className="hidden sm:inline text-primary-sage/40">·</span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{project.timeline}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-dark-premium mb-4 leading-snug">
                    {project.project}
                  </h3>

                  {/* Representative details for Wazeer brand */}
                  {project.representative && (
                    <div className="mb-6 flex items-center gap-3 p-3.5 bg-sand/80 border border-primary-sage/10 rounded-2xl self-start">
                      <div className="w-8 h-8 rounded-xl bg-primary-sage/20 flex items-center justify-center">
                        <User className="w-4 h-4 text-deep-forest" />
                      </div>
                      <div>
                        <p className="text-[9px] font-mono text-dark-premium/60 uppercase tracking-wide">Client Endorsement</p>
                        <p className="text-xs font-bold text-dark-premium">{project.representative}</p>
                      </div>
                    </div>
                  )}

                  <p className="text-sm text-dark-premium/80 leading-relaxed mb-6 font-normal">
                    {project.summary}
                  </p>

                  {/* Challenge & Solution Side-by-Side block */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 py-5 border-y border-primary-sage/15">
                    <div>
                      <h4 className="text-[10px] font-mono uppercase tracking-widest text-deep-forest font-bold mb-1.5">Market Challenge</h4>
                      <p className="text-xs text-dark-premium/70 leading-relaxed font-normal">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-mono uppercase tracking-widest text-secondary-green font-bold mb-1.5">Strategic Solution</h4>
                      <p className="text-xs text-dark-premium/70 leading-relaxed font-normal">{project.solution}</p>
                    </div>
                  </div>

                  {/* Services Delivered Tag Pile */}
                  <div className="mb-6">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-dark-premium/60 font-bold mb-2.5">Expert Deliverables</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.servicesDelivered.map((serv, sIdx) => (
                        <span key={sIdx} className="text-[9px] font-mono font-medium px-2.5 py-1 rounded-lg bg-sand border border-primary-sage/10 text-deep-forest">
                          {serv}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results Checkmarks */}
                  <div className="mb-8">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-dark-premium/60 font-bold mb-3">Key Performance Results</h4>
                    <ul className="space-y-2">
                      {project.results.map((res, rIdx) => (
                        <li key={rIdx} className="flex gap-2 text-xs text-dark-premium/85 items-start font-normal">
                          <CheckCircle2 className="w-4 h-4 text-secondary-green shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link button */}
                  <button
                    onClick={handleConsultLink}
                    className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary-sage text-xs font-bold uppercase tracking-widest text-dark-premium bg-primary-sage/10 hover:bg-primary-sage hover:text-dark-premium transition-all duration-300 shadow-sm"
                    id={`case-study-cta-${project.id}`}
                  >
                    Consult on this type of project
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
