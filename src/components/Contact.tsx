import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../data/profileData';
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check,
  Github
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Desarrollo Fullstack & APIs',
    budget: '$500 - $1,500',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Build mailto link as fallback
    const subject = encodeURIComponent(`Nuevo mensaje de contacto: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Servicio Interesado: ${formData.service}\n` +
      `Presupuesto Estimado: ${formData.budget}\n\n` +
      `Mensaje:\n${formData.message}`
    );
    window.location.href = `mailto:${PROFILE_DATA.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contacto" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-8 h-[1px] bg-[#d4af37]" />
            <p className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-sans font-medium">
              Contacto Directo
            </p>
            <div className="w-8 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white leading-tight">
            Hablemos de tu Proyecto
          </h2>
          <p className="mt-3 text-white/60 text-sm font-sans font-light">
            Escríbeme para solicitar un presupuesto, consultoría o contratar mis servicios como Desarrollador Senior / Tech Lead.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Cards: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="bg-[#111111] p-6 border border-white/10 flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3.5 border border-[#d4af37]/40 text-[#d4af37] bg-[#d4af37]/5">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="font-sans">
                  <h3 className="text-[10px] uppercase tracking-widest text-[#d4af37] font-medium">
                    Correo Electrónico
                  </h3>
                  <a 
                    href={`mailto:${PROFILE_DATA.contact.email}`}
                    className="text-sm font-light text-white hover:text-[#d4af37] transition-colors block mt-0.5"
                  >
                    {PROFILE_DATA.contact.email}
                  </a>
                  <p className="text-[11px] text-white/40 mt-1 font-light">
                    Respuesta rápida garantizada
                  </p>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 bg-[#0a0a0a] hover:bg-[#141414] border border-white/10 text-white/70 hover:text-white transition-colors"
                title="Copiar email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#d4af37]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PROFILE_DATA.contact.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111111] p-6 border border-white/10 hover:border-[#d4af37]/40 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-4 font-sans">
                <div className="p-3.5 border border-[#d4af37]/40 text-[#d4af37] bg-[#d4af37]/5 group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest text-[#d4af37] font-medium">
                    Perfil en LinkedIn
                  </h3>
                  <p className="text-sm font-light text-white group-hover:text-[#d4af37] transition-colors mt-0.5">
                    Pedro Alejandro Fernández Fernández
                  </p>
                  <p className="text-[11px] text-white/40 mt-1 font-light">
                    Red profesional y recomendaciones
                  </p>
                </div>
              </div>
              <span className="text-white/20 group-hover:text-[#d4af37] transition-colors font-sans">→</span>
            </a>

            {/* Location Box */}
            <div className="bg-[#111111] p-6 border border-white/10 flex items-center gap-4 font-sans">
              <div className="p-3.5 border border-white/10 text-white/60 bg-[#0a0a0a]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-widest text-[#d4af37] font-medium">
                  Ubicación
                </h3>
                <p className="text-xs text-white/80 font-light mt-0.5">
                  {PROFILE_DATA.personal.location}
                </p>
              </div>
            </div>

          </div>

          {/* Right Form: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#111111] p-6 sm:p-8 border border-white/10 font-sans">
            <h3 className="text-xl font-serif font-light text-white mb-1">
              Formulario de Consulta Directa
            </h3>
            <p className="text-xs text-white/50 font-light mb-6">
              Llega directamente a la bandeja de entrada personal de Pedro.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center bg-[#0a0a0a] border border-[#d4af37] space-y-4"
              >
                <div className="w-16 h-16 border border-[#d4af37] text-[#d4af37] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-serif font-light text-white">
                  ¡Mensaje Preparado!
                </h4>
                <p className="text-xs text-white/70 max-w-md mx-auto leading-relaxed font-light">
                  Se ha abierto tu cliente de correo para enviar el mensaje.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 text-[10px] uppercase tracking-widest font-bold border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/80 mb-1.5">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. María Ramos"
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white text-xs focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/80 mb-1.5">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="maria@empresa.com"
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white text-xs focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/80 mb-1.5">
                    Servicio de Interés
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white text-xs focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="Desarrollo Fullstack & APIs">Desarrollo Fullstack & APIs REST</option>
                    <option value="Integración de Pasarelas de Pago">Integración de Pasarelas de Pago</option>
                    <option value="Desarrollo Impulsado por IA">Desarrollo Impulsado por IA</option>
                    <option value="DevOps & Servidores Cloud">DevOps & Servidores Cloud</option>
                    <option value="Desarrollo Móvil Backend">Desarrollo Móvil Backend & Apps</option>
                    <option value="Liderazgo Técnico & Asesoría">Liderazgo Técnico & Asesoría</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/80 mb-1.5">
                    Detalles del Proyecto o Mensaje *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe los objetivos, requerimientos técnicos o fechas tentativas..."
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white text-xs focus:outline-none focus:border-[#d4af37] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 text-xs uppercase font-bold tracking-[0.2em] text-black bg-[#d4af37] hover:bg-[#c39f2f] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensaje Directo</span>
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
