import React from "react";
import Image from "next/image";
import { Package } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import { collectionsList } from "@/lib/data/collections";

export default function CollectionsPage() {
  return (
    <div className="pt-[120px] pb-[100px] bg-black">
      <SectionWrapper id="collections-hero" className="container mx-auto px-10 max-w-[1400px]">
        <div className="text-center mb-20">
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1] mb-6 text-white">
            Custom <span className="gradient-text-gold">Collections</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto font-light">
            Each creation is a unique journey of craftsmanship, tailored to reflect your individual story and elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {collectionsList.map((cat) => (
            <div key={cat.slug} className="group relative h-[550px] sm:h-[650px] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl transition-all duration-700 mx-auto w-[94%] sm:w-full bg-bg-charcoal">
              {/* Background Image with more dimming */}
              <div className="absolute inset-0 flex items-center justify-center">
                 {cat.image ? (
                   <Image 
                     src={cat.image} 
                     alt={cat.title} 
                     fill 
                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                     className="object-cover transition-transform duration-[2500ms] ease-[cubic-bezier(0.2,1,0.3,1)] group-hover:scale-110 brightness-[0.7] group-hover:brightness-[0.35]" 
                     loading="lazy"
                   />
                 ) : (
                   <Package className="text-white/5 group-hover:scale-110 transition-transform duration-1000" size={80} />
                 )}
              </div>
              
              {/* Deeper Gradients for Readability */}
              <div className={`absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 opacity-70 group-hover:opacity-90 transition-opacity duration-1000`}></div>
              
              {/* Card Content - Structured Layout */}
              <div className="absolute inset-0 p-8 sm:p-12 flex flex-col">
                {/* Top Section: Heading and CTA */}
                <div className="mb-auto">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-1000 ease-[cubic-bezier(0.2,1,0.3,1)]">
                    <span className="text-accent-gold text-[10px] tracking-[0.5em] uppercase font-bold mb-4 block opacity-60 group-hover:opacity-100 transition-opacity duration-700">COLLECTION</span>
                    <h3 className="text-3xl sm:text-5xl font-heading text-white mb-10 group-hover:text-accent-gold transition-colors duration-700 leading-tight drop-shadow-2xl">
                      {cat.title}
                    </h3>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-150 -translate-x-6 group-hover:translate-x-0">
                      <CTAButton 
                        text="Explore Collection" 
                        href={`/collections/${cat.slug}`}
                        className="!bg-accent-gold !text-black !px-10 !py-4 !text-[0.75rem] sm:!text-[0.8rem] tracking-[0.25em] shadow-2xl hover:!scale-105 transition-transform"
                        showIcon={true}
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Sub-features (Smooth Staggered-like transition) */}
                <div className="mt-auto pt-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,1,0.3,1)]">
                  <p className="text-white/40 text-[9px] tracking-[0.4em] uppercase mb-6 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200">Featured Styles</p>
                  <div className="flex flex-wrap gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-all duration-[1200ms] delay-300">
                    {cat.items.map((item) => (
                      <span key={item} className="text-[0.75rem] sm:text-[0.85rem] px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 text-white/80 font-light hover:bg-white/10 hover:text-white hover:border-accent-gold/40 transition-all duration-500">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Border Glow */}
              <div className="absolute inset-0 border-[1px] border-accent-gold/0 group-hover:border-accent-gold/20 transition-all duration-1000 rounded-[2.5rem] sm:rounded-[3rem] pointer-events-none"></div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="collections-cta" alternateBg className="mt-[100px] container mx-auto px-10 max-w-[1400px]">
        <div className="glass-panel p-16 rounded-[3rem] text-center border-accent-gold/10">
          <h2 className="mb-6">Didn&apos;t find what you&apos;re looking for?</h2>
          <p className="text-text-secondary mb-10 max-w-xl mx-auto font-light">We specialize in custom creations beyond our current catalog. Let&apos;s discuss your unique vision.</p>
          <CTAButton text="Begin Your Custom Design" href="/contact" />
        </div>
      </SectionWrapper>
    </div>
  );
}
