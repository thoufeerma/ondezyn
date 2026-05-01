"use client";

import React, { useEffect } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  alternateBg?: boolean;
  bgStyle?: "warm" | "cool" | "gold" | "default";
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = "", id, alternateBg = false, bgStyle = "default" }) => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -30px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          
          // If the entry is a section with staggered elements
          const revealElements = entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right");
          revealElements.forEach((el, index) => {
            const htmlEl = el as HTMLElement;
            // Apply staggered delay if not already set
            if (!htmlEl.style.transitionDelay) {
              htmlEl.style.transitionDelay = `${index * 120}ms`;
            }
            htmlEl.classList.add("visible");
          });
        }
      });
    }, observerOptions);

    // Observe the section itself
    const section = document.getElementById(id || "");
    if (section) {
      observer.observe(section);
    } else {
      // Fallback: observe all reveal elements in this component's scope if no ID
      const localReveals = document.querySelectorAll(`.reveal, .reveal-left, .reveal-right`);
      localReveals.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, [id]);

  // Background gradient styles for section depth & color transitions
  const bgGradients: Record<string, string> = {
    default: "bg-bg-deep",
    warm: "bg-gradient-to-b from-bg-deep via-[#0d0906] to-bg-deep",
    cool: "bg-gradient-to-b from-bg-deep via-[#080a0d] to-bg-deep",
    gold: "bg-gradient-to-b from-bg-deep via-[#0c0a05] to-bg-deep",
  };

  const bgClass = alternateBg ? bgGradients.warm : bgGradients[bgStyle] || bgGradients.default;

  return (
    <section 
      id={id} 
      className={`relative ${className} min-h-[10vh]`}
    >
      {/* Subtle center radial glow for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.015)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-[1]">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
