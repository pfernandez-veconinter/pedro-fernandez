import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../data/profileData';
import { 
  Code, 
  Server, 
  Database, 
  Cpu, 
  Layers, 
  Terminal, 
  Check, 
  Sparkles 
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const categories = ['Todas', 'Backend', 'Frontend', 'Database', 'Cloud', 'DevOps', 'AI', 'Integration'];

  const allSkills = PROFILE_DATA.skills.categories.flatMap(c => c.skills);

  const filteredSkills = selectedCategory === 'Todas'
    ? allSkills
    : allSkills.filter(s => s.category === selectedCategory);

  return (
    <section id="habilidades" className="py-20 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-8 h-[1px] bg-[#d4af37]" />
            <p className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-sans font-medium">
              Stack Tecnológico
            </p>
            <div className="w-8 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white leading-tight">
            Aptitudes e Dominio Técnico
          </h2>
          <p className="mt-3 text-white/60 text-sm font-sans font-light">
            Herramientas, lenguajes y arquitecturas dominadas con experiencia en producción real.
          </p>
        </div>

        {/* Featured Tech Stack Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {PROFILE_DATA.skills.featured.map((item) => (
            <span
              key={item}
              className="px-4 py-2 text-xs uppercase tracking-[0.2em] font-sans bg-[#111111] text-white/80 border border-white/10 hover:border-[#d4af37] hover:text-[#d4af37] transition-all"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-sans transition-all ${
                selectedCategory === cat
                  ? 'bg-[#d4af37] text-black font-bold'
                  : 'bg-[#111111] text-white/60 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Progress Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              className="bg-[#111111] p-5 border border-white/10 hover:border-[#d4af37]/40 transition-all"
            >
              <div className="flex justify-between items-center mb-2 font-sans">
                <span className="text-sm font-serif text-white">
                  {skill.name}
                </span>
                <span className="text-xs font-mono text-[#d4af37]">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full h-1 bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-[#d4af37]"
                />
              </div>

              <div className="flex justify-between items-center text-[10px] uppercase tracking-wider text-white/40 mt-3 font-sans">
                <span>Dominio Avanzado</span>
                <span className="px-2 py-0.5 border border-white/10 text-[#d4af37] bg-[#0a0a0a]">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
