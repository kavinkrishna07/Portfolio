import React from 'react';
import { User, MapPin, Building2, Terminal, Code2, Cpu, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090A0F]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Software from <span className="gold-gradient-text">Logic to Execution</span>
          </h2>
          <div className="w-12 h-1 bg-amber-400/50 rounded-full" />
        </div>

        {/* Grid Layout: Profile Card + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Profile Image & Portrait Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group">
              {/* Outer Glowing Glass Frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500" />
              
              {/* Card Container */}
              <div className="relative glass-panel p-4 rounded-3xl border border-white/10 group-hover:border-amber-500/40 transition-all duration-300">
                {/* Rounded Portrait Image Wrapper */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden bg-slate-900 border border-white/10 flex items-center justify-center">
                  <img
                    src={portfolioData.personal.avatarUrl}
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if network image fails
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('avatar-fallback');
                    }}
                  />
                  
                  {/* Styled Fallback Avatar if image is replaced or loading */}
                  <div className="hidden [.avatar-fallback_&]:flex flex-col items-center justify-center text-center p-6 space-y-3">
                    <div className="w-20 h-20 rounded-full bg-amber-400/20 border-2 border-amber-400 flex items-center justify-center text-amber-300 font-extrabold text-2xl font-mono">
                      KG
                    </div>
                    <span className="text-xs text-gray-400 font-mono">
                      [ Kavin's Portrait Placeholder ]
                    </span>
                  </div>

                  {/* Glass Overlay Tag */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">Kavin Krishna G</span>
                    <span className="font-mono text-amber-400 text-[11px]">SDE Focus</span>
                  </div>
                </div>

                {/* Quick Info Badges */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-mono text-gray-300">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center space-x-2">
                    <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">Sri Eshwar CE</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Coimbatore</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Natural Bio & Core Mindset */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-white leading-snug">
              {portfolioData.personal.aboutHeadline}
            </h3>

            <div className="space-y-4 text-gray-300 leading-relaxed font-sans text-base">
              {portfolioData.personal.aboutBioParagraphs.map((para, idx) => (
                <p key={idx} className="border-l-2 border-amber-400/30 pl-4">
                  {para}
                </p>
              ))}
            </div>

            {/* Practical Mindset Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-xl border border-white/10 hover:border-amber-500/30 transition-colors">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">Algorithmic Problem Solving</h4>
                </div>
                <p className="text-xs text-gray-400">
                  Consistent practice on LeetCode & GFG, mastering DSA patterns, time complexities, and optimal space tradeoffs.
                </p>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-white/10 hover:border-amber-500/30 transition-colors">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">Full-Stack Application Design</h4>
                </div>
                <p className="text-xs text-gray-400">
                  Building modular REST APIs in Spring Boot & Node.js paired with responsive, modern React components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
