"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import { Quote, Package, Target, Eye, Globe } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [imageReady, setImageReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Screen Size Detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      <SectionWrapper id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-[80px] lg:pt-[100px] pb-6 lg:pb-8 overflow-x-clip bg-gradient-to-b from-[#050505] via-[#110d08] to-[#050505]">
        {/* Subtle Radial Glow — reduced size on mobile to prevent overflow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] lg:w-[600px] h-[280px] lg:h-[600px] rounded-full bg-accent-gold/5 blur-[80px] lg:blur-[120px] pointer-events-none"></div>

        {/* Vertical Light Streaks */}
        <div className="absolute inset-0 flex justify-center gap-[15%] opacity-[0.03] pointer-events-none">
           <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
           <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
           <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
           <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>

        {/* Heritage Line — tightly aligned below navbar */}
        <div className="absolute top-[20px] lg:top-[15px] inset-x-0 flex justify-center z-20 reveal px-2">
           <div className="flex items-center gap-2 lg:gap-4 text-center" style={{ textShadow: '0 1px 12px rgba(0,0,0,0.9)' }}>
              <span className="h-[1px] w-4 lg:w-8 bg-accent-gold/70"></span>
              <span className="text-accent-gold tracking-[0.03em] lg:tracking-[0.1em] text-[10px] lg:text-sm font-medium italic opacity-80">
                Brand that designs dreams into the perfect fit through luxury custom tailoring.
              </span>
              <span className="h-[1px] w-4 lg:w-8 bg-accent-gold/70"></span>
           </div>
        </div>

        <div className="container mx-auto px-5 lg:px-6 max-w-[1400px] relative z-10 w-full flex-1 flex flex-col justify-center">
          
          {/* Main Background Typography — Now visible on all screens with responsive sizing */}
          <div className="absolute top-[18%] lg:top-[14%] left-1/2 -translate-x-1/2 text-center w-full z-[5] pointer-events-none reveal">
             <h1 className="text-[clamp(4.5rem,14vw,14rem)] leading-[0.8] text-white/[0.12] lg:text-white/15 font-heading tracking-tight select-none">
               <span className="text-accent-orange/15 lg:text-accent-orange/25">ON</span>DEZYN
             </h1>
             <p className="text-[clamp(3.5rem,8vw,6.5rem)] text-accent-gold/[0.25] lg:text-accent-gold/45 font-script leading-none mt-[-4%] lg:mt-[-2%] select-none">
               Fashion Studio
             </p>
          </div>

          {/* Center Layout Container — Vertical on mobile, Horizontal on desktop */}
          <div className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-10 mt-[15vh] lg:mt-[12vh] z-20">
             
             {/* Left Block — CTA 1 */}
             <div className="lg:w-[30%] flex flex-col items-center lg:items-start text-center lg:text-left reveal-left delay-200 order-3 lg:order-1 mt-6 lg:mt-8">
                <div className="mb-4 lg:mb-10 hidden lg:block">
                   <p className="text-white/50 text-sm leading-relaxed font-light max-w-xs mx-auto lg:mx-0">
                      Exclusive fashion studio offering limited styling slots for a truly personalized experience.
                   </p>
                </div>
                <CTAButton 
                  text="Begin Custom Design" 
                  href="/contact" 
                />
             </div>

             {/* Center Image — rises into place on page load */}
             <div
               className="relative w-[65%] sm:w-[400px] lg:w-[560px] aspect-[4/5] z-[15] order-2 lg:order-2 flex justify-center"
               style={{
                 transform: (isMobile || imageReady) ? 'translateY(0px)' : 'translateY(300px)',
                 opacity: 1,
                 transition: (!isMobile && imageReady)
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
                
                {/* Main Image with Natural Edge Blending and Scroll Motion */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{ 
                    WebkitMaskImage: 'radial-gradient(ellipse 50% 80% at 50% 50%, black 70%, transparent 100%)',
                    maskImage: 'radial-gradient(ellipse 50% 80% at 50% 50%, black 70%, transparent 100%)'
                  }}
                >
                   <Image 
                     src="/images/heromain.png" 
                     alt="ONDEZYN Model" 
                     fill 
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                     className="object-cover object-top" 
                     priority 
                   />
                </div>
             </div>

             {/* Right Block — CTA 2 */}
             <div className="lg:w-[30%] flex flex-col items-center lg:items-end text-center lg:text-right reveal-right delay-200 order-4 lg:order-3 mt-6 lg:mt-8">
                <div className="mb-4 lg:mb-10 hidden lg:block">
                   <p className="text-white/50 text-sm font-light leading-relaxed border-t lg:border-t-0 lg:border-l border-accent-gold/30 pt-4 lg:pt-0 lg:pl-5 max-w-xs mx-auto lg:mx-0">
                     <span className="text-white/90 font-medium block mb-2 font-heading italic text-base">Where Identity Becomes Art.</span> 
                     Bespoke fashion refined for those who command presence.
                   </p>
                </div>
                <CTAButton 
                  text="Explore Collections" 
                  href="/collections" 
                  className="!bg-transparent border border-white/20"
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
      <SectionWrapper id="story" className="py-12 lg:py-[120px] relative bg-gradient-to-b from-[#050505] via-[#110d08] to-[#050505]">
        <div className="container mx-auto px-5 lg:px-10 max-w-[1200px]">
          
          {/* ── Section Header ── */}
          <div className="text-center mb-16 lg:mb-32 reveal">
            <h4 className="text-accent-gold tracking-[0.4em] uppercase text-[10px] lg:text-xs mb-6 font-bold opacity-80">The Foundation</h4>
            <h2 className="mb-8 lg:mb-10 text-4xl lg:text-6xl tracking-tight text-white"><span className="text-accent-orange">ON</span>DEZYN PRIVATE LIMITED</h2>
            <p className="text-base lg:text-lg text-text-secondary leading-[1.8] max-w-3xl mx-auto font-light">
              Founded with a shared passion for redefining elegance, ONDEZYN is a sanctuary where creativity meets precision. 
              Born in the heart of Keralam, we craft more than just garments—we craft identities.
            </p>
          </div>
          <div className="mb-24 lg:mb-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              
              {/* Left Column: Visual Storytelling */}
              <div className="relative group reveal">
                {/* Main Large Image */}
                <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                  <Image 
                    src="/images/story_atelier.png" 
                    alt="The ONDEZYN Atelier" 
                    fill 
                    className="object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105" 
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Overlapping Mini Detail Image (Now visible on lg+) */}
                <div className="absolute -bottom-8 -right-8 lg:-bottom-12 lg:-right-12 w-[55%] aspect-square rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-10 hidden md:block transition-transform duration-1000 group-hover:translate-y-[-10px] group-hover:scale-105">
                  <Image src="/images/story_stitching.png" alt="Craftsmanship detail" fill className="object-cover" />
                </div>
              </div>

              {/* Right Column: Editorial Narrative */}
              <div className="flex flex-col justify-center reveal delay-200">
                <div className="mb-8">
                  <span className="text-[10px] lg:text-xs tracking-[0.5em] uppercase text-accent-gold font-bold">The ONDEZYN Heritage</span>
                </div>
                
                <h3 className="text-5xl lg:text-6xl xl:text-8xl mb-12 font-heading text-white leading-[1] tracking-tight">
                  The Story <br /> 
                  <span className="text-accent-gold font-medium italic">Behind Us</span>
                </h3>
                
                <div className="space-y-10 text-text-secondary text-lg lg:text-xl xl:text-2xl leading-[1.7] font-light">
                  <p className="text-white/90 font-normal">
                    Every masterpiece begins with a dialogue between vision and craft.
                  </p>
                  
                  <div className="space-y-8 pl-6 border-l border-accent-gold/20">
                    <p>
                      <span className="text-accent-gold font-semibold tracking-wider mr-2 uppercase text-base">ON</span> represents the individual—your identity, your vision, and the unique story you bring to every design.
                    </p>
                    <p>
                      <span className="text-accent-gold font-semibold tracking-wider mr-2 uppercase text-base">DEZYN</span> represents the atelier—our heritage of craftsmanship, our hands, and the timeless art of tailoring.
                    </p>
                  </div>

                  <p className="pt-10 border-t border-white/5 text-white/70 italic text-base lg:text-lg">
                    Together, ONDEZYN reflects a philosophy of personalized luxury, where every stitch is a testament to the harmony between the visionary and the artisan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── 2. BOTTOM THREE CARDS (ROW) ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 reveal">
            
            {/* Mission Card */}
            <div className="glass-panel p-10 rounded-[2.5rem] border border-white/5 hover:border-accent-red/20 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(211,47,47,0.08)] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-accent-red/10 flex items-center justify-center text-accent-red mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                <Target size={24} strokeWidth={2} />
              </div>
              <h3 className="text-2xl mb-5 font-heading text-white/95">Our Mission</h3>
              <p className="text-text-secondary italic text-base lg:text-lg leading-[1.7] font-light flex-1">
                &quot;To craft custom tailored outfits with Creativity, Precision, and Passion to ensure every client feels unique.&quot;
              </p>
            </div>

            {/* Vision Card (Teal/Emerald Color Update) */}
            <div className="glass-panel p-10 rounded-[2.5rem] border border-white/5 hover:border-[#10b981]/20 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(16,185,129,0.08)] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-[#10b981]/10 flex items-center justify-center text-[#10b981] mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                <Eye size={24} strokeWidth={2} />
              </div>
              <h3 className="text-2xl mb-5 font-heading text-white/95">Our Vision</h3>
              <p className="text-text-secondary italic text-base lg:text-lg leading-[1.7] font-light flex-1">
                &quot;To become a Leading Network of Premium Fashion Studios, redefining Elegance and Precision in every outfit.&quot;
              </p>
            </div>

            {/* Presence Card */}
            <div className="glass-panel p-10 rounded-[2.5rem] border border-white/5 hover:border-[#4f8ef7]/20 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(79,142,247,0.08)] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-[#4f8ef7]/10 flex items-center justify-center text-[#4f8ef7] mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                <Globe size={24} strokeWidth={2} />
              </div>
              <h3 className="text-2xl mb-5 font-heading text-white/95">Nation-wide</h3>
              <p className="text-text-secondary text-base lg:text-lg leading-[1.7] font-light flex-1">
                A growing movement with master artisans spanning across India, establishing a premium presence in every corner of the country.
              </p>
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
            <h2 className="mb-4 lg:mb-5">Featured <span className="gradient-text">Collections</span></h2>
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
                  <div className="translate-y-0 lg:translate-y-12 lg:group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                    <h3 className="text-xl lg:text-3xl mb-2 lg:mb-4 font-heading group-hover:text-accent-orange transition-colors">{cat.title}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4 lg:mb-6 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700 delay-100 h-auto lg:h-0 lg:group-hover:h-auto overflow-hidden">
                      {cat.items.map((item, idx) => (
                        <span key={idx} className="text-[0.75rem] lg:text-[0.85rem] px-3 lg:px-4 py-1.5 lg:py-2 rounded-full bg-white/10 lg:bg-white/10 backdrop-blur-md border border-white/20 lg:border-white/20 text-white font-medium tracking-wide">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700 delay-200">
                      <CTAButton 
                        text="Explore" 
                        href="/collections"
                        className="w-full justify-center !py-2 lg:!py-3 !text-[0.7rem] lg:!text-sm"
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
            <h2 className="mb-4 lg:mb-6 leading-tight">Ready for your <span className="gradient-text-gold">Masterpiece?</span></h2>
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
