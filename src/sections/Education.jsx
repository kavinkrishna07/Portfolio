import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, School } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#08090D]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education <span className="gold-gradient-text">Background</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xl">
            Computer science foundation paired with strong core performance.
          </p>
          <div className="w-12 h-1 bg-amber-400/50 rounded-full" />
        </div>

        {/* Education Showcase Stack */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* PRIMARY COLLEGE CARD */}
          {portfolioData.education.filter(e => e.isCurrent).map((college, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-400/15 transition-all" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-bold text-[10px] font-mono uppercase">
                      Current Degree Program
                    </span>
                    <span className="text-xs font-mono text-gray-400 flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>{college.location}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-amber-300 transition-colors">
                    {college.institution}
                  </h3>

                  <p className="text-sm font-semibold text-gray-300 font-sans mt-1">
                    {college.degree}
                  </p>
                </div>

                {/* CGPA Badge */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center min-w-[140px]">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Current CGPA</span>
                  <span className="text-3xl font-extrabold font-mono text-amber-300">{college.cgpa}</span>
                  <span className="text-[10px] font-mono text-gray-400 block mt-0.5">{college.period}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="pt-4 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">Academic Focus:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                  {college.highlights.map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* SECONDARY SCHOOL CARDS (VISUALLY SECONDARY) */}
          <div className="pt-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold mb-4">
              Schooling History (Secondary & Higher Secondary):
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {portfolioData.education.filter(e => !e.isCurrent).map((school, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-5 rounded-2xl border border-white/10 opacity-85 hover:opacity-100 hover:border-amber-400/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <School className="w-4 h-4 text-gray-400" />
                      <span className="font-bold text-white text-sm">{school.institution}</span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400">
                      {school.period}
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 font-medium">{school.degree}</p>

                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                    <span className="text-gray-400">Score Achieved</span>
                    <span className="text-amber-300 font-bold">{school.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
