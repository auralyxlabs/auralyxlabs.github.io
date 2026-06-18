/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Team from "./components/Team";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServicesPage from "./components/ServicesPage";
import QuickContactHub from "./components/QuickContactHub";

export default function App() {
  // Simple state routing: 'home' | 'services'
  // Autodetect based on pathname to support direct physical multi-page access (/services.html)
  const getInitialPage = () => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path.endsWith("services.html") || path.includes("/services")) {
        return "services";
      }
    }
    return "home";
  };

  const [currentPage, setCurrentPage] = useState<"home" | "services">(getInitialPage());

  // Dynamic Favicon Generation from "AL" logo vector string (zero assets packaging worry)
  useEffect(() => {
    const link = (document.querySelector("link[rel~='icon']") || document.createElement('link')) as HTMLLinkElement;
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="46" stroke="%239CB080" stroke-width="2" fill="%23273338"/>
        <text x="50%" y="60%" font-family="sans-serif" font-size="36" fill="%239CB080" font-weight="900" text-anchor="middle">AL</text>
      </svg>
    `)}`;
    document.getElementsByTagName('head')[0].appendChild(link);
    
    // Scroll to top on page switches
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  // Support matching browser back/forward multi-page clicks transparently
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleNavigation = (page: "home" | "services") => {
    setCurrentPage(page);
    // Push clean history state to simulate real URL navigation changes
    if (typeof window !== "undefined" && window.history.pushState) {
      const url = page === "services" ? "/services.html" : "/";
      window.history.pushState({ page }, "", url);
    }
  };

  const scrollToContactNode = () => {
    if (currentPage !== "home") {
      setCurrentPage("home");
    }
    setTimeout(() => {
      const element = document.querySelector("#contact");
      if (element) {
        const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: topOffset,
          behavior: "smooth"
        });
        
        // Brief flash outline highlight on index project briefs form to orient eyeballs
        const formEl = document.querySelector("#contact-form-bento");
        if (formEl) {
          formEl.classList.add("ring-2", "ring-deep-forest/40");
          setTimeout(() => {
            formEl.classList.remove("ring-2", "ring-deep-forest/40");
          }, 2000);
        }
      }
    }, 120);
  };

  return (
    <div 
      className="relative min-h-screen bg-milk-white text-dark-premium selection:bg-primary-sage selection:text-dark-premium" 
      id="agency-web-root"
    >
      {/* Shared Navigation Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigation} />

      <main className="relative z-10" id="main-content-flow">
        {currentPage === "home" ? (
          <>
            {/* 1. Cinematic Hero Section */}
            <Hero />
            
            {/* 2. Brand Stats Section */}
            <Stats />
            
            {/* 3. About Section */}
            <About />
            
            {/* 4. Services Capabilities Overview (Simple dashboard list) */}
            <Services onExploreAll={() => handleNavigation("services")} />
            
            {/* Reusable CTA Block after Services capabilities */}
            <CTA 
              title="Let's Architect Your Custom System" 
              description="Partner with our primary technical co-founders to review your wireframes, optimize client state, and map scalable digital routes." 
              primaryText="Submit Project Brief" 
              secondaryText="Review Tech SLA"
              variant="glass" 
            />
            
            {/* 5. Case Studies Portfolio Section (Featuring Wazeer International) */}
            <Portfolio />

            {/* Reusable CTA Block after Case Studies portfolio */}
            <CTA 
              title="Lower Abandonment & Scale Revenue" 
              description="Learn how replacing generic spreadsheets with high-powered normalized databases can optimize your back-office and customer checkouts." 
              primaryText="Request Case Review" 
              secondaryText="Explore Services"
              variant="sage" 
            />
            
            {/* 6. Why Choose Us (Bento values grid) & Process (5 stages pipeline) */}
            <WhyChooseUs />
            <Process />

            {/* Reusable CTA Block after How We Partner process steps */}
            <CTA 
              title="Experience 100% Engineering Integrity" 
              description="Our predictive phase constraints guarantee scheduled release days with stable performance, accompanied by full system autonomy." 
              primaryText="Schedule Call Now" 
              secondaryText="View SLA Details"
              variant="forest" 
            />
            
            {/* 7. Meet The Leadership Team Component */}
            <Team />
            
            {/* 8. Testimonials Sliding Carousel Grid */}
            <Testimonials />

            {/* Reusable CTA Block after Testimonials */}
            <CTA 
              title="Ready to Capture Real Business Value?" 
              description="Join ambitious business operations across 10+ industries that have committed to 100% hand-crafted engineering and zero licensing fees." 
              primaryText="Book Your Slot" 
              secondaryText="Schedule Consultation"
              variant="glass" 
            />
          </>
        ) : (
          /* Dedicated Services Page */
          <ServicesPage />
        )}
        
        {/* Shared Lead intake form visible on both home and capabilities views */}
        <Contact />
      </main>

      {/* Shared Large Footer */}
      <Footer onNavigate={handleNavigation} />

      {/* Floating Connectivity Hub for WhatsApp, Live Calling and Form Routing */}
      <QuickContactHub onScrollToForm={scrollToContactNode} />
    </div>
  );
}
