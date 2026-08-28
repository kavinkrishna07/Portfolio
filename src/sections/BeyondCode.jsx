import React from 'react';
import { Mic, MessageSquare, Users, Lightbulb, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function BeyondCode() {
  const { beyondCode } = portfolioData;

  const iconMap = {
    Mic: Mic,
    MessageSquare: MessageSquare,
    Users: Users,
    Lightbulb: Lightbulb
  };

  return (
    <section id="beyond-code" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#08090D] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono uppercase tracking-wider">
            <Mic className="w-3.5 h-3.5" />
            <span>Communication & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Beyond <span className="gold-gradient-text">Code</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xl">
            {beyondCode.subtext}
          </p>
          <div className="w-12 h-1 bg-amber-400/50 rounded-full" />
        </div>

        {/* 4 Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beyondCode.capabilities.map((cap, idx) => {
            const IconComponent = iconMap[cap.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-amber-500/30 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-amber-400/20 text-amber-400 w-fit transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base group-hover:text-amber-300 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 mt-4 flex items-center space-x-1.5 text-[11px] font-mono text-gray-400">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Practical Leadership</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
