import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROFILE_DATA, ExperienceItem } from '../data/profileData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  CheckCircle2, 
  Building2,
  Sparkles,
  Layers
} from 'lucide-react';

export const Experience: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string>(PROFILE_DATA.experience[0].id);

  const activeExp = PROFILE_DATA.experience.find(e => e.id === activeExpId) || PROFILE_DATA.experience[0];

  return (
    <section id="experiencia" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-8 h-[1px] bg-[#d4af37]" />
            <p className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-sans font-medium">
              Trayectoria Laboral
            </p>
            <div className="w-8 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white leading-tight">
            Experiencia Profesional
          </h2>
          <p className="mt-3 text-white/60 text-sm font-sans font-light">
            Historial comprobado en liderazgo técnico, desarrollo de software, pasarelas de pago e infraestructura en la nube.
          </p>
        </div>

        {/* Experience Layout: Left Navigation / Right Detailed Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Role Picker List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {PROFILE_DATA.experience.map((exp: ExperienceItem) => {
              const isSelected = exp.id === activeExpId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExpId(exp.id)}
                  className={`w-full text-left p-4 sm:p-5 border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#111111] border-[#d4af37]'
                      : 'bg-[#0a0a0a] hover:bg-[#141414] border-white/10'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`p-2.5 border mt-0.5 transition-colors ${
                      isSelected
                        ? 'bg-[#d4af37] text-black border-[#d4af37]'
                        : 'bg-white/5 text-white/60 border-white/10 group-hover:text-[#d4af37]'
                    }`}>
                      <Building2 className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className={`text-sm font-serif ${isSelected ? 'text-[#d4af37]' : 'text-white group-hover:text-white/90'}`}>
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="text-[9px] uppercase tracking-widest font-sans px-2 py-0.5 border border-[#d4af37] text-[#d4af37] bg-[#d4af37]/10">
                            Actual
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-white/60 font-sans mt-1">
                        {exp.company}
                      </p>

                      <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-white/40 font-sans mt-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#d4af37]" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#d4af37] translate-x-1' : 'text-white/20 group-hover:text-white/60'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Detailed Role Display */}
          <motion.div 
            key={activeExp.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 bg-[#111111] p-6 sm:p-8 border border-white/10 relative"
          >
            {/* Role Header Info */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-sans px-3 py-1 border border-[#d4af37] text-[#d4af37] bg-[#d4af37]/10 mb-2 inline-block">
                  {activeExp.company}
                </span>
                <h3 className="text-2xl font-serif font-light text-white mt-1">
                  {activeExp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-white/60 mt-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                    {activeExp.period} ({activeExp.duration})
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-white/40" />
                    {activeExp.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <p className="text-white/70 text-sm leading-relaxed my-6 font-sans font-light">
              {activeExp.summary}
            </p>

            {/* Key Achievements */}
            <div className="mb-6 font-sans">
              <h4 className="text-[10px] font-medium text-[#d4af37] uppercase tracking-[0.25em] mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                 Logros & Responsabilidades Clave
              </h4>
              <ul className="space-y-3">
                {activeExp.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-6 border-t border-white/10 font-sans">
              <h4 className="text-[10px] font-medium text-[#d4af37] uppercase tracking-[0.25em] mb-3 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
                Tecnologías Utilizadas
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeExp.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-[10px] uppercase tracking-wider bg-[#0a0a0a] text-white/80 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
