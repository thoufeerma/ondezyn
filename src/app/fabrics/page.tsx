"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import { Palette, Scissors, Ruler, Package, X, ZoomIn } from "lucide-react";

interface LightboxImage {
  src: string;
  alt: string;
}

export default function Fabrics() {
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null);

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightbox({ src, alt });
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

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
      {/* ── Image Lightbox Overlay ── */}
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-500 ${
          lightbox ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={closeLightbox}
        aria-modal="true"
        role="dialog"
        aria-label="Image preview"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95"
          onClick={closeLightbox}
          aria-label="Close preview"
        >
          <X size={22} />
        </button>

        {/* Image Container */}
        {lightbox && (
          <div
            className={`relative max-w-[90vw] max-h-[88vh] w-full h-full flex items-center justify-center z-[1] transition-all duration-500 ${
              lightbox ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[88vh] max-w-[90vw] rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="max-h-[88vh] max-w-[90vw] object-contain"
                style={{ display: "block" }}
              />
              <div className="absolute bottom-0 inset-x-0 py-3 px-5 bg-black/60 backdrop-blur-sm">
                <p className="text-white/80 text-xs tracking-[0.2em] uppercase text-center font-medium">{lightbox.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <SectionWrapper id="fabrics-hero" className="container mx-auto px-10 max-w-[1400px]">
        <div className="text-center mb-20 reveal">
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1] mb-6 text-white">
            Artisan <span className="gradient-text">Options</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto font-light">
            Uncompromising quality sourced from the heart of Keralam&apos;s textile heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-[120px]">
          {options.map((opt, i) => (
            <div
              key={i}
              className="glass-panel p-0 rounded-[2.5rem] overflow-hidden border-white/5 hover:border-accent-gold/30 hover:shadow-[0_20px_50px_rgba(255,111,0,0.1)] transition-all duration-500 group reveal shadow-xl cursor-pointer"
              onClick={() => openLightbox(opt.image, opt.title)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(opt.image, opt.title)}
              aria-label={`View ${opt.title} image`}
            >
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image src={opt.image} alt={opt.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-accent-gold shadow-xl">
                  <opt.icon size={24} />
                </div>
                {/* Zoom hint */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ZoomIn size={16} />
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
              We take pride in our direct connection with Keralam&apos;s traditional weavers. Our handloom collection represents the finest in silk and cotton heritage, preserved through centuries of craftsmanship.
            </p>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-12">
              {/* Card 1: Pure Silk */}
              <div
                className="aspect-square bg-white/5 rounded-2xl border border-white/10 group overflow-hidden relative shadow-2xl cursor-pointer"
                onClick={() => openLightbox("/images/fabrics/pure-silk.png", "Pure Silk Handloom")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openLightbox("/images/fabrics/pure-silk.png", "Pure Silk Handloom")}
                aria-label="View Pure Silk image"
              >
                <Image src="/images/fabrics/pure-silk.png" alt="Pure Silk" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ZoomIn size={14} />
                </div>
              </div>

              {/* Card 2: Kasavu */}
              <div
                className="aspect-square bg-white/5 rounded-2xl border border-white/10 group overflow-hidden relative shadow-2xl cursor-pointer"
                onClick={() => openLightbox("/images/fabrics/kasavu.png", "Kasavu Handloom")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openLightbox("/images/fabrics/kasavu.png", "Kasavu Handloom")}
                aria-label="View Kasavu image"
              >
                <Image src="/images/fabrics/kasavu.png" alt="Kasavu" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ZoomIn size={14} />
                </div>
              </div>

              {/* Card 3: Premium Texture */}
              <div
                className="aspect-square bg-white/5 rounded-2xl border border-white/10 group overflow-hidden relative shadow-2xl cursor-pointer"
                onClick={() => openLightbox("https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200", "Premium Handloom Texture")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openLightbox("https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200", "Premium Handloom Texture")}
                aria-label="View Premium Texture image"
              >
                <Image src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200" alt="Premium Texture" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ZoomIn size={14} />
                </div>
              </div>

              {/* Card 4: Detailed Embroidery */}
              <div
                className="aspect-square bg-white/5 rounded-2xl border border-white/10 group overflow-hidden relative shadow-2xl cursor-pointer"
                onClick={() => openLightbox("https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200", "Artisanal Embroidery")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openLightbox("https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200", "Artisanal Embroidery")}
                aria-label="View Detailed Embroidery image"
              >
                <Image src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200" alt="Detailed Embroidery" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ZoomIn size={14} />
                </div>
              </div>
            </div>

            <CTAButton 
              text="Create Your Signature Look" 
              href="/contact"
            />
          </div>

          <div className="relative h-[600px] lg:h-[700px] reveal">
            <div
              className="absolute inset-0 bg-glass-bg rounded-[2.5rem] overflow-hidden border border-glass-border shadow-2xl group cursor-pointer"
              onClick={() => openLightbox("/images/fabrics/feature.png", "Artisan Atelier")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openLightbox("/images/fabrics/feature.png", "Artisan Atelier")}
              aria-label="View Artisan Atelier image"
            >
              <Image src="/images/fabrics/feature.png" alt="Artisan Atelier" fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center px-6 py-4 bg-black/30 backdrop-blur-md rounded-2xl border border-white/5 shadow-2xl">
                  <Palette className="text-accent-gold mx-auto mb-3 opacity-80" size={48} />
                  <span className="text-white text-lg sm:text-2xl tracking-[0.4em] uppercase font-bold drop-shadow-2xl block">Artisan Atelier</span>
                  <span className="text-accent-gold/60 text-[0.6rem] tracking-[0.2em] uppercase mt-2 block font-medium">Where Tradition Meets Vision</span>
                </div>
              </div>
              {/* Zoom indicator */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ZoomIn size={18} />
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
