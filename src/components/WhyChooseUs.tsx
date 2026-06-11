import { Zap, Coins, MapPin, Building2, Leaf, Truck, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Collection",
      description: "Quick dispatch of collection vehicles. We place and swap out scrap skips within 24 to 48 hours to prevent piling at your manufacturing or construction site.",
    },
    {
      icon: <Coins className="w-6 h-6" />,
      title: "Fair & Transparent Pricing",
      description: "No hidden charges. We quote competitive rates linked directly to LME (London Metal Exchange) indices and provide instant electronic settlements.",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Trusted Local Service",
      description: "Deeply rooted in the South African scrap economy, we provide personalized support with an understanding of provincial B2B requirements.",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Industrial Capability",
      description: "Equipped with heavy-duty weighbridge infrastructure, cranes, shearing gear, and flatbed fleets able to process tons of metal scrap daily.",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Eco-Responsible Recycling",
      description: "100% compliant metal processing. We ensure strict diversion from landfill sites, safe chemical oil handling, and structured resource recovery.",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Reliable Specialized Logistics",
      description: "Our drivers are fully licensed and trained for safe, fast scrap collection. Customized hooklift containers designed for heavy ferrous scrap.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-slate-50 border-t border-slate-200/60 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-green-850 font-bold uppercase py-1 px-3 bg-green-50 rounded border border-green-150">
            Our Advantage
          </span>
          <h2 className="text-3xl sm:text-4.5xl font-black tracking-tight text-slate-900 font-heading">
            Why South African Industries Trust Us
          </h2>
          <p className="text-slate-500 font-medium text-base">
            Over the years, we've optimized our operations to eliminate friction, ensuring your scrap disposal is handled efficiently, legally, and profitably.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              key={index}
              className="flex gap-4 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/90 hover:border-green-700/40 hover:bg-white hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-green-50 text-green-750 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
                {point.icon}
              </div>

              {/* Text */}
              <div className="space-y-2">
                <h3 className="text-base font-black text-slate-900 group-hover:text-green-700 transition-colors font-heading leading-tight">
                  {point.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* bottom statistics banner */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden border border-slate-800">
          <div className="absolute right-0 top-0 opacity-10">
            <svg width="400" height="400" fill="none" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" />
              <path d="M50 10v80M10 50h80" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-green-400 font-mono text-xs font-bold uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                Guaranteed Weights & Prompt Settlement
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight font-heading leading-tight">
                Ready to trade your commercial scrap metal?
              </h3>
              <p className="text-slate-300 font-medium text-sm max-w-2xl">
                Get an instant estimate based on live copper, steel or aluminum prices. Benefit from our integrated loading and site clear-out equipment.
              </p>
            </div>
            <div className="flex-shrink-0 w-full sm:w-auto">
              <a
                href="#contact"
                className="block text-center w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-lg shadow-md transition-all duration-200 text-sm whitespace-nowrap tracking-wide uppercase"
              >
                Get Custom Quote
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
