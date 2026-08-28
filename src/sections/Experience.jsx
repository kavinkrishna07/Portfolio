import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#08090D]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Industry Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="gold-gradient-text">Experience</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xl">
            Hands-on software development experience building production-focused applications and backend microservices.
          </p>
          <div className="w-12 h-1 bg-amber-400/50 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l border-amber-500/20 space-y-12">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node Glow */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-400 border-4 border-[#08090D] shadow-[0_0_12px_rgba(229,193,88,0.8)] group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-white/10 group-hover:border-amber-500/40 transition-all space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors flex items-center space-x-2">
                      <span>{exp.role}</span>
                    </h3>
                    <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 mt-1">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-xs font-mono text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 w-fit">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-amber-400" />
                      <span>{exp.period}</span>
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-300 font-sans leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">Primary Contributions:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300 font-sans">
                    {exp.workedOn.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
