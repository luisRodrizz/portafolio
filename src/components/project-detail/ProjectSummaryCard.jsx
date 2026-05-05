export default function ProjectSummaryCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-5">
      <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
        {label}
      </p>

      <p className="mt-3 text-sm leading-[1.7] text-[#c7d2dc]">
        {value}
      </p>
    </div>
  )
}