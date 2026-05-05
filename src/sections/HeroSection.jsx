import { Link, useLocation, useNavigate } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import foto from '../assets/Foto.webp'
import { useLanguage } from '../context/useLanguage'
import { fadeUp, scaleIn, staggerContainer } from '../utils/animations'

export default function HeroSection() {
  const { t } = useLanguage()
  const stats = t.home.stats

  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const scrollToSection = (sectionId) => {
    const doScroll = () => {
      const el = document.getElementById(sectionId)
      if (!el) return

      const navbarOffset = 40
      const top =
        el.getBoundingClientRect().top + window.pageYOffset - navbarOffset

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
                {t.home.hero.primaryCta}
                <span className="text-lg leading-none">→</span>
              </Link>

              <a
                href="/Luis-Rodriguez-CV.pdf"
                download
                aria-label={t.home.hero.downloadCv}
                className="secondary-btn inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-[14px] sm:w-auto sm:px-7 sm:text-[15px]"
              >
                {t.home.hero.downloadCv} <span>↓</span>
              </a>

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
  )
}