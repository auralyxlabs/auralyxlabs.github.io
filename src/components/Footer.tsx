/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { 
  Instagram, 
  Linkedin, 
  Facebook, 
  MessageCircle, 
  FileText,
  Clock,
  MapPin,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { siteMetadata } from "../data";
import ALLogo from "./ALLogo";

interface FooterProps {
  onNavigate?: (page: "home" | "services") => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, page: "home" | "services" = "home") => {
    e.preventDefault();
    
    if (onNavigate) {
      onNavigate(page);
    }

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: topOffset,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  const quickLinks = [
    { name: "Home", href: "#hero", page: "home" as const },
    { name: "About Us", href: "#about", page: "home" as const },
    { name: "Capabilities Overview", href: "#services", page: "services" as const },
    { name: "Case Studies Portfolio", href: "#case-studies", page: "home" as const },
    { name: "Meet The Leadership", href: "#team", page: "home" as const },
    { name: "Partner FAQ", href: "#faq", page: "services" as const },
    { name: "GetIntake Brief", href: "#contact", page: "home" as const },
  ];

  const footerServicesList = [
    "Web & Custom Development",
    "Mobile & Desktop Apps",
    "E-Commerce Solutions",
    "UI/UX & Graphic Design",
    "Game Development",
    "Technical Documentation",
  ];

  // Map requested social links to icons
  const getSocialIcon = (key: string) => {
    switch (key) {
      case "instagram": return Instagram;
      case "linkedin": return Linkedin;
      case "facebook": return Facebook;
      case "whatsapp": return MessageCircle;
      default: return FileText;
    }
  };

  return (
    <footer id="footer-section" className="relative bg-dark-premium border-t border-deep-forest/40 pt-16 pb-12 overflow-hidden text-left text-milk-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Upper Segment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-deep-forest/30" id="footer-main-grid">
          
          {/* Logo & Manifesto Column */}
          <div className="lg:col-span-4 space-y-6 flex flex-col items-start text-left">
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, "#hero", "home")}
              className="flex items-center gap-3 group"
              id="footer-logo-link"
            >
              <ALLogo size={36} lightMode={false} />
              <span className="font-sans text-lg font-bold tracking-tight text-milk-white">
                Auralyx<span className="font-light text-primary-sage ml-1">Labs</span>
              </span>
            </a>
            
            <p className="text-xs text-milk-white/70 leading-relaxed font-sans max-w-sm">
              We help businesses launch, scale, and optimize online with high-performance web systems, custom retail stores, and targeted visual systems built to secure conversion success.
            </p>

            {/* Social handles list */}
            <div className="flex items-center gap-3.5" id="footer-socials-wrapper">
              {Object.entries(siteMetadata.contact.socials).map(([key, value]) => {
                const IconComponent = getSocialIcon(key);
                return (
                  <a
                    key={key}
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8.5 h-8.5 rounded-lg bg-deep-forest/30 border border-deep-forest/40 text-milk-white/75 hover:text-primary-sage hover:border-primary-sage flex items-center justify-center transition-all shadow-sm"
                    title={`Follow Auralyx Labs on ${key}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links list Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary-sage font-extrabold pb-1">
              Agency Directory
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((k) => (
                <li key={k.name}>
                  <a
                    href={k.href}
                    onClick={(e) => handleLinkClick(e, k.href, k.page)}
                    className="text-xs text-milk-white/80 hover:text-primary-sage tracking-wide transition-colors font-sans block"
                  >
                    {k.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Detailed Custom Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary-sage font-extrabold pb-1">
              Development Scope
            </h4>
            <ul className="space-y-2.5">
              {footerServicesList.map((srv) => (
                <li key={srv}>
                  <a
                    href="#services"
                    onClick={(e) => handleLinkClick(e, "#services", "services")}
                    className="text-xs text-milk-white/80 hover:text-primary-sage tracking-wide transition-colors font-sans block"
                  >
                    {srv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Location Column */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary-sage font-extrabold pb-1">
              Office Location
            </h4>
            <ul className="space-y-3 font-sans text-left">
              <li className="flex items-start gap-2.5 text-xs text-milk-white/85">
                <MapPin className="w-4 h-4 text-primary-sage shrink-0 mt-0.5" />
                <span>
                  Sialkot, Punjab, Pakistan
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-milk-white/85">
                <Clock className="w-4 h-4 text-primary-sage shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p>Mon - Fri, 9:00 AM - 6:00 PM</p>
                  <p className="text-[9px] text-primary-sage/65 uppercase tracking-wider font-mono">Pakistan Standard Time (PKT)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Compliance Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-left" id="footer-compliance-bar">
          <p className="text-[11px] font-mono text-milk-white/60 uppercase tracking-wider">
            &copy; {currentYear} Auralyx Labs. All Digital Rights Reserved.
          </p>

          <div className="flex items-center gap-6" id="footer-legal-links">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact", "home")}
              className="text-[10px] font-mono text-milk-white/60 uppercase tracking-widest hover:text-primary-sage transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-deep-forest select-none text-xs">|</span>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact", "home")}
              className="text-[10px] font-mono text-milk-white/60 uppercase tracking-widest hover:text-primary-sage transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
