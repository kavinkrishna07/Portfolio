import React from 'react';
import { X, FileText, Download, ExternalLink, Mail, Phone, MapPin, Building2, Award, GraduationCap, Code2, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-4xl bg-[#0D0F18] border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-gradient-to-r from-amber-500/10 via-transparent to-transparent border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <span>Official Resume</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Kavin Krishna G
                </span>
              </h3>
              <p className="text-xs text-gray-400 font-mono">
                Software Developer • SDE Candidate
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-all flex items-center space-x-2 shadow-[0_0_12px_rgba(229,193,88,0.3)]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-gray-200 font-sans text-sm print:text-black print:bg-white">
          {/* Header Identity */}
          <div className="border-b border-white/10 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">KAVIN KRISHNA G</h1>
                <p className="text-amber-400 font-mono text-xs font-semibold">Software Developer</p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400">
                <span className="flex items-center space-x-1">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>9629517689</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>kavinkrishna.g2024csecs@sece.ac.in</span>
                </span>
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Coimbatore, India</span>
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 text-xs font-mono text-gray-300 pt-1">
              <a href={portfolioData.personal.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-amber-300 flex items-center space-x-1">
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-amber-400" />
              </a>
              <span>•</span>
              <a href={portfolioData.personal.socials.github} target="_blank" rel="noreferrer" className="hover:text-amber-300 flex items-center space-x-1">
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-amber-400" />
              </a>
              <span>•</span>
              <a href={portfolioData.personal.socials.leetcode} target="_blank" rel="noreferrer" className="hover:text-amber-300 flex items-center space-x-1">
                <span>LeetCode</span>
                <ExternalLink className="w-3 h-3 text-amber-400" />
              </a>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center space-x-2 border-b border-white/10 pb-1">
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATION</span>
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between items-start text-xs">
                <div>
                  <h3 className="font-bold text-white text-sm">Sri Eshwar College of Engineering, Coimbatore</h3>
                  <p className="text-gray-300">B.E. CSE [Cyber Security] || CGPA: 8.30 (Current)</p>
                </div>
                <span className="font-mono text-amber-300">2024 – 2028</span>
              </div>

              <div className="flex justify-between items-start text-xs">
                <div>
                  <h3 className="font-semibold text-white">KMC Public School (CBSE), Tirupur</h3>
                  <p className="text-gray-400">Higher Secondary Certificate (HSC) || 76.2%</p>
                </div>
                <span className="font-mono text-gray-400">2022 – 2024</span>
              </div>

              <div className="flex justify-between items-start text-xs">
                <div>
                  <h3 className="font-semibold text-white">KMC Public School (CBSE), Tirupur</h3>
                  <p className="text-gray-400">Secondary School Leaving Certificate (SSLC) || 74.5%</p>
                </div>
                <span className="font-mono text-gray-400">2021 – 2022</span>
              </div>
            </div>
          </div>

          {/* Internship Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center space-x-2 border-b border-white/10 pb-1">
              <Briefcase className="w-4 h-4" />
              <span>INTERNSHIP EXPERIENCE</span>
            </h2>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <h3 className="font-bold text-white text-sm">Java Full Stack Intern – RampeX Technologies</h3>
                <span className="font-mono text-amber-300">June 2026</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-gray-300 pl-2">
                <li>Developed a Student Notes Sharing Application using Java full-stack technologies, enabling users to upload, manage, and share academic notes efficiently.</li>
                <li>Implemented backend services, database integration, and RESTful APIs, applying modern full-stack development practices to deliver a functional, scalable web application.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center space-x-2 border-b border-white/10 pb-1">
              <Code2 className="w-4 h-4" />
              <span>PROJECTS</span>
            </h2>

            {portfolioData.projects.map((proj, idx) => (
              <div key={idx} className="space-y-1.5 text-xs">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-white text-sm">{proj.name}</h3>
                  <span className="font-mono text-amber-300">{proj.date}</span>
                </div>
                <div className="text-[11px] font-mono text-amber-400/90">
                  TechStack: {proj.technologies.join(', ')}
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  {proj.features.map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Achievements & Coding Profiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center space-x-2 border-b border-white/10 pb-1">
                <Award className="w-4 h-4" />
                <span>ACHIEVEMENTS</span>
              </h2>
              <ul className="space-y-1.5 text-xs text-gray-300">
                <li className="flex justify-between">
                  <span>• PayPal Career Academy 2.0 | Selected</span>
                  <span className="font-mono text-amber-300">2026</span>
                </li>
                <li className="flex justify-between">
                  <span>• Yuktha Hackathon | Runner-Up (PSG iTech)</span>
                  <span className="font-mono text-amber-300">2025</span>
                </li>
                <li className="flex justify-between">
                  <span>• Student Mentor | Sri Eshwar CE</span>
                  <span className="font-mono text-amber-300">2025</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center space-x-2 border-b border-white/10 pb-1">
                <Code2 className="w-4 h-4" />
                <span>CODING PROFILES</span>
              </h2>
              <ul className="space-y-1.5 text-xs text-gray-300 font-mono">
                <li>• LeetCode: 250+ Solved | Rating (Max): 1444</li>
                <li>• GeeksforGeeks: 140+ Solved | Institute Rank: 85</li>
                <li>• SkillRack: 830+ Solved | Rank: 33448</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center space-x-2 border-b border-white/10 pb-1">
              <Code2 className="w-4 h-4" />
              <span>TECHNICAL SKILLS</span>
            </h2>
            <div className="grid grid-cols-1 gap-1 text-xs text-gray-300 font-mono">
              <p><strong className="text-white">Languages:</strong> Java | Python | C++ | C | JavaScript | SQL</p>
              <p><strong className="text-white">Technologies/Frameworks:</strong> Spring Boot | Node.js | Express.js | ReactJS</p>
              <p><strong className="text-white">Databases:</strong> MySQL | MongoDB | PostgreSQL</p>
              <p><strong className="text-white">DevOps & Tools:</strong> Docker | Kubernetes | Git | GitHub | Postman | IntelliJ IDEA | VS Code | Linux</p>
              <p><strong className="text-white">Core Concepts:</strong> DSA | OOPS | DBMS | OS | Computer Networks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
