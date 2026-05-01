"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle transparent to solid transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change automatically
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "Process", href: "/process" },
    { name: "Style Guide", href: "/style-guide" },
    { name: "Fabrics", href: "/fabrics" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 h-[80px] lg:h-[90px] flex items-center justify-between px-6 lg:px-10 z-[9000] transition-all duration-500 border-b border-transparent ${scrolled ? 'bg-[#0a0805]/90 backdrop-blur-xl border-white/5 shadow-xl' : ''}`}>
        <Link href="/" className="transition-transform hover:scale-105 z-[9001]" aria-label="ONDEZYN Home">
          <Image src="/images/logo-light.png" alt="ONDEZYN™ Logo" width={110} height={40} className="object-contain lg:w-[120px] lg:h-[45px]" priority unoptimized />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`text-[0.75rem] font-semibold uppercase tracking-[0.15em] relative py-1 transition-colors duration-300 group ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}`}
              >
                {link.name}
                <span className={`absolute -bottom-[2px] left-1/2 -translate-x-1/2 h-[1px] transition-all duration-300 ${isActive ? 'w-full bg-accent-gold' : 'w-0 group-hover:w-full bg-white/50'}`}></span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="lg:hidden text-white/90 hover:text-white p-2 z-[9001] transition-transform active:scale-95"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Menu Full-Screen Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0a0805] z-[8999] flex flex-col justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Soft background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,160,80,0.03)_0%,transparent_80%)] pointer-events-none"></div>
        
        {/* Mobile Navigation Links */}
        <nav className="flex flex-col items-center gap-8 text-center relative z-10 w-full px-6">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`text-3xl font-serif italic tracking-wide transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
                  isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                } ${isActive ? 'text-accent-gold' : 'text-white/90 hover:text-accent-gold'}`}
                style={{ transitionDelay: `${index * 60 + 100}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        
        {/* Mobile Menu Footer Branding */}
        <div 
          className={`absolute bottom-12 flex flex-col items-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          <span className="w-12 h-[1px] bg-accent-gold/20 mb-6"></span>
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-medium">ONDEZYN Fashion Studio</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
