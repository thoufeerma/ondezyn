import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook } from "./Icons";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-20 pb-24 lg:pb-10 px-10 border-t border-glass-border bg-bg-deep relative z-10">
      <div className="container mx-auto max-w-[1400px] flex flex-col lg:flex-row justify-between items-start mb-16 gap-10 lg:gap-0">
        <div className="max-w-sm">
          <div className="inline-block mb-6">
            <Image src="/images/logo-light.png" alt="ONDEZYN™ Logo" width={150} height={60} className="object-contain" unoptimized />
          </div>
          <p className="text-text-secondary leading-[1.7] mb-6">Redefining luxury fashion through Keralam's rich heritage and exceptional custom tailoring.</p>
          <p className="text-xs text-white/30 uppercase tracking-[0.2em]">Designing Dreams in to Perfect Fits</p>
        </div>
        <div>
          <h4 className="text-lg mb-6 text-white font-heading">Collections</h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="/collections" className="text-text-secondary hover:text-accent-orange transition-colors text-sm">Signature Designs</Link></li>
            <li><Link href="/collections" className="text-text-secondary hover:text-accent-orange transition-colors text-sm">Ethnic Wears</Link></li>
            <li><Link href="/collections" className="text-text-secondary hover:text-accent-orange transition-colors text-sm">Party Wears</Link></li>
            <li><Link href="/collections" className="text-text-secondary hover:text-accent-orange transition-colors text-sm">Bridal Wears</Link></li>
            <li><Link href="/collections" className="text-text-secondary hover:text-accent-orange transition-colors text-sm">Kids Specials</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg mb-6 text-white font-heading">Quick Links</h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="/#story" className="text-text-secondary hover:text-accent-orange transition-colors text-sm">Our Heritage</Link></li>
            <li><Link href="/process" className="text-text-secondary hover:text-accent-orange transition-colors text-sm">Process</Link></li>
            <li><Link href="/style-guide" className="text-text-secondary hover:text-accent-orange transition-colors text-sm">Style Guide</Link></li>
            <li><Link href="/fabrics" className="text-text-secondary hover:text-accent-orange transition-colors text-sm">Artisan Options</Link></li>
            <li><Link href="/contact" className="text-text-secondary hover:text-accent-orange transition-colors text-sm">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg mb-6 text-white font-heading">Stay Connected</h4>
          <p className="text-text-secondary text-sm mb-6 max-w-[200px]">Follow us for daily style inspiration and latest collections.</p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/ondezyn/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-accent-orange transition-all"><Instagram size={18} /></a>
            <a href="https://www.facebook.com/profile.php?id=61579379981046" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-accent-orange transition-all"><Facebook size={18} /></a>
            <a href="https://wa.me/919955002209" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#25D366] transition-all"><MessageCircle size={18} /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-[1400px] pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center text-text-muted text-[0.7rem] gap-4">
        <p>© 2025 ONDEZYN PRIVATE LIMITED. All rights reserved.</p>
        <div className="flex gap-8">
          <span>CIN: U14101KL2025PTC097419</span>
          <a href="http://WWW.ONDEZYN.COM" className="hover:text-white transition-colors">WWW.ONDEZYN.COM</a>
        </div>
        <p className="opacity-50">Kollavarsham 1200</p>
      </div>
    </footer>
  );
};

export default Footer;
