import { useState, useEffect } from "react";
import { Package, Truck, Warehouse, Landmark, CheckCircle, Database } from "lucide-react";

export default function Solution() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const flowSteps = [
    {
      id: 0,
      label: "Manufacturer",
      icon: <Package className="w-5 h-5" />,
      action: "Synthesized & Registered",
      block: "Block #101",
      hash: "8a4f91d8e03b...",
      tx: "REGISTER_BATCH",
      desc: "Batch formulation parameters and temperature guidelines are permanently anchored."
    },
    {
      id: 1,
      label: "Distributor",
      icon: <Truck className="w-5 h-5" />,
      action: "Cold-chain Telemetry Logs",
      block: "Block #102",
      hash: "3b2e7c10d8a5...",
      tx: "CUSTODY_TRANSFER",
      desc: "Transit handoff verified. Smart contracts monitor continuous temperature logs."
    },
    {
      id: 2,
      label: "Warehouse",
      icon: <Warehouse className="w-5 h-5" />,
      action: "Inventory Storage Scans",
      block: "Block #103",
      hash: "9e1c2b5d4e6f...",
      tx: "INVENTORY_INTAKE",
      desc: "Intake checks cataloged. Regional facility coordinates added to ledger timeline."
    },
    {
      id: 3,
      label: "Pharmacy",
      icon: <Landmark className="w-5 h-5" />,
      action: "Dispensed Verification",
      block: "Block #104",
      hash: "7b8a9c0d1e2f...",
      tx: "POINT_OF_CARE_DISPENSE",
      desc: "Final delivery registered. The patient can verify integrity before intake."
    }
  ];

  return (
    <section id="solution" className="py-24 sm:py-32 bg-subtle-bg border-t border-border-line overflow-hidden">
      <div className="editorial-container">
        {/* Title and Intro */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-inter font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-3">
            The Shared Ledger Solution
          </span>
          <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-black tracking-tight leading-[1.0] text-balance">
            One shared history. Verified by the network.
          </h2>
          <p className="font-inter text-secondary-text mt-6 text-sm sm:text-base max-w-xl leading-relaxed">
            The **Pharmaceutical Utility Network** replaces disjointed internal databases with a permissioned, shared ledger. Everyone looks at the same source of truth.
          </p>
        </div>

        {/* The Animated Diagram */}
        <div className="bg-white rounded-3xl p-8 md:p-16 border border-border-line shadow-xs">
          {/* Header Concept */}
          <div className="flex flex-col sm:flex-row justify-between border-b border-border-line pb-8 mb-12 gap-4">
            <div>
              <span className="text-[10px] font-inter font-bold tracking-widest text-neutral-400 uppercase block">
                Educational View
              </span>
              <h3 className="font-instrument text-2xl text-black mt-1">
                Physical Movement vs. Digital Ledger
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-700 animate-ping" />
              <span className="text-xs font-inter text-emerald-800 font-semibold bg-emerald-50 px-3 py-1 rounded-full">
                Active Simulation Running
              </span>
            </div>
          </div>

          {/* Grid Layout representing the Parallel Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hand: Explanatory Card */}
            <div className="lg:col-span-4 flex flex-col justify-center h-full">
              <div className="border-l-2 border-black pl-6 transition-all duration-500">
                <span className="text-[10px] font-inter font-bold tracking-widest text-neutral-400 uppercase block">
                  Current Step: {flowSteps[activeStep].label}
                </span>
                <h4 className="font-instrument text-3xl text-black mt-2 leading-none">
                  {flowSteps[activeStep].action}
                </h4>
                <p className="font-inter text-xs sm:text-sm text-secondary-text mt-4 leading-relaxed">
                  {flowSteps[activeStep].desc}
                </p>

                {/* Verification tag */}
                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-lg w-fit mt-6 border border-emerald-100">
                  <CheckCircle className="w-4 h-4 text-emerald-700" />
                  <span className="text-[10px] uppercase font-bold tracking-wider font-inter">
                    {flowSteps[activeStep].block} Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Right Hand: Visual Flow Map */}
            <div className="lg:col-span-8 space-y-12">
              {/* Row 1: Physical Supply Chain Flow */}
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-100 -translate-y-1/2 hidden md:block z-0" />
                <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold block mb-4">
                  1. Physical Custody Chain
                </span>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                  {flowSteps.map((step) => {
                    const isActive = activeStep === step.id;
                    return (
                      <div
                        key={step.id}
                        onClick={() => setActiveStep(step.id)}
                        className={`flex flex-col items-center p-4 rounded-xl border text-center transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "bg-black border-black text-white shadow-md transform -translate-y-1"
                            : "bg-neutral-50 border-border-line text-neutral-600 hover:bg-neutral-100"
                        }`}
                      >
                        <div className={`p-2.5 rounded-full mb-3 ${isActive ? "bg-neutral-800 text-white" : "bg-white text-neutral-800 border border-border-line"}`}>
                          {step.icon}
                        </div>
                        <span className="text-[10px] uppercase tracking-wider font-bold font-inter">
                          {step.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Connecting Vertical Sync Line */}
              <div className="flex justify-center items-center h-8">
                <div className="w-0.5 h-full border-l border-dashed border-neutral-300 animate-pulse" />
                <span className="mx-3 text-[9px] uppercase tracking-widest text-neutral-400 font-bold font-inter">
                  Real-time Ledger Sync
                </span>
                <div className="w-0.5 h-full border-l border-dashed border-neutral-300 animate-pulse" />
              </div>

              {/* Row 2: Digital Ledger (Blockchain) Flow */}
              <div>
                <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold block mb-4">
                  2. Digital Blockchain Record
                </span>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {flowSteps.map((step) => {
                    const isActive = activeStep === step.id;
                    return (
                      <div
                        key={step.id}
                        onClick={() => setActiveStep(step.id)}
                        className={`flex flex-col p-4 rounded-xl border transition-all duration-300 cursor-pointer font-mono text-[10px] ${
                          isActive
                            ? "bg-neutral-900 border-neutral-950 text-white shadow-md transform -translate-y-1"
                            : "bg-neutral-50 border-border-line text-neutral-500 hover:bg-neutral-100"
                        }`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className={`font-bold uppercase tracking-wider text-[9px] ${isActive ? "text-emerald-400" : "text-neutral-700"}`}>
                            {step.block}
                          </span>
                          <Database className={`w-3.5 h-3.5 ${isActive ? "text-emerald-400" : "text-neutral-400"}`} />
                        </div>
                        <div className="space-y-1.5 text-left">
                          <div>
                            <span className="text-[9px] text-neutral-400 block">TRANSACTION TYPE</span>
                            <span className="font-semibold">{step.tx}</span>
                          </div>
                          <div>
                            <span className="text-[9px] text-neutral-400 block">HASH SIGNATURE</span>
                            <span className="opacity-80">{step.hash}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Key Message */}
          <div className="mt-12 bg-neutral-50 rounded-xl p-6 border border-border-line text-center">
            <p className="font-inter text-xs sm:text-sm text-secondary-text">
              <strong className="text-black uppercase text-[10px] tracking-wider block mb-1">Central Story</strong>
              Pharmaceutical Product → Supply Chain → Blockchain Verification → Trusted & Traceable Product
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
