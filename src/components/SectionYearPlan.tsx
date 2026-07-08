"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Calendar, TrendingUp, Users, BookOpen, Presentation } from "lucide-react";

const events = [
  { icon: BookOpen, title: "Q1: Financial Literacy Basics", desc: "Understanding the economy, banking, and personal finance fundamentals." },
  { icon: TrendingUp, title: "Q2: Investment Strategies", desc: "Deep dive into stocks, bonds, mutual funds, and risk management." },
  { icon: Users, title: "Q3: Guest Speaker Series", desc: "Insights from industry professionals and successful alumni." },
  { icon: Presentation, title: "Q4: Portfolio Pitch & Competitions", desc: "Present your simulated portfolios and compete in the final showdown." },
];

export default function SectionYearPlan() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".year-title",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
      );
      gsap.fromTo(
        ".year-card",
        { y: 40,  scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.2)", delay: 0.6 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full flex items-center justify-center pt-20 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
         <img src="/images/yearplan_roadmap.png" alt="Roadmap" className="w-full h-full object-cover opacity-15 grayscale" />
         <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/90"></div>
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 year-title">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-sm font-semibold mb-4 mx-auto">
            <Calendar size={16} /> Roadmap
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-brand-dark">
            A Year in the <span className="text-purple-600">Finance Club</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">Our curriculum is designed to build your skills progressively.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 relative">
          {events.map((event, idx) => {
            const Icon = event.icon;
            return (
              <div key={idx} className="year-card flex-1 relative group">
                {idx !== events.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-purple-200 z-0">
                     <div className="absolute -right-[2px] -top-[4px] border-solid border-l-purple-200 border-l-[10px] border-y-transparent border-y-[5px] border-r-0"></div>
                  </div>
                )}
                
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all hover:-translate-y-2 relative z-10 h-full flex flex-col items-start">
                  <div className="p-4 rounded-2xl bg-purple-50 text-purple-600 mb-4 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
