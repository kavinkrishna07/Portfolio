import React, { useState } from 'react';
import { Layers, Coffee, FileCode, Code, Terminal, Braces, Database, Zap, Server, Network, Layout, Boxes, GitBranch, Github, Send, Laptop, Box, Binary, Component, Cpu, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const iconMap = {
    Coffee: Coffee,
    FileCode: FileCode,
    Code: Code,
    Terminal: Terminal,
    Braces: Braces,
    Database: Database,
    Zap: Zap,
    Server: Server,
    Network: Network,
    Layout: Layout,
    Layers: Layers,
    Box: Box,
    Boxes: Boxes,
    GitBranch: GitBranch,
    Github: Github,
    Send: Send,
    Laptop: Laptop,
    Binary: Binary,
    Component: Component,
    Cpu: Cpu,
    Globe: Globe,
  };

  const filteredSkills = activeCategory === 'all'
    ? portfolioData.skills.items
    : portfolioData.skills.items.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090A0F]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gold-gradient-text">Core Competencies</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xl font-sans">
            Categorized competencies across software development, frameworks, database architectures, and fundamental computer science principles.
          </p>
          <div className="w-12 h-1 bg-amber-400/50 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {portfolioData.skills.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(229,193,88,0.3)] scale-105'
                  : 'glass-panel text-gray-300 hover:text-white hover:border-amber-400/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-4 rounded-xl border border-white/10 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-amber-400/20 text-gray-300 group-hover:text-amber-300 transition-colors">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 group-hover:text-amber-300 border border-white/5">
                    {skill.level}
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-white text-sm group-hover:text-amber-300 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[11px] text-gray-400 capitalize font-mono block mt-0.5">
                    {skill.category.replace('-', ' ')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
