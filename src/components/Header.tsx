/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, MessageSquare, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteMetadata } from "../data";
import ALLogo from "./ALLogo";

interface HeaderProps {
  currentPage: "home" | "services";
  onNavigate: (page: "home" | "services") => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#hero", page: "home" as const },
    { name: "About", href: "#about", page: "home" as const },
    { name: "Services", href: "#services", page: "home" as const },
    { name: "Case Study", href: "#case-studies", page: "home" as const },
    { name: "How We Partner", href: "#process", page: "home" as const },
    { name: "Team", href: "#team", page: "home" as const },
    { name: "Testimonial", href: "#testimonials", page: "home" as const },
    { name: "Contact", href: "#contact", page: "home" as const },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof menuItems[0]) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (item.name === "Home") {
      onNavigate("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (currentPage !== item.page) {
      onNavigate(item.page);
      // Wait slightly for page render before scrolling
      setTimeout(() => {
        const element = document.querySelector(item.href);
        if (element) {
          const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: topOffset, behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(item.href);
      if (element) {
        const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: topOffset, behavior: "smooth" });
      } else {
        // If element is not found (e.g. on services page but link is home), scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      id="main-nav-header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-premium/95 backdrop-blur-xl border-b border-deep-forest/20 py-3.5 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Modern Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          id="logo-brand-link"
          className="flex items-center gap-3 group"
        >
          <ALLogo size={42} lightMode={false} />
          <span className="font-sans text-xl font-bold tracking-tight text-milk-white transition-colors duration-300">
            Auralyx<span className="font-light text-primary-sage ml-1 transition-all duration-300 group-hover:text-white">Labs</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-navbar">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item)}
              className={`text-sm font-medium tracking-wide transition-all duration-200 relative py-2 group ${
                (currentPage === "services" && item.name === "Services")
                  ? "text-primary-sage font-semibold"
                  : "text-milk-white/80 hover:text-primary-sage"
              }`}
              id={`nav-link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 h-[2px] bg-primary-sage transition-all duration-300 ease-out ${
                (currentPage === "services" && item.name === "Services") ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
              setTimeout(() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
            className="px-5 py-2.5 rounded-full border border-primary-sage/40 text-xs font-semibold uppercase tracking-widest text-primary-sage bg-primary-sage/5 hover:bg-primary-sage hover:text-dark-premium transition-all duration-300 shadow-sm"
            id="nav-cta-button"
          >
            Start Project
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-milk-white hover:text-primary-sage transition-colors focus:outline-none"
          aria-label="Toggle menu"
          id="mobile-menu-trigger"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full bg-dark-premium border-b border-deep-forest/30 absolute top-full left-0 overflow-hidden box-border z-40"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item)}
                  className="text-lg font-sans font-medium text-milk-white/90 hover:text-primary-sage transition-colors py-1 block border-b border-deep-forest/10"
                  id={`mobile-nav-link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  onNavigate("home");
                  setTimeout(() => {
                    const element = document.querySelector("#contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 100);
                }}
                className="w-full text-center px-6 py-3.5 rounded-xl border border-primary-sage text-sm font-semibold uppercase tracking-widest text-primary-sage bg-primary-sage/5 hover:bg-primary-sage hover:text-dark-premium transition-all duration-300"
                id="mobile-nav-cta-button"
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
