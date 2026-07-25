import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROFILE_DATA, PortfolioItem } from '../data/profileData';
import { ProjectModal } from './ProjectModal';
import { 
  Briefcase, 
  ExternalLink, 
  Sparkles, 
  Smartphone, 
  Code2, 
  Layers, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'payments', label: 'Pasarelas de Pago' },
    { id: 'mobile', label: 'Apps Móviles' },
    { id: 'fullstack', label: 'Fullstack & Web' },
    { id: 'api', label: 'APIs & Microservicios' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROFILE_DATA.portfolio
    : PROFILE_DATA.portfolio.filter(p => p.category === activeCategory);

  return (
    <section id="portafolio" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-8 h-[1px] bg-[#d4af37]" />
            <p className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-sans font-medium">
              Portafolio de Proyectos
            </p>
            <div className="w-8 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white leading-tight">
            Casos de Éxito & Desarrollos
          </h2>
          <p className="mt-3 text-white/60 text-sm font-sans font-light">
            Muestra de aplicaciones móviles en tiendas, plataformas de pago bancario y arquitecturas backend.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-sans transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#d4af37] text-black font-bold'
                  : 'bg-[#111111] text-white/60 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: PortfolioItem, idx: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-[#111111] border border-white/10 hover:border-[#d4af37]/60 overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Preview Container */}
              <div className="relative h-48 w-full overflow-hidden bg-[#0a0a0a]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center font-sans">
                  <span className="text-[10px] uppercase tracking-widest px-3 py-1 bg-[#0a0a0a]/90 text-[#d4af37] border border-[#d4af37]/40">
                    {project.categoryLabel}
                  </span>

                  {project.featured && (
                    <span className="text-[9px] uppercase tracking-widest px-2.5 py-1 bg-[#d4af37] text-black font-bold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Destacado
                    </span>
                  )}
                </div>

                {/* Client Name Pill */}
                <div className="absolute bottom-3 left-3 font-sans">
                  <span className="text-[10px] uppercase tracking-wider text-white/70 bg-[#0a0a0a]/90 px-2.5 py-0.5 border border-white/10">
                    {project.client}
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-light text-white group-hover:text-[#d4af37] transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-white/60 text-xs font-sans font-light line-clamp-3 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Highlights preview */}
                  <div className="space-y-1.5 mb-6 font-sans">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-white/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills Footer */}
                <div className="font-sans">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-[10px] uppercase tracking-wider bg-[#0a0a0a] text-white/60 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-[10px] bg-[#0a0a0a] text-white/30">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] font-bold text-[#d4af37] group-hover:text-[#d4af37]">
                    <span>Ver Detalles Completos</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
