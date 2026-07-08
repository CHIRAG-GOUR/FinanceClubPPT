"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertTriangle } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function SectionActivities() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let ctx: gsap.Context;
    const timer = setTimeout(() => {
      if (!containerRef.current) return;
      const scrollerElement = document.getElementById("presentation-container") || window;
      ctx = gsap.context(() => {
      gsap.from(".activity-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          scroller: scrollerElement,
          start: "top 60%"
        },
        x: -50,
        
        duration: 0.8,
      });
      
      gsap.from(".stat-number", {
        scrollTrigger: {
          trigger: containerRef.current,
          scroller: scrollerElement,
          start: "top 60%"
        },
        innerText: 0,
        duration: 2.5,
        snap: { innerText: 1 },
        delay: 0.5
      });
      
      gsap.from(".zimbabwe-image", {
        scrollTrigger: {
          trigger: containerRef.current,
          scroller: scrollerElement,
          start: "top 60%"
        },
        scale: 1.05,
        
        duration: 1.5,
        ease: "power2.out",
      });
    }, containerRef);
    }, 100);
    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full flex items-center justify-center bg-brand-dark relative overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 zimbabwe-image opacity-30">
        <Image 
          src="/images/hyperinflation_zimbabwe.png" 
          alt="100 Trillion Dollar Banknote" 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 px-6 md:px-12 flex flex-col justify-center h-full">
        
        <div className="activity-item max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-red-900/50 text-red-500 border border-red-500/30 flex items-center justify-center">
              <AlertTriangle size={28} />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">The Zimbabwe Case Study</h2>
              <p className="text-xl text-red-400 font-medium mt-1">Hyperinflation (2007 - 2009)</p>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-10">
            Zimbabwe did exactly what economic theory warns against. The government started printing more money, hoping to reduce inflation, but broke the Quantity Theory of Money. The outcome was disastrous. Instead of dropping, inflation rose at rocket speed, pushing the country into hyperinflation.
          </p>
          
          <div className="p-8 bg-black/40 backdrop-blur-md rounded-2xl border border-red-900/50 text-left max-w-xl">
            <p className="text-gray-400 uppercase tracking-widest text-sm font-bold mb-2">Peak Inflation Rate Reached</p>
            <div className="text-5xl md:text-7xl font-black text-red-500 mb-2">
              <span className="stat-number">79.6</span> Billion %
            </div>
            <p className="text-gray-400 font-medium">Monthly Inflation Rate at its peak</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
