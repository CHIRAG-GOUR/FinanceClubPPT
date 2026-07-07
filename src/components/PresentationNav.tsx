"use client";

import { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import gsap from "gsap";

export default function PresentationNav({ totalSections }: { totalSections: number }) {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const container = document.getElementById("presentation-container");
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const windowHeight = window.innerHeight;
      const current = Math.round(scrollPosition / windowHeight);
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
        top: index * window.innerHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4 items-center">
      <button 
        onClick={() => scrollToSection(currentSection - 1)}
        disabled={currentSection === 0}
        className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-brand-dark hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <ChevronUp size={20} />
      </button>
      
      <div className="flex flex-col gap-2">
        {Array.from({ length: totalSections }).map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSection ? "bg-brand-emerald h-8" : "bg-gray-300"}`}
          />
        ))}
      </div>

      <button 
        onClick={() => scrollToSection(currentSection + 1)}
        disabled={currentSection === totalSections - 1}
        className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-brand-dark hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <ChevronDown size={20} />
      </button>
    </div>
  );
}
