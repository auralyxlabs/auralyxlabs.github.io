/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Linkedin, Mail, Sparkles, Trophy } from "lucide-react";
import { teamData } from "../data";

export default function Team() {
  return (
    <section id="team" className="relative py-24 md:py-32 bg-milk-white overflow-hidden border-b border-primary-sage/10">
      {/* Decorative Blur Orb */}
      <div className="absolute right-10 top-1/3 w-80 h-80 bg-primary-sage/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div id="team-section-header" className="flex flex-col items-start text-left mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-4 h-4 text-secondary-green" />
            <span className="text-2xs uppercase tracking-[0.25em] text-secondary-green font-semibold font-mono">
              AGENCY LEADERSHIP
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-dark-premium max-w-2xl leading-tight">
            Meet The Leadership Team
          </h2>
          <p className="text-sm text-dark-premium/70 max-w-lg mt-4 font-normal">
            The people driving innovation, creativity, and growth at Auralyx Labs.
          </p>
        </div>

        {/* Executive Profile Cards with Real Unsplash Portraits */}
        <div id="team-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {teamData.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-sand/60 border border-primary-sage/10 hover:border-primary-sage/40 hover:bg-sand hover:shadow-lg rounded-[2rem] p-8 text-left transition-all duration-300 flex flex-col justify-between"
              id={`team-member-${member.id}`}
            >
              <div>
                {/* Real High-End Professional Executive Portrait Container */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 border border-primary-sage/10 group-hover:border-primary-sage/30 shadow-sm transition-all duration-300">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] transition-all duration-700 ease-out brightness-95"
                    referrerPolicy="no-referrer"
                    id={`team-member-portrait-${member.id}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-premium/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Subtle Elegant Badge Tag */}
                  <div className="absolute bottom-3 right-3 w-7 h-7 rounded-lg bg-milk-white/95 backdrop-blur-md flex items-center justify-center border border-primary-sage/20 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-secondary-green" />
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-xl font-bold text-dark-premium group-hover:text-deep-forest transition-colors block">
                  {member.name}
                </h3>
                <span className="text-2xs font-mono font-bold uppercase tracking-[0.18em] text-secondary-green block mt-1 mb-4">
                  {member.position}
                </span>

                <p className="text-xs sm:text-sm text-dark-premium/80 leading-relaxed mb-8 font-normal">
                  {member.shortBio}
                </p>
              </div>

              {/* Action Linkages */}
              <div className="flex gap-3 pt-6 border-t border-primary-sage/10">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-primary-sage/20 text-2xs font-bold uppercase tracking-wider text-dark-premium hover:text-secondary-green hover:border-primary-sage bg-milk-white transition-all shadow-sm"
                  id={`team-${member.id}-linkedin`}
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary-sage hover:bg-deep-forest text-2xs font-bold uppercase tracking-wider text-dark-premium hover:text-milk-white transition-all shadow-sm border border-primary-sage"
                  id={`team-${member.id}-email`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  Email
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
