import Footer from '../components/Footer'
import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import ProjectsPreviewSection from '../sections/ProjectsPreviewSection'
import EducationSection from '../sections/EducationSection'
import ContactSection from '../sections/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsPreviewSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </>
  )
}