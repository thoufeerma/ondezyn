"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 100) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Auto-expand on load to gently draw attention, then collapse
    const expandTimer = setTimeout(() => setIsExpanded(true), 1500);
    const collapseTimer = setTimeout(() => setIsExpanded(false), 4500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(expandTimer);
      clearTimeout(collapseTimer);
    };
  }, []);

  // At the top of the hero section, reduce opacity slightly so it doesn't distract
  const isAtTop = scrollY < 50;

  return (
    <div 
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[9999] transition-opacity duration-700 ease-in-out ${
        isAtTop ? "opacity-60 hover:opacity-100" : "opacity-100"
      }`}
      style={{
        animation: 'fadeScaleIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }}
    >
      <a 
        href="https://wa.me/919955002209?text=Hi,%20I%20want%20to%20know%20more%20about%20ONDEZYN%20Fashion%20Studio"
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center h-[52px] sm:h-[56px] bg-[#121c16] hover:bg-[#1a281e] border border-[#25d366]/20 hover:border-[#25d366]/40 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden cursor-pointer ${
          isExpanded ? "max-w-[200px] px-5" : "max-w-[52px] sm:max-w-[56px] px-0 w-[52px] sm:w-[56px] justify-center"
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={() => setIsExpanded(true)}
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={22} className="text-[#25d366] shrink-0" />
        <span 
          className={`text-white/80 text-sm font-medium tracking-wide whitespace-nowrap overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isExpanded ? "w-[130px] opacity-100 ml-3" : "w-0 opacity-0 ml-0"
          }`}
        >
          Chat on WhatsApp
        </span>
      </a>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeScaleIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}} />
    </div>
  );
};

export default WhatsAppButton;
