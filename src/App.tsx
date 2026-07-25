import React, { useState } from 'react';
import { ParallaxBackground } from './components/ParallaxBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVViewerModal } from './components/CVViewerModal';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-[#e5e5e5] selection:bg-[#d4af37] selection:text-black font-sans">
      {/* Background Parallax Mesh & Particles */}
      <ParallaxBackground />

      {/* Main Navbar */}
      <Navbar onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Hero Section */}
      <main className="relative z-10">
        <Hero onOpenCVModal={() => setIsCVModalOpen(true)} />

        <About />

        <Services />

        <Experience />

        <Skills />

        <Portfolio />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive CV Viewer Modal */}
      <CVViewerModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}
