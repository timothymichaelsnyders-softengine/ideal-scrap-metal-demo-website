import { Shield, Sparkles, BookOpen, Leaf, HeartHandshake, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white border-y border-slate-150 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Accents */}
          <div className="lg:col-span-5 relative">
            <div className="relative mix-blend-multiply rounded-2xl overflow-hidden aspect-square shadow-xl bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop"
                alt="Environmental Scrap Sorting Operations"
                className="w-full h-full object-cover filter brightness-90 contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-green-950/20 to-transparent"></div>
              
              {/* Overlay Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-xl border border-slate-250 shadow-lg font-mono">
                <div className="text-3xl font-extrabold text-green-700">100% SECURE</div>
                <div className="text-slate-500 text-xs mt-1 leading-snug">Fully compliant with the South African Second-Hand Goods Act. Registered scrap metal dealer.</div>
              </div>
            </div>
            
            {/* Background Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border-t-4 border-l-4 border-green-600/30 rounded-tl-2xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-b-4 border-r-4 border-green-600/30 rounded-br-2xl -z-10"></div>
          </div>

          {/* Right Column: Information & Trust */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono tracking-widest text-green-800 font-bold uppercase py-1 px-3 bg-green-50 rounded border border-green-150">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4.5xl font-black tracking-tight text-slate-900 leading-tight font-heading">
              A Legacy of Reliable Metal Recycling in South Africa
            </h2>
            
            <p className="text-slate-600 text-base font-medium leading-relaxed">
              For over two decades, **Ideal Scrap Metal** has stood as a pillar of trust, fair value, and seamless logistics in the South African scrap trading landscape. Operating from our central depot in Kroondal, Rustenburg, we serve industrial, municipal, construction, and private clients nationwide.
            </p>
            <p className="text-slate-600 text-sm font-medium leading-relaxed">
              Our business is founded on transparency. Every load of steel, copper, or aluminum that passes over our scales is verified with certified weighing equipment. We adhere strictly to national environmental protocols and all legislative requirements, delivering compliant waste disposal reports for our corporate clients’ ESG audits.
            </p>

            {/* Values bullet points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-black text-slate-900">MRA Association Member</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Committed to ethical trading standards and environmental protection protocols.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-black text-slate-900">SAPS Registered Dealer</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Strict compliance under Second-Hand Goods laws prevents illicit transactions.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-black text-slate-900">Sustainable Practices</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Advanced sorting procedures divert maximum waste tonnage from local landfill facilities.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-black text-slate-900">Country-wide Logistics</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Fully functional flatbeds, skip trucks, and hooklifts operational daily.</p>
                </div>
              </div>
            </div>

            {/* Simple Trust Note */}
            <div className="bg-green-50/50 border-l-4 border-green-700 p-4 rounded-r-xl">
              <p className="text-xs text-green-950 font-mono italic">
                "We do not just trade scrap metal; we forge reliable long-term disposal partnerships with South African industries, boosting operational efficiency."
              </p>
              <div className="text-[10px] text-green-800 font-bold uppercase tracking-wider mt-2">- Operations Management, Ideal Scrap Metal</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
