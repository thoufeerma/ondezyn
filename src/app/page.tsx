"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import { Quote, Package } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [imageReady, setImageReady] = useState(false);

  // Initial Loader & Animation Trigger
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 1200);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Trigger hero image entrance animation after loader disappears
  useEffect(() => {
    if (!loading) {
      const t = setTimeout(() => setImageReady(true), 150);
      return () => clearTimeout(t);
    }
  }, [loading]);

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

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════ */}
      <SectionWrapper id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-[100px] lg:pt-[120px] pb-8 lg:pb-10 overflow-hidden bg-gradient-to-b from-[#050505] via-[#110d08] to-[#050505]">
        {/* Subtle Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] rounded-full bg-accent-gold/5 blur-[120px] pointer-events-none"></div>

        {/* Vertical Light Streaks */}
        <div className="absolute inset-0 flex justify-center gap-[15%] opacity-[0.03] pointer-events-none">
           <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
           <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
           <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent hidden sm:block"></div>
           <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent hidden sm:block"></div>
        </div>

        {/* Heritage Line — just below navbar, clearly above ONDEZYN text */}
        <div className="absolute top-[84px] lg:top-[108px] w-full flex justify-center z-20 reveal px-4">
           <div className="flex items-center gap-3 lg:gap-4 text-center" style={{ textShadow: '0 1px 12px rgba(0,0,0,0.9)' }}>
              <span className="h-[1px] w-6 lg:w-8 bg-accent-gold/70"></span>
              <span className="text-accent-gold tracking-[0.15em] lg:tracking-[0.2em] uppercase text-[10px] lg:text-xs font-bold">
                Rooted in Kerala&apos;s heritage <span className="text-white/55 font-medium ml-2 mr-2 hidden sm:inline-block">&bull;</span> <span className="text-white/55 font-medium hidden sm:inline-block">Since 1200 – Keralam</span>
              </span>
              <span className="h-[1px] w-6 lg:w-8 bg-accent-gold/70"></span>
           </div>
        </div>

        <div className="container mx-auto px-5 lg:px-6 max-w-[1400px] relative z-10 w-full flex-1 flex flex-col justify-center mt-4">
          
          {/* Main Background Typography — positioned with clear gap below heritage strip */}
          <div className="absolute top-[20%] lg:top-[18%] left-1/2 -translate-x-1/2 text-center w-full z-[5] pointer-events-none reveal">
             <h1 className="text-[clamp(3rem,14vw,14rem)] leading-[0.8] text-white/10 font-heading tracking-tighter select-none">
               ONDEZYN
             </h1>
             <p className="text-[clamp(1.2rem,4vw,3.5rem)] text-accent-gold/35 font-heading tracking-tight mt-[-1%] select-none">
               Fashion Studio
             </p>
          </div>

          {/* Center Layout Container — pushed lower so image starts below text */}
          <div className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 mt-[14vh] lg:mt-[18vh] z-10">
             
             {/* Left Block */}
             <div className="lg:w-[30%] flex flex-col items-center lg:items-start text-center lg:text-left reveal-left delay-200 order-2 lg:order-1 mt-4 lg:mt-0">
                <div className="mb-6 lg:mb-10">

                   <p className="text-white/50 text-sm leading-relaxed font-light max-w-xs mx-auto lg:mx-0">
                      Exclusive fashion studio offering limited styling slots for a truly personalized experience.
                   </p>
                </div>
                <CTAButton 
                  text="Begin Your Custom Experience" 
                  href="/contact" 
                />
             </div>

             {/* Center Image — rises into place on page load */}
             <div
               className="relative w-[80%] sm:w-[400px] lg:w-[560px] aspect-[4/5] z-[15] order-1 lg:order-2 flex justify-center"
               style={{
                 transform: imageReady ? 'translateY(0px)' : 'translateY(300px)',
                 opacity: 1,
                 transition: imageReady
                   ? 'transform 2.8s cubic-bezier(0.16, 1, 0.3, 1)'
                   : 'none',
               }}
             >
                {/* Soft diffused shadow & warm glow behind model (No card borders) */}
                <div 
                  className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[90%] h-[90%] bg-black/80 blur-[80px] rounded-[100%] pointer-events-none z-0"
                ></div>
                <div 
                  className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-accent-gold/10 blur-[100px] rounded-[100%] pointer-events-none z-0"
                ></div>
                
                {/* Main Hero Image */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                   <Image 
                     src="/images/heromain.png" 
                     alt="ONDEZYN Model" 
                     fill 
                     className="object-cover object-top scale-[1.05] brightness-[1.1] contrast-[1.1]" 
                     priority 
                   />
                </div>
             </div>

             {/* Right Block */}
             <div className="lg:w-[30%] flex flex-col items-center lg:items-end text-center lg:text-right reveal-right delay-200 order-3 lg:order-3 mt-4 lg:mt-0">
                <div className="mb-6 lg:mb-10">
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
          <div className="w-full flex justify-center mt-10 lg:mt-16 z-20 reveal delay-400">
             <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-[0.7rem] lg:text-[0.8rem] text-white/60 uppercase tracking-[0.15em] lg:tracking-[0.2em] font-light px-4 text-center">
                <span>Bespoke Bridal & Occasion Wear</span>
                <span className="hidden sm:block w-1 h-1 rotate-45 bg-accent-gold"></span>
                <span>Precision Tailoring with Personal Consultation</span>
             </div>
          </div>

        </div>
      </SectionWrapper>

      {/* ═══ Section Divider ═══ */}
      <div className="section-divider"></div>

      {/* ═══════════════════════════════════════════════════════════
          BRAND STORY & MISSION/VISION
      ═══════════════════════════════════════════════════════════ */}
      <SectionWrapper id="story" className="py-12 lg:py-[100px] relative bg-gradient-to-b from-[#050505] via-[#1a0b04] to-[#050505]">
        <div className="container mx-auto px-5 lg:px-10 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-[350px] sm:h-[450px] lg:h-[700px]">
              <div className="absolute top-0 left-0 w-[85%] h-[85%] rounded-2xl overflow-hidden z-[2] border border-glass-border reveal-left">
                <Image src="/images/story_atelier.png" alt="ONDEZYN PRIVATE LIMITED" fill className="object-cover" />
              </div>
              <div className="absolute bottom-[5%] right-0 w-[55%] h-[55%] rounded-2xl overflow-hidden z-[3] shadow-[0_20px_40px_rgba(0,0,0,0.8)] border border-glass-border reveal delay-200">
                <Image src="/images/story_stitching.png" alt="Craftsmanship" fill className="object-cover" />
              </div>
            </div>
            <div className="reveal-right">
              <div className="mb-8 lg:mb-12">
                <h4 className="text-accent-orange tracking-widest uppercase text-sm mb-4">The Foundation</h4>
                <h2 className="text-3xl lg:text-5xl xl:text-6xl mb-6 lg:mb-8 leading-tight">ONDEZYN <span className="gradient-text">PRIVATE LIMITED</span></h2>
                <p className="text-base lg:text-lg text-text-secondary leading-[1.8] mb-6">
                  Founders <span className="text-white font-semibold">Hanslatha & Aneesh</span> started with a shared passion for redefining elegance. 
                  Born in the heart of Keralam, ONDEZYN is a sanctuary where creativity meets precision.
                </p>
              </div>

              <div className="space-y-6 lg:space-y-10">
                <div className="glass-panel p-6 lg:p-8 rounded-2xl border-l-4 border-l-accent-red">
                  <h3 className="text-lg lg:text-xl mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent-red/20 flex items-center justify-center text-accent-red text-sm font-bold shrink-0">M</span>
                    Our Mission
                  </h3>
                  <p className="text-text-secondary italic text-sm lg:text-base leading-relaxed">
                    &quot;To craft custom tailored outfits with Creativity, Precision, Comfort, Quality and Passion to ensure every client feels confident and unique&quot;
                  </p>
                </div>

                <div className="glass-panel p-6 lg:p-8 rounded-2xl border-l-4 border-l-accent-gold">
                  <h3 className="text-lg lg:text-xl mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold text-sm font-bold shrink-0">V</span>
                    Our Vision
                  </h3>
                  <p className="text-text-secondary italic text-sm lg:text-base leading-relaxed">
                    &quot;To become a Leading Network of Premium Tailoring & Fashion Studio, redefining Elegance, Precision and every outfit reflects individuality through personalised designs, superior craftsmanship and exceptional customer experience&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ═══ Section Divider ═══ */}
      <div className="section-divider"></div>

      {/* ═══════════════════════════════════════════════════════════
          FEATURED COLLECTIONS PREVIEW
      ═══════════════════════════════════════════════════════════ */}
      <SectionWrapper id="collections-preview" className="py-12 lg:py-[100px] bg-gradient-to-b from-[#050505] via-[#080d16] to-[#050505]">
        <div className="container mx-auto px-5 lg:px-10 max-w-[1400px]">
          <div className="text-center mb-10 lg:mb-16 reveal">
            <h2 className="text-3xl lg:text-5xl xl:text-6xl mb-4 lg:mb-5">Featured <span className="gradient-text">Collections</span></h2>
            <p className="text-base lg:text-xl text-text-secondary">Discover our most sought-after categories.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
            {[
              { 
                title: "Bridal Wears", 
                items: ["Bridal Blouses", "Bridal Lehenga", "Engagement Gowns", "Wedding Saree Styling"],
                image: "/images/collection_bridal.png",
                color: "from-white/10"
              },
              { 
                title: "Accessories", 
                items: ["Dupattas", "Falls & Pico", "Tassels & Latkans", "Premium fabrics"],
                image: "/images/collections/accessories.png",
                color: "from-accent-red/10"
              },
              { 
                title: "Kids Specials", 
                items: ["Birthday Outfits", "Festive Collections", "Pattu Pavada", "Princess style Dresses"],
                image: "/images/collections/kids.png",
                color: "from-accent-gold/10"
              }
            ].map((cat, i) => (
              <div key={i} className={`group relative h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl lg:rounded-[2.5rem] overflow-hidden border border-glass-border reveal shadow-2xl transition-all duration-500 delay-${i * 100}`}>
                <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center">
                  <Image src={cat.image} alt={cat.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300 ease-in-out`}></div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 ease-in-out"></div>
                
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                  <div className="translate-y-4 lg:translate-y-12 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                    <h3 className="text-xl lg:text-3xl mb-2 lg:mb-4 font-heading group-hover:text-accent-orange transition-colors">{cat.title}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4 lg:mb-6 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 h-0 group-hover:h-auto overflow-hidden">
                      {cat.items.map((item, idx) => (
                        <span key={idx} className="text-[0.6rem] lg:text-[0.65rem] px-2 lg:px-3 py-1 lg:py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/5 text-white/60 tracking-wider">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                      <CTAButton 
                        text="Explore" 
                        href="/collections"
                        className="w-full justify-center !py-2 lg:!py-3 !text-xs lg:!text-sm"
                        showIcon={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 lg:mt-16 reveal">
            <CTAButton text="Explore Collections" href="/collections" className="!bg-transparent border-white/20 hover:border-white" />
          </div>
        </div>
      </SectionWrapper>

      {/* ═══ Section Divider ═══ */}
      <div className="section-divider"></div>



      {/* ═══════════════════════════════════════════════════════════
          SIGNATURE BRAND SECTION
      ═══════════════════════════════════════════════════════════ */}
      <SectionWrapper id="signature" className="py-12 lg:py-[120px] text-center border-y border-white/5 relative overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)] z-0"></div>
        <div className="container mx-auto px-5 lg:px-10 reveal relative z-10">
          <p className="text-[1.35rem] sm:text-3xl lg:text-4xl xl:text-5xl font-heading leading-relaxed lg:leading-tight italic text-white/90 max-w-4xl mx-auto">
            &quot;Every stitch tells a story. <br />
            Every design is <span className="gradient-text-gold">uniquely yours.</span>&quot;
          </p>
          <div className="w-16 lg:w-24 h-[1px] bg-accent-gold mx-auto mt-6 lg:mt-12 opacity-50"></div>
        </div>
      </SectionWrapper>

      {/* ═══ Section Divider ═══ */}
      <div className="section-divider"></div>

      {/* ═══════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════ */}
      <SectionWrapper id="cta" className="pb-12 lg:pb-[100px] pt-10 lg:pt-[80px] bg-gradient-to-b from-[#050505] via-[#0f0907] to-[#050505]">
        <div className="container mx-auto px-5 lg:px-10 max-w-[1400px]">
          <div className="glass-panel text-center py-12 lg:py-[80px] px-6 lg:px-10 rounded-3xl lg:rounded-[40px] relative overflow-hidden reveal">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] z-0"></div>
            <div className="relative z-[2]">
              <h2 className="text-3xl lg:text-4xl xl:text-[3.5rem] mb-4 lg:mb-6 leading-tight">Ready for your <span className="gradient-text-gold">Masterpiece?</span></h2>
              <p className="text-base lg:text-xl text-text-secondary mb-8 lg:mb-10 max-w-2xl mx-auto italic">Limited Slots Available Per Week</p>
              <CTAButton 
                text="Begin Your Custom Design" 
                href="/contact"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
