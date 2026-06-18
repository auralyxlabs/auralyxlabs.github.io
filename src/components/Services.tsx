/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Globe, 
  Smartphone, 
  ShoppingBag, 
  Cpu, 
  Palette, 
  Gamepad2, 
  FileText, 
  ArrowUpRight, 
  X,
  CheckCircle2,
  Package,
  Sparkles
} from "lucide-react";
import { servicesData } from "../data";
import { ServiceItem } from "../types";

interface ServicesProps {
  onExploreAll?: () => void;
}

export default function Services({ onExploreAll }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Lock background body scroll when modal is active
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  const getIcon = (id: string) => {
    switch (id) {
      case "srv-web": 
      case "srv-web-custom": return Globe;
      case "srv-app": return Smartphone;
      case "srv-ecommerce": return ShoppingBag;
      case "srv-custom-software": return Cpu;
      case "srv-uiux": return Palette;
      case "srv-game": return Gamepad2;
      case "srv-fyp": default: return FileText;
    }
  };

  return (
    <section id="services" className="relative py-24 md:py-32 bg-milk-white overflow-hidden border-b border-primary-sage/10">
      {/* Decorative typography background */}
      <div className="absolute right-0 top-1/4 text-[8rem] font-sans text-primary-sage/5 font-extrabold select-none pointer-events-none transform translate-x-12 rotate-90 leading-none">
        AURALYX LABS
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div id="services-section-header" className="flex flex-col items-start text-left mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-sage" />
            <span className="text-2xs uppercase tracking-[0.25em] text-secondary-green font-semibold font-mono">OUR CAPABILITIES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-dark-premium max-w-2xl leading-tight">
            Premium Digital Services Tailored for Absolute Scale
          </h2>
          <p className="text-sm text-dark-premium/70 max-w-lg mt-4 font-normal">
            We operate with clear schedules, component-focused React environments, and professional delivery speed to maximize your business growth.
          </p>
        </div>

        {/* 7 Card Grid */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, idx) => {
            const Icon = getIcon(service.id);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: Math.min(idx * 0.05, 0.4) }}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-sand/60 border border-primary-sage/10 hover:border-primary-sage/35 hover:bg-sand/90 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 text-left"
                id={`service-card-${service.id}`}
              >
                <div>
                  {/* Card top row */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-milk-white border border-primary-sage/15 flex items-center justify-center group-hover:border-primary-sage/40 group-hover:bg-primary-sage/5 transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5 text-deep-forest group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-[9px] font-mono font-semibold tracking-wider text-secondary-green bg-secondary-green/10 px-2.5 py-1 rounded-full uppercase">
                      {service.category || "Consulting"}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-dark-premium mb-3 group-hover:text-deep-forest transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-dark-premium/80 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Button CTA */}
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-deep-forest group-hover:text-secondary-green tracking-widest uppercase transition-colors"
                  id={`learn-more-btn-${service.id}`}
                >
                  Explore Details
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform animate-pulse" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Explore All Services Action Area to move users to Dedicated Services Page */}
        {onExploreAll && (
          <div className="mt-16 text-center" id="services-explore-all-container">
            <button
              onClick={onExploreAll}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-deep-forest text-milk-white hover:bg-secondary-green transition-all duration-300 shadow-md hover:shadow-xl font-sans text-xs md:text-sm font-bold uppercase tracking-widest hover:-translate-y-0.5 active:translate-y-0"
              id="explore-all-services-button"
            >
              Explore All Services
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        )}
      </div>

      {/* Dynamic Detail Modal with enhanced scrolling and lock state handling */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-premium/80 backdrop-blur-md z-50 overflow-y-auto overflow-x-hidden grid place-items-center p-4 md:p-8"
            id="service-detail-modal-overlay"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-milk-white max-w-2xl w-full rounded-3xl p-6 md:p-10 border border-primary-sage/20 shadow-2xl relative text-left my-auto"
              id="service-detail-modal"
            >
              {/* High Contrast, Circular floating Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-milk-white border border-primary-sage/15 hover:border-primary-sage/35 text-dark-premium hover:bg-sand/80 shadow-md hover:shadow-lg transition-all duration-300 z-10 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              {/* Title Header - Extra padding-right to avoid overlap with Close button */}
              <div className="flex items-start gap-4 mb-6 pr-12 md:pr-14">
                <div className="w-12 h-12 rounded-xl bg-primary-sage/15 flex items-center justify-center shrink-0">
                  {React.createElement(getIcon(selectedService.id), { className: "w-6 h-6 text-deep-forest" })}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-secondary-green font-semibold block">
                    {selectedService.category || "Service Detail"}
                  </span>
                  <h4 className="text-xl md:text-3.5xl font-bold text-dark-premium">
                    {selectedService.title}
                  </h4>
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="space-y-6 text-sm text-dark-premium/80 leading-relaxed font-normal">
                <p className="text-base font-normal text-dark-premium leading-relaxed">
                  {selectedService.longDescription}
                </p>

                {/* Bullets mapping */}
                {selectedService.bullets && selectedService.bullets.length > 0 && (
                  <div className="space-y-2 bg-sand/50 p-5 rounded-2xl border border-primary-sage/10">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-deep-forest uppercase block mb-1">Scope Features</span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedService.bullets.map((bullet, id) => (
                        <li key={id} className="text-xs flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary-green mt-1.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Sub Benefits */}
                {selectedService.benefits && selectedService.benefits.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-deep-forest uppercase block mb-3">Key Strategic Benefits</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedService.benefits.map((benefit, id) => (
                        <div key={id} className="flex gap-2.5 items-start">
                          <CheckCircle2 className="w-4 h-4 text-primary-sage mt-0.5 shrink-0" />
                          <span className="text-xs leading-relaxed text-dark-premium/90">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Included Deliverables */}
                {selectedService.deliverables && selectedService.deliverables.length > 0 && (
                  <div className="pt-4 border-t border-primary-sage/15">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-deep-forest uppercase block mb-3">Launch Deliverables Package</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.deliverables.map((deliv, id) => (
                        <div key={id} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sand border border-primary-sage/10 text-2xs font-mono font-semibold text-deep-forest uppercase">
                          <Package className="w-3.5 h-3.5 text-secondary-green" />
                          {deliv}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-primary-sage/15 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-2xs font-mono text-dark-premium/60 uppercase">
                  Transparent Timelines · Complete Client Honesty
                </span>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-full border border-primary-sage/20 text-xs font-bold uppercase tracking-widest text-dark-premium hover:bg-sand transition-all"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => {
                      setSelectedService(null);
                      const element = document.querySelector("#contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="flex-1 sm:flex-none text-center px-6 py-2.5 rounded-full bg-primary-sage hover:bg-deep-forest hover:text-milk-white text-dark-premium text-xs font-bold uppercase tracking-widest transition-all shadow-md border border-primary-sage"
                  >
                    {selectedService.ctaText || "Book a Consultation"}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
