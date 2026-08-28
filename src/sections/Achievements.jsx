import React from 'react';
import { Award, Trophy, Users, Star, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090A0F]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Honors & Recognitions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Key <span className="gold-gradient-text">Achievements</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xl">
            Recognition for technical skill, competitive hacking, and peer leadership.
          </p>
          <div className="w-12 h-1 bg-amber-400/50 rounded-full" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.achievements.map((item) => {
            const isPayPal = item.id === 'paypal';
            return (
              <div
                key={item.id}
                className={`glass-panel p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between group ${
                  isPayPal
                    ? 'border-amber-500/40 bg-gradient-to-b from-[#141724] to-[#0A0C14] shadow-[0_0_30px_rgba(229,193,88,0.15)] hover:border-amber-400'
                    : 'border-white/10 hover:border-amber-400/30'
                }`}
              >
                {/* Gold Highlight Overlay for PayPal */}
                {isPayPal && (
                  <div className="absolute top-0 right-0 w-36 h-36 bg-amber-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-400/20 transition-all" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl border ${
                      isPayPal
                        ? 'bg-amber-400/20 border-amber-400/40 text-amber-300'
                        : 'bg-white/5 border-white/10 text-gray-300'
                    }`}>
                      {item.id === 'paypal' && <Star className="w-6 h-6 fill-amber-300" />}
                      {item.id === 'yuktha' && <Trophy className="w-6 h-6 text-amber-400" />}
                      {item.id === 'mentor' && <Users className="w-6 h-6 text-blue-400" />}
                    </div>

                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                      isPayPal
                        ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-[0_0_10px_rgba(229,193,88,0.4)]'
                        : 'bg-white/5 text-gray-300 border-white/10'
                    }`}>
                      {item.year}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase block">
                      {item.role} • {item.organization}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 font-sans leading-relaxed pt-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span>Verified Recognition</span>
                  <span className="text-amber-400 font-bold">{item.organization}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
