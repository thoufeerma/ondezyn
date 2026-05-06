"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import { Phone, Mail, MapPin, ArrowRight, Instagram, Facebook, MessageCircle, QrCode, X } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isQrOpen, setIsQrOpen] = useState(false);

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

  const socialLinks = [
    {
      id: "social-instagram",
      label: "Instagram",
      href: "https://www.instagram.com/ondezyn/",
      color: "hover:bg-gradient-to-br hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045]",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    },
    {
      id: "social-facebook",
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61579379981046",
      color: "hover:bg-[#1877f2]",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      )
    },
    {
      id: "social-whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/919955002209",
      color: "hover:bg-[#25D366]",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      )
    },
    {
      id: "social-email",
      label: "Email",
      href: "mailto:ONDEZYN2025@GMAIL.COM",
      color: "hover:bg-accent-orange",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    }
  ];

  return (
    <div className="pt-[120px] pb-[100px] bg-black">
      <SectionWrapper id="contact-hero" className="container mx-auto px-5 sm:px-10 max-w-[1400px]">
        <div className="text-center mb-20 reveal">
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1] mb-6 text-white">
            Connect With <span className="gradient-text">Us</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto font-light">
            Visit our atelier or schedule a digital consultation to begin your design journey.
          </p>
        </div>

        {/* Global Conversion CTA for Contact Page */}
        <div className="glass-panel p-10 sm:p-16 rounded-[3rem] text-center mb-20 reveal border-accent-gold/20 bg-gradient-to-br from-accent-gold/5 to-transparent">
          <h2 className="text-3xl lg:text-4xl mb-6 font-heading">Secure Your Private Session</h2>
          <p className="text-text-secondary mb-10 max-w-xl mx-auto">Work directly with our master designers to craft your next masterpiece.</p>
          <CTAButton 
            text="Begin Your Custom Design" 
            href="#contact-form"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="reveal">
            <h3 className="text-3xl mb-10 font-heading">Our <span className="text-accent-orange">Atelier</span></h3>
            
            <div className="mt-8 mb-12 p-8 glass-panel rounded-2xl border-white/5 shadow-2xl">
              <h4 className="text-white font-bold mb-4 tracking-wider uppercase text-xs opacity-50">Legal &amp; Registration</h4>
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
                  <a href="tel:+919955002209" className="text-text-secondary text-lg font-light tracking-widest hover:text-accent-orange transition-colors">
                    +91 99 55 00 22 09
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-[60px] h-[60px] rounded-2xl bg-glass-bg border border-glass-border flex items-center justify-center text-accent-orange shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,111,0,0.2)] transition-all duration-500 shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="text-xl mb-2 font-heading tracking-wide">Email</h5>
                  <a href="mailto:ONDEZYN2025@GMAIL.COM" className="text-text-secondary text-lg font-light tracking-wider uppercase hover:text-accent-orange transition-colors">ONDEZYN2025@GMAIL.COM</a>
                </div>
              </div>
            </div>

            {/* ── Social Media Icons ── */}
            <div className="mt-12 pt-10 border-t border-white/5">
              <h4 className="text-sm font-heading tracking-[0.2em] uppercase text-white/40 mb-6">Stay Connected</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    id={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:border-transparent active:scale-95 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="reveal">
            <form id="contact-form" onSubmit={handleSubmit} className="glass-panel p-8 sm:p-12 rounded-[3rem] flex flex-col gap-8 relative overflow-hidden shadow-2xl hover:border-accent-orange/10 transition-all duration-500">
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

        {/* ── Location Map & QR Section ── */}
        <div className="mt-20 reveal">
          <div className="text-center mb-10">
            <h3 className="text-3xl lg:text-4xl font-heading mb-3">Find <span className="gradient-text-gold">Our Studio</span></h3>
            <p className="text-text-secondary font-light max-w-xl mx-auto">Visit us in Trivandrum, Keralam. Our atelier welcomes you by appointment.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Map Embed */}
            <div className="lg:col-span-2 glass-panel rounded-[2rem] overflow-hidden border-white/5 shadow-2xl min-h-[360px] relative group">
              <div className="absolute inset-0 z-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.9!2d76.95!3d8.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOCwgS2VybGFtIFRyaXZhbmRydW0!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "360px", filter: "invert(90%) hue-rotate(180deg) saturate(0.8) contrast(0.9)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ONDEZYN Studio Location"
                  className="w-full h-full"
                />
              </div>
              {/* Map overlay brand tag */}
              <div className="absolute bottom-4 left-4 z-10 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <p className="text-white text-xs font-heading tracking-widest uppercase">ONDEZYN Studio</p>
                <p className="text-white/50 text-[0.6rem] tracking-wider uppercase mt-0.5">Trivandrum, Kerala</p>
              </div>
              {/* Open in Maps link */}
              <a
                href="https://maps.app.goo.gl/JTnSGXa2kn5NKxxD8"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 z-10 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-white/70 text-xs hover:text-accent-orange hover:border-accent-orange/30 transition-all duration-300 flex items-center gap-2"
                id="open-in-maps-btn"
              >
                <MapPin size={12} />
                Open in Maps
              </a>
            </div>

            {/* QR Code Panel */}
            <div 
              className="glass-panel rounded-[2rem] p-8 border-white/5 shadow-2xl flex flex-col items-center justify-center text-center gap-6 cursor-pointer hover:border-accent-gold/20 transition-all duration-500 group"
              onClick={() => setIsQrOpen(true)}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold group-hover:scale-110 transition-transform duration-500">
                <QrCode size={28} />
              </div>
              <div>
                <h4 className="text-lg font-heading text-white mb-2">Scan for Location</h4>
                <p className="text-text-secondary text-sm font-light leading-relaxed">
                  Click to enlarge the QR code and scan to navigate directly to our studio.
                </p>
              </div>
              
              {/* QR code Image Container */}
              <div className="relative w-44 h-44 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 overflow-hidden group-hover:border-accent-gold/30 transition-all duration-500 shadow-inner">
                <Image 
                  src="/images/QR code.jpeg" 
                  alt="ONDEZYN Location QR" 
                  fill 
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              <button
                className="text-accent-gold text-xs tracking-[0.2em] uppercase font-medium hover:text-accent-orange transition-colors flex items-center gap-2"
              >
                <QrCode size={12} />
                Enlarge QR Code
              </button>
            </div>
          </div>
        </div>

        {/* ── QR Code Full-View Modal ── */}
        {isQrOpen && (
          <div 
            className="fixed inset-0 z-[100000] flex items-center justify-center p-5 sm:p-10 bg-black/95 backdrop-blur-xl transition-all duration-500 animate-fade-in"
            onClick={() => setIsQrOpen(false)}
          >
            <div 
              className="relative w-full max-w-[500px] aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_120px_rgba(212,175,55,0.25)] animate-zoom-in"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src="/images/QR code.jpeg" 
                alt="ONDEZYN Location QR Full View" 
                fill 
                className="object-contain bg-white p-6 sm:p-10"
              />
            </div>

            {/* High-Visibility Close Button (Positioned below navbar height) */}
            <button 
              className="absolute top-28 right-6 lg:top-32 lg:right-12 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent-gold shadow-[0_0_40px_rgba(212,175,55,0.5)] flex items-center justify-center text-black hover:bg-white hover:scale-110 active:scale-95 transition-all duration-300 z-[100001]"
              onClick={(e) => {
                e.stopPropagation();
                setIsQrOpen(false);
              }}
              aria-label="Close Modal"
            >
              <X size={32} strokeWidth={2.5} />
            </button>
          </div>
        )}

      </SectionWrapper>
    </div>
  );
}

