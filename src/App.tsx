import { useState } from 'react'
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

export function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-[#171717] antialiased">
      {/* Background Subtle Dot Pattern */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #d4d4d8 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
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

export default App
