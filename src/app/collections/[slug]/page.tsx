import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import CollectionGallery from "@/components/collections/CollectionGallery";
import CollectionSwitcher from "@/components/collections/CollectionSwitcher";
import { getCollectionBySlug, getAllCollectionsSlugs } from "@/lib/data/collections";

// SSG for performance
export async function generateStaticParams() {
  const slugs = await getAllCollectionsSlugs();
  return slugs.map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CollectionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const collection = await getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  return (
    <div className="pt-[100px] pb-[100px] bg-black min-h-screen">
      {/* ── Collection Header ── */}
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 px-5 text-center">
        <div className="container mx-auto max-w-4xl">
          <Link 
            href="/collections" 
            className="mb-8 text-white/40 hover:text-accent-gold inline-flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase transition-colors"
          >
            <ArrowLeft size={14} /> Back to Gallery
          </Link>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] mb-6 text-white font-heading">
            {collection.title}
          </h1>
          <p className="text-base lg:text-lg text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            {collection.description}
          </p>
        </div>
      </section>

      {/* ── Collection Switcher ── */}
      <CollectionSwitcher />

      {/* ── Minimalist Gallery Grid ── */}
      <SectionWrapper id="collection-gallery" className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-[1500px] mt-16 lg:mt-24">
        <Suspense fallback={<CollectionSkeleton />}>
          <CollectionGallery items={collection.items} />
        </Suspense>
      </SectionWrapper>

      {/* ── Bottom CTA ── */}
      <SectionWrapper id="detail-cta" className="container mx-auto px-5 lg:px-10 max-w-[1400px] mt-24 lg:mt-32">
        <div className="text-center p-12 lg:p-24 border-t border-white/5">
          <h2 className="text-3xl lg:text-5xl mb-8 leading-tight font-heading">Begin Your <br /> <span className="gradient-text-gold">Custom Journey</span></h2>
          <CTAButton 
            text="Contact Our Designers" 
            href="/contact"
          />
        </div>
      </SectionWrapper>
    </div>
  );
}

function CollectionSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-pulse">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="aspect-[3/4] rounded-[2.5rem] bg-white/5 border border-white/10"></div>
      ))}
    </div>
  );
}
