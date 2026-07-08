"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function SectionJoin() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".join-content", {
        scrollTrigger: {
          trigger: containerRef.current,
          scroller: "#presentation-container",
          start: "top 60%"
        },
        scale: 0.95,
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "back.out(1.5)",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const members = [
    "Prakhar Bhargava", "Mohit Bijarnia", "Daivik Kumar", "Pranjal Gangwar",
    "Parishi Jain", "Amit Kumar", "Mohit", "Tejas", "Shlok", "Nishqa",
    "Aditya", "Abhinav", "Bhumika Sharma", "Muskaan", "Ayush Singal",
    "Kanishk Sain", "Manvendra Singh Yadav", "Animesh", "Yash", "Vihaan Singhal",
    "Akshat Soral", "Atharv Gaur"
  ];

  return (
    <div ref={containerRef} className="h-full w-full flex items-center justify-center px-6 md:px-12 bg-transparent relative overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-32 w-96 h-96 bg-brand-emerald/30 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -left-32 w-96 h-96 bg-brand-blue/30 blur-[150px] rounded-full"
        />
      </div>

      <div className="join-content w-full max-w-6xl glass-card bg-white/70 backdrop-blur-2xl p-10 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-white/50 flex flex-col md:flex-row gap-12 relative z-10 rounded-3xl">
        
        {/* Left Side: Members */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-8 text-brand-dark">
            <Users size={32} className="text-brand-emerald" />
            <h2 className="text-4xl font-bold">Finance Club Members</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
            {members.map((name, i) => (
              <div key={i} className="text-base text-gray-700 font-semibold flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-emerald shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                {name}
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Side: Acknowledgements */}
        <div className="w-full md:w-80 flex flex-col justify-center">
          <div className="bg-white/60 p-8 rounded-3xl border border-white shadow-sm text-center backdrop-blur-md">
            <GraduationCap size={48} className="text-brand-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Special Thanks</h3>
            
            <div className="mb-6">
              <p className="text-brand-dark font-black text-lg">Avinash Choudhary</p>
              <p className="text-sm text-brand-blue font-bold tracking-wider uppercase mt-1">Mentor</p>
            </div>
            
            <div>
              <p className="text-brand-dark font-black text-lg">Dr. Richa Cangan</p>
              <p className="text-sm text-brand-emerald font-bold tracking-wider uppercase mt-1">Club Coordinator</p>
            </div>
          </div>
        </div>
        
      </div>

      <footer className="absolute bottom-6 left-0 right-0 text-center text-sm text-gray-500 font-medium z-10">
        &copy; {new Date().getFullYear()} Finance Club. All rights reserved.
      </footer>
    </div>
  );
}
