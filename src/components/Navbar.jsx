import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const { language, setLanguage, t } = useLanguage()

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'projects', label: t.nav.work },
    { id: 'education', label: t.nav.education },
    { id: 'contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 24)

      if (!isHome) {
        setActiveSection('')
        return
      }

      if (scrollY < 320) {
        setActiveSection('home')
        return
      }

      const sectionIds = ['about', 'projects', 'education', 'contact']
      const current = sectionIds.findLast((sectionId) => {
        const el = document.getElementById(sectionId)
        if (!el) return false

        return el.offsetTop - 160 <= scrollY
      })

      setActiveSection(current || 'home')
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  const scrollToSection = (sectionId) => {
    const doScroll = () => {
      const el = document.getElementById(sectionId)
      if (!el) return

      const navbarOffset = 40
      const top =
        el.getBoundingClientRect().top + window.pageYOffset - navbarOffset

      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    }

    setMenuOpen(false)
    setActiveSection(sectionId)

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
    setActiveSection('home')

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

  const getDesktopNavClass = (sectionId) => {
    const isActive =
      sectionId === 'home'
        ? isHome && activeSection === 'home'
        : isHome && activeSection === sectionId

    return [
      'relative rounded-full px-4 py-2 text-sm transition-all duration-300',
      isActive
        ? 'bg-[#00f5a0]/10 text-[#00f5a0] shadow-[0_0_24px_rgba(0,245,160,0.08)]'
        : 'text-gray-400 hover:bg-white/[0.04] hover:text-white',
    ].join(' ')
  }

  const getMobileNavClass = (sectionId) => {
    const isActive =
      sectionId === 'home'
        ? isHome && activeSection === 'home'
        : isHome && activeSection === sectionId

    return [
      'rounded-2xl px-4 py-3 text-left text-sm transition-all duration-300',
      isActive
        ? 'bg-[#00f5a0]/10 text-[#00f5a0]'
        : 'text-gray-300 hover:bg-white/[0.04] hover:text-white',
    ].join(' ')
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={[
          'mx-auto max-w-7xl px-4 transition-all duration-300 sm:px-6',
          scrolled ? 'pt-3 sm:pt-3' : 'pt-4 sm:pt-5',
        ].join(' ')}
      >
        <div
          className={[
            'relative flex items-center justify-between rounded-full border backdrop-blur-2xl transition-all duration-300',
            scrolled
              ? 'min-h-14 border-white/[0.09] bg-[#05070a]/80 px-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)] sm:px-5'
              : 'min-h-16 border-white/[0.08] bg-white/[0.025] px-4 sm:px-5',
          ].join(' ')}
        >
          <button
            type="button"
            onClick={goToTopHome}
            className="group flex items-center gap-3 text-left"
          >
            <div
              className={[
                'pill-accent flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-105',
                scrolled ? 'h-9 w-9' : 'h-10 w-10',
              ].join(' ')}
            >
              <span className="mono text-[11px] font-semibold">LR</span>
            </div>

            <div className="leading-none">
              <p className="text-[15px] font-bold tracking-tight text-white">
                luis<span className="accent">.</span>dev
              </p>
            </div>
          </button>

          <div className="hidden items-center gap-1.5 md:flex">
            <button
              type="button"
              onClick={goToTopHome}
              className={getDesktopNavClass('home')}
            >
              {t.nav.home}
            </button>

            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={getDesktopNavClass(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div
              className={[
                'hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] transition-all duration-300 lg:flex',
                scrolled ? 'px-3 py-1.5' : 'px-4 py-2',
              ].join(' ')}
            >
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#00F5A0]" />
              <span className="text-sm text-gray-200">
                {t.nav.availability}
              </span>
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
                className={getMobileNavClass('home')}
              >
                {t.nav.home}
              </button>

              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={getMobileNavClass(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-4 border-t border-white/[0.06] pt-4">
              <div className="mb-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#00F5A0]" />
                <span className="text-sm text-gray-200">
                  {t.nav.availability}
                </span>
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