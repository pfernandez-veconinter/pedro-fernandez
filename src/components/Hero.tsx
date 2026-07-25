import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PROFILE_DATA } from '../data/profileData';
import { 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Linkedin, 
  Mail, 
  Sparkles,
  ShieldCheck,
  Code2,
  Server,
  Download
} from 'lucide-react';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  const { scrollY } = useScroll();

  // Parallax subtle transformations for visual depth
  const avatarY = useTransform(scrollY, [0, 500], [0, 60]);
  const textY = useTransform(scrollY, [0, 500], [0, -30]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  return (
    <section id="inicio" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            style={{ y: textY, opacity }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Eyebrow */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-[1px] bg-[#d4af37]" />
              <p className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-sans font-medium">
                Líder Técnico & Desarrollador Fullstack
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-white leading-[1.15] mb-6">
              Pedro<br />
              <span className="italic text-[#d4af37]">Fernández</span>
            </h1>

            {/* Subtitle / Role */}
            <div className="flex flex-wrap items-center gap-3 text-sm font-sans text-white/60 mb-6 uppercase tracking-[0.2em]">
              <span className="text-white font-medium">Arquitectura de Software</span>
              <span className="text-[#d4af37]">•</span>
              <span>Microservicios</span>
              <span className="text-[#d4af37]">•</span>
              <span>Cloud & Fintech</span>
            </div>

            {/* Short Bio Extract */}
            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-sans font-light">
              {PROFILE_DATA.personal.bio}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#contacto"
                className="w-full sm:w-auto bg-white text-black px-6 py-3.5 text-[10px] uppercase font-bold tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#e5e5e5] transition-all font-sans"
              >
                <Mail className="w-4 h-4" />
                <span>Contactar Ahora</span>
                <span>→</span>
              </a>

              <a
                href="#portafolio"
                className="w-full sm:w-auto border border-[#d4af37] text-white px-6 py-3.5 text-[10px] uppercase tracking-[0.25em] flex items-center justify-center gap-2 hover:bg-[#d4af37] hover:text-black transition-all font-sans"
              >
                <Briefcase className="w-4 h-4 text-[#d4af37]" />
                <span>Ver Portafolio</span>
              </a>

              <a
                href={PROFILE_DATA.personal.cvDownloadUrl}
                download="CV Pedro Fernandez.pdf"
                className="w-full sm:w-auto border border-white/10 text-white/80 px-5 py-3.5 text-[10px] uppercase tracking-[0.25em] flex items-center justify-center gap-2 hover:border-white/30 hover:text-white transition-all font-sans bg-[#111]"
                title="Descargar Curriculum PDF"
              >
                <Download className="w-4 h-4 text-[#d4af37]" />
                <span>Descargar CV</span>
              </a>
            </div>

            {/* Quick Contact Bar & Socials */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 w-full text-xs font-sans text-white/50">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <span>Caracas, Venezuela</span>
              </div>

              <a 
                href={PROFILE_DATA.contact.linkedIn} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-[#d4af37] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#d4af37]" />
                <span>LinkedIn</span>
              </a>

              <a 
                href={`mailto:${PROFILE_DATA.contact.email}`}
                className="flex items-center gap-2 text-white/70 hover:text-[#d4af37] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#d4af37]" />
                <span>{PROFILE_DATA.contact.email}</span>
              </a>
            </div>

          </motion.div>

          {/* Right Parallax Avatar & Interactive Badges */}
          <motion.div 
            style={{ y: avatarY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              
              {/* Outer Subtle Gold Halo */}
              <div className="absolute -inset-4 bg-[#d4af37]/10 blur-2xl opacity-60" />

              {/* Main Photo Card Container */}
              <div className="relative w-full h-full p-2 bg-[#111111] border border-white/10 shadow-2xl overflow-hidden group">
                <img
                  src={PROFILE_DATA.personal.profileImage}
                  alt={PROFILE_DATA.personal.fullName}
                  className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                  }}
                />

                {/* Overlaid Bottom Gradient & Name Badge */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d4af37]">Verificado</span>
                  </div>
                  <p className="text-white font-serif text-lg leading-tight">
                    Pedro A. Fernández F.
                  </p>
                  <p className="text-xs text-white/60 font-sans">
                    Ingeniero en Informática (UCAB)
                  </p>
                </div>
              </div>

              {/* Parallax Floating Tech Badge 1: Experience */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-6 sm:-left-8 bg-[#111111] p-3 border border-[#d4af37]/40 flex items-center gap-3 shadow-2xl"
              >
                <div className="w-10 h-10 bg-[#d4af37]/10 border border-[#d4af37] flex items-center justify-center text-[#d4af37] font-serif font-bold text-base">
                  6+
                </div>
                <div>
                  <p className="text-xs font-serif text-white leading-none">Años de Exp.</p>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">Líder Técnico & Fullstack</p>
                </div>
              </motion.div>

              {/* Parallax Floating Tech Badge 2: Payment Gateways */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#111111] p-3 border border-white/10 flex items-center gap-3 shadow-2xl"
              >
                <div className="w-10 h-10 bg-white/5 border border-white/20 flex items-center justify-center text-[#d4af37]">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-serif text-white leading-none">Pasarelas & APIs</p>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">PayPal, Scotiabank, AWS</p>
                </div>
              </motion.div>

              {/* Parallax Floating Tech Badge 3: AI Powered */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute top-1/2 -right-8 hidden sm:flex bg-[#111111] px-3 py-2 border border-[#d4af37]/30 items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                <span className="text-xs uppercase tracking-widest text-white/80">AI-Powered Dev</span>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Quick Highlights Counter Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-[#111111] p-6 border border-white/5 hover:border-[#d4af37]/40 transition-colors">
            <div className="text-3xl font-serif text-[#d4af37]">
              {PROFILE_DATA.personal.experienceYears}
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-sans mt-2">
              Experiencia Profesional
            </div>
          </div>

          <div className="bg-[#111111] p-6 border border-white/5 hover:border-[#d4af37]/40 transition-colors">
            <div className="text-3xl font-serif text-white">
              4+
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-sans mt-2">
              Pasarelas Integradas
            </div>
          </div>

          <div className="bg-[#111111] p-6 border border-white/5 hover:border-[#d4af37]/40 transition-colors">
            <div className="text-3xl font-serif text-[#d4af37]">
              2 Apps
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-sans mt-2">
              En Play Store & App Store
            </div>
          </div>

          <div className="bg-[#111111] p-6 border border-white/5 hover:border-[#d4af37]/40 transition-colors">
            <div className="text-3xl font-serif text-white">
              UCAB
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-sans mt-2">
              Ingeniero en Informática
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
