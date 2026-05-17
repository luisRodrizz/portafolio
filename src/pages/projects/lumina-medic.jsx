// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/animations'
import Footer from '../../components/Footer'
import ProjectFeatures from '../../components/project-detail/ProjectFeatures'
import ProjectProblemSolution from '../../components/project-detail/ProjectProblemSolution'
import ProjectGallery from '../../components/project-detail/ProjectGallery'
import ProjectArchitecture from '../../components/project-detail/ProjectArchitecture'
import ProjectHero from '../../components/project-detail/ProjectHero'
import ProjectCaseStudy from '../../components/project-detail/ProjectCaseStudy'
import landingImg from '../../assets/proyect/luminaMedic/landing.png'
import loginImg from '../../assets/proyect/luminaMedic/login.png'
import dashboardImg from '../../assets/proyect/luminaMedic/dashboard.png'
import doctoresImg from '../../assets/proyect/luminaMedic/doctor.png'
import citasImg from '../../assets/proyect/luminaMedic/citas.png'
import perfilImg from '../../assets/proyect/luminaMedic/perfil.png'
import { useLanguage } from '../../context/useLanguage'

export default function LuminaMedic() {
  const { t } = useLanguage()
  const content = t.luminaMedic

  const gallery = [
    { ...content.gallery.items[0], image: landingImg },
    { ...content.gallery.items[1], image: loginImg },
    { ...content.gallery.items[2], image: dashboardImg },
    { ...content.gallery.items[3], image: doctoresImg },
    { ...content.gallery.items[4], image: citasImg },
    { ...content.gallery.items[5], image: perfilImg },
  ]

  return (
    <>
      <motion.main
        className="relative min-h-screen overflow-hidden pt-24 pb-20 sm:pt-28 lg:pt-32 lg:pb-24"
        initial="hidden"
        animate="show"
        variants={staggerContainer}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-12 top-0 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.08),transparent_62%)] blur-3xl sm:-left-20 sm:h-[520px] sm:w-[520px]" />
          <div className="absolute right-[-70px] top-[160px] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.05),transparent_65%)] blur-3xl sm:right-[-100px] sm:top-[180px] sm:h-[420px] sm:w-[420px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={fadeIn}
            className="mono mb-8 flex items-center gap-4 text-[10px] uppercase tracking-[0.24em] accent sm:mb-10 sm:gap-5 sm:text-[11px] sm:tracking-[0.32em]"
          >
            <span className="whitespace-nowrap">{content.eyebrow}</span>
            <span className="h-px flex-1 bg-gradient-to-r from-white/[0.10] to-transparent" />
          </motion.div>

          <ProjectHero content={content} />
          <ProjectGallery content={content} items={gallery} />
          <ProjectProblemSolution data={content.problemSolution} />
          <ProjectCaseStudy data={content.caseStudy} />
          <ProjectFeatures data={content.features} />
          <ProjectArchitecture data={content.architecture} />
          
        </div>
      </motion.main>

      <Footer />
    </>
  )
}