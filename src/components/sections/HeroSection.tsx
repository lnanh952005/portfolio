import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, FileDown, Mail, MapPin, Terminal, CheckCircle2 } from 'lucide-react'
import { BentoCard } from '../ui/BentoCard'
import { Button } from '../ui/Button'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'
import { candidateData } from '../../data/portfolioData'

interface HeroSectionProps {
  onOpenCvModal: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCvModal }) => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="pt-28 pb-12 sm:pt-36 sm:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Bento Hero Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
        
        {/* Main Welcome Hero Bento Card (Spans 8 columns on md/lg) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-8 flex"
        >
          <BentoCard
            badge="👋 Welcome"
            className="w-full justify-between bg-white"
            footerLink={{
              label: 'View My Work',
              onClick: scrollToProjects,
            }}
          >
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
                Hi, I'm <span className="text-neutral-900">Alex</span>
                <span className="text-blue-600">.</span>
              </h1>

              <p className="mt-3 text-lg sm:text-xl font-medium text-neutral-800">
                Building Digital Experiences Through Code.
              </p>

              <p className="mt-4 text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed font-normal">
                Aspiring <span className="font-semibold text-neutral-900">Software Developer</span> focused on resilient backend systems, type-safe APIs, and responsive frontend architectures. Currently seeking 2025/2026 software engineering internship opportunities.
              </p>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={scrollToProjects}
                  icon={<ArrowDown className="h-4 w-4" />}
                  iconPosition="right"
                >
                  Explore My Work
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  icon={<FileDown className="h-4 w-4" />}
                  onClick={onOpenCvModal}
                >
                  Download CV
                </Button>
              </div>
            </div>
          </BentoCard>
        </motion.div>

        {/* Profile / Candidate Avatar Bento Card (Spans 4 columns) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-4 flex"
        >
          <BentoCard
            badge={
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200/60">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {candidateData.status.label}
              </span>
            }
            className="w-full justify-between"
          >
            <div className="flex flex-col items-center text-center py-2">
              {/* Profile Image & Avatar with subtle border */}
              <div className="relative mb-4 group cursor-pointer" onClick={scrollToAbout}>
                <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-3xl overflow-hidden border-2 border-zinc-200/80 shadow-md bg-neutral-100 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
                    alt={candidateData.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-2xl shadow-sm border-2 border-white">
                  <Terminal className="h-4 w-4" />
                </div>
              </div>

              <h2 className="text-lg font-bold text-neutral-900">{candidateData.name}</h2>
              <p className="text-xs text-neutral-500 mt-0.5">3rd-year CS Undergrad</p>

              {/* Status details */}
              <div className="mt-4 w-full bg-zinc-50 rounded-2xl p-3 border border-zinc-200/70 text-left">
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                  <MapPin className="h-3.5 w-3.5 text-neutral-400 shrink-0" />
                  <span>{candidateData.location.city}, {candidateData.location.country}</span>
                </div>
                <p className="mt-1 text-[11px] text-neutral-500 leading-tight">
                  Available for Summer / Fall Internships
                </p>
              </div>
            </div>

            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={scrollToAbout}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors cursor-pointer"
              >
                Read Candidate Bio →
              </button>
            </div>
          </BentoCard>
        </motion.div>

        {/* Highlights Row: 3 Bento Cards matching reference design */}

        {/* Card 1: Target Roles & Focus (Col 4) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-4 flex"
        >
          <BentoCard
            badge="Target Roles"
            title="Software Engineering"
            subtitle="Focused on clean abstractions, typed APIs, and scalable infrastructure."
            className="w-full justify-between"
            footerLink={{
              label: 'View All Skills',
              onClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <div className="space-y-2.5 mt-2">
              {candidateData.targetRoles.map((role) => (
                <div
                  key={role}
                  className="flex items-center gap-2 text-xs font-medium text-neutral-700 bg-zinc-50 px-3 py-2 rounded-xl border border-zinc-200/60"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                  <span>{role}</span>
                </div>
              ))}
            </div>
          </BentoCard>
        </motion.div>

        {/* Card 2: Core Stack Preview (Col 4) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="md:col-span-4 flex"
        >
          <BentoCard
            badge="Core Stack"
            title="My Tech Stack"
            subtitle="Modern production-ready libraries and languages."
            className="w-full justify-between"
            footerLink={{
              label: 'Explore Projects',
              onClick: scrollToProjects
            }}
          >
            <div className="grid grid-cols-2 gap-2 mt-2">
              {['TypeScript', 'React 19', 'Next.js 15', 'Node.js', 'PostgreSQL', 'Docker'].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 text-xs font-medium text-neutral-800"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </BentoCard>
        </motion.div>

        {/* Card 3: Connect With Me (Col 4) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-4 flex"
        >
          <BentoCard
            badge="Get in Touch"
            title="Connect With Me"
            subtitle="Let's discuss internship opportunities or collaborate on open source."
            className="w-full justify-between"
            footerLink={{
              label: 'Send Direct Message',
              onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <div className="grid grid-cols-2 gap-2.5 mt-2">
              <a
                href={candidateData.contacts.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/80 text-xs font-medium text-neutral-800 transition-colors"
              >
                <GithubIcon className="h-4 w-4 text-neutral-700" />
                <span>GitHub</span>
              </a>
              <a
                href={candidateData.contacts.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/80 text-xs font-medium text-neutral-800 transition-colors"
              >
                <LinkedinIcon className="h-4 w-4 text-blue-600" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${candidateData.contacts.email}`}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/80 text-xs font-medium text-neutral-800 transition-colors"
              >
                <Mail className="h-4 w-4 text-neutral-600" />
                <span>Email</span>
              </a>
              <a
                href={candidateData.contacts.leetcode || '#'}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/80 text-xs font-medium text-neutral-800 transition-colors"
              >
                <Terminal className="h-4 w-4 text-amber-600" />
                <span>LeetCode</span>
              </a>
            </div>
          </BentoCard>
        </motion.div>

      </div>
    </section>
  )
}
