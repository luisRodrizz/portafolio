import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import SkillPill from './SkillPill'
import { fadeUp } from '../utils/animations'

export default function ProjectsPageFeatured({ project, image }) {
  return (
    <motion.section variants={fadeUp} className="mt-14 sm:mt-16 lg:mt-20">
      <article className="group overflow-hidden rounded-[26px] border border-white/[0.06] bg-white/[0.02] sm:rounded-[32px] lg:rounded-[36px]">
        <div className="border-b border-white/[0.05] p-3 sm:p-5 lg:p-6">
          <div className="overflow-hidden rounded-[18px] border border-white/[0.05] bg-[#05080b] p-2 sm:rounded-[22px] sm:p-3 lg:rounded-[24px]">
            <img
              src={image}
              alt={project.imageAlt}
              className="w-full rounded-[14px] object-contain transition duration-500 group-hover:scale-[1.01] sm:rounded-[16px] lg:rounded-[18px]"
            />
          </div>
        </div>

        <div className="p-5 sm:p-7 lg:p-10">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
            <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
              {project.type}
            </p>

            <span className="mono text-[10px] uppercase tracking-[0.18em] text-[#00f5a0]">
              {project.status}
            </span>
          </div>

          <h2 className="text-[clamp(24px,6vw,54px)] font-semibold tracking-[-0.03em] text-white">
            {project.title}
          </h2>

          <p className="mt-4 max-w-[760px] text-[0.98rem] leading-[1.8] text-[#b8c4cf] sm:mt-5 sm:text-[1.02rem] sm:leading-[1.85]">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
            {project.stack.map((item, stackIndex) => (
              <SkillPill key={`${item}-${stackIndex}`} variant="stack">
                {item}
              </SkillPill>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                {project.cards.roles}
              </p>
              <p className="mt-2 text-sm leading-[1.7] text-[#c7d2dc]">
                {project.cards.rolesValue}
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                {project.cards.operation}
              </p>
              <p className="mt-2 text-sm leading-[1.7] text-[#c7d2dc]">
                {project.cards.operationValue}
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                {project.cards.focus}
              </p>
              <p className="mt-2 text-sm leading-[1.7] text-[#c7d2dc]">
                {project.cards.focusValue}
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
              {project.demo} <span>↗</span>
            </a>

            <Link
              to="/projects/lumina-medic"
              className="secondary-btn inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] sm:w-auto"
            >
              {project.detail} <span>→</span>
            </Link>
          </div>
        </div>
      </article>
    </motion.section>
  )
}