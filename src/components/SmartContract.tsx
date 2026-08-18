import { useState } from "react";
import { Cpu, ToggleLeft, ToggleRight } from "lucide-react";

export default function SmartContract() {
  const [senderAuth, setSenderAuth] = useState(true);
  const [receiverAuth, setReceiverAuth] = useState(true);
  const [transferSigned, setTransferSigned] = useState(false);

  const isExecuted = senderAuth && receiverAuth && transferSigned;

  return (
    <section id="smart-contract" className="py-24 sm:py-32 bg-white border-t border-border-line">
      <div className="editorial-container">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-inter font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-3">
            Automation Protocol
          </span>
          <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-black tracking-tight leading-[1.0]">
            Rules that execute automatically.
          </h2>
          <p className="font-inter text-secondary-text mt-6 text-sm sm:text-base max-w-xl">
            Smart contracts translate compliance guidelines and operational handoff protocols into deterministic code, removing human delay and auditing errors.
          </p>
        </div>

        {/* Visual Mock-up Execution Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel: Simulation switches (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-instrument text-2xl text-black">
              Smart Contract Condition Evaluator
            </h3>
            <p className="font-inter text-xs text-neutral-500 leading-relaxed">
              Toggle the conditions below. The smart contract validates these inputs in real-time, executing the transaction on-chain ONLY when all requirements match.
            </p>

            <div className="space-y-4">
              {/* Parameter 1 */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-border-line bg-neutral-50 font-inter">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-neutral-800 uppercase block tracking-wider">Authorized Sender?</span>
                  <span className="text-[10px] text-neutral-500">Sender keys are whitelisted in registry.</span>
                </div>
                <button
                  onClick={() => setSenderAuth(!senderAuth)}
                  className="cursor-pointer text-neutral-800"
                >
                  {senderAuth ? (
                    <ToggleRight className="w-9 h-9 text-black" />
                  ) : (
                    <ToggleLeft className="w-9 h-9 text-neutral-300" />
                  )}
                </button>
              </div>

              {/* Parameter 2 */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-border-line bg-neutral-50 font-inter">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-neutral-800 uppercase block tracking-wider">Authorized Receiver?</span>
                  <span className="text-[10px] text-neutral-500">Receiver keys are registered.</span>
                </div>
                <button
                  onClick={() => setReceiverAuth(!receiverAuth)}
                  className="cursor-pointer text-neutral-800"
                >
                  {receiverAuth ? (
                    <ToggleRight className="w-9 h-9 text-black" />
                  ) : (
                    <ToggleLeft className="w-9 h-9 text-neutral-300" />
                  )}
                </button>
              </div>

              {/* Parameter 3 */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-border-line bg-neutral-50 font-inter">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-neutral-800 uppercase block tracking-wider">Transfer Confirmed?</span>
                  <span className="text-[10px] text-neutral-500">Receipt physically scanned and signed.</span>
                </div>
                <button
                  onClick={() => setTransferSigned(!transferSigned)}
                  className="cursor-pointer text-neutral-800"
                >
                  {transferSigned ? (
                    <ToggleRight className="w-9 h-9 text-black" />
                  ) : (
                    <ToggleLeft className="w-9 h-9 text-neutral-300" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right panel: Pseudocode execution (Col 7) */}
          <div className="lg:col-span-7 bg-neutral-900 rounded-3xl p-6 md:p-8 border border-neutral-950 shadow-md text-left text-white font-mono text-[11px] md:text-xs">
            <div className="flex justify-between items-center border-b border-neutral-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span className="text-[9px] uppercase tracking-widest text-neutral-400">OwnershipTransfer.sol</span>
              </div>
              <div className="flex items-center gap-1.5 bg-neutral-800 px-3 py-1 rounded-full">
                <span className={`w-2 h-2 rounded-full ${isExecuted ? "bg-emerald-500 animate-pulse" : "bg-rose-500"}`} />
                <span className="text-[9px] uppercase tracking-wider text-neutral-300">
                  {isExecuted ? "Executed" : "Awaiting Parameters"}
                </span>
              </div>
            </div>

            {/* Simulated Smart Contract code */}
            <div className="space-y-6">
              <div>
                <span className="text-neutral-500 block">// Evaluate required states</span>
                <p className="text-neutral-200">
                  <span className="text-rose-400">IF</span> (
                  <span className={senderAuth ? "text-emerald-400 font-bold" : "text-neutral-400"}>authorized_sender</span>
                  <span className="text-neutral-400"> && </span>
                  <span className={receiverAuth ? "text-emerald-400 font-bold" : "text-neutral-400"}>authorized_receiver</span>
                  <span className="text-neutral-400"> && </span>
                  <span className={transferSigned ? "text-emerald-400 font-bold" : "text-neutral-400"}>transfer_confirmed</span>
                  )
                </p>
              </div>

              <div>
                <span className="text-neutral-500 block">// Run state update when conditions match</span>
                <p className="text-neutral-200">
                  <span className="text-rose-400">THEN</span> &#123;
                  <span className="block pl-6 text-neutral-300">
                    record_ownership_transfer(
                    <span className="text-amber-400">batch_id</span>, 
                    <span className="text-amber-400">new_owner</span>
                    );
                  </span>
                  <span className="block pl-6 text-emerald-400 font-bold">
                    blockchain_ledger_verify(true);
                  </span>
                  &#125;
                </p>
              </div>
            </div>

            {/* Smart Contract execution feedback */}
            <div className="mt-8 pt-6 border-t border-neutral-800 flex justify-between items-center text-xs">
              <span className="text-neutral-400 font-sans">
                A smart contract automatically applies predefined rules when required conditions are met.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
