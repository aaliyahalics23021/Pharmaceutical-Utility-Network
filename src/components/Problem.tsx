import { Fragment } from "react";
import { Database, EyeOff, AlertTriangle } from "lucide-react";

export default function Problem() {
  const supplyChainStages = [
    { label: "Manufacturer", desc: "Synthesizes & packages" },
    { label: "Distributor", desc: "Transports across regions" },
    { label: "Warehouse", desc: "Holds local inventory" },
    { label: "Pharmacy", desc: "Dispenses to recipient" },
    { label: "Patient", desc: "Consumes medication" }
  ];

  const problemCards = [
    {
      icon: <Database className="w-5 h-5 text-neutral-800" />,
      title: "Fragmented Records",
      desc: "Each organization maintains separate database systems. Information remains trapped in proprietary silos, making it difficult to cross-reference data."
    },
    {
      icon: <EyeOff className="w-5 h-5 text-neutral-800" />,
      title: "Limited Traceability",
      desc: "Tracing a drug's complete journey from active ingredients to point-of-sale is extremely slow, often requiring manual reconciliation across companies."
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-neutral-800" />,
      title: "Counterfeit & Tampering Risk",
      desc: "Without verification at intermediate transit steps, authentic packages can be swapped for falsified medicines, endangering human health."
    }
  ];

  return (
    <section id="problem" className="py-24 sm:py-32 bg-white border-t border-border-line">
      <div className="editorial-container">
        {/* Title */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-inter font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-3">
            The Supply Chain Dilemma
          </span>
          <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-black tracking-tight leading-[1.0] text-balance">
            A product can be genuine. Its journey can still be uncertain.
          </h2>
          <p className="font-inter text-secondary-text mt-6 text-sm sm:text-base max-w-xl leading-relaxed">
            In standard supply chains, a single batch of medication changes hands multiple times before arriving at the clinic. Vital data remains fragmented across isolated silos.
          </p>
        </div>

        {/* Horizontal Supply Chain Visual Journey */}
        <div className="bg-subtle-bg rounded-2xl p-8 md:p-12 mb-16 border border-neutral-100">
          <span className="text-[9px] font-inter font-bold tracking-widest text-neutral-400 uppercase block mb-8">
            The Traditional Journey Path
          </span>
          
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-4">
            {supplyChainStages.map((stage, idx) => (
              <Fragment key={stage.label}>
                {/* Stage Node */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto relative">
                  <div className="w-10 h-10 rounded-full bg-white border border-border-line flex items-center justify-center font-inter text-xs font-bold text-neutral-800 shadow-2xs mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="font-inter text-xs font-bold text-neutral-900 uppercase tracking-wider">
                    {stage.label}
                  </h4>
                  <p className="font-inter text-[11px] text-neutral-500 mt-0.5">
                    {stage.desc}
                  </p>
                </div>

                {/* Arrow Connector (Hidden on last node, stacks on mobile) */}
                {idx < supplyChainStages.length - 1 && (
                  <div className="hidden md:block flex-1 border-t border-dashed border-neutral-300 mx-2 h-0" />
                )}
                {idx < supplyChainStages.length - 1 && (
                  <div className="md:hidden w-px h-6 border-l border-dashed border-neutral-300 my-1" />
                )}
              </Fragment>
            ))}
          </div>
        </div>

        {/* Explain the fragmented record issue & Highlight Three Problems */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mt-8">
          {problemCards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col border border-border-line rounded-xl p-8 hover:border-neutral-400 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="font-inter text-sm font-bold uppercase tracking-wider text-black mb-3">
                {card.title}
              </h3>
              <p className="font-inter text-xs sm:text-sm text-secondary-text leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
