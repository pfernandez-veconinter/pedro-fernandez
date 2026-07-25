import React from 'react';
import { motion } from 'motion/react';
import { PROFILE_DATA, ServiceItem } from '../data/profileData';
import { 
  Code2, 
  CreditCard, 
  Sparkles, 
  Server, 
  Smartphone, 
  Users, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-6 h-6" />;
      case 'CreditCard': return <CreditCard className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Server': return <Server className="w-6 h-6" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      default: return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="servicios" className="py-20 relative z-10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-8 h-[1px] bg-[#d4af37]" />
            <p className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-sans font-medium">
              Servicios Profesionales
            </p>
            <div className="w-8 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white leading-tight">
            ¿Cómo Puedo Ayudar en tu Empresa?
          </h2>
          <p className="mt-3 text-white/60 text-sm font-sans font-light">
            Soluciones de software de punta a punta, arquitectura escalable y soporte técnico especializado.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROFILE_DATA.services.map((service: ServiceItem, idx: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`bg-[#111111] p-6 sm:p-8 border flex flex-col justify-between relative group transition-all duration-300 ${
                service.popular ? 'border-[#d4af37]/60' : 'border-white/10 hover:border-[#d4af37]/40'
              }`}
            >
              {/* Top Accent Gold Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header row: Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3.5 border transition-transform duration-300 ${
                    service.popular 
                      ? 'border-[#d4af37] text-[#d4af37] bg-[#d4af37]/10' 
                      : 'border-white/10 text-white/80 bg-white/5'
                  }`}>
                    {getIcon(service.iconName)}
                  </div>

                  <span className={`text-[10px] font-sans uppercase tracking-[0.2em] px-3 py-1 border ${
                    service.popular
                      ? 'border-[#d4af37] text-[#d4af37] bg-[#d4af37]/10'
                      : 'border-white/10 text-white/60 bg-[#0a0a0a]'
                  }`}>
                    {service.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-serif font-light text-white group-hover:text-[#d4af37] transition-colors mb-1">
                  {service.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-4 font-sans font-medium">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6 font-sans font-light">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 mb-8 border-t border-white/10 pt-4 font-sans">
                  <p className="text-[10px] font-medium text-[#d4af37] uppercase tracking-[0.25em] mb-3">
                    Entregables Clave:
                  </p>
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-white/70">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Action */}
              <a
                href="#contacto"
                className="w-full flex items-center justify-between py-3 px-4 text-[10px] uppercase font-bold tracking-[0.2em] font-sans text-white border border-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all"
              >
                <div className="flex items-center gap-2">
                  <span>Solicitar Información</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-1 transition-transform" />
              </a>

            </motion.div>
          ))}
        </div>

        {/* Global Banner for Custom Inquiries */}
        <div className="mt-12 bg-[#111111] p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-serif font-light text-white">¿Tienes un proyecto especial a medida?</h4>
            <p className="text-xs sm:text-sm text-white/60 font-sans font-light mt-1">
              Podemos diseñar un esquema de trabajo por horas, por entregables o como Tech Lead dedicado.
            </p>
          </div>
          <a
            href="#contacto"
            className="flex-shrink-0 bg-white text-black px-6 py-3.5 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#e5e5e5] transition-all font-sans"
          >
            Enviar Consulta Directa
          </a>
        </div>

      </div>
    </section>
  );
};
