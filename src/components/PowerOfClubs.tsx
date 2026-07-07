"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Lightbulb, Users, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Target,
    title: "Strategic Vision",
    description: "We analyze macro trends to build robust investment theses, treating the market as a complex system of interconnected events rather than isolated numbers.",
    color: "from-blue-100 to-indigo-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Lightbulb,
    title: "Quantitative Edge",
    description: "Leveraging data science, Python, and algorithmic modeling to find alpha where traditional fundamental analysis falls short.",
    color: "from-emerald-100 to-teal-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: Users,
    title: "Elite Network",
    description: "Connect with like-minded individuals, industry professionals, and alumni working at top-tier financial institutions globally.",
    color: "from-amber-100 to-orange-100",
    iconColor: "text-amber-600",
  },
  {
    icon: Zap,
    title: "Execution Excellence",
    description: "From stock pitches to trading competitions, we don't just theorize. We build real-world skills through intensive, hands-on execution.",
    color: "from-red-100 to-pink-100",
    iconColor: "text-red-600",
  },
];

export default function PowerOfClubs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the section and animate cards horizontally
      const cards = gsap.utils.toArray(".power-card");
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=2000",
        },
      });

      tl.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
      });

      // Animate text opacity based on scroll
      gsap.to(".power-text-content", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=500",
          scrub: true,
        },
        opacity: 0,
        y: -50,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="power-of-clubs" ref={sectionRef} className="relative bg-transparent">
      <div ref={containerRef} className="h-screen flex flex-col justify-center overflow-hidden pt-20">
        
        {/* Sticky Header Content */}
        <div ref={textRef} className="container mx-auto px-6 md:px-12 absolute top-32 left-0 right-0 z-10 power-text-content pointer-events-none">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-brand-dark">
            The Power of <span className="text-brand-blue">Community.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Finance is not a solo sport. Our club provides the infrastructure, data access, and peer network necessary to compound your knowledge at an accelerated rate.
          </p>
        </div>

        {/* Horizontal Scrolling Cards */}
        <div className="relative mt-32 md:mt-48 flex items-center h-96 pl-6 md:pl-12 lg:pl-32 w-[400vw] md:w-[200vw]" ref={cardsRef}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="power-card w-[85vw] md:w-[45vw] lg:w-[30vw] h-full flex-shrink-0 mr-8 md:mr-16"
              >
                <div className="bg-white border border-gray-200 shadow-xl w-full h-full rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${feature.color} rounded-full blur-[80px] opacity-40 group-hover:opacity-70 transition-opacity duration-700`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-8 ${feature.iconColor}`}>
                      <Icon size={32} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-brand-dark">{feature.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center gap-2 text-sm font-semibold text-brand-blue/70 group-hover:text-brand-blue transition-colors cursor-pointer w-max mt-8">
                    Explore Strategy <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
