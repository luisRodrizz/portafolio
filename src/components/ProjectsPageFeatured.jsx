import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ExternalLink,
  Layers3,
  ShieldCheck,
  Stethoscope,
  Users,
} from 'lucide-react'

import SkillPill from './SkillPill'
import { fadeUp } from '../utils/animations'

export default function ProjectsPageFeatured({ project, image }) {
  const infoCards = [
    {
      icon: Users,
      label: project.cards.roles,
      value: project.cards.rolesValue,
    },
    {
      icon: ShieldCheck,
      label: project.cards.operation,
      value: project.cards.operationValue,
    },
    {
      icon: Layers3,
      label: project.cards.focus,
      value: project.cards.focusValue,
    },
  ]

  return (
    <motion.section variants={fadeUp} className="mt-14 sm:mt-16 lg:mt-20">
      <article className="group relative overflow-hidden rounded-[26px] border border-white/[0.06] bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-[#00f5a0]/20 hover:bg-white/[0.035] sm:rounded-[32px] lg:rounded-[36px]">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
          <div className="absolute right-[-140px] top-[-140px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.12),transparent_68%)] blur-3xl" />
        </div>

        <div className="relative border-b border-white/[0.05] p-3 sm:p-5 lg:p-6">
          <div className="relative overflow-hidden rounded-[18px] border border-white/[0.05] bg-[#05080b] p-2 sm:rounded-[22px] sm:p-3 lg:rounded-[24px]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,245,160,0.08),transparent_58%)] opacity-80" />

            <img
              src={image}
              alt={project.imageAlt}
              className="relative z-10 w-full rounded-[14px] object-contain transition duration-500 group-hover:scale-[1.01] sm:rounded-[16px] lg:rounded-[18px]"
            />

            <div className="absolute left-4 top-4 z-20 flex items-center gap-1.5 rounded-full border border-[#00f5a0]/20 bg-[#00f5a0]/[0.07] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00f5a0]" />

              <span className="mono text-[9px] uppercase tracking-[0.16em] text-[#9fffd7]">
                {project.status}
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-10 p-5 sm:p-7 lg:p-10">
          <div className="mb-4 flex items-center gap-2">
            <Stethoscope className="h-4 w-4 text-[#00f5a0]" />

            <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
              {project.type}
            </p>
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
            {infoCards.map((card) => {
              const CardIcon = card.icon

              return (
                <div
                  key={card.label}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition duration-300 group-hover:border-white/[0.09]"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-[#00f5a0]/20 bg-[#00f5a0]/[0.06] text-[#00f5a0]">
                    <CardIcon className="h-4 w-4" />
                  </div>

                  <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
                    {card.label}
                  </p>

                  <p className="mt-2 text-sm leading-[1.7] text-[#c7d2dc]">
                    {card.value}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://sistema-clinico-cyan.vercel.app/login"
              target="_blank"
              rel="noreferrer"
              className="primary-btn inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] sm:w-auto"
            >
              {project.demo}
              <ExternalLink className="h-4 w-4" />
            </a>

            <Link
              to="/projects/lumina-medic"
              className="secondary-btn inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] sm:w-auto"
            >
              {project.detail}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    </motion.section>
  )
}