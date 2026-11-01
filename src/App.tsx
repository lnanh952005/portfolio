import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { CertificationsSection } from './components/sections/CertificationsSection'
import { ContactSection } from './components/sections/ContactSection'
import { CvModal } from './components/ui/CvModal'

export function AppContent() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] dark:bg-[#09090b] text-[#171717] dark:text-[#f4f4f5] antialiased transition-colors duration-200">
      {/* Background Subtle Dot Pattern */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.35] dark:opacity-[0.25] [background-image:radial-gradient(circle_at_1px_1px,#d4d4d8_1px,transparent_0)] dark:[background-image:radial-gradient(circle_at_1px_1px,#3f3f46_1px,transparent_0)] [background-size:24px_24px]"
      />

      {/* Main Navigation */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Portfolio Sections */}
      <main className="relative z-10 flex flex-col space-y-4 sm:space-y-8">
        <HeroSection onOpenCvModal={() => setIsCvModalOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive CV Download & Preview Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  )
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
