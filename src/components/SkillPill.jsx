export default function SkillPill({ children, variant = 'default' }) {
  const variants = {
    default:
      'mono rounded-full pill-accent px-3 py-1 text-[11px] sm:text-[12px]',
    stack:
      'mono rounded-full border border-[#00f5a0]/20 bg-[#00f5a0]/[0.05] px-3 py-1.5 text-[11px] tracking-[0.04em] text-[#9fffd7] sm:px-3.5 sm:text-[12px]',
    compact:
      'mono rounded-full border border-[#00f5a0]/20 bg-[#00f5a0]/[0.05] px-3 py-1 text-[11px] text-[#9fffd7] sm:text-[12px]',
    neutral:
      'mono rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[11px] text-[#c7d2dc] sm:px-3.5 sm:text-[12px]',
  }

  return <span className={variants[variant]}>{children}</span>
}