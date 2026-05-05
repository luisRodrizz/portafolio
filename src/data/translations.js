export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      work: 'Trabajo',
      education: 'Formación',
      contact: 'Contacto',
      availability: 'Disponible para trabajar',
    },
    home: {
      hero: {
        badge: 'Estudiante · Ing. de Software',
        titleFirst: 'Luis',
        titleAccent: 'Rodríguez',
        subtitle:
          'Construyo aplicaciones web full stack con interfaces limpias, lógica backend sólida y flujos reales de negocio.',
        primaryCta: 'Ver proyectos',
        secondaryCta: 'Contactarme',
        downloadCv: 'Descargar CV',
        location: 'Lima, Perú',
        status: 'Disponible',
      },
      stats: [
        { value: '9+', label: 'Tecnologías' },
        { value: '1', label: 'Sistema desplegado' },
        { value: '5to', label: 'Ciclo SENATI' },
      ],
      about: {
        eyebrow: '01 — Sobre mí',
        titleFirst: 'Código orientado',
        titleAccent: 'a producto.',
        description:
          'Estudiante de Ingeniería de Software en Lima. Me enfoco en construir soluciones web funcionales, aprender rápido y aplicar buenas prácticas en proyectos reales.',
        items: [
          {
            n: '1',
            text: 'Tengo 19 años y estudio Ingeniería de Software en SENATI, actualmente en 5to ciclo.',
          },
          {
            n: '2',
            text: 'Me enfoco en el desarrollo web full stack, construyendo interfaces modernas y backend funcional para sistemas reales.',
          },
          {
            n: '3',
            text: 'Trabajo con tecnologías como React, Next.js, Tailwind CSS, Node.js, Express, PHP, Laravel, PostgreSQL y Prisma.',
          },
          {
            n: '4',
            text: 'He desarrollado y desplegado un sistema clínico completo, además de trabajar en proyectos como AgroVision y una plataforma e-commerce en desarrollo.',
          },
          {
            n: '5',
            text: 'Busco oportunidades para seguir creciendo como desarrollador, aportar en equipos reales y mejorar mi criterio técnico con proyectos de mayor impacto.',
          },
        ],
        skills: [
          {
            category: 'Frontend',
            items: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
          },
          {
            category: 'Backend',
            items: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'Python'],
          },
          {
            category: 'Base de datos & ORM',
            items: ['PostgreSQL', 'MySQL', 'Prisma', 'Redis'],
          },
        ],
      },
      projects: {
        eyebrow: '02 — Proyectos',
        titleFirst: 'Proyectos',
        titleAccent: 'funcionales.',
        description:
            'Una selección de proyectos donde combiné diseño, frontend y backend para construir productos web funcionales, con lógica de negocio real y enfoque en experiencia de usuario.',
        viewAll: 'Ver todos los proyectos',

        featured: {
            label: 'Proyecto destacado',
            status: 'Desplegado',
            title: 'Lúmina Medic',
            description:
            'Sistema web de gestión clínica multirol para administrar doctores, pacientes, citas, horarios, pagos, reportes PDF e historial médico desde una sola plataforma.',
            stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis'],
            imageAlt: 'Dashboard de Lúmina Medic',
            cards: {
            roles: 'Roles',
            rolesValue: 'Admin, Doctor y Paciente',
            modules: 'Módulos',
            modulesValue: 'Citas, horarios y bloqueos',
            operation: 'Operación',
            operationValue: 'Pagos, PDFs e historial clínico',
            },
            demo: 'Ver demo',
            detail: 'Ver detalle',
        },

        secondary: [
        {
            id: 'agrovision',
            label: 'Proyecto en desarrollo',
            status: 'En progreso',
            title: 'AgroVision',
            description:
            'Sistema web orientado a la gestión agrícola, desarrollado con Laravel y PostgreSQL, enfocado en organizar información operativa y mejorar el control de procesos del campo.',
            stack: ['Laravel', 'PHP', 'PostgreSQL', 'Tailwind CSS'],
        },
        {
            id: 'ecommerce-platform',
            label: 'Proyecto en desarrollo',
            status: 'Fase inicial',
            title: 'E-commerce Platform',
            description:
            'Plataforma e-commerce en etapa beta, construida con arquitectura moderna con paneles administrativos y experiencia de usuario optimizada.',
            stack: ['Next.js', 'Node.js', 'Express', 'Docker', 'PostgreSQL'],
        },
       ]
      },
        education: {
        eyebrow: '03 — Formación',
        titleFirst: 'Formación técnica',
        titleAccent: 'en progreso.',
        description:
            'Estudio Ingeniería de Software en SENATI y complemento mi aprendizaje con proyectos full stack, cursos técnicos y práctica constante construyendo sistemas web reales.',
        academicTitle: 'Formación académica',
        coursesTitle: 'Cursos y certificaciones',
        academic: [
            {
            institution: 'SENATI',
            program: 'Ingeniería de Software',
            period: '2024 — Actualidad',
            meta: '5to ciclo',
            },
            {
            institution: 'I.E. 2094 Inca Pachacutec',
            program: 'Educación secundaria',
            period: '2019 — 2023',
            meta: 'Formación escolar',
            },
        ],
        courses: [
            {
            provider: 'Cisco Networking Academy',
            name: 'Introducción a la Ciencia de Datos',
            },
            {
            provider: 'Cisco Networking Academy',
            name: 'Introducción al Internet de las Cosas',
            },
            {
            provider: 'Cisco Networking Academy',
            name: 'Conceptos Básicos de Hardware de Computadora',
            },
            {
            provider: 'Cisco Networking Academy',
            name: 'Conceptos básicos de redes',
            },
            {
            provider: 'Cisco Networking Academy',
            name: 'Introducción a la Ciberseguridad',
            },
          ],
        },
        contact: {
            eyebrow: '04 — Contacto',
            badge: 'Disponible para prácticas · remoto · freelance',
            titleFirst: 'Trabajemos',
            titleAccent: 'juntos.',
            description:
                'Estoy buscando oportunidades para crecer como desarrollador. Si tienes un proyecto, una práctica o una oportunidad laboral, me encantará conversar contigo.',
            email: 'luiisrodriguezguevara@gmail.com',
            copyEmail: 'Copiar email',
            copiedEmail: 'Email copiado',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            whatsapp: 'WhatsApp',
      },
    },
    projectsPage: {
        eyebrow: 'Trabajos / Proyectos',
        titleFirst: 'Proyectos con',
        titleAccent: 'impacto real.',
        description:
            'Una selección de trabajos donde combiné diseño, frontend, backend y lógica de negocio para construir soluciones web funcionales.',
        tags: ['Full Stack', 'React', 'Node.js', 'APIs', 'PostgreSQL'],

        featured: {
            id: 'lumina-medic',
            title: 'Lúmina Medic',
            type: 'Proyecto destacado',
            status: 'Desplegado',
            description:
            'Sistema web de gestión clínica multirol para administrar doctores, pacientes, citas, horarios, pagos, reportes PDF e historial médico desde una sola plataforma.',
            stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis'],
            demo: 'Ver demo',
            detail: 'Ver detalle',
            imageAlt: 'Dashboard de Lúmina Medic',
            cards: {
            roles: 'Roles',
            rolesValue: 'Admin, Doctor y Paciente',
            operation: 'Operación',
            operationValue: 'Citas, horarios, pagos y reportes',
            focus: 'Enfoque',
            focusValue: 'Arquitectura desacoplada y caso real',
            },
        },

        moreProjectsTitle: 'Más proyectos',
        moreProjectsText: 'Seguiré ampliando esta colección con nuevos trabajos.',

        secondary: [
        {
            id: 'agrovision',
            title: 'AgroVision',
            type: 'Proyecto en desarrollo',
            status: 'En progreso',
            description:
            'Sistema web orientado a la gestión agrícola, desarrollado con Laravel, PHP, PostgreSQL y Tailwind CSS. Actualmente se encuentra en desarrollo y será incorporado como caso de estudio cuando esté más completo.',
            stack: ['Laravel', 'PHP', 'PostgreSQL', 'Tailwind CSS'],
        },
        {
            id: 'ecommerce-platform',
            title: 'E-commerce Platform',
            type: 'Proyecto beta',
            status: 'Fase inicial',
            description:
            'Plataforma e-commerce en fase beta construida con Next.js, Node.js, Express, Docker, PostgreSQL y Tailwind CSS, enfocada en una arquitectura full stack moderna.',
            stack: ['Next.js', 'Node.js', 'Express', 'Docker', 'PostgreSQL', 'Tailwind CSS'],
        },
      ],
    },
    luminaMedic: {
        eyebrow: 'Proyecto destacado',
        badge: 'Sistema web de gestión clínica',
        titleFirst: 'Lúmina',
        titleAccent: 'Medic.',
        description:
            'Plataforma web full stack para digitalizar la operación de clínicas y consultorios: citas, pacientes, doctores, historial clínico, pagos, reportes y recordatorios automáticos desde una sola solución.',

        ctas: {
            demo: 'Ver demo',
            github: 'GitHub',
            back: 'Volver',
        },

        summaryCards: {
            roles: {
            label: 'Roles',
            value: 'Administrador, Doctor y Paciente',
            },
            status: {
            label: 'Estado',
            value: 'Proyecto desplegado en producción',
            },
            focus: {
            label: 'Enfoque',
            value: 'Caso real, arquitectura desacoplada y lógica de negocio',
            },
            infrastructure: {
            label: 'Infraestructura',
            value: 'Vercel, Render, Supabase y Upstash',
            },
        },

        gallery: {
            label: 'Galería del sistema',
            previous: 'Imagen anterior',
            next: 'Imagen siguiente',
            items: [
            {
                id: 'dashboard',
                title: 'Dashboard administrativo',
                description:
                'Vista principal del panel administrador con métricas, resumen mensual, citas del día y gráficos operativos.',
            },
            {
                id: 'doctor',
                title: 'Panel del doctor',
                description:
                'Vista orientada al médico con acceso a citas, pacientes asignados, agenda y seguimiento clínico.',
            },
            {
                id: 'login',
                title: 'Inicio de sesión',
                description:
                'Pantalla de acceso al sistema con autenticación para administrador, doctor y paciente.',
            },
            {
                id: 'perfil',
                title: 'Perfil del paciente',
                description:
                'Módulo donde el usuario puede revisar y actualizar su información personal dentro del sistema.',
            },
            ],
        },

        problemSolution: {
            problem: {
            label: 'Problema que resuelve',
            text:
                'Muchas clínicas gestionan citas, expedientes y pagos con procesos dispersos, hojas de cálculo o herramientas desconectadas. Eso produce errores, duplicidad de información, poca trazabilidad y mala comunicación con pacientes.',
            },
            solution: {
            label: 'Solución propuesta',
            text:
                'Lúmina Medic centraliza la operación clínica en una sola plataforma web: gestión de doctores, pacientes, citas, horarios, historial clínico, pagos, reportes PDF y comunicaciones automáticas por correo.',
            },
        },

        caseStudy: {
            title: 'Más allá de la interfaz',
            description:
                'Lúmina Medic no solo fue construido como una aplicación visual, sino como un sistema con lógica operativa, validaciones reales y decisiones técnicas orientadas a mantener una experiencia estable para distintos roles.',
            items: [
                {
                label: 'Reto técnico',
                title: 'Gestión de horarios y citas sin cruces',
                text:
                    'El sistema debía evitar solapamientos entre citas, respetar disponibilidad médica y controlar bloqueos de horario, manteniendo una experiencia clara para administrador, doctor y paciente.',
                },
                {
                label: 'Decisión técnica',
                title: 'Arquitectura frontend/backend desacoplada',
                text:
                    'Separé el frontend en React y el backend en Node.js/Express para mantener responsabilidades claras, facilitar el despliegue independiente y mejorar la escalabilidad del sistema.',
                },
                {
                label: 'Aprendizaje',
                title: 'Pensar en flujos reales de negocio',
                text:
                    'El proyecto me permitió trabajar con validaciones, roles, estados, reportes, historial clínico y automatizaciones, acercándome a problemas similares a los de un entorno real.',
                },
            ],
        },

        features: {
            title: 'Funcionalidades clave',
            description:
            'El sistema fue pensado para cubrir flujos reales de operación clínica, combinando gestión administrativa, atención médica y autoservicio para pacientes.',
            items: [
            {
                n: '01',
                title: 'Autenticación multirol',
                text:
                'Paneles diferenciados para administrador, doctor y paciente, con permisos específicos por rol y acceso solo a la información correspondiente.',
            },
            {
                n: '02',
                title: 'Gestión de citas y disponibilidad',
                text:
                'Creación, cancelación y reprogramación de citas, con validación de horarios, anti-solapamiento y cálculo automático de slots disponibles.',
            },
            {
                n: '03',
                title: 'Historial clínico y notas médicas',
                text:
                'Registro de diagnóstico, tratamiento, receta y observaciones por consulta, con acceso posterior desde el expediente del paciente.',
            },
            {
                n: '04',
                title: 'Pagos, reportes y operación diaria',
                text:
                'Registro de pagos, generación de reportes PDF, sala de espera en tiempo real y trazabilidad de acciones mediante logs del sistema.',
            },
            {
                n: '05',
                title: 'Automatización y comunicación',
                text:
                'Recordatorios automáticos por email, avisos por cambios de estado y flujos que reducen trabajo manual en la clínica.',
            },
            {
                n: '06',
                title: 'Responsive y validaciones reales',
                text:
                'Uso completo desde navegador en desktop o móvil, validación de DNI vía RENIEC y soporte para pacientes menores de edad con tutor.',
            },
            ],
        },

        architecture: {
            title: 'Stack y arquitectura',
            description:
            'Lúmina Medic fue construido como una aplicación full stack desacoplada: el frontend funciona como SPA en React y el backend expone una API REST en Node.js/Express, con base de datos PostgreSQL y despliegue independiente.',
            rows: [
            {
                label: 'Frontend',
                value: 'React, Vite, Tailwind CSS, React Router, Axios, Framer Motion, Recharts y Sonner.',
            },
            {
                label: 'Backend',
                value: 'Node.js, Express, Prisma ORM, PostgreSQL, Redis, JWT, bcryptjs, Nodemailer, node-cron y Winston.',
            },
            {
                label: 'Infraestructura',
                value: 'Vercel para frontend, Render para backend, Supabase para PostgreSQL y Upstash para Redis.',
            },
            {
                label: 'Servicios externos',
                value: 'Cloudinary para imágenes, Gmail SMTP para correos y RENIEC API para validación de DNI.',
            },
            {
                label: 'Seguridad',
                value: 'JWT con validación activa, rate limiting, Helmet, CORS estricto, bcrypt, sanitización de logs y control por roles.',
            },
            {
                label: 'Automatización',
                value: 'Cron job diario para recordatorios de citas, emails automáticos y actualización de estados según flujo operativo.',
            },
            ],
        },
    },
    footer: {
        brandDescription:
            'Portfolio personal enfocado en frontend, backend y construcción de productos web con intención.',
        navigation: 'Navegación',
        about: 'Sobre mí',
        projects: 'Proyectos',
        education: 'Formación',
        contact: 'Contacto',
        projectsTitle: 'Proyectos',
        viewAll: 'Ver todos',
        social: 'Redes',
        email: 'Email',
        emailAddress: 'luiisrodriguezguevara@gmail.com',
        location: 'Lima, Perú',
        madeBy: 'Diseñado y desarrollado por mí',
    },
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About',
      work: 'Work',
      education: 'Education',
      contact: 'Contact',
      availability: 'Available for work',
    },
    home: {
      hero: {
        badge: 'Student · Software Engineering',
        titleFirst: 'Luis',
        titleAccent: 'Rodriguez',
        subtitle:
          'I build full-stack web applications with clean interfaces, solid backend logic, and real business workflows.',
        primaryCta: 'View projects',
        secondaryCta: 'Contact me',
        downloadCv: 'Download CV',
        location: 'Lima, Peru',
        status: 'Available',
      },
      stats: [
        { value: '9+', label: 'Technologies' },
        { value: '1', label: 'Deployed system' },
        { value: '5th', label: 'SENATI semester' },
      ],
      about: {
        eyebrow: '01 — About me',
        titleFirst: 'Product-driven',
        titleAccent: 'code.',
        description:
          'Software Engineering student based in Lima. Focused on building functional web solutions, learning fast, and applying good practices in real projects.',
        items: [
          {
            n: '1',
            text: 'I am 19 years old and study Software Engineering at SENATI, currently in my fifth semester.',
          },
          {
            n: '2',
            text: 'I focus on full-stack web development, building modern interfaces and functional backend systems for real-world applications.',
          },
          {
            n: '3',
            text: 'I work with technologies such as React, Next.js, Tailwind CSS, Node.js, Express, PHP, Laravel, PostgreSQL, and Prisma.',
          },
          {
            n: '4',
            text: 'I have developed and deployed a complete clinical management system, while also working on projects such as AgroVision and an e-commerce platform in development.',
          },
          {
            n: '5',
            text: 'I am looking for opportunities to keep growing as a developer, contribute to real teams, and improve my technical judgment through higher-impact projects.',
          },
        ],
        skills: [
          {
            category: 'Frontend',
            items: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
          },
          {
            category: 'Backend',
            items: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'Python'],
          },
          {
            category: 'Database & ORM',
            items: ['PostgreSQL', 'MySQL', 'Prisma', 'Redis'],
          },
        ],
      },
      projects: {
        eyebrow: '02 — Projects',
        titleFirst: 'Functional',
        titleAccent: 'projects.',
        description:
            'A selection of projects where I combined design, frontend, and backend to build functional web products with real business logic and a user-focused experience.',
        viewAll: 'View all projects',

        featured: {
            label: 'Featured project',
            status: 'Deployed',
            title: 'Lúmina Medic',
            description:
            'Multi-role clinical management web system to manage doctors, patients, appointments, schedules, payments, PDF reports, and medical history from a single platform.',
            stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis'],
            imageAlt: 'Lúmina Medic dashboard',
            cards: {
            roles: 'Roles',
            rolesValue: 'Admin, Doctor and Patient',
            modules: 'Modules',
            modulesValue: 'Appointments, schedules and blocks',
            operation: 'Operations',
            operationValue: 'Payments, PDFs and medical history',
            },
            demo: 'View demo',
            detail: 'View details',
        },

        secondary: [
        {
            id: 'agrovision',
            label: 'Project in development',
            status: 'In progress',
            title: 'AgroVision',
            description:
            'Agricultural management web system built with Laravel and PostgreSQL, focused on organizing operational data and improving field process control.',
            stack: ['Laravel', 'PHP', 'PostgreSQL', 'Tailwind CSS'],
        },
        {
            id: 'ecommerce-platform',
            label: 'Beta project',
            status: 'Early stage',
            title: 'E-commerce Platform',
            description:
            'E-commerce platform in beta stage, built with a modern architecture using Next.js, Node.js, Express, Docker, and PostgreSQL.',
            stack: ['Next.js', 'Node.js', 'Express', 'Docker', 'PostgreSQL', 'Tailwind CSS'],
        },
       ],
      },

    education: {
    eyebrow: '03 — Education',
    titleFirst: 'Technical growth',
    titleAccent: 'in progress.',
    description:
        'I study Software Engineering at SENATI and strengthen my learning through full-stack projects, technical courses, and constant practice building real web systems.',
    academicTitle: 'Academic background',
    coursesTitle: 'Courses and certifications',
    academic: [
        {
        institution: 'SENATI',
        program: 'Software Engineering',
        period: '2024 — Present',
        meta: '5th semester',
        },
        {
        institution: 'I.E. 2094 Inca Pachacutec',
        program: 'Secondary education',
        period: '2019 — 2023',
        meta: 'School education',
        },
    ],
    courses: [
        {
        provider: 'Cisco Networking Academy',
        name: 'Introduction to Data Science',
        },
        {
        provider: 'Cisco Networking Academy',
        name: 'Introduction to Internet of Things',
        },
        {
        provider: 'Cisco Networking Academy',
        name: 'Computer Hardware Basics',
        },
        {
        provider: 'Cisco Networking Academy',
        name: 'Networking Basics',
        },
        {
        provider: 'Cisco Networking Academy',
        name: 'Introduction to Cybersecurity',
        },
      ],    
    },

      contact: {
        eyebrow: '04 — Contact',
        badge: 'Available for internships · remote · freelance',
        titleFirst: 'Let’s work',
        titleAccent: 'together.',
        description:
            'I am looking for opportunities to grow as a developer. If you have a project, an internship, or a job opportunity, I would love to talk with you.',
        email: 'luiisrodriguezguevara@gmail.com',
        copyEmail: 'Copy email',
        copiedEmail: 'Email copied',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        whatsapp: 'WhatsApp',
      }
    },
    projectsPage: {
        eyebrow: 'Work / Projects',
        titleFirst: 'Projects with',
        titleAccent: 'real impact.',
        description:
            'A selection of work where I combined design, frontend, backend, and business logic to build functional web solutions.',
        tags: ['Full Stack', 'React', 'Node.js', 'APIs', 'PostgreSQL'],

        featured: {
            id: 'lumina-medic',
            title: 'Lúmina Medic',
            type: 'Featured project',
            status: 'Live',
            description:
            'Multi-role clinical management web system to manage doctors, patients, appointments, schedules, payments, PDF reports, and medical history from one platform.',
            stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis'],
            demo: 'View demo',
            detail: 'View details',
            imageAlt: 'Lúmina Medic dashboard',
            cards: {
            roles: 'Roles',
            rolesValue: 'Admin, Doctor and Patient',
            operation: 'Operations',
            operationValue: 'Appointments, schedules, payments and reports',
            focus: 'Focus',
            focusValue: 'Decoupled architecture and real-world case',
            },
        },

        moreProjectsTitle: 'More projects',
        moreProjectsText: 'I will keep expanding this collection with new work.',

        secondary: [
        {
            id: 'agrovision',
            label: 'Project in development',
            status: 'In progress',
            title: 'AgroVision',
            description:
            'Agricultural management web system built with Laravel and PostgreSQL, focused on organizing operational data and improving field process control.',
            stack: ['Laravel', 'PHP', 'PostgreSQL', 'Tailwind CSS'],
        },
        {
            id: 'ecommerce-platform',
            label: 'Beta project',
            status: 'Early stage',
            title: 'E-commerce Platform',
            description:
            'E-commerce platform in beta stage, built with a modern architecture using Next.js, Node.js, Express, Docker, and PostgreSQL.',
            stack: ['Next.js', 'Node.js', 'Express', 'Docker', 'PostgreSQL'],
        },
      ]
    },
    luminaMedic: {
        eyebrow: 'Featured project',
        badge: 'Clinical management web system',
        titleFirst: 'Lúmina',
        titleAccent: 'Medic.',
        description:
            'Full stack web platform to digitize the operation of clinics and medical offices: appointments, patients, doctors, medical history, payments, reports, and automated reminders in one solution.',

        ctas: {
            demo: 'View demo',
            github: 'GitHub',
            back: 'Back',
        },

        summaryCards: {
            roles: {
            label: 'Roles',
            value: 'Administrator, Doctor and Patient',
            },
            status: {
            label: 'Status',
            value: 'Project deployed in production',
            },
            focus: {
            label: 'Focus',
            value: 'Real-world case, decoupled architecture and business logic',
            },
            infrastructure: {
            label: 'Infrastructure',
            value: 'Vercel, Render, Supabase and Upstash',
            },
        },

        gallery: {
            label: 'System gallery',
            previous: 'Previous image',
            next: 'Next image',
            items: [
            {
                id: 'dashboard',
                title: 'Admin dashboard',
                description:
                'Main administrator panel view with metrics, monthly summary, daily appointments and operational charts.',
            },
            {
                id: 'doctor',
                title: 'Doctor panel',
                description:
                'Doctor-oriented view with access to appointments, assigned patients, schedule and clinical follow-up.',
            },
            {
                id: 'login',
                title: 'Login screen',
                description:
                'System access screen with authentication for administrator, doctor and patient.',
            },
            {
                id: 'perfil',
                title: 'Patient profile',
                description:
                'Module where the user can review and update personal information within the system.',
            },
            ],
        },

        problemSolution: {
            problem: {
            label: 'Problem it solves',
            text:
                'Many clinics manage appointments, medical records and payments through scattered processes, spreadsheets or disconnected tools. This causes errors, duplicated information, poor traceability and weak communication with patients.',
            },
            solution: {
            label: 'Proposed solution',
            text:
                'Lúmina Medic centralizes clinical operations in a single web platform: management of doctors, patients, appointments, schedules, medical history, payments, PDF reports and automated email communications.',
            },
        },

        caseStudy: {
            title: 'Beyond the interface',
            description:
                'Lúmina Medic was not built only as a visual application, but as a system with operational logic, real validations, and technical decisions focused on keeping a stable experience for different roles.',
            items: [
                {
                label: 'Technical challenge',
                title: 'Managing schedules and appointments without conflicts',
                text:
                    'The system had to prevent appointment overlaps, respect doctor availability, and handle schedule blocks while keeping a clear experience for administrators, doctors, and patients.',
                },
                {
                label: 'Technical decision',
                title: 'Decoupled frontend/backend architecture',
                text:
                    'I separated the frontend in React and the backend in Node.js/Express to keep responsibilities clear, support independent deployment, and improve the system’s scalability.',
                },
                {
                label: 'Learning outcome',
                title: 'Thinking through real business workflows',
                text:
                    'This project helped me work with validations, roles, states, reports, medical history, and automation, bringing me closer to problems similar to a real production environment.',
                },
            ],
        },

        features: {
            title: 'Key features',
            description:
            'The system was designed to cover real clinical operation flows, combining administrative management, medical care and self-service for patients.',
            items: [
            {
                n: '01',
                title: 'Multi-role authentication',
                text:
                'Separate dashboards for administrator, doctor and patient, with role-specific permissions and access only to the corresponding information.',
            },
            {
                n: '02',
                title: 'Appointment and availability management',
                text:
                'Creation, cancellation and rescheduling of appointments, with schedule validation, anti-overlap logic and automatic calculation of available slots.',
            },
            {
                n: '03',
                title: 'Medical history and clinical notes',
                text:
                'Registration of diagnosis, treatment, prescription and observations for each consultation, with later access from the patient record.',
            },
            {
                n: '04',
                title: 'Payments, reports and daily operations',
                text:
                'Payment registration, PDF report generation, real-time waiting room, and action traceability through system logs.',
            },
            {
                n: '05',
                title: 'Automation and communication',
                text:
                'Automatic email reminders, status-change notifications and flows that reduce manual work in the clinic.',
            },
            {
                n: '06',
                title: 'Responsive and real validations',
                text:
                'Full use from desktop or mobile browser, DNI validation through RENIEC and support for underage patients with a guardian.',
            },
            ],
        },

        architecture: {
            title: 'Stack and architecture',
            description:
            'Lúmina Medic was built as a decoupled full stack application: the frontend works as a React SPA and the backend exposes a REST API in Node.js/Express, with PostgreSQL and independent deployment.',
            rows: [
            {
                label: 'Frontend',
                value: 'React, Vite, Tailwind CSS, React Router, Axios, Framer Motion, Recharts and Sonner.',
            },
            {
                label: 'Backend',
                value: 'Node.js, Express, Prisma ORM, PostgreSQL, Redis, JWT, bcryptjs, Nodemailer, node-cron and Winston.',
            },
            {
                label: 'Infrastructure',
                value: 'Vercel for frontend, Render for backend, Supabase for PostgreSQL and Upstash for Redis.',
            },
            {
                label: 'External services',
                value: 'Cloudinary for images, Gmail SMTP for email and RENIEC API for DNI validation.',
            },
            {
                label: 'Security',
                value: 'JWT with active validation, rate limiting, Helmet, strict CORS, bcrypt, log sanitization and role-based access control.',
            },
            {
                label: 'Automation',
                value: 'Daily cron job for appointment reminders, automatic emails and status updates according to the operational flow.',
            },
            ],
        },
    },
     footer: {
        brandDescription:
            'Personal portfolio focused on frontend, backend, and building web products with intention.',
        navigation: 'Navigation',
        about: 'About',
        projects: 'Projects',
        education: 'Education',
        contact: 'Contact',
        projectsTitle: 'Projects',
        viewAll: 'View all',
        social: 'Social',
        email: 'Email',
        emailAddress: 'luiisrodriguezguevara@gmail.com',
        location: 'Lima, Peru',
        madeBy: 'Designed and developed by me',
    },
  },
}