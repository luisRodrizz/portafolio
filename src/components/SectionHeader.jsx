// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import { fadeIn } from '../utils/animations'

export default function SectionHeader({
  children,
  className = '',
  lineClassName = 'bg-white/[0.07]',
}) {
  return (
    <motion.div
      variants={fadeIn}
      className={[
        'mono mb-10 flex items-center gap-4 text-[10px] uppercase tracking-[0.22em] accent sm:mb-12 sm:gap-5 sm:text-[11px] sm:tracking-[0.28em] lg:mb-14',
        className,
      ].join(' ')}
    >
      <span className="whitespace-nowrap">{children}</span>
      <span className={['h-px flex-1', lineClassName].join(' ')} />
    </motion.div>
  )
}