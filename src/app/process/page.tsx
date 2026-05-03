"use client";

import React from "react";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";

export default function Process() {
  const steps = [
    { num: "01", title: "Consultation", desc: "We discuss your vision, occasions, and fabric preferences over a personalized session." },
    { num: "02", title: "Design & Sketch", desc: "Our designers translate your ideas into detailed sketches and select the perfect materials." },
    { num: "03", title: "Material Sourcing", desc: "We handpick the finest silks, linens, and handloom fabrics tailored to your design's requirements." },
    { num: "04", title: "Crafting", desc: "Master tailors and artisans begin the meticulous process of cutting, stitching, and embroidery." },
    { num: "05", title: "Final Fitting", desc: "The garment is adjusted to absolute perfection, ready to make its grand debut." }
  ];

  return (
    <div className="pt-[120px] pb-[100px] bg-black">
      <SectionWrapper id="process-hero" className="container mx-auto px-10 max-w-[1400px]">
        <div className="text-center mb-20 reveal">
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1] mb-6 text-white">
            The <span className="gradient-text-gold">Process</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto font-light">
            From the initial spark of an idea to the final touch of elegance.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between relative mt-20 lg:gap-0 gap-16">
          <div className="hidden lg:block absolute top-[40px] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-transparent via-glass-border to-transparent z-[1]"></div>
          
          {steps.map((step, i) => {
            const isUnique = i === 2; // Step 3
            return (
              <div key={i} className={`text-left lg:text-center relative z-[2] w-full lg:w-[18%] flex lg:block items-center gap-8 lg:gap-0 reveal group ${isUnique ? 'lg:-translate-y-4' : ''}`}>
                <div className={`w-[80px] h-[80px] rounded-full bg-bg-deep border-2 flex items-center justify-center lg:mx-auto lg:mb-8 text-2xl font-heading font-bold transition-all duration-500 shrink-0 ${
                  isUnique 
                    ? 'border-accent-gold text-accent-gold shadow-[0_0_30px_rgba(212,175,55,0.3)] bg-accent-gold/5 scale-110' 
                    : 'border-accent-orange text-accent-orange shadow-[0_0_20px_rgba(255,111,0,0.15)] group-hover:bg-accent-orange group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,111,0,0.4)]'
                }`}>
                  {step.num}
                </div>
                <div>
                  <h4 className={`text-2xl mb-3 lg:mb-4 transition-colors duration-500 ${isUnique ? 'text-accent-gold font-bold' : 'group-hover:text-accent-orange'}`}>{step.title}</h4>
                  <p className="text-text-secondary text-base leading-relaxed font-light">{step.desc}</p>
                </div>
                {isUnique && (
                  <div className="hidden lg:block absolute -inset-4 bg-accent-gold/5 blur-2xl rounded-3xl -z-10 opacity-50"></div>
                )}
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Process CTA Section */}
      <SectionWrapper id="process-cta" alternateBg={true} className="mt-20 lg:mt-[150px] container mx-auto px-5 lg:px-10 max-w-[1400px]">
        <div className="glass-panel p-8 lg:p-20 rounded-3xl lg:rounded-[3rem] relative overflow-hidden reveal border-accent-gold/5">
          <div className="absolute top-0 right-0 w-[200px] lg:w-[400px] h-[200px] lg:h-[400px] bg-accent-orange/5 blur-[100px] -z-10"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="mb-5 lg:mb-8 leading-tight">Ready to create your <span className="gradient-text">own design?</span></h2>
              <ul className="space-y-3 lg:space-y-4 mb-8 lg:mb-10 text-sm lg:text-base">
                {[
                  "Custom designs typically take 5–15 days",
                  "Limited consultation slots available",
                  "Direct access to master artisans",
                  "Personalized fabric and pattern selection"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <CTAButton 
                text="Begin Your Custom Design" 
                href="/contact" 
              />
            </div>
            
            <div className="relative h-[250px] lg:h-[400px] rounded-2xl overflow-hidden border border-glass-border shadow-2xl mt-4 lg:mt-0">
              <Image src="/images/story_stitching.png" alt="Craftsmanship" fill className="object-cover brightness-75 hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8">
                <p className="text-white/90 text-sm lg:text-lg font-heading italic">"Every thread tells a story of dedication and precision."</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
