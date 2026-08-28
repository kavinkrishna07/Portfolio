import React from 'react';
import { Github, Linkedin, Code2, Terminal, Cpu, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#06070A] py-12 px-4 sm:px-6 lg:px-8 text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-white font-bold tracking-tight text-base">Kavin Krishna G</span>
            <span className="text-amber-400 text-xs px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20 font-mono">
              Software Developer
            </span>
          </div>
          <p className="text-xs text-gray-400 max-w-md">
            Building practical, scalable full-stack applications and solving algorithmic systems problems.
          </p>
        </div>

        {/* Center links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
          <a
            href={portfolioData.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-amber-300 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={portfolioData.personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-amber-300 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href={portfolioData.personal.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-amber-300 transition-colors"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>LeetCode</span>
          </a>
          <a
            href={portfolioData.personal.socials.gfg}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-amber-300 transition-colors"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>GeeksforGeeks</span>
          </a>
          <a
            href={portfolioData.personal.socials.skillrack}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-amber-300 transition-colors"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>SkillRack</span>
          </a>
        </div>

        {/* Right copyright & Back to Top */}
        <div className="flex items-center space-x-4">
          <span className="text-xs font-mono text-gray-400">
            © 2026 Kavin Krishna G
          </span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/5 hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/40 text-gray-300 hover:text-amber-300 transition-all group"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
