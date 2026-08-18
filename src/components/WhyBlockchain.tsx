import { ShieldCheck, Eye, Compass, Hourglass, ShieldAlert } from "lucide-react";

export default function WhyBlockchain() {
  const comparisonRows = [
    {
      label: "Database Integrity",
      traditional: "Records exist in siloed databases, open to unauthorized internal modification.",
      blockchain: "Shared ledger, requiring multi-signature validation before committing."
    },
    {
      label: "Data Visibility",
      traditional: "Limited cross-organization visibility, causing coordination gaps.",
      blockchain: "Real-time, end-to-end trace queries for all authorized entities."
    },
    {
      label: "System Security",
      traditional: "Central point of failure. Access depends on single administrator authority.",
      blockchain: "Decentralized consensus. Tampering breaks cryptographic linkages."
    },
    {
      label: "Audit Capabilities",
      traditional: "Alterations are hard to trace and require extensive digital forensic reviews.",
      blockchain: "Immutable transaction logs. Tamper attempts are visible instantly."
    },
    {
      label: "Reconciliation",
      traditional: "Manual verification, spreadsheet exchanges, and delays.",
      blockchain: "Automated smart contracts verify coordinates and state instantly."
    }
  ];

  const benefits = [
    {
      icon: <Compass className="w-5 h-5 text-neutral-800" />,
      title: "End-to-End Traceability",
      desc: "Audit the movement of pharmaceutical items from manufacture facility coordinates to final pharmacy dispense scans."
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-neutral-800" />,
      title: "Tamper Resistance",
      desc: "Cryptographic hash linking ensures that attempts to rewrite history instantly invalidate pointers, alerting the entire network."
    },
    {
      icon: <Eye className="w-5 h-5 text-neutral-800" />,
      title: "Full Transparency",
      desc: "All authorized parties share access to the same synchronized history database, eliminating information asymmetries."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-neutral-800" />,
      title: "Stricter Accountability",
      desc: "Every transaction, custody handoff, and quality check is digitally signed by the initiating participant's private key."
    },
    {
      icon: <Hourglass className="w-5 h-5 text-neutral-800" />,
      title: "Instant Verification",
      desc: "Verify product paths instantly by scanning QR codes, bypassing manual database requests and paperwork checks."
    }
  ];

  return (
    <section id="why-blockchain" className="py-24 sm:py-32 bg-white border-t border-border-line">
      <div className="editorial-container">
        
        {/* Title */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-inter font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-3">
            Comparative Analysis
          </span>
          <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-black tracking-tight leading-[1.0]">
            Why not simply use a traditional database?
          </h2>
          <p className="font-inter text-secondary-text mt-6 text-sm sm:text-base max-w-xl">
            A comparison between traditional database silos and a private permissioned blockchain network.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="border border-border-line rounded-2xl overflow-hidden mb-16 shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-inter border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-neutral-50 border-b border-border-line font-bold text-black uppercase tracking-wider text-[10px]">
                  <th className="p-5 md:p-6 w-1/4">Aspect</th>
                  <th className="p-5 md:p-6 w-3/8">Traditional Database</th>
                  <th className="p-5 md:p-6 w-3/8">Permissioned Blockchain</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-line text-neutral-600">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-5 md:p-6 font-bold text-black uppercase tracking-wider text-[10px]">{row.label}</td>
                    <td className="p-5 md:p-6 leading-relaxed">{row.traditional}</td>
                    <td className="p-5 md:p-6 font-semibold text-neutral-900 leading-relaxed bg-neutral-50/20">{row.blockchain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Central Takeaway Banner */}
        <div className="bg-black text-white rounded-3xl p-8 md:p-12 mb-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-9xl font-instrument">PUN</div>
          <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase block mb-3">
            Core Thesis Takeaway
          </span>
          <h3 className="font-instrument text-3xl sm:text-4xl md:text-5xl max-w-2xl mx-auto leading-tight text-balance">
            Blockchain is useful when multiple organizations need to trust the same history.
          </h3>
        </div>

        {/* Benefits Grid */}
        <div>
          <span className="text-[10px] font-inter font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-8">
            Operational Advantages
          </span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-neutral-50 border border-border-line p-6 rounded-2xl flex flex-col justify-between hover:border-neutral-400 transition-colors duration-300"
              >
                <div>
                  <div className="w-9 h-9 rounded-full bg-white border border-border-line flex items-center justify-center mb-5">
                    {benefit.icon}
                  </div>
                  <h4 className="font-inter text-xs font-bold uppercase tracking-wider text-black mb-3">
                    {benefit.title}
                  </h4>
                  <p className="font-inter text-[11px] sm:text-xs text-neutral-500 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
