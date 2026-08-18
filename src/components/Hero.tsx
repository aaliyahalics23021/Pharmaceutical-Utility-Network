import { useEffect, useRef, useState } from "react";
import { ArrowDown, CornerDownRight } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId: number;

    const checkFade = () => {
      if (video && video.duration) {
        const current = video.currentTime;
        const duration = video.duration;
        const fadeTime = 0.5; // 0.5 seconds fade

        if (current < fadeTime) {
          // Fade in
          setVideoOpacity(current / fadeTime);
        } else if (current > duration - fadeTime) {
          // Fade out
          setVideoOpacity(Math.max(0, (duration - current) / fadeTime));
        } else {
          // Full opacity
          setVideoOpacity(1);
        }
      }
      animationFrameId = requestAnimationFrame(checkFade);
    };

    const handleEnded = () => {
      setVideoOpacity(0);
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play().catch((err) => console.log("Video playback interrupted: ", err));
        }
      }, 100);
    };

    video.addEventListener("ended", handleEnded);
    
    // Start tracking once video metadata is loaded
    const handleLoadedMetadata = () => {
      animationFrameId = requestAnimationFrame(checkFade);
    };
    
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    
    // If already loaded
    if (video.readyState >= 1) {
      animationFrameId = requestAnimationFrame(checkFade);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (video) {
        video.removeEventListener("ended", handleEnded);
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white"
    >
      {/* Video Background Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
          muted
          playsInline
          autoPlay
          className="w-full h-full object-cover scale-[1.02] filter grayscale opacity-40 transition-opacity duration-300"
          style={{ opacity: videoOpacity * 0.25 }} // Subdued to keep text readable
        />
        {/* Subtle white radial and linear gradients for editorial integration */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_40%,#FFFFFF_95%]" />
        <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-white/95" />
      </div>

      <div className="editorial-container relative z-10 w-full text-center flex flex-col items-center">
        {/* Eyebrow label */}
        <div className="mb-6 opacity-0 animate-fade-in [animation-fill-mode:forwards]">
          <span className="text-[10px] sm:text-xs font-inter font-bold tracking-[0.25em] text-neutral-500 uppercase">
            Pharmaceutical Utility Network
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-instrument text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] text-black tracking-tight max-w-5xl mb-8 select-none text-balance opacity-0 animate-fade-in [animation-delay:200ms] [animation-fill-mode:forwards]">
          <span className="text-black">Trust,</span> <span className="text-neutral-400 font-light italic">traced from</span> <span className="text-black">manufacture to patient.</span>
        </h1>

        {/* Supporting description */}
        <p className="font-inter text-base sm:text-lg md:text-xl text-secondary-text max-w-2xl mb-12 leading-relaxed opacity-0 animate-fade-in [animation-delay:400ms] [animation-fill-mode:forwards]">
          A permissioned blockchain network designed to make pharmaceutical supply chains more transparent, traceable, and tamper-evident.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in [animation-delay:600ms] [animation-fill-mode:forwards] w-full max-w-md sm:max-w-none">
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="w-full sm:w-auto bg-black text-white hover:bg-neutral-800 text-xs font-inter font-semibold uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-[1.03] cursor-pointer shadow-md"
          >
            See How It Works
          </button>
          <button
            onClick={() => scrollToSection("trace")}
            className="w-full sm:w-auto bg-white border border-border-line text-black hover:bg-neutral-50 text-xs font-inter font-semibold uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-[1.03] flex items-center justify-center gap-2 cursor-pointer"
          >
            Trace a Sample Batch
            <CornerDownRight className="w-3.5 h-3.5 text-neutral-400" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("problem")}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400 hover:text-black transition-colors duration-300 opacity-0 animate-fade-in [animation-delay:800ms] [animation-fill-mode:forwards] cursor-pointer"
          aria-label="Scroll to the problem section"
        >
          <span className="text-[9px] uppercase tracking-widest font-semibold font-inter">The Journey</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>
    </section>
  );
}
