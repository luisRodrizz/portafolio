// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { GraduationCap, Award, CalendarDays } from 'lucide-react'

import SectionHeader from '../components/SectionHeader'
import { useLanguage } from '../context/useLanguage'
import { fadeUp, staggerContainer } from '../utils/animations'

export default function EducationSection() {
  const { t } = useLanguage()
  const education = t.home.education

  return (
    <motion.section
      id="education"
      className="relative overflow-hidden scroll-mt-28 pt-16 pb-16 lg:scroll-mt-32 lg:pt-20 lg:pb-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-90px] top-[20%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.05),transparent_68%)] blur-3xl sm:h-[420px] sm:w-[420px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <SectionHeader
          className="tracking-[0.24em] sm:tracking-[0.32em]"
          lineClassName="bg-gradient-to-r from-white/[0.10] to-transparent"
        >
          {education.eyebrow}
        </SectionHeader>

        <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
          <motion.div variants={fadeUp}>
            <h2 className="display-title text-[clamp(42px,12vw,96px)] leading-[0.92] text-white lg:text-[clamp(56px,6.5vw,96px)] lg:leading-[0.88]">
              {education.titleFirst}
              <br />
              <span className="accent-glow">{education.titleAccent}</span>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="max-w-[680px] text-[1rem] leading-[1.8] text-[#b8c4cf] sm:text-[1.05rem] sm:leading-[1.85] lg:ml-auto"
          >
            {education.description}
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <motion.article
            variants={fadeUp}
            className="rounded-[26px] border border-white/[0.06] bg-white/[0.02] p-5 sm:rounded-[30px] sm:p-6 lg:p-7"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#00f5a0]/20 bg-[#00f5a0]/[0.06] text-[#00f5a0]">
                <GraduationCap className="h-5 w-5" />
              </div>

              <h3 className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                {education.academicTitle}
              </h3>
            </div>

            <div className="space-y-4">
              {education.academic.map((item) => (
                <div
                  key={`${item.institution}-${item.period}`}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
                >
                  <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#00f5a0]">
                    {item.institution}
                  </p>

                  <h4 className="mt-2 text-[1.05rem] font-semibold text-white">
                    {item.program}
                  </h4>

                  <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-[#9aa6b6]">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {item.period}
                    </span>

                    <span className="text-white/[0.18]">•</span>

                    <span>{item.meta}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-[26px] border border-white/[0.06] bg-white/[0.02] p-5 sm:rounded-[30px] sm:p-6 lg:p-7"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#00f5a0]/20 bg-[#00f5a0]/[0.06] text-[#00f5a0]">
                <Award className="h-5 w-5" />
              </div>

              <h3 className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                {education.coursesTitle}
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {education.courses.map((course) => (
                <div
                  key={course.name}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition duration-300 hover:border-[#00f5a0]/20 hover:bg-white/[0.035]"
                >
                  <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                    {course.provider}
                  </p>

                  <p className="mt-2 text-[0.98rem] font-medium leading-[1.55] text-[#c7d2dc]">
                    {course.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.article>
        </motion.div>
      </div>
    </motion.section>
  )
}