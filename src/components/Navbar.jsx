import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const scrollToSection = (sectionId) => {
    const doScroll = () => {
      const el = document.getElementById(sectionId)
      if (!el) return

      const navbarOffset = 100
      const top =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        navbarOffset

      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    }

    if (isHome) {
      doScroll()
    } else {
      navigate('/')
      setTimeout(doScroll, 120)
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 pt-5">
        <div className="glass flex h-16 items-center justify-between rounded-full px-5">
          <Link to="/" className="flex items-center gap-3">
            <div className="pill-accent flex h-10 w-10 items-center justify-center rounded-full">
              <span className="mono text-[11px] font-semibold">LR</span>
            </div>

            <div className="leading-none">
              <p className="text-[15px] font-bold tracking-tight text-white">
                luis<span className="accent">.</span>dev
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                [
                  'rounded-full px-4 py-2 text-sm transition-all duration-200',
                  isActive
                    ? 'pill-accent'
                    : 'text-gray-400 hover:bg-white/[0.04] hover:text-white',
                ].join(' ')
              }
            >
              Inicio
            </NavLink>

            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="rounded-full px-4 py-2 text-sm text-gray-400 transition-all duration-200 hover:bg-white/[0.04] hover:text-white"
            >
              Sobre mí
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="rounded-full px-4 py-2 text-sm text-gray-400 transition-all duration-200 hover:bg-white/[0.04] hover:text-white"
            >
              Trabajo
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="rounded-full px-4 py-2 text-sm text-gray-400 transition-all duration-200 hover:bg-white/[0.04] hover:text-white"
            >
              Contacto
            </button>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 md:flex">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#00F5A0]" />
            <span className="text-sm text-gray-200">Disponible para trabajar</span>
          </div>
        </div>
      </nav>
    </header>
  )
}