import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook } from "./Icons";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-10 lg:pt-20 pb-6 lg:pb-10 px-5 lg:px-10 border-t border-black/5 bg-[#fdfbf7]/50 backdrop-blur-xl relative z-10">
      <div className="container mx-auto max-w-[1400px] grid grid-cols-2 lg:flex lg:flex-row justify-between items-start mb-6 lg:mb-16 gap-x-4 gap-y-6 lg:gap-0">
        <div className="col-span-2 lg:col-span-1 lg:max-w-sm flex flex-col lg:block">
          <div className="flex justify-between items-center lg:items-start lg:block mb-3 lg:mb-6">
            <Link href="/" className="inline-block transition-transform duration-500 hover:scale-105">
              <Image src="/images/logo black.png" alt="ONDEZYN™ Logo" width={198} height={72} className="object-contain lg:w-[270px] lg:h-[108px]" unoptimized />
            </Link>
            <div className="flex lg:hidden items-center gap-2">
              <a href="https://www.instagram.com/ondezyn/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center hover:bg-accent-orange hover:text-white transition-all"><Instagram size={14} /></a>
              <a href="https://www.facebook.com/profile.php?id=61579379981046" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center hover:bg-accent-orange hover:text-white transition-all"><Facebook size={14} /></a>
              <a href="https://wa.me/919955002209" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all"><MessageCircle size={14} /></a>
            </div>
          </div>
          <p className="hidden lg:block text-black/60 leading-[1.6] mb-3 lg:mb-4 text-xs lg:text-base pr-4 lg:pr-0">Redefining luxury fashion through Keralam&apos;s rich heritage and exceptional custom tailoring.</p>
          <div className="flex flex-col gap-1 mb-1 lg:mb-0">
            <p className="text-[0.55rem] lg:text-xs text-black/40 uppercase tracking-[0.2em]">Designing Dreams in to Perfect Fits</p>
            <p className="text-[0.55rem] lg:text-xs text-accent-gold font-medium tracking-[0.1em]">+91 99 55 00 22 09</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm lg:text-lg mb-3 lg:mb-6 text-black font-heading uppercase tracking-wide">Collections</h4>
          <ul className="flex flex-col gap-2 lg:gap-4">
            <li><Link href="/collections" className="text-black/60 hover:text-accent-orange transition-colors text-sm">Signature Designs</Link></li>
            <li><Link href="/collections" className="text-black/60 hover:text-accent-orange transition-colors text-sm">Ethnic Wears</Link></li>
            <li><Link href="/collections" className="text-black/60 hover:text-accent-orange transition-colors text-sm">Party Wears</Link></li>
            <li><Link href="/collections" className="text-black/60 hover:text-accent-orange transition-colors text-sm">Bridal Wears</Link></li>
            <li><Link href="/collections" className="text-black/60 hover:text-accent-orange transition-colors text-sm">Kids Specials</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm lg:text-lg mb-3 lg:mb-6 text-black font-heading uppercase tracking-wide">Quick Links</h4>
          <ul className="flex flex-col gap-2 lg:gap-4">
            <li><Link href="/#story" className="text-black/60 hover:text-accent-orange transition-colors text-sm">Our Heritage</Link></li>
            <li><Link href="/process" className="text-black/60 hover:text-accent-orange transition-colors text-sm">Process</Link></li>
            <li><Link href="/style-guide" className="text-black/60 hover:text-accent-orange transition-colors text-sm">Style Guide</Link></li>
            <li><Link href="/fabrics" className="text-black/60 hover:text-accent-orange transition-colors text-sm">Artisan Options</Link></li>
            <li><Link href="/contact" className="text-black/60 hover:text-accent-orange transition-colors text-sm">Contact</Link></li>
          </ul>
        </div>
        <div className="col-span-2 lg:col-span-1 hidden lg:block">
          <h4 className="text-sm lg:text-lg mb-3 lg:mb-6 text-black font-heading uppercase tracking-wide">Stay Connected</h4>
          <p className="text-black/60 text-xs lg:text-sm mb-4 lg:mb-5 max-w-[200px] hidden lg:block">Follow us for daily style inspiration and latest collections.</p>
          <div className="flex items-center gap-3 text-black/70">
            <a href="https://www.instagram.com/ondezyn/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg bg-black/5 flex items-center justify-center hover:bg-accent-orange hover:text-white transition-all active:scale-95"><Instagram size={18} /></a>
            <a href="https://www.facebook.com/profile.php?id=61579379981046" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg bg-black/5 flex items-center justify-center hover:bg-accent-orange hover:text-white transition-all active:scale-95"><Facebook size={18} /></a>
            <a href="https://wa.me/919955002209" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg bg-black/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all active:scale-95"><MessageCircle size={18} /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-[1400px] pt-5 lg:pt-8 border-t border-black/5 flex flex-col items-center text-black/30 text-[0.6rem] lg:text-[0.7rem] gap-2 lg:gap-3 text-center">
        <p className="font-medium tracking-wide">© 2025 ONDEZYN™ PRIVATE LIMITED. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
          <a href="http://WWW.ONDEZYN.COM" className="hover:text-black transition-colors">WWW.ONDEZYN.COM</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
