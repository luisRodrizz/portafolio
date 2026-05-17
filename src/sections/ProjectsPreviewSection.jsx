import { Link } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import ProjectMiniCard from '../components/ProjectMiniCard'
import FeaturedProjectCard from '../components/FeaturedProjectCard'
import luminaDashboard from '../assets/proyect/luminaMedic/dashboard.png'
import { useLanguage } from '../context/useLanguage'
import { fadeUp, staggerContainer } from '../utils/animations'

export default function ProjectsPreviewSection() {
  const { t } = useLanguage()
  const homeProjects = t.home.projects
  const featuredProject = homeProjects.featured
  const secondaryProjects = homeProjects.secondary

  return (
    <motion.section
      id="projects"
      className="relative scroll-mt-28 pt-16 pb-18 lg:scroll-mt-32 lg:pt-20 lg:pb-22"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <SectionHeader
          className="tracking-[0.24em] sm:tracking-[0.32em]"
          lineClassName="bg-gradient-to-r from-white/[0.10] to-transparent"
        >
          {homeProjects.eyebrow}
        </SectionHeader>

        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <motion.div variants={fadeUp} className="max-w-[620px]">
            <h2 className="display-title text-[clamp(42px,12vw,112px)] leading-[0.92] text-white lg:text-[clamp(58px,7vw,112px)] lg:leading-[0.88]">
              {homeProjects.titleFirst}
              <br />
              <span className="accent-glow">{homeProjects.titleAccent}</span>
            </h2>

            <p className="mt-6 text-[1rem] leading-[1.8] text-[#b8c4cf] sm:mt-8 sm:text-[1.05rem] sm:leading-[1.85]">
              {homeProjects.description}
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link
              to="/projects"
              className="secondary-btn inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-[14px] sm:w-auto sm:px-7 sm:text-[15px]"
            >
              {homeProjects.viewAll} <span>→</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <FeaturedProjectCard project={featuredProject} image={luminaDashboard} />

          <motion.div variants={staggerContainer} className="flex flex-col gap-6">
            {secondaryProjects.map((project) => (
                <ProjectMiniCard key={project.id} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}