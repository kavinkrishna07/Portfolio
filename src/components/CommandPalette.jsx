import React, { useState, useEffect } from 'react';
import { Search, Code2, FolderGit2, Briefcase, GraduationCap, Award, Mail, ExternalLink, Command, X, Cpu, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CommandPalette({ isOpen, setIsOpen }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  const navigationItems = [
    { label: 'Home', section: 'hero', icon: Command, category: 'Navigation' },
    { label: 'About Me', section: 'about', icon: Cpu, category: 'Navigation' },
    { label: 'Skills Matrix', section: 'skills', icon: Layers, category: 'Navigation' },
    { label: 'Featured Projects', section: 'projects', icon: FolderGit2, category: 'Navigation' },
    { label: 'Problem Solving', section: 'problem-solving', icon: Code2, category: 'Navigation' },
    { label: 'Experience', section: 'experience', icon: Briefcase, category: 'Navigation' },
    { label: 'Achievements', section: 'achievements', icon: Award, category: 'Navigation' },
    { label: 'Education', section: 'education', icon: GraduationCap, category: 'Navigation' },
    { label: 'Contact', section: 'contact', icon: Mail, category: 'Navigation' },
  ];

  const externalLinks = [
    { label: 'GitHub Profile', url: portfolioData.personal.socials.github, icon: ExternalLink, category: 'External Links' },
    { label: 'LinkedIn Profile', url: portfolioData.personal.socials.linkedin, icon: ExternalLink, category: 'External Links' },
    { label: 'LeetCode Profile', url: portfolioData.personal.socials.leetcode, icon: ExternalLink, category: 'External Links' },
    { label: 'GeeksforGeeks Profile', url: portfolioData.personal.socials.gfg, icon: ExternalLink, category: 'External Links' }
  ];

  const allItems = [...navigationItems, ...externalLinks];

  const filteredItems = allItems.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item) => {
    setIsOpen(false);
    if (item.section) {
      const el = document.getElementById(item.section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-xl bg-[#0F111A] border border-amber-500/20 rounded-2xl shadow-2xl overflow-hidden glass-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10">
          <Search className="w-5 h-5 text-amber-400 mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Type a command or search section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm font-sans"
          />
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-gray-400 text-sm">
              No matching commands or links found for "{query}"
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(item)}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-amber-500/10 hover:border hover:border-amber-500/20 text-left transition-all text-sm group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-amber-500/20 text-gray-300 group-hover:text-amber-300 transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-gray-200 group-hover:text-white font-medium">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400 group-hover:bg-amber-500/20 group-hover:text-amber-300 border border-white/5">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-black/40 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center space-x-3">
            <span><kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] text-gray-300">↑↓</kbd> navigate</span>
            <span><kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] text-gray-300">esc</kbd> close</span>
          </div>
          <span className="text-amber-400/80 font-mono text-[11px]">Kavin Krishna G Portfolio</span>
        </div>
      </div>
    </div>
  );
}
