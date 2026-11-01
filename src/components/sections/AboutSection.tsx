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
      setLocalTime(new Intl.DateTimeFormat('vi-VN', options).format(now))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Về bản thân"
        title="Học vấn, Định hướng & Hành trình"
        subtitle="Sự kết hợp giữa kiến thức nền tảng Khoa học Máy tính vững chắc, kinh nghiệm thực hành kỹ thuật và tinh thần học hỏi không ngừng."
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
            badge="Giới thiệu bản thân"
            title="Đam mê xây dựng những hệ thống mở rộng linh hoạt."
            className="w-full justify-between"
          >
            <div className="space-y-4 text-sm sm:text-base text-neutral-600 dark:text-zinc-300 leading-relaxed font-normal">
              {candidateData.longBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 p-3 border border-zinc-200/60 dark:border-zinc-800">
                  <span className="text-xs text-neutral-400 dark:text-zinc-400 block font-medium">Học lực</span>
                  <span className="text-base sm:text-lg font-bold text-neutral-900 dark:text-zinc-100">{candidateData.education.gpa}</span>
                </div>
                <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 p-3 border border-zinc-200/60 dark:border-zinc-800">
                  <span className="text-xs text-neutral-400 dark:text-zinc-400 block font-medium">Tiếng Anh</span>
                  <span className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400">TOEIC 550</span>
                </div>
                <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 p-3 border border-zinc-200/60 dark:border-zinc-800">
                  <span className="text-xs text-neutral-400 dark:text-zinc-400 block font-medium">Lĩnh vực chính</span>
                  <span className="text-base sm:text-lg font-bold text-neutral-900 dark:text-zinc-100">Web & AI</span>
                </div>
                <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 p-3 border border-zinc-200/60 dark:border-zinc-800">
                  <span className="text-xs text-neutral-400 dark:text-zinc-400 block font-medium">Trạng thái</span>
                  <span className="text-base sm:text-lg font-bold text-neutral-900 dark:text-zinc-100">Sẵn sàng</span>
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
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-900/50">
                <GraduationCap className="h-3.5 w-3.5" />
                Học vấn
              </span>
            }
            title={candidateData.education.institution}
            subtitle={candidateData.education.degree}
            className="w-full justify-between"
          >
            <div className="mt-2 space-y-3">
              <div className="flex items-center justify-between text-xs font-medium text-neutral-700 dark:text-zinc-300 pb-2 border-b border-zinc-100 dark:border-zinc-800">
                <span>Thời gian</span>
                <span className="text-neutral-500 dark:text-zinc-400">{candidateData.education.period}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-medium text-neutral-700 dark:text-zinc-300 pb-2 border-b border-zinc-100 dark:border-zinc-800">
                <span>Trạng thái</span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">{candidateData.education.status}</span>
              </div>

              <div>
                <span className="text-xs font-semibold text-neutral-800 dark:text-zinc-200 block mb-1.5">Môn học trọng tâm:</span>
                <div className="flex flex-wrap gap-1.5">
                  {candidateData.education.relevantCourses.slice(0, 4).map((course) => (
                    <span
                      key={course}
                      className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[11px] font-medium text-neutral-700 dark:text-zinc-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-neutral-800 dark:text-zinc-200 block mb-1">Thành tích nổi bật:</span>
                <p className="text-xs text-neutral-500 dark:text-zinc-400 italic">
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
            badge="Địa điểm & Múi giờ"
            title={`${candidateData.location.city}, ${candidateData.location.country}`}
            className="w-full justify-between"
          >
            <div className="space-y-3.5">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-800">
                <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <div>
                  <span className="text-xs text-neutral-400 dark:text-zinc-400 block font-medium">Giờ hiện tại (GMT+7)</span>
                  <span className="text-base font-bold font-mono text-neutral-900 dark:text-zinc-100 tracking-tight">
                    {localTime || '14:30:00'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-zinc-400">
                <MapPin className="h-4 w-4 text-neutral-400 shrink-0" />
                <span>Hình thức làm việc: {candidateData.location.remotePreference}</span>
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
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-700 dark:text-zinc-300">
                <Compass className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                Mục tiêu Nghề nghiệp
              </span>
            }
            title="Định hướng Thực tập"
            className="w-full justify-between"
          >
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-zinc-300 leading-relaxed font-normal">
              {candidateData.careerGoal}
            </p>
            <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>Sẵn sàng gia nhập dự án ngay trong kỳ tới</span>
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
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-700 dark:text-zinc-300">
                <BookOpen className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                Đang nghiên cứu
              </span>
            }
            title={candidateData.currentlyLearning.topic}
            subtitle={candidateData.currentlyLearning.reason}
            className="w-full justify-between"
          >
            <div className="mt-2 p-3 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 text-xs text-blue-900 dark:text-blue-200">
              <strong className="block font-semibold mb-0.5">Dự án đang làm:</strong>
              <p className="text-[11px] leading-relaxed text-blue-800 dark:text-blue-300">
                {candidateData.currentlyLearning.progress}
              </p>
            </div>
          </BentoCard>
        </motion.div>

      </div>
    </section>
  )
}
