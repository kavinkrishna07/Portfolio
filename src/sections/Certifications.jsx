import React from 'react';
import { Award, Cloud, Coffee, Code, CheckCircle, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const iconMap = {
    Coffee,
    Cloud,
    Code,
    Award
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#090A0F]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="gold-gradient-text">Certifications</span>
          </h2>
          <div className="w-12 h-1 bg-amber-400/50 rounded-full" />
        </div>

        {/* Compact Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolioData.certifications.map((cert, idx) => {
            const IconComp = iconMap[cert.icon] || Award;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-amber-400/20 text-amber-400 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-amber-300 border border-white/5">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="font-bold text-white text-sm group-hover:text-amber-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-gray-400 font-mono mt-1">
                    {cert.issuer}
                  </p>

                  {cert.detail && (
                    <span className="inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 mt-2 border border-amber-400/20">
                      {cert.detail}
                    </span>
                  )}
                </div>

                <div className="pt-4 border-t border-white/5 mt-4 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span className="flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    <span>Verified</span>
                  </span>
                  <span>{cert.issuer.split(' ')[0]}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
