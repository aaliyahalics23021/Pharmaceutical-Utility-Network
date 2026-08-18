import { useState, Fragment } from "react";
import { BLOCKS_DATA } from "../data/mockData";
import type { LedgerBlock } from "../data/mockData";
import { Shield, Database, Users, Fingerprint, ShieldCheck, AlertTriangle, Play } from "lucide-react";

export default function BlockchainDemo() {
  const [selectedBlockNum, setSelectedBlockNum] = useState<number>(103);
  const [isTampered, setIsTampered] = useState(false);
  const [pbftState, setPbftState] = useState<"idle" | "propose" | "validate" | "consensus" | "added">("idle");
  const [nodeChecks, setNodeChecks] = useState<boolean[]>([false, false, false, false]);

  const activeBlock = BLOCKS_DATA.find((b) => b.blockNumber === selectedBlockNum) || BLOCKS_DATA[2];

  // Helper to simulate hash mutation
  const getDisplayHash = (block: LedgerBlock) => {
    if (isTampered && block.blockNumber === 103) {
      return "0000BAD_HASH_99999999999999999999999999999999999999999999999999999";
    }
    return block.hash;
  };

  const getDisplayPrevHash = (block: LedgerBlock) => {
    if (isTampered && block.blockNumber === 104) {
      return "0000BAD_HASH_99999999999999999999999999999999999999999999999999999";
    }
    return block.previousHash;
  };

  // Run PBFT Consensus Simulation step-by-step
  const startPbftSimulation = () => {
    setPbftState("propose");
    setNodeChecks([false, false, false, false]);
    
    // Step 2: Validate
    setTimeout(() => {
      setPbftState("validate");
      // Incrementally check nodes
      setTimeout(() => setNodeChecks([true, false, false, false]), 400);
      setTimeout(() => setNodeChecks([true, true, false, false]), 800);
      setTimeout(() => setNodeChecks([true, true, true, false]), 1200);
      setTimeout(() => setNodeChecks([true, true, true, true]), 1600);
    }, 1500);

    // Step 3: Consensus Reached
    setTimeout(() => {
      setPbftState("consensus");
    }, 3800);

    // Step 4: Block Added
    setTimeout(() => {
      setPbftState("added");
    }, 5500);
  };

  const resetPbftSimulation = () => {
    setPbftState("idle");
    setNodeChecks([false, false, false, false]);
  };

  const coreConcepts = [
    {
      icon: <Shield className="w-5 h-5 text-neutral-800" />,
      title: "Permissioned Blockchain",
      desc: "Only authenticated and authorized pharmaceutical organizations (manufacturers, regulators) are permitted to join and write to the network."
    },
    {
      icon: <Database className="w-5 h-5 text-neutral-800" />,
      title: "Distributed Ledger",
      desc: "Every network partner keeps a synchronized copy of the database. No single organization controls or hosts the master history sheet."
    },
    {
      icon: <Users className="w-5 h-5 text-neutral-800" />,
      title: "Consensus Mechanism",
      desc: "Participants run validation rules to agree that a supply chain shipment event is correct before compiling it into the ledger history."
    },
    {
      icon: <Fingerprint className="w-5 h-5 text-neutral-800" />,
      title: "Cryptographic Hash",
      desc: "Each block locks in a cryptographic hash (fingerprint) of its details plus the previous block's hash. Changing anything breaks this link."
    }
  ];

  return (
    <section id="blockchain" className="py-24 sm:py-32 bg-subtle-bg border-t border-border-line">
      <div className="editorial-container">
        
        {/* Title */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-inter font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-3">
            Core Technology Architecture
          </span>
          <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-black tracking-tight leading-[1.0]">
            The technology behind the trust.
          </h2>
          <p className="font-inter text-secondary-text mt-6 text-sm sm:text-base max-w-xl">
            How cryptographic signatures, Byzantine consensus, and distributed structures remove the need for blind trust in a single centralized host.
          </p>
        </div>

        {/* 4 Core Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {coreConcepts.map((concept, idx) => (
            <div key={idx} className="bg-white border border-border-line p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center mb-5">
                  {concept.icon}
                </div>
                <h3 className="font-inter text-xs font-bold uppercase tracking-wider text-black mb-3">
                  {concept.title}
                </h3>
                <p className="font-inter text-xs text-secondary-text leading-relaxed">
                  {concept.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BLOCKCHAIN LEDGER VISUALIZATION & TAMPER SIMULATOR */}
        <div className="bg-white rounded-3xl p-6 md:p-12 border border-border-line shadow-xs mb-20">
          
          <div className="border-b border-border-line pb-6 mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase">Live Cryptography Demo</span>
              <h3 className="font-instrument text-2xl text-black mt-1">Interactive Block Journal</h3>
            </div>
            
            <button
              onClick={() => setIsTampered(!isTampered)}
              className={`text-xs font-inter font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
                isTampered
                  ? "bg-amber-50 border-amber-300 text-amber-900"
                  : "bg-white border-border-line text-neutral-800 hover:border-black"
              }`}
            >
              <AlertTriangle className={`w-3.5 h-3.5 ${isTampered ? "text-amber-700 animate-bounce" : "text-neutral-400"}`} />
              {isTampered ? "Restore Data Integrity" : "Simulate Altering Block 103"}
            </button>
          </div>

          {/* Ledger Chain Blocks (Horizontal Flow, stacks on mobile) */}
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 mb-10">
            {BLOCKS_DATA.map((block, idx) => {
              const isSelected = selectedBlockNum === block.blockNumber;
              const hasMismatch = isTampered && block.blockNumber === 104;
              const isBlockTampered = isTampered && block.blockNumber === 103;

              return (
                <Fragment key={block.blockNumber}>
                  {/* Block Card */}
                  <div
                    onClick={() => setSelectedBlockNum(block.blockNumber)}
                    className={`flex-1 flex flex-col justify-between p-5 rounded-xl border text-left cursor-pointer transition-all duration-300 ${
                      isBlockTampered
                        ? "bg-amber-50/55 border-amber-500 scale-[1.01]"
                        : hasMismatch
                        ? "bg-rose-50/40 border-rose-300"
                        : isSelected
                        ? "bg-black border-black text-white shadow-md transform -translate-y-1"
                        : "bg-neutral-50 border-border-line text-neutral-700 hover:bg-neutral-100"
                    }`}
                  >
                    <div className="flex justify-between items-center border-b border-neutral-200/50 pb-2 mb-3">
                      <span className={`font-mono text-xs font-bold ${isSelected ? "text-white" : "text-neutral-900"}`}>
                        Block {block.blockNumber}
                      </span>
                      {isBlockTampered ? (
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
                      ) : hasMismatch ? (
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
                      ) : (
                        <ShieldCheck className={`w-3.5 h-3.5 ${isSelected ? "text-emerald-400" : "text-emerald-700"}`} />
                      )}
                    </div>

                    <div className="font-mono text-[9px] space-y-1.5 opacity-90">
                      <div>
                        <span className="text-neutral-400 block font-sans text-[8px]">TIMESTAMP</span>
                        <span className="font-semibold">{block.timestamp}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400 block font-sans text-[8px]">HASH</span>
                        <span className="break-all font-semibold block max-h-5 overflow-hidden">
                          {getDisplayHash(block).substring(0, 16)}...
                        </span>
                      </div>
                      <div>
                        <span className="text-neutral-400 block font-sans text-[8px]">PREVIOUS HASH</span>
                        <span className={`break-all font-semibold block max-h-5 overflow-hidden ${
                          hasMismatch ? "text-rose-700 font-bold bg-rose-100/50 px-1 rounded-sm" : ""
                        }`}>
                          {getDisplayPrevHash(block).substring(0, 16)}...
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Connective Arrow */}
                  {idx < BLOCKS_DATA.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center font-mono text-[10px] text-neutral-300">
                      →
                    </div>
                  )}
                </Fragment>
              );
            })}
          </div>

          {/* Block Detail Panel */}
          <div className="border border-border-line rounded-xl p-6 bg-neutral-50 space-y-4">
            <div className="flex flex-col sm:flex-row justify-between border-b border-border-line pb-3 gap-2">
              <h4 className="font-inter text-xs font-bold uppercase tracking-wider text-black">
                Details: Block {activeBlock.blockNumber} ({activeBlock.stageName})
              </h4>
              <span className="font-mono text-[10px] text-neutral-400">
                Signatory: {activeBlock.validatorSignature}
              </span>
            </div>

            <div className="text-xs font-inter text-neutral-600 space-y-3">
              <p>
                <strong className="text-neutral-800 block mb-1">Payload Content</strong>
                {activeBlock.details}
              </p>

              {/* Explaining Cryptographic Hash Relationships */}
              <div className="bg-white p-4 rounded-lg border border-border-line font-inter text-[11px] leading-relaxed">
                <span className="font-bold text-black block mb-1">Why does this matter?</span>
                <p className="text-neutral-500">
                  If recorded information is altered inside Block 103, its hash changes. Since Block 104 stores Block 103's hash as its <code>Previous Hash</code>, the relationship breaks. The mismatch instantly alerts all nodes, exposing unauthorized changes.
                </p>
              </div>

              {/* Active Tamper Alert Banner */}
              {isTampered && (
                <div className="bg-amber-100 border border-amber-400 text-amber-900 rounded-lg p-4 flex gap-3 items-start animate-pulse">
                  <AlertTriangle className="w-5 h-5 text-amber-800 flex-shrink-0 mt-0.5" />
                  <div className="font-inter text-xs text-left">
                    <span className="font-bold block uppercase tracking-wider text-[10px] text-amber-950">Cryptographic Discrepancy Found</span>
                    Block 103's data alteration has changed its output hash. Block 104's reference pointer is now broken. The system immediately rejects Block 104 synchronization, rendering the tampering detectable.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CONSENSUS PBFT SIMULATION */}
        <div className="bg-white rounded-3xl p-6 md:p-12 border border-border-line shadow-xs">
          
          <div className="border-b border-border-line pb-6 mb-10">
            <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase block">Consensus Architecture</span>
            <h3 className="font-instrument text-3xl text-black mt-1">
              PBFT — Practical Byzantine Fault Tolerance
            </h3>
            <p className="font-inter text-xs sm:text-sm text-secondary-text mt-3 max-w-xl">
              Private and permissioned networks use PBFT consensus to reach agreements rapidly, ensuring the ledger updates securely even if some participants drop offline or behave incorrectly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-inter border-b border-border-line pb-3">
                  <span className="text-neutral-400 font-bold uppercase tracking-wider">Network Type:</span>
                  <span className="bg-neutral-100 text-neutral-800 font-semibold px-2 py-0.5 rounded-sm">Private / Permissioned</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-inter border-b border-border-line pb-3">
                  <span className="text-neutral-400 font-bold uppercase tracking-wider">Consensus Engine:</span>
                  <span className="bg-neutral-100 text-neutral-800 font-semibold px-2 py-0.5 rounded-sm">PBFT Model</span>
                </div>
              </div>

              <div className="bg-neutral-50 border border-border-line p-4 rounded-xl font-inter text-xs text-neutral-500 leading-relaxed">
                <strong>Plain English Rule:</strong>
                <p className="mt-1">
                  PBFT allows authorized participants to validate and reach agreement on proposed records, preventing falsified events from polluting the main database.
                </p>
              </div>

              <div className="flex gap-2">
                {pbftState === "idle" || pbftState === "added" ? (
                  <button
                    onClick={startPbftSimulation}
                    className="flex items-center gap-2 bg-black text-white hover:bg-neutral-800 text-xs font-inter font-semibold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 cursor-pointer shadow-xs"
                  >
                    <Play className="w-3.5 h-3.5 text-white" />
                    Run Consensus Demo
                  </button>
                ) : (
                  <button
                    onClick={resetPbftSimulation}
                    className="border border-border-line text-neutral-500 hover:text-black text-xs font-inter font-semibold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 cursor-pointer"
                  >
                    Reset Simulation
                  </button>
                )}
              </div>
            </div>

            {/* Right: Visual flow */}
            <div className="lg:col-span-8 bg-neutral-50 border border-border-line rounded-2xl p-6 md:p-8">
              
              <div className="relative space-y-8 font-inter text-xs text-neutral-700">
                {/* Visual Steps representation */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  
                  {/* Step 1: Transaction Proposed */}
                  <div className={`p-4 rounded-xl border text-center w-full md:w-36 transition-all duration-300 ${
                    pbftState === "propose" || pbftState === "validate" || pbftState === "consensus" || pbftState === "added"
                      ? "bg-black border-black text-white"
                      : "bg-white border-border-line"
                  }`}>
                    <span className="text-[8px] font-mono tracking-widest block opacity-75 uppercase">Phase 01</span>
                    <span className="font-bold block mt-1 uppercase text-[9px] tracking-wider">Tx Proposed</span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="hidden md:block text-neutral-300 text-base">→</div>

                  {/* Step 2: Authorized Validators */}
                  <div className={`p-4 rounded-xl border w-full md:w-56 transition-all duration-300 ${
                    pbftState === "validate" || pbftState === "consensus" || pbftState === "added"
                      ? "bg-white border-black"
                      : "bg-white border-border-line"
                  }`}>
                    <span className="text-[8px] font-mono tracking-widest block text-neutral-400 uppercase mb-2">Phase 02 — Validators</span>
                    <div className="space-y-1 font-mono text-[9px]">
                      {nodeChecks.map((checked, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span>Validator Node {idx + 1}</span>
                          <span className={`font-bold ${checked ? "text-emerald-700" : "text-neutral-400"}`}>
                            {checked ? "✓ Checked" : "..."}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="hidden md:block text-neutral-300 text-base">→</div>

                  {/* Step 3: Consensus Reached */}
                  <div className={`p-4 rounded-xl border text-center w-full md:w-36 transition-all duration-300 ${
                    pbftState === "consensus" || pbftState === "added"
                      ? "bg-emerald-850 border-emerald-950 text-white"
                      : "bg-white border-border-line"
                  }`}>
                    <span className="text-[8px] font-mono tracking-widest block opacity-75 uppercase">Phase 03</span>
                    <span className="font-bold block mt-1 uppercase text-[9px] tracking-wider">Consensus Met</span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="hidden md:block text-neutral-300 text-base">→</div>

                  {/* Step 4: Block Added */}
                  <div className={`p-4 rounded-xl border text-center w-full md:w-36 transition-all duration-300 ${
                    pbftState === "added"
                      ? "bg-emerald-900 border-emerald-950 text-white"
                      : "bg-white border-border-line"
                  }`}>
                    <span className="text-[8px] font-mono tracking-widest block opacity-75 uppercase">Phase 04</span>
                    <span className="font-bold block mt-1 uppercase text-[9px] tracking-wider">Block Added</span>
                  </div>

                </div>

                {/* State Progress Message Banner */}
                <div className="bg-white border border-border-line p-4 rounded-xl text-center min-h-[48px] flex items-center justify-center font-semibold text-neutral-800">
                  {pbftState === "idle" && "Click 'Run Consensus Demo' to simulate Practical Byzantine Fault Tolerance validation."}
                  {pbftState === "propose" && "🔄 Transaction proposed. Broadcasting metadata details to active validator nodes..."}
                  {pbftState === "validate" && "⏳ Nodes are verifying digital signatures, timestamps, and smart contract compliance..."}
                  {pbftState === "consensus" && "🎉 Consensus Reached! Validators agreed to update the state log."}
                  {pbftState === "added" && "🚀 Block appended successfully! All synchronized node ledgers updated."}
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
