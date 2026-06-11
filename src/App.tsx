import { useState } from "react";
import { X, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import UseCases from "./components/UseCases";
import Sustainability from "./components/Sustainability";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CTAFloating from "./components/CTAFloating";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState("");

  const handleOpenQuoteModal = (serviceName: string = "") => {
    setPrefilledService(serviceName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPrefilledService("");
  };

  return (
    <div className="relative min-h-screen text-slate-800 bg-slate-50 flex flex-col justify-between selection:bg-green-700 selection:text-white">
      {/* Navigation */}
      <Navbar onQuoteClick={() => handleOpenQuoteModal("General Quote Request")} />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onQuoteClick={() => handleOpenQuoteModal("Hero General Request")} />

        {/* Services Section */}
        <Services onQuoteClick={(service) => handleOpenQuoteModal(service)} />

        {/* About Us Section */}
        <About />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Linear Step-by-step Process Section */}
        <Process />

        {/* Industrial Sectors/Use Cases Section */}
        <UseCases />

        {/* ESG Sustainability Impact Section */}
        <Sustainability />

        {/* Client Reviews Section */}
        <Testimonials />

        {/* Conversion Contact Page/Section */}
        <div className="bg-slate-50 py-4 border-t border-slate-150">
          <ContactForm preFilledService={prefilledService} />
        </div>
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Persistent WhatsApp + Sticky Mobile Footer */}
      <CTAFloating onQuoteClick={() => handleOpenQuoteModal("Mobile Sticky Request")} />

      {/* CONVERSION OPTIMIZATION: LIGHTBOX MODAL QUOTE FUNNEL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs"
          >
            {/* Modal Body Card */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            >
              {/* Top Banner Accent */}
              <div className="h-2 bg-green-700 w-full"></div>

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-green-50 text-slate-500 hover:text-green-800 transition-colors cursor-pointer z-10"
                aria-label="Close quote modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Form container scrollable */}
              <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-10">
                <div className="mb-6 space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-green-800 font-bold uppercase py-0.5 px-2 bg-green-50 rounded border border-green-150 inline-block">
                    Instant Valuation
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading uppercase tracking-tight">
                    Request Scrap Metal Estimate
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Our team regularly updates competitive trading rates based on South African index valuations.
                  </p>
                </div>

                {/* Render the core lead form questionnaire directly here too */}
                <ContactForm preFilledService={prefilledService} />

                {/* Custom Modal Footer Note */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-green-700" />
                    Secure SSL Certified
                  </span>
                  <span className="font-bold">Average feedback: under 24 hours</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
