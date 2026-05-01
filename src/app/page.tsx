"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import { Quote, Package } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Initial Loader
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 1200);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Scroll-based Animation for Hero Image
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Set initial scroll position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate scroll-based animation values
  const maxScroll = 400; // Complete within first ~30-40% of viewport scroll
  const rawProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
  
  // Smooth easing for premium feel (ease-out cubic)
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
  const animProgress = easeOutCubic(rawProgress);

  // Derived animation properties
  const imageOpacity = animProgress;
  const imageTranslateY = 60 * (1 - animProgress);
  const imageScale = 0.98 + (0.02 * animProgress);

  return (
    <>
      {/* Branded Loader */}
      {loading && (
        <div 
          className="fixed inset-0 bg-bg-deep z-[10000] flex flex-col justify-center items-center transition-all duration-1000 ease-in-out" 
          style={{ opacity: progress === 100 ? 0 : 1, visibility: progress === 100 ? 'hidden' : 'visible' }}
        >
          <div className="mb-10 animate-float-slow">
            <Image src="/images/logo-light.png" alt="ONDEZYN Logo" width={250} height={120} className="object-contain" priority unoptimized />
          </div>
          <div className="w-[250px] h-[2px] bg-white/10 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-accent-red to-accent-orange transition-all duration-100 ease-linear" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}

      <SectionWrapper id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-[120px] pb-10 overflow-hidden bg-gradient-to-b from-bg-deep via-[#110d08] to-bg-deep">
        {/* Subtle Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-gold/5 blur-[120px] pointer-events-none"></div>

        {/* Vertical Light Streaks */}
        <div className="absolute inset-0 flex justify-center gap-[15%] opacity-[0.03] pointer-events-none">
           <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
           <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
           <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
           <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>

        {/* Heritage Line (Top Strip) */}
        <div className="absolute top-[90px] w-full flex justify-center z-20 reveal">
           <div className="flex items-center gap-4 text-center">
              <span className="h-[1px] w-8 bg-accent-gold/50"></span>
              <span className="text-accent-gold tracking-[0.2em] uppercase text-xs font-bold">Since 1200 – Keralam</span>
              <span className="text-white/30 text-xs font-medium tracking-widest hidden sm:inline-block border-l border-white/20 pl-4 uppercase">Kollavarsham Year 1200 (2025)</span>
              <span className="h-[1px] w-8 bg-accent-gold/50"></span>
           </div>
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10 w-full flex-1 flex flex-col justify-center mt-4">
          
          {/* Main Background Typography */}
          <div className="absolute top-[8%] lg:top-[12%] left-1/2 -translate-x-1/2 text-center w-full z-0 pointer-events-none reveal">
             <h1 className="text-[clamp(4rem,14vw,14rem)] leading-[0.8] text-white/5 font-heading tracking-tighter select-none">
               ONDEZYN™
             </h1>
             <p className="text-[clamp(1.5rem,4vw,3.5rem)] text-accent-gold/20 font-serif italic mt-[-1%] select-none">
               Fashion Studio
             </p>
             <h2 className="text-base md:text-xl text-white/40 mt-6 font-serif italic font-light tracking-wide reveal delay-100">
                “Designing Dreams into Perfect Fits”
             </h2>
          </div>

          {/* Center Layout Container */}
          <div className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-10 mt-[15vh] lg:mt-[20vh] z-10">
             
             {/* Left Block */}
             <div className="lg:w-[30%] flex flex-col items-center lg:items-start text-center lg:text-left reveal-left delay-200 order-2 lg:order-1 mt-8 lg:mt-0">
                <div className="mb-10">
                   <div className="flex items-center gap-3 px-4 py-2 border border-white/10 w-fit mx-auto lg:mx-0 mb-6 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-accent-red/5 group-hover:bg-accent-red/10 transition-colors"></div>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-red animate-pulse"></span>
                      <span className="text-xs font-medium text-white/70 tracking-widest uppercase">Launch: 22 Sept 2025</span>
                   </div>
                   <p className="text-white/50 text-sm leading-relaxed font-light max-w-xs mx-auto lg:mx-0">
                      Exclusive fashion studio offering limited styling slots for a truly personalized experience.
                   </p>
                </div>
                <CTAButton 
                  text="Begin Your Custom Experience" 
                  href="/contact" 
                />
             </div>

             {/* Center Image (Editorial Cutout Style with Scroll Animation) */}
             <div className="relative w-[85%] sm:w-[450px] lg:w-[560px] aspect-[4/5] z-20 order-1 lg:order-2 flex justify-center mt-[-5%]">
                {/* Soft diffused shadow & warm glow behind model (No card borders) */}
                <div 
                  className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[90%] h-[90%] bg-black/80 blur-[80px] rounded-[100%] pointer-events-none z-0"
                  style={{ opacity: imageOpacity }}
                ></div>
                <div 
                  className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-accent-gold/10 blur-[100px] rounded-[100%] pointer-events-none z-0"
                  style={{ opacity: imageOpacity }}
                ></div>
                
                {/* Main Image with Natural Edge Blending and Scroll Motion */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-none will-change-transform"
                  style={{ 
                    WebkitMaskImage: 'radial-gradient(ellipse 40% 60% at 50% 50%, black 20%, transparent 100%)',
                    maskImage: 'radial-gradient(ellipse 40% 60% at 50% 50%, black 20%, transparent 100%)',
                    opacity: imageOpacity,
                    transform: `translateY(${imageTranslateY}px) scale(${imageScale})`
                  }}
                >
                   <Image 
                     src="/images/heromain.png" 
                     alt="ONDEZYN Model" 
                     fill 
                     className="object-cover object-top scale-[1.05]" 
                     priority 
                   />
                </div>
             </div>

             {/* Right Block */}
             <div className="lg:w-[30%] flex flex-col items-center lg:items-end text-center lg:text-right reveal-right delay-200 order-3 lg:order-3 mt-8 lg:mt-0">
                <div className="mb-10">
                   <p className="text-white/50 text-sm font-light leading-relaxed border-t lg:border-t-0 lg:border-l border-accent-gold/30 pt-4 lg:pt-0 lg:pl-5 max-w-xs mx-auto lg:mx-0">
                     <span className="text-white/90 font-medium block mb-2 font-serif italic text-base">Crafted by Hanslatha & Aneesh</span> 
                     blending tradition with modern luxury.
                   </p>
                </div>
                <CTAButton 
                  text="Explore Collections" 
                  href="/collections" 
                  className="!bg-transparent border border-white/20 hover:border-accent-gold hover:text-accent-gold transition-all duration-300"
                />
             </div>
          </div>

          {/* Bottom Services Row */}
          <div className="w-full flex justify-center mt-16 z-20 reveal delay-400">
             <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-[0.8rem] text-white/60 uppercase tracking-[0.2em] font-light">
                <span>Bespoke Bridal & Occasion Wear</span>
                <span className="hidden sm:block w-1 h-1 rotate-45 bg-accent-gold"></span>
                <span>Precision Tailoring with Personal Consultation</span>
             </div>
          </div>

        </div>
      </SectionWrapper>

      {/* Brand Story & Mission/Vision */}
      <SectionWrapper id="story" alternateBg={true} className="py-[150px] relative container mx-auto px-10 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative h-[500px] lg:h-[700px]">
            <div className="absolute top-0 left-0 w-[85%] h-[85%] rounded-2xl overflow-hidden z-[2] border border-glass-border reveal-left">
              <Image src="/images/story_atelier.png" alt="ONDEZYN PRIVATE LIMITED" fill className="object-cover" />
            </div>
            <div className="absolute bottom-[5%] right-0 w-[55%] h-[55%] rounded-2xl overflow-hidden z-[3] shadow-[0_20px_40px_rgba(0,0,0,0.8)] border border-glass-border reveal delay-200">
              <Image src="/images/story_stitching.png" alt="Craftsmanship" fill className="object-cover" />
            </div>
          </div>
          <div className="reveal-right">
            <div className="mb-12">
              <h4 className="text-accent-orange tracking-widest uppercase text-sm mb-4">The Foundation</h4>
              <h2 className="text-5xl lg:text-6xl mb-8 leading-tight">ONDEZYN <span className="gradient-text">PRIVATE LIMITED</span></h2>
              <p className="text-lg text-text-secondary leading-[1.8] mb-6">
                Founders <span className="text-white font-semibold">Hanslatha & Aneesh</span> started with a shared passion for redefining elegance. 
                Born in the heart of Keralam, ONDEZYN is a sanctuary where creativity meets precision.
              </p>
            </div>

            <div className="space-y-10">
              <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-accent-red">
                <h3 className="text-xl mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-accent-red/20 flex items-center justify-center text-accent-red text-sm font-bold">M</span>
                  Our Mission
                </h3>
                <p className="text-text-secondary italic">
                  "To craft custom tailored outfits with Creativity, Precision, Comfort, Quality and Passion to ensure every client feels confident and unique"
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-accent-gold">
                <h3 className="text-xl mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold text-sm font-bold">V</span>
                  Our Vision
                </h3>
                <p className="text-text-secondary italic">
                  "To become a Leading Network of Premium Tailoring & Fashion Studio, redefining Elegance, Precision and every outfit reflects individuality through personalised designs, superior craftsmanship and exceptional customer experience"
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Collections Preview */}
      <SectionWrapper id="collections-preview" className="py-[150px] container mx-auto px-10 max-w-[1400px]">
        <div className="text-center mb-16 reveal">
          <h2 className="text-5xl lg:text-6xl mb-5">Featured <span className="gradient-text">Collections</span></h2>
          <p className="text-xl text-text-secondary">Discover our most sought-after categories.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Bridal Wears */}
           <div className={`group relative h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden border border-glass-border reveal shadow-2xl transition-all duration-500`}>
             <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center">
               <Image src="/images/collection_bridal.png" alt="Bridal Wears" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
             </div>
             <div className={`absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300 ease-in-out`}></div>
             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 ease-in-out"></div>
             <div className="absolute inset-0 p-8 flex flex-col justify-end">
               <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                 <h3 className="text-2xl mb-2 font-heading group-hover:text-accent-orange transition-colors">Bridal Wears</h3>
               </div>
             </div>
           </div>
           {/* Accessories */}
           <div className={`group relative h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden border border-glass-border reveal shadow-2xl transition-all duration-500 delay-100`}>
             <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center">
               <Image src="/images/collections/accessories.png" alt="Accessories" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
             </div>
             <div className={`absolute inset-0 bg-gradient-to-t from-accent-red/10 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300 ease-in-out`}></div>
             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 ease-in-out"></div>
             <div className="absolute inset-0 p-8 flex flex-col justify-end">
               <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                 <h3 className="text-2xl mb-2 font-heading group-hover:text-accent-orange transition-colors">Accessories</h3>
               </div>
             </div>
           </div>
           {/* Kids Specials */}
           <div className={`group relative h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden border border-glass-border reveal shadow-2xl transition-all duration-500 delay-200`}>
             <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center">
               <Image src="/images/collections/kids.png" alt="Kids Specials" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
             </div>
             <div className={`absolute inset-0 bg-gradient-to-t from-accent-gold/10 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300 ease-in-out`}></div>
             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 ease-in-out"></div>
             <div className="absolute inset-0 p-8 flex flex-col justify-end">
               <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                 <h3 className="text-2xl mb-2 font-heading group-hover:text-accent-orange transition-colors">Kids Specials</h3>
               </div>
             </div>
           </div>
        </div>
        <div className="text-center mt-16 reveal">
          <CTAButton text="Explore Collections" href="/collections" className="!bg-transparent border-white/20 hover:border-white" />
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper id="testimonials" className="py-[150px] container mx-auto px-10 max-w-[1400px] overflow-hidden">
        <div className="text-center mb-20 reveal">
          <h2 className="text-5xl lg:text-6xl mb-5">Client <span className="gradient-text">Experiences</span></h2>
          <p className="text-xl text-text-secondary">Voices of those who chose ONDEZYN for their special moments.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Anjali Menon", location: "Trivandrum", initial: "A", feedback: "My bridal gown was a dream. The Aari work was flawless." },
            { name: "Riya Thomas", location: "Kochi", initial: "R", feedback: "Perfectly fitted blouse. Best fusion of handloom and modern style." },
            { name: "Sneha Nair", location: "Mumbai", initial: "S", feedback: "Unmatched professionalism and artisanal quality. Stunning reality." }
          ].map((test, i) => (
            <div key={i} className="glass-panel p-10 rounded-2xl relative group hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(255,111,0,0.1)] hover:border-accent-orange/30 transition-all duration-500 reveal backdrop-blur-xl">
              <Quote className="text-accent-orange/20 mb-6 group-hover:text-accent-orange/40 transition-colors" size={40} />
              <p className="text-lg leading-[1.6] mb-8 text-[#e0e0e0]">"{test.feedback}"</p>
              <div className="flex items-center gap-4">
                <div className="w-[45px] h-[45px] rounded-full bg-glass-bg flex items-center justify-center font-heading font-bold text-accent-gold border border-glass-border shrink-0">{test.initial}</div>
                <div>
                  <h5 className="text-[1rem] font-bold">{test.name}</h5>
                  <p className="text-xs text-text-muted uppercase tracking-widest">{test.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Signature Brand Section */}
      <SectionWrapper id="signature" alternateBg={true} className="py-[100px] text-center border-y border-white/5">
        <div className="container mx-auto px-10 reveal">
          <p className="text-4xl lg:text-5xl font-heading leading-tight italic text-white/90 max-w-4xl mx-auto">
            "Every stitch tells a story. <br />
            Every design is <span className="gradient-text-gold">uniquely yours.</span>"
          </p>
          <div className="w-24 h-[1px] bg-accent-orange mx-auto mt-12 opacity-50"></div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper id="cta" className="pb-[150px] pt-[100px] container mx-auto px-10 max-w-[1400px]">
        <div className="glass-panel text-center py-[100px] px-10 rounded-[40px] relative overflow-hidden reveal">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(211,47,47,0.15)_0%,transparent_70%)] z-0"></div>
          <div className="relative z-[2]">
            <h2 className="text-4xl lg:text-[3.5rem] mb-6 leading-tight">Ready for your <span className="gradient-text-gold">Masterpiece?</span></h2>
            <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto italic">Limited Slots Available Per Week</p>
            <CTAButton 
              text="Begin Your Custom Design" 
              href="/contact"
            />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
