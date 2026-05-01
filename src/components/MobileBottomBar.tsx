import React from "react";
import { MessageCircle } from "lucide-react";

const MobileBottomBar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[9998] p-4 bg-black/50 backdrop-blur-xl border-t border-glass-border">
      <a 
        href="https://wa.me/919955002209?text=Hi,%20I%20want%20to%20know%20more%20about%20ONDEZYN%20Fashion%20Studio"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-14 bg-[#25D366] rounded-xl flex items-center justify-center gap-3 text-white font-bold shadow-lg active:scale-95 transition-transform"
      >
        <MessageCircle size={24} className="fill-current" />
        Chat on WhatsApp
      </a>
    </div>
  );
};

export default MobileBottomBar;
