import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import SkillPill from './SkillPill'
import { fadeUp } from '../utils/animations'

export default function FeaturedProjectCard({ project, image }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group rounded-[26px] border border-white/[0.06] bg-white/[0.02] p-4 transition duration-300 hover:border-white/[0.10] hover:bg-white/[0.03] sm:rounded-[30px] sm:p-6 lg:rounded-[32px] lg:p-7"
    >
      <div className="mb-5 flex min-h-[220px] items-center justify-center overflow-hidden rounded-[20px] border border-white/[0.05] bg-[#05080b] p-2 sm:mb-6 sm:min-h-[280px] sm:rounded-[22px] sm:p-3 lg:min-h-[320px] lg:rounded-[24px]">
        <img
          src={image}
          alt={project.imageAlt}
          className="max-h-[320px] w-full rounded-[14px] object-contain transition duration-500 group-hover:scale-[1.01] sm:max-h-[380px] sm:rounded-[16px] lg:max-h-[420px] lg:rounded-[18px]"
        />
      </div>

      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
          {project.label}
        </p>

        <span className="mono text-[10px] uppercase tracking-[0.18em] text-[#00f5a0]">
          {project.status}
        </span>
      </div>

      <h3 className="text-[clamp(24px,6vw,42px)] font-semibold tracking-[-0.03em] text-white">
        {project.title}
      </h3>

      <p className="mt-4 max-w-[620px] text-[0.98rem] leading-[1.75] text-[#b8c4cf] sm:text-[1rem] sm:leading-[1.8]">
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
            {project.cards.modules}
          </p>
          <p className="mt-2 text-sm leading-[1.7] text-[#c7d2dc]">
            {project.cards.modulesValue}
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
    </motion.article>
  )
}