import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  text: string;
  href?: string;
  isWhatsApp?: boolean;
  whatsAppMsg?: string;
  className?: string;
  showIcon?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  text, 
  href = "#", 
  isWhatsApp = false, 
  whatsAppMsg = "Hi, I want to know more about ONDEZYN", 
  className = "",
  showIcon = true
}) => {
  const finalHref = isWhatsApp 
    ? `https://wa.me/919955002209?text=${encodeURIComponent(whatsAppMsg)}`
    : href;

  const isExternal = isWhatsApp || finalHref.startsWith("http");

  const content = (
    <span className={`btn-glow inline-flex items-center gap-3 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-[0_10px_40px_rgba(255,111,0,0.25)] ${className}`}>
      {text}
      {showIcon && <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />}
    </span>
  );

  if (isExternal) {
    return (
      <a 
        href={finalHref} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={finalHref} className="group inline-block">
      {content}
    </Link>
  );
};

export default CTAButton;
