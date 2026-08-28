import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import CommandPalette from './components/CommandPalette';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import About from './sections/About';
import QuickStats from './sections/QuickStats';
import Skills from './sections/Skills';
import FeaturedProjects from './sections/FeaturedProjects';
import ProblemSolving from './sections/ProblemSolving';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import BeyondCode from './sections/BeyondCode';
import Contact from './sections/Contact';

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#08090D] text-gray-100 selection:bg-amber-400/20 selection:text-amber-300">
      {/* Ambient Custom Cursor Dot */}
      <CustomCursor />

      {/* Ctrl+K Command Palette Modal */}
      <CommandPalette isOpen={paletteOpen} setIsOpen={setPaletteOpen} />

      {/* Official Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Sticky Glass Navbar */}
      <Navbar
        onOpenPalette={() => setPaletteOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main>
        <Hero
          onOpenPalette={() => setPaletteOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />
        <QuickStats />
        <About />
        <Skills />
        <FeaturedProjects />
        <ProblemSolving />
        <Experience />
        <Achievements />
        <Education />
        <Certifications />
        <BeyondCode />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
