/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquareShare,
  CircleDot
} from "lucide-react";
import { siteMetadata } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const servicesDropdown = [
    "Website Development",
    "Mobile App Development",
    "E-Commerce Solutions",
    "UI/UX Visual Design",
    "Brand Systems & Graphics",
    "Custom Development Platforms"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate luxury API transit latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Clean form parameters
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-milk-white overflow-hidden border-b border-primary-sage/10">
      {/* Decorative Blur Shapes */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-sage/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full animate-fade-in">
        
        {/* Section Header */}
        <div id="contact-header" className="flex flex-col items-start text-left mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-4">
            <CircleDot className="w-4 h-4 text-secondary-green animate-pulse" />
            <span className="text-2xs uppercase tracking-[0.25em] text-secondary-green font-semibold font-mono">
              COLLABORATION BRIEF
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-dark-premium max-w-2xl leading-tight">
            Initiate Your Project Consultation
          </h2>
          <p className="text-sm text-dark-premium/70 max-w-lg mt-4 font-normal">
            Have a project milestone or database design challenge? Fill out our intake brief below. Our co-founding executives will reply within 12 business hours.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="contact-wrapper-grid">
          
          {/* Left Column: Premium Contact Form */}
          <div className="lg:col-span-12 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-10 rounded-[2rem] bg-sand/60 border border-primary-sage/10 shadow-sm relative overflow-hidden"
              id="contact-form-bento"
            >
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="client-consultation-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="flex flex-col text-left">
                        <label htmlFor="form-name" className="text-[10px] uppercase tracking-widest text-deep-forest font-mono font-bold mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="form-name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Myda Noor"
                          className="px-4 py-3 rounded-xl border border-primary-sage/15 bg-milk-white text-sm text-dark-premium placeholder-dark-premium/30 focus:outline-none focus:ring-1 focus:ring-secondary-green focus:border-secondary-green transition-all"
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col text-left">
                        <label htmlFor="form-email" className="text-[10px] uppercase tracking-widest text-deep-forest font-mono font-bold mb-2">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="form-email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="partner@gmail.com"
                          className="px-4 py-3 rounded-xl border border-primary-sage/15 bg-milk-white text-sm text-dark-premium placeholder-dark-premium/30 focus:outline-none focus:ring-1 focus:ring-secondary-green focus:border-secondary-green transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Company Input */}
                      <div className="flex flex-col text-left">
                        <label htmlFor="form-company" className="text-[10px] uppercase tracking-widest text-deep-forest font-mono font-bold mb-2">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          id="form-company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Wazeer International"
                          className="px-4 py-3 rounded-xl border border-primary-sage/15 bg-milk-white text-sm text-dark-premium placeholder-dark-premium/30 focus:outline-none focus:ring-1 focus:ring-secondary-green focus:border-secondary-green transition-all"
                        />
                      </div>

                      {/* Service Dropdown */}
                      <div className="flex flex-col text-left">
                        <label htmlFor="form-service" className="text-[10px] uppercase tracking-widest text-deep-forest font-mono font-bold mb-2">
                          Required Service
                        </label>
                        <select
                          id="form-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="px-4 py-3 rounded-xl border border-primary-sage/15 bg-milk-white text-sm text-dark-premium focus:outline-none focus:ring-1 focus:ring-secondary-green focus:border-secondary-green transition-all"
                        >
                          <option value="">Select Service Specialty</option>
                          {servicesDropdown.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message textarea */}
                    <div className="flex flex-col text-left">
                      <label htmlFor="form-message" className="text-[10px] uppercase tracking-widest text-deep-forest font-mono font-bold mb-2">
                        Message Brief *
                      </label>
                      <textarea
                        id="form-message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please detail your platform requirements or general timing parameters..."
                        className="px-4 py-3 rounded-xl border border-primary-sage/15 bg-milk-white text-sm text-dark-premium placeholder-dark-premium/30 focus:outline-none focus:ring-1 focus:ring-secondary-green focus:border-secondary-green transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-4 bg-primary-sage hover:bg-deep-forest disabled:bg-primary-sage/40 text-dark-premium hover:text-milk-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 border border-primary-sage"
                      id="form-submit-button"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-dark-premium/30 border-t-dark-premium rounded-full animate-spin" />
                          Transmitting...
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-12"
                    id="contact-form-success-alert"
                  >
                    <div className="w-16 h-16 rounded-full bg-secondary-green/10 flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-secondary-green" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-premium mb-3">
                      Inquiry Transmitted Successfully
                    </h3>
                    <p className="text-sm text-dark-premium/80 max-w-sm leading-relaxed mb-8">
                      Thank you for contacting Auralyx Labs. One of our co-founding executives will review your launch parameters and reach out shortly.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-2.5 rounded-full border border-primary-sage text-xs font-bold uppercase tracking-widest text-dark-premium hover:bg-primary-sage transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Column: Premium Contact Cards */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
              id="contact-info-cards-container"
            >
              {/* WhatsApp direct click card */}
              <a
                href={siteMetadata.contact.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-sand/60 border border-primary-sage/10 hover:border-primary-sage/40 flex items-center gap-4 text-left transition-all duration-300 block"
                id="contact-card-whatsapp"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-sage hover:bg-deep-forest flex items-center justify-center shrink-0 border border-transparent shadow-sm transition-colors">
                  <MessageSquareShare className="w-4 h-4 text-dark-premium group-hover:text-milk-white" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono tracking-wider uppercase text-dark-premium/60 font-bold mb-1">
                    Direct WhatsApp
                  </h4>
                  <p className="text-sm font-bold text-dark-premium group-hover:text-deep-forest transition-colors">
                    {siteMetadata.whatsapp}
                  </p>
                  <p className="text-[9px] text-secondary-green uppercase tracking-widest mt-0.5 font-mono font-bold">
                    Instant Chat Active
                  </p>
                </div>
              </a>

              {/* Email direct click card */}
              <a
                href={`mailto:${siteMetadata.email}`}
                className="group p-6 rounded-2xl bg-sand/60 border border-primary-sage/10 hover:border-primary-sage/40 flex items-center gap-4 text-left transition-all duration-300 block"
                id="contact-card-email"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-sage hover:bg-deep-forest flex items-center justify-center shrink-0 border border-transparent shadow-sm transition-colors">
                  <Mail className="w-4 h-4 text-dark-premium group-hover:text-milk-white" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono tracking-wider uppercase text-dark-premium/60 font-bold mb-1">
                    Email Correspondence
                  </h4>
                  <p className="text-sm font-bold text-dark-premium group-hover:text-deep-forest transition-colors">
                    {siteMetadata.email}
                  </p>
                  <p className="text-[9px] text-secondary-green uppercase tracking-widest mt-0.5 font-mono font-bold">
                    12 Hr Response Target
                  </p>
                </div>
              </a>

              {/* Physical Location Card */}
              <div
                className="p-6 rounded-2xl bg-sand/60 border border-primary-sage/10 flex items-center gap-4 text-left shadow-sm"
                id="contact-card-location"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-sage flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-dark-premium" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono tracking-wider uppercase text-dark-premium/60 font-bold mb-1">
                    Office Location
                  </h4>
                  <p className="text-sm font-bold text-dark-premium">
                    {siteMetadata.location}
                  </p>
                </div>
              </div>

              {/* Schedules / Availability Card */}
              <div
                className="p-6 rounded-2xl bg-sand/60 border border-primary-sage/10 flex items-start gap-4 text-left shadow-sm"
                id="contact-card-schedule"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-sage flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-dark-premium" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono tracking-wider uppercase text-dark-premium/60 font-bold mb-1">
                    Project Status & Hours
                  </h4>
                  <span className="inline-block bg-secondary-green/10 border border-secondary-green/20 text-secondary-green text-[9px] font-extrabold tracking-wide uppercase px-2.5 py-1 rounded-full mb-2 mt-0.5">
                    {siteMetadata.contact.availability}
                  </span>
                  <p className="text-xs text-dark-premium/85 leading-relaxed font-sans font-normal">
                    {siteMetadata.contact.businessHours}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
