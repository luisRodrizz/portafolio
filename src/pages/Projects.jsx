// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import Footer from '../components/Footer'
import SectionHeader from '../components/SectionHeader'
import SkillPill from '../components/SkillPill'
import ProjectsPageFeatured from '../components/ProjectsPageFeatured'
import ProjectsPageMiniCard from '../components/ProjectsPageMiniCard'
import luminaDashboard from '../assets/proyect/luminaMedic/dashboard.png'
import { useLanguage } from '../context/useLanguage'
import { fadeUp, staggerContainer } from '../utils/animations'

export default function Projects() {
  const { t } = useLanguage()
  const page = t.projectsPage
  const featured = page.featured
  const rest = page.secondary

  return (
    <>
      <motion.main
        className="relative min-h-screen overflow-hidden pt-24 pb-20 sm:pt-28 lg:pt-32 lg:pb-24"
        initial="hidden"
        animate="show"
        variants={staggerContainer}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-90px] top-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.08),transparent_62%)] blur-3xl sm:left-[-120px] sm:h-[520px] sm:w-[520px]" />
          <div className="absolute right-[-80px] top-[160px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.05),transparent_65%)] blur-3xl sm:right-[-100px] sm:top-[180px] sm:h-[420px] sm:w-[420px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
          <SectionHeader
            className="mb-8 tracking-[0.24em] sm:mb-10 sm:tracking-[0.32em] lg:mb-10"
            lineClassName="bg-gradient-to-r from-white/[0.10] to-transparent"
          >
            {page.eyebrow}
          </SectionHeader>

          <motion.div variants={fadeUp} className="max-w-[820px]">
            <h1 className="display-title text-[clamp(42px,12vw,108px)] leading-[0.92] text-white sm:text-[clamp(52px,10vw,108px)] lg:text-[clamp(54px,7vw,108px)] lg:leading-[0.9]">
              {page.titleFirst}
              <br />
              <span className="accent-glow">{page.titleAccent}</span>
            </h1>

            <p className="mt-6 max-w-[620px] text-[1rem] leading-[1.8] text-[#b8c4cf] sm:mt-8 sm:text-[1.08rem] sm:leading-[1.9]">
              {page.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
              {page.tags.map((item, index) => (
                <SkillPill key={`${item}-${index}`} variant="neutral">
                  {item}
                </SkillPill>
              ))}
            </div>
          </motion.div>

          <ProjectsPageFeatured project={featured} image={luminaDashboard} />

          <motion.section variants={fadeUp} className="mt-14 sm:mt-16 lg:mt-20">
            <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <h2 className="text-[clamp(24px,6vw,44px)] font-semibold tracking-[-0.03em] text-white">
                {page.moreProjectsTitle}
              </h2>
              <p className="max-w-[420px] text-sm leading-[1.7] text-[#7a8799] sm:text-right">
                {page.moreProjectsText}
              </p>
            </div>

            <motion.div variants={staggerContainer} className="grid gap-5 sm:gap-6 md:grid-cols-2">
              {rest.map((project) => (
                <ProjectsPageMiniCard key={project.id} project={project} />
              ))}
            </motion.div>
          </motion.section>
        </div>
      </motion.main>

      <Footer />
    </>
  )
}