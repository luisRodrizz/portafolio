import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import foto from '../assets/Foto.png'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { fadeUp, fadeIn, scaleIn, staggerContainer } from '../utils/animations'
import luminaDashboard from '../assets/proyect/luminaMedic/doctor.png'

const stats = [
  { value: '9+',  label: 'Tecnologías' },
  { value: '1',   label: 'Proyecto desplegado' },
  { value: '5to', label: 'Ciclo SENATI' },
]

const aboutItems = [
  {
    n: '1',
    text: (
      <>
        Tengo <strong>19 años</strong> y estudio Ingeniería de Software en{' '}
        <strong>SENATI</strong>, actualmente en 5to ciclo.
      </>
    ),
  },
  {
    n: '2',
    text: (
      <>
        Me apasiona la programación y mi meta es convertirme en{' '}
        <strong>Full Stack Developer</strong> — manejo tanto el frontend como el backend.
      </>
    ),
  },
  {
    n: '3',
    text: (
      <>
        Mi stack incluye <strong>React.js, Inertia.js, Laravel, PHP, Node.js</strong> y{' '}
        <strong>Python</strong>, con bases de datos usando <strong>Prisma</strong> y{' '}
        <strong>Eloquent</strong>.
      </>
    ),
  },
  {
    n: '4',
    text: (
      <>
        Ya tengo <strong>1 proyecto desplegado</strong> y busco oportunidades reales
        para demostrar mi capacidad trabajando en empresas.
      </>
    ),
  },
  {
    n: '5',
    text: (
      <>
        Basado en <strong>Lima, Perú</strong> — disponible para prácticas,
        trabajo remoto o proyectos freelance.
      </>
    ),
  },
]

const skillGroups = [
  { category: 'Frontend',      items: ['React.js', 'Inertia.js', 'JavaScript'] },
  { category: 'Backend',       items: ['Laravel', 'PHP', 'Node.js', 'Python'] },
  { category: 'Base de datos & ORM', items: ['PostgreSQL', 'Prisma', 'Eloquent'] },
]

