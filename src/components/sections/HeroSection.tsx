import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, FileDown, Mail, MapPin, Terminal, CheckCircle2 } from 'lucide-react'
import { BentoCard } from '../ui/BentoCard'
import { Button } from '../ui/Button'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'
import { candidateData } from '../../data/portfolioData'

interface HeroSectionProps {
  onOpenCvModal: () => void
}

const FULL_TEXT = 'Xin chào, mình là Nhật Anh.'

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCvModal }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (!isDeleting && displayedText === FULL_TEXT) {
      // Dừng lại sau khi gõ xong
      timer = setTimeout(() => {
        setIsDeleting(true)
      }, 2800)
    } else if (isDeleting && displayedText === '') {
      // Nghỉ ngắn trước khi bắt đầu chu kỳ mới
      timer = setTimeout(() => {
        setIsDeleting(false)
      }, 300)
    } else if (isDeleting) {
      // Xóa lùi nhanh
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1))
      }, 20)
    } else {
      // Gõ từng ký tự mượt mà
      timer = setTimeout(() => {
        setDisplayedText((prev) => FULL_TEXT.slice(0, prev.length + 1))
      }, 50)
    }

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting])

  const prefix = displayedText.slice(0, 18)
  const name = displayedText.length > 18 ? displayedText.slice(18, 26) : ''
  const dot = displayedText.length > 26 ? displayedText.slice(26, 27) : ''

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
            badge="👋 Xin chào"
            className="w-full justify-between"
          >
            <div>
              <h1
                aria-label="Xin chào, mình là Nhật Anh."
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15] relative"
              >
                {/* Giữ chỗ vô hình để cố định khung & chống giật layout */}
                <span className="invisible select-none" aria-hidden="true">
                  Xin chào, mình là <span className="text-neutral-900 dark:text-white">Nhật Anh</span>
                  <span className="text-blue-600">.</span>
                </span>

                {/* Chữ hiển thị hiệu ứng typewriter */}
                <span className="absolute left-0 top-0 w-full">
                  <span>{prefix}</span>
                  {name && <span className="text-neutral-900 dark:text-white">{name}</span>}
                  {dot && <span className="text-blue-600">{dot}</span>}
                  <span
                    className="inline-block w-[3px] h-[0.88em] bg-blue-600 dark:bg-blue-500 ml-1.5 translate-y-[2px] animate-pulse"
                    aria-hidden="true"
                  />
                </span>
              </h1>

              <p className="mt-3 text-lg sm:text-xl font-medium text-neutral-800 dark:text-zinc-200">
                {candidateData.headline}
              </p>

              <p className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-zinc-400 max-w-2xl leading-relaxed font-normal">
                Sinh viên <span className="font-semibold text-neutral-900 dark:text-zinc-100">Khoa học Máy tính</span> tại Đại học Cần Thơ, đam mê phát triển Web hiện đại kết hợp các mô hình Trí tuệ Nhân tạo (Thị giác máy tính & Xử lý ngôn ngữ tự nhiên). Sẵn sàng cho cơ hội thực tập và làm việc thực tế.
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
                  Khám phá Dự án
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  icon={<FileDown className="h-4 w-4" />}
                  onClick={onOpenCvModal}
                >
                  Tải CV
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
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
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
              <div className="group/avatar relative mb-4 cursor-pointer" onClick={scrollToAbout}>
                <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-3xl overflow-hidden border-2 border-zinc-200/80 dark:border-zinc-700 shadow-md bg-neutral-100 dark:bg-zinc-800 [isolation:isolate] transform-gpu">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
                    alt={candidateData.name}
                    className="h-full w-full object-cover transition-all duration-300 ease-out group-hover/avatar:scale-105"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-2xl shadow-sm border-2 border-white dark:border-zinc-900 transition-transform duration-300 group-hover/avatar:scale-105">
                  <Terminal className="h-4 w-4" />
                </div>
              </div>

              <h2 className="text-lg font-bold text-neutral-900 dark:text-zinc-100">{candidateData.name}</h2>
              <p className="text-xs text-neutral-500 dark:text-zinc-400 mt-0.5">{candidateData.education.institution}</p>

              {/* Status details */}
              <div className="mt-4 w-full bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-3 border border-zinc-200/70 dark:border-zinc-800 text-left">
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-700 dark:text-zinc-300">
                  <MapPin className="h-3.5 w-3.5 text-neutral-400 shrink-0" />
                  <span>{candidateData.location.city}, {candidateData.location.country}</span>
                </div>
                <p className="mt-1 text-[11px] text-neutral-500 dark:text-zinc-400 leading-tight">
                  {candidateData.status.details}
                </p>
              </div>
            </div>

            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={scrollToAbout}
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1 transition-colors cursor-pointer"
              >
                Xem tiểu sử chi tiết →
              </button>
            </div>
          </BentoCard>
        </motion.div>

        {/* Highlights Row: 3 Bento Cards */}

        {/* Card 1: Target Roles & Focus (Col 4) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-4 flex"
        >
          <BentoCard
            badge="Vị trí Mục tiêu"
            title="Kỹ thuật Phần mềm"
            subtitle="Tập trung vào kiến trúc rõ ràng, API an toàn kiểu dữ liệu và hạ tầng mở rộng."
            className="w-full justify-between"
            footerLink={{
              label: 'Xem tất cả kỹ năng',
              onClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <div className="space-y-2.5 mt-2">
              {candidateData.targetRoles.map((role) => (
                <div
                  key={role}
                  className="flex items-center gap-2 text-xs font-medium text-neutral-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800/50 px-3 py-2 rounded-xl border border-zinc-200/60 dark:border-zinc-800"
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
            badge="Công nghệ Cốt lõi"
            title="Ngăn xếp Kỹ thuật"
            subtitle="Các ngôn ngữ và thư viện hiện đại sẵn sàng cho production."
            className="w-full justify-between"
            footerLink={{
              label: 'Khám phá các dự án',
              onClick: scrollToProjects
            }}
          >
            <div className="grid grid-cols-2 gap-2 mt-2">
              {['Python', 'React 19', 'FastAPI', 'PyTorch / CV', 'NLP', 'PostgreSQL'].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 text-xs font-medium text-neutral-800 dark:text-zinc-200"
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
            badge="Liên hệ Trực tiếp"
            title="Kết nối cùng mình"
            subtitle="Trao đổi về cơ hội thực tập hoặc hợp tác phát triển mã nguồn mở."
            className="w-full justify-between"
            footerLink={{
              label: 'Gửi tin nhắn trực tiếp',
              onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <div className="grid grid-cols-2 gap-2.5 mt-2">
              <a
                href={candidateData.contacts.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/80 text-xs font-medium text-neutral-800 dark:text-zinc-200 transition-colors"
              >
                <GithubIcon className="h-4 w-4 text-neutral-700 dark:text-zinc-300" />
                <span>GitHub</span>
              </a>
              <a
                href={candidateData.contacts.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/80 text-xs font-medium text-neutral-800 dark:text-zinc-200 transition-colors"
              >
                <LinkedinIcon className="h-4 w-4 text-blue-600" />
                <span>LinkedIn</span>
              </a>
              <button
                type="button"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="col-span-2 flex items-center justify-between px-3 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/80 text-xs font-medium text-neutral-800 dark:text-zinc-200 transition-colors cursor-pointer text-left"
              >
                <div className="flex items-center gap-2 truncate">
                  <Mail className="h-4 w-4 text-neutral-600 dark:text-zinc-400 shrink-0" />
                  <span className="truncate">{candidateData.contacts.email}</span>
                </div>
                <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 shrink-0 ml-2">Liên hệ ↓</span>
              </button>
            </div>
          </BentoCard>
        </motion.div>

      </div>
    </section>
  )
}
