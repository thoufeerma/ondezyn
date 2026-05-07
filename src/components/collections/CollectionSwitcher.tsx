"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { collectionsList } from "@/lib/data/collections";
import { cn } from "@/lib/utils";

export default function CollectionSwitcher() {
  const { slug } = useParams();

  return (
    <div className="w-full border-y border-white/5 py-6 bg-black/50 backdrop-blur-md sticky top-[80px] z-40 overflow-x-auto no-scrollbar">
      <div className="container mx-auto px-5 lg:px-10 flex items-center justify-center gap-6 lg:gap-12 min-w-max">
        {collectionsList.map((cat) => {
          const isActive = slug === cat.slug;
          return (
            <Link
              key={cat.slug}
              href={`/collections/${cat.slug}`}
              className={cn(
                "group relative py-2 text-[10px] lg:text-[11px] tracking-[0.3em] uppercase font-medium transition-all duration-300 whitespace-nowrap",
                isActive ? "text-accent-gold" : "text-white/40 hover:text-white"
              )}
            >
              {cat.title}
              {isActive && (
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent-gold animate-in fade-in slide-in-from-left-1 duration-500"></span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
