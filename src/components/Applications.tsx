import { Apple, Car, Landmark, Sprout, Gem } from "lucide-react";

export default function Applications() {
  const sectors = [
    {
      icon: <Apple className="w-5 h-5 text-neutral-800" />,
      title: "Food Supply Chains",
      desc: "Trace perishables from harvesting source farms directly to supermarket checkout lanes, verifying temperature compliance."
    },
    {
      icon: <Car className="w-5 h-5 text-neutral-800" />,
      title: "Automotive Parts",
      desc: "Register critical component batch signatures to log recall issues and verify manufacturing origin details."
    },
    {
      icon: <Landmark className="w-5 h-5 text-neutral-800" />,
      title: "Finance & Auditing",
      desc: "Deploy multi-signature consensus for corporate transactions, offering real-time verifiable ledgers for tax compliance."
    },
    {
      icon: <Sprout className="w-5 h-5 text-neutral-800" />,
      title: "Agriculture Provenance",
      desc: "Track coffee bean lots, grains, and organic textiles through processing plants to confirm sustainable farming seals."
    },
    {
      icon: <Gem className="w-5 h-5 text-neutral-800" />,
      title: "Luxury Commerce",
      desc: "Attach digital product passports to diamonds and timepieces, combatting forgery and documenting ownership histories."
    }
  ];

  return (
    <section id="applications" className="py-24 sm:py-32 bg-white border-t border-border-line">
      <div className="editorial-container">
        
        {/* Title */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-inter font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-3">
            Cross-Sector Integration
          </span>
          <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-black tracking-tight leading-[1.0]">
            The same principle extends beyond healthcare.
          </h2>
          <p className="font-inter text-secondary-text mt-6 text-sm sm:text-base max-w-xl">
            A shared, verified ledger has applications in any sector where multiple stakeholders must coordinate and trust the same sequence of events.
          </p>
        </div>

        {/* Sectors horizontal flex scroll wrapper */}
        <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-4">
          {sectors.map((sec, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[240px] bg-neutral-50 border border-border-line rounded-2xl p-6 hover:border-neutral-400 transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-full bg-white border border-border-line flex items-center justify-center mb-5">
                  {sec.icon}
                </div>
                <h3 className="font-inter text-xs font-bold uppercase tracking-wider text-black mb-3">
                  {sec.title}
                </h3>
                <p className="font-inter text-xs text-neutral-500 leading-relaxed">
                  {sec.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
