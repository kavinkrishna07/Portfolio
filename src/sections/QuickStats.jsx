import React, { useEffect, useState, useRef } from 'react';
import { Code2, Terminal, Cpu, GraduationCap, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Animated Count Up Hook
function useCounter(targetValue, isDecimal = false, duration = 1600, trigger = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const steps = 40;
    const stepDuration = duration / steps;
    const increment = targetValue / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(prev => prev + increment);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [targetValue, duration, trigger]);

  if (isDecimal) {
    return count.toFixed(2);
  }
  return Math.floor(count);
}

function StatCard({ stat, inView }) {
  const animatedVal = useCounter(stat.value, stat.isDecimal, 1600, inView);

  const iconMap = {
    Code2: Code2,
    Terminal: Terminal,
    Cpu: Cpu,
    GraduationCap: GraduationCap,
    Award: Award,
  };

  const IconComponent = iconMap[stat.icon] || Code2;

  return (
    <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 relative overflow-hidden group flex flex-col justify-between">
      {/* Ambient Gold Glow on Highlight */}
      {stat.highlight && (
        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/5 rounded-full blur-xl group-hover:bg-amber-400/15 transition-all pointer-events-none" />
      )}

      <div className="flex items-center justify-between mb-4">
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-amber-400/30 group-hover:bg-amber-400/10 text-amber-400 transition-colors">
          <IconComponent className="w-5 h-5" />
        </div>
        {stat.highlight && (
          <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(229,193,88,0.8)]" />
        )}
      </div>

      <div>
        <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-white group-hover:text-amber-300 transition-colors flex items-baseline">
          <span>{animatedVal}</span>
          <span className="text-amber-400 text-2xl ml-0.5">{stat.suffix}</span>
        </div>
        <div className="text-xs text-gray-400 font-mono mt-1 font-medium tracking-wide uppercase">
          {stat.label}
        </div>
      </div>
    </div>
  );
}

export default function QuickStats() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 px-4 sm:px-6 lg:px-8 relative bg-[#08090D] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {portfolioData.quickStats.map((stat, idx) => (
            <StatCard key={idx} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
