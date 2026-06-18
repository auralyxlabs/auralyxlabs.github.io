/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquareShare, PhoneCall, CalendarRange, X, MessageCircle } from "lucide-react";
import { siteMetadata } from "../data";

interface QuickContactHubProps {
  onScrollToForm: () => void;
}

export default function QuickContactHub({ onScrollToForm }: QuickContactHubProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Auto-hide tooltip after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll when Quick Contact Modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSelectOnSiteForm = () => {
    setIsOpen(false);
    // Slight delay to allow modal exit animation to flow first
    setTimeout(() => {
      onScrollToForm();
    }, 200);
  };

  const cleanWhatsappNumber = siteMetadata.contact.socials.whatsapp;
  const directCallUrl = `tel:${siteMetadata.whatsapp.replace(/\s+/g, "")}`;
  
  // Custom pre-filled message for better conversions
  const encodedMsg = encodeURIComponent(
    "Hi Auralyx Labs! I'm interested in booking a consultation for my digital product/system. I'd love to learn more."
  );
  const whatsAppDirectLink = `${cleanWhatsappNumber}?text=${encodedMsg}`;

  return (
    <>
      {/* Floating Action Button (Lower Right Corner) */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex flex-col items-end" id="quick-floating-action-container">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.95 }}
              className="mb-3 px-4 py-2.5 rounded-2xl bg-dark-premium text-milk-white text-2xs md:text-xs font-medium tracking-wide shadow-xl border border-primary-sage/15 relative max-w-[220px] text-center shrink-0 hidden sm:block"
              id="quick-hub-tooltip"
            >
              <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-dark-premium border-r border-b border-primary-sage/10 transform rotate-45" />
              <p>💬 Chat, call, or book instantly!</p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary-green hover:bg-deep-forest text-milk-white shadow-2xl flex items-center justify-center transition-colors duration-300 group cursor-pointer border border-primary-sage/20"
          id="quick-floating-hub-trigger"
          aria-label="Open Communication Hub"
        >
          {/* Real-time elegant pulse shadow rings */}
          <span className="absolute inset-0 rounded-full bg-secondary-green/30 animate-ping pointer-events-none scale-105" />
          
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7 transition-all duration-300 group-hover:rotate-12" />
        </motion.button>
      </div>

      {/* Connection Hub Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-premium/85 backdrop-blur-md z-50 overflow-y-auto overflow-x-hidden grid place-items-center p-4 md:p-8"
            id="quick-contact-hub-overlay"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-milk-white max-w-lg w-full rounded-3xl p-6 md:p-8 border border-primary-sage/15 shadow-2xl relative text-center my-auto"
              id="quick-contact-hub-card"
            >
              {/* Circular dismiss button with hover shadow */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-milk-white border border-primary-sage/15 hover:border-primary-sage/35 text-dark-premium hover:bg-sand/80 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                aria-label="Close Contact Hub"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              {/* Title Section */}
              <div className="mb-6 mt-2">
                <div className="w-12 h-12 rounded-2xl bg-secondary-green/10 flex items-center justify-center mx-auto mb-4 border border-secondary-green/10">
                  <MessageSquareShare className="w-6 h-6 text-secondary-green" />
                </div>
                <h3 className="text-xl md:text-2xl font-sans font-extrabold tracking-tight text-dark-premium select-none">
                  Quick Consultation Hub
                </h3>
                <p className="text-xs md:text-sm text-dark-premium/70 max-w-sm mx-auto mt-2 leading-relaxed">
                  Connect with the Auralyx Labs founding executives instantly through your preferred channel.
                </p>
              </div>

              {/* Action Routes Stack */}
              <div className="space-y-4" id="connection-routes-stack">
                {/* 1. 💬 WhatsApp Chat Option */}
                <a
                  href={whatsAppDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 text-left group"
                  id="choice-whatsapp-chat"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-600 transition-transform duration-300 group-hover:scale-105">
                    <MessageSquareShare className="w-5.5 h-5.5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800">Launch WhatsApp Chat</h4>
                    <p className="text-xs text-dark-premium/70 mt-0.5">Chat instantly: {siteMetadata.whatsapp}</p>
                  </div>
                  <div className="text-emerald-500 font-bold text-xs shrink-0 self-center hidden sm:block bg-emerald-500/10 px-2.5 py-1 rounded-full uppercase tracking-widest font-mono text-[9px]">
                    Fast Link
                  </div>
                </a>

                {/* 2. 📞 Cellular / Voice Call Option */}
                <a
                  href={directCallUrl}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-secondary-green/10 hover:bg-secondary-green/15 border border-secondary-green/10 hover:border-secondary-green/30 transition-all duration-300 text-left group"
                  id="choice-direct-call"
                >
                  <div className="w-11 h-11 rounded-xl bg-secondary-green/10 flex items-center justify-center shrink-0 text-secondary-green transition-transform duration-300 group-hover:scale-105">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-secondary-green">Call Directly</h4>
                    <p className="text-xs text-dark-premium/70 mt-0.5">Speak with us: {siteMetadata.whatsapp}</p>
                  </div>
                  <div className="text-secondary-green font-bold text-xs shrink-0 self-center hidden sm:block bg-secondary-green/10 px-2.5 py-1 rounded-full uppercase tracking-widest font-mono text-[9px]">
                    Voice Call
                  </div>
                </a>

                {/* 3. 📅 On-Site Interactive Form Option */}
                <button
                  onClick={handleSelectOnSiteForm}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl bg-deep-forest/5 hover:bg-deep-forest/10 border border-deep-forest/10 hover:border-deep-forest/30 transition-all duration-300 text-left group"
                  id="choice-onsite-form"
                >
                  <div className="w-11 h-11 rounded-xl bg-deep-forest/10 flex items-center justify-center shrink-0 text-deep-forest transition-transform duration-300 group-hover:scale-105">
                    <CalendarRange className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-deep-forest">Submit Project Brief</h4>
                    <p className="text-xs text-dark-premium/70 mt-0.5">Fill out our on-site project planner</p>
                  </div>
                  <div className="text-deep-forest font-bold text-xs shrink-0 self-center hidden sm:block bg-deep-forest/10 px-2.5 py-1 rounded-full uppercase tracking-widest font-mono text-[9px]">
                    Online
                  </div>
                </button>
              </div>

              {/* Secure business guarantee disclaimer */}
              <p className="text-[10px] font-mono text-dark-premium/45 mt-6 tracking-wide select-none uppercase">
                Active Client Security & Reliability Standards Gauranteed
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
