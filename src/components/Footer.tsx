import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook } from "./Icons";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-10 lg:pt-20 pb-6 lg:pb-10 px-5 lg:px-10 border-t border-glass-border bg-bg-deep relative z-10">
      <div className="container mx-auto max-w-[1400px] grid grid-cols-2 lg:flex lg:flex-row justify-between items-start mb-6 lg:mb-16 gap-x-4 gap-y-6 lg:gap-0">
        <div className="col-span-2 lg:col-span-1 lg:max-w-sm flex flex-col lg:block">
          <div className="flex justify-between items-center lg:items-start lg:block mb-3 lg:mb-6">
            <Image src="/images/logo-light.png" alt="ONDEZYN™ Logo" width={110} height={40} className="object-contain lg:w-[150px] lg:h-[60px]" unoptimized />
            <div className="flex lg:hidden items-center gap-2">
              <a href="https://www.instagram.com/ondezyn/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-accent-orange transition-all"><Instagram size={14} /></a>
              <a href="https://www.facebook.com/profile.php?id=61579379981046" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-accent-orange transition-all"><Facebook size={14} /></a>
              <a href="https://wa.me/919955002209" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#25D366] transition-all"><MessageCircle size={14} /></a>
            </div>
          </div>
          <p className="hidden lg:block text-text-secondary leading-[1.6] mb-3 lg:mb-4 text-xs lg:text-base pr-4 lg:pr-0">Redefining luxury fashion through Keralam&apos;s rich heritage and exceptional custom tailoring.</p>
          <p className="text-[0.55rem] lg:text-xs text-white/30 uppercase tracking-[0.2em] mb-1 lg:mb-0">Designing Dreams in to Perfect Fits</p>
        </div>
        <div>
          <h4 className="text-sm lg:text-lg mb-3 lg:mb-6 text-white font-heading">Collections</h4>
          <ul className="flex flex-col gap-2 lg:gap-4">
            <li><Link href="/collections" className="text-text-secondary hover:text-accent-orange transition-colors text-sm">Signature Designs</Link></li>
            <li><Link href="/collections" className="text-text-secondary hover:text-accent-orange transition-colors text-sm">Ethnic Wears</Link></li>
            <li><Link href="/collections" className="text-text-secondary hover:text-accent-orange transition-colors text-sm">Party Wears</Link></li>
            <li><Link href="/collections" className="text-text-secondary hover:text-accent-orange transition-colors text-sm">Bridal Wears</Link></li>
            <li><Link href="/collections" className="text-text-secondary hover:text-accent-orange transition-colors text-sm">Kids Specials</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm lg:text-lg mb-3 lg:mb-6 text-white font-heading">Quick Links</h4>
          <ul className="flex flex-col gap-2 lg:gap-4">
            <li><Link href="/#story" className="text-text-secondary hover:text-accent-orange transition-colors text-sm">Our Heritage</Link></li>
            <li><Link href="/process" className="text-text-secondary hover:text-accent-orange transition-colors text-sm">Process</Link></li>
            <li><Link href="/style-guide" className="text-text-secondary hover:text-accent-orange transition-colors text-sm">Style Guide</Link></li>
            <li><Link href="/fabrics" className="text-text-secondary hover:text-accent-orange transition-colors text-sm">Artisan Options</Link></li>
            <li><Link href="/contact" className="text-text-secondary hover:text-accent-orange transition-colors text-sm">Contact</Link></li>
          </ul>
        </div>
        <div className="col-span-2 lg:col-span-1 hidden lg:block">
          <h4 className="text-sm lg:text-lg mb-3 lg:mb-6 text-white font-heading">Stay Connected</h4>
          <p className="text-text-secondary text-xs lg:text-sm mb-4 lg:mb-5 max-w-[200px] hidden lg:block">Follow us for daily style inspiration and latest collections.</p>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/ondezyn/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center hover:bg-accent-orange transition-all active:scale-95"><Instagram size={18} /></a>
            <a href="https://www.facebook.com/profile.php?id=61579379981046" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center hover:bg-accent-orange transition-all active:scale-95"><Facebook size={18} /></a>
            <a href="https://wa.me/919955002209" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#25D366] transition-all active:scale-95"><MessageCircle size={18} /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-[1400px] pt-5 lg:pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center text-text-muted text-[0.6rem] lg:text-[0.7rem] gap-2 lg:gap-4 text-center">
        <p>© 2025 ONDEZYN PRIVATE LIMITED. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
          <span>CIN: U14101KL2025PTC097419</span>
          <a href="http://WWW.ONDEZYN.COM" className="hover:text-white transition-colors">WWW.ONDEZYN.COM</a>
        </div>
        <p className="opacity-50">Kollavarsham 1200</p>
      </div>
    </footer>
  );
};

export default Footer;
