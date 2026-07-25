import React from 'react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../data/profileData';
import { 
  GraduationCap, 
  Award, 
  Languages, 
  CheckCircle2, 
  Sparkles,
  Server,
  Database,
  Terminal,
  Cpu
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-8 h-[1px] bg-[#d4af37]" />
            <p className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-sans font-medium">
              Perfil Profesional
            </p>
            <div className="w-8 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white leading-tight">
            Trayectoria, Formación y Habilidades
          </h2>
          <p className="mt-3 text-white/60 text-sm font-sans font-light">
            Conoce más sobre mi experiencia técnica, certificaciones internacionales e historial académico.
          </p>
        </div>

        {/* Top Grid: Extract & Key Aptitudes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Extract Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#111111] p-6 sm:p-8 border border-white/10 relative overflow-hidden"
          >
            <h3 className="text-2xl font-serif font-light text-white mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#d4af37]" />
              Extracto Profesional
            </h3>

            <p className="text-white/70 text-sm leading-relaxed mb-6 font-sans font-light">
              Desarrollador de software con <strong className="text-white font-medium">más de 6 años de experiencia</strong> trabajando como líder técnico con metodologías ágiles, desarrollando el backend de aplicativos móviles, sitios web, Docker, backoffices, administración de base de datos MongoDB y de servidores en Debian y CentOS, scripts de automatización para servidores y uso de herramientas como <strong className="text-[#d4af37] font-medium">Amazon Rekognition, Amazon SES, Amazon EC2 y Amazon S3</strong>.
            </p>

            <p className="text-white/70 text-sm leading-relaxed font-sans font-light">
              Busco nuevas oportunidades laborales en las que pueda aplicar mis habilidades técnicas y de liderazgo para llevar a cabo proyectos con altos estándares de calidad. Me apasiona trabajar en equipo y enfrentar nuevos desafíos que me permitan seguir creciendo profesionalmente.
            </p>

            {/* Core Competencies checklist */}
            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/70 font-sans">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>Liderazgo técnico en equipos ágiles</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>Microservicios y Pasarelas de Pago</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>Infraestructura Cloud AWS y Docker</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>Desarrollo de Apps en Play/App Store</span>
              </div>
            </div>
          </motion.div>

          {/* Education & Languages */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Education Box */}
            <div className="bg-[#111111] p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 border border-[#d4af37]/40 text-[#d4af37] bg-[#d4af37]/5">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-light text-white">Educación Universitaria</h4>
                  <p className="text-xs text-white/50 uppercase tracking-widest">{PROFILE_DATA.personal.education.university}</p>
                </div>
              </div>

              <div className="bg-[#0a0a0a] p-4 border border-white/5">
                <div className="flex justify-between items-start mb-1">
                  <h5 className="text-sm font-serif text-[#d4af37]">
                    {PROFILE_DATA.personal.education.degree}
                  </h5>
                  <span className="text-[10px] uppercase tracking-widest px-2.5 py-0.5 border border-white/10 text-white/60">
                    {PROFILE_DATA.personal.education.period}
                  </span>
                </div>
                <p className="text-xs text-white/50 font-sans mt-2">
                  Universidad Católica Andrés Bello (UCAB) - Caracas, Venezuela.
                </p>
              </div>
            </div>

            {/* Languages Box */}
            <div className="bg-[#111111] p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 border border-[#d4af37]/40 text-[#d4af37] bg-[#d4af37]/5">
                  <Languages className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-light text-white">Idiomas</h4>
                  <p className="text-xs text-white/50 uppercase tracking-widest">Dominio lingüístico</p>
                </div>
              </div>

              <div className="space-y-4">
                {PROFILE_DATA.languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-xs font-sans uppercase tracking-wider mb-1">
                      <span className="text-white/80">{lang.name}</span>
                      <span className="text-[#d4af37]">{lang.level}</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 overflow-hidden">
                      <div 
                        className="h-full bg-[#d4af37]"
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

        {/* Certifications Section */}
        <div className="bg-[#111111] p-6 sm:p-8 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 border border-[#d4af37]/40 text-[#d4af37] bg-[#d4af37]/5">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-light text-white">Certificaciones y Especializaciones</h3>
              <p className="text-xs text-white/50 uppercase tracking-widest">Acreditaciones oficiales obtenidas</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROFILE_DATA.certifications.map((cert) => (
              <div 
                key={cert.name}
                className="p-4 bg-[#0a0a0a] hover:bg-[#141414] border border-white/5 hover:border-[#d4af37]/40 transition-all flex items-start gap-3 group"
              >
                <div className="p-2.5 border border-[#d4af37]/30 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-sans font-medium text-white group-hover:text-[#d4af37] transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-[11px] text-white/50 mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