export default function Home() {
  return (
    <>
      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section className="page-enter relative min-h-screen overflow-hidden pt-20 lg:pt-24">
  <div className="absolute inset-0 hero-grid pointer-events-none opacity-30" />

  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -left-20 top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.09),transparent_62%)] blur-3xl" />
    <div className="absolute right-[-100px] top-[80px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.05),transparent_65%)] blur-3xl" />
  </div>

  <div className="relative z-10 mx-auto flex min-h-[calc(100vh-170px)] max-w-[1380px] items-start px-6 lg:px-10">
    <div className="grid w-full items-center gap-10 pt-10 lg:grid-cols-[1.08fr_0.92fr] lg:pt-14 xl:gap-16">
      {/* Izquierda */}
      <div className="max-w-[720px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mono mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.30em] accent"
        >
          <span className="h-px w-5 bg-[#00f5a0]" />
          Estudiante · Ing. de Software
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.08 }}
          className="display-title text-[clamp(68px,9vw,132px)] leading-[0.88] text-white"
        >
          Luis
          <br />
          <span className="accent-glow">Rodríguez</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.16 }}
          className="mt-7 max-w-[520px] text-[clamp(18px,2vw,26px)] font-semibold leading-[1.08] text-[#c5cfd9]"
        >
          Desarrollo interfaces modernas y backend funcional.
          Busco convertir ideas reales en productos web.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.24 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/projects"
            className="primary-btn inline-flex min-w-[200px] items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px]"
          >
            Ver proyectos <span className="text-lg leading-none">→</span>
          </Link>

          <a
            href="#contact"
            className="secondary-btn inline-flex min-w-[180px] items-center justify-center rounded-full px-8 py-4 text-[15px]"
          >
            Contactarme
          </a>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mt-14 flex flex-wrap gap-10"
        >
          {stats.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              transition={{ delay: 0.3 }}
            >
              <p className="text-[38px] font-extrabold leading-none accent-glow">
                {item.value}
              </p>
              <p className="mono mt-2 text-[11px] uppercase tracking-[0.15em] text-[#7a8799]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Derecha — foto */}
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.18 }}
        className="relative"
      >
        <div className="relative mx-auto max-w-[580px] lg:ml-auto">
          <div className="absolute inset-0 rounded-[42px] bg-[radial-gradient(circle_at_40%_30%,rgba(0,245,160,0.10),transparent_58%)] blur-3xl" />

          <div className="relative h-[580px] overflow-hidden rounded-[42px] border border-white/[0.06] bg-[#05080b]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,245,160,0.06),transparent_55%)]" />

            <img
              src={foto}
              alt="Luis Rodríguez"
              className="absolute inset-0 z-10 h-full w-full object-cover object-top"
              style={{ filter: 'contrast(1.02) brightness(0.97)' }}
            />

            <div className="absolute inset-0 z-20 bg-[linear-gradient(to_left,rgba(5,7,10,0.72),rgba(5,7,10,0.12)_28%,transparent_50%)]" />
            <div className="absolute inset-0 z-20 bg-[linear-gradient(to_top,rgba(5,7,10,0.85),rgba(5,7,10,0.08)_44%,transparent)]" />
          </div>

          <div className="absolute bottom-6 left-6 z-30">
            <div className="glass rounded-full px-4 py-2">
              <span className="mono text-[10px] uppercase tracking-[0.18em] text-[#c5cfd9]">
                Lima, Perú
              </span>
            </div>
          </div>

          <div className="absolute right-6 top-6 z-30 hidden md:flex">
            <div className="glass flex items-center gap-2 rounded-full px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#00f5a0] animate-pulse" />
              <span className="mono text-[10px] uppercase tracking-[0.15em] accent">
                Disponible
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* ════════════════════════════════
          ABOUT  ← ancla para el navbar
      ════════════════════════════════ */}
      <motion.section
        id="about"
        className="relative overflow-hidden scroll-mt-28 pt-20 pb-16 lg:scroll-mt-32 lg:pt-24 lg:pb-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[-80px] top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.05),transparent_65%)] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1380px] px-6 lg:px-10">
          <motion.div
            variants={fadeIn}
            className="mono mb-12 flex items-center gap-5 text-[11px] uppercase tracking-[0.28em] accent lg:mb-14"
          >
            <span>01 — About me</span>
            <span className="h-px flex-1 bg-white/[0.07]" />
          </motion.div>

          <div className="grid items-start gap-14 lg:grid-cols-[1.18fr_0.82fr] lg:gap-20">
            {/* Izquierda: lista numerada */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-col divide-y divide-white/[0.06]"
            >
              {aboutItems.map(({ n, text }) => (
                <motion.div
                  key={n}
                  variants={fadeUp}
                  className="flex gap-6 py-7"
                >
                  <span className="mono min-w-[18px] select-none pt-[3px] text-[12px] text-[#00f5a0]">
                    {n}
                  </span>
                  <p className="text-[1.08rem] leading-[1.85] text-[#c7d2dc] [&_strong]:font-semibold [&_strong]:text-white lg:text-[1.14rem]">
                    {text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Derecha: heading + skills */}
            <motion.div variants={fadeUp}>
              <h2 className="display-title mb-7 text-[clamp(54px,6vw,88px)] leading-[0.9] text-white">
                Código con
                <br />
                <span className="accent-glow">ambición.</span>
              </h2>

              <p className="section-copy mb-12 max-w-[460px] text-[1.05rem]">
                Estudiante de software en Lima. Me enfoco en construir,
                aprender rápido y ganar experiencia real en equipos de alto nivel.
              </p>

              <motion.div
                variants={staggerContainer}
                className="flex flex-col gap-7"
              >
                {skillGroups.map(({ category, items }) => (
                  <motion.div key={category} variants={fadeUp}>
                    <p className="mono mb-3 text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
                      {category}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="mono rounded-full pill-accent px-3 py-1 text-[12px]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* PROYECTOS */}

      <motion.section
  id="projects"
  className="relative scroll-mt-28 pt-16 pb-18 lg:scroll-mt-32 lg:pt-20 lg:pb-22"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.18 }}
>
  <div className="relative z-10 mx-auto max-w-[1380px] px-6 lg:px-10">
    <motion.div
      variants={fadeIn}
      className="mono mb-12 flex items-center gap-5 text-[11px] uppercase tracking-[0.32em] accent lg:mb-14"
    >
      <span className="whitespace-nowrap">02 — Proyectos</span>
      <span className="h-px flex-1 bg-gradient-to-r from-white/[0.10] to-transparent" />
    </motion.div>

    <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <motion.div variants={fadeUp} className="max-w-[560px]">
        <h2 className="display-title text-[clamp(58px,7vw,112px)] leading-[0.88] text-white">
          Trabajos
          <br />
          <span className="accent-glow">reales.</span>
        </h2>

        <p className="mt-8 text-[1.05rem] leading-[1.85] text-[#b8c4cf]">
          Una selección de proyectos donde combiné diseño, frontend y backend
          para construir productos web funcionales, con lógica de negocio real
          y enfoque en experiencia de usuario.
        </p>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Link
          to="/projects"
          className="secondary-btn inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px]"
        >
          Ver todos los proyectos <span>→</span>
        </Link>
      </motion.div>
    </div>

    <motion.div
      variants={staggerContainer}
      className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"
    >
      {/* Proyecto principal */}
      <motion.article
  variants={fadeUp}
  className="group rounded-[32px] border border-white/[0.06] bg-white/[0.02] p-7 transition duration-300 hover:border-white/[0.10] hover:bg-white/[0.03]"
>
  <div className="mb-6 flex min-h-[320px] items-center justify-center overflow-hidden rounded-[24px] border border-white/[0.05] bg-[#05080b] p-3">
    <img
      src={luminaDashboard}
      alt="Dashboard de Lúmina Medic"
      className="max-h-[420px] w-full rounded-[18px] object-contain transition duration-500 group-hover:scale-[1.01]"
    />
  </div>

  <div className="mb-3 flex items-center justify-between gap-4">
    <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
      Proyecto destacado
    </p>

    <span className="mono text-[10px] uppercase tracking-[0.18em] text-[#00f5a0]">
      Desplegado
    </span>
  </div>

  <h3 className="text-[clamp(28px,3vw,42px)] font-semibold tracking-[-0.03em] text-white">
    Lúmina Medic
  </h3>

  <p className="mt-4 max-w-[620px] text-[1rem] leading-[1.8] text-[#b8c4cf]">
    Sistema web de gestión clínica multirol para administrar doctores,
    pacientes, citas, horarios, pagos, reportes PDF e historial médico
    desde una sola plataforma.
  </p>

  <div className="mt-6 flex flex-wrap gap-3">
    {['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis'].map((item) => (
      <span
        key={item}
        className="mono rounded-full border border-[#00f5a0]/20 bg-[#00f5a0]/[0.05] px-3.5 py-1.5 text-[12px] tracking-[0.04em] text-[#9fffd7]"
      >
        {item}
      </span>
    ))}
  </div>

  <div className="mt-8 grid gap-4 sm:grid-cols-3">
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
        Módulos
      </p>
      <p className="mt-2 text-sm leading-[1.7] text-[#c7d2dc]">
        Citas, horarios y bloqueos
      </p>
    </div>

    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
      <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
        Operación
      </p>
      <p className="mt-2 text-sm leading-[1.7] text-[#c7d2dc]">
        Pagos, PDFs e historial clínico
      </p>
    </div>
  </div>

  <div className="mt-8 flex flex-wrap gap-3">
    <a
      href="https://sistema-clinico-cyan.vercel.app/login"
      target="_blank"
      rel="noreferrer"
      className="primary-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px]"
    >
      Ver demo <span>↗</span>
    </a>

    <Link
      to="/projects/lumina-medic"
      className="secondary-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px]"
    >
      Ver detalle <span>→</span>
    </Link>
  </div>
</motion.article>

      {/* Secundarios */}
      <motion.div
        variants={staggerContainer}
        className="flex flex-col gap-6"
      >
        <motion.article
          variants={fadeUp}
          className="rounded-[28px] border border-white/[0.06] bg-white/[0.02] p-6"
        >
          <div className="mb-5 aspect-[16/10] rounded-[20px] border border-white/[0.05] bg-[#05080b]" />

          <p className="mono mb-3 text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
            Proyecto
          </p>

          <h3 className="text-2xl font-semibold text-white">
            Próximamente
          </h3>

          <p className="mt-3 leading-[1.7] text-[#b8c4cf]">
            Aquí irá otro proyecto donde pueda mostrar diseño, lógica de negocio
            y experiencia completa de desarrollo.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {['Frontend', 'Backend'].map((item) => (
              <span
                key={item}
                className="mono rounded-full border border-[#00f5a0]/20 bg-[#00f5a0]/[0.05] px-3 py-1 text-[12px] text-[#9fffd7]"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.article>

        <motion.article
          variants={fadeUp}
          className="rounded-[28px] border border-white/[0.06] bg-white/[0.02] p-6"
        >
          <div className="mb-5 aspect-[16/10] rounded-[20px] border border-white/[0.05] bg-[#05080b]" />

          <p className="mono mb-3 text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
            Proyecto
          </p>

          <h3 className="text-2xl font-semibold text-white">
            Próximamente
          </h3>

          <p className="mt-3 leading-[1.7] text-[#b8c4cf]">
            Espacio reservado para seguir construyendo productos y ampliar el
            portafolio con más casos reales.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {['Web App', 'Full Stack'].map((item) => (
              <span
                key={item}
                className="mono rounded-full border border-[#00f5a0]/20 bg-[#00f5a0]/[0.05] px-3 py-1 text-[12px] text-[#9fffd7]"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.article>
      </motion.div>
    </motion.div>
  </div>
</motion.section>

      {/* ════════════════════════════════
          CONTACT  ← ancla para el navbar
      ════════════════════════════════ */}
      <motion.section
        id="contact"
        className="relative overflow-hidden scroll-mt-28 pt-20 pb-24 lg:scroll-mt-32 lg:pt-24 lg:pb-28"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.06),transparent_68%)] blur-3xl" />
          <div className="absolute left-1/2 top-[38%] h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.03),transparent_72%)] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1380px] px-6 lg:px-10">
          <motion.div
            variants={fadeIn}
            className="mono mb-12 flex items-center gap-5 text-[11px] uppercase tracking-[0.32em] accent lg:mb-14"
          >
            <span className="whitespace-nowrap">03 — Contact</span>
            <span className="h-px flex-1 bg-gradient-to-r from-white/[0.10] to-transparent" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="mx-auto flex max-w-[920px] flex-col items-center text-center"
          >
            <motion.p
              variants={fadeUp}
              className="mono mb-6 text-[11px] uppercase tracking-[0.28em] text-[#7a8799]"
            >
              Disponible para prácticas · remoto · freelance
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="display-title text-[clamp(60px,8vw,128px)] leading-[0.88] text-white"
            >
              Trabajemos
              <br />
              <span className="accent-glow">juntos.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-[620px] text-[1.08rem] leading-[1.9] text-[#b8c4cf]"
            >
              Estoy buscando oportunidades para crecer como desarrollador.
              Si tienes un proyecto, una práctica o una oportunidad laboral,
              me encantará conversar contigo.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-14">
              <a
                href="mailto:luiisrodriguezguevara@gmail.com"
                className="inline-block border-b border-transparent text-[clamp(22px,3.6vw,46px)] font-semibold tracking-[-0.04em] text-white transition duration-300 hover:border-[#00f5a0]/35 hover:text-[#00f5a0]"
              >
                luiisrodriguezguevara@gmail.com
              </a>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="mt-12 flex flex-wrap items-center justify-center gap-4"
            >
              <motion.a
                variants={fadeUp}
                href="https://github.com/luisRodrizz"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px]"
              >
                GitHub
              </motion.a>

              <motion.a
                variants={fadeUp}
                href="https://www.linkedin.com/in/luis-rodriguez-b378bb334/"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px]"
              >
                LinkedIn
              </motion.a>

              <motion.a
                variants={fadeUp}
                href="https://wa.me/51973237491"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px]"
              >
                WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    <Footer />
  </>
  )
}