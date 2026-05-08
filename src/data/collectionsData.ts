export interface CollectionItem {
  name: string;
  image: string;
  description: string;
}

export interface CollectionData {
  id: string;
  title: string;
  heroImage: string;
  description: string;
  items: CollectionItem[];
}

export const collectionsData: Record<string, CollectionData> = {
  "signature-designs": {
    id: "signature-designs",
    title: "ONDEZYN Signature Designs",
    heroImage: "/images/collections/signature_main.webp",
    description: "Our signature creations represent the pinnacle of personalized luxury, where each garment is a unique masterpiece crafted to your exact specifications.",
    items: [
      { name: "Signature Styles", image: "/images/collections/signature_styles.webp", description: "Exclusive silhouettes defined by the ONDEZYN aesthetic." },
      { name: "Hand crafted Uniques", image: "/images/collections/hand_crafted.webp", description: "One-of-a-kind pieces featuring intricate hand-done details." },
      { name: "Designer Blouse", image: "/images/collections/blouse_item.webp", description: "Artistically constructed blouses for the modern visionary." },
      { name: "Designer Salwar sets", image: "/images/collections/salwar_item.webp", description: "Elegant salwar sets with a contemporary luxury twist." },
      { name: "Mom & Daughter Combo", image: "/images/collections/mom_daughter.webp", description: "Synchronized elegance for the most precious connections." }
    ]
  },
  "ethnic-wears": {
    id: "ethnic-wears",
    title: "Ethnic Wears",
    heroImage: "/images/collections/ethnic_main.webp",
    description: "A celebration of heritage and tradition, our ethnic collection brings together timeless silhouettes and exquisite craftsmanship.",
    items: [
      { name: "Lehanga", image: "/images/collections/lehanga_item.webp", description: "Grand voluminous lehengas for celebrations and festivals." },
      { name: "Anarkali Dresses", image: "/images/collections/anarkali_item.webp", description: "Flowing grace with intricate embroidery and rich fabrics." },
      { name: "Saree Styling", image: "/images/collections/saree_item.webp", description: "The art of the drape, redefined for modern elegance." },
      { name: "Sharara sets", image: "/images/collections/sharara_item.webp", description: "Vibrant and festive sharara sets with detailed work." },
      { name: "Kurtis", image: "/images/collections/kurtis_item.webp", description: "Sophisticated daily luxury and occasion-ready kurtis." }
    ]
  },
  "party-wears": {
    id: "party-wears",
    title: "Party Wears",
    heroImage: "/images/collections/party_main.webp",
    description: "Make an unforgettable statement with our contemporary party wear, designed for the spotlight and crafted for elegance.",
    items: [
      { name: "Indo Western Dresses", image: "/images/collections/Party wears/Indo western.webp", description: "The perfect fusion of global silhouettes and Indian artistry." },
      { name: "Designer Gowns", image: "/images/collections/Party wears/Designer gowns.webp", description: "Ethereal gowns that bring a touch of cinematic glamour." },
      { name: "Crop top & Skirt sets", image: "/images/collections/Party wears/Crop top & Skirt sets.webp", description: "Chic, modern coordinates for the stylish celebrant." },
      { name: "Fusion wear", image: "/images/collections/Party wears/Fusion wear.webp", description: "Breaking boundaries with unique design combinations." }
    ]
  },
  "bridal-wears": {
    id: "bridal-wears",
    title: "Bridal Wears",
    heroImage: "/images/collections/bridal_main.webp",
    description: "Your journey to the altar deserves a masterpiece. Our bridal collection is a testament to the art of the wedding, meticulously crafted for your most precious day.",
    items: [
      { name: "Bridal Blouses", image: "/images/collections/Bridal Wears/Designer blouse.webp", description: "Intricately detailed blouses featuring Aari and Zardosi work." },
      { name: "Bridal Lehenga", image: "/images/collections/Bridal Wears/Bridal lehenga.webp", description: "Grand, regal lehengas that tell a story of tradition and luxury." },
      { name: "Engagement Gowns", image: "/images/collections/Bridal Wears/Engagement gowns.webp", description: "Sophisticated gowns for the elegant precursor to your big day." },
      { name: "Wedding Saree Styling", image: "/images/collections/Bridal Wears/Wedding saree styling.webp", description: "Expert saree styling and pre-pleating for a flawless bridal look." }
    ]
  },
  "accessories": {
    id: "accessories",
    title: "Accessories",
    heroImage: "/images/collections/accessories_main.webp",
    description: "Complete your ensemble with our curated range of accessories, from artisanal dupattas to premium fabrics that define your style.",
    items: [
      { name: "Dupattas", image: "/images/collections/Accessories/Dupattas.webp", description: "Richly embroidered dupattas that transform any look." },
      { name: "Tassels & Latkans", image: "/images/collections/Accessories/Tassels.webp", description: "Custom handcrafted details to add a touch of whimsy." },
      { name: "Premium fabrics", image: "/images/collections/Accessories/Premium fabrics.webp", description: "Ethically sourced silks and handlooms for your bespoke designs." }
    ]
  },
  "kids-specials": {
    id: "kids-specials",
    title: "Kids Specials",
    heroImage: "/images/collections/kids_main.webp",
    description: "Because every little one deserves to feel like royalty. Our kids' collection combines comfort with couture for life's most joyful celebrations.",
    items: [
      { name: "Birthday Outfits", image: "/images/collections/Kids Specials/Birthday outfit.webp", description: "Whimsical and vibrant dresses for the most special milestones." },
      { name: "Festive Collections", image: "/images/collections/Kids Specials/Festive collection.webp", description: "Traditional pattu pavada and lehengas for little icons." },
      { name: "Princess style Dresses", image: "/images/collections/Kids Specials/princess.webp", description: "Fairytale-inspired gowns crafted with love and soft fabrics." }
    ]
  }
};
