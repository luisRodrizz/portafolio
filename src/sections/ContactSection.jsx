// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import SectionHeader from '../components/SectionHeader'
import { useLanguage } from '../context/useLanguage'
import { fadeUp, staggerContainer } from '../utils/animations'

export default function ContactSection() {
  const { t } = useLanguage()
  const homeContact = t.home.contact

  return (
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
        <SectionHeader
          className="tracking-[0.24em] sm:tracking-[0.32em]"
          lineClassName="bg-gradient-to-r from-white/[0.10] to-transparent"
        >
          {homeContact.eyebrow}
        </SectionHeader>

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
  )
}