import React from 'react'
import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'
import { candidateData } from '../../data/portfolioData'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-zinc-200/80 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 py-12 text-sm text-neutral-500 dark:text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-100 dark:border-zinc-800">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-base font-extrabold text-neutral-900 dark:text-white tracking-tight flex items-center gap-1.5">
              {candidateData.name}
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 inline-block"></span>
            </span>
            <p className="text-xs text-neutral-500 dark:text-zinc-400 mt-1">
              Thực tập sinh Kỹ sư Phần mềm & Sinh viên Kỹ thuật
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={candidateData.contacts.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200/80 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
              aria-label="Hồ sơ GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={candidateData.contacts.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200/80 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
              aria-label="Hồ sơ LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${candidateData.contacts.email}`}
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200/80 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
              aria-label="Gửi Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="ml-2 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-900 dark:bg-zinc-100 hover:bg-neutral-800 dark:hover:bg-white text-white dark:text-zinc-950 text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              aria-label="Về đầu trang"
            >
              <span>Lên đầu</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 dark:text-zinc-400">
          <p>© {currentYear} {candidateData.name}. Bản quyền được bảo lưu.</p>
          <p className="flex items-center gap-1.5">
            Thiết kế theo ngôn ngữ <span className="text-neutral-700 dark:text-zinc-300 font-medium">Bento Minimal</span> hiện đại
          </p>
        </div>
      </div>
    </footer>
  )
}
