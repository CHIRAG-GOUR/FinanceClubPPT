"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, BarChart2, Briefcase, Globe, Shield } from "lucide-react";

const navItems = [
  { name: "Home", id: "hero", icon: TrendingUp },
  { name: "The Club", id: "power-of-clubs", icon: Globe },
  { name: "Markets", id: "market-insights", icon: BarChart2 },
  { name: "Strategy", id: "strategy", icon: Shield },
  { name: "Join Us", id: "join", icon: Briefcase },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("hero")}>
          <div className="w-8 h-8 rounded bg-brand-emerald flex items-center justify-center">
            <TrendingUp size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Finance<span className="text-brand-emerald">Club</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1 glass-panel rounded-full px-2 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon size={14} className={isActive ? "text-brand-emerald" : ""} />
                <span className="relative z-10">{item.name}</span>
              </button>
            );
          })}
        </div>

        <button className="hidden md:block px-6 py-2 rounded-full bg-white text-brand-dark font-semibold text-sm hover:bg-brand-emerald hover:text-white transition-colors duration-300">
          Apply Now
        </button>
      </div>
    </motion.nav>
  );
}
