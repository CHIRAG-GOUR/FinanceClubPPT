"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Target, ArrowRight } from "lucide-react";

export default function SectionMission() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".mission-element",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.3 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full flex items-center justify-center pt-20 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">

          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-2">
            <span className="block mission-element text-brand-dark">Our</span>
            <span className="block mission-element text-blue-600">Mission</span>
          </h2>
          <h3 className="mission-element text-2xl md:text-3xl font-medium text-gray-500 mb-6 leading-tight">
            Empowering Students with Financial Literacy.
          </h3>
          <p className="mission-element text-xl text-gray-600 leading-relaxed mb-8">
            To cultivate a community of financially literate students equipped with the knowledge, tools, and confidence to make informed economic decisions and thrive in a dynamic global economy.
          </p>
        </div>
        
        <div className="flex-1 w-full relative flex justify-center items-center h-[450px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl mission-element">
            <img src="/images/mission_students.png" alt="Mission" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
          <div className="mission-element relative z-10 w-full max-w-sm bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/50 -bottom-24 lg:-bottom-32 lg:-left-12">
            <h3 className="text-xl font-bold text-brand-dark mb-4">Core Objectives</h3>
            <ul className="space-y-3">
              {['Understand Market Dynamics', 'Develop Investment Strategies', 'Build Real-World Economic Acumen'].map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-50 p-1 rounded-full text-blue-600">
                    <ArrowRight size={14} />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
