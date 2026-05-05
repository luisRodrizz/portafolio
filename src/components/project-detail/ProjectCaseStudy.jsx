// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { GitBranch, Layers3, Lightbulb } from 'lucide-react'

import { fadeUp, staggerContainer } from '../../utils/animations'

const icons = [GitBranch, Layers3, Lightbulb]

export default function ProjectCaseStudy({ data }) {
  return (
    <motion.section variants={fadeUp} className="mt-14 sm:mt-16 lg:mt-20">
      <div className="mb-8 max-w-[760px] sm:mb-10">
        <h2 className="text-[clamp(24px,6vw,48px)] font-semibold tracking-[-0.03em] text-white">
          {data.title}
        </h2>

        <p className="mt-4 text-[0.98rem] leading-[1.8] text-[#b8c4cf] sm:text-[1rem] sm:leading-[1.85]">
          {data.description}
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        className="grid gap-5 lg:grid-cols-3"
      >
        {data.items.map((item, index) => {
          const Icon = icons[index] || Lightbulb

          return (
            <motion.article
              key={item.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-[24px] border border-white/[0.06] bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#00f5a0]/20 hover:bg-white/[0.035] sm:rounded-[28px] sm:p-6"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute right-[-80px] top-[-80px] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.12),transparent_68%)] blur-2xl" />
              </div>

              <div className="relative z-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00f5a0]/20 bg-[#00f5a0]/[0.06] text-[#00f5a0]">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="mono mb-3 text-[10px] uppercase tracking-[0.22em] text-[#00f5a0]">
                  {item.label}
                </p>

                <h3 className="text-[1.15rem] font-semibold leading-[1.25] tracking-[-0.03em] text-white sm:text-[1.25rem]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[0.95rem] leading-[1.8] text-[#c7d2dc] sm:text-[0.98rem] sm:leading-[1.85]">
                  {item.text}
                </p>
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </motion.section>
  )
}