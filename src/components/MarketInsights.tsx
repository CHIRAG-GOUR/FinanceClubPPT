"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Activity, Globe, Cpu } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function MarketInsights() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "left 70%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="market-insights" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
              Global Markets.<br />
              <span className="text-gray-400">Local Intelligence.</span>
            </h2>
            <p className="text-lg text-gray-600">
              We monitor global equities, macroeconomic indicators, and emerging tech sectors. Our weekly briefings distill market noise into actionable intelligence.
            </p>
          </div>
          <button className="px-6 py-3 rounded-full border border-gray-300 bg-white text-brand-dark hover:bg-gray-50 shadow-sm hover:shadow-md transition-all flex items-center gap-2 w-max text-sm font-medium">
            Read Weekly Reports <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">

          {/* Main Chart Widget */}
          <div className="bento-item md:col-span-2 md:row-span-2 bg-white rounded-3xl p-8 flex flex-col relative overflow-hidden shadow-xl border border-gray-100">
            <div className="flex justify-between items-start mb-8 z-10 relative">
              <div>
                <p className="text-sm text-gray-500 font-semibold mb-1">Equities Overview</p>
                <h3 className="text-2xl font-bold text-brand-dark">S&P 500 Analytics</h3>
              </div>
              <div className="flex items-center gap-2 text-brand-emerald bg-emerald-50 px-3 py-1 rounded-full text-sm font-medium">
                <Activity size={14} /> +12.4% YTD
              </div>
            </div>

            <div className="flex-1 relative w-full h-full min-h-[200px] flex items-end">
              {/* Simulated Line Chart using SVG */}
              <svg viewBox="0 0 800 300" className="w-full h-full absolute inset-0 overflow-visible" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#059669" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d="M0,250 C100,200 150,280 250,180 C350,80 400,220 500,120 C600,20 700,90 800,40"
                  fill="none"
                  stroke="#059669"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 1 }}
                  d="M0,250 C100,200 150,280 250,180 C350,80 400,220 500,120 C600,20 700,90 800,40 L800,300 L0,300 Z"
                  fill="url(#chartGradient)"
                />
              </svg>
            </div>
          </div>

          {/* Small Widget 1 */}
          <div className="bento-item bg-white rounded-3xl p-8 relative overflow-hidden group shadow-xl border border-gray-100">
            <div className="absolute top-0 right-0 p-6 text-brand-red opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe size={48} />
            </div>
            <div className="h-full flex flex-col justify-end relative z-10">
              <h4 className="text-xl font-bold mb-2 text-brand-dark">Macro Trends</h4>
              <p className="text-gray-600 text-sm">Interest rates, inflation, and central bank policies decoded.</p>
            </div>
          </div>

          {/* Small Widget 2 */}
          <div className="bento-item bg-white rounded-3xl p-8 relative overflow-hidden group shadow-xl border border-gray-100">
            <div className="absolute top-0 right-0 p-6 text-brand-blue opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu size={48} />
            </div>
            <div className="h-full flex flex-col justify-end relative z-10">
              <h4 className="text-xl font-bold mb-2 text-brand-dark">Tech & AI</h4>
              <p className="text-gray-600 text-sm">Analyzing semiconductor supply chains and software multiples.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
