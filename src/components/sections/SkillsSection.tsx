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
        return <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
      case 'Layout':
        return <Layout className="h-4 w-4 text-blue-600 dark:text-blue-400" />
      case 'Server':
        return <Server className="h-4 w-4 text-blue-600 dark:text-blue-400" />
      case 'Database':
        return <Database className="h-4 w-4 text-blue-600 dark:text-blue-400" />
      case 'Sparkles':
        return <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
      case 'Wrench':
      default:
        return <Wrench className="h-4 w-4 text-blue-600 dark:text-blue-400" />
    }
  }

  return (
    <section id="skills" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Năng lực Kỹ thuật"
        title="Kỹ năng & Công nghệ"
        subtitle="Các năng lực kỹ thuật thực tế tích lũy từ chương trình đào tạo đại học, phòng lab nghiên cứu và dự án thực chiến. Không sử dụng các thanh phần trăm trừu tượng."
      />

      {/* Bento Grid of 5 Skill Categories + 1 Philosophy card */}
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
                <div className="flex items-center gap-1.5 font-semibold text-neutral-800 dark:text-zinc-200">
                  {getCategoryIcon(cat.icon)}
                  <span>{cat.title}</span>
                </div>
              }
              subtitle={cat.description}
              className="h-full justify-between"
            >
              <div className="mt-4 space-y-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-zinc-50/70 dark:bg-zinc-800/40 hover:bg-zinc-100 dark:hover:bg-zinc-800/70 border border-zinc-200/50 dark:border-zinc-800 text-xs sm:text-sm font-medium text-neutral-800 dark:text-zinc-200 transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0"></span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </BentoCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
