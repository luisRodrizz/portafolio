import { Link, useLocation, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import foto from '../assets/Foto.png'
import { useLanguage } from '../context/useLanguage'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { fadeUp, fadeIn, scaleIn, staggerContainer } from '../utils/animations'
import luminaDashboard from '../assets/proyect/luminaMedic/doctor.png'

export default function Home() {
  const { t } = useLanguage()
  const stats = t.home.stats
  const aboutItems = t.home.about.items
  const skillGroups = t.home.about.skills
  const homeProjects = t.home.projects
  const featuredProject = homeProjects.featured
  const secondaryProjects = homeProjects.secondary
  const homeContact = t.home.contact
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const scrollToSection = (sectionId) => {
    const doScroll = () => {
      const el = document.getElementById(sectionId)
      if (!el) return

      const navbarOffset = 100
      const top = el.getBoundingClientRect().top + window.pageYOffset - navbarOffset

      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    }

    if (isHome) {
      doScroll()
    } else {
      navigate('/')
      setTimeout(doScroll, 120)
    }
  }

  return (
    <>
      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section className="page-enter relative min-h-screen overflow-hidden pt-24 sm:pt-28 lg:pt-24">
        <div className="absolute inset-0 hero-grid pointer-events-none opacity-30" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.09),transparent_62%)] blur-3xl sm:h-[460px] sm:w-[460px] lg:h-[520px] lg:w-[520px]" />
          <div className="absolute right-[-100px] top-[80px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.05),transparent_65%)] blur-3xl sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-130px)] max-w-[1380px] items-start px-4 sm:min-h-[calc(100vh-150px)] sm:px-6 lg:min-h-[calc(100vh-170px)] lg:px-10">
          <div className="grid w-full items-center gap-10 pt-6 sm:pt-8 lg:grid-cols-[1.08fr_0.92fr] lg:pt-14 xl:gap-16">
            <div className="max-w-[720px]">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="mono mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] accent sm:mb-6 sm:text-[11px] sm:tracking-[0.30em]"
              >
                <span className="h-px w-5 bg-[#00f5a0]" />
                {t.home.hero.badge}
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.08 }}
                className="display-title text-[clamp(52px,16vw,132px)] leading-[0.9] text-white sm:text-[clamp(62px,12vw,132px)]"
              >
                {t.home.hero.titleFirst}
                <br />
                <span className="accent-glow">{t.home.hero.titleAccent}</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.16 }}
                className="mt-6 max-w-[560px] text-[clamp(16px,4.3vw,26px)] font-semibold leading-[1.2] text-[#c5cfd9] sm:mt-7 sm:leading-[1.08]"
              >
                {t.home.hero.subtitle}
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.24 }}
                className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
              >
                <Link
                  to="/projects"
                  className="primary-btn inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-[14px] sm:min-w-[200px] sm:w-auto sm:px-8 sm:text-[15px]"
                >
                  {t.home.hero.primaryCta} <span className="text-lg leading-none">→</span>
                </Link>

                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="secondary-btn inline-flex min-h-[52px] w-full items-center justify-center rounded-full px-6 py-4 text-[14px] sm:min-w-[180px] sm:w-auto sm:px-8 sm:text-[15px]"
                >
                  {t.home.hero.secondaryCta}
                </button>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:mt-14 sm:flex sm:flex-wrap sm:gap-10"
              >
                {stats.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-[30px] font-extrabold leading-none accent-glow sm:text-[38px]">
                      {item.value}
                    </p>
                    <p className="mono mt-2 text-[10px] uppercase tracking-[0.12em] text-[#7a8799] sm:text-[11px] sm:tracking-[0.15em]">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.18 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-[580px] lg:ml-auto">
                <div className="absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_40%_30%,rgba(0,245,160,0.10),transparent_58%)] blur-3xl sm:rounded-[36px] lg:rounded-[42px]" />

                <div className="relative h-[400px] overflow-hidden rounded-[30px] border border-white/[0.06] bg-[#05080b] sm:h-[500px] sm:rounded-[36px] lg:h-[580px] lg:rounded-[42px]">
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

                <div className="absolute bottom-4 left-4 z-30 sm:bottom-6 sm:left-6">
                  <div className="glass rounded-full px-3 py-2 sm:px-4">
                    <span className="mono text-[9px] uppercase tracking-[0.16em] text-[#c5cfd9] sm:text-[10px] sm:tracking-[0.18em]">
                      {t.home.hero.location}
                    </span>
                  </div>
                </div>

                <div className="absolute right-4 top-4 z-30 sm:right-6 sm:top-6">
                  <div className="glass flex items-center gap-2 rounded-full px-3 py-2 sm:px-4">
                    <span className="h-2 w-2 rounded-full bg-[#00f5a0] animate-pulse" />
                    <span className="mono text-[9px] uppercase tracking-[0.13em] accent sm:text-[10px] sm:tracking-[0.15em]">
                      {t.home.hero.status}
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
          <div className="absolute right-[-80px] top-[10%] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.05),transparent_65%)] blur-3xl sm:h-[420px] sm:w-[420px] lg:h-[500px] lg:w-[500px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={fadeIn}
            className="mono mb-10 flex items-center gap-4 text-[10px] uppercase tracking-[0.22em] accent sm:mb-12 sm:gap-5 sm:text-[11px] sm:tracking-[0.28em] lg:mb-14"
          >
            <span>{t.home.about.eyebrow}</span>
            <span className="h-px flex-1 bg-white/[0.07]" />
          </motion.div>

          <div className="grid items-start gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:gap-20">
            <motion.div
              variants={staggerContainer}
              className="flex flex-col divide-y divide-white/[0.06]"
            >
              {aboutItems.map(({ n, text }) => (
                <motion.div
                  key={n}
                  variants={fadeUp}
                  className="flex gap-4 py-5 sm:gap-6 sm:py-7"
                >
                  <span className="mono min-w-[16px] select-none pt-[2px] text-[11px] text-[#00f5a0] sm:min-w-[18px] sm:pt-[3px] sm:text-[12px]">
                    {n}
                  </span>

                  <p className="text-[0.98rem] leading-[1.8] text-[#c7d2dc] sm:text-[1.05rem] lg:text-[1.14rem] lg:leading-[1.85]">
                    {text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="display-title mb-6 text-[clamp(42px,12vw,88px)] leading-[0.92] text-white sm:mb-7 lg:text-[clamp(54px,6vw,88px)] lg:leading-[0.9]">
                {t.home.about.titleFirst}
                <br />
                <span className="accent-glow">{t.home.about.titleAccent}</span>
              </h2>

              <p className="section-copy mb-10 max-w-[520px] text-[1rem] leading-[1.8] sm:mb-12 sm:text-[1.05rem]">
                {t.home.about.description}
              </p>

              <motion.div
                variants={staggerContainer}
                className="flex flex-col gap-6 sm:gap-7"
              >
                {skillGroups.map(({ category, items }) => (
                  <motion.div key={category} variants={fadeUp}>
                    <p className="mono mb-3 text-[10px] uppercase tracking-[0.2em] text-[#7a8799] sm:tracking-[0.22em]">
                      {category}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {items.map((item, index) => (
                        <span
                          key={`${item}-${index}`}
                          className="mono rounded-full pill-accent px-3 py-1 text-[11px] sm:text-[12px]"
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
        <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={fadeIn}
            className="mono mb-10 flex items-center gap-4 text-[10px] uppercase tracking-[0.24em] accent sm:mb-12 sm:gap-5 sm:text-[11px] sm:tracking-[0.32em] lg:mb-14"
          >
            <span className="whitespace-nowrap">{homeProjects.eyebrow}</span>
            <span className="h-px flex-1 bg-gradient-to-r from-white/[0.10] to-transparent" />
          </motion.div>

          <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <motion.div variants={fadeUp} className="max-w-[620px]">
              <h2 className="display-title text-[clamp(42px,12vw,112px)] leading-[0.92] text-white lg:text-[clamp(58px,7vw,112px)] lg:leading-[0.88]">
                {homeProjects.titleFirst}
                <br />
                <span className="accent-glow">{homeProjects.titleAccent}</span>
              </h2>

              <p className="mt-6 text-[1rem] leading-[1.8] text-[#b8c4cf] sm:mt-8 sm:text-[1.05rem] sm:leading-[1.85]">
                {homeProjects.description}
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link
                to="/projects"
                className="secondary-btn inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-[14px] sm:w-auto sm:px-7 sm:text-[15px]"
              >
                {homeProjects.viewAll} <span>→</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <motion.article
              variants={fadeUp}
              className="group rounded-[26px] border border-white/[0.06] bg-white/[0.02] p-4 transition duration-300 hover:border-white/[0.10] hover:bg-white/[0.03] sm:rounded-[30px] sm:p-6 lg:rounded-[32px] lg:p-7"
            >
              <div className="mb-5 flex min-h-[220px] items-center justify-center overflow-hidden rounded-[20px] border border-white/[0.05] bg-[#05080b] p-2 sm:mb-6 sm:min-h-[280px] sm:rounded-[22px] sm:p-3 lg:min-h-[320px] lg:rounded-[24px]">
                <img
                  src={luminaDashboard}
                  alt={featuredProject.imageAlt}
                  className="max-h-[320px] w-full rounded-[14px] object-contain transition duration-500 group-hover:scale-[1.01] sm:max-h-[380px] sm:rounded-[16px] lg:max-h-[420px] lg:rounded-[18px]"
                />
              </div>

              <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
                  {featuredProject.label}
                </p>

                <span className="mono text-[10px] uppercase tracking-[0.18em] text-[#00f5a0]">
                  {featuredProject.status}
                </span>
              </div>

              <h3 className="text-[clamp(24px,6vw,42px)] font-semibold tracking-[-0.03em] text-white">
                {featuredProject.title}
              </h3>

              <p className="mt-4 max-w-[620px] text-[0.98rem] leading-[1.75] text-[#b8c4cf] sm:text-[1rem] sm:leading-[1.8]">
                {featuredProject.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                {featuredProject.stack.map((item, stackIndex) => (
                  <span
                    key={`${item}-${stackIndex}`}
                    className="mono rounded-full border border-[#00f5a0]/20 bg-[#00f5a0]/[0.05] px-3 py-1.5 text-[11px] tracking-[0.04em] text-[#9fffd7] sm:px-3.5 sm:text-[12px]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                    {featuredProject.cards.roles}
                  </p>
                  <p className="mt-2 text-sm leading-[1.7] text-[#c7d2dc]">
                    {featuredProject.cards.rolesValue}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                    {featuredProject.cards.modules}
                  </p>
                  <p className="mt-2 text-sm leading-[1.7] text-[#c7d2dc]">
                    {featuredProject.cards.modulesValue}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                    {featuredProject.cards.operation}
                  </p>
                  <p className="mt-2 text-sm leading-[1.7] text-[#c7d2dc]">
                    {featuredProject.cards.operationValue}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://sistema-clinico-cyan.vercel.app/login"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-btn inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] sm:w-auto"
                >
                  {featuredProject.demo} <span>↗</span>
                </a>

                <Link
                  to="/projects/lumina-medic"
                  className="secondary-btn inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] sm:w-auto"
                >
                  {featuredProject.detail} <span>→</span>
                </Link>
              </div>
            </motion.article>

            <motion.div
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              {secondaryProjects.map((project) => (
                <motion.article
                  key={project.id}
                  variants={fadeUp}
                  className="rounded-[24px] border border-white/[0.06] bg-white/[0.02] p-5 sm:rounded-[26px] sm:p-6 lg:rounded-[28px]"
                >
                  <div className="mb-5 aspect-[16/10] rounded-[18px] border border-white/[0.05] bg-[#05080b] sm:rounded-[20px]" />

                  <p className="mono mb-3 text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
                    {project.label}
                  </p>

                  <h3 className="text-[1.35rem] font-semibold text-white sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-[0.98rem] leading-[1.75] text-[#b8c4cf] sm:leading-[1.7]">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item, stackIndex) => (
                      <span
                        key={`${item}-${stackIndex}`}
                        className="mono rounded-full border border-[#00f5a0]/20 bg-[#00f5a0]/[0.05] px-3 py-1 text-[11px] text-[#9fffd7] sm:text-[12px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
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
    <div className="absolute left-1/2 top-0 h-[300px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.06),transparent_68%)] blur-3xl sm:h-[360px] sm:w-[560px] lg:h-[420px] lg:w-[720px]" />
    <div className="absolute left-1/2 top-[38%] h-[160px] w-[160px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.03),transparent_72%)] blur-3xl sm:h-[200px] sm:w-[200px] lg:h-[220px] lg:w-[220px]" />
  </div>

  <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
    <motion.div
      variants={fadeIn}
      className="mono mb-10 flex items-center gap-4 text-[10px] uppercase tracking-[0.24em] accent sm:mb-12 sm:gap-5 sm:text-[11px] sm:tracking-[0.32em] lg:mb-14"
    >
      <span className="whitespace-nowrap">{homeContact.eyebrow}</span>
      <span className="h-px flex-1 bg-gradient-to-r from-white/[0.10] to-transparent" />
    </motion.div>

    <motion.div
      variants={staggerContainer}
      className="mx-auto flex max-w-[920px] flex-col items-center text-center"
    >
      <motion.p
        variants={fadeUp}
        className="mono mb-5 text-[10px] uppercase tracking-[0.22em] text-[#7a8799] sm:mb-6 sm:text-[11px] sm:tracking-[0.28em]"
      >
        {homeContact.badge}
      </motion.p>

      <motion.h2
        variants={fadeUp}
        className="display-title text-[clamp(42px,12vw,128px)] leading-[0.92] text-white sm:text-[clamp(52px,10vw,128px)] lg:text-[clamp(60px,8vw,128px)] lg:leading-[0.88]"
      >
        {homeContact.titleFirst}
        <br />
        <span className="accent-glow">{homeContact.titleAccent}</span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mt-6 max-w-[640px] text-[1rem] leading-[1.8] text-[#b8c4cf] sm:mt-8 sm:text-[1.08rem] sm:leading-[1.9]"
      >
        {homeContact.description}
      </motion.p>

      <motion.div variants={fadeUp} className="mt-10 sm:mt-14">
        <a
          href={`mailto:${homeContact.email}`}
          className="inline-block max-w-full break-all border-b border-transparent text-[clamp(20px,5.5vw,46px)] font-semibold tracking-[-0.04em] text-white transition duration-300 hover:border-[#00f5a0]/35 hover:text-[#00f5a0] sm:break-normal"
        >
          {homeContact.email}
        </a>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        className="mt-10 flex w-full flex-wrap items-center justify-center gap-3 sm:mt-12 sm:gap-4"
      >
        <motion.a
          variants={fadeUp}
          href="https://github.com/luisRodrizz"
          target="_blank"
          rel="noreferrer"
          className="secondary-btn inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] sm:min-h-[50px] sm:px-6"
        >
          {homeContact.github}
        </motion.a>

        <motion.a
          variants={fadeUp}
          href="https://www.linkedin.com/in/luis-rodriguez-b378bb334/"
          target="_blank"
          rel="noreferrer"
          className="secondary-btn inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] sm:min-h-[50px] sm:px-6"
        >
          {homeContact.linkedin}
        </motion.a>

        <motion.a
          variants={fadeUp}
          href="https://wa.me/51973237491"
          target="_blank"
          rel="noreferrer"
          className="secondary-btn inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] sm:min-h-[50px] sm:px-6"
        >
          {homeContact.whatsapp}
        </motion.a>
      </motion.div>
    </motion.div>
  </div>
</motion.section>
    <Footer />
  </>
  )
}