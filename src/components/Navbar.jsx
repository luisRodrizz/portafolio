import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const { language, setLanguage, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

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

    setMenuOpen(false)

    if (isHome) {
      doScroll()
    } else {
      navigate('/')
      setTimeout(doScroll, 120)
    }
  }

  const goToTopHome = () => {
    const doScrollTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    setMenuOpen(false)

    if (isHome) {
      doScrollTop()
    } else {
      navigate('/')
      setTimeout(doScrollTop, 120)
    }
  }

  const changeLanguage = (lang) => {
    setLanguage(lang)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-5">
        <div className="glass relative flex min-h-16 items-center justify-between rounded-full px-4 sm:px-5">
          <button
            type="button"
            onClick={goToTopHome}
            className="flex items-center gap-3 text-left"
          >
            <div className="pill-accent flex h-10 w-10 items-center justify-center rounded-full">
              <span className="mono text-[11px] font-semibold">LR</span>
            </div>

            <div className="leading-none">
              <p className="text-[15px] font-bold tracking-tight text-white">
                luis<span className="accent">.</span>dev
              </p>
            </div>
          </button>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={goToTopHome}
              className={[
                'rounded-full px-4 py-2 text-sm transition-all duration-200',
                isHome
                  ? 'pill-accent'
                  : 'text-gray-400 hover:bg-white/[0.04] hover:text-white',
              ].join(' ')}
            >
              {t.nav.home}
            </button>

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
                onClick={() => changeLanguage('es')}
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
                onClick={() => changeLanguage('en')}
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

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition hover:bg-white/[0.06] md:hidden"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span className="text-lg leading-none">
              {menuOpen ? '×' : '☰'}
            </span>
          </button>
        </div>

        {menuOpen && (
          <div className="glass mt-3 rounded-3xl border border-white/[0.06] px-4 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={goToTopHome}
                className={[
                  'rounded-2xl px-4 py-3 text-left text-sm transition-all duration-200',
                  isHome
                    ? 'pill-accent'
                    : 'text-gray-300 hover:bg-white/[0.04] hover:text-white',
                ].join(' ')}
              >
                {t.nav.home}
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('about')}
                className="rounded-2xl px-4 py-3 text-left text-sm text-gray-300 transition-all duration-200 hover:bg-white/[0.04] hover:text-white"
              >
                {t.nav.about}
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="rounded-2xl px-4 py-3 text-left text-sm text-gray-300 transition-all duration-200 hover:bg-white/[0.04] hover:text-white"
              >
                {t.nav.work}
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="rounded-2xl px-4 py-3 text-left text-sm text-gray-300 transition-all duration-200 hover:bg-white/[0.04] hover:text-white"
              >
                {t.nav.contact}
              </button>
            </div>

            <div className="mt-4 border-t border-white/[0.06] pt-4">
              <div className="mb-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#00F5A0]" />
                <span className="text-sm text-gray-200">{t.nav.availability}</span>
              </div>

              <div className="flex items-center justify-start rounded-full border border-white/10 bg-white/[0.03] p-1">
                <button
                  type="button"
                  onClick={() => changeLanguage('es')}
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
                  onClick={() => changeLanguage('en')}
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
        )}
      </nav>
    </header>
  )
}