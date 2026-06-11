import { useState } from "react";
import { useForm } from "react-hook-form";
import { Phone, MessageSquare, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, ArrowRight, Map } from "lucide-react";
import { QuoteRequest } from "../types";

interface ContactFormProps {
  preFilledService?: string;
}

export default function ContactForm({ preFilledService = "" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);
  const [submissionType, setSubmissionType] = useState<"traditional" | "whatsapp">("traditional");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<QuoteRequest>({
    defaultValues: {
      metalType: preFilledService,
      location: "",
      estimatedVolume: "",
      name: "",
      contact: "",
      message: "",
    },
  });

  // Keep state synced if parent changes prefilled service
  useState(() => {
    if (preFilledService) {
      setValue("metalType", preFilledService);
    }
  });

  const onSubmitForm = async (data: QuoteRequest) => {
    setIsSubmitting(true);
    
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    if (submissionType === "whatsapp") {
      const customMsg = `Hello Ideal Scrap Metal! I'd like to request a quote:
-----------------------------
👤 *Name*: ${data.name}
📞 *Contact*: ${data.contact}
♻️ *Scrap Type*: ${data.metalType}
⚖️ *Est. Volume*: ${data.estimatedVolume || "Not sure"}
📍 *Location*: ${data.location || "Not specified"}
💬 *Message*: ${data.message || "None"}`;

      const encodedMessage = encodeURIComponent(customMsg);
      const whatsappUrl = `https://wa.me/27828932235?text=${encodedMessage}`;
      
      window.open(whatsappUrl, "_blank", "noreferrer");
    }

    setIsSubmitting(false);
    setSubmittedSuccessfully(true);
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Real Contact details, Trust Indicators, Maps representation */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            
            <div className="space-y-6">
              <span className="text-xs font-mono tracking-widest text-green-800 font-bold uppercase py-1 px-3 bg-green-50 rounded border border-green-150">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4.5xl font-black tracking-tight text-slate-900 leading-tight font-heading">
                Connect Directly With Our Estimating Team
              </h2>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">
                We accept bulk walk-ins and arrange transport skip placements. Call us directly, send photos of your recycling scrap yard layout on WhatsApp, or send an email.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              
              {/* Phone Head office */}
              <a
                href="tel:+27145362781"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200/90 hover:border-green-700/35 hover:bg-green-50/20 transition-all duration-200 group bg-white"
              >
                <div className="bg-green-50 text-green-700 p-3 rounded-lg group-hover:bg-green-700 group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block tracking-wider">
                    Call Head Office
                  </span>
                  <span className="text-sm font-black text-slate-900 group-hover:text-green-750 transition-colors">
                    +27 (0) 14 536 2781
                  </span>
                </div>
              </a>

              {/* WhatsApp direct */}
              <a
                href="https://wa.me/27828932235?text=Hello%20Ideal%20Scrap%20Metal,%20I'd%20like%20to%20request%20a%20quote."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200/90 hover:border-green-700/35 hover:bg-green-50/20 transition-all duration-200 group bg-white"
              >
                <div className="bg-green-50 text-green-700 p-3 rounded-lg group-hover:bg-green-700 group-hover:text-white transition-colors shrink-0">
                  <MessageSquare className="w-5 h-5 fill-green-50 group-hover:fill-green-800" />
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block tracking-wider">
                    WhatsApp Estimator
                  </span>
                  <span className="text-sm font-black text-green-800 flex items-center gap-1.5">
                    +27 (0) 82 893 2235
                    <span className="text-[9px] bg-green-100 text-green-800 border border-green-150 font-bold font-mono px-1.5 py-0.2 rounded-full uppercase ml-1 animate-pulse">Online</span>
                  </span>
                </div>
              </a>

              {/* Email direct */}
              <a
                href="mailto:info@idealscrapmetal.co.za"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200/90 hover:border-green-700/35 hover:bg-green-50/20 transition-all duration-200 group bg-white"
              >
                <div className="bg-green-50 text-green-700 p-3 rounded-lg group-hover:bg-green-700 group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block tracking-wider">
                    Email Inquiry
                  </span>
                  <span className="text-sm font-black text-slate-900 group-hover:text-green-750 transition-colors">
                    info@idealscrapmetal.co.za
                  </span>
                </div>
              </a>

              {/* Physical address */}
              <div
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200/90 bg-slate-50"
              >
                <div className="bg-green-50 text-green-700 p-3 rounded-lg shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block tracking-wider">
                    Rustenburg Depot
                  </span>
                  <span className="text-xs font-bold text-slate-800">
                    Plot 23, Kroondal, Rustenburg, North West, 0300
                  </span>
                </div>
              </div>

            </div>

            {/* Service hours & Service areas */}
            <div className="bg-slate-900 p-6 rounded-2xl text-white font-mono text-xs space-y-3.5 shadow-md border border-slate-800">
              <div className="flex items-center gap-2 border-b border-white/10 pb-2 text-green-400 font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                Operating Hours
              </div>
              <div className="grid grid-cols-2 gap-2 text-slate-300">
                <div>Monday - Friday:</div>
                <div className="text-white font-bold">08:00 - 17:00</div>
                <div>Saturdays:</div>
                <div className="text-white font-bold">08:00 - 13:00</div>
                <div>Sundays:</div>
                <div className="text-slate-400 font-semibold">Closed</div>
              </div>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-green-450 flex items-center gap-1.5 font-bold">
                  <Map className="w-3.5 h-3.5" />
                  Primary Service Regions:
                </span>
                <span className="font-bold text-white">North West & Gauteng</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Form Questionnaire */}
          <div className="lg:col-span-7 bg-white border border-slate-210 p-6 sm:p-10 rounded-2xl shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-5 mb-6">
                <div>
                  <h3 className="text-xl font-black text-slate-900 font-heading uppercase tracking-tight">
                    Request Commercial Scrap Quote
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    Fast response guaranteed within 24 operational hours.
                  </p>
                </div>
                <div className="hidden sm:inline-flex items-center gap-1 bg-green-50 text-green-800 border border-green-150 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded shrink-0">
                  <Clock className="w-3 h-3 text-green-700 animate-spin" />
                  <span>24H Guarantee</span>
                </div>
              </div>

              {submittedSuccessfully ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-slate-900 font-heading">
                      Quote Request Received!
                    </h3>
                    <p className="text-sm text-slate-500 font-medium max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Ideal Scrap Metal. An estimating supervisor has been notified. 
                      {submissionType === "whatsapp" 
                        ? " Please proceed with the WhatsApp chat that opened in the next tab to confirm." 
                        : " We will evaluate your specs and follow up by phone or email within today."}
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmittedSuccessfully(false)}
                    className="bg-green-700 hover:bg-green-800 text-white font-bold text-xs py-2.5 px-6 rounded transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
                  {/* Submission Method toggle */}
                  <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-lg mb-4 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => setSubmissionType("traditional")}
                      className={`py-2 px-3 rounded font-bold text-center transition-all cursor-pointer ${
                        submissionType === "traditional"
                          ? "bg-white text-slate-900 shadow-xs"
                          : "text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      Email Submission
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmissionType("whatsapp")}
                      className={`py-2 px-3 rounded font-bold text-center transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        submissionType === "whatsapp"
                          ? "bg-green-700 text-white shadow-xs"
                          : "text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-current" />
                      Send via WhatsApp
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide">
                        Your Full Name / Company *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. John Doe / Acme Pty Ltd"
                        {...register("name", { required: "Name is required" })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-green-700 focus:ring-1 focus:ring-green-700 rounded py-2.5 px-3.5 text-xs outline-none transition-all focus:bg-white"
                      />
                      {errors.name && (
                        <p className="text-[10px] text-red-500 font-mono italic">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Contact details */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide">
                        Phone / Email Contact *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. +27 82 893 2235"
                        {...register("contact", { required: "Contact details are required" })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-green-700 focus:ring-1 focus:ring-green-700 rounded py-2.5 px-3.5 text-xs outline-none transition-all focus:bg-white"
                      />
                      {errors.contact && (
                        <p className="text-[10px] text-red-500 font-mono italic">{errors.contact.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Type of scrap */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide">
                        Type of Scrap Metal
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Copper pipes, Demolition steel"
                        {...register("metalType")}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-green-700 focus:ring-1 focus:ring-green-700 rounded py-2.5 px-3.5 text-xs outline-none transition-all focus:bg-white"
                      />
                    </div>

                    {/* Estimated volume */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide">
                        Estimated Volume / Tons
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 500kg, 3 Tons"
                        {...register("estimatedVolume")}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-green-700 focus:ring-1 focus:ring-green-700 rounded py-2.5 px-3.5 text-xs outline-none transition-all focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide">
                      Location / Province (For Transport Logistics)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kroondal / Wadeville Germiston"
                      {...register("location")}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-green-700 focus:ring-1 focus:ring-green-700 rounded py-2.5 px-3.5 text-xs outline-none transition-all focus:bg-white"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide">
                      Message / Custom Specifications
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe your scrap metal specs, site constraints, or regular skips requirements here..."
                      {...register("message")}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-green-700 focus:ring-1 focus:ring-green-700 rounded py-2.5 px-3.5 text-xs outline-none transition-all resize-none focus:bg-white"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-lg text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-slate-900 status:bg-slate-850 hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      {isSubmitting ? (
                        <span>Evaluation in progress...</span>
                      ) : (
                        <>
                          <span>Submit Quote Request ({submissionType === "whatsapp" ? "WhatsApp" : "Email"})</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Regulatory badge indicators */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-4 items-center justify-between text-[11px] text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-green-850 font-bold">
                <ShieldCheck className="w-4 h-4 text-green-700" />
                MRA MEMBER NO: 23/901
              </span>
              <span className="font-bold">SAPS REGISTERED UNDER D19-012</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
