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
import { useLanguage } from '../../context/useLanguage'

export default function LuminaMedic() {
  const { t } = useLanguage()
  const content = t.luminaMedic

  const gallery = [
    { ...content.gallery.items[0], image: dashboardImg },
    { ...content.gallery.items[1], image: doctorImg },
    { ...content.gallery.items[2], image: loginImg },
    { ...content.gallery.items[3], image: perfilImg },
  ]

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
        className="relative min-h-screen overflow-hidden pt-24 pb-20 sm:pt-28 lg:pt-32 lg:pb-24"
        initial="hidden"
        animate="show"
        variants={staggerContainer}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-12 top-0 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.08),transparent_62%)] blur-3xl sm:-left-20 sm:h-[520px] sm:w-[520px]" />
          <div className="absolute right-[-70px] top-[160px] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.05),transparent_65%)] blur-3xl sm:right-[-100px] sm:top-[180px] sm:h-[420px] sm:w-[420px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={fadeIn}
            className="mono mb-8 flex items-center gap-4 text-[10px] uppercase tracking-[0.24em] accent sm:mb-10 sm:gap-5 sm:text-[11px] sm:tracking-[0.32em]"
          >
            <span className="whitespace-nowrap">{content.eyebrow}</span>
            <span className="h-px flex-1 bg-gradient-to-r from-white/[0.10] to-transparent" />
          </motion.div>

          <motion.section
            variants={fadeUp}
            className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-12"
          >
            <div>
              <p className="mono mb-4 text-[10px] uppercase tracking-[0.22em] text-[#7a8799] sm:mb-5 sm:text-[11px] sm:tracking-[0.28em]">
                {content.badge}
              </p>

              <h1 className="display-title text-[clamp(42px,12vw,108px)] leading-[0.92] text-white sm:text-[clamp(52px,10vw,108px)] lg:text-[clamp(56px,7vw,108px)] lg:leading-[0.9]">
                {content.titleFirst}
                <br />
                <span className="accent-glow">{content.titleAccent}</span>
              </h1>

              <p className="mt-6 max-w-[680px] text-[1rem] leading-[1.8] text-[#b8c4cf] sm:mt-8 sm:text-[1.08rem] sm:leading-[1.9]">
                {content.description}
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:flex-wrap">
                  <a
                    href="https://sistema-clinico-cyan.vercel.app/login"
                    target="_blank"
                    rel="noreferrer"
                    className="primary-btn inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full px-4 py-3 text-[14px] sm:px-6"
                  >
                    {content.ctas.demo} <span>↗</span>
                  </a>

                  <a
                    href="https://github.com/luisRodrizz/Sistema-Clinico"
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-btn inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full px-4 py-3 text-[14px] sm:px-6"
                  >
                    {content.ctas.github} <span>↗</span>
                  </a>
                </div>

                <div className="flex">
                  <Link
                    to="/projects"
                    className="secondary-btn inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] sm:w-auto"
                  >
                    {content.ctas.back} <span>←</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-5">
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                  {content.summaryCards.roles.label}
                </p>
                <p className="mt-3 text-sm leading-[1.7] text-[#c7d2dc]">
                  {content.summaryCards.roles.value}
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-5">
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                  {content.summaryCards.status.label}
                </p>
                <p className="mt-3 text-sm leading-[1.7] text-[#c7d2dc]">
                  {content.summaryCards.status.value}
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-5">
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                  {content.summaryCards.focus.label}
                </p>
                <p className="mt-3 text-sm leading-[1.7] text-[#c7d2dc]">
                  {content.summaryCards.focus.value}
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-5">
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                  {content.summaryCards.infrastructure.label}
                </p>
                <p className="mt-3 text-sm leading-[1.7] text-[#c7d2dc]">
                  {content.summaryCards.infrastructure.value}
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section variants={fadeUp} className="mt-14 sm:mt-16">
            <div className="overflow-hidden rounded-[24px] border border-white/[0.06] bg-white/[0.02] p-3 sm:rounded-[32px] sm:p-6">
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                    {content.gallery.label}
                  </p>

                  <h2 className="mt-2 text-[1.18rem] font-semibold text-white sm:text-[1.35rem]">
                    {gallery[currentSlide].title}
                  </h2>

                  <p className="mt-3 max-w-[760px] text-[0.95rem] leading-[1.75] text-[#b8c4cf] sm:text-[0.98rem] sm:leading-[1.8]">
                    {gallery[currentSlide].description}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-start">
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="secondary-btn inline-flex h-10 w-10 items-center justify-center rounded-full text-sm sm:h-11 sm:w-11"
                    aria-label={content.gallery.previous}
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    className="secondary-btn inline-flex h-10 w-10 items-center justify-center rounded-full text-sm sm:h-11 sm:w-11"
                    aria-label={content.gallery.next}
                  >
                    →
                  </button>
                </div>
              </div>

              <div className="overflow-hidden rounded-[18px] border border-white/[0.05] bg-[#05080b] p-2 sm:rounded-[24px] sm:p-3">
                <img
                  src={gallery[currentSlide].image}
                  alt={gallery[currentSlide].title}
                  className="w-full rounded-[14px] object-contain sm:rounded-[18px]"
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3 sm:grid-cols-4">
                {gallery.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    className={[
                      'overflow-hidden rounded-[14px] border p-1 transition sm:rounded-[18px]',
                      currentSlide === index
                        ? 'border-[#00f5a0]/40 bg-[#00f5a0]/[0.05]'
                        : 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12]',
                    ].join(' ')}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-[16/10] w-full rounded-[10px] object-cover object-top sm:rounded-[12px]"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={fadeUp}
            className="mt-14 grid gap-5 sm:mt-16 sm:gap-8 lg:mt-20 lg:grid-cols-2"
          >
            <div className="rounded-[24px] border border-white/[0.06] bg-white/[0.02] p-5 sm:rounded-[28px] sm:p-7">
              <p className="mono mb-4 text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
                {content.problemSolution.problem.label}
              </p>
              <p className="text-[0.98rem] leading-[1.8] text-[#c7d2dc] sm:text-[1rem] sm:leading-[1.85]">
                {content.problemSolution.problem.text}
              </p>
            </div>

            <div className="rounded-[24px] border border-white/[0.06] bg-white/[0.02] p-5 sm:rounded-[28px] sm:p-7">
              <p className="mono mb-4 text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
                {content.problemSolution.solution.label}
              </p>
              <p className="text-[0.98rem] leading-[1.8] text-[#c7d2dc] sm:text-[1rem] sm:leading-[1.85]">
                {content.problemSolution.solution.text}
              </p>
            </div>
          </motion.section>

          <motion.section variants={fadeUp} className="mt-14 sm:mt-16 lg:mt-20">
            <div className="mb-8 max-w-[760px] sm:mb-10">
              <h2 className="text-[clamp(24px,6vw,48px)] font-semibold tracking-[-0.03em] text-white">
                {content.features.title}
              </h2>

              <p className="mt-4 text-[0.98rem] leading-[1.8] text-[#b8c4cf] sm:text-[1rem] sm:leading-[1.85]">
                {content.features.description}
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              className="divide-y divide-white/[0.06] border-y border-white/[0.06]"
            >
              {content.features.items.map((item) => (
                <motion.div
                  key={item.n}
                  variants={fadeUp}
                  className="grid gap-3 py-5 sm:gap-4 sm:py-6 md:grid-cols-[80px_1fr] md:gap-8 md:py-8"
                >
                  <div className="mono text-[11px] tracking-[0.16em] text-[#00f5a0] sm:text-[12px] sm:tracking-[0.18em]">
                    {item.n}
                  </div>

                  <div>
                    <h3 className="text-[1.02rem] font-semibold text-white sm:text-[1.15rem]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[860px] text-[0.95rem] leading-[1.8] text-[#c7d2dc] sm:text-[0.98rem] sm:leading-[1.85]">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section variants={fadeUp} className="mt-14 sm:mt-16 lg:mt-20">
            <div className="mb-8 max-w-[760px] sm:mb-10">
              <h2 className="text-[clamp(24px,6vw,48px)] font-semibold tracking-[-0.03em] text-white">
                {content.architecture.title}
              </h2>

              <p className="mt-4 text-[0.98rem] leading-[1.8] text-[#b8c4cf] sm:text-[1rem] sm:leading-[1.85]">
                {content.architecture.description}
              </p>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-white/[0.06] bg-white/[0.02] sm:rounded-[28px]">
              <div className="grid grid-cols-1 divide-y divide-white/[0.06] md:grid-cols-[220px_1fr] md:divide-x md:divide-y-0">
                {content.architecture.rows.map((row) => (
                  <div key={row.label} className="contents">
                    <div className="border-b border-white/[0.06] px-5 py-4 md:border-b-0 md:px-7 md:py-6">
                      <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
                        {row.label}
                      </p>
                    </div>

                    <div className="px-5 py-4 md:px-7 md:py-6">
                      <p className="text-[0.95rem] leading-[1.8] text-[#c7d2dc] sm:text-[0.98rem] sm:leading-[1.85]">
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