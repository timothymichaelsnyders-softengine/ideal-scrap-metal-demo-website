import { useState, useEffect } from "react";
import { Phone, MessageSquare, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onQuoteClick: () => void;
}

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Process", href: "#process" },
    { name: "Sectors", href: "#sectors" },
    { name: "Impact", href: "#sustainability" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-gray-150"
            : "bg-white/40 backdrop-blur-xs py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center text-white font-black italic shadow-md transition-all group-hover:bg-green-800">
                ISM
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tighter uppercase text-slate-900 leading-none">
                  Ideal <span className="text-green-700">Scrap Metal</span>
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#15803d] font-bold uppercase mt-0.5">
                  Industrial B2B Recycler
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-green-700 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+27145362781"
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-bold text-slate-900 hover:text-green-700 transition-colors"
                title="Call our Rustenburg head office"
              >
                <Phone className="w-3.5 h-3.5 text-green-700" />
                +27 (0) 14 536 2781
              </a>
              <a
                href="https://wa.me/27828932235?text=Hello%20Ideal%20Scrap%20Metal,%20I'd%20like%20to%20request%20a%20quote."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center p-2 rounded-full text-green-700 bg-green-50 hover:bg-green-100 transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 fill-green-100" />
              </a>
              <button
                onClick={onQuoteClick}
                className="bg-green-700 text-white px-5 py-2.5 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-green-800 transition-all cursor-pointer shadow-sm"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Actions: Menu Toggle */}
            <div className="flex items-center gap-3 md:hidden flex-wrap">
              <a
                href="tel:+27145362781"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-100 text-slate-800 hover:bg-green-50 hover:text-green-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-green-50 text-green-800 hover:bg-green-100 transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-white shadow-xl border-b border-gray-100 md:hidden overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              <div className="grid grid-cols-2 gap-2 pb-4 border-b border-gray-100">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="space-y-3 pt-2">
                <a
                  href="tel:+27145362781"
                  className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-lg bg-gray-100 text-sm font-bold text-gray-800 hover:bg-gray-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-green-700" />
                  Call: +27 (0) 14 536 2781
                </a>
                <a
                  href="https://wa.me/27828932235?text=Hello%20Ideal%20Scrap%20Metal,%20I'd%20like%20to%20request%20a%20quote."
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-lg bg-green-600 text-white text-sm font-bold hover:bg-green-700 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-green-600" />
                  WhatsApp Consultation
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onQuoteClick();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-lg bg-green-700 text-white text-sm font-bold shadow-md hover:bg-green-800 transition-colors cursor-pointer"
                >
                  <span>Request Scrap Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-gray-400 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-green-700" />
                MRA MEMBER • REGISTERED METAL DECKER
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
