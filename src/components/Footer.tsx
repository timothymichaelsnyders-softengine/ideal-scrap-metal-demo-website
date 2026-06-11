import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900 font-sans">
          
          {/* Column 1: Brand details & Compliance */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center text-white font-black italic shadow-md">
                ISM
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter uppercase text-white leading-none">
                  Ideal <span className="text-green-500">Scrap Metal</span>
                </span>
                <span className="text-[9px] font-mono tracking-widest text-green-400 font-bold uppercase mt-0.5">
                  Industrial B2B Recycler
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              Ideal Scrap Metal is a registered B2B and private scrap metal dealer based in Rustenburg, South Africa. Since our inception, we have helped local factories, construction contractors, demolition hubs, and private sellers turn scrap into certified revenue.
            </p>

            <div className="pt-2">
              <span className="text-[9px] font-mono uppercase text-slate-500 font-bold block mb-1">Affiliations & Licenses</span>
              <div className="flex gap-2 items-center text-xs font-mono text-green-450 font-bold">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>MRA MEMBER No. 23/901</span>
              </div>
              <div className="text-[9px] text-slate-500 font-mono mt-1 font-bold">SAPS License: D19-012 (Second-Hand Goods Act)</div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black text-white font-heading uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono font-semibold">
              <li>
                <a href="#services" className="hover:text-green-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-green-400 transition-colors">Advantages</a>
              </li>
              <li>
                <a href="#process" className="hover:text-green-400 transition-colors">Step Process</a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-green-400 transition-colors">Sectors</a>
              </li>
              <li>
                <a href="#sustainability" className="hover:text-green-400 transition-colors">Sustainability</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-400 transition-colors">Get A Quote</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Summary */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-white font-heading uppercase tracking-widest">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400 font-semibold">
              <li>Scrap Metal Collection</li>
              <li>Ferrous & Non-Ferrous Recycling</li>
              <li>Industrial Factory Clearance</li>
              <li>Manufacturing Metal Contracts</li>
              <li>Site Cleanups & Clearance</li>
              <li>Heavy Demolition Metal Trade</li>
              <li>Bulk Metal Loading & Dismantling</li>
            </ul>
          </div>

          {/* Column 4: Real Contact Specifics */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-white font-heading uppercase tracking-widest">
              Contact Info
            </h4>
            <div className="space-y-3.5 text-xs font-medium">
              <div className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Plot 23, Kroondal,<br />
                  Rustenburg, North West,<br />
                  0300, South Africa
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-green-500" />
                <a href="tel:+27145362781" className="text-slate-300 hover:text-green-400 transition-colors">+27 (0) 14 536 2781</a>
              </div>
              <div className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-green-500" />
                <a href="mailto:info@idealscrapmetal.co.za" className="text-slate-300 hover:text-green-400 transition-colors">info@idealscrapmetal.co.za</a>
              </div>
              <div className="flex gap-2 items-start">
                <Clock className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span className="text-slate-300 font-mono text-[11px]">
                  Mo-Fr: 08:00 - 17:00<br />
                  Sa: 08:00 - 13:00
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal & Copy */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div className="space-y-1 text-center md:text-left">
            <div>
              &copy; {new Date().getFullYear()} Ideal Scrap Metal (Pty) Ltd. All Rights Reserved.
            </div>
            <div className="text-[10px] text-slate-650 font-bold">
              Registered in South Africa in accordance with the Companies Act. Standard LME rates apply.
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 bg-slate-900 border border-slate-800 hover:bg-green-700 hover:border-green-700 hover:text-white rounded transition-all cursor-pointer text-[10px] uppercase tracking-wider font-bold"
              title="Scroll to top"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
