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
      case 'Wrench':
      default:
        return <Wrench className="h-4 w-4 text-blue-600 dark:text-blue-400" />
    }
  }

  const getLevelBadge = (level: 'Core' | 'Proficient' | 'Familiar') => {
    switch (level) {
      case 'Core':
        return (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-900/50">
            Nòng cốt
          </span>
        )
      case 'Proficient':
        return (
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-900/50">
            Thành thạo
          </span>
        )
      case 'Familiar':
        return (
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50">
            Nắm vững
          </span>
        )
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
              <div className="mt-3 space-y-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/item flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/60 border border-transparent hover:border-zinc-200/60 dark:hover:border-zinc-700/60 transition-all duration-200"
                  >
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-zinc-200 group-hover/item:text-neutral-950 dark:group-hover/item:text-white">
                        {skill.name}
                      </span>
                      {skill.description && (
                        <span className="text-[11px] text-neutral-400 dark:text-zinc-400 font-normal leading-tight">
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

        {/* Philosophy / Standards Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35, delay: 0.4 }}
          className="lg:col-span-1"
        >
          <BentoCard
            badge={
              <div className="flex items-center gap-1.5 font-semibold text-zinc-200">
                <Sparkles className="h-4 w-4 text-blue-400" />
                <span>Tiêu chuẩn Kỹ thuật</span>
              </div>
            }
            title="Triết lý Clean Code"
            subtitle="Những nguyên tắc luôn được tuân thủ trong từng dòng mã đóng góp."
            className="h-full justify-between bg-zinc-900 dark:bg-zinc-950 text-white border-zinc-800 shadow-lg"
          >
            <div className="mt-2 space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                <span>Type safety với cấu hình TypeScript nghiêm ngặt</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                <span>HTML ngữ nghĩa & tiêu chuẩn trợ năng WCAG 2.1 AA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                <span>Kiểm thử đơn vị và tích hợp trước khi triển khai</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                <span>REST API phi trạng thái (idempotent) & tài liệu rõ ràng</span>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-zinc-800">
              <p className="text-[11px] text-zinc-400 italic">
                "Đơn giản luôn tốt hơn phức tạp. Viết mã để con người có thể hiểu và máy tính có thể thực thi tin cậy."
              </p>
            </div>
          </BentoCard>
        </motion.div>

      </div>
    </section>
  )
}
