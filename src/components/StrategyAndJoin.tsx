"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Lock, Briefcase, Zap, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function StrategyAndJoin() {
  const strategyRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Strategy timeline animation
      const items = gsap.utils.toArray(".timeline-item");
      items.forEach((item: any, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "left 80%",
          },
          x: i % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });

      // CTA scale up
      gsap.from(".cta-content", {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "left 75%",
        },
        scale: 0.9,
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "back.out(1.5)",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Strategy Section */}
      <section id="strategy" ref={strategyRef} className="py-32 relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">Investment Roadmap</h2>
            <p className="text-gray-600 text-lg">
              Our structured approach to portfolio management takes members from fundamental concepts to executing complex, data-driven trades.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block" />

            {[
              { title: "Fundamental Bootcamp", desc: "DCF modeling, accounting basics, and financial statement analysis.", icon: Lock },
              { title: "Macro Framework", desc: "Understanding how global events and policies dictate asset prices.", icon: Globe },
              { title: "Quantitative Methods", desc: "Introduction to Python for finance, pandas, and algorithmic backtesting.", icon: Zap },
              { title: "Real Capital Execution", desc: "Pitching ideas to the board and executing trades with club funds.", icon: Briefcase }
            ].map((step, i) => (
              <div key={i} className="timeline-item flex flex-col md:flex-row justify-between items-center w-full mb-12 relative">
                
                {/* Node marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-brand-emerald shadow-[0_0_10px_rgba(5,150,105,0.4)] hidden md:block z-10" />
                
                <div className={`w-full md:w-[45%] flex ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"} md:order-none ${i % 2 === 0 ? "order-1" : "order-2"}`}>
                  <div className={`bg-white border border-gray-100 shadow-xl p-6 rounded-2xl w-full text-left ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    <step.icon className={`mb-4 ${i % 2 === 0 ? "md:ml-auto" : ""} text-brand-emerald`} size={24} />
                    <h3 className="text-xl font-bold text-brand-dark mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </div>

                <div className="w-full md:w-[45%] hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Join Us Section */}
      <section id="join" ref={ctaRef} className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="cta-content bg-gradient-to-br from-brand-emerald to-teal-600 shadow-2xl rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            {/* Glow effects inside CTA */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-white/20 blur-[100px] rounded-full pointer-events-none" />
            
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
              Ready to <span className="text-brand-dark">Invest</span> in Your Future?
            </h2>
            <p className="text-lg md:text-xl text-teal-50 max-w-2xl mx-auto mb-10">
              Applications for the upcoming cohort are now open. We are looking for passionate, driven individuals ready to dive deep into the world of finance.
            </p>
            
            <button className="px-10 py-5 rounded-full bg-brand-dark text-white font-bold text-lg hover:bg-gray-900 transition-all transform hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center gap-2 mx-auto">
              Apply for 2026 Cohort <ArrowRight size={20} />
            </button>
            
            <p className="mt-6 text-sm text-teal-100 font-medium">Application Deadline: September 15th</p>
          </div>
        </div>
      </section>
    </>
  );
}
