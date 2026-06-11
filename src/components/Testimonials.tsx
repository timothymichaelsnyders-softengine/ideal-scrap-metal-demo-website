import { Star, ShieldCheck, Quote } from "lucide-react";
import { TestimonialItem } from "../types";

export default function Testimonials() {
  const reviews: TestimonialItem[] = [
    {
      id: "t1",
      clientName: "Andries van der Merwe",
      companyName: "Vanderveen Engineering",
      role: "Factory Operations Manager",
      feedback: "Ideal Scrap Metal operates with absolute integrity. We've had their containers on our factory floor for over four years. Their scrap skip swaps are consistently on time, and the pricing reports we receive match our calculations exactly. Extremely professional team.",
      rating: 5,
    },
    {
      id: "t2",
      clientName: "Sipho Khumalo",
      companyName: "Khumalo Demolitions",
      role: "Lead Site Superintendent",
      feedback: "During our high-capacity steel plant strip-down, Ideal Scrap dispatched heavy flatbed machinery and on-site shearing tools. They managed over 45 tons of heavy structural steel in under five days. The certified weighbridge tickets were sent immediately, and settlement was prompt.",
      rating: 5,
    },
    {
      id: "t3",
      clientName: "David Jacobs",
      companyName: "Rustenburg Auto Repairs",
      role: "Owner & General Manager",
      feedback: "For a local workshop, finding a scrap dealer with clear prices is hard. Walking into Ideal's yard in Kroondal is a breath of fresh air. They sort the copper, brass, and aluminum right in front of you, explain the grading weights, and make instant cash settlements.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-green-800 font-bold uppercase py-1 px-3 bg-green-50 rounded border border-green-150">
            Client Reviews
          </span>
          <h2 className="text-3xl sm:text-4.5xl font-black tracking-tight text-slate-900 font-heading">
            What Our Clients Say About Our Scrap Services
          </h2>
          <p className="text-slate-500 font-medium text-base">
            Read real-world feedback from South African plant supervisors, demolition engineers, construction foremen, and local sellers who trade with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between bg-slate-50 border border-slate-200/90 p-8 rounded-2xl relative shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-green-100">
                <Quote className="w-10 h-10 fill-green-50/50" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                     <Star key={i} className="w-4 h-4 text-green-600 fill-green-600" />
                  ))}
                </div>

                {/* Feedback text */}
                <p className="text-xs text-slate-650 leading-relaxed font-semibold italic">
                  "{item.feedback}"
                </p>
              </div>

              {/* User Bio */}
              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-3">
                <div className="bg-green-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-sm tracking-tighter shadow-sm font-heading">
                  {item.clientName.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900">{item.clientName}</h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-bold">
                    {item.role} • <span className="text-green-700">{item.companyName}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust badge indicator footer */}
        <div className="mt-16 text-center">
          <p className="text-xs text-slate-400 font-mono flex items-center justify-center gap-1.5 uppercase font-bold">
            <ShieldCheck className="w-4 h-4 text-green-700" />
            Vetted and Verified by the South African Metals Recyclers Association (MRA)
          </p>
        </div>

      </div>
    </section>
  );
}
