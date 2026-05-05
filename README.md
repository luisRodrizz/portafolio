# Luis Rodríguez — Personal Portfolio

Portafolio personal desarrollado con **React**, **Vite** y **Tailwind CSS**, enfocado en presentar mi perfil como desarrollador web full stack, mis proyectos, formación académica, certificaciones y canales de contacto profesional.

🔗 **Demo:** https://portafolio-orpin-five.vercel.app

---

## Descripción

Este portafolio fue construido para mostrar de forma clara y profesional mi evolución como estudiante de Ingeniería de Software y desarrollador web.

El sitio incluye una interfaz moderna con tema oscuro, animaciones suaves, navegación dinámica, soporte bilingüe ES/EN, páginas de proyectos y una sección de caso de estudio para el proyecto principal: **Lúmina Medic**.

---

## Características principales

- Diseño responsive para desktop, tablet y móvil.
- Interfaz dark UI con acentos en verde.
- Navegación dinámica con detección de sección activa.
- Cambio de idioma entre español e inglés.
- Página principal con hero, sobre mí, proyectos, formación y contacto.
- Página de proyectos.
- Página de detalle para Lúmina Medic como caso de estudio.
- Botón para descargar CV.
- Botón para copiar email.
- Imagen optimizada para mejorar carga inicial.
- SEO básico y Open Graph configurado.
- Despliegue en Vercel.

---

## Tecnologías utilizadas

### Frontend

- React
- Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- Lucide React

### Herramientas

- ESLint
- Git
- GitHub
- Vercel

---

## Estructura general del proyecto

```txt
portafolio-luis/
├─ public/
│  ├─ Luis-Rodriguez-CV.pdf
│  ├─ favicon.svg
│  ├─ og-image.jpg
│  └─ robots.txt
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ project-detail/
│  │  ├─ Button.jsx
│  │  ├─ FeaturedProjectCard.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ ProjectMiniCard.jsx
│  │  ├─ ProjectsPageFeatured.jsx
│  │  ├─ ProjectsPageMiniCard.jsx
│  │  ├─ SectionHeader.jsx
│  │  └─ SkillPill.jsx
│  ├─ context/
│  ├─ data/
│  ├─ pages/
│  │  ├─ projects/
│  │  │  └─ lumina-medic.jsx
│  │  ├─ Home.jsx
│  │  └─ Projects.jsx
│  ├─ sections/
│  │  ├─ AboutSection.jsx
│  │  ├─ ContactSection.jsx
│  │  ├─ EducationSection.jsx
│  │  ├─ HeroSection.jsx
│  │  └─ ProjectsPreviewSection.jsx
│  ├─ utils/
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
├─ vercel.json
└─ README.md
```

---

## Secciones del portafolio

### Inicio

Presenta mi nombre, especialidad, disponibilidad, ubicación, tecnologías principales y accesos rápidos a proyectos, CV y contacto.

### Sobre mí

Resumen personal y técnico de mi perfil como estudiante de Ingeniería de Software, con enfoque en desarrollo web full stack.

### Proyectos

Muestra proyectos destacados y en desarrollo:

- **Lúmina Medic** — sistema web de gestión clínica.
- **AgroVision** — sistema web agrícola en desarrollo.
- **E-commerce Platform** — plataforma e-commerce en fase beta.

### Formación

Incluye formación académica y cursos de Cisco Networking Academy.

### Contacto

Incluye correo, GitHub, LinkedIn, WhatsApp y botón para copiar email.

---

## Proyecto destacado: Lúmina Medic

**Lúmina Medic** es un sistema web de gestión clínica multirol diseñado para administrar doctores, pacientes, citas, horarios, pagos, reportes PDF e historial médico desde una sola plataforma.

### Stack del proyecto

- React
- Node.js
- Express
- PostgreSQL
- Prisma
- Redis

### Funcionalidades destacadas

- Autenticación multirol.
- Gestión de doctores, pacientes y administradores.
- Gestión de citas y disponibilidad.
- Historial clínico.
- Pagos y reportes.
- Recordatorios automáticos.
- Arquitectura frontend/backend desacoplada.

---

## Instalación y ejecución local

### 1. Clonar el repositorio

```bash
git clone https://github.com/luisRodrizz/portafolio.git
```

### 2. Entrar al proyecto

```bash
cd portafolio
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar en desarrollo

```bash
npm run dev
```

### 5. Generar build de producción

```bash
npm run build
```

### 6. Previsualizar build

```bash
npm run preview
```

---

## Scripts disponibles

```bash
npm run dev
```

Ejecuta el servidor de desarrollo.

```bash
npm run build
```

Genera la versión de producción.

```bash
npm run preview
```

Previsualiza el build generado.

```bash
npm run lint
```

Ejecuta ESLint para revisar el código.

---

## Despliegue

El proyecto está desplegado en **Vercel**.

```txt
Framework: Vite
Build Command: npm run build
Output Directory: dist
```

Para manejar rutas con React Router, se utiliza `vercel.json` con rewrites hacia `index.html`.

---

## Contacto

- **Email:** luiisrodriguezguevara@gmail.com
- **GitHub:** https://github.com/luisRodrizz
- **LinkedIn:** https://www.linkedin.com/in/luis-rodriguez-b378bb334/
- **Portfolio:** https://portafolio-orpin-five.vercel.app

---

## Autor

Desarrollado por **Luis Rodríguez**.

Estudiante de Ingeniería de Software, enfocado en desarrollo web full stack, construcción de sistemas reales y mejora continua como desarrollador.
