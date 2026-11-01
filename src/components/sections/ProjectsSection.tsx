import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Layers, ArrowRight } from 'lucide-react'
import { Modal } from '../ui/Modal'
import { GithubIcon } from '../ui/Icons'
import { SectionHeader } from '../ui/SectionHeader'
import { projectsData } from '../../data/portfolioData'
import type { Project } from '../../types/portfolio'

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Dự án Tiêu biểu"
        title="Kiến tạo với Mục đích Rõ ràng"
        subtitle="Khám phá các nền tảng full-stack thực tế với kiến trúc Client-Server hoàn chỉnh, tích hợp thanh toán và xử lý tự động."
      />

      {/* 3-Column Bento Grid Projects Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {projectsData.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="flex"
            >
              <div className="group flex flex-col justify-between w-full overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300">
                
                <div>
                  {/* Thumbnail Image Container */}
                  <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-100 dark:border-zinc-800 [isolation:isolate]">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-zinc-50 via-zinc-100/70 to-zinc-50 dark:from-zinc-850 dark:via-zinc-800/80 dark:to-zinc-850" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xs text-blue-700 dark:text-blue-300 border border-zinc-200/80 dark:border-zinc-700/80 text-xs font-bold uppercase tracking-wider shadow-2xs">
                        <Layers className="h-3.5 w-3.5" />
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {project.tagline}
                    </p>

                    <p className="mt-3 text-xs text-neutral-600 dark:text-zinc-400 leading-relaxed font-normal line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technical Highlights */}
                    <div className="mt-4 space-y-1.5">
                      <h4 className="text-[11px] font-bold text-neutral-700 dark:text-zinc-300 uppercase tracking-wider">
                        Điểm nhấn kỹ thuật:
                      </h4>
                      <ul className="space-y-1 text-xs text-neutral-600 dark:text-zinc-400">
                        {project.highlights.slice(0, 2).map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0"></span>
                            <span className="line-clamp-2">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack badges */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-[11px] font-medium text-neutral-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 5 && (
                        <span className="px-2 py-0.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 text-[10px] font-medium text-neutral-400 dark:text-zinc-500">
                          +{project.tags.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="p-6 pt-3 border-t border-zinc-100/90 dark:border-zinc-800/90 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    {project.githubClientUrl && (
                      <a
                        href={project.githubClientUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200/80 dark:hover:bg-zinc-700 text-neutral-800 dark:text-zinc-200 text-xs font-semibold transition-colors border border-zinc-200/60 dark:border-zinc-700/60"
                        title="Mã nguồn Client (Frontend)"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>Client</span>
                      </a>
                    )}
                    {project.githubServerUrl && (
                      <a
                        href={project.githubServerUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200/80 dark:hover:bg-zinc-700 text-neutral-800 dark:text-zinc-200 text-xs font-semibold transition-colors border border-zinc-200/60 dark:border-zinc-700/60"
                        title="Mã nguồn Server (Backend)"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>Server</span>
                      </a>
                    )}
                    {!project.githubClientUrl && !project.githubServerUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200/80 dark:hover:bg-zinc-700 text-neutral-800 dark:text-zinc-200 text-xs font-semibold transition-colors border border-zinc-200/60 dark:border-zinc-700/60"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>Mã nguồn</span>
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Chi tiết</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          maxWidth="2xl"
        >
          <div className="space-y-5 text-sm text-neutral-700 dark:text-zinc-300">
            {selectedProject.image && (
              <div className="rounded-2xl overflow-hidden h-52 w-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/70 dark:border-zinc-800 shadow-xs">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Header Tagline & Stats */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/80">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {selectedProject.tagline}
              </span>
              {selectedProject.stats && (
                <div className="flex flex-wrap items-center gap-2">
                  {selectedProject.stats.map((s, idx) => (
                    <span key={idx} className="text-xs font-medium text-neutral-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 px-2.5 py-1 rounded-lg border border-zinc-200/60 dark:border-zinc-700/60">
                      {s.label}: <strong className="text-blue-600 dark:text-blue-400">{s.value}</strong>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h4 className="text-xs font-bold text-neutral-900 dark:text-zinc-100 uppercase tracking-wider mb-1">
                Tổng quan Dự án:
              </h4>
              <p className="text-sm text-neutral-600 dark:text-zinc-300 leading-relaxed font-normal">
                {selectedProject.description}
              </p>
            </div>

            {selectedProject.architectureDetails && (
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/70 dark:border-zinc-700/60">
                <h4 className="text-xs font-bold text-neutral-900 dark:text-zinc-100 uppercase tracking-wider mb-1.5">
                  Kiến trúc & Triển khai Kỹ thuật:
                </h4>
                <p className="text-xs text-neutral-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {selectedProject.architectureDetails}
                </p>
              </div>
            )}

            <div>
              <h4 className="text-xs font-bold text-neutral-900 dark:text-zinc-100 uppercase tracking-wider mb-2">
                Đóng góp & Điểm nhấn quan trọng:
              </h4>
              <ul className="space-y-2 text-xs text-neutral-600 dark:text-zinc-300">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0"></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-neutral-900 dark:text-zinc-100 uppercase tracking-wider mb-2">
                Công nghệ Sử dụng:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-medium text-neutral-700 dark:text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center justify-end gap-2.5">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Xem Demo Trực tiếp</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              {selectedProject.githubClientUrl && (
                <a
                  href={selectedProject.githubClientUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200/80 dark:hover:bg-zinc-700 text-neutral-800 dark:text-zinc-200 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors border border-zinc-200/60 dark:border-zinc-700/60"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>GitHub Client</span>
                </a>
              )}
              {selectedProject.githubServerUrl && (
                <a
                  href={selectedProject.githubServerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-neutral-900 dark:bg-zinc-100 hover:bg-neutral-800 dark:hover:bg-white text-white dark:text-zinc-950 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>GitHub Server</span>
                </a>
              )}
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}
