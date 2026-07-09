"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Handshake } from "lucide-react";

export default function SectionThankYou() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".thankyou-element",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.3 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full flex items-center justify-center pt-20 px-6 md:px-12 bg-gradient-to-tl from-white to-gray-50">
      <div className="container mx-auto max-w-4xl flex flex-col items-center text-center gap-8">
        
        <div className="thankyou-element mb-6 inline-flex p-5 rounded-full bg-blue-50 text-blue-600 shadow-sm border border-blue-100">
          <Handshake size={48} />
        </div>

        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-2">
          <span className="block thankyou-element text-brand-dark">Thank</span>
          <span className="block thankyou-element text-blue-600">You!</span>
        </h2>
        
        <p className="thankyou-element text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
          We appreciate your time and attention. Join us in our mission to spread financial literacy and build economic acumen.
        </p>


      </div>
    </div>
  );
}
