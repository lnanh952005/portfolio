import React from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles
} from 'lucide-react'
import { BentoCard } from '../ui/BentoCard'
import { SectionHeader } from '../ui/SectionHeader'
import { skillCategories } from '../../data/portfolioData'

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="h-4 w-4 text-blue-600" />
      case 'Layout':
        return <Layout className="h-4 w-4 text-blue-600" />
      case 'Server':
        return <Server className="h-4 w-4 text-blue-600" />
      case 'Database':
        return <Database className="h-4 w-4 text-blue-600" />
      case 'Wrench':
      default:
        return <Wrench className="h-4 w-4 text-blue-600" />
    }
  }

  const getLevelBadge = (level: 'Core' | 'Proficient' | 'Familiar') => {
    switch (level) {
      case 'Core':
        return (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
            Core
          </span>
        )
      case 'Proficient':
        return (
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
            Proficient
          </span>
        )
      case 'Familiar':
        return (
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600">
            Familiar
          </span>
        )
    }
  }

  return (
    <section id="skills" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Technical Arsenal"
        title="Skills & Technologies"
        subtitle="Categorized technical proficiencies derived from university coursework, research labs, and production-like projects. No arbitrary progress bars."
      />

      {/* Bento Grid of 5 Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className="lg:col-span-1"
          >
            <BentoCard
              badge={
                <div className="flex items-center gap-1.5 font-semibold text-neutral-800">
                  {getCategoryIcon(cat.icon)}
                  <span>{cat.title}</span>
                </div>
              }
              subtitle={cat.description}
              className="h-full justify-between"
            >
              <div className="mt-3 space-y-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/item flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-50 border border-transparent hover:border-zinc-200/60 transition-all duration-200"
                  >
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-semibold text-neutral-800 group-hover/item:text-neutral-950">
                        {skill.name}
                      </span>
                      {skill.description && (
                        <span className="text-[11px] text-neutral-400 font-normal leading-tight">
                          {skill.description}
                        </span>
                      )}
                    </div>
                    <div className="shrink-0 ml-2">
                      {getLevelBadge(skill.level)}
                    </div>
                  </div>
                ))}
              </div>
            </BentoCard>
          </motion.div>
        ))}

        {/* Philosophy / Standards Card (Fills 6th slot for clean 2x3 or 3x2 bento grid) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35, delay: 0.4 }}
          className="lg:col-span-1"
        >
          <BentoCard
            badge={
              <div className="flex items-center gap-1.5 font-semibold text-neutral-800">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span>Engineering Standards</span>
              </div>
            }
            title="Clean Code Philosophy"
            subtitle="Practices adhered to in every codebase I contribute to."
            className="h-full justify-between bg-zinc-900 text-white border-zinc-800 shadow-lg"
          >
            <div className="mt-2 space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                <span>Type safety with strict TypeScript configs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                <span>Semantic HTML & WCAG 2.1 AA accessibility</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                <span>Unit & integration testing before deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                <span>Idempotent REST APIs & clear documentation</span>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-zinc-800">
              <p className="text-[11px] text-zinc-400 italic">
                "Simple is better than complex. Write code that humans can understand and machines can execute reliably."
              </p>
            </div>
          </BentoCard>
        </motion.div>

      </div>
    </section>
  )
}
