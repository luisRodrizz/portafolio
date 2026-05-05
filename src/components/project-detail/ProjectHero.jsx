import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import ProjectSummaryCard from './ProjectSummaryCard'
import { fadeUp } from '../../utils/animations'

export default function ProjectHero({ content }) {
  return (
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
        <ProjectSummaryCard
          label={content.summaryCards.roles.label}
          value={content.summaryCards.roles.value}
        />

        <ProjectSummaryCard
          label={content.summaryCards.status.label}
          value={content.summaryCards.status.value}
        />

        <ProjectSummaryCard
          label={content.summaryCards.focus.label}
          value={content.summaryCards.focus.value}
        />

        <ProjectSummaryCard
          label={content.summaryCards.infrastructure.label}
          value={content.summaryCards.infrastructure.value}
        />
      </div>
    </motion.section>
  )
}