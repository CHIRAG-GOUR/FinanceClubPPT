"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TrendingUp, BarChart3, LineChart } from "lucide-react";

export default function SectionWelcome() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Background shape animations
      gsap.to(".bg-shape-1", {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".bg-shape-2", {
        x: "random(-150, 150)",
        y: "random(-150, 150)",
        duration: "random(15, 25)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".bg-shape-3", {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: "random(12, 22)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        ".welcome-element",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.3 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full flex items-center justify-center pt-20 px-6 md:px-12 bg-white relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="bg-shape-1 absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-100 mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="bg-shape-2 absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-100 mix-blend-multiply filter blur-3xl opacity-60"></div>
        <div className="bg-shape-3 absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-purple-100 mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto max-w-5xl flex flex-col items-center text-center gap-8 relative z-10">
        
        <div className="flex gap-4 mb-4 welcome-element">
          <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 shadow-sm border border-blue-100"><TrendingUp size={32} /></div>
          <div className="p-4 bg-emerald-50 rounded-2xl text-emerald-600 shadow-sm border border-emerald-100"><BarChart3 size={32} /></div>
          <div className="p-4 bg-purple-50 rounded-2xl text-purple-600 shadow-sm border border-purple-100"><LineChart size={32} /></div>
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight mb-2">
          <span className="block welcome-element text-brand-dark">Finance Club</span>
          <span className="block welcome-element text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 pb-2">Presents</span>
        </h1>
        
        <h3 className="welcome-element text-2xl md:text-3xl font-medium text-gray-500 mb-6 leading-tight max-w-3xl">
          Welcome to the premier hub for financial literacy, quantitative strategy, and elite networking.
        </h3>
        
        <p className="welcome-element text-lg text-gray-400 mt-8 font-medium tracking-widest uppercase">
          {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>
        
      </div>
    </div>
  );
}
