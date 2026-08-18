import { useState } from "react";
import { SAMPLE_BATCH } from "../data/mockData";
import type { TraceStage } from "../data/mockData";
import { ShieldCheck, Clock, Building, ClipboardList, CheckCircle } from "lucide-react";

export default function TraceBatch() {
  const [isTraced, setIsTraced] = useState(false);
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);

  const currentStageData: TraceStage = SAMPLE_BATCH.stages[selectedStageIndex];

  return (
    <section id="trace" className="py-24 sm:py-32 bg-white border-t border-border-line">
      <div className="editorial-container">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-inter font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-3">
            Interactive Lookup Tool
          </span>
          <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-black tracking-tight leading-[1.0]">
            Trace a Batch
          </h2>
          <p className="font-inter text-secondary-text mt-6 text-sm sm:text-base max-w-xl">
            Simulate a batch inquiry on the network. See exactly how blockchain metadata validates cold-chain integrity and audits ownership transfer events.
          </p>
        </div>

        {/* Trace Controller */}
        {!isTraced ? (
          <div className="border border-border-line rounded-3xl p-12 text-center bg-subtle-bg hover:border-neutral-400 transition-all duration-300">
            <h3 className="font-instrument text-3xl text-neutral-800 mb-4">
              Begin batch history query
            </h3>
            <p className="font-inter text-neutral-500 text-xs sm:text-sm max-w-md mx-auto mb-8 leading-relaxed">
              No manual inputs required. Trace our pre-configured sample insulin batch <span className="font-mono text-xs font-semibold bg-white border border-border-line px-2 py-1 rounded-sm text-neutral-700">PHAR-2026-001</span> straight from the lab.
            </p>
            <button
              onClick={() => setIsTraced(true)}
              className="bg-black text-white hover:bg-neutral-800 text-xs font-inter font-semibold uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-[1.03] cursor-pointer shadow-md inline-flex items-center gap-2"
            >
              Trace a Sample Batch →
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
            {/* Batch Status Sidebar (Col 4) */}
            <div className="lg:col-span-4 bg-neutral-50 rounded-2xl p-6 border border-border-line space-y-6">
              <div className="flex justify-between items-start border-b border-border-line pb-4">
                <div>
                  <span className="text-[9px] font-mono text-neutral-400 uppercase block">Inquiry Registered</span>
                  <h3 className="font-mono text-sm font-bold text-black">{SAMPLE_BATCH.id}</h3>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-100 font-inter text-[10px] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  {SAMPLE_BATCH.status}
                </div>
              </div>

              <div className="space-y-4 text-xs font-inter">
                <div>
                  <span className="text-[10px] text-neutral-400 block mb-1">Product Description</span>
                  <span className="font-semibold text-neutral-900">{SAMPLE_BATCH.product}</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 block mb-1">Lead Manufacturer</span>
                  <span className="font-semibold text-neutral-900">{SAMPLE_BATCH.manufacturer}</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 block mb-1">Latest Inspected Location</span>
                  <span className="font-semibold text-neutral-900">{SAMPLE_BATCH.currentStage}</span>
                </div>
              </div>

              <div className="border-t border-border-line pt-4 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsTraced(false);
                    setSelectedStageIndex(0);
                  }}
                  className="w-full text-center text-xs font-semibold text-neutral-500 hover:text-black border border-border-line py-2.5 rounded-lg hover:bg-neutral-100 transition-all duration-300 font-inter cursor-pointer"
                >
                  Reset Lookup Session
                </button>
              </div>
            </div>

            {/* Path Tracer Timeline Dashboard (Col 8) */}
            <div className="lg:col-span-8 bg-white border border-border-line rounded-2xl p-6 md:p-8 space-y-8">
              
              {/* Stepper Header Timeline */}
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-100 -translate-y-1/2 hidden md:block z-0" />
                
                {/* Horizontal steps on Desktop / Vertical stack on Mobile */}
                <div className="flex flex-col md:flex-row justify-between gap-4 relative z-10">
                  {SAMPLE_BATCH.stages.map((stage, idx) => {
                    const isSelected = selectedStageIndex === idx;
                    const isPassed = idx <= selectedStageIndex;
                    return (
                      <button
                        key={stage.id}
                        onClick={() => setSelectedStageIndex(idx)}
                        className="flex items-center md:flex-col gap-3 md:gap-2 text-left md:text-center group cursor-pointer focus:outline-none"
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                            isSelected
                              ? "bg-black text-white ring-4 ring-neutral-100 scale-110"
                              : isPassed
                              ? "bg-neutral-200 text-neutral-800"
                              : "bg-neutral-50 text-neutral-400 border border-border-line"
                          } group-hover:border-neutral-400`}
                        >
                          {isPassed ? "✓" : idx + 1}
                        </div>
                        <span className={`text-[10px] uppercase font-bold tracking-wider font-inter transition-colors duration-200 ${
                          isSelected ? "text-black" : "text-neutral-400 group-hover:text-neutral-600"
                        }`}>
                          {stage.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Detail Card */}
              <div className="border border-border-line rounded-xl p-6 md:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-border-line pb-4 gap-2">
                  <h4 className="font-instrument text-2xl text-black">
                    Checkpoint: {currentStageData.name}
                  </h4>
                  <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full border border-emerald-100">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-700" />
                    <span className="text-[9px] font-bold uppercase tracking-wider font-inter">
                      Blockchain record verified
                    </span>
                  </div>
                </div>

                {/* WHO - WHAT - WHEN Fields */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* WHO */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <Building className="w-3.5 h-3.5" />
                      <span className="text-[9px] uppercase tracking-wider font-bold font-inter">Who (Responsible)</span>
                    </div>
                    <p className="font-inter text-xs text-neutral-800 font-semibold">{currentStageData.who}</p>
                  </div>
                  
                  {/* WHAT */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <ClipboardList className="w-3.5 h-3.5" />
                      <span className="text-[9px] uppercase tracking-wider font-bold font-inter">What (Action)</span>
                    </div>
                    <p className="font-inter text-xs text-neutral-800 font-semibold">{currentStageData.what}</p>
                  </div>

                  {/* WHEN */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-[9px] uppercase tracking-wider font-bold font-inter">When (Timestamp)</span>
                    </div>
                    <p className="font-inter text-xs text-neutral-800 font-semibold">{currentStageData.when}</p>
                  </div>
                </div>

                {/* Narrative Summary */}
                <div className="bg-neutral-50 rounded-lg p-4 border border-border-line text-xs font-inter text-neutral-600 leading-relaxed">
                  <span className="font-bold text-neutral-800 block mb-1">Process Explanation</span>
                  {currentStageData.description}
                </div>

                {/* Technical / Cryptographic Proof Fields (for case study details) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border-line font-mono text-[10px] text-neutral-500">
                  <div>
                    <span className="block text-[9px] text-neutral-400">CRYPTOGRAPHIC BLOCK HASH</span>
                    <span className="break-all font-semibold text-neutral-800">{currentStageData.hash}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-neutral-400">PREVIOUS BLOCK LINK</span>
                    <span className="break-all font-semibold text-neutral-800">{currentStageData.previousHash}</span>
                  </div>
                </div>

                {/* Additional Checkpoints Details list */}
                <div className="space-y-2 pt-2">
                  <span className="text-[9px] uppercase tracking-wider font-bold font-inter text-neutral-400 block">Telemetry & Verifications</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-inter text-neutral-700">
                    {currentStageData.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-lg border border-neutral-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
