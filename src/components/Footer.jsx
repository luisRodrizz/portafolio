import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'

export default function Footer() {
  const { t } = useLanguage()
  const footer = t.footer
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const scrollToSection = (sectionId) => {
    const doScroll = () => {
      const el = document.getElementById(sectionId)
      if (!el) return

      const footerOffset = 100
      const top = el.getBoundingClientRect().top + window.pageYOffset - footerOffset

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
    <footer className="relative overflow-hidden border-t border-white/[0.06]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[180px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.04),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-6 py-10 lg:px-10 lg:py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[420px]">
            <p className="mono text-[11px] uppercase tracking-[0.24em] text-[#7a8799]">
              luis<span className="accent">.</span>dev
            </p>

            <p className="mt-4 text-[0.98rem] leading-[1.8] text-[#b8c4cf]">
              {footer.brandDescription}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="mono mb-3 text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
                {footer.navigation}
              </p>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => scrollToSection('about')}
                  className="text-left text-sm text-[#c7d2dc] transition hover:text-white"
                >
                  {footer.about}
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('projects')}
                  className="text-left text-sm text-[#c7d2dc] transition hover:text-white"
                >
                  {footer.projects}
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-sm text-[#c7d2dc] transition hover:text-white"
                >
                  {footer.contact}
                </button>
              </div>
            </div>

            <div>
              <p className="mono mb-3 text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
                {footer.projectsTitle}
              </p>
              <div className="flex flex-col gap-2">
                <Link to="/projects" className="text-sm text-[#c7d2dc] transition hover:text-white">
                  {footer.viewAll}
                </Link>

                <Link
                  to="/projects/lumina-medic"
                  className="text-sm text-[#c7d2dc] transition hover:text-white"
                >
                  Lúmina Medic
                </Link>
              </div>
            </div>

            <div>
              <p className="mono mb-3 text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
                {footer.social}
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://github.com/luisRodrizz"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#c7d2dc] transition hover:text-white"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/luis-rodriguez-b378bb334/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#c7d2dc] transition hover:text-white"
                >
                  LinkedIn
                </a>

                <a
                  href={`mailto:${footer.emailAddress}`}
                  className="text-sm text-[#c7d2dc] transition hover:text-white"
                >
                  {footer.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono text-[11px] text-[#7a8799]">
            © {new Date().getFullYear()} Luis Rodríguez · {footer.location}
          </p>

          <p className="mono text-[11px] uppercase tracking-[0.18em] text-[#7a8799]">
            {footer.madeBy}
          </p>
        </div>
      </div>
    </footer>
  )
}