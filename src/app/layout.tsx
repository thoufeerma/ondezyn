import type { Metadata } from "next";
import { Playfair_Display, Outfit, Pinyon_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const pinyon = Pinyon_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ONDEZYN | Luxury Fashion & Tailoring",
  description: "Premium designer blouses, gowns, bridal work, and handloom products based in Kerala.",
  icons: {
    icon: "/images/logo-light.png",
    apple: "/images/logo-light.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${outfit.variable} ${pinyon.variable} bg-bg-deep text-white font-body overflow-x-clip max-w-[100vw]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
