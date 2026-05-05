// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import { fadeUp, staggerContainer } from '../../utils/animations'

export default function ProjectFeatures({ data }) {
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
        className="divide-y divide-white/[0.06] border-y border-white/[0.06]"
      >
        {data.items.map((item) => (
          <motion.div
            key={item.n}
            variants={fadeUp}
            className="grid gap-3 py-5 sm:gap-4 sm:py-6 md:grid-cols-[80px_1fr] md:gap-8 md:py-8"
          >
            <div className="mono text-[11px] tracking-[0.16em] text-[#00f5a0] sm:text-[12px] sm:tracking-[0.18em]">
              {item.n}
            </div>

            <div>
              <h3 className="text-[1.02rem] font-semibold text-white sm:text-[1.15rem]">
                {item.title}
              </h3>

              <p className="mt-3 max-w-[860px] text-[0.95rem] leading-[1.8] text-[#c7d2dc] sm:text-[0.98rem] sm:leading-[1.85]">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}