import { useState } from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { fadeUp, fadeIn, staggerContainer } from '../../utils/animations'
import Footer from '../../components/Footer'
import dashboardImg from '../../assets/proyect/luminaMedic/dashboard.png'
import doctorImg from '../../assets/proyect/luminaMedic/doctor.png'
import loginImg from '../../assets/proyect/luminaMedic/login.png'
import perfilImg from '../../assets/proyect/luminaMedic/perfil.png'

const gallery = [
  {
    title: 'Dashboard administrativo',
    description:
      'Vista principal del panel administrador con métricas, resumen mensual, citas del día y gráficos operativos.',
    image: dashboardImg,
  },
  {
    title: 'Panel del doctor',
    description:
      'Vista orientada al médico con acceso a citas, pacientes asignados, agenda y seguimiento clínico.',
    image: doctorImg,
  },
  {
    title: 'Inicio de sesión',
    description:
      'Pantalla de acceso al sistema con autenticación para administrador, doctor y paciente.',
    image: loginImg,
  },
  {
    title: 'Perfil del paciente',
    description:
      'Módulo donde el usuario puede revisar y actualizar su información personal dentro del sistema.',
    image: perfilImg,
  },
]

export default function LuminaMedic() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
    <motion.main
      className="relative min-h-screen overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-24"
      initial="hidden"
      animate="show"
      variants={staggerContainer}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.08),transparent_62%)] blur-3xl" />
        <div className="absolute right-[-100px] top-[180px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.05),transparent_65%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={fadeIn}
          className="mono mb-10 flex items-center gap-5 text-[11px] uppercase tracking-[0.32em] accent"
        >
          <span className="whitespace-nowrap">Proyecto destacado</span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/[0.10] to-transparent" />
        </motion.div>

        {/* Hero */}
        <motion.section variants={fadeUp} className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="mono mb-5 text-[11px] uppercase tracking-[0.28em] text-[#7a8799]">
              Sistema web de gestión clínica
            </p>

            <h1 className="display-title text-[clamp(56px,7vw,108px)] leading-[0.9] text-white">
              Lúmina
              <br />
              <span className="accent-glow">Medic.</span>
            </h1>

            <p className="mt-8 max-w-[680px] text-[1.08rem] leading-[1.9] text-[#b8c4cf]">
              Plataforma web full stack para digitalizar la operación de clínicas
              y consultorios: citas, pacientes, doctores, historial clínico,
              pagos, reportes y recordatorios automáticos desde una sola solución.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://sistema-clinico-cyan.vercel.app/login"
                target="_blank"
                rel="noreferrer"
                className="primary-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px]"
              >
                Ver demo <span>↗</span>
              </a>

              <a
                href="https://github.com/luisRodrizz/Sistema-Clinico"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px]"
              >
                GitHub <span>↗</span>
              </a>

              <Link
                to="/projects"
                className="secondary-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px]"
              >
                Volver <span>←</span>
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                Roles
              </p>
              <p className="mt-3 text-sm leading-[1.7] text-[#c7d2dc]">
                Administrador, Doctor y Paciente
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                Estado
              </p>
              <p className="mt-3 text-sm leading-[1.7] text-[#c7d2dc]">
                Proyecto desplegado en producción
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                Enfoque
              </p>
              <p className="mt-3 text-sm leading-[1.7] text-[#c7d2dc]">
                Caso real, arquitectura desacoplada y lógica de negocio
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                Infraestructura
              </p>
              <p className="mt-3 text-sm leading-[1.7] text-[#c7d2dc]">
                Vercel, Render, Supabase y Upstash
              </p>
            </div>
          </div>
        </motion.section>

        {/* Galería del proyecto */}
        <motion.section variants={fadeUp} className="mt-16">
        <div className="overflow-hidden rounded-[32px] border border-white/[0.06] bg-white/[0.02] p-4 sm:p-6">
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                Galería del sistema
                </p>

                <h2 className="mt-2 text-[1.35rem] font-semibold text-white">
                {gallery[currentSlide].title}
                </h2>

                <p className="mt-3 max-w-[760px] text-[0.98rem] leading-[1.8] text-[#b8c4cf]">
                {gallery[currentSlide].description}
                </p>
            </div>

            <div className="flex items-center gap-2">
                <button
                type="button"
                onClick={prevSlide}
                className="secondary-btn inline-flex h-11 w-11 items-center justify-center rounded-full text-sm"
                aria-label="Imagen anterior"
                >
                ←
                </button>

                <button
                type="button"
                onClick={nextSlide}
                className="secondary-btn inline-flex h-11 w-11 items-center justify-center rounded-full text-sm"
                aria-label="Imagen siguiente"
                >
                →
                </button>
            </div>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-white/[0.05] bg-[#05080b] p-3">
            <img
                src={gallery[currentSlide].image}
                alt={gallery[currentSlide].title}
                className="w-full rounded-[18px] object-contain"
            />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {gallery.map((item, index) => (
                <button
                key={item.title}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={[
                    'overflow-hidden rounded-[18px] border p-1 transition',
                    currentSlide === index
                    ? 'border-[#00f5a0]/40 bg-[#00f5a0]/[0.05]'
                    : 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12]',
                ].join(' ')}
                >
                <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[16/10] w-full rounded-[12px] object-cover object-top"
                />
                </button>
            ))}
            </div>
        </div>
        </motion.section>

        {/* Problema + solución */}
        <motion.section variants={fadeUp} className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] border border-white/[0.06] bg-white/[0.02] p-7">
            <p className="mono mb-4 text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
              Problema que resuelve
            </p>
            <p className="text-[1rem] leading-[1.85] text-[#c7d2dc]">
              Muchas clínicas gestionan citas, expedientes y pagos con procesos
              dispersos, hojas de cálculo o herramientas desconectadas. Eso
              produce errores, duplicidad de información, poca trazabilidad y
              mala comunicación con pacientes.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/[0.06] bg-white/[0.02] p-7">
            <p className="mono mb-4 text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
              Solución propuesta
            </p>
            <p className="text-[1rem] leading-[1.85] text-[#c7d2dc]">
              Lúmina Medic centraliza la operación clínica en una sola
              plataforma web: gestión de doctores, pacientes, citas, horarios,
              historial clínico, pagos, reportes PDF y comunicaciones
              automáticas por correo.
            </p>
          </div>
        </motion.section>

        {/* Funcionalidades */}
        <motion.section variants={fadeUp} className="mt-20">
        <div className="mb-10 max-w-[760px]">
            <h2 className="text-[clamp(30px,4vw,48px)] font-semibold tracking-[-0.03em] text-white">
            Funcionalidades clave
            </h2>

            <p className="mt-4 text-[1rem] leading-[1.85] text-[#b8c4cf]">
            El sistema fue pensado para cubrir flujos reales de operación clínica,
            combinando gestión administrativa, atención médica y autoservicio para pacientes.
            </p>
        </div>

        <motion.div
            variants={staggerContainer}
            className="divide-y divide-white/[0.06] border-y border-white/[0.06]"
        >
            {[
            {
                n: '01',
                title: 'Autenticación multirol',
                text: 'Paneles diferenciados para administrador, doctor y paciente, con permisos específicos por rol y acceso solo a la información correspondiente.',
            },
            {
                n: '02',
                title: 'Gestión de citas y disponibilidad',
                text: 'Creación, cancelación y reprogramación de citas, con validación de horarios, anti-solapamiento y cálculo automático de slots disponibles.',
            },
            {
                n: '03',
                title: 'Historial clínico y notas médicas',
                text: 'Registro de diagnóstico, tratamiento, receta y observaciones por consulta, con acceso posterior desde el expediente del paciente.',
            },
            {
                n: '04',
                title: 'Pagos, reportes y operación diaria',
                text: 'Registro de pagos, generación de reportes PDF, sala de espera en tiempo real y trazabilidad de acciones mediante logs del sistema.',
            },
            {
                n: '05',
                title: 'Automatización y comunicación',
                text: 'Recordatorios automáticos por email, avisos por cambios de estado y flujos que reducen trabajo manual en la clínica.',
            },
            {
                n: '06',
                title: 'Responsive y validaciones reales',
                text: 'Uso completo desde navegador en desktop o móvil, validación de DNI vía RENIEC y soporte para pacientes menores de edad con tutor.',
            },
            ].map((item) => (
            <motion.div
                key={item.n}
                variants={fadeUp}
                className="grid gap-4 py-6 md:grid-cols-[80px_1fr] md:gap-8 md:py-8"
            >
                <div className="mono text-[12px] tracking-[0.18em] text-[#00f5a0]">
                {item.n}
                </div>

                <div>
                <h3 className="text-[1.15rem] font-semibold text-white">
                    {item.title}
                </h3>
                <p className="mt-3 max-w-[860px] text-[0.98rem] leading-[1.85] text-[#c7d2dc]">
                    {item.text}
                </p>
                </div>
            </motion.div>
            ))}
        </motion.div>
        </motion.section>

        {/* Stack y arquitectura */}
        <motion.section variants={fadeUp} className="mt-20">
        <div className="mb-10 max-w-[760px]">
            <h2 className="text-[clamp(30px,4vw,48px)] font-semibold tracking-[-0.03em] text-white">
            Stack y arquitectura
            </h2>

            <p className="mt-4 text-[1rem] leading-[1.85] text-[#b8c4cf]">
            Lúmina Medic fue construido como una aplicación full stack desacoplada:
            el frontend funciona como SPA en React y el backend expone una API REST
            en Node.js/Express, con base de datos PostgreSQL y despliegue independiente.
            </p>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-white/[0.06] bg-white/[0.02]">
            <div className="grid grid-cols-1 divide-y divide-white/[0.06] md:grid-cols-[220px_1fr] md:divide-x md:divide-y-0">
            {[
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
            ].map((row) => (
                <div key={row.label} className="contents">
                <div className="border-b border-white/[0.06] px-6 py-5 md:border-b-0 md:px-7 md:py-6">
                    <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
                    {row.label}
                    </p>
                </div>

                <div className="px-6 py-5 md:px-7 md:py-6">
                    <p className="text-[0.98rem] leading-[1.85] text-[#c7d2dc]">
                    {row.value}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </motion.section>
      </div>
    </motion.main>

    <Footer />
    </>
  )
}