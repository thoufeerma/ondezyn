"use client";

import React, { useEffect } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  alternateBg?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = "", id, alternateBg = false }) => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
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
              htmlEl.style.transitionDelay = `${index * 150}ms`;
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

  const bgClass = alternateBg ? "bg-gradient-to-b from-black via-[#0a0a0a] to-black" : "bg-black";

  return (
    <section 
      id={id} 
      className={`${bgClass} transition-colors duration-1000 ${className} min-h-[10vh]`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
