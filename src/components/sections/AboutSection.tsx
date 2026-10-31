import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  GraduationCap,
  MapPin,
  Clock,
  Compass,
  BookOpen
} from 'lucide-react'
import { BentoCard } from '../ui/BentoCard'
import { SectionHeader } from '../ui/SectionHeader'
import { candidateData } from '../../data/portfolioData'

export const AboutSection: React.FC = () => {
  const [localTime, setLocalTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Bangkok',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(now))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="About Me"
        title="Background, Studies & Direction"
        subtitle="A synthesis of rigorous computer science coursework, hands-on engineering, and continuous learning."
      />

      {/* Asymmetric Responsive Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
        
        {/* 1. Large About Me Card (Spans 8 cols on md/lg) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="md:col-span-8 flex"
        >
          <BentoCard
            badge="Personal Introduction"
            title="Passionate about systems that scale gracefully."
            className="w-full justify-between"
          >
            <div className="space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              {candidateData.longBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-2xl bg-zinc-50 p-3 border border-zinc-200/60">
                  <span className="text-xs text-neutral-400 block font-medium">Academic GPA</span>
                  <span className="text-base sm:text-lg font-bold text-neutral-900">{candidateData.education.gpa}</span>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-3 border border-zinc-200/60">
                  <span className="text-xs text-neutral-400 block font-medium">Class Standing</span>
                  <span className="text-base sm:text-lg font-bold text-blue-600">Top 5%</span>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-3 border border-zinc-200/60">
                  <span className="text-xs text-neutral-400 block font-medium">Projects Built</span>
                  <span className="text-base sm:text-lg font-bold text-neutral-900">12+ Repos</span>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-3 border border-zinc-200/60">
                  <span className="text-xs text-neutral-400 block font-medium">Code Activity</span>
                  <span className="text-base sm:text-lg font-bold text-neutral-900">650+ Commits</span>
                </div>
              </div>
            </div>
          </BentoCard>
        </motion.div>

        {/* 2. Education Card (Spans 4 cols on md/lg) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="md:col-span-4 flex"
        >
          <BentoCard
            badge={
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                <GraduationCap className="h-3.5 w-3.5" />
                Education
              </span>
            }
            title={candidateData.education.institution}
            subtitle={candidateData.education.degree}
            className="w-full justify-between"
          >
            <div className="mt-2 space-y-3">
              <div className="flex items-center justify-between text-xs font-medium text-neutral-700 pb-2 border-b border-zinc-100">
                <span>Timeline</span>
                <span className="text-neutral-500">{candidateData.education.period}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-medium text-neutral-700 pb-2 border-b border-zinc-100">
                <span>Status</span>
                <span className="text-blue-600 font-semibold">{candidateData.education.status}</span>
              </div>

              <div>
                <span className="text-xs font-semibold text-neutral-800 block mb-1.5">Core Coursework:</span>
                <div className="flex flex-wrap gap-1.5">
                  {candidateData.education.relevantCourses.slice(0, 4).map((course) => (
                    <span
                      key={course}
                      className="px-2 py-0.5 rounded-md bg-zinc-100 text-[11px] font-medium text-neutral-700"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-neutral-800 block mb-1">Academic Honors:</span>
                <p className="text-xs text-neutral-500 italic">
                  {candidateData.education.highlights[0]}
                </p>
              </div>
            </div>
          </BentoCard>
        </motion.div>

        {/* 3. Location & Availability Card (Spans 4 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="md:col-span-4 flex"
        >
          <BentoCard
            badge="Location & Timezone"
            title={`${candidateData.location.city}, ${candidateData.location.country}`}
            className="w-full justify-between"
          >
            <div className="space-y-3.5">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-50 border border-zinc-200/60">
                <Clock className="h-5 w-5 text-blue-600 shrink-0" />
                <div>
                  <span className="text-xs text-neutral-400 block font-medium">Local Time (GMT+7)</span>
                  <span className="text-base font-bold font-mono text-neutral-900 tracking-tight">
                    {localTime || '14:30:00'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-neutral-600">
                <MapPin className="h-4 w-4 text-neutral-400 shrink-0" />
                <span>Open for {candidateData.location.remotePreference}</span>
              </div>
            </div>
          </BentoCard>
        </motion.div>

        {/* 4. Career Goal Card (Spans 4 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="md:col-span-4 flex"
        >
          <BentoCard
            badge={
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-700">
                <Compass className="h-3.5 w-3.5 text-blue-600" />
                Career Goal
              </span>
            }
            title="Internship Aspirations"
            className="w-full justify-between"
          >
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
              {candidateData.careerGoal}
            </p>
            <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center gap-1.5 text-xs font-medium text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>Ready for immediate or upcoming semester onboarding</span>
            </div>
          </BentoCard>
        </motion.div>

        {/* 5. Currently Learning Card (Spans 4 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="md:col-span-4 flex"
        >
          <BentoCard
            badge={
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-700">
                <BookOpen className="h-3.5 w-3.5 text-blue-600" />
                Currently Learning
              </span>
            }
            title={candidateData.currentlyLearning.topic}
            subtitle={candidateData.currentlyLearning.reason}
            className="w-full justify-between"
          >
            <div className="mt-2 p-3 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs text-blue-900">
              <strong className="block font-semibold mb-0.5">Active Project:</strong>
              <p className="text-[11px] leading-relaxed text-blue-800">
                {candidateData.currentlyLearning.progress}
              </p>
            </div>
          </BentoCard>
        </motion.div>

      </div>
    </section>
  )
}
