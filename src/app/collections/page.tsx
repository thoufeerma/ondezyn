"use client";

import React from "react";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import { Package } from "lucide-react";

export default function Collections() {
  const categories = [
    { 
      title: "ONDEZYN Signature Designs", 
      items: ["Signature Styles", "Hand crafted Uniques", "Designer Blouse", "Designer Salwar sets", "Mom & Daughter Combo"],
      msg: "Hi, I want to explore ONDEZYN Signature Designs",
      image: "/images/collection_aari.png",
      color: "from-accent-red/20"
    },
    { 
      title: "Ethnic Wears", 
      items: ["Blouse", "Top", "Gowns", "Lehanga", "Anarkali Dresses", "Kurtis", "Palazzo sets", "Sharara sets", "Dhawani Sets"],
      msg: "Hi, I am interested in Ethnic Wear collection",
      image: "/images/collection_blouse.png",
      color: "from-accent-gold/20"
    },
    { 
      title: "Party Wears", 
      items: ["Indo Western Dresses", "Designer Gowns", "Crop top & Skirt sets", "Fusion wear"],
      msg: "Hi, I want a custom Party Wear design",
      image: "/images/gown.png",
      color: "from-accent-orange/20"
    },
    { 
      title: "Bridal Wears", 
      items: ["Bridal Blouses", "Bridal Lehenga", "Engagement/Reception Gowns", "Wedding Saree Custom styling / Pre-Pleating"],
      msg: "Hi, I am interested in Bridal Wear at ONDEZYN",
      image: "/images/collection_bridal.png",
      color: "from-white/10"
    },
    { 
      title: "Accessories", 
      items: ["Dupattas", "Falls & Pico", "Tassels & Latkans", "Fashion Accessories", "Premium fabrics"],
      msg: "Hi, I want details about accessories",
      image: "/images/collections/accessories.png",
      color: "from-accent-red/10"
    },
    { 
      title: "Kids Specials", 
      items: ["Birthday Outfits", "Fusion Outfits", "Festive Collections", "Traditional Pattu Pavada", "Lehenga", "Choli", "Frock", "Princess style Dresses"],
      msg: "Hi, I want outfits for kids collection",
      image: "/images/collections/kids.png",
      color: "from-accent-gold/10"
    }
  ];

  return (
    <div className="pt-[120px] pb-[100px] bg-black">
      <SectionWrapper id="collections-hero" className="container mx-auto px-10 max-w-[1400px]">
        <div className="text-center mb-20 reveal">
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1] mb-6 text-white">
            Custom <span className="gradient-text-gold">Collections</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto font-light">
            Each creation is a unique journey of craftsmanship, tailored to reflect your individual story and elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, i) => (
            <div key={i} className={`group relative h-[600px] rounded-[2.5rem] overflow-hidden border border-glass-border reveal shadow-2xl transition-all duration-500`}>
              <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center">
                 {cat.image ? (
                   <Image src={cat.image} alt={cat.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                 ) : (
                   <>
                     <Package className="text-white/5 group-hover:scale-110 transition-transform duration-700" size={80} />
                     <span className="absolute bottom-12 text-white/10 text-xs tracking-[0.3em] uppercase">Gallery Preview Placeholder</span>
                   </>
                 )}
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300 ease-in-out`}></div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 ease-in-out"></div>
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="translate-y-12 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                  <h3 className="text-3xl mb-4 font-heading group-hover:text-accent-orange transition-colors">{cat.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-8 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    {cat.items.map((item, idx) => (
                      <span key={idx} className="text-[0.65rem] px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/5 text-white/60 tracking-wider">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                    <CTAButton 
                      text="Create Your Signature Look" 
                      href="/contact"
                      className="w-full justify-center !py-3 !text-sm"
                      showIcon={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Global Collection Footer CTA */}
      <SectionWrapper id="collections-cta" alternateBg={true} className="mt-[100px] container mx-auto px-10 max-w-[1400px]">
        <div className="glass-panel p-16 rounded-[3rem] text-center reveal border-accent-gold/10">
          <h2 className="text-3xl lg:text-4xl mb-6">Didn't find what you're looking for?</h2>
          <p className="text-text-secondary mb-10 max-w-xl mx-auto font-light">We specialize in custom creations beyond our current catalog. Let's discuss your unique vision.</p>
          <CTAButton 
            text="Begin Your Custom Design" 
            href="/contact"
          />
        </div>
      </SectionWrapper>
    </div>
  );
}
