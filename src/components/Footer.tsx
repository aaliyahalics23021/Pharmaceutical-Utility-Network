import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-white border-t border-border-line pt-24 pb-12">
      <div className="editorial-container">
        
        {/* Cinematic Closing CTA Panel */}
        <div className="bg-neutral-50 border border-border-line rounded-3xl p-8 md:p-16 text-center max-w-5xl mx-auto mb-24">
          <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-black tracking-tight leading-[1.0] text-balance mb-6">
            When the journey can be trusted, the product can be trusted.
          </h2>
          <p className="font-inter text-secondary-text mt-4 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            The **Pharmaceutical Utility Network** demonstrates how permissioned blockchain technology can create a shared, verifiable and tamper-evident history across the pharmaceutical supply chain.
          </p>
          <button
            onClick={() => scrollToSection("trace")}
            className="bg-black text-white hover:bg-neutral-800 text-xs font-inter font-semibold uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-[1.03] cursor-pointer shadow-md inline-block"
          >
            Explore the Journey
          </button>
          
          <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-10 font-bold font-inter">
            Blockchain • Supply Chain • Pharmaceutical Integrity
          </div>
        </div>



        {/* Copyright Footer & Scroll to Top */}
        <div className="max-w-4xl mx-auto border-t border-border-line pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-neutral-400 font-inter">
          <div>
            © {new Date().getFullYear()} PUN® — Pharmaceutical Utility Network. All rights reserved.
            <span className="block sm:inline sm:ml-2 mt-1 sm:mt-0 text-[10px] text-neutral-400 uppercase tracking-widest font-bold">
              • Academic Case Study Demonstration
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-black transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
