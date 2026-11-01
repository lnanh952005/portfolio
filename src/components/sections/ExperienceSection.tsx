import React from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  FlaskConical,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles
} from 'lucide-react'
import { BentoCard } from '../ui/BentoCard'
import { SectionHeader } from '../ui/SectionHeader'
import { experienceData, candidateData } from '../../data/portfolioData'

export const ExperienceSection: React.FC = () => {
  const getExperienceIcon = (type: string) => {
    switch (type) {
      case 'Club & Community':
        return <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
      case 'University Lab':
        return <FlaskConical className="h-4 w-4 text-purple-600 dark:text-purple-400" />
      case 'Academic Teaching':
        return <GraduationCap className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
      default:
        return <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'Club & Community':
        return 'CLB & Cộng đồng'
      case 'University Lab':
        return 'Phòng Lab Nghiên cứu'
      case 'Academic Teaching':
        return 'Trợ giảng Học thuật'
      default:
        return type
    }
  }

  return (
    <section id="experience" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Hành trình Học tập & Thực hành"
        title="Kinh nghiệm & Hoạt động"
        subtitle="Các vai trò kỹ thuật thực tế, nghiên cứu lab sinh viên, trợ giảng và tổ chức cộng đồng công nghệ."
      />

      {/* Bento Grid layout for Experience */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
        
        {experienceData.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: idx * 0.1 }}
            className="md:col-span-12 lg:col-span-4 flex"
          >
            <BentoCard
              badge={
                <div className="flex items-center gap-1.5 font-semibold text-neutral-800 dark:text-zinc-200">
                  {getExperienceIcon(exp.type)}
                  <span>{getTypeLabel(exp.type)}</span>
                </div>
              }
              title={exp.role}
              subtitle={exp.organization}
              className="w-full justify-between"
            >
              <div>
                {/* Meta details */}
                <div className="mt-1 flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-neutral-500 dark:text-zinc-400 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-neutral-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-neutral-400" />
                    {exp.location}
                  </span>
                </div>

                <p className="mt-3 text-xs text-neutral-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mt-4 space-y-2">
                  <h4 className="text-[11px] font-bold text-neutral-900 dark:text-zinc-200 uppercase tracking-wider">
                    Kết quả then chốt:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-zinc-400">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies used */}
              <div className="mt-6 pt-3 border-t border-zinc-100/80 dark:border-zinc-800/80 flex flex-wrap gap-1">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[10px] font-medium text-neutral-600 dark:text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </BentoCard>
          </motion.div>
        ))}

        {/* Academic Foundation Summary Card spanning 12 cols */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35, delay: 0.3 }}
          className="md:col-span-12"
        >
          <div className="rounded-3xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                <GraduationCap className="h-4 w-4" />
                Thành tích Học thuật Xuất sắc
              </span>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-zinc-100">
                {candidateData.education.institution} • {candidateData.education.degree}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-zinc-300 leading-relaxed font-normal">
                Chương trình đào tạo tại {candidateData.education.institution} trang bị nền tảng giải thuật vững vàng, phát triển ứng dụng Web toàn diện và các mô hình Trí tuệ Nhân tạo thực tế (Thị giác máy tính & Xử lý ngôn ngữ tự nhiên).
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <span className="text-xs text-neutral-400 dark:text-zinc-400 block font-medium">Niên khóa</span>
                <span className="text-sm font-bold text-neutral-800 dark:text-zinc-200">{candidateData.education.period}</span>
              </div>
              <div className="h-10 w-px bg-zinc-200 dark:bg-zinc-800 hidden sm:block"></div>
              <div className="px-4 py-2 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-2xs text-xs font-semibold text-neutral-800 dark:text-zinc-200">
                Trạng thái: <span className="text-blue-600 dark:text-blue-400 font-bold">{candidateData.status.label}</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
