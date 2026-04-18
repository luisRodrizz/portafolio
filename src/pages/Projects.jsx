// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { fadeUp, fadeIn, staggerContainer } from '../utils/animations'
import Footer from '../components/Footer'
import luminaDashboard from '../assets/proyect/luminaMedic/dashboard.png'

const projects = [
  {
    id: 'lumina-medic',
    title: 'Lúmina Medic',
    type: 'Proyecto destacado',
    status: 'Desplegado',
    description:
      'Sistema web de gestión clínica multirol para administrar doctores, pacientes, citas, horarios, pagos, reportes PDF e historial médico desde una sola plataforma.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis'],
    image: luminaDashboard,
    demo: 'https://sistema-clinico-cyan.vercel.app/login',
    detail: '/projects/lumina-medic',
  },
  {
    id: 'next-project-1',
    title: 'Próximamente',
    type: 'En desarrollo',
    status: 'Work in progress',
    description:
      'Espacio reservado para un próximo proyecto donde seguiré mostrando lógica de negocio, diseño y desarrollo full stack.',
    stack: ['Frontend', 'Backend'],
    image: null,
    demo: null,
    detail: '/projects',
  },
  {
    id: 'next-project-2',
    title: 'Próximamente',
    type: 'En desarrollo',
    status: 'Work in progress',
    description:
      'Otro espacio para ampliar el portafolio con nuevas soluciones web y casos reales.',
    stack: ['Web App', 'Full Stack'],
    image: null,
    demo: null,
    detail: '/projects',
  },
]

export default function Projects() {
  const featured = projects[0]
  const rest = projects.slice(1)

  return (
   <>
    <motion.main
      className="relative min-h-screen overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-24"
      initial="hidden"
      animate="show"
      variants={staggerContainer}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.08),transparent_62%)] blur-3xl" />
        <div className="absolute right-[-100px] top-[180px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.05),transparent_65%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-6 lg:px-10">
        {/* Hero */}
        <motion.div variants={fadeIn} className="mono mb-10 flex items-center gap-5 text-[11px] uppercase tracking-[0.32em] accent">
          <span className="whitespace-nowrap">Trabajos / Proyectos</span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/[0.10] to-transparent" />
        </motion.div>

        <motion.div variants={fadeUp} className="max-w-[820px]">
          <h1 className="display-title text-[clamp(54px,7vw,108px)] leading-[0.9] text-white">
            Proyectos con
            <br />
            <span className="accent-glow">impacto real.</span>
          </h1>

          <p className="mt-8 max-w-[620px] text-[1.08rem] leading-[1.9] text-[#b8c4cf]">
            Una selección de trabajos donde combiné diseño, frontend, backend
            y lógica de negocio para construir soluciones web funcionales.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {['Full Stack', 'React', 'Node.js', 'APIs', 'PostgreSQL'].map((item) => (
              <span
                key={item}
                className="mono rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-1.5 text-[12px] text-[#c7d2dc]"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Proyecto principal */}
        <motion.section variants={fadeUp} className="mt-20">
          <article className="group overflow-hidden rounded-[36px] border border-white/[0.06] bg-white/[0.02]">
            <div className="border-b border-white/[0.05] p-4 sm:p-6">
              <div className="overflow-hidden rounded-[24px] border border-white/[0.05] bg-[#05080b] p-3">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full rounded-[18px] object-contain transition duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
                  {featured.type}
                </p>
                <span className="mono text-[10px] uppercase tracking-[0.18em] text-[#00f5a0]">
                  {featured.status}
                </span>
              </div>

              <h2 className="text-[clamp(30px,4vw,54px)] font-semibold tracking-[-0.03em] text-white">
                {featured.title}
              </h2>

              <p className="mt-5 max-w-[760px] text-[1.02rem] leading-[1.85] text-[#b8c4cf]">
                {featured.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {featured.stack.map((item) => (
                  <span
                    key={item}
                    className="mono rounded-full border border-[#00f5a0]/20 bg-[#00f5a0]/[0.05] px-3.5 py-1.5 text-[12px] tracking-[0.04em] text-[#9fffd7]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                    Roles
                  </p>
                  <p className="mt-2 text-sm leading-[1.7] text-[#c7d2dc]">
                    Admin, Doctor y Paciente
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                    Operación
                  </p>
                  <p className="mt-2 text-sm leading-[1.7] text-[#c7d2dc]">
                    Citas, horarios, pagos y reportes
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                    Enfoque
                  </p>
                  <p className="mt-2 text-sm leading-[1.7] text-[#c7d2dc]">
                    Arquitectura desacoplada y caso real
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={featured.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px]"
                >
                  Ver demo <span>↗</span>
                </a>

                <a
                  href={featured.detail}
                  className="secondary-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px]"
                >
                  Ver detalle <span>→</span>
                </a>
              </div>
            </div>
          </article>
        </motion.section>

        {/* Más proyectos */}
        <motion.section variants={fadeUp} className="mt-20">
          <div className="mb-10 flex items-center justify-between gap-4">
            <h2 className="text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.03em] text-white">
              Más proyectos
            </h2>
            <p className="text-sm text-[#7a8799]">
              Seguiré ampliando esta colección con nuevos trabajos.
            </p>
          </div>

          <motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-2">
            {rest.map((project) => (
              <motion.article
                key={project.id}
                variants={fadeUp}
                className="rounded-[28px] border border-white/[0.06] bg-white/[0.02] p-6 transition duration-300 hover:border-white/[0.10] hover:bg-white/[0.03]"
              >
                <div className="mb-5 aspect-[16/10] rounded-[20px] border border-white/[0.05] bg-[#05080b]" />

                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
                    {project.type}
                  </p>
                  <span className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 leading-[1.75] text-[#b8c4cf]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item, stackIndex) => (
                    <span
                      key={`${item}-${stackIndex}`}
                      className="mono rounded-full border border-[#00f5a0]/20 bg-[#00f5a0]/[0.05] px-3 py-1 text-[12px] text-[#9fffd7]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </motion.main>

    <Footer/>
    </>
  )
}