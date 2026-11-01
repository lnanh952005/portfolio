import React from 'react'
import { Modal } from './Modal'
import { Button } from './Button'
import { Download, FileText, Mail, MapPin, GraduationCap } from 'lucide-react'
import { candidateData, skillCategories, experienceData, projectsData } from '../../data/portfolioData'

interface CvModalProps {
  isOpen: boolean
  onClose: () => void
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const handleDownloadPdf = () => {
    const link = document.createElement('a')
    link.href = '/Le_Nhat_Anh_CV.pdf'
    link.download = `${candidateData.name.replace(/\s+/g, '_')}_CV_ThucTapSinh_SWE.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDownload = () => {
    // Tạo bản tóm tắt markdown tiếng Việt của CV để tải về
    const content = `
${candidateData.name} - ${candidateData.targetRoles.join(' / ')}
Email: ${candidateData.contacts.email} | Địa điểm: ${candidateData.location.city}, ${candidateData.location.country}
GitHub: ${candidateData.contacts.github} | LinkedIn: ${candidateData.contacts.linkedin}

TÓM TẮT MỤC TIÊU:
${candidateData.bio}

HỌC VẤN:
${candidateData.education.degree} - ${candidateData.education.institution} (${candidateData.education.period})
Điểm GPA: ${candidateData.education.gpa}

KỸ NĂNG KỸ THUẬT:
${skillCategories.map(c => `${c.title}: ${c.skills.map(s => s.name).join(', ')}`).join('\n')}

DỰ ÁN NỔI BẬT:
${projectsData.map(p => `- ${p.title} (${p.tags.join(', ')}):\n  ${p.description}\n  Điểm nhấn kỹ thuật:\n${p.highlights.map(h => `    * ${h}`).join('\n')}`).join('\n\n')}

KINH NGHIỆM & HOẠT ĐỘNG:
${experienceData.map(e => `- ${e.role} @ ${e.organization} (${e.period}):\n  ${e.description}\n${e.achievements.map(a => `    * ${a}`).join('\n')}`).join('\n\n')}
    `.trim()

    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${candidateData.name.replace(/\s+/g, '_')}_CV_ThucTapSinh_SWE.md`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Sơ yếu Lý lịch / CV Ứng viên" maxWidth="3xl">
      <div className="flex flex-col gap-6">
        {/* Action Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-zinc-50 dark:bg-zinc-800/60 p-3.5 rounded-2xl border border-zinc-200/80 dark:border-zinc-700/80">
          <div className="text-xs text-neutral-600 dark:text-zinc-300 font-medium">
            Định dạng Chuẩn • Tối ưu cho vị trí Thực tập sinh Kỹ sư Phần mềm
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              icon={<Download className="h-3.5 w-3.5" />}
              onClick={handleDownloadPdf}
            >
              Tải CV (PDF)
            </Button>
            <Button
              variant="outline"
              size="sm"
              icon={<FileText className="h-3.5 w-3.5" />}
              onClick={handleDownload}
            >
              Tải CV (.md)
            </Button>
          </div>
        </div>

        {/* Paper CV Preview */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-850 p-6 sm:p-8 text-neutral-800 dark:text-zinc-200 shadow-xs space-y-6 text-sm">
          {/* Header */}
          <div className="border-b border-zinc-200 dark:border-zinc-700 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              {candidateData.name}
            </h1>
            <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1 text-sm">
              {candidateData.targetRoles.join(' • ')}
            </p>
            <div className="mt-3 flex flex-wrap gap-y-1 gap-x-4 text-xs text-neutral-500 dark:text-zinc-400">
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
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-zinc-400 border-b border-zinc-100 dark:border-zinc-800 pb-1 mb-2">
              Học vấn
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-neutral-900 dark:text-zinc-100">{candidateData.education.institution}</p>
                <p className="text-xs text-neutral-600 dark:text-zinc-300">{candidateData.education.degree}</p>
                <p className="text-xs text-neutral-500 dark:text-zinc-400 mt-1">Điểm GPA: <span className="font-semibold text-neutral-800 dark:text-zinc-200">{candidateData.education.gpa}</span></p>
              </div>
              <span className="text-xs text-neutral-400 dark:text-zinc-400 font-medium">{candidateData.education.period}</span>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-zinc-400 border-b border-zinc-100 dark:border-zinc-800 pb-1 mb-2">
              Kỹ năng Chuyên môn
            </h2>
            <div className="space-y-1.5 text-xs text-neutral-700 dark:text-zinc-300">
              <p><strong className="text-neutral-900 dark:text-white">Ngôn ngữ:</strong> Python, TypeScript, JavaScript, C/C++, SQL</p>
              <p><strong className="text-neutral-900 dark:text-white">AI & Trí tuệ Nhân tạo:</strong> Thị giác máy tính (OpenCV), PyTorch, NLP, HuggingFace, Scikit-learn</p>
              <p><strong className="text-neutral-900 dark:text-white">Phát triển Web:</strong> React 19, Tailwind CSS v4, FastAPI, Node.js, RESTful APIs, JWT</p>
              <p><strong className="text-neutral-900 dark:text-white">Cơ sở dữ liệu & DevOps:</strong> PostgreSQL, MongoDB, MySQL, Docker, Git/GitHub, Linux</p>
              <p><strong className="text-neutral-900 dark:text-white">Chứng chỉ Ngoại ngữ:</strong> TOEIC 550 (Tiếng Anh)</p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-zinc-400 border-b border-zinc-100 dark:border-zinc-800 pb-1 mb-3">
              Dự án Tiêu biểu
            </h2>
            <div className="space-y-4">
              {projectsData.slice(0, 3).map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex justify-between font-bold text-neutral-900 dark:text-zinc-100">
                    <span>{proj.title}</span>
                    <span className="text-[11px] text-neutral-400 dark:text-zinc-400 font-normal">Dự án Cá nhân</span>
                  </div>
                  <p className="text-neutral-600 dark:text-zinc-400 text-[11px] mt-0.5">{proj.tags.join(' • ')}</p>
                  <ul className="list-disc list-inside mt-1.5 space-y-0.5 text-neutral-600 dark:text-zinc-300">
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
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-zinc-400 border-b border-zinc-100 dark:border-zinc-800 pb-1 mb-3">
              Hoạt động & Kinh nghiệm
            </h2>
            <div className="space-y-3">
              {experienceData.slice(0, 2).map((exp) => (
                <div key={exp.id} className="text-xs">
                  <div className="flex justify-between font-bold text-neutral-900 dark:text-zinc-100">
                    <span>{exp.role} — {exp.organization}</span>
                    <span className="text-neutral-400 dark:text-zinc-400 font-normal">{exp.period}</span>
                  </div>
                  <p className="text-neutral-600 dark:text-zinc-300 mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
