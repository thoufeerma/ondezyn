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
            <div key={cat.slug} className="group relative h-[500px] sm:h-[600px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-glass-border shadow-2xl transition-all duration-500 mx-auto w-[92%] sm:w-full bg-bg-charcoal">
              <div className="absolute inset-0 flex items-center justify-center">
                 {cat.image ? (
                   <Image 
                     src={cat.image} 
                     alt={cat.title} 
                     fill 
                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                     className="object-cover transition-transform duration-1000 group-hover:scale-110 brightness-75 sm:brightness-100" 
                     loading="lazy"
                   />
                 ) : (
                   <Package className="text-white/5 group-hover:scale-110 transition-transform duration-700" size={80} />
                 )}
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} to-transparent opacity-60 sm:opacity-40 group-hover:opacity-70 transition-opacity duration-300`}></div>
              <div className="absolute inset-0 bg-black/40 sm:bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
              
              <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end">
                <div className="translate-y-0 sm:translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.2,1,0.3,1)]">
                  <h3 className="text-2xl sm:text-3xl mb-3 sm:mb-5 font-heading text-white group-hover:text-accent-orange transition-colors">{cat.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-700 delay-75 h-auto sm:h-0 group-hover:h-auto overflow-hidden">
                    {cat.items.map((item) => (
                      <span key={item} className="text-[0.8rem] sm:text-[0.9rem] px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/10 sm:bg-white/5 backdrop-blur-md border border-white/10 sm:border-white/5 text-white/90 font-medium tracking-wide">
                        {item}
                      </span>
                    ))}
                  </div>
                  
                  <div className="opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-700 delay-150">
                    <CTAButton 
                      text="Explore Collection" 
                      href={`/collections/${cat.slug}`}
                      className="w-full justify-center !py-2.5 sm:!py-3 !text-[0.7rem] sm:!text-xs tracking-[0.2em]"
                      showIcon={false}
                    />
                  </div>
                </div>
              </div>
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
