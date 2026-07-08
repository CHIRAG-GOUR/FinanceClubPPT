"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Banknote, Landmark, RefreshCw, Briefcase } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function SectionAnalytics() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let ctx: gsap.Context;
    const timer = setTimeout(() => {
      if (!containerRef.current) return;
      const scrollerElement = document.getElementById("presentation-container") || window;
      ctx = gsap.context(() => {
      gsap.from(".analytics-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          scroller: scrollerElement,
          start: "top 60%"
        },
        y: 60,
        
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
      gsap.from(".analytics-image", {
        scrollTrigger: {
          trigger: containerRef.current,
          scroller: scrollerElement,
          start: "top 60%"
        },
        scale: 0.9,
        
        duration: 1.5,
        ease: "power3.out",
      });
    }, containerRef);
    }, 100);
    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  const causes = [
    { icon: Banknote, title: "Money Supply", desc: "Printing currency beyond economic growth.", color: "text-brand-emerald", bg: "bg-emerald-50/80", border: "border-emerald-100" },
    { icon: Landmark, title: "Gov. Policies", desc: "Import restrictions raising production costs.", color: "text-brand-blue", bg: "bg-blue-50/80", border: "border-blue-100" },
    { icon: RefreshCw, title: "Exchange Rates", desc: "Currency fluctuation drops purchasing power.", color: "text-amber-500", bg: "bg-amber-50/80", border: "border-amber-100" },
    { icon: Briefcase, title: "Rising Wages", desc: "Increased salaries lead to higher consumer demand.", color: "text-purple-500", bg: "bg-purple-50/80", border: "border-purple-100" }
  ];

  return (
    <div ref={containerRef} className="h-full w-full flex items-center justify-center px-6 md:px-12 bg-transparent relative overflow-hidden">
      
      {/* Animated Background Graph */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg viewBox="0 0 1000 1000" className="w-full h-full absolute inset-0 preserve-3d">
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            d="M 0,800 Q 200,800 300,500 T 600,400 T 1000,100"
            fill="none"
            stroke="#10B981"
            strokeWidth="8"
            strokeDasharray="20 10"
          />
        </svg>
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-emerald/20 blur-[120px] rounded-full"
        />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="flex-1 w-full max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark">What Causes Inflation?</h2>
          <p className="text-xl text-gray-700 font-medium mb-10">
            Inflation is rarely driven by a single factor. It emerges from a complex interplay of monetary and fiscal conditions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-auto">
            {causes.map((cause, i) => (
              <div key={i} className="analytics-card glass-card bg-white/70 backdrop-blur-xl border border-white/50 p-6 flex flex-col relative overflow-hidden group hover:shadow-xl transition-all">
                <div className={`w-12 h-12 rounded-2xl ${cause.bg} ${cause.border} border flex items-center justify-center mb-4`}>
                  <cause.icon className={cause.color} size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{cause.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">{cause.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 w-full relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl analytics-image border border-white/20">
          <Image 
            src="/images/inflation_causes.png" 
            alt="Printing currency at central bank" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

      </div>
    </div>
  );
}
