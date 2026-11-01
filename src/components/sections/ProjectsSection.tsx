import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Sparkles, ArrowRight } from 'lucide-react'
import { Modal } from '../ui/Modal'
import { GithubIcon } from '../ui/Icons'
import { SectionHeader } from '../ui/SectionHeader'
import { projectsData } from '../../data/portfolioData'
import type { Project } from '../../types/portfolio'

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Large featured project vs secondary projects
  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0]
  const otherProjects = projectsData.filter((p) => p.id !== featuredProject?.id)

  return (
    <section id="projects" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Dự án Tiêu biểu"
        title="Kiến tạo với Mục đích Rõ ràng"
        subtitle="Khám phá các nền tảng full-stack, công cụ lập trình viên và vi dịch vụ thông lượng cao được xây dựng trên nền tảng công nghệ hiện đại."
      />

      {/* Bento Grid Projects Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Large Featured Project Card (Spans full 12 cols) */}
        {featuredProject && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-12"
          >
            <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.4)] transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Visual / Screenshot Side (5 cols) */}
                <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[420px] bg-zinc-100 dark:bg-zinc-800 overflow-hidden border-b lg:border-b-0 lg:border-r border-zinc-200/80 dark:border-zinc-800">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold shadow-sm">
                      <Sparkles className="h-3.5 w-3.5" />
                      Kiến trúc Nổi bật
                    </span>
                  </div>
                </div>

                {/* Details Side (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 sm:py-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="text-xs font-semibold text-neutral-400 dark:text-zinc-400 uppercase tracking-wider">
                        {featuredProject.category} platform
                      </span>
                      {featuredProject.stats && (
                        <div className="flex items-center gap-3">
                          {featuredProject.stats.map((s, idx) => (
                            <span key={idx} className="text-xs font-semibold text-neutral-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 rounded-full">
                              {s.label}: <span className="text-blue-600 dark:text-blue-400 font-bold">{s.value}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-zinc-100 tracking-tight">
                      {featuredProject.title}
                    </h3>
                    
                    <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                      {featuredProject.tagline}
                    </p>

                    <p className="mt-3 text-sm text-neutral-600 dark:text-zinc-300 leading-relaxed font-normal">
                      {featuredProject.description}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="mt-5 space-y-2">
                      <h4 className="text-xs font-bold text-neutral-900 dark:text-zinc-200 uppercase tracking-wider">
                        Đóng góp Kỹ thuật & Điểm nhấn Kiến trúc:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-zinc-400">
                        {featuredProject.highlights.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack badges */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {featuredProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-medium text-neutral-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links & CTA */}
                  <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {featuredProject.liveUrl && (
                        <a
                          href={featuredProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 dark:bg-zinc-100 hover:bg-neutral-800 dark:hover:bg-white text-white dark:text-zinc-950 text-xs font-semibold shadow-xs transition-colors"
                        >
                          <span>Bản Demo Trực tiếp</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200/80 dark:hover:bg-zinc-700 text-neutral-800 dark:text-zinc-200 text-xs font-semibold transition-colors border border-zinc-200/60 dark:border-zinc-700/60"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>Mã nguồn</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(featuredProject)}
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Chi tiết Kiến trúc</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}

        {/* Secondary Project Cards */}
        <AnimatePresence>
          {otherProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="md:col-span-6 lg:col-span-4 flex"
            >
              <div className="group flex flex-col justify-between w-full overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300">
                
                <div>
                  {/* Thumbnail */}
                  <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-100 dark:border-zinc-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xs text-[11px] font-bold text-neutral-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/80 shadow-2xs uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-blue-600 dark:text-blue-400 line-clamp-1">
                      {project.tagline}
                    </p>

                    <p className="mt-2.5 text-xs text-neutral-600 dark:text-zinc-400 leading-relaxed font-normal line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[11px] font-medium text-neutral-600 dark:text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md bg-zinc-50 dark:bg-zinc-800/50 text-[10px] font-medium text-neutral-400 dark:text-zinc-500">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="p-6 pt-0 mt-2 border-t border-zinc-100/80 dark:border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2 pt-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200/80 dark:hover:bg-zinc-700 text-neutral-800 dark:text-zinc-200 transition-colors"
                        title="Bản xem trước trực tiếp"
                        aria-label="Liên kết Demo"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200/80 dark:hover:bg-zinc-700 text-neutral-800 dark:text-zinc-200 transition-colors"
                      title="Kho lưu trữ GitHub"
                      aria-label="Kho lưu trữ GitHub"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="pt-3 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1 transition-colors cursor-pointer"
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
            <div className="rounded-2xl overflow-hidden h-48 w-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/70 dark:border-zinc-800">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {selectedProject.tagline}
              </span>
              <p className="mt-1 text-sm text-neutral-600 dark:text-zinc-300 leading-relaxed font-normal">
                {selectedProject.description}
              </p>
            </div>

            {selectedProject.architectureDetails && (
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/70 dark:border-zinc-700/60">
                <h4 className="text-xs font-bold text-neutral-900 dark:text-zinc-100 uppercase tracking-wider mb-1">
                  Kiến trúc & Triển khai Kỹ thuật:
                </h4>
                <p className="text-xs text-neutral-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {selectedProject.architectureDetails}
                </p>
              </div>
            )}

            <div>
              <h4 className="text-xs font-bold text-neutral-900 dark:text-zinc-100 uppercase tracking-wider mb-2">
                Điểm nhấn quan trọng:
              </h4>
              <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-zinc-300">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0"></span>
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

            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-end gap-3">
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
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-neutral-900 dark:bg-zinc-100 hover:bg-neutral-800 dark:hover:bg-white text-white dark:text-zinc-950 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>Xem trên GitHub</span>
              </a>
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}
