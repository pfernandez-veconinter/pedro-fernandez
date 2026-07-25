/**
 * ARCHIVO DE CONFIGURACIÓN Y DATOS DE PEDRO ALEJANDRO FERNÁNDEZ FERNÁNDEZ
 * =====================================================================
 * Este archivo contiene toda la información de tu Curriculum, Servicios,
 * Portafolio y Redes Sociales.
 *
 * ¡Es muy fácil de editar! Solo cambia los valores de las propiedades a continuación.
 */

import cvPdfUrl from "../assets/files/CV Pedro Fernandez.pdf";

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge: string;
  deliverables: string[];
  popular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: "mobile" | "fullstack" | "api" | "cloud" | "payments";
  categoryLabel: string;
  summary: string;
  description: string;
  technologies: string[];
  metrics?: string;
  image: string;
  highlights: string[];
  featured?: boolean;
  appStoreUrl?: string;
  playStoreUrl?: string;
  webUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  summary: string;
  achievements: string[];
  techStack: string[];
  current?: boolean;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  icon: string;
}

export const PROFILE_DATA = {
  // Configuración personal y encabezado
  personal: {
    fullName: "Pedro Alejandro Fernández Fernández",
    title: "Líder Técnico & Desarrollador Fullstack Sr.",
    tagline:
      "Especialista en .NET, Java, Node.js, Cloud AWS, Integraciones de Pago y Desarrollo Impulsado por IA",
    bio: "Desarrollador de software con más de 6 años de experiencia trabajando como líder técnico con metodologías ágiles. Experto en backend de aplicaciones móviles y web, arquitectura de microservicios, bases de datos MongoDB/SQL Server, infraestructura en Debian/CentOS/AWS y herramientas de IA.",
    location:
      "Caracas, Venezuela (Disponible para proyectos remotos a nivel global)",
    experienceYears: "6+ años",
    projectsCompleted: "20+",
    education: {
      degree: "Ingeniería en Informática",
      university: "Universidad Católica Andrés Bello (UCAB)",
      period: "2013 - 2021",
    },
    // Imagen de perfil principal
    profileImage: "/src/assets/images/pedro.jpg",
    cvDownloadUrl: cvPdfUrl,
  },

  // Información de contacto y redes
  contact: {
    email: "pedropaff7@gmail.com",
    linkedIn:
      "https://www.linkedin.com/in/pedro-alejandro-fern%C3%A1ndez-fern%C3%A1ndez/",
    gitHub: "https://github.com/pedropaff7",
    locationMapUrl: "https://maps.google.com/?q=Caracas,Venezuela",
  },

  // Servicios para vender
  services: [
    {
      id: "fullstack_dev",
      title: "Desarrollo Fullstack & APIs REST",
      subtitle: "Sistemas Web, Backends Scalables & Microservicios",
      description:
        "Construcción de aplicaciones web de alto rendimiento usando .NET, Node.js/Express, Spring Boot, Angular y Vue.js. Diseño e implementación de APIs REST robustas, seguras y documentadas.",
      iconName: "Code2",
      badge: "Más Solicitado",
      popular: true,
      deliverables: [
        "Arquitectura limpia en .NET / Node.js / Java",
        "APIs RESTful de alta velocidad y documentación OpenAPI",
        "Frontends modernos y responsivos en Angular / Vue / React",
        "Integración de autenticación JWT / OAuth2",
      ],
    },
    {
      id: "payment_gateways",
      title: "Integración de Pasarelas de Pago",
      subtitle: "Scotiabank, PayPal, Payeezy & Banesco Pagos",
      description:
        "Integración segura de transacciones nacionales e internacionales. Implementación de webhooks, verificación de pagos en tiempo real, encriptación y procesamiento mediante microservicios.",
      iconName: "CreditCard",
      badge: "Especialidad",
      popular: false,
      deliverables: [
        "Integración de PayPal, Scotiabank, Payeezy y Banesco Pagos",
        "Sistemas de liquidación transaccional e historial auditable",
        "Manejo seguro de tokens, callbacks y fallos en pago",
        "Monitoreo transaccional y alertas automáticas",
      ],
    },
    {
      id: "ai_development",
      title: "Desarrollo Impulsado por IA",
      subtitle: "Amazon Rekognition & Agentes Inteligentes",
      description:
        "Incorporación de capacidades de Inteligencia Artificial como visión computacional, procesamiento de documentos, automatización de flujos y chatbots inteligentes impulsados por IA.",
      iconName: "Sparkles",
      badge: "Innovación",
      popular: true,
      deliverables: [
        "Procesamiento de imágenes y verificación facial con Rekognition",
        "Integración de LLMs y Gemini API para análisis de datos",
        "Automatización de procesos operativos mediante IA",
        "Extracción inteligente de información en documentos",
      ],
    },
    {
      id: "cloud_devops",
      title: "DevOps, Docker & Servidores Cloud",
      subtitle: "AWS (EC2, S3, SES) & Administración Linux",
      description:
        "Configuración, optimización y mantenimiento de infraestructura en la nube y servidores locales en Linux (Debian/CentOS). Despliegues containerizados con Docker y scripts BASH/Python de automatización.",
      iconName: "Server",
      badge: "Infraestructura",
      popular: false,
      deliverables: [
        "Despliegues en AWS (EC2, S3, SES, Rekognition)",
        "Contenerización de servicios con Docker & Docker Compose",
        "Administración de servidores Debian/CentOS y seguridad",
        "Scripts de respaldos de BD y liberación de memoria",
      ],
    },
    {
      id: "mobile_backend",
      title: "Desarrollo Móvil Backend & Apps",
      subtitle: "Ionic, Angular & Tiendas App Store / Play Store",
      description:
        "Desarrollo de backends especializados para aplicaciones móviles Android y iOS, así como aplicaciones híbridas con Ionic/Angular listas para publicar en Google Play Store y Apple App Store.",
      iconName: "Smartphone",
      badge: "Mobile & Stores",
      popular: false,
      deliverables: [
        "Backend optimizado para consumo móvil con bajo latencia",
        "Desarrollo frontend móvil híbrido en Ionic / Angular",
        "Gestión de despliegue y aprobación en Play Store & App Store",
        "Notificaciones push y sincronización offline",
      ],
    },
    {
      id: "tech_leadership",
      title: "Liderazgo Técnico & Asesoría Ágil",
      subtitle: "Scrum, Arquitectura & Base de Datos",
      description:
        "Dirección de equipos de desarrollo bajo metodologías ágiles, administración de bases de datos MongoDB y SQL Server, y diseño de arquitecturas escalables preparadas para alto tráfico.",
      iconName: "Users",
      badge: "Consultoría",
      popular: false,
      deliverables: [
        "Liderazgo de equipo ágil y estimación de sprints",
        "Modelado de datos en MongoDB y SQL Server (M320)",
        "Revisiones de código (Code Reviews) y estándares",
        "Optimización de consultas y rendimiento de bases de datos",
      ],
    },
  ] as ServiceItem[],

  // Proyectos del Portafolio
  portfolio: [
    {
      id: "vecoaccess",
      title: "VecoAccess - Plataforma Web y Pasarelas de Pago",
      client: "Veconinter",
      category: "payments",
      categoryLabel: "Fullstack & Pagos",
      summary:
        "Aplicativo web transaccional con microservicios de pago integrados (Scotiabank, PayPal, Payeezy y Banesco Pagos).",
      description:
        "Desarrollo de nuevas funcionalidades y mantenimiento del aplicativo web corporativo VecoAccess. Diseñé e implementé la arquitectura de microservicios para procesar cobros y transacciones bancarias nacionales e internacionales con alta seguridad.",
      technologies: [
        ".NET",
        "Node.js",
        "PayPal API",
        "Scotiabank API",
        "Payeezy",
        "Banesco Pagos",
        "Microservicios",
        "SQL Server",
      ],
      metrics: "Integración de 4 pasarelas bancarias críticas",
      image:
        "https://images.unsplash.com/photo-1556742049-0a67daf64f42?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Arquitectura de microservicios para aislamiento de transacciones de pago",
        "Mantenimiento continuo y nuevas características para la plataforma VecoAccess",
        "Integración de pagos multimoneda internacionales y locales",
      ],
      featured: true,
      webUrl: "https://veconinter.com",
    },
    {
      id: "payall-wallet",
      title: "Payall Billetera Digital (Play Store & App Store)",
      client: "Asesores Digitales PLC",
      category: "mobile",
      categoryLabel: "App Móvil & AWS",
      summary:
        "Billetera electrónica de pagos con despliegue en producción en AWS y apps nativas/híbridas en iOS y Google Play.",
      description:
        "Líder Técnico a cargo de Payall Billetera. Diseñé la arquitectura del sistema, administré servidores y bases de datos en AWS, desarrollé las APIs REST y apoyé al equipo frontend con Ionic para desplegar exitosamente la aplicación en las tiendas de Apple y Google.",
      technologies: [
        "Ionic",
        "Angular",
        "Express / Node.js",
        "AWS EC2",
        "AWS S3",
        "MongoDB",
        "REST APIs",
        "BASH",
      ],
      metrics: "Disponible en Google Play Store y Apple App Store",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Liderazgo técnico del equipo de desarrollo de principio a fin",
        "Despliegue e infraestructura altamente disponible en AWS",
        "Creación de APIs REST y gestión completa de tiendas móviles",
      ],
      featured: true,
      playStoreUrl: "https://play.google.com/store",
      appStoreUrl: "https://apple.com/app-store",
    },
    {
      id: "payall-business",
      title: "Payall Business API & Módulos Transaccionales",
      client: "Asesores Digitales PLC",
      category: "api",
      categoryLabel: "APIs & Arquitectura",
      summary:
        "Diseño e implementación de arquitectura de módulos de API REST transaccionales con documentación técnica.",
      description:
        "Apoyo fundamental en la concepción y desarrollo del proyecto Payall Business. Diseñé los módulos centrales de la API REST, redacté la documentación completa de integración y creé automatizaciones en BASH/Python para la gestión de servidores.",
      technologies: [
        "Node.js",
        "Express",
        "REST APIs",
        "MongoDB",
        "Docker",
        "Python",
        "BASH",
        "CentOS",
      ],
      metrics: "Documentación y arquitectura para integración B2B",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Definición y construcción de arquitectura de API REST B2B",
        "Scripts de respaldo automatizado de base de datos y optimización de memoria",
        "Despliegue containerizado con Docker en servidores Linux",
      ],
      featured: false,
    },
    {
      id: "cms-drupal-express",
      title: "Sistema CMS Transaccional Integrado",
      client: "Cliente Corporativo",
      category: "cloud",
      categoryLabel: "Web & DevOps",
      summary:
        "Sitio web cliente combinando Drupal CMS con API REST en Express/Node.js desplegado en contenedores Docker.",
      description:
        "Construcción de plataforma web con gestor de contenido Drupal acoplado a una API en Express/NodeJS para comunicarse con múltiples sistemas transaccionales legacy. Despliegue automatizado con Docker en entornos CentOS/Debian.",
      technologies: [
        "Drupal",
        "Express",
        "Node.js",
        "Docker",
        "Debian",
        "Python",
        "MySQL",
      ],
      metrics: "Conexión transparente con múltiples sistemas externos",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Integración entre CMS y microservicio Node.js",
        "Scripts automatizados en Python/BASH para respaldos en caliente",
        "Ambiente Dockerizado para desarrollo e integración continua",
      ],
      featured: false,
    },
    {
      id: "mobile-apps-oniric",
      title: "Aplicaciones Móviles Oniric Alarm & Braineka",
      client: "Alquímica Quimérica C.A.",
      category: "mobile",
      categoryLabel: "Apps Móviles",
      summary:
        "Desarrollo de aplicaciones móviles distribuidas en Play Store y Web utilizando Ionic y Angular.",
      description:
        "Desarrollo frontend y mobile de los aplicativos Oniric Alarm (móvil) y Braineka (móvil y web). Encargado de la lógica de interfaz, sincronización de datos y el proceso de compilación y publicación en las tiendas oficiales de Google y Apple.",
      technologies: [
        "Ionic",
        "Angular",
        "JavaScript",
        "HTML5/CSS3",
        "PHP",
        "cPanel",
        "MySQL",
      ],
      metrics: "2 Apps publicadas en tiendas de aplicaciones",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Desarrollo híbrido de alto rendimiento en Ionic + Angular",
        "Soporte multiplataforma para web, Android y iOS",
        "Administración y respaldo de bases de datos MySQL en cPanel",
      ],
      featured: false,
      playStoreUrl: "https://play.google.com/store",
    },
    {
      id: "psychology-booking",
      title: "Sistema Web de Consultas y Citas con PayPal",
      client: "Proyecto de Titulación / UCAB",
      category: "fullstack",
      categoryLabel: "Fullstack & Reservas",
      summary:
        "Sistema completo de agendamiento de citas psicológicas con pagos automatizados PayPal.",
      description:
        "Plataforma web desarrollada en Angular y Spring Boot (Java) que permite a los usuarios agendar citas psicológicas en línea, seleccionar horarios disponibles y pagar de forma inmediata mediante integración con la pasarela de PayPal.",
      technologies: [
        "Angular",
        "Spring Boot (Java)",
        "PayPal Sandbox/Live",
        "REST API",
        "SQL Server",
      ],
      metrics: "Sistema de agendamiento 100% automatizado",
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Integración completa con el API de PayPal para pasarela de cobro",
        "Control de agenda médica y selección de turnos en tiempo real",
        "Backend robusto estructurado en Java Spring Boot",
      ],
      featured: true,
    },
    {
      id: "varguilla-asociados",
      title: "Sitio Web Corporativo Varguilla & Asociados",
      client: "Varguilla & Asociados",
      category: "fullstack",
      categoryLabel: "Desarrollo Web",
      summary:
        "Desarrollo web institucional y gestión de lanzamientos en Apple App Store.",
      description:
        "Creación del portal web corporativo para la firma Varguilla y Asociados, optimización de velocidad, SEO técnico y apoyo en los despliegues de aplicativos móviles corporativos en la App Store.",
      technologies: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "PHP",
        "WordPress",
        "App Store Publishing",
      ],
      metrics: "Portal institucional con alta velocidad de carga",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Diseño adaptativo y optimización para buscadores",
        "Subidas de versiones a Apple App Store Connect",
        "Mantenimiento preventivo y hosting",
      ],
      featured: false,
    },
  ] as PortfolioItem[],

  // Experiencia Laboral Detallada
  experience: [
    {
      id: "exp_veconinter_lead",
      role: "Líder de Aplicaciones No Core",
      company: "Veconinter",
      period: "Abril 2026 - Presente",
      duration: "En curso (4 meses)",
      location: "Distrito Federal, Venezuela",
      summary:
        "Liderazgo técnico y gestión estratégica del ecosistema de aplicaciones secundarias y servicios de soporte corporativo.",
      achievements: [
        "Dirección de arquitectura y estándares de desarrollo para aplicaciones corporativas no estratégicas.",
        "Coordinación de entregables ágiles y supervisión de calidad de código.",
        "Supervisión del rendimiento y seguridad de las soluciones desplegadas.",
      ],
      techStack: [".NET", "Node.js", "Agile", "MongoDB", "Docker", "AWS"],
      current: true,
    },
    {
      id: "exp_veconinter_fullstack",
      role: "Desarrollador Full Stack",
      company: "Veconinter",
      period: "Julio 2023 - Abril 2026",
      duration: "2 años 10 meses",
      location: "Caracas, Distrito Federal, Venezuela",
      summary:
        "Desarrollador responsable del núcleo del aplicativo web VecoAccess e integración de pasarelas de pago globales.",
      achievements: [
        "Mantenimiento evolutivo y creación de nuevos módulos para la plataforma web de clientes VecoAccess.",
        "Construcción exitosa de microservicios para integrar métodos de pago internacionales y nacionales: Scotiabank, PayPal, Payeezy y Banesco Pagos.",
        "Refactorización de procesos de pagos para garantizar consistencia transaccional y cero pérdida de datos.",
      ],
      techStack: [
        ".NET",
        "Node.js",
        "Express",
        "PayPal API",
        "Scotiabank",
        "Banesco Pagos",
        "Payeezy",
        "SQL Server",
      ],
      current: false,
    },
    {
      id: "exp_asesores_lead",
      role: "Líder Técnico & Arquitecto",
      company: "Asesores Digitales PLC, C.A",
      period: "Agosto 2019 - Julio 2023",
      duration: "4 años",
      location: "Caracas, Distrito Federal, Venezuela",
      summary:
        "Líder de proyecto y arquitecto backend para Payall Billetera (disponible en iOS y Android) e infraestructura en la nube.",
      achievements: [
        "Diseño integral de la arquitectura del sistema transaccional Payall Billetera.",
        "Administración de servidores Linux y bases de datos en infraestructura en la nube AWS.",
        "Desarrollo de las APIs REST principales y orientación al equipo de desarrollo frontend en Ionic.",
        "Publicación y soporte continuo de las aplicaciones en Apple App Store y Google Play Store.",
      ],
      techStack: [
        "Node.js",
        "Express",
        "Ionic",
        "Angular",
        "AWS EC2/S3",
        "MongoDB",
        "REST APIs",
        "AWS Rekognition",
      ],
      current: false,
    },
    {
      id: "exp_asesores_dev",
      role: "Desarrollador de Software & DevOps",
      company: "Asesores Digitales PLC, C.A",
      period: "Agosto 2019 - Julio 2023",
      duration: "Simultáneo",
      location: "Caracas, Venezuela",
      summary:
        "Desarrollador backend de Payall Business, automatizaciones de servidores y despliegues con Docker.",
      achievements: [
        "Construcción de módulos API REST para Payall Business y redacción de documentación técnica.",
        "Creación de sitio web para clientes conectando Drupal con API Express en contenedores Docker.",
        "Programación de scripts de automatización en BASH y Python para liberación de memoria y respaldos automatizados de BD.",
      ],
      techStack: [
        "Node.js",
        "Express",
        "Drupal",
        "Docker",
        "Python",
        "BASH",
        "Debian/CentOS",
      ],
      current: false,
    },
    {
      id: "exp_freelance",
      role: "Desarrollador de Software Autónomo / Consultor",
      company: "Proyectos Independientes",
      period: "Febrero 2017 - Presente",
      duration: "9+ años",
      location: "Remoto / Internacional",
      summary:
        "Desarrollo de proyectos a medida, sitios web corporativos y publicación de aplicaciones móviles.",
      achievements: [
        "Construcción del portal corporativo Varguilla y Asociados.",
        "Gestión de cuentas de desarrollador y procesos de aprobación en Apple App Store y Google Play.",
        "Consultoría en optimización de rendimiento y bases de datos.",
      ],
      techStack: [
        "JavaScript",
        "Node.js",
        ".NET",
        "PHP",
        "WordPress",
        "App Store Connect",
      ],
      current: true,
    },
    {
      id: "exp_alquimica",
      role: "Desarrollador Frontend & Móvil",
      company: "Alquímica Quimérica C.A.",
      period: "Agosto 2017 - Agosto 2019",
      duration: "2 años 1 mes",
      location: "Venezuela",
      summary:
        "Desarrollo de aplicaciones móviles y mantenimiento de plataformas web transaccionales.",
      achievements: [
        "Desarrollo de las apps Oniric Alarm (Play Store) y Braineka (Play Store y Web) con Ionic y Angular.",
        "Desarrollo de sistema de agendamiento de citas psicológicas con pasarela PayPal (Angular + Spring Boot).",
        "Administración y respaldos de bases de datos MySQL en cPanel y mantenimiento de sitios WordPress/PHP.",
      ],
      techStack: [
        "Ionic",
        "Angular",
        "Java Spring Boot",
        "PayPal",
        "PHP",
        "MySQL",
        "cPanel",
      ],
      current: false,
    },
  ] as ExperienceItem[],

  // Habilidades agrupadas
  skills: {
    featured: [
      ".NET / C#",
      "Node.js & Express",
      "Java / Spring Boot",
      "JavaScript / TypeScript",
      "Angular",
      "Vue.js",
      "MongoDB",
      "SQL Server",
      "AWS (EC2/S3/SES/Rekognition)",
      "Docker",
      "Pasarelas de Pago",
      "AI-Powered Dev",
    ],
    categories: [
      {
        title: "Backend & Frameworks",
        skills: [
          { name: ".NET / ASP.NET MVC / C#", level: 92, category: "Backend" },
          {
            name: "Node.js & Express / NestJS",
            level: 95,
            category: "Backend",
          },
          { name: "Java & Spring Boot", level: 85, category: "Backend" },
          { name: "PHP / WordPress", level: 82, category: "Backend" },
          {
            name: "APIs RESTful & Microservicios",
            level: 98,
            category: "Backend",
          },
        ],
      },
      {
        title: "Frontend & Mobile",
        skills: [
          { name: "Angular", level: 90, category: "Frontend" },
          { name: "Vue.js", level: 85, category: "Frontend" },
          { name: "JavaScript / TypeScript", level: 95, category: "Frontend" },
          { name: "Ionic Framework", level: 88, category: "Mobile" },
          {
            name: "HTML5 / CSS3 / Tailwind CSS",
            level: 92,
            category: "Frontend",
          },
        ],
      },
      {
        title: "Bases de Datos & Cloud",
        skills: [
          {
            name: "MongoDB & Data Modeling (M320)",
            level: 95,
            category: "Database",
          },
          { name: "SQL Server / MySQL", level: 90, category: "Database" },
          {
            name: "AWS (EC2, S3, SES, Rekognition)",
            level: 88,
            category: "Cloud",
          },
          { name: "Docker & Containerización", level: 86, category: "DevOps" },
          {
            name: "Servidores Linux (Debian / CentOS)",
            level: 88,
            category: "DevOps",
          },
        ],
      },
      {
        title: "IA, Pagos & Herramientas",
        skills: [
          {
            name: "AI Powered Development (Gemini/LLMs)",
            level: 90,
            category: "AI",
          },
          { name: "Amazon Rekognition (Visión IA)", level: 85, category: "AI" },
          {
            name: "Pasarelas (PayPal, Scotiabank, Payeezy, Banesco)",
            level: 95,
            category: "Integration",
          },
          { name: "Scripts BASH & Python", level: 88, category: "Automation" },
          {
            name: "Metodologías Ágiles (Scrum)",
            level: 92,
            category: "Management",
          },
        ],
      },
    ],
  },

  // Certificaciones oficiales del PDF
  certifications: [
    {
      name: "Requerimientos Ágiles",
      issuer: "Agile Certification",
      icon: "Award",
    },
    {
      name: "Nest: Desarrollo backend escalable con Node",
      issuer: "Backend Escalable Certification",
      icon: "Server",
    },
    {
      name: "MongoDB Basics",
      issuer: "MongoDB University",
      icon: "Database",
    },
    {
      name: "M320: Data Modeling",
      issuer: "MongoDB University",
      icon: "Layers",
    },
    {
      name: "MongoDB Realm Web Rapid Start (RF100W)",
      issuer: "MongoDB University",
      icon: "Zap",
    },
  ] as CertificationItem[],

  // Idiomas
  languages: [
    { name: "Español", level: "Nativo / Bilingüe", percentage: 100 },
    { name: "Inglés", level: "Profesional / Elemental", percentage: 65 },
  ],
};
