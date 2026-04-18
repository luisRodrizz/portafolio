import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const { language, setLanguage, t } = useLanguage()

  const scrollToSection = (sectionId) => {
    const doScroll = () => {
      const el = document.getElementById(sectionId)
      if (!el) return

      const navbarOffset = 100
      const top = el.getBoundingClientRect().top + window.pageYOffset - navbarOffset

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
              {t.nav.home}
            </NavLink>

            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="rounded-full px-4 py-2 text-sm text-gray-400 transition-all duration-200 hover:bg-white/[0.04] hover:text-white"
            >
              {t.nav.about}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="rounded-full px-4 py-2 text-sm text-gray-400 transition-all duration-200 hover:bg-white/[0.04] hover:text-white"
            >
              {t.nav.work}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="rounded-full px-4 py-2 text-sm text-gray-400 transition-all duration-200 hover:bg-white/[0.04] hover:text-white"
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 lg:flex">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#00F5A0]" />
              <span className="text-sm text-gray-200">{t.nav.availability}</span>
            </div>

            <div className="flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1">
              <button
                type="button"
                onClick={() => setLanguage('es')}
                className={
                  language === 'es'
                    ? 'rounded-full bg-[#00f5a0]/10 px-3 py-1.5 text-xs font-medium text-[#00f5a0]'
                    : 'rounded-full px-3 py-1.5 text-xs font-medium text-gray-400 transition hover:text-white'
                }
              >
                ES
              </button>

              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={
                  language === 'en'
                    ? 'rounded-full bg-[#00f5a0]/10 px-3 py-1.5 text-xs font-medium text-[#00f5a0]'
                    : 'rounded-full px-3 py-1.5 text-xs font-medium text-gray-400 transition hover:text-white'
                }
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}