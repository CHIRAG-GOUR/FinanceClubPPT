"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Landmark, PiggyBank } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function SectionAchievements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let ctx: gsap.Context;
    const timer = setTimeout(() => {
      if (!containerRef.current) return;
      const scrollerElement = document.getElementById("presentation-container") || window;
      ctx = gsap.context(() => {
      gsap.from(".measure-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          scroller: scrollerElement,
          start: "top 60%"
        },
        y: 30,
        
        duration: 0.8,
        stagger: 0.15,
      });
      gsap.from(".measures-image", {
        scrollTrigger: {
          trigger: containerRef.current,
          scroller: scrollerElement,
          start: "top 60%"
        },
        
        scale: 0.9,
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
    <div ref={containerRef} className="h-full w-full flex items-center justify-center px-6 md:px-12 bg-transparent relative overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 1000 1000" className="w-full h-full absolute inset-0 preserve-3d">
          <motion.circle 
            cx="500" cy="500" r="300"
            fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="10 10"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle 
            cx="500" cy="500" r="450"
            fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="5 20"
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row gap-12 items-center max-w-6xl relative z-10">
        
        {/* Left Side: Content */}
        <div className="flex-1 w-full text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark">How Do Governments Counter Inflation?</h2>
          <p className="text-xl text-gray-700 font-medium mb-10">
            Central banks and policymakers utilize targeted strategies to cool down the economy and stabilize prices.
          </p>
          
          <div className="flex flex-col gap-6 text-left">
            <div className="measure-card glass-card bg-white/70 backdrop-blur-xl border-l-4 border-l-brand-emerald border-t-white/50 border-r-white/50 border-b-white/50 p-6 flex gap-6 items-center hover:bg-white/90 transition-all">
              <div className="w-14 h-14 bg-emerald-50 text-brand-emerald rounded-full flex items-center justify-center shrink-0 border border-emerald-100">
                <Landmark size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-1">Monetary Policy</h3>
                <p className="text-gray-700 font-medium text-sm">Central banks increase interest rates, making borrowing more expensive to reduce consumer demand.</p>
              </div>
            </div>

            <div className="measure-card glass-card bg-white/70 backdrop-blur-xl border-l-4 border-l-brand-blue border-t-white/50 border-r-white/50 border-b-white/50 p-6 flex gap-6 items-center hover:bg-white/90 transition-all">
              <div className="w-14 h-14 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center shrink-0 border border-blue-100">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-1">Fiscal Policy</h3>
                <p className="text-gray-700 font-medium text-sm">Governments reduce spending or increase taxes to pull excess liquidity out of the economy.</p>
              </div>
            </div>

            <div className="measure-card glass-card bg-white/70 backdrop-blur-xl border-l-4 border-l-amber-500 border-t-white/50 border-r-white/50 border-b-white/50 p-6 flex gap-6 items-center hover:bg-white/90 transition-all">
              <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center shrink-0 border border-amber-100">
                <PiggyBank size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-1">Supply-Side Fixes</h3>
                <p className="text-gray-700 font-medium text-sm">Enhancing productivity and resolving supply chain bottlenecks to increase availability of goods.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 w-full relative h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl measures-image border border-white/20">
          <Image 
            src="/images/inflation_measures.png" 
            alt="Mechanical Interest Rate dial" 
            fill
            className="object-cover"
          />
        </div>

      </div>
    </div>
  );
}
