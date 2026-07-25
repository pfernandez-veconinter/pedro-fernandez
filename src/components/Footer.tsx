import React from 'react';
import { PROFILE_DATA } from '../data/profileData';
import { ArrowUp, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-12 relative z-10 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-center justify-between">
          
          {/* Logo & Bio */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[#d4af37] bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] font-serif text-base font-bold">
                PF
              </div>
              <div>
                <h3 className="text-white font-serif font-light text-lg leading-none">
                  Pedro Alejandro Fernández
                </h3>
                <p className="text-[#d4af37] text-[10px] uppercase tracking-widest mt-1 font-medium">
                  Líder Técnico & Desarrollador Fullstack Sr.
                </p>
              </div>
            </div>
            <p className="text-white/50 text-xs font-light leading-relaxed max-w-md">
              Desarrollo de software de alto impacto, pasarelas de pago, microservicios e infraestructura en la nube.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-3 text-white/70 text-[10px] uppercase tracking-[0.2em]">
            <a href="#inicio" className="hover:text-[#d4af37] transition-colors">Inicio</a>
            <a href="#sobre-mi" className="hover:text-[#d4af37] transition-colors">Sobre Mí</a>
            <a href="#servicios" className="hover:text-[#d4af37] transition-colors">Servicios</a>
            <a href="#experiencia" className="hover:text-[#d4af37] transition-colors">Experiencia</a>
            <a href="#portafolio" className="hover:text-[#d4af37] transition-colors">Portafolio</a>
            <a href="#contacto" className="hover:text-[#d4af37] transition-colors">Contacto</a>
          </div>

          {/* Social Icons & Back to top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={PROFILE_DATA.contact.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#111111] text-[#d4af37] hover:bg-[#d4af37] hover:text-black border border-white/10 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PROFILE_DATA.contact.email}`}
              className="p-2.5 bg-[#111111] text-[#d4af37] hover:bg-[#d4af37] hover:text-black border border-white/10 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 bg-[#d4af37] text-black font-bold hover:bg-[#c39f2f] transition-colors ml-2"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-white/40 text-[10px] uppercase tracking-wider gap-2 font-light">
          <p>© {new Date().getFullYear()} Pedro Alejandro Fernández Fernández. Todos los derechos reservados.</p>
          <p>Caracas, Venezuela • Remote Worldwide</p>
        </div>

      </div>
    </footer>
  );
};
