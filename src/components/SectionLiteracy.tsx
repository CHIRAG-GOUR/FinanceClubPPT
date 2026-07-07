"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function SectionLiteracy() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".literacy-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
      gsap.from(".theory-image", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%"
        },
        scale: 0.95,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full flex items-center justify-center px-6 md:px-12 bg-transparent relative overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex justify-around items-end">
        {[40, 70, 30, 80, 50, 90, 60, 20].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: "0%" }}
            animate={{ height: `${height}%` }}
            transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="w-8 md:w-16 bg-gradient-to-t from-brand-blue to-transparent rounded-t-xl"
          />
        ))}
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="flex-1 w-full max-w-2xl text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark">Why not just print more money?</h2>
          <p className="text-xl text-gray-700 font-medium mb-10">
            To understand this, we must look at the foundation of monetary economics.
          </p>
          
          <div className="literacy-card glass-card bg-white/70 backdrop-blur-xl border border-white/50 p-8 md:p-12 text-left relative overflow-hidden shadow-xl">
            <div className="absolute top-6 left-6 text-brand-blue opacity-10">
              <Quote size={120} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-brand-blue mb-4">The Quantity Theory of Money</h3>
              
              <p className="text-lg text-gray-800 leading-relaxed font-semibold mb-4 italic">
                "The general price level of goods and services is directly proportional to the amount of money in circulation."
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed font-medium mb-6">
                This means if a government wants to double the currency notes in the market, it must also introduce an equal amount of goods and services.
              </p>
              
              <div className="p-4 bg-red-50/90 border-l-4 border-red-500 rounded-r-lg text-sm shadow-inner">
                <p className="text-gray-800 font-semibold">
                  Whenever more money is put into the market without increasing the amount of goods and services, the demand increases while supply remains limited. As a result, commodity prices increase—eventually driving up inflation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 w-full relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl theory-image border border-white/20">
          <Image 
            src="/images/quantity_theory.png" 
            alt="Massive impenetrable metallic bank vault door" 
            fill
            className="object-cover"
          />
        </div>

      </div>
    </div>
  );
}
