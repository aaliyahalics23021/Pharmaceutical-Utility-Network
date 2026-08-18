import React, { useState, useEffect, useRef } from "react";
import { PlusCircle, FileText, ShieldAlert, Link, Check, Search } from "lucide-react";

interface Step {
  num: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  graphic: React.ReactNode;
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const steps: Step[] = [
    {
      num: "01",
      title: "Create",
      description: "A pharmaceutical batch receives a unique digital identity (e.g. Serialized QR code) registered onto the network at the point of origin.",
      icon: <PlusCircle className="w-5 h-5" />,
      graphic: (
        <div className="flex flex-col items-center justify-center p-8 bg-neutral-50 rounded-2xl border border-border-line w-full h-64 font-mono text-xs">
          <div className="w-24 h-24 bg-white border border-neutral-300 flex items-center justify-center rounded-xl p-2 shadow-2xs mb-4">
            {/* Mock QR Code Pattern */}
            <div className="grid grid-cols-5 gap-1.5 w-full h-full p-1">
              {[...Array(25)].map((_, i) => (
                <div
                  key={i}
                  className={`rounded-[1px] ${
                    (i % 2 === 0 && i % 3 === 0) || i < 5 || i % 5 === 0 || i > 20
                      ? "bg-black"
                      : "bg-neutral-100"
                  }`}
                />
              ))}
            </div>
          </div>
          <span className="font-bold text-neutral-800">ID: BATCH-PHAR-2026-001</span>
          <span className="text-[10px] text-neutral-400 mt-1">GENESIS IDENTITY MINTED</span>
        </div>
      )
    },
    {
      num: "02",
      title: "Record",
      description: "Key logistics events, ownership handoffs, and critical environmental conditions (like cold-chain data) are signed and sent to the network.",
      icon: <FileText className="w-5 h-5" />,
      graphic: (
        <div className="flex flex-col justify-between p-6 bg-neutral-50 rounded-2xl border border-border-line w-full h-64 font-mono text-[11px] text-neutral-700">
          <div className="border-b border-border-line pb-2 flex justify-between">
            <span className="font-bold">TX_RECORD_LOGISTICS</span>
            <span className="text-neutral-400">UNVERIFIED</span>
          </div>
          <div className="space-y-1 py-4 flex-1">
            <p><span className="text-neutral-400">sender:</span> AeroCold Logistics</p>
            <p><span className="text-neutral-400">recipient:</span> Regional Warehouse</p>
            <p><span className="text-neutral-400">temp_log:</span> [4.2°C, 4.4°C, 4.1°C]</p>
            <p><span className="text-neutral-400">location:</span> Austin Depot</p>
          </div>
          <div className="bg-neutral-200 h-1.5 rounded-full overflow-hidden">
            <div className="bg-black h-full w-2/3 animate-pulse" />
          </div>
          <span className="text-[9px] text-neutral-400 mt-2">BROADCASTING TO VALIDATORS...</span>
        </div>
      )
    },
    {
      num: "03",
      title: "Validate",
      description: "Authorized validator nodes cross-examine the transaction's digital signature and compliance requirements (e.g. smart contract verification).",
      icon: <ShieldAlert className="w-5 h-5" />,
      graphic: (
        <div className="flex flex-col justify-center items-center p-6 bg-neutral-50 rounded-2xl border border-border-line w-full h-64 font-inter">
          <div className="flex gap-3 mb-6">
            {[1, 2, 3, 4].map((v) => (
              <div key={v} className="flex flex-col items-center bg-white border border-border-line p-2.5 rounded-lg">
                <span className="text-[9px] font-mono text-neutral-400">NODE 0{v}</span>
                <Check className="w-4 h-4 text-emerald-700 mt-1" />
              </div>
            ))}
          </div>
          <div className="text-center font-mono text-xs">
            <span className="text-emerald-800 font-bold bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full">
              PBFT CONSENSUS REACHED (4/4)
            </span>
          </div>
        </div>
      )
    },
    {
      num: "04",
      title: "Link",
      description: "Once verified, the transaction is cryptographically bundled into a block and permanently linked to the previous block in the distributed chain.",
      icon: <Link className="w-5 h-5" />,
      graphic: (
        <div className="flex justify-center items-center gap-4 p-4 bg-neutral-50 rounded-2xl border border-border-line w-full h-64 font-mono text-[10px]">
          <div className="border border-border-line bg-white p-3 rounded-lg flex flex-col items-center w-24">
            <span className="font-bold">Block #103</span>
            <span className="text-neutral-400 mt-1">Hash: 9e1c...</span>
          </div>
          <div className="h-0.5 w-8 border-t-2 border-dashed border-neutral-400" />
          <div className="border border-black bg-black text-white p-3 rounded-lg flex flex-col items-center w-24 transform scale-110 shadow-md">
            <span className="font-bold">Block #104</span>
            <span className="text-neutral-300 mt-1">Hash: 7b8a...</span>
          </div>
        </div>
      )
    },
    {
      num: "05",
      title: "Trace",
      description: "Authorized users and final consumers inspect the complete linked history simply by scanning the QR code, ensuring full trust in the product's origin.",
      icon: <Search className="w-5 h-5" />,
      graphic: (
        <div className="flex flex-col justify-center items-center p-6 bg-neutral-50 rounded-2xl border border-border-line w-full h-64 font-inter text-center">
          <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 mb-4">
            <Check className="w-6 h-6" />
          </div>
          <h5 className="font-bold text-neutral-900 text-sm">Product Route Certified</h5>
          <p className="text-xs text-neutral-500 mt-2 max-w-[200px] leading-relaxed">
            All 5 checkpoints verified with zero integrity violations.
          </p>
        </div>
      )
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrolled = -rect.top;
      
      if (scrolled >= 0 && scrolled < sectionHeight) {
        const index = Math.min(
          steps.length - 1,
          Math.max(0, Math.floor((scrolled / sectionHeight) * steps.length))
        );
        setActiveStep(index);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-white border-t border-border-line">
      <div className="editorial-container" ref={containerRef}>
        
        {/* Title */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-inter font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-3">
            Operational Blueprint
          </span>
          <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-black tracking-tight leading-[1.0]">
            How It Works
          </h2>
          <p className="font-inter text-secondary-text mt-6 text-sm sm:text-base max-w-xl">
            A step-by-step walk-through showing how physical events transform into an unalterable digital ledger entry.
          </p>
        </div>

        {/* Desktop Split Layout (Sticky visualization on right, scrollable steps on left) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* Steps Left Panel */}
          <div className="lg:col-span-6 space-y-6">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                    isSelected
                      ? "bg-neutral-50 border-neutral-800 shadow-2xs"
                      : "bg-white border-border-line hover:border-neutral-300"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`font-mono text-xs font-bold px-2 py-1 rounded-sm ${
                      isSelected ? "bg-black text-white" : "bg-neutral-100 text-neutral-500"
                    }`}>
                      {step.num}
                    </span>
                    <div className={`${isSelected ? "text-black" : "text-neutral-400"}`}>
                      {step.icon}
                    </div>
                    <h3 className="font-inter text-sm font-bold uppercase tracking-wider text-black">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-inter text-xs sm:text-sm text-secondary-text leading-relaxed pl-10">
                    {step.description}
                  </p>
                  
                  {/* Mobile graphic placeholder (shown inside card on mobile screens) */}
                  <div className="mt-6 lg:hidden w-full">
                    {step.graphic}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Visual Right Panel (Visible on Desktop) */}
          <div className="hidden lg:block lg:col-span-6 sticky top-28 h-[400px] flex items-center justify-center bg-white rounded-2xl border border-border-line p-8 shadow-xs">
            <div className="w-full flex flex-col items-center">
              <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase mb-6 block">
                Visualizing Phase: {steps[activeStep].title}
              </span>
              <div className="w-full max-w-sm transition-all duration-500 transform scale-100">
                {steps[activeStep].graphic}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
