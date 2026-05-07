export interface CollectionItem {
  name: string;
  image: string;
  description: string;
}

export interface Collection {
  id: string;
  title: string;
  heroImage: string;
  description: string;
  items: CollectionItem[];
}

export const collectionsData: Record<string, Collection> = {
  "signature-designs": {
    id: "signature-designs",
    title: "Signature Designs",
    heroImage: "/images/collections/signature_main.png",
    description: "Our signature creations represent the pinnacle of personalized luxury, where each garment is a unique masterpiece crafted to your exact specifications.",
    items: [
      { name: "Signature Styles", image: "/images/collections/signature_styles.png", description: "Exclusive silhouettes defined by the ONDEZYN aesthetic." },
      { name: "Hand crafted Uniques", image: "/images/collections/hand_crafted.png", description: "One-of-a-kind pieces featuring intricate hand-done details." },
      { name: "Designer Blouse", image: "/images/collections/blouse_item.png", description: "Artistically constructed blouses for the modern visionary." },
      { name: "Designer Salwar sets", image: "/images/collections/salwar_item.png", description: "Elegant salwar sets with a contemporary luxury twist." },
      { name: "Mom & Daughter Combo", image: "/images/collections/mom_daughter.png", description: "Synchronized elegance for the most precious connections." }
    ]
  },
  "ethnic-wears": {
    id: "ethnic-wears",
    title: "Ethnic Wears",
    heroImage: "/images/collections/ethnic_main.png",
    description: "A celebration of heritage and tradition, our ethnic collection brings together timeless silhouettes and exquisite craftsmanship.",
    items: [
      { name: "Lehanga", image: "/images/collections/lehanga_item.png", description: "Grand voluminous lehengas for celebrations and festivals." },
      { name: "Anarkali Dresses", image: "/images/collections/anarkali_item.png", description: "Flowing grace with intricate embroidery and rich fabrics." },
      { name: "Saree Styling", image: "/images/collections/saree_item.png", description: "The art of the drape, redefined for modern elegance." },
      { name: "Sharara sets", image: "/images/collections/sharara_item.png", description: "Vibrant and festive sharara sets with detailed work." },
      { name: "Kurtis", image: "/images/collections/kurtis_item.png", description: "Sophisticated daily luxury and occasion-ready kurtis." }
    ]
  },
  "party-wears": {
    id: "party-wears",
    title: "Party Wears",
    heroImage: "/images/collections/party_main.png",
    description: "Make an unforgettable statement with our contemporary party wear, designed for the spotlight and crafted for elegance.",
    items: [
      { name: "Indo Western Dresses", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1200", description: "The perfect fusion of global silhouettes and Indian artistry." },
      { name: "Designer Gowns", image: "https://images.unsplash.com/photo-1599452388339-039c3629475e?q=80&w=1200", description: "Ethereal gowns that bring a touch of cinematic glamour." },
      { name: "Crop top & Skirt sets", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200", description: "Chic, modern coordinates for the stylish celebrant." },
      { name: "Fusion wear", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1200", description: "Breaking boundaries with unique design combinations." }
    ]
  },
  "bridal-wears": {
    id: "bridal-wears",
    title: "Bridal Wears",
    heroImage: "/images/collections/bridal_main.png",
    description: "Your journey to the altar deserves a masterpiece. Our bridal collection is a testament to the art of the wedding, meticulously crafted for your most precious day.",
    items: [
      { name: "Bridal Blouses", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200", description: "Intricately detailed blouses featuring Aari and Zardosi work." },
      { name: "Bridal Lehenga", image: "https://images.unsplash.com/photo-1595919644098-fb0100c5031b?q=80&w=1200", description: "Grand, regal lehengas that tell a story of tradition and luxury." },
      { name: "Engagement Gowns", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200", description: "Sophisticated gowns for the elegant precursor to your big day." },
      { name: "Wedding Saree Styling", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1200", description: "Expert saree styling and pre-pleating for a flawless bridal look." }
    ]
  },
  "accessories": {
    id: "accessories",
    title: "Accessories",
    heroImage: "/images/collections/accessories_main.png",
    description: "Complete your ensemble with our curated range of accessories, from artisanal dupattas to premium fabrics that define your style.",
    items: [
      { name: "Dupattas", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1200", description: "Richly embroidered dupattas that transform any look." },
      { name: "Tassels & Latkans", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200", description: "Custom handcrafted details to add a touch of whimsy." },
      { name: "Premium fabrics", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200", description: "Ethically sourced silks and handlooms for your bespoke designs." }
    ]
  },
  "kids-specials": {
    id: "kids-specials",
    title: "Kids Specials",
    heroImage: "/images/collections/kids_main.png",
    description: "Because every little one deserves to feel like royalty. Our kids' collection combines comfort with couture for life's most joyful celebrations.",
    items: [
      { name: "Birthday Outfits", image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1200", description: "Whimsical and vibrant dresses for the most special milestones." },
      { name: "Festive Collections", image: "https://images.unsplash.com/photo-1621430005523-6428c04ec47d?q=80&w=1200", description: "Traditional pattu pavada and lehengas for little icons." },
      { name: "Princess style Dresses", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1200", description: "Fairytale-inspired gowns crafted with love and soft fabrics." }
    ]
  }
};

export async function getCollectionBySlug(slug: string): Promise<Collection | null> {
  // Simulate server-side fetch or delay if needed
  return collectionsData[slug] || null;
}

export async function getAllCollectionsSlugs(): Promise<string[]> {
  return Object.keys(collectionsData);
}

export const collectionsList = Object.values(collectionsData).map(c => ({
  title: c.title,
  slug: c.id,
  items: c.items.map(item => item.name),
  image: c.heroImage,
  color: c.id === 'bridal-wears' ? 'from-white/10' : 
         c.id === 'signature-designs' ? 'from-accent-gold/20' :
         c.id === 'party-wears' ? 'from-accent-orange/20' : 'from-accent-red/20'
}));
