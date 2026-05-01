"use client";

import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import { Scissors, Sparkles, BookOpen, Package, ArrowRight } from "lucide-react";

export default function StyleGuide() {
  const articles = [
    { title: "Custom Design & Styling", tag: "Design", icon: Scissors, desc: "How bespoke tailoring transforms your silhouette and confidence." },
    { title: "Trend Based Design Suggestions", tag: "Trends", icon: Sparkles, desc: "Stay ahead with the latest seasonal palettes and cuts." },
    { title: "Fashion Tips for Every Occasion", tag: "Tips", icon: BookOpen, desc: "The art of choosing the right outfit for weddings and events." },
    { title: "Seasonal Trends 2025", tag: "Seasonal", icon: Package, desc: "A deep dive into this year's most requested handloom styles." }
  ];

  return (
    <div className="pt-[120px] pb-[100px]">
      <SectionWrapper className="container mx-auto px-10 max-w-[1400px]">
        <div className="text-center mb-20 reveal">
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1] mb-6 text-white">
            Style <span className="gradient-text">Guide</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto font-light italic">
            Curated insights into luxury fashion, craftsmanship, and the ONDEZYN aesthetic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {articles.map((blog, i) => (
            <div key={i} className={`glass-panel p-10 rounded-[2.5rem] border-white/5 hover:border-accent-orange/30 transition-all duration-700 group reveal delay-${i * 100}`}>
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent-orange group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <blog.icon size={28} />
                </div>
                <span className="text-accent-gold text-[0.7rem] font-bold tracking-[0.2em] uppercase py-1 px-3 bg-accent-gold/10 rounded-full">{blog.tag}</span>
              </div>
              
              <h3 className="text-2xl mb-4 leading-snug group-hover:text-white transition-colors duration-500">{blog.title}</h3>
              <p className="text-text-secondary mb-8 leading-relaxed font-light">{blog.desc}</p>
              
              <button className="flex items-center gap-2 text-sm text-accent-orange/60 group-hover:text-accent-orange transition-all duration-300">
                Read Full Story <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Minimal Newsletter/CTA */}
        <div className="glass-panel p-12 rounded-[2rem] text-center max-w-3xl mx-auto reveal">
          <h2 className="text-2xl mb-4 font-heading">Want Personalized Styling Advice?</h2>
          <p className="text-text-secondary mb-8 font-light">Work directly with our lead designers to find your perfect fit and style.</p>
          <CTAButton 
            text="Begin Your Custom Design" 
            href="/contact"
          />
        </div>
      </SectionWrapper>
    </div>
  );
}
