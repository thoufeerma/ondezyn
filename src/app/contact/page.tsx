"use client";

import React, { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `Hi, I want to begin a custom design with ONDEZYN.\n\nFull Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nRequirement: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919955002209?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-[120px] pb-[100px] bg-black">
      <SectionWrapper id="contact-hero" className="container mx-auto px-10 max-w-[1400px]">
        <div className="text-center mb-20 reveal">
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1] mb-6 text-white">
            Connect With <span className="gradient-text">Us</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto font-light">
            Visit our atelier or schedule a digital consultation to begin your design journey.
          </p>
        </div>

        {/* Global Conversion CTA for Contact Page */}
        <div className="glass-panel p-16 rounded-[3rem] text-center mb-20 reveal border-accent-gold/20 bg-gradient-to-br from-accent-gold/5 to-transparent">
          <h2 className="text-3xl lg:text-4xl mb-6 font-heading">Secure Your Private Session</h2>
          <p className="text-text-secondary mb-10 max-w-xl mx-auto">Work directly with our master designers to craft your next masterpiece.</p>
          <CTAButton 
            text="Begin Your Custom Design" 
            href="#contact-form"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="reveal">
            <h3 className="text-3xl mb-10 font-heading">Our <span className="text-accent-orange">Atelier</span></h3>
            
            <div className="mt-8 mb-12 p-8 glass-panel rounded-2xl border-white/5 shadow-2xl">
              <h4 className="text-white font-bold mb-4 tracking-wider uppercase text-xs opacity-50">Legal & Registration</h4>
              <div className="space-y-4 text-sm tracking-widest text-text-secondary uppercase">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>CIN NO</span>
                  <span className="text-white">U14101KL2025PTC097419</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>PAN</span>
                  <span className="text-white">AAECO8883G</span>
                </div>
                <div className="flex justify-between">
                  <span>TAN</span>
                  <span className="text-white">TVDO01574G</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex items-start gap-6 group">
                <div className="w-[60px] h-[60px] rounded-2xl bg-glass-bg border border-glass-border flex items-center justify-center text-accent-orange shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,111,0,0.2)] transition-all duration-500 shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="text-xl mb-2 font-heading tracking-wide">Studio Address</h5>
                  <p className="text-text-secondary leading-relaxed font-light">
                    6/220B, MANGALATH, INDIRAJI ROAD<br />
                    KUZHIVILAKONAM, PUNNAKULAM<br />
                    KOTTUKAL.PO, TRIVANDRUM – 695501<br />
                    KERALAM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-[60px] h-[60px] rounded-2xl bg-glass-bg border border-glass-border flex items-center justify-center text-accent-orange shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,111,0,0.2)] transition-all duration-500 shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="text-xl mb-2 font-heading tracking-wide">Inquiries</h5>
                  <a href="tel:+919955002209" className="text-text-secondary text-lg font-light tracking-wider hover:text-accent-orange transition-colors">+91 99550 02209</a>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-[60px] h-[60px] rounded-2xl bg-glass-bg border border-glass-border flex items-center justify-center text-accent-orange shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,111,0,0.2)] transition-all duration-500 shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="text-xl mb-2 font-heading tracking-wide">Email</h5>
                  <p className="text-text-secondary text-lg font-light tracking-wider uppercase">ONDEZYN2025@GMAIL.COM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reveal">
            <form id="contact-form" onSubmit={handleSubmit} className="glass-panel p-12 rounded-[3rem] flex flex-col gap-8 relative overflow-hidden shadow-2xl hover:border-accent-orange/10 transition-all duration-500">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent-orange/5 blur-[80px] -z-10"></div>
              <h3 className="text-3xl mb-2 font-heading">Send a Message</h3>
              <p className="text-text-secondary text-sm mb-4 font-light">We typically respond within 24 hours.</p>
              
              <div className="space-y-6">
                <div className="relative">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="w-full bg-white/5 border-none border-b border-glass-border py-4 text-white font-body text-base transition-all duration-300 focus:outline-none focus:border-accent-orange focus:bg-white/10 px-4" />
                </div>
                <div className="relative">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="w-full bg-white/5 border-none border-b border-glass-border py-4 text-white font-body text-base transition-all duration-300 focus:outline-none focus:border-accent-orange focus:bg-white/10 px-4" />
                </div>
                <div className="relative">
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="w-full bg-white/5 border-none border-b border-glass-border py-4 text-white font-body text-base transition-all duration-300 focus:outline-none focus:border-accent-orange focus:bg-white/10 px-4" />
                </div>
                <div className="relative">
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your requirements..." required className="w-full bg-white/5 border-none border-b border-glass-border py-4 text-white font-body text-base transition-all duration-300 focus:outline-none focus:border-accent-orange focus:bg-white/10 px-4 h-[150px] resize-none"></textarea>
                </div>
              </div>
              
              <button type="submit" className="btn-glow self-start mt-4 group w-full lg:w-auto justify-center transition-all hover:scale-[1.03]">
                Submit Message <ArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform duration-300" size={18} />
              </button>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
