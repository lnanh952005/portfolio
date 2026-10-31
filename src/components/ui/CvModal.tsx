import React from 'react'
import { Modal } from './Modal'
import { Button } from './Button'
import { Download, Printer, Mail, MapPin, GraduationCap } from 'lucide-react'
import { candidateData, skillCategories, experienceData, projectsData } from '../../data/portfolioData'

interface CvModalProps {
  isOpen: boolean
  onClose: () => void
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    // Generates a clean text/markdown download of the CV or opens print dialog
    const content = `
${candidateData.name} - ${candidateData.targetRoles.join(' / ')}
Email: ${candidateData.contacts.email} | Location: ${candidateData.location.city}, ${candidateData.location.country}
GitHub: ${candidateData.contacts.github} | LinkedIn: ${candidateData.contacts.linkedin}

SUMMARY:
${candidateData.bio}

EDUCATION:
${candidateData.education.degree} - ${candidateData.education.institution} (${candidateData.education.period})
GPA: ${candidateData.education.gpa}

TECHNICAL SKILLS:
${skillCategories.map(c => `${c.title}: ${c.skills.map(s => s.name).join(', ')}`).join('\n')}

FEATURED PROJECTS:
${projectsData.map(p => `- ${p.title} (${p.tags.join(', ')}):\n  ${p.description}\n  Highlights:\n${p.highlights.map(h => `    * ${h}`).join('\n')}`).join('\n\n')}

EXPERIENCE:
${experienceData.map(e => `- ${e.role} @ ${e.organization} (${e.period}):\n  ${e.description}\n${e.achievements.map(a => `    * ${a}`).join('\n')}`).join('\n\n')}
    `.trim()

    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${candidateData.name.replace(/\s+/g, '_')}_Resume_SWE_Intern.md`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Curriculum Vitae / Resume" maxWidth="3xl">
      <div className="flex flex-col gap-6">
        {/* Action Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-zinc-50 p-3.5 rounded-2xl border border-zinc-200/80">
          <div className="text-xs text-neutral-600 font-medium">
            Standard Format • Tailored for Software Engineering Internships
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              icon={<Printer className="h-3.5 w-3.5" />}
              onClick={handlePrint}
            >
              Print / Save PDF
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={<Download className="h-3.5 w-3.5" />}
              onClick={handleDownload}
            >
              Download (.md/.txt)
            </Button>
          </div>
        </div>

        {/* Paper CV Preview */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 text-neutral-800 shadow-xs space-y-6 text-sm">
          {/* Header */}
          <div className="border-b border-zinc-200 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              {candidateData.name}
            </h1>
            <p className="text-blue-600 font-semibold mt-1 text-sm">
              {candidateData.targetRoles.join(' • ')}
            </p>
            <div className="mt-3 flex flex-wrap gap-y-1 gap-x-4 text-xs text-neutral-500">
              <span className="flex items-center gap-1">
                <Mail className="h-3.5 w-3.5" />
                {candidateData.contacts.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {candidateData.location.city}, {candidateData.location.country}
              </span>
              <span className="flex items-center gap-1">
                <GraduationCap className="h-3.5 w-3.5" />
                {candidateData.education.institution}
              </span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 border-b border-zinc-100 pb-1 mb-2">
              Education
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-neutral-900">{candidateData.education.institution}</p>
                <p className="text-xs text-neutral-600">{candidateData.education.degree}</p>
                <p className="text-xs text-neutral-500 mt-1">GPA: <span className="font-semibold text-neutral-800">{candidateData.education.gpa}</span></p>
              </div>
              <span className="text-xs text-neutral-400 font-medium">{candidateData.education.period}</span>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 border-b border-zinc-100 pb-1 mb-2">
              Technical Stack
            </h2>
            <div className="space-y-1.5 text-xs">
              <p><strong className="text-neutral-900">Languages:</strong> TypeScript, JavaScript, Python, Java, Go, C/C++</p>
              <p><strong className="text-neutral-900">Frontend:</strong> React 19, Next.js 15, Tailwind CSS, HTML5/CSS3, Zustand</p>
              <p><strong className="text-neutral-900">Backend:</strong> Node.js, Express, FastAPI, REST APIs, WebSockets</p>
              <p><strong className="text-neutral-900">Databases & DevOps:</strong> PostgreSQL, Prisma, Redis, Docker, Git/GitHub, Linux</p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 border-b border-zinc-100 pb-1 mb-3">
              Key Projects
            </h2>
            <div className="space-y-4">
              {projectsData.slice(0, 3).map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex justify-between font-bold text-neutral-900">
                    <span>{proj.title}</span>
                    <span className="text-[11px] text-neutral-400 font-normal">Personal Project</span>
                  </div>
                  <p className="text-neutral-600 text-[11px] mt-0.5">{proj.tags.join(' • ')}</p>
                  <ul className="list-disc list-inside mt-1.5 space-y-0.5 text-neutral-600">
                    {proj.highlights.slice(0, 2).map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 border-b border-zinc-100 pb-1 mb-3">
              Leadership & Experience
            </h2>
            <div className="space-y-3">
              {experienceData.slice(0, 2).map((exp) => (
                <div key={exp.id} className="text-xs">
                  <div className="flex justify-between font-bold text-neutral-900">
                    <span>{exp.role} — {exp.organization}</span>
                    <span className="text-neutral-400 font-normal">{exp.period}</span>
                  </div>
                  <p className="text-neutral-600 mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
