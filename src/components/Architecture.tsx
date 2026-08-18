import { useState } from "react";
import { ARCHITECTURE_LAYERS } from "../data/mockData";
import { Layers, Database, ShieldAlert, Cpu, Laptop, Users } from "lucide-react";

export default function Architecture() {
  const [selectedLayerId, setSelectedLayerId] = useState<string>("stakeholders");

  const activeLayer = ARCHITECTURE_LAYERS.find((l) => l.id === selectedLayerId) || ARCHITECTURE_LAYERS[0];

  // Helper icons for layers
  const getLayerIcon = (id: string) => {
    switch (id) {
      case "stakeholders":
        return <Users className="w-5 h-5" />;
      case "application":
        return <Laptop className="w-5 h-5" />;
      case "smartcontract":
        return <Cpu className="w-5 h-5" />;
      case "consensus":
        return <ShieldAlert className="w-5 h-5" />;
      case "ledger":
        return <Database className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="architecture" className="py-24 sm:py-32 bg-white border-t border-border-line">
      <div className="editorial-container">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-inter font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-3">
            System Infrastructure
          </span>
          <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl text-black tracking-tight leading-[1.0]">
            System Architecture
          </h2>
          <p className="font-inter text-secondary-text mt-6 text-sm sm:text-base max-w-xl">
            A comprehensive overview of the integration stack, showcasing how client interactions flow down to unalterable state records.
          </p>
        </div>

        {/* Layout: Left Stack / Right Description Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Hand: The Layer Stack (Col 7) */}
          <div className="lg:col-span-7 space-y-3 relative">
            
            {/* Visual connector lines behind the blocks */}
            <div className="absolute left-[38px] top-6 bottom-6 w-0.5 border-l border-dashed border-neutral-350 z-0 hidden sm:block" />

            {/* Render layers top-to-bottom */}
            {ARCHITECTURE_LAYERS.map((layer) => {
              const isSelected = selectedLayerId === layer.id;
              return (
                <div
                  key={layer.id}
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`relative z-10 flex items-center gap-4 sm:gap-6 p-5 rounded-xl border text-left cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "bg-black border-black text-white shadow-md transform translate-x-1"
                      : "bg-neutral-50 border-border-line text-neutral-700 hover:bg-neutral-100/80"
                  }`}
                >
                  {/* Layer Indicator Icon */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isSelected ? "bg-neutral-800 text-white" : "bg-white text-neutral-800 border border-border-line"
                  }`}>
                    {getLayerIcon(layer.id)}
                  </div>

                  {/* Title and Short Description */}
                  <div className="flex-1">
                    <span className="text-[9px] font-mono tracking-wider opacity-60 block uppercase">
                      Layer Element
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider mt-0.5">
                      {layer.title}
                    </h3>
                    <p className={`text-[11px] mt-1 ${isSelected ? "text-neutral-300" : "text-neutral-500"}`}>
                      {layer.shortDesc}
                    </p>
                  </div>

                  {/* Hover check marker */}
                  <div className={`text-[10px] uppercase font-bold tracking-widest ${
                    isSelected ? "text-emerald-400" : "text-neutral-400"
                  }`}>
                    {isSelected ? "Active" : "Inspect"}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Hand: Detailed Panel (Col 5) */}
          <div className="lg:col-span-5 bg-neutral-50 rounded-2xl p-8 border border-border-line space-y-6">
            <div>
              <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest block">
                Selected Stack Element
              </span>
              <h3 className="font-instrument text-3xl text-neutral-800 mt-2">
                {activeLayer.title}
              </h3>
            </div>

            <p className="font-inter text-xs sm:text-sm text-secondary-text leading-relaxed">
              {activeLayer.fullDesc}
            </p>

            <div className="border-t border-border-line pt-6">
              <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest block mb-3">
                Key Components
              </span>
              <div className="flex flex-wrap gap-2">
                {activeLayer.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono bg-white border border-border-line text-neutral-700 px-3 py-1.5 rounded-lg shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-neutral-200/50 p-4 rounded-xl font-inter text-[10px] text-neutral-500 text-center">
              * Click any block in the architecture stack on the left to inspect its functionality.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
