import React from 'react';
import { FolderGit2, Github, Navigation, CheckCircle2, BookOpen, ShoppingBag } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function FeaturedProjects() {
  const sampleNotes = [
    { title: 'Dijkstra & A* Pathfinding Notes', subject: 'Algorithms', author: 'Kavin K.', downloads: 142 },
    { title: 'Spring Boot REST & JPA Architecture', subject: 'Java', author: 'Kavin K.', downloads: 98 },
    { title: 'Computer Networks TCP/IP OSI Layer Breakdown', subject: 'Networks', author: 'Kavin K.', downloads: 115 },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#08090D]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Software Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Production-Ready <span className="gold-gradient-text">Projects</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xl">
            Architected and built with emphasis on clean backend design, efficient data structures, and intuitive user experiences.
          </p>
          <div className="w-12 h-1 bg-amber-400/50 rounded-full" />
        </div>

        {/* PROJECTS SHOWCASE STACK */}
        <div className="space-y-16">
          {/* ======================================================== */}
          {/* PROJECT 1: NAVISPHERE (FLAGSHIP FEATURED PROJECT) */}
          {/* ======================================================== */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            {/* Ambient Gold Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-amber-500/15 transition-all" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Specs & Features */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-[11px] font-mono uppercase tracking-wider shadow-[0_0_10px_rgba(229,193,88,0.4)]">
                    Flagship System
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    Indoor Navigation System
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors flex items-center space-x-3">
                    <span>Navisphere</span>
                    <Navigation className="w-6 h-6 text-amber-400" />
                  </h3>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed font-sans">
                    A Java-based indoor navigation system designed for large indoor environments such as malls and university campuses. Integrates BLE beacon-based positioning matrix with Dijkstra/A* shortest-path algorithms.
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {['Spring Boot', 'ReactJS', 'MySQL', 'Dijkstra Algorithm', 'BLE Positioning'].map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-amber-300 text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features List */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">Key Architectural Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300 font-sans">
                    {[
                      'Indoor maps visualization',
                      'Searchable indoor locations',
                      'BLE beacon positioning matrix',
                      'Shortest-path algorithms',
                      'Intelligent route guidance',
                      'Real-time navigation',
                      'Dynamic route updates',
                      'Accessibility-focused paths'
                    ].map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="flex items-center space-x-4 pt-2">
                  <a
                    href={portfolioData.personal.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-all flex items-center space-x-2 shadow-[0_0_15px_rgba(229,193,88,0.25)]"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Static UI Preview */}
              <div className="lg:col-span-6">
                <div className="bg-[#0D0F18] border border-amber-500/20 rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-gray-400">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <span className="text-white font-semibold">Navisphere Routing Architecture</span>
                    </div>
                    <span className="text-amber-400 text-[10px] uppercase font-mono">Dijkstra Engine</span>
                  </div>

                  {/* Floorplan Preview Visual */}
                  <div className="py-6 px-4 bg-[#07080E] rounded-xl my-3 relative h-64 flex flex-col justify-between overflow-hidden subtle-grid">
                    <div className="flex justify-between items-center text-xs font-mono text-gray-400 z-10">
                      <span>Campus Floor Matrix</span>
                      <span className="text-amber-400">BLE Beacon Triangulation</span>
                    </div>

                    {/* Nodes visual SVG */}
                    <div className="relative w-full h-40">
                      <svg className="w-full h-full">
                        <line x1="15%" y1="70%" x2="40%" y2="40%" stroke="#E5C158" strokeWidth="2.5" strokeDasharray="4 4" />
                        <line x1="40%" y1="40%" x2="85%" y2="25%" stroke="#E5C158" strokeWidth="2.5" />
                        
                        <circle cx="15%" cy="70%" r="7" fill="#10B981" />
                        <circle cx="40%" cy="40%" r="5" fill="#3B82F6" />
                        <circle cx="85%" cy="25%" r="7" fill="#E5C158" />

                        <text x="15%" y="88%" fill="#10B981" fontSize="10" fontFamily="monospace" textAnchor="middle">Node A (Entrance)</text>
                        <text x="40%" y="28%" fill="#9CA3AF" fontSize="10" fontFamily="monospace" textAnchor="middle">Node B (Hub)</text>
                        <text x="85%" y="15%" fill="#E5C158" fontSize="10" fontFamily="monospace" textAnchor="middle">Node F (Destination)</text>
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 z-10 border-t border-white/5 pt-2">
                      <span>Optimal Path Matrix</span>
                      <span className="text-amber-300 font-bold">145m • 1.8 mins</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* ======================================================== */}
          {/* PROJECT 2: STUDENT NOTES SHARING */}
          {/* ======================================================== */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-amber-500/30 transition-all duration-300 relative overflow-hidden group shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Specs & Features */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 font-mono text-[11px] uppercase tracking-wider">
                    Educational Platform
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors flex items-center space-x-3">
                    <span>Student Notes Sharing</span>
                    <BookOpen className="w-6 h-6 text-amber-400" />
                  </h3>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed font-sans">
                    A full-stack platform that allows students to upload, manage, search, and share academic notes efficiently with OAuth 2.0 security and MySQL persistence.
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {['ReactJS', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'OAuth 2.0', 'REST API'].map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-amber-300 text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features List */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">Key Technical Specs:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300 font-sans">
                    {[
                      'OAuth 2.0 login',
                      'REST APIs microservices',
                      'CRUD operations',
                      'Subject-based search',
                      'Profile-based note management',
                      'React + Spring Boot integration',
                      'MySQL persistence'
                    ].map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="flex items-center space-x-4 pt-2">
                  <a
                    href={portfolioData.personal.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-amber-400 hover:text-slate-950 border border-white/10 text-white font-semibold text-xs transition-all flex items-center space-x-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Static UI Preview */}
              <div className="lg:col-span-6">
                <div className="bg-[#0C0E17] border border-white/10 rounded-2xl p-4 shadow-xl">
                  {/* Top Bar Mockup */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="text-xs font-mono text-gray-400 ml-2">Academic Notes Repository</span>
                    </div>
                  </div>

                  {/* Clean Static Display of Notes */}
                  <div className="py-4 space-y-2.5">
                    {sampleNotes.map((note, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-semibold text-white">{note.title}</div>
                          <div className="text-[10px] text-gray-400 font-mono mt-0.5">Uploaded by {note.author} • {note.downloads} downloads</div>
                        </div>
                        <span className="px-2.5 py-1 rounded-md bg-amber-400/10 text-amber-300 text-[10px] font-mono border border-amber-400/20">
                          {note.subject}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* ======================================================== */}
          {/* PROJECT 3: E-KART */}
          {/* ======================================================== */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-amber-500/30 transition-all duration-300 relative overflow-hidden group shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Specs & Features */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 font-mono text-[11px] uppercase tracking-wider">
                    E-Commerce Platform
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors flex items-center space-x-3">
                    <span>E-Kart</span>
                    <ShoppingBag className="w-6 h-6 text-amber-400" />
                  </h3>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed font-sans">
                    A full-stack MERN e-commerce platform with JWT authentication, role-based access control, and secure REST APIs.
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {['ReactJS', 'Node.js', 'Express', 'MongoDB', 'JWT Auth', 'RBAC'].map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-amber-300 text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features List */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">Key Architectural Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300 font-sans">
                    {[
                      'JWT authentication',
                      'Role-based access control',
                      'REST APIs & Middleware',
                      'CRUD operations',
                      'Centralized error handling',
                      'MongoDB integration',
                      'Modular backend architecture'
                    ].map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="flex items-center space-x-4 pt-2">
                  <a
                    href={portfolioData.personal.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-amber-400 hover:text-slate-950 border border-white/10 text-white font-semibold text-xs transition-all flex items-center space-x-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Static E-commerce Interface Preview */}
              <div className="lg:col-span-6">
                <div className="bg-[#0C0E17] border border-white/10 rounded-2xl p-4 shadow-xl">
                  {/* Top Bar Mockup */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <ShoppingBag className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-bold text-white">E-Kart Storefront</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">
                      MERN Architecture
                    </span>
                  </div>

                  {/* Clean Static Product Showcase */}
                  <div className="py-4 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-2">
                        <div className="h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center text-amber-400 text-xs font-mono">
                          SSD Storage
                        </div>
                        <div className="text-xs font-semibold text-white">High-Performance SSD</div>
                        <div className="text-[11px] font-mono text-amber-300">$89.99</div>
                      </div>

                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-2">
                        <div className="h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center text-amber-400 text-xs font-mono">
                          Keyboard
                        </div>
                        <div className="text-xs font-semibold text-white">Mechanical Keyboard</div>
                        <div className="text-[11px] font-mono text-amber-300">$129.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
