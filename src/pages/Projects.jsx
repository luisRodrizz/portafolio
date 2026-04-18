// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, fadeIn, staggerContainer } from '../utils/animations'
import Footer from '../components/Footer'
import luminaDashboard from '../assets/proyect/luminaMedic/dashboard.png'
import { useLanguage } from '../context/useLanguage'

export default function Projects() {
  const { t } = useLanguage()
  const page = t.projectsPage
  const featured = page.featured
  const rest = page.secondary

  return (
    <>
      <motion.main
        className="relative min-h-screen overflow-hidden pt-24 pb-20 sm:pt-28 lg:pt-32 lg:pb-24"
        initial="hidden"
        animate="show"
        variants={staggerContainer}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-90px] top-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.08),transparent_62%)] blur-3xl sm:left-[-120px] sm:h-[520px] sm:w-[520px]" />
          <div className="absolute right-[-80px] top-[160px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.05),transparent_65%)] blur-3xl sm:right-[-100px] sm:top-[180px] sm:h-[420px] sm:w-[420px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={fadeIn}
            className="mono mb-8 flex items-center gap-4 text-[10px] uppercase tracking-[0.24em] accent sm:mb-10 sm:gap-5 sm:text-[11px] sm:tracking-[0.32em]"
          >
            <span className="whitespace-nowrap">{page.eyebrow}</span>
            <span className="h-px flex-1 bg-gradient-to-r from-white/[0.10] to-transparent" />
          </motion.div>

          <motion.div variants={fadeUp} className="max-w-[820px]">
            <h1 className="display-title text-[clamp(42px,12vw,108px)] leading-[0.92] text-white sm:text-[clamp(52px,10vw,108px)] lg:text-[clamp(54px,7vw,108px)] lg:leading-[0.9]">
              {page.titleFirst}
              <br />
              <span className="accent-glow">{page.titleAccent}</span>
            </h1>

            <p className="mt-6 max-w-[620px] text-[1rem] leading-[1.8] text-[#b8c4cf] sm:mt-8 sm:text-[1.08rem] sm:leading-[1.9]">
              {page.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
              {page.tags.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="mono rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[11px] text-[#c7d2dc] sm:px-3.5 sm:text-[12px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.section variants={fadeUp} className="mt-14 sm:mt-16 lg:mt-20">
            <article className="group overflow-hidden rounded-[26px] border border-white/[0.06] bg-white/[0.02] sm:rounded-[32px] lg:rounded-[36px]">
              <div className="border-b border-white/[0.05] p-3 sm:p-5 lg:p-6">
                <div className="overflow-hidden rounded-[18px] border border-white/[0.05] bg-[#05080b] p-2 sm:rounded-[22px] sm:p-3 lg:rounded-[24px]">
                  <img
                    src={luminaDashboard}
                    alt={featured.imageAlt}
                    className="w-full rounded-[14px] object-contain transition duration-500 group-hover:scale-[1.01] sm:rounded-[16px] lg:rounded-[18px]"
                  />
                </div>
              </div>

              <div className="p-5 sm:p-7 lg:p-10">
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
                  <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
                    {featured.type}
                  </p>
                  <span className="mono text-[10px] uppercase tracking-[0.18em] text-[#00f5a0]">
                    {featured.status}
                  </span>
                </div>

                <h2 className="text-[clamp(24px,6vw,54px)] font-semibold tracking-[-0.03em] text-white">
                  {featured.title}
                </h2>

                <p className="mt-4 max-w-[760px] text-[0.98rem] leading-[1.8] text-[#b8c4cf] sm:mt-5 sm:text-[1.02rem] sm:leading-[1.85]">
                  {featured.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                  {featured.stack.map((item, stackIndex) => (
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
                      {featured.cards.roles}
                    </p>
                    <p className="mt-2 text-sm leading-[1.7] text-[#c7d2dc]">
                      {featured.cards.rolesValue}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                      {featured.cards.operation}
                    </p>
                    <p className="mt-2 text-sm leading-[1.7] text-[#c7d2dc]">
                      {featured.cards.operationValue}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                      {featured.cards.focus}
                    </p>
                    <p className="mt-2 text-sm leading-[1.7] text-[#c7d2dc]">
                      {featured.cards.focusValue}
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
                    {featured.demo} <span>↗</span>
                  </a>

                  <Link
                    to="/projects/lumina-medic"
                    className="secondary-btn inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] sm:w-auto"
                  >
                    {featured.detail} <span>→</span>
                  </Link>
                </div>
              </div>
            </article>
          </motion.section>

          <motion.section variants={fadeUp} className="mt-14 sm:mt-16 lg:mt-20">
            <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <h2 className="text-[clamp(24px,6vw,44px)] font-semibold tracking-[-0.03em] text-white">
                {page.moreProjectsTitle}
              </h2>
              <p className="max-w-[420px] text-sm leading-[1.7] text-[#7a8799] sm:text-right">
                {page.moreProjectsText}
              </p>
            </div>

            <motion.div variants={staggerContainer} className="grid gap-5 sm:gap-6 md:grid-cols-2">
              {rest.map((project) => (
                <motion.article
                  key={project.id}
                  variants={fadeUp}
                  className="rounded-[24px] border border-white/[0.06] bg-white/[0.02] p-5 transition duration-300 hover:border-white/[0.10] hover:bg-white/[0.03] sm:rounded-[28px] sm:p-6"
                >
                  <div className="mb-5 aspect-[16/10] rounded-[18px] border border-white/[0.05] bg-[#05080b] sm:rounded-[20px]" />

                  <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                    <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
                      {project.type}
                    </p>
                    <span className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-[1.35rem] font-semibold text-white sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-[0.98rem] leading-[1.75] text-[#b8c4cf]">
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
          </motion.section>
        </div>
      </motion.main>

      <Footer />
    </>
  )
}