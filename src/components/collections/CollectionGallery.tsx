"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CollectionItem } from "@/lib/data/collections";

interface CollectionGalleryProps {
  items: CollectionItem[];
}

export default function CollectionGallery({ items }: CollectionGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {items.map((item, i) => (
        <div 
          key={item.name} 
          className="relative aspect-[3/4] rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/5 shadow-2xl bg-bg-charcoal"
        >
          {/* Optimized Next.js Image */}
          <Image 
            src={item.image} 
            alt={item.name} 
            fill 
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Sophisticated Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700"></div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end">
            <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.2,1,0.3,1)]">
              <span className="text-accent-gold text-[10px] tracking-[0.4em] uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">ONDEZYN</span>
              <h3 className="text-2xl sm:text-3xl text-white font-heading mt-2 group-hover:text-accent-gold transition-colors duration-500 leading-tight">{item.name}</h3>
              
              <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-700 delay-150">
                <p className="text-white/60 text-sm font-light mt-4 mb-6 leading-relaxed max-w-[90%]">
                  {item.description}
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:text-accent-gold transition-colors"
                >
                  Enquire Now <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
