import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import TraceBatch from "./components/TraceBatch";
import BlockchainDemo from "./components/BlockchainDemo";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-neutral-100 antialiased">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* The Problem Section */}
      <Problem />

      {/* The Solution Section */}
      <Solution />

      {/* Interactive Batch Trace Section */}
      <TraceBatch />

      {/* Blockchain Tech & PBFT Consensus Section */}
      <BlockchainDemo />

      {/* Cinematic Footer */}
      <Footer />
    </div>
  );
}
