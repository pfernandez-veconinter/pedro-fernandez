import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioItem } from '../data/profileData';
import { 
  X, 
  ExternalLink, 
  Smartphone, 
  CheckCircle2, 
  Building2, 
  Sparkles, 
  Layers,
  ArrowRight
} from 'lucide-react';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  onClose
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#111111] border border-white/10 shadow-2xl overflow-hidden my-8 z-10"
        >
          {/* Top Banner Image & Close Button */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#0a0a0a]">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 bg-black/70 hover:bg-black text-white/70 hover:text-white border border-white/10 transition-all z-20"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-6 right-6 font-sans">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] uppercase tracking-widest px-3 py-1 bg-[#0a0a0a] text-[#d4af37] border border-[#d4af37]">
                  {project.categoryLabel}
                </span>
                <span className="text-[10px] uppercase tracking-widest px-3 py-1 bg-white/10 text-white/80">
                  Cliente: {project.client}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-light text-white leading-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Metric Highlight Box */}
            {project.metrics && (
              <div className="p-4 bg-[#0a0a0a] border border-[#d4af37]/40 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <div className="font-sans">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#d4af37]">Resultado Destacado:</p>
                  <p className="text-sm text-white/80 font-light">{project.metrics}</p>
                </div>
              </div>
            )}

            {/* Description */}
            <div className="font-sans">
              <h3 className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#d4af37] mb-2">
                Descripción del Proyecto
              </h3>
              <p className="text-white/70 text-sm leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="font-sans">
              <h3 className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#d4af37] mb-3">
                Aspectos Clave Desarrollados
              </h3>
              <div className="space-y-2">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="font-sans">
              <h3 className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#d4af37] mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#d4af37]" />
                Tecnologías & Herramientas
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-[10px] uppercase tracking-wider bg-[#0a0a0a] text-white/80 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-sans">
              <div className="flex items-center gap-3">
                {project.webUrl && (
                  <a
                    href={project.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 text-[10px] uppercase tracking-widest text-white/80 border border-white/20 hover:border-[#d4af37] hover:text-[#d4af37] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-[#d4af37]" />
                    <span>Visitar Sitio Web</span>
                  </a>
                )}

                {(project.playStoreUrl || project.appStoreUrl) && (
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 px-3 py-2 text-[10px] uppercase tracking-widest text-[#d4af37] border border-[#d4af37]/40 bg-[#d4af37]/5">
                      <Smartphone className="w-4 h-4 text-[#d4af37]" />
                      <span>Disponible en Tiendas</span>
                    </span>
                  </div>
                )}
              </div>

              <button
                onClick={onClose}
                className="flex items-center gap-2 px-5 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-black bg-[#d4af37] hover:bg-[#c39f2f] transition-all"
              >
                <span>Cerrar</span>
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
