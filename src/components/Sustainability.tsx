import { Leaf, Recycle, Building2 } from "lucide-react";

export default function Sustainability() {
  const metrics = [
    {
      icon: <Recycle className="w-5 h-5 text-green-400" />,
      title: "Landfill Diversion",
      value: "95%+",
      description: "Over 95% of incoming metal-containing industrial off-cuts are cleanly recovered and successfully processed into premium melt-ready batches.",
    },
    {
      icon: <Leaf className="w-5 h-5 text-green-400" />,
      title: "Energy Conservation",
      value: "up to 90%",
      description: "Recycling secondary copper, metals, and aluminum uses 90% less energy on average compared to virgin ore processing mining pathways.",
    },
    {
      icon: <Building2 className="w-5 h-5 text-green-400" />,
      title: "Local Circulation",
      value: "100%",
      description: "Recovered metals are traded primarily to local South African steel foundries and copper smelters, supporting local logistics chains.",
    },
  ];

  return (
    <section id="sustainability" className="py-24 bg-slate-950 text-white relative overflow-hidden scroll-mt-12 border-t border-slate-900">
      {/* Decorative backdrop */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?q=80&w=1200&auto=format&fit=crop"
          alt="Sustainability metal bales"
          className="w-full h-full object-cover scale-105 filter blur-sm"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main narrative left side */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono tracking-widest text-green-400 font-bold uppercase py-1 px-3 bg-green-950/60 border border-green-700/40 rounded">
              Environmental Stewardship
            </span>
            <h2 className="text-3xl sm:text-4.5xl font-black tracking-tight text-white leading-tight font-heading">
              Preserving Natural Resources Through Modern Recycling
            </h2>
            <p className="text-slate-300 text-sm font-medium leading-relaxed">
              Industrial scrap metal is not waste; it is a critical resource. Every ton of steel, copper, or lead recycled by Ideal Scrap Metal directly offsets the need for high-impact mineral excavation. We provide our corporate B2B clients with complete documentation reflecting the exact weights of metals diverted from municipal dumping areas.
            </p>
            <p className="text-slate-300 text-sm font-medium leading-relaxed">
              Our facilities in Kroondal, Rustenburg, utilize rigorous separation lines. This ensures zero soil contamination from fluids or hydraulic machinery components. We operate strictly in accordance with local South African National Environmental Management policies.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 font-mono text-xs text-slate-400">
              <div className="border-l-2 border-green-500 pl-3">
                <span className="text-white text-base font-black block">SANS Certified</span>
                Standard compliance under quality guidelines.
              </div>
              <div className="border-l-2 border-green-500 pl-3">
                <span className="text-white text-base font-black block">ESG Audits Enabled</span>
                Certified grading files for green reporting.
              </div>
            </div>
          </div>

          {/* Quick Metrics Grid Right Side */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {metrics.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 backdrop-blur-xs border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-green-700/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-950 p-2 rounded-lg text-green-400 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      {item.title}
                    </h4>
                    <span className="text-2xl sm:text-3.5xl font-black text-white font-heading tracking-tight">
                      {item.value}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 font-medium leading-relaxed mt-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
