import { MessageSquare, ClipboardCheck, CalendarRange, Truck, BadgePercent } from "lucide-react";

export default function Process() {
  const steps = [
    {
      stepNumber: 1,
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Request Quote",
      description: "Submit our simple online form, send a WhatsApp with photos of your scrap heaps, or call our Rustenburg office.",
    },
    {
      stepNumber: 2,
      icon: <ClipboardCheck className="w-5 h-5" />,
      title: "Site Assessment",
      description: "For commercial volumes, our team conducts a quick evaluation of metal grades and recommends the ideal bin size.",
    },
    {
      stepNumber: 3,
      icon: <CalendarRange className="w-5 h-5" />,
      title: "Scheduling",
      description: "We work around your hours to schedule a seamless pick-up or place a heavy-duty scrap swap skip on-site.",
    },
    {
      stepNumber: 4,
      icon: <Truck className="w-5 h-5" />,
      title: "Scrap Pickup",
      description: "Our flatbeds or hooklifts collect the scrap. High-integrity load securing is maintained according to industrial safety norms.",
    },
    {
      stepNumber: 5,
      icon: <BadgePercent className="w-5 h-5" />,
      title: "Recycle & Payment",
      description: "We weigh the metals on our certified equipment, generate complete grade reports, and settle with immediate secure payout.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-slate-50 border-y border-slate-200/60 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono tracking-widest text-green-800 font-bold uppercase py-1 px-3 bg-green-50 rounded border border-green-150">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4.5xl font-black tracking-tight text-slate-900 font-heading">
            Our Streamlined Quoting & Collection Process
          </h2>
          <p className="text-slate-500 font-medium text-base">
            From the initial photo evaluation to final industrial recycling and payment, we make sure your scrap metal trading takes minimal effort.
          </p>
        </div>

        {/* Timeline Desktop / Stack Mobile */}
        <div className="relative mt-8">
          {/* Horizontal connecting line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-[43px] left-8 right-8 h-0.5 bg-slate-250"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 relative z-10">
            {steps.map((step) => (
              <div key={step.stepNumber} className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 group">
                
                {/* Step Circle & Icon */}
                <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-slate-210 text-green-700 shadow-md group-hover:scale-110 group-hover:bg-green-700 group-hover:text-white group-hover:border-green-700 transition-all duration-300">
                  {step.icon}
                  
                  {/* Step Sequence Badge */}
                  <span className="absolute -top-2.5 -right-2.5 flex items-center justify-center w-6 h-6 rounded-full bg-green-700 text-white font-mono text-[10px] font-bold border-2 border-white shadow-sm">
                    0{step.stepNumber}
                  </span>
                </div>

                {/* Step Metadata & Texts */}
                <div className="space-y-2 max-w-sm sm:max-w-none">
                  <h3 className="text-base font-black text-slate-950 group-hover:text-green-700 transition-colors font-heading leading-tight pt-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Process trust guarantee banner */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-3 py-4 px-6 bg-white rounded-xl border border-slate-200 shadow-sm max-w-3xl mx-auto font-mono text-xs text-slate-500">
          <span className="inline-block px-2.5 py-1 bg-green-50 text-green-850 font-bold rounded border border-green-150">Fast Settlement</span>
          <span className="font-semibold text-slate-700">We resolve weighing, grading and payouts in <strong className="text-slate-900">less than 24 hours</strong> from actual scrap pickup.</span>
        </div>

      </div>
    </section>
  );
}
