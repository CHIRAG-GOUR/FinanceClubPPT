"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Play, Pause } from "lucide-react";
import gsap from "gsap";

export default function PresentationNav({ totalSections }: { totalSections: number }) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = document.getElementById("presentation-container");
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const windowWidth = window.innerWidth;
      const current = Math.round(scrollPosition / windowWidth);
      setCurrentSection(current);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    if (index < 0 || index >= totalSections) return;
    const container = document.getElementById("presentation-container");
    if (container) {
      container.scrollTo({
        left: index * window.innerWidth,
        behavior: "smooth"
      });
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      playIntervalRef.current = setInterval(() => {
        setCurrentSection((prev) => {
          const next = prev < totalSections - 1 ? prev + 1 : 0;
          scrollToSection(next);
          return next;
        });
      }, 10000); // 10 seconds per slide
    } else {
      if (playIntervalRef.current) clearInterval(playIntervalRef.current);
    }
    return () => {
      if (playIntervalRef.current) clearInterval(playIntervalRef.current);
    };
  }, [isPlaying, totalSections]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown") {
        setCurrentSection((prev) => {
          const next = prev < totalSections - 1 ? prev + 1 : prev;
          scrollToSection(next);
          return next;
        });
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp") {
        setCurrentSection((prev) => {
          const next = prev > 0 ? prev - 1 : prev;
          scrollToSection(next);
          return next;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalSections]);

  return (
    <>
      <div className="fixed top-8 right-8 z-[60]">
        <button 
          onClick={toggleFullscreen}
          className="p-3 bg-brand-dark/90 backdrop-blur-md border border-white/10 rounded-full text-white/90 hover:text-white transition-all duration-300 hover:scale-110 shadow-xl"
          title="Toggle Fullscreen"
        >
          <Maximize size={20} />
        </button>
      </div>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex flex-row gap-4 items-center">
        <button 
          onClick={() => scrollToSection(currentSection - 1)}
          disabled={currentSection === 0}
          className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-brand-dark bg-white/80 backdrop-blur-md border border-white hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex flex-row gap-2">
          {Array.from({ length: totalSections }).map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSection ? "bg-brand-emerald w-8" : "bg-gray-300"}`}
            />
          ))}
        </div>

        <button 
          onClick={() => scrollToSection(currentSection + 1)}
          disabled={currentSection === totalSections - 1}
          className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-brand-dark bg-white/80 backdrop-blur-md border border-white hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
        >
          <ChevronRight size={20} />
        </button>

        <button 
          onClick={togglePlay}
          className={`w-10 h-10 ml-2 rounded-full flex items-center justify-center transition-all shadow-md border ${isPlaying ? 'bg-emerald-500 text-white border-emerald-500' : 'glass-card backdrop-blur-md text-brand-dark bg-white/80 hover:bg-gray-100 border-white'}`}
          title={isPlaying ? "Pause Slide Show" : "Start Slide Show"}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-1" />}
        </button>
      </div>
    </>
  );
}
