"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "Process", href: "/process" },
    { name: "Style Guide", href: "/style-guide" },
    { name: "Fabrics", href: "/fabrics" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 h-[90px] flex items-center justify-between px-10 z-[9000] transition-all duration-500 border-b border-transparent ${scrolled ? 'bg-black/70 backdrop-blur-xl border-glass-border' : ''}`}>
      <Link href="/" className="transition-transform hover:scale-105">
        <Image src="/images/logo-light.png" alt="ONDEZYN™ Logo" width={120} height={45} className="object-contain" priority unoptimized />
      </Link>
      
      <nav className="hidden lg:flex gap-8 items-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-[0.75rem] font-semibold uppercase tracking-[0.15em] relative py-1 transition-colors duration-300 group ${isActive ? 'text-white' : 'text-text-secondary hover:text-white'}`}
            >
              {link.name}
              <span className={`absolute -bottom-[2px] left-1/2 -translate-x-1/2 h-[1px] bg-accent-orange transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          );
        })}
      </nav>

      {/* Mobile Menu Toggle (Simplified for now) */}
      <div className="lg:hidden">
        {/* You could add a mobile menu here, but for now we focus on the primary task */}
      </div>
    </header>
  );
};

export default Navbar;
