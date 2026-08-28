import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, ArrowRight, Code2, Terminal, Network, ChevronDown, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenPalette, onOpenResume }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const nodeCount = 38;
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.5,
        isGold: Math.random() < 0.25
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const alpha = (1 - dist / 130) * 0.18;
            ctx.strokeStyle = nodes[i].isGold || nodes[j].isGold
              ? `rgba(229, 193, 88, ${alpha})`
              : `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isGold ? '#E5C158' : 'rgba(255, 255, 255, 0.7)';
        ctx.fill();

        if (node.isGold) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(229, 193, 88, 0.08)';
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Interactive Node Canvas */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Radial Gradient Glow Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Name Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-amber-500/30 text-amber-300 text-xs font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(229,193,88,0.15)] animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>KAVIN KRISHNA G</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-300">Software Developer</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
          Software Developer building <span className="gold-gradient-text">practical, scalable</span> digital experiences.
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
          {portfolioData.personal.heroSubtext}
        </p>

        {/* Focus Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-mono text-gray-400">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center space-x-1.5">
            <Code2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Full Stack Development</span>
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center space-x-1.5">
            <Terminal className="w-3.5 h-3.5 text-amber-400" />
            <span>Data Structures & Algorithms</span>
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center space-x-1.5">
            <Network className="w-3.5 h-3.5 text-amber-400" />
            <span>Computer Networks</span>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <button
            onClick={() => handleScrollTo('projects')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm transition-all shadow-[0_0_25px_rgba(229,193,88,0.3)] hover:shadow-[0_0_35px_rgba(229,193,88,0.5)] hover:scale-105 flex items-center justify-center space-x-2 group"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenResume}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 hover:bg-amber-400 hover:text-slate-950 border border-white/15 text-white font-semibold text-sm transition-all flex items-center justify-center space-x-2 shadow-lg"
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span>View Resume</span>
          </button>

          <button
            onClick={() => handleScrollTo('contact')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-amber-500/40 text-white hover:text-amber-300 font-semibold text-sm transition-all flex items-center justify-center space-x-2"
          >
            <span>Let's Connect</span>
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-6 pt-6 text-gray-400">
          <a
            href={portfolioData.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-amber-400/50 hover:bg-amber-400/10 hover:text-amber-300 transition-all group"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>

          <a
            href={portfolioData.personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-amber-400/50 hover:bg-amber-400/10 hover:text-amber-300 transition-all group"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="pt-8 flex justify-center">
          <button
            onClick={() => handleScrollTo('about')}
            className="p-2 text-gray-400 hover:text-amber-300 transition-colors animate-bounce"
            aria-label="Scroll to About Section"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
