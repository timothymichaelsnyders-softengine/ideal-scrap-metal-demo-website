import { useState } from "react";
import { Building2, Hammer, HardHat, Car, Trash2, UserCheck, ShieldAlert, BadgeCheck } from "lucide-react";
import { UseCaseItem } from "../types";

export default function UseCases() {
  const [activeTab, setActiveTab] = useState<string>("manufacturing");

  const useCases: UseCaseItem[] = [
    {
      id: "manufacturing",
      industry: "Manufacturing Plants",
      painPoint: "Daily accumulating production off-cuts, punched sheet scrap, and steel lathe shavings disrupt factory workflow and require continuous loading machinery.",
      solution: "Tailored daily container swaps with hydraulic skip handlers and bulk recycling contracts linked directly to volume pricing indices.",
      benefit: "Optimizes floor space and maximizes trade-in revenue automatically.",
      iconName: "manufacturing",
    },
    {
      id: "construction",
      industry: "Construction Sites",
      painPoint: "Vast heaps of rebar cutting waste, unused copper pipe scrap, steel girders, and bulk debris pose safety hazards on active work layers.",
      solution: "Rapid-response placement of deep roll-off scrap bins, complete site clear-out support, and safety-compliant loading cranes.",
      benefit: "Keeps site operations clean, compliant, and hazard-free.",
      iconName: "construction",
    },
    {
      id: "warehouses",
      industry: "Warehouses & Logistical Hubs",
      painPoint: "Discarded heavy metal racking, old logistics cages, steel strapping, and outdated utility equipment cluttering storage bays.",
      solution: "Comprehensive warehouse dismantling, structural cutting, and haulage of heavy ferrous scrap components.",
      benefit: "Frees up high-density warehouse storage area for active inventory.",
      iconName: "warehouses",
    },
    {
      id: "automotive",
      industry: "Automotive Sector",
      painPoint: "High volumes of punched steel, damaged aluminum car body shells, catalytic converter cores, and alloy scrap needing secure destruction audits.",
      solution: "Certified compliance reporting, secure product mutilation, and volume recycling offsets for automotive press operators.",
      benefit: "Provides audit-ready disposal reports for brand compliance and recycling.",
      iconName: "automotive",
    },
    {
      id: "demolition",
      industry: "Demolition Contractors",
      painPoint: "Tons of heavy structural steel beams, iron piping, structural sheeting, and industrial girders needing urgent on-site processing.",
      solution: "Advanced on-site mobile shearing solutions, loading fleets, and customized flatbed freight coordination.",
      benefit: "Accelerates demolition schedules and delivers high trade values.",
      iconName: "demolition",
    },
    {
      id: "private",
      industry: "Private Sellers & Traders",
      painPoint: "Finding a registered cash scrap buyer with certified weighbridge scales, transparent grading, and immediate payout.",
      solution: "Walk-in sorting lanes in Rustenburg welcoming all sizes, instant cash settlements, and helpful staff assistance.",
      benefit: "Guarantees full rate-per-kg cash value for local metals.",
      iconName: "private",
    },
  ];

  const getIcon = (id: string, active: boolean) => {
    const cls = active ? "text-green-300" : "text-green-700";
    switch (id) {
      case "manufacturing": return <Building2 className={`w-5 h-5 ${cls}`} />;
      case "construction": return <HardHat className={`w-5 h-5 ${cls}`} />;
      case "warehouses": return <Hammer className={`w-5 h-5 ${cls}`} />;
      case "automotive": return <Car className={`w-5 h-5 ${cls}`} />;
      case "demolition": return <Trash2 className={`w-5 h-5 ${cls}`} />;
      case "private": return <UserCheck className={`w-5 h-5 ${cls}`} />;
      default: return <UserCheck className={`w-5 h-5 ${cls}`} />;
    }
  };

  const selectedCase = useCases.find((uc) => uc.id === activeTab) || useCases[0];

  return (
    <section id="sectors" className="py-24 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-green-800 font-bold uppercase py-1 px-3 bg-green-50 rounded border border-green-150">
            Who We Serve
          </span>
          <h2 className="text-3xl sm:text-4.5xl font-black tracking-tight text-slate-900 font-heading">
            Tailored Solutions For Every Metal-Generating Sector
          </h2>
          <p className="text-slate-500 font-medium text-base">
            No matter the size, format, or location of your metal scrap, we have customized collections, skips, and scrap contracts built around your specific workflow.
          </p>
        </div>

        {/* Tab Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
          
          {/* Tab Navigation (Left Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {useCases.map((uc) => {
              const active = uc.id === activeTab;
              return (
                <button
                  key={uc.id}
                  onClick={() => setActiveTab(uc.id)}
                  className={`flex items-center gap-4 text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-slate-900 border-slate-950 text-white shadow-md"
                      : "bg-slate-50 hover:bg-slate-100 border-slate-200/90 text-slate-700"
                  }`}
                >
                  <div className={`p-2 rounded-lg ${active ? "bg-slate-800" : "bg-green-50"}`}>
                    {getIcon(uc.id, active)}
                  </div>
                  <div>
                    <h3 className="text-sm font-black leading-none">{uc.industry}</h3>
                    <span className={`text-[10px] md:text-xs leading-tight font-mono ${active ? "text-green-300" : "text-slate-400"}`}>
                      View specialized solution
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Tab Details (Right Columns) */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl relative overflow-hidden shadow-2xl">
            <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 text-green-900/5 rotate-12 -z-0">
              <svg width="300" height="300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex gap-3 items-center border-b border-slate-200 pb-4">
                <div className="bg-green-700 text-white p-2.5 rounded-xl">
                  {getIcon(selectedCase.id, true)}
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 font-heading">
                    {selectedCase.industry}
                  </h3>
                  <span className="text-[10px] font-mono tracking-widest text-green-700 uppercase font-black">
                    South Africa Industry Focus
                  </span>
                </div>
              </div>

              {/* Pain Point block */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-black text-red-650 flex items-center gap-1.5 uppercase tracking-wide">
                  <ShieldAlert className="w-4 h-4 text-red-650" />
                  Primary Operational Pain Points
                </div>
                <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                  {selectedCase.painPoint}
                </p>
              </div>

              {/* Solution block */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono font-black text-green-700 flex items-center gap-1.5 uppercase tracking-wide">
                  <BadgeCheck className="w-4 h-4 text-green-600" />
                  Our Tailored Logistics & Recycling Solution
                </div>
                <p className="text-sm text-slate-700 font-bold leading-relaxed">
                  {selectedCase.solution}
                </p>
              </div>
            </div>

            {/* Bottom Benefit Callout */}
            <div className="mt-8 pt-6 border-t border-slate-150 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 relative z-10">
              <div>
                <span className="text-[9px] font-mono uppercase text-slate-400 font-black tracking-wider block mb-0.5">
                  Core Business Benefit
                </span>
                <span className="text-xs text-green-800 font-black leading-tight">
                  {selectedCase.benefit}
                </span>
              </div>
              <a
                href="#contact"
                className="bg-green-700 hover:bg-green-800 text-white font-bold text-xs py-3 px-6 rounded shadow-sm text-center transition-all uppercase tracking-wider"
              >
                Inquire For This Sector
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
