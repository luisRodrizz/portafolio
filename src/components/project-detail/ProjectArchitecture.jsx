// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import { fadeUp } from '../../utils/animations'

export default function ProjectArchitecture({ data }) {
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

      <div className="overflow-hidden rounded-[24px] border border-white/[0.06] bg-white/[0.02] sm:rounded-[28px]">
        <div className="grid grid-cols-1 divide-y divide-white/[0.06] md:grid-cols-[220px_1fr] md:divide-x md:divide-y-0">
          {data.rows.map((row) => (
            <div key={row.label} className="contents">
              <div className="border-b border-white/[0.06] px-5 py-4 md:border-b-0 md:px-7 md:py-6">
                <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
                  {row.label}
                </p>
              </div>

              <div className="px-5 py-4 md:px-7 md:py-6">
                <p className="text-[0.95rem] leading-[1.8] text-[#c7d2dc] sm:text-[0.98rem] sm:leading-[1.85]">
                  {row.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}