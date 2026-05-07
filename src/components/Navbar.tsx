"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
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
    { 
      name: "Collections", 
      href: "/collections",
      dropdown: [
        { name: "Signature Designs", href: "/collections/signature-designs" },
        { name: "Ethnic Wears", href: "/collections/ethnic-wears" },
        { name: "Party Wears", href: "/collections/party-wears" },
        { name: "Bridal Wears", href: "/collections/bridal-wears" },
        { name: "Accessories", href: "/collections/accessories" },
        { name: "Kids Specials", href: "/collections/kids-specials" },
      ]
    },
    { name: "Process", href: "/process" },
    { name: "Style Guide", href: "/style-guide" },
    { name: "Fabrics", href: "/fabrics" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 h-[80px] lg:h-[100px] flex items-center justify-between px-6 lg:px-10 z-[100] transition-all duration-500 border-b ${scrolled ? 'bg-[#050505]/60 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] border-white/10' : 'bg-gradient-to-b from-black/40 to-transparent border-transparent'}`}>
        <div className="flex items-center gap-3 lg:gap-6 z-[10]">
          <Link
            href="/"
            className="transition-transform hover:scale-105"
            aria-label="ONDEZYN Home"
          >
            <Image
              src="/images/logo-light.png"
              alt="ONDEZYN™ Logo"
              width={135}
              height={50}
              className="object-contain w-[85px] lg:w-[120px] h-auto"
              priority
              unoptimized
            />
          </Link>
          <div className="hidden sm:flex flex-col items-center justify-center pl-4 lg:pl-6 border-l border-white/10 h-10 lg:h-12">
            <p className="text-[12px] lg:text-[14px] text-white font-heading tracking-[0.2em] leading-none mb-1 uppercase">
              <span className="text-accent-orange">ON</span>DEZYN
            </p>
            <p className="text-[18px] lg:text-[22px] text-accent-gold/90 font-script leading-none whitespace-nowrap -ml-0.5">Fashion Studio</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const hasDropdown = link.dropdown && link.dropdown.length > 0;

            return (
              <div 
                key={link.name} 
                className="relative group py-4"
                onMouseEnter={() => hasDropdown && setIsCollectionsOpen(true)}
                onMouseLeave={() => hasDropdown && setIsCollectionsOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`text-[0.75rem] font-semibold uppercase tracking-[0.15em] relative py-1 transition-colors duration-300 flex items-center gap-1.5 ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}`}
                >
                  {link.name}
                  {hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${isCollectionsOpen ? 'rotate-180' : ''}`} />}
                  <span className={`absolute -bottom-[2px] left-0 h-[1px] transition-all duration-300 ${isActive ? 'w-full bg-accent-gold' : 'w-0 group-hover:w-full bg-white/50'}`}></span>
                </Link>

                {/* Dropdown Menu */}
                {hasDropdown && (
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[220px] bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl ${isCollectionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
                    <div className="py-3">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-6 py-3 text-[0.7rem] uppercase tracking-[0.1em] text-white/60 hover:text-white hover:bg-white/5 transition-all"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-white/90 hover:text-white p-2 z-[10] transition-transform active:scale-95"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Menu Full-Screen Overlay */}
      <div
        className={`fixed inset-0 bg-[#050505]/95 backdrop-blur-lg z-[90] flex flex-col justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
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
                className={`text-3xl font-serif italic tracking-wide transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
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
          className={`absolute bottom-12 flex flex-col items-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
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
