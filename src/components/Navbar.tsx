import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Linkedin, Download, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

interface NavbarProps {
  onOpenCVModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCVModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking
      const sections = ['inicio', 'sobre-mi', 'servicios', 'experiencia', 'portafolio', 'contacto'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Sophisticated Dark theme monogram */}
        <a 
          href="#inicio" 
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 border border-[#d4af37] flex items-center justify-center text-[#d4af37] font-serif text-lg tracking-widest font-light group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300">
            PF
          </div>
          <div className="flex flex-col">
            <span className="text-white font-serif text-lg tracking-wider font-light leading-none group-hover:text-[#d4af37] transition-colors">
              Pedro Fernández
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-sans mt-1">
              Tech Lead & Fullstack
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#111111]/80 px-4 py-2 border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-[0.2em] font-sans transition-all duration-200 ${
                  isActive
                    ? 'text-[#d4af37] font-semibold border-b border-[#d4af37]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={PROFILE_DATA.personal.cvDownloadUrl}
            download="CV Pedro Fernandez.pdf"
            className="flex items-center gap-2 border border-[#d4af37] px-4 py-2 text-[10px] uppercase tracking-[0.25em] font-sans text-white hover:bg-[#d4af37] hover:text-black transition-all"
            title="Descargar Curriculum Vitae"
          >
            <Download className="w-3.5 h-3.5 text-[#d4af37] group-hover:text-black" />
            <span>Descargar CV</span>
          </a>

          <a
            href="#contacto"
            className="flex items-center gap-2 bg-white text-black px-4 py-2 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#e5e5e5] transition-all font-sans"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contacto</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contacto"
            className="p-2 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-colors"
            title="Ir a contacto"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-white/10 bg-[#111] text-white hover:border-[#d4af37] focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#d4af37]" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a]/98 border-b border-white/10 backdrop-blur-xl px-6 pt-4 pb-6 mt-2 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs uppercase tracking-[0.25em] text-white/70 hover:text-[#d4af37] transition-colors flex items-center justify-between border-b border-white/5"
                >
                  <span>{link.name}</span>
                  <span className="text-[#d4af37] text-xs">→</span>
                </a>
              ))}

              <div className="pt-4 mt-2 flex flex-col gap-3">
                <a
                  href={PROFILE_DATA.personal.cvDownloadUrl}
                  download="CV Pedro Fernandez.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 border border-[#d4af37] py-3 text-[10px] uppercase tracking-[0.25em] text-white hover:bg-[#d4af37] hover:text-black transition-all"
                >
                  <Download className="w-4 h-4 text-[#d4af37]" />
                  <span>Descargar CV completo</span>
                </a>

                <a
                  href="#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 text-[10px] uppercase font-bold tracking-[0.2em]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Ir a Contacto</span>
                </a>

                <div className="flex items-center justify-center gap-4 pt-2">
                  <a
                    href={PROFILE_DATA.contact.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-white/10 bg-[#111] text-[#d4af37] hover:border-[#d4af37]"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${PROFILE_DATA.contact.email}`}
                    className="p-2.5 border border-white/10 bg-[#111] text-white/80 hover:border-[#d4af37]"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
