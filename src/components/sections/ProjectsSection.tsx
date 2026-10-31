import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Sparkles, ArrowRight } from 'lucide-react'
import { Modal } from '../ui/Modal'
import { GithubIcon } from '../ui/Icons'
import { SectionHeader } from '../ui/SectionHeader'
import { projectsData } from '../../data/portfolioData'
import type { Project, RoleCategory } from '../../types/portfolio'

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<RoleCategory>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true
    return project.category === filter
  })

  // Large featured project vs secondary projects
  const featuredProject = filteredProjects.find((p) => p.featured) || filteredProjects[0]
  const otherProjects = filteredProjects.filter((p) => p.id !== featuredProject?.id)

  return (
    <section id="projects" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-12">
        <SectionHeader
          badge="Featured Work"
          title="Engineered with Purpose"
          subtitle="Explore full-stack platforms, developer tools, and scalable services built with modern stacks."
          className="mb-0"
        />

        {/* Category Filters */}
        <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-zinc-100 border border-zinc-200/60 w-fit">
          {(
            [
              { key: 'all', label: 'All Projects' },
              { key: 'fullstack', label: 'Full-Stack' },
              { key: 'backend', label: 'Backend' },
              { key: 'frontend', label: 'Frontend' }
            ] as const
          ).map((item) => (
            <button
              key={item.key}
              onClick={() => setFilter(item.key)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                filter === item.key
                  ? 'bg-white text-neutral-900 shadow-2xs font-bold'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid Projects Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Large Featured Project Card (Spans full 12 cols or 8 cols depending on view) */}
        {featuredProject && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-12"
          >
            <div className="group relative overflow-hidden rounded-3xl bg-white border border-zinc-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Visual / Screenshot Side (5 cols) */}
                <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[420px] bg-zinc-100 overflow-hidden border-b lg:border-b-0 lg:border-r border-zinc-200/80">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold shadow-sm">
                      <Sparkles className="h-3.5 w-3.5" />
                      Featured Architecture
                    </span>
                  </div>
                </div>

                {/* Details Side (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 sm:py-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                        {featuredProject.category} platform
                      </span>
                      {featuredProject.stats && (
                        <div className="flex items-center gap-3">
                          {featuredProject.stats.map((s, idx) => (
                            <span key={idx} className="text-xs font-semibold text-neutral-700 bg-zinc-100 px-2.5 py-0.5 rounded-full">
                              {s.label}: <span className="text-blue-600 font-bold">{s.value}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                      {featuredProject.title}
                    </h3>
                    
                    <p className="mt-1 text-sm font-medium text-blue-600">
                      {featuredProject.tagline}
                    </p>

                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-normal">
                      {featuredProject.description}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="mt-5 space-y-2">
                      <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                        Technical Contributions & Engineering Highlights:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-neutral-600">
                        {featuredProject.highlights.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0"></span>
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
                          className="px-2.5 py-1 rounded-lg bg-zinc-100 text-xs font-medium text-neutral-700 border border-zinc-200/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links & CTA */}
                  <div className="mt-8 pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {featuredProject.liveUrl && (
                        <a
                          href={featuredProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold shadow-xs transition-colors"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200/80 text-neutral-800 text-xs font-semibold transition-colors border border-zinc-200/60"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>Source Code</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(featuredProject)}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Deep Dive Architecture</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}

        {/* Secondary Project Cards (Each spanning 6 cols or 4 cols) */}
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
              <div className="group flex flex-col justify-between w-full overflow-hidden rounded-3xl bg-white border border-zinc-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
                
                <div>
                  {/* Thumbnail */}
                  <div className="relative h-48 w-full overflow-hidden bg-zinc-100 border-b border-zinc-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-bold text-neutral-700 border border-zinc-200/80 shadow-2xs uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-blue-600 line-clamp-1">
                      {project.tagline}
                    </p>

                    <p className="mt-2.5 text-xs text-neutral-600 leading-relaxed font-normal line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-zinc-100 text-[11px] font-medium text-neutral-600"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md bg-zinc-50 text-[10px] font-medium text-neutral-400">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="p-6 pt-0 mt-2 border-t border-zinc-100/80 flex items-center justify-between">
                  <div className="flex items-center gap-2 pt-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200/80 text-neutral-800 transition-colors"
                        title="Live Preview"
                        aria-label="Live Demo Link"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200/80 text-neutral-800 transition-colors"
                      title="GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="pt-3 text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Details</span>
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
          <div className="space-y-5 text-sm text-neutral-700">
            <div className="rounded-2xl overflow-hidden h-48 w-full bg-zinc-100 border border-zinc-200/70">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                {selectedProject.tagline}
              </span>
              <p className="mt-1 text-sm text-neutral-600 leading-relaxed font-normal">
                {selectedProject.description}
              </p>
            </div>

            {selectedProject.architectureDetails && (
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70">
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">
                  Architecture & Implementation:
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {selectedProject.architectureDetails}
                </p>
              </div>
            )}

            <div>
              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
                Key Highlights:
              </h4>
              <ul className="space-y-1.5 text-xs text-neutral-600">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0"></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-zinc-100 text-xs font-medium text-neutral-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-center justify-end gap-3">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Visit Live Demo</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}
