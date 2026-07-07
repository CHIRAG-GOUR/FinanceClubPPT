"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ChevronDown, DollarSign, Percent, TrendingUp, PieChart, BarChart } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const graphicsRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    // GSAP Initial Animations
    const ctx = gsap.context(() => {
      // Title split animation effect
      gsap.fromTo(
        ".hero-title-word",
        { y: 100, opacity: 0, rotateX: -45 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power3.out" }
      );

      // Graphics Animation
      gsap.fromTo(
        ".hero-graphic-card",
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: "elastic.out(1, 0.7)",
          delay: 0.5,
        }
      );

      // Floating icons animation
      gsap.to(".floating-icon", {
        y: "-=20",
        rotation: "+=10",
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          from: "random",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div style={{ y, opacity }} className="flex-1 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-brand-emerald text-sm font-semibold mb-6 hero-subtitle bg-white/80">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
            </span>
            2026-2027 Cohort
          </div>
          
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[1.1] mb-6 perspective-1000"
          >
            <span className="block overflow-hidden pb-2">
              <span className="inline-block hero-title-word text-brand-dark">Shaping</span>
            </span>
            <span className="block overflow-hidden pb-2">
              <span className="inline-block hero-title-word text-transparent bg-clip-text bg-gradient-to-r from-brand-emerald to-brand-blue">
                Financial
              </span>
            </span>
            <span className="block overflow-hidden pb-2">
              <span className="inline-block hero-title-word text-brand-dark">Leaders.</span>
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed hero-subtitle">
            Master the markets, build quantitative strategies, and join a network of elite student investors. The premier hub for financial literacy and innovation.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 hero-subtitle">
            <button className="px-8 py-4 rounded-full bg-brand-emerald hover:bg-emerald-600 text-white font-bold transition-all shadow-lg hover:shadow-xl">
              Discover the Club
            </button>
            <button className="px-8 py-4 rounded-full glass-panel text-brand-dark font-medium hover:bg-black/5 transition-all flex items-center gap-2">
              <BarChart size={18} /> View Performance
            </button>
          </div>
        </motion.div>

        {/* Visual Content / Dashboard UI */}
        <div ref={graphicsRef} className="flex-1 relative w-full h-[600px] hidden md:block">
          {/* Main Chart Card */}
          <div className="hero-graphic-card absolute top-10 right-10 w-80 rounded-2xl glass-panel p-6 border-t border-l border-white shadow-xl backdrop-blur-xl bg-white/80">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-sm text-gray-500 font-medium">Total AUM (Virtual)</p>
                <h3 className="text-2xl font-bold text-brand-dark">$2.4M</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-brand-emerald/20 flex items-center justify-center text-brand-emerald">
                <TrendingUp size={20} />
              </div>
            </div>
            
            <div className="h-32 flex items-end gap-2">
              {[40, 70, 45, 90, 65, 100, 80].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 1, delay: 1 + i * 0.1, ease: "easeOut" }}
                  className="w-full bg-gradient-to-t from-brand-blue to-brand-emerald rounded-t-sm opacity-90"
                />
              ))}
            </div>
          </div>

          {/* Secondary Metric Card */}
          <div className="hero-graphic-card absolute bottom-20 right-40 w-64 rounded-2xl glass-panel p-6 z-20 shadow-xl bg-white/90">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <svg viewBox="0 0 36 36" className="w-full h-full stroke-current text-brand-emerald">
                  <path
                    className="text-gray-200"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <motion.path
                    initial={{ strokeDasharray: "0, 100" }}
                    animate={{ strokeDasharray: "75, 100" }}
                    transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-sm text-brand-dark">
                  75%
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Win Rate</p>
                <p className="font-semibold text-brand-dark">Algorithmic Trading</p>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="floating-icon absolute top-32 left-10 w-12 h-12 rounded-full glass-panel bg-white shadow-lg flex items-center justify-center text-brand-blue border border-gray-100">
            <DollarSign size={24} />
          </div>
          <div className="floating-icon absolute bottom-40 right-10 w-14 h-14 rounded-full glass-panel bg-white shadow-lg flex items-center justify-center text-brand-red border border-gray-100">
            <Percent size={24} />
          </div>
          <div className="floating-icon absolute top-1/2 left-20 w-10 h-10 rounded-full glass-panel bg-white shadow-lg flex items-center justify-center text-brand-emerald border border-gray-100">
            <PieChart size={20} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
