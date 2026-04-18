const aboutItems = [
  {
    n: '1',
    text: (
      <>
        Tengo <strong>19 años</strong> y estoy estudiando Ingeniería de Software en{' '}
        <strong>SENATI</strong>, actualmente en 5to ciclo.
      </>
    ),
  },
  {
    n: '2',
    text: (
      <>
        Me apasiona la programación y quiero convertirme en un{' '}
        <strong>Full Stack Developer</strong> — domino tanto el frontend como el backend.
      </>
    ),
  },
  {
    n: '3',
    text: (
      <>
        Mi stack incluye <strong>React.js, Inertia.js, Laravel, PHP, Node.js</strong> y{' '}
        <strong>Python</strong>, con manejo de bases de datos usando{' '}
        <strong>Prisma</strong> y <strong>Eloquent</strong>.
      </>
    ),
  },
  {
    n: '4',
    text: (
      <>
        Ya tengo <strong>1 proyecto desplegado</strong> y busco oportunidades reales para
        seguir demostrando mi capacidad trabajando en empresas.
      </>
    ),
  },
  {
    n: '5',
    text: (
      <>
        Basado en <strong>Lima, Perú</strong> — disponible para trabajo remoto,
        prácticas o proyectos freelance.
      </>
    ),
  },
]

const skills = [
  { category: 'Frontend', items: ['React.js', 'Inertia.js', 'JavaScript'] },
  { category: 'Backend',  items: ['Laravel', 'PHP', 'Node.js', 'Python'] },
  { category: 'Base de datos', items: ['PostgreSQL', 'Prisma', 'Eloquent'] },
]

export default function About() {
  return (
    <section className="page-enter relative overflow-hidden pt-28 lg:pt-36 pb-24">

      {/* Orbe de fondo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-80px] top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.06),transparent_65%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-6 lg:px-10">

        {/* Label de sección */}
        <div className="mono mb-12 flex items-center gap-4 text-[11px] uppercase tracking-[0.28em] accent">
          <span>01 — About me</span>
          <span className="h-px flex-1 bg-white/[0.07]" />
        </div>

        {/* Grid principal */}
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">

          {/* ── Columna izquierda: heading + skills ── */}
          <div>
            <h2 className="display-title text-[clamp(48px,6vw,88px)] leading-[0.9] text-white mb-8">
              Un dev de<br />
              <span className="accent-glow">Lima.</span>
            </h2>

            <p className="section-copy max-w-[480px] text-[1.05rem] mb-12">
              Estudiante con hambre de crecer. Aprendo rápido, construyo en serio
              y busco el entorno donde pueda dar lo mejor de mí.
            </p>

            {/* Skills por categoría */}
            <div className="flex flex-col gap-6">
              {skills.map(({ category, items }) => (
                <div key={category}>
                  <p className="mono mb-3 text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="mono rounded-full pill-accent px-3 py-1 text-[12px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Columna derecha: lista numerada ── */}
          <div className="flex flex-col divide-y divide-white/[0.06]">
            {aboutItems.map(({ n, text }) => (
              <div key={n} className="flex gap-6 py-7 group">
                <span className="mono pt-[3px] text-[12px] text-[#00f5a0] min-w-[18px] select-none">
                  {n}
                </span>
                <p className="text-[1.08rem] leading-[1.85] text-[#c7d2dc] [&_strong]:text-white [&_strong]:font-semibold lg:text-[1.14rem]">
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}