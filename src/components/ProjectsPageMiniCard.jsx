// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Code2, Layers, Sparkles } from 'lucide-react'

import SkillPill from './SkillPill'
import { fadeUp } from '../utils/animations'

export default function ProjectsPageMiniCard({ project }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative overflow-hidden rounded-[24px] border border-white/[0.06] bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#00f5a0]/20 hover:bg-white/[0.035] sm:rounded-[28px] sm:p-6"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute right-[-80px] top-[-80px] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.12),transparent_68%)] blur-2xl" />
      </div>

      <div className="relative mb-5 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[18px] border border-white/[0.05] bg-[#05080b] sm:rounded-[20px]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,160,0.08),transparent_62%)]" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00f5a0]/20 bg-[#00f5a0]/[0.06] text-[#00f5a0]">
            <Code2 className="h-5 w-5" />
          </div>

          <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
            {project.status}
          </p>
        </div>

        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00f5a0]" />

          <span className="mono text-[9px] uppercase tracking-[0.16em] text-[#9fffd7]">
            {project.type}
          </span>
        </div>
      </div>

      <div className="relative z-10">
        <div className="mb-3 flex items-center gap-2">
          <Layers className="h-4 w-4 text-[#00f5a0]" />

          <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
            {project.type}
          </p>
        </div>

        <h3 className="text-[1.35rem] font-semibold text-white sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-3 text-[0.98rem] leading-[1.75] text-[#b8c4cf]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item, stackIndex) => (
            <SkillPill key={`${item}-${stackIndex}`} variant="compact">
              {item}
            </SkillPill>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 border-t border-white/[0.06] pt-4 text-[#7a8799]">
          <Sparkles className="h-4 w-4 text-[#00f5a0]" />

          <p className="mono text-[10px] uppercase tracking-[0.18em]">
            {project.status}
          </p>
        </div>
      </div>
    </motion.article>
  )
}