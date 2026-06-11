import { useState, FormEvent } from "react";
import { ArrowRight, Phone, MessageSquare, ShieldCheck, Award, Layers, Trash2, Truck } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onQuoteClick: (serviceName?: string) => void;
}

export default function Hero({ onQuoteClick }: HeroProps) {
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [scrapType, setScrapType] = useState("Industrial Ferrous Metal");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !contact) {
      return;
    }

    const customMsg = `Hello Ideal Scrap Metal! I would like an instant quote:
-----------------------------
👤 *Name*: ${fullName}
📞 *Contact*: ${contact}
♻️ *Scrap Type*: ${scrapType}
💬 *Message/Volume*: ${message || "Not specified"}`;

    const encodedMessage = encodeURIComponent(customMsg);
    window.open(`https://wa.me/27828932235?text=${encodedMessage}`, "_blank", "noreferrer");
    setIsSuccess(true);
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-stretch pt-24 overflow-hidden bg-white border-b border-gray-150">
      {/* Container wrapper spanning full width but responsive inside */}
      <div className="w-full mx-auto relative z-10 flex flex-col lg:flex-row">
        
        {/* LEFT COLUMN: Clean High-Contrast Workspace (55%) */}
        <div className="w-full lg:w-[55%] p-6 sm:p-12 lg:p-20 flex flex-col justify-center bg-white space-y-8">
          
          {/* Trust Badge Pin */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex self-start items-center gap-2 px-3 py-1 bg-green-50 text-green-800 text-xs font-bold uppercase tracking-wider rounded border border-green-150"
          >
            <span className="w-2.5 h-2.5 bg-green-600 rounded-full animate-pulse shrink-0"></span>
            <span>Serving South Africa Since 1998</span>
          </motion.div>

          {/* Core Brand Header Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.98] tracking-tighter text-slate-900"
            >
              Reliable Scrap <br />
              <span className="text-green-700 underline underline-offset-8 decoration-4 decoration-green-700">
                Metal Trading
              </span> <br />
              & Recycling.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-500 max-w-xl leading-relaxed font-semibold pt-2"
            >
              Fast, trusted, and professional scrap metal collection and eco-friendly recycling solutions for businesses and individuals across South Africa. High payout rates and reliable site clear-outs.
            </motion.p>
          </div>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <button
              onClick={() => onQuoteClick("General Landing Inquiry")}
              className="bg-slate-900 text-white px-8 py-4 rounded font-bold text-base uppercase tracking-tight shadow-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request Industrial Pickup</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <a
              href="https://wa.me/27828932235?text=Hello%20Ideal%20Scrap%20Metal,%20I'd%20like%20to%20request%20a%20rate%20quote."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded font-bold text-base uppercase tracking-tight shadow-xl transition-colors"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>WhatsApp Direct</span>
            </a>
          </motion.div>

          {/* Premium Bottom Metrics Footer Box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-x-12 gap-y-6 mt-8 opacity-90 font-bold uppercase text-[10px] tracking-[0.2em] border-t border-gray-100 pt-8"
          >
            <div className="flex flex-col">
              <span className="text-slate-400 font-semibold mb-0.5">Experience</span>
              <span className="text-slate-900 text-sm font-black">25 Years +</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-400 font-semibold mb-0.5">Location</span>
              <span className="text-slate-900 text-sm font-black">Rustenburg / SA Wide</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-400 font-semibold mb-0.5">Compliance</span>
              <span className="text-slate-900 text-sm font-black">MRA & SAPS Vetted</span>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: SaaS Utility Panel Background (45%) */}
        <div className="w-full lg:w-[45%] bg-slate-50 p-6 sm:p-12 lg:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-250">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full bg-white rounded-2xl shadow-2xl border border-slate-220 flex flex-col overflow-hidden"
          >
            {/* Form Top Banner */}
            <div className="p-8 bg-green-700 text-white relative overflow-hidden">
              <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-10">
                <ShieldCheck className="w-40 h-40" />
              </div>
              <div className="relative z-10">
                <span className="text-[10px] uppercase font-bold tracking-widest bg-green-800 text-green-100 px-2.5 py-0.5 rounded">
                  Valuation Engine
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight mt-1.5 font-heading">
                  Instant Quote Request
                </h3>
                <p className="text-green-100 text-xs mt-1 font-light opacity-80">
                  Calculated based on current live metals market indexes.
                </p>
              </div>
            </div>

            {isSuccess ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 uppercase tracking-tight">Quote Workspace Dispatched</h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  Your details have been successfully configured. Check your browser tab as we've prepared your WhatsApp chat, or our estimator will call you back shortly.
                </p>
                <button
                  onClick={() => {
                    setFullName("");
                    setContact("");
                    setMessage("");
                    setIsSuccess(false);
                  }}
                  className="text-xs text-green-700 font-bold hover:underline"
                >
                  Submit Another Valuation Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-slate-50 hover:bg-slate-100/50 border border-slate-200/60 rounded px-3 py-2.5 text-xs focus:ring-1 focus:ring-green-600 focus:bg-white outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="w-full bg-slate-50 hover:bg-slate-100/50 border border-slate-200/60 rounded px-3 py-2.5 text-xs focus:ring-1 focus:ring-green-600 focus:bg-white outline-none transition-all"
                      placeholder="+27 82 893 2235"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Scrap metal type
                  </label>
                  <select
                    value={scrapType}
                    onChange={(e) => setScrapType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200/60 rounded px-3 py-3 text-xs focus:ring-1 focus:ring-green-600 focus:bg-white outline-none transition-all cursor-pointer"
                  >
                    <option value="Industrial Ferrous Metal">Industrial Ferrous Metal</option>
                    <option value="Aluminum / Copper / Brass">Aluminum / Copper / Brass</option>
                    <option value="Bulk Construction/Contractor Scrap">Bulk Construction Scrap</option>
                    <option value="Other / Mixed Private Scrap">Other / Mixed Private Scrap</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Message / Estimated Volume (Tons)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full h-20 bg-slate-50 hover:bg-slate-100/50 border border-slate-200/60 rounded px-3 py-2.5 text-xs focus:ring-1 focus:ring-green-600 focus:bg-white outline-none resize-none transition-all"
                    placeholder="E.g. 5 tons of structural steel beam off-cuts..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-700 text-white font-black uppercase py-4 rounded-lg shadow-lg hover:bg-green-800 transition-colors text-xs tracking-widest cursor-pointer"
                >
                  Submit Request
                </button>
              </form>
            )}

            {/* Core Industrial Services bottom bar */}
            <div className="px-8 py-5 border-t border-slate-100 bg-slate-50">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                Core Industrial Solutions
              </h4>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-2.5 bg-white border border-slate-200/70 rounded text-center shadow-xs">
                  <div className="text-xs font-black text-green-700 mb-0.5">01</div>
                  <div className="text-[9px] font-bold text-slate-700 leading-tight">
                    BULK<br />PICKUP
                  </div>
                </div>
                <div className="p-2.5 bg-white border border-slate-200/70 rounded text-center shadow-xs">
                  <div className="text-xs font-black text-green-700 mb-0.5">02</div>
                  <div className="text-[9px] font-bold text-slate-700 leading-tight">
                    SITE<br />CLEANS
                  </div>
                </div>
                <div className="p-2.5 bg-white border border-slate-200/70 rounded text-center shadow-xs">
                  <div className="text-xs font-black text-green-700 mb-0.5">03</div>
                  <div className="text-[9px] font-bold text-slate-700 leading-tight">
                    FAIR<br />PRICING
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
