"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BookMarked } from "lucide-react";
import InflationChart from "./InflationChart";

export default function SectionLecture() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".lecture-element",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.3 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full flex items-center justify-center pt-20 px-6 md:px-12 bg-gray-50/50 relative">
      <div className="container mx-auto max-w-5xl relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        <div className="flex-1">
          <div className="lecture-element inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-amber-600 text-sm font-semibold mb-6">
            <BookMarked size={16} /> Today's Session
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-6">
            <span className="block lecture-element text-brand-dark">Study On</span>
            <span className="block lecture-element text-amber-500">Inflation.</span>
          </h2>
          <p className="lecture-element text-xl text-gray-600 leading-relaxed mb-8">
            Today we officially kick off our deep dive into macroeconomic forces. We will be exploring the mechanics of inflation, its causes, its profound effects, and historical precedents.
          </p>
        </div>
        
        <div className="flex-1 w-full flex flex-col gap-6 max-w-lg">
          <div className="lecture-element bg-brand-dark p-6 rounded-3xl shadow-2xl h-[400px] border border-gray-800">
             <InflationChart />
          </div>
        </div>
      </div>
    </div>
  );
}
