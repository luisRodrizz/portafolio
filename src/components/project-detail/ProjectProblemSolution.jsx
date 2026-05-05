// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import { fadeUp } from '../../utils/animations'

export default function ProjectProblemSolution({ data }) {
  return (
    <motion.section
      variants={fadeUp}
      className="mt-14 grid gap-5 sm:mt-16 sm:gap-8 lg:mt-20 lg:grid-cols-2"
    >
      <div className="rounded-[24px] border border-white/[0.06] bg-white/[0.02] p-5 sm:rounded-[28px] sm:p-7">
        <p className="mono mb-4 text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
          {data.problem.label}
        </p>

        <p className="text-[0.98rem] leading-[1.8] text-[#c7d2dc] sm:text-[1rem] sm:leading-[1.85]">
          {data.problem.text}
        </p>
      </div>

      <div className="rounded-[24px] border border-white/[0.06] bg-white/[0.02] p-5 sm:rounded-[28px] sm:p-7">
        <p className="mono mb-4 text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
          {data.solution.label}
        </p>

        <p className="text-[0.98rem] leading-[1.8] text-[#c7d2dc] sm:text-[1rem] sm:leading-[1.85]">
          {data.solution.text}
        </p>
      </div>
    </motion.section>
  )
}