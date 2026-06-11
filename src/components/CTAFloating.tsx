import { Phone, MessageSquare, ArrowRight } from "lucide-react";

interface CTAFloatingProps {
  onQuoteClick: () => void;
}

export default function CTAFloating({ onQuoteClick }: CTAFloatingProps) {
  const whatsappUrl = "https://wa.me/27828932235?text=Hello%20Ideal%20Scrap%20Metal,%20I'd%20like%20to%20request%20a%20rate%20estimate.";

  return (
    <>
      {/* PERSISTENT FLOATING WHATSAPP BUTTON (DESKTOP ONLY) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group relative"
          title="Chat with our Scrap Estimator"
        >
          <MessageSquare className="w-6 h-6 fill-white text-green-600" />
          {/* Pulsing indicator badge */}
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          {/* Tooltip on hover */}
          <span className="absolute right-16 bg-slate-900 text-white font-sans text-xs font-bold py-1.5 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none uppercase tracking-wider font-mono">
            Chat with Estimator
          </span>
        </a>
      </div>

      {/* STICKY BOTTOM BAR (MOBILE ONLY) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-150 py-3.5 px-4 shadow-2xl">
        <div className="grid grid-cols-2 gap-3">
          {/* Click to Call */}
          <a
            href="tel:+27145362781"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-slate-200 text-slate-800 font-bold text-xs hover:bg-slate-50 transition-colors"
          >
            <Phone className="w-4 h-4 text-green-700" />
            <span>Call Now</span>
          </a>

          {/* Request quote or WhatsApp */}
          <button
            onClick={onQuoteClick}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-green-700 hover:bg-green-800 text-white font-bold text-xs shadow-md transition-colors cursor-pointer uppercase tracking-wider"
          >
            <span>Get Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
