import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "The Journey", id: "problem" },
    { name: "Trace a Batch", id: "trace" },
    { name: "Blockchain Ledger", id: "blockchain" }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-3 shadow-xs border-border-line"
            : "bg-transparent py-5 border-transparent"
        }`}
      >
        <div className="editorial-container flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex flex-col cursor-pointer select-none"
            onClick={() => scrollToSection("home")}
          >
            <span className="font-instrument text-2xl font-bold tracking-tight text-primary-text">
              PUN®
            </span>
            <span className="text-[9px] uppercase tracking-widest text-secondary-text font-medium leading-none mt-0.5">
              Pharmaceutical Utility Network
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xs font-inter uppercase tracking-wider text-secondary-text hover:text-primary-text transition-colors duration-200 cursor-pointer font-semibold"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection("trace")}
              className="group flex items-center gap-2 bg-black text-white hover:bg-neutral-800 text-xs font-inter font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 transform hover:scale-[1.03] shadow-xs cursor-pointer"
            >
              Explore the Network
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-primary-text hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white lg:hidden transition-all duration-300 transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full justify-between p-8 pt-24">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                style={{ transitionDelay: `${idx * 50}ms` }}
                className={`text-left font-instrument text-4xl text-neutral-800 hover:text-black transition-all duration-300 transform ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div
            className={`border-t border-border-line pt-6 flex flex-col gap-4 transform transition-all duration-500 delay-300 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <button
              onClick={() => scrollToSection("trace")}
              className="w-full flex items-center justify-center gap-2 bg-black text-white hover:bg-neutral-800 text-xs font-inter font-semibold uppercase tracking-wider py-4 rounded-full transition-all duration-300 cursor-pointer"
            >
              Trace a Sample Batch
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[10px] text-center text-secondary-text uppercase tracking-widest">
              Pharmaceutical Utility Network • PUN®
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
