import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROFILE_DATA } from '../data/profileData';
import { X, Printer, Download, Mail, MapPin, Building2, GraduationCap, Award, ShieldCheck } from 'lucide-react';

interface CVViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVViewerModal: React.FC<CVViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#111111] border border-white/10 shadow-2xl overflow-hidden my-6 z-10 max-h-[90vh] flex flex-col font-sans"
        >
          {/* Header Bar */}
          <div className="p-4 sm:p-6 bg-[#0a0a0a] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37] font-serif font-bold text-xs flex items-center justify-center">
                CV
              </div>
              <div>
                <h2 className="text-base font-serif font-light text-white leading-none">
                  Curriculum Vitae - Pedro Fernández
                </h2>
                <p className="text-[10px] uppercase tracking-widest text-[#d4af37] mt-1 font-medium">
                  Liderazgo Técnico & Fullstack
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={PROFILE_DATA.personal.cvDownloadUrl}
                download="CV Pedro Fernandez.pdf"
                className="flex items-center gap-1.5 px-3.5 py-2 text-[10px] uppercase tracking-widest font-bold border border-white/10 text-white/80 hover:border-[#d4af37] hover:text-[#d4af37] transition-colors"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Descargar PDF</span>
              </a>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-2 text-[10px] uppercase tracking-widest font-bold bg-[#d4af37] hover:bg-[#c39f2f] text-black transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Imprimir / PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 bg-[#111111] hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable CV Content */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:bg-white print:text-black">
            
            {/* CV Header */}
            <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h1 className="text-2xl sm:text-4xl font-serif font-light text-white leading-tight">
                  {PROFILE_DATA.personal.fullName}
                </h1>
                <p className="text-xs uppercase tracking-widest text-[#d4af37] mt-1 font-medium">
                  {PROFILE_DATA.personal.title}
                </p>
                <p className="text-xs text-white/50 mt-1 font-light">
                  {PROFILE_DATA.personal.location}
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-white/70 font-light">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{PROFILE_DATA.contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>LinkedIn: pedro-alejandro-fernández</span>
                </div>
              </div>
            </div>

            {/* Extracto */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#d4af37] mb-2">
                Extracto
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-light">
                {PROFILE_DATA.personal.bio}
              </p>
            </div>

            {/* Experiencia */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#d4af37] mb-4 pb-1 border-b border-white/10">
                Experiencia Laboral
              </h3>
              <div className="space-y-6">
                {PROFILE_DATA.experience.map((exp) => (
                  <div key={exp.id} className="space-y-1.5">
                    <div className="flex flex-wrap justify-between items-start">
                      <h4 className="text-sm font-serif text-white">
                        {exp.role} — <span className="text-[#d4af37]">{exp.company}</span>
                      </h4>
                      <span className="text-xs text-white/40 font-light">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed font-light">
                      {exp.summary}
                    </p>
                    <ul className="list-disc list-inside text-[11px] text-white/50 space-y-1 font-light">
                      {exp.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Educación */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#d4af37] mb-3 pb-1 border-b border-white/10">
                Educación
              </h3>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-serif text-white">
                    {PROFILE_DATA.personal.education.degree}
                  </h4>
                  <p className="text-xs text-white/50 font-light">
                    {PROFILE_DATA.personal.education.university}
                  </p>
                </div>
                <span className="text-xs text-white/40 font-light">
                  {PROFILE_DATA.personal.education.period}
                </span>
              </div>
            </div>

            {/* Certificaciones */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#d4af37] mb-3 pb-1 border-b border-white/10">
                Certificaciones
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/70 font-light">
                {PROFILE_DATA.certifications.map((cert) => (
                  <div key={cert.name} className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
                    <span>{cert.name} ({cert.issuer})</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
