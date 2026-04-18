import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.08 1.84 2.82 1.31 3.5 1 .11-.78.42-1.31.76-1.62-2.67-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.25 2.86.13 3.16.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.61-5.48 5.91.43.37.81 1.1.81 2.23v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.5 4.8 5.76V21h-4v-5.86c0-1.4-.03-3.2-2.02-3.2-2.02 0-2.33 1.52-2.33 3.1V21h-4V9Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

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
        <div className="absolute left-1/2 top-0 h-[140px] w-[360px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.04),transparent_70%)] blur-3xl sm:h-[170px] sm:w-[460px] lg:h-[180px] lg:w-[520px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="mx-auto max-w-[460px] text-center lg:mx-0 lg:text-left">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="mx-auto inline-flex items-center gap-3 lg:mx-0"
            >
              <div className="pill-accent flex h-10 w-10 items-center justify-center rounded-full">
                <span className="mono text-[11px] font-semibold">LR</span>
              </div>
              <p className="mono text-[11px] uppercase tracking-[0.24em] text-[#7a8799]">
                luis<span className="accent">.</span>dev
              </p>
            </button>

            <p className="mt-4 text-[0.95rem] leading-[1.75] text-[#b8c4cf]">
              {footer.brandDescription}
            </p>

            <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
              <a
                href="https://github.com/luisRodrizz"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#c7d2dc] transition hover:border-white/20 hover:text-white"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/luis-rodriguez-b378bb334/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#c7d2dc] transition hover:border-white/20 hover:text-white"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>

              <a
                href={`mailto:${footer.emailAddress}`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#c7d2dc] transition hover:border-white/20 hover:text-white"
                aria-label={footer.email}
              >
                <MailIcon />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-8 text-center sm:gap-x-12 lg:text-left">
            <div>
              <p className="mono mb-3 text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
                {footer.navigation}
              </p>
              <div className="flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => scrollToSection('about')}
                  className="text-sm text-[#c7d2dc] transition hover:text-white lg:text-left"
                >
                  {footer.about}
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('projects')}
                  className="text-sm text-[#c7d2dc] transition hover:text-white lg:text-left"
                >
                  {footer.projects}
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-[#c7d2dc] transition hover:text-white lg:text-left"
                >
                  {footer.contact}
                </button>
              </div>
            </div>

            <div>
              <p className="mono mb-3 text-[10px] uppercase tracking-[0.22em] text-[#7a8799]">
                {footer.projectsTitle}
              </p>
              <div className="flex flex-col gap-2.5">
                <Link
                  to="/projects"
                  className="text-sm text-[#c7d2dc] transition hover:text-white"
                >
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
          </div>
        </div>

        <div className="mt-8 border-t border-white/[0.06] pt-5 text-center sm:mt-10 sm:pt-6 lg:flex lg:items-center lg:justify-between lg:text-left">
          <p className="mono text-[10px] text-[#7a8799] sm:text-[11px]">
            © {new Date().getFullYear()} Luis Rodríguez · {footer.location}
          </p>

          <p className="mono mt-3 text-[10px] uppercase tracking-[0.16em] text-[#7a8799] sm:text-[11px] sm:tracking-[0.18em] lg:mt-0">
            {footer.madeBy}
          </p>
        </div>
      </div>
    </footer>
  )
}