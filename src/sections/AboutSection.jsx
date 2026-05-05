// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import { useLanguage } from '../context/useLanguage'
import SectionHeader from '../components/SectionHeader'
import { fadeUp, staggerContainer } from '../utils/animations'
import SkillPill from '../components/SkillPill'

export default function AboutSection() {
  const { t } = useLanguage()
  const aboutItems = t.home.about.items
  const skillGroups = t.home.about.skills

  return (
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
        <SectionHeader>
          {t.home.about.eyebrow}
        </SectionHeader>

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
                      <SkillPill key={`${item}-${index}`}>
                        {item}
                      </SkillPill>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}