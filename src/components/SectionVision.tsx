"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Eye, Lightbulb } from "lucide-react";

export default function SectionVision() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".vision-element",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.3 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full flex items-center justify-center pt-20 px-6 md:px-12 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 text-left">

          
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-4">
            <span className="block vision-element text-brand-dark">Our</span>
            <span className="block vision-element text-brand-emerald">Vision</span>
          </h2>
          <h3 className="vision-element text-xl md:text-2xl font-medium text-gray-500 mb-8 leading-tight">
            A Future Driven by Informed Leaders.
          </h3>
          
          <div className="vision-element bg-white p-8 rounded-3xl shadow-xl border border-gray-100 mb-10 relative">
            <div className="absolute -top-4 -left-4 p-3 bg-yellow-100 rounded-full text-yellow-600 shadow-sm">
              <Lightbulb className="w-8 h-8" />
            </div>
            <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed italic mt-4">
              "We envision a generation that views finance not as an obstacle, but as a powerful lever to drive personal success and societal impact."
            </p>
          </div>
        </div>
        
        <div className="flex-1 w-full h-[500px] relative rounded-3xl overflow-hidden shadow-2xl vision-element">
          <img src="/images/vision_leader.png" alt="Vision Leader" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay"></div>
        </div>
      </div>
    </div>
  );
}
