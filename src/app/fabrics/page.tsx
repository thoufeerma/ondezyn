"use client";

import React from "react";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import { Palette, Scissors, Ruler, Package } from "lucide-react";

export default function Fabrics() {
  const options = [
    { 
      icon: Palette, 
      title: "Aari work & Embroidery", 
      desc: "Intricate hand-work using traditional techniques to add regal textures and depth to your custom garments.",
      image: "/images/fabrics/aari-embroidery.png"
    },
    { 
      icon: Scissors, 
      title: "Pattern Customization", 
      desc: "Bespoke engineering of silhouettes, necklines, and sleeve designs to ensure your garment is a true reflection of you.",
      image: "/images/fabrics/tailoring.png"
    },
    { 
      icon: Ruler, 
      title: "Fabric Selection Guidance", 
      desc: "Our master tailors guide you through weights, drapes, and color palettes to find the perfect foundation for your design.",
      image: "/images/fabrics/handloom-weaving.png"
    }
  ];

  return (
    <div className="pt-[120px] pb-[100px] bg-black">
      <SectionWrapper id="fabrics-hero" className="container mx-auto px-10 max-w-[1400px]">
        <div className="text-center mb-20 reveal">
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1] mb-6 text-white">
            Artisan <span className="gradient-text">Options</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto font-light">
            Uncompromising quality sourced from the heart of Keralam's textile heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-[120px]">
          {options.map((opt, i) => (
            <div key={i} className={`glass-panel p-0 rounded-[2.5rem] overflow-hidden border-white/5 hover:border-accent-gold/30 hover:shadow-[0_20px_50px_rgba(255,111,0,0.1)] transition-all duration-500 group reveal shadow-xl`}>
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image src={opt.image} alt={opt.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-accent-gold shadow-xl">
                  <opt.icon size={24} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl mb-4 group-hover:text-accent-gold transition-colors">{opt.title}</h3>
                <p className="text-text-secondary leading-relaxed font-light text-sm">{opt.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <h2 className="text-4xl lg:text-5xl mb-8 leading-tight">Handloom <span className="gradient-text-gold">Exclusives</span></h2>
            <p className="text-lg text-text-secondary mb-10 leading-relaxed font-light">
              We take pride in our direct connection with Keralam's traditional weavers. Our handloom collection represents the finest in silk and cotton heritage, preserved through centuries of craftsmanship.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="aspect-[4/5] bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-4 group overflow-hidden relative shadow-2xl">
                 <Image src="/images/fabrics/pure-silk.png" alt="Pure Silk" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all"></div>
                 <div className="relative z-10 flex flex-col items-center gap-2">
                   <Package className="text-accent-gold" size={32} />
                   <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/80 font-bold">Pure Silk</span>
                 </div>
              </div>
              <div className="aspect-[4/5] bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-4 group overflow-hidden relative shadow-2xl">
                 <Image src="/images/fabrics/raw-cotton.png" alt="Raw Cotton" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all"></div>
                 <div className="relative z-10 flex flex-col items-center gap-2">
                   <Package className="text-accent-gold" size={32} />
                   <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/80 font-bold">Raw Cotton</span>
                 </div>
              </div>
            </div>

            <CTAButton 
              text="Create Your Signature Look" 
              href="/contact"
            />
          </div>

          <div className="relative h-[600px] lg:h-[700px] reveal">
             <div className="absolute inset-0 bg-glass-bg rounded-[2.5rem] overflow-hidden border border-glass-border shadow-2xl group">
                <Image src="/images/fabrics/feature.png" alt="Artisan Atelier" fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="text-center">
                     <Palette className="text-accent-orange mx-auto mb-4 opacity-50" size={60} />
                     <span className="text-white/40 text-sm tracking-[0.5em] uppercase font-bold">Artisan Atelier</span>
                   </div>
                </div>
             </div>
             <div className="absolute -bottom-8 -left-8 glass-panel p-10 rounded-2xl border-accent-orange/30 animate-float-slow shadow-[0_20px_50px_rgba(255,111,0,0.1)]">
                <p className="text-accent-orange font-bold text-5xl mb-1">100%</p>
                <p className="text-white/60 uppercase tracking-[0.3em] text-[0.65rem] font-bold">Authentic Heritage</p>
             </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
