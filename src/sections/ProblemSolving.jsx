import React from 'react';
import { Code2, Terminal, Zap, Award, ExternalLink, TrendingUp, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProblemSolving() {
  const { problemSolving } = portfolioData;

  return (
    <section id="problem-solving" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090A0F]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>Competitive Programming & Logic</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Problem <span className="gold-gradient-text">Solving</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xl">
            {problemSolving.subtext}
          </p>
          <div className="w-12 h-1 bg-amber-400/50 rounded-full" />
        </div>

        {/* Highlighted Ratings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* LeetCode Rating Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all" />
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">LeetCode Contest Rating</h3>
                  <span className="text-xs font-mono text-gray-400">Maximum Verified Rating</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold">
                Contest Peak
              </span>
            </div>

            <div className="flex items-baseline space-x-3 my-4">
              <span className="text-5xl font-extrabold font-mono text-white group-hover:text-amber-300 transition-colors">
                1444
              </span>
              <span className="text-xs font-mono text-amber-400/80">Rating Points</span>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              Consistently competing in LeetCode Weekly & Biweekly Contests, solving medium-to-hard algorithmic problems under strict timing constraint.
            </p>

            <div className="pt-4 flex items-center justify-between text-xs font-mono border-t border-white/10 mt-4">
              <span className="text-gray-400">Total Solved: <strong className="text-white">250+ Problems</strong></span>
              <a
                href={portfolioData.personal.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 flex items-center space-x-1"
              >
                <span>View Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* GFG Institute Rank Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-amber-500/30 transition-all duration-300 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-emerald-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">GeeksforGeeks Institute Rank</h3>
                  <span className="text-xs font-mono text-gray-400">Sri Eshwar College Standing</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                College Rank
              </span>
            </div>

            <div className="flex items-baseline space-x-3 my-4">
              <span className="text-5xl font-extrabold font-mono text-white group-hover:text-emerald-300 transition-colors">
                #85
              </span>
              <span className="text-xs font-mono text-emerald-400/80">Institute Ranking</span>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              Top 100 institute ranking at Sri Eshwar College of Engineering, demonstrating continuous practice across core data structures and standard algorithms.
            </p>

            <div className="pt-4 flex items-center justify-between text-xs font-mono border-t border-white/10 mt-4">
              <span className="text-gray-400">Total Solved: <strong className="text-white">140+ Problems</strong></span>
              <a
                href={portfolioData.personal.socials.gfg}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 flex items-center space-x-1"
              >
                <span>View Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Platforms Summary Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problemSolving.metrics.map((metric, idx) => {
            const iconMap = { Code2, Terminal, Zap };
            const IconComp = iconMap[metric.icon] || Code2;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 text-amber-400">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-extrabold font-mono text-white">
                    {metric.count}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">{metric.name}</h4>
                  <p className="text-xs text-gray-400 font-sans">{metric.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
