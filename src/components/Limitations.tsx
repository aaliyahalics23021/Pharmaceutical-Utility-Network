import { AlertCircle, ZapOff, DollarSign, ShieldAlert } from "lucide-react";

export default function Limitations() {
  const limitationsList = [
    {
      icon: <AlertCircle className="w-5 h-5 text-neutral-800" />,
      title: "Data Accuracy",
      desc: "Blockchain secures data from tampering once recorded, but cannot verify whether incorrect or falsified data was input initially (commonly known as the 'Garbage In, Garbage Out' limitation)."
    },
    {
      icon: <ZapOff className="w-5 h-5 text-neutral-800" />,
      title: "Network Adoption",
      desc: "For end-to-end trace auditing, all supply-chain operators (including local custom clearing, warehouses, and remote clinics) must actively run compatible software nodes."
    },
    {
      icon: <DollarSign className="w-5 h-5 text-neutral-800" />,
      title: "Cost & Legacy Integration",
      desc: "Connecting older Enterprise Resource Planning (ERP) databases, warehouse scanners, and logistics telemetry systems with private nodes requires initial configuration and investment."
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-neutral-800" />,
      title: "Privacy & Governance",
      desc: "Regulatory parameters and business trade secrets require sophisticated access controls and clear governing rules to determine who can inspect specific transactions."
    }
  ];

  return (
    <section id="limitations" className="py-24 sm:py-32 bg-subtle-bg border-t border-border-line">
      <div className="editorial-container">
        
        {/* Title */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-inter font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-3">
            Academic Assessment
          </span>
          <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-black tracking-tight leading-[1.0]">
            Blockchain doesn't solve everything.
          </h2>
          <p className="font-inter text-secondary-text mt-6 text-sm sm:text-base max-w-xl">
            A balanced evaluation of the real-world operational challenges when deploying blockchain technologies in the pharmaceutical supply chain.
          </p>
        </div>

        {/* Limitations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {limitationsList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-border-line rounded-2xl p-8 flex flex-col sm:flex-row gap-6 hover:border-neutral-400 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-neutral-50 border border-border-line flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-inter text-xs font-bold uppercase tracking-wider text-black">
                  {item.title}
                </h3>
                <p className="font-inter text-xs sm:text-sm text-secondary-text leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
