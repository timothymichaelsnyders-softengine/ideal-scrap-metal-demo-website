import { ArrowRight, Recycle, Truck, Factory, Shield, Trash2, Coins, Settings, Layers } from "lucide-react";
import { ServiceItem } from "../types";

interface ServicesProps {
  onQuoteClick: (serviceName?: string) => void;
}

export default function Services({ onQuoteClick }: ServicesProps) {
  const services: ServiceItem[] = [
    {
      id: "scrap-metal-collection",
      title: "Scrap Metal Collection",
      description: "Convenient pick-up service for all metal scrap volumes. We assist businesses with routine skips and roll-off scrap bins delivered straight to your yard.",
      benefit: "Saves time and logistics cost",
      imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
      metals: ["Skips Provided", "Scheduled Swaps", "On-site loading help"],
    },
    {
      id: "metal-recycling",
      title: "Metal Recycling",
      description: "Comprehensive processing of scrap metals turning industrial waste into premium secondary raw material with 100% trace environmental compliance.",
      benefit: "Reduces carbon footprint",
      imageUrl: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?q=80&w=800&auto=format&fit=crop",
      metals: ["Eco-Compliant", "Baled & Cleaned", "Smelter ready"],
    },
    {
      id: "industrial-scrap-removal",
      title: "Industrial Scrap Removal",
      description: "Large-scale extraction of steel framework, obsolete plant machinery, outdated boiler systems, and decommissioned engineering structures.",
      benefit: "Clears valuable workspace",
      imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
      metals: ["Plant Dismantling", "Heavy Machinery", "Structural Steel"],
    },
    {
      id: "commercial-scrap-handling",
      title: "Commercial Scrap Handling",
      description: "Specialized waste management contracts designed specifically for manufacturing plants, automotive fabricators, and warehouse hubs.",
      benefit: "Recurring revenue stream",
      imageUrl: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?q=80&w=800&auto=format&fit=crop",
      metals: ["Volume Pricing", "Regular Swaps", "Audit reports"],
    },
    {
      id: "non-ferrous-metal-recycling",
      title: "Non-Ferrous Metals",
      description: "We purchase high-value non-magnetic metals at top market cash rates. Accurate grading and weight analysis ensures you get the absolute highest payout.",
      benefit: "Highest cash yield per kg",
      imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
      metals: ["Copper & Brass", "Aluminum & Lead", "Stainless Steel"],
    },
    {
      id: "ferrous-metal-recycling",
      title: "Ferrous Metal Recycling",
      description: "Bulk trading and recycling of steel, cast iron, structural beams, and heavy iron castings. Ideal for demolition projects and construction sites.",
      benefit: "Handles high weight values",
      imageUrl: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800&auto=format&fit=crop",
      metals: ["Heavy Melting Steel", "Sheet Iron", "Rebar & Castings"],
    },
    {
      id: "site-cleanups",
      title: "Site Cleanups",
      description: "Complete clear-out of scrap heaps from old industrial parks, closed farms, mechanical workshops, transport depots, or commercial sites.",
      benefit: "Immediate aesthetic improvement",
      imageUrl: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=600&auto=format&fit=crop",
      metals: ["Site Clearing", "Scrap Sorting", "Waste Offtake Contract"],
    },
    {
      id: "bulk-metal-processing",
      title: "Bulk Metal Processing",
      description: "Industrial shearing, heavy baling, and shredding services that transform raw metal leftovers into standardized, export-ready bulk cargo.",
      benefit: "Optimizes dispatch weights",
      imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop",
      metals: ["Hydraulic Shearing", "Heavy Baling", "Container Stuffing"],
    },
  ];

  const getIcon = (id: string) => {
    switch (id) {
      case "scrap-metal-collection": return <Truck className="w-5 h-5 text-green-700" />;
      case "metal-recycling": return <Recycle className="w-5 h-5 text-green-700" />;
      case "industrial-scrap-removal": return <Settings className="w-5 h-5 text-green-700" />;
      case "commercial-scrap-handling": return <Factory className="w-5 h-5 text-green-700" />;
      case "non-ferrous-metal-recycling": return <Coins className="w-5 h-5 text-green-700" />;
      case "ferrous-metal-recycling": return <Layers className="w-5 h-5 text-green-700" />;
      case "site-cleanups": return <Trash2 className="w-5 h-5 text-green-700" />;
      case "bulk-metal-processing": return <Shield className="w-5 h-5 text-green-700" />;
      default: return <Recycle className="w-5 h-5 text-green-700" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-green-800 font-bold uppercase py-1 px-3 bg-green-50 rounded border border-green-150">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4.5xl font-black tracking-tight text-slate-900 font-heading">
            Industrial & Commercial Scrap Services
          </h2>
          <p className="text-slate-500 font-medium text-base">
            Ideal Scrap Metal is fully equipped and registered to handle all ranges of metals. We offer reliable logistics, certified weight certificates, and quick settlements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col h-full bg-white rounded-2xl border border-slate-200/90 hover:border-green-700/40 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden bg-slate-50">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm p-2 rounded-xl shadow-md text-green-700">
                  {getIcon(service.id)}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-lg font-black text-slate-950 group-hover:text-green-700 transition-colors font-heading leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {service.metals.map((metal, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-slate-50 text-slate-650 font-mono px-2 py-0.5 rounded border border-slate-150"
                      >
                        {metal}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
                  <div className="text-[11px] text-green-800 font-mono font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
                    {service.benefit}
                  </div>
                  <button
                    onClick={() => onQuoteClick(service.title)}
                    className="w-full bg-slate-900 hover:bg-green-700 text-white hover:text-white text-xs font-bold uppercase tracking-wider py-3 px-4 rounded transition-all cursor-pointer shadow-sm"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 inline" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
