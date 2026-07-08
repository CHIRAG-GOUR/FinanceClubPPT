"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { TrendingUp, Activity, PieChart, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function SectionPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stagger-text",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.5 }
      );
      
      gsap.fromTo(
        ".dashboard-card",
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.15, ease: "expo.out", delay: 1 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full flex items-center justify-center pt-20 px-6 md:px-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left: Text Content */}
        <div className="flex-1 max-w-2xl">
          <div className="stagger-text inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-brand-emerald text-sm font-semibold mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
            </span>
            Finance Club Presents
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-6">
            <span className="block stagger-text text-brand-dark">Inflation</span>
            <span className="block stagger-text text-brand-emerald text-3xl md:text-4xl font-normal mt-3 opacity-80 italic">[in-'flā-shən]</span>
          </h1>
          
          <p className="text-2xl text-gray-700 mb-10 max-w-lg leading-relaxed stagger-text font-medium border-l-4 border-brand-emerald pl-6">
            A rise in prices, which can be translated as the decline of purchasing power over time.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 stagger-text">
            <button className="px-8 py-4 rounded-full bg-brand-dark hover:bg-gray-800 text-white font-bold transition-all shadow-lg flex items-center gap-2">
              Explore Study <ArrowDownRight size={18} />
            </button>
          </div>
        </div>

        {/* Right: Portfolio Dashboard UI adapted for Inflation */}
        <div className="flex-1 w-full max-w-lg relative h-[500px]">
          {/* Main CPI Chart */}
          <div className="dashboard-card absolute top-0 right-0 w-full rounded-3xl glass-card p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] z-20">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Consumer Price Index (CPI)</p>
                <h3 className="text-3xl font-bold text-brand-dark">314.5</h3>
              </div>
              <div className="flex items-center gap-1 text-brand-red-600 bg-red-50 text-red-600 px-2 py-1 rounded-md text-sm font-bold border border-red-100">
                <TrendingUp size={16} /> +4.2% YoY
              </div>
            </div>
            
            <div className="h-40 flex items-end gap-2 mt-4">
              {[20, 25, 35, 45, 60, 80, 95, 100].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 1.5, delay: 1.5 + i * 0.1, ease: "easeOut" }}
                  className="w-full bg-gradient-to-t from-red-500 to-red-400 rounded-t-sm"
                />
              ))}
            </div>
          </div>

          {/* Purchasing Power Widget */}
          <div className="dashboard-card absolute -bottom-10 -left-10 w-64 rounded-3xl glass-card p-6 shadow-xl z-30">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-50 text-brand-blue rounded-xl">
                <Activity size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-dark">Purchasing Power</h4>
                <p className="text-xs text-gray-500">Value of $100</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">2010</span>
                  <span className="font-bold">$100.00</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 2.2 }}
                    className="bg-brand-emerald h-2 rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">Today</span>
                  <span className="font-bold">$71.40</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "71.4%" }}
                    transition={{ duration: 1, delay: 2.4 }}
                    className="bg-red-400 h-2 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
