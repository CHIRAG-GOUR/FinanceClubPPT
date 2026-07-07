"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingDown, Building, Home, Scale, Plane, LineChart } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function SectionStrategy() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".strategy-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
      gsap.from(".effects-image", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%"
        },
        x: -50,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const effects = [
    { title: "Depreciation of Money", icon: TrendingDown },
    { title: "Increased Bank Rates", icon: Building },
    { title: "High Living Costs", icon: Home },
    { title: "Income Inequality", icon: Scale },
    { title: "Drop in Exports", icon: Plane },
    { title: "Less Investment", icon: LineChart }
  ];

  return (
    <div ref={containerRef} className="h-full w-full flex items-center justify-center px-6 md:px-12 bg-transparent relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center opacity-30">
         <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-[800px] h-[800px] border-[1px] border-red-300 rounded-full absolute -right-64 -top-64"
         />
         <motion.div 
            animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-[600px] h-[600px] border-[1px] border-brand-blue/30 rounded-full absolute -left-32 -bottom-32 border-dashed"
         />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">
        
        {/* Left Side: Image */}
        <div className="flex-1 w-full relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl effects-image order-2 lg:order-1 border border-white/20">
          <Image 
            src="/images/inflation_effects.png" 
            alt="Brass balancing scale with gold and fiat money" 
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 w-full max-w-2xl order-1 lg:order-2 text-center lg:text-left">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">Effects of Inflation</h2>
          <p className="text-xl text-gray-700 font-medium mb-10 max-w-2xl mx-auto lg:mx-0">
            The ripple effects of rising prices disrupt both macroeconomic stability and individual financial security.
          </p>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {effects.map((effect, i) => (
              <div key={i} className="strategy-item glass-card bg-white/70 backdrop-blur-xl border border-white/50 p-6 flex flex-col items-center justify-center text-center hover:bg-white/90 transition-all">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-4 text-brand-dark">
                  <effect.icon size={24} className="text-red-500" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-brand-dark">{effect.title}</h4>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
