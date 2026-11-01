import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
  AlertCircle
} from 'lucide-react'
import { Button } from '../ui/Button'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'
import { candidateData } from '../../data/portfolioData'

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleType: 'Thực tập sinh Kỹ sư Phần mềm',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(candidateData.contacts.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ và tên của bạn.'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập địa chỉ email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Vui lòng nhập địa chỉ email hợp lệ.'
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Vui lòng nhập nội dung tin nhắn ít nhất 10 ký tự.'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    // Giả lập gửi tin nhắn thành công
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        roleType: 'Thực tập sinh Kỹ sư Phần mềm',
        subject: '',
        message: ''
      })
    }, 900)
  }

  return (
    <section id="contact" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Bento Grid Contact Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Headline, Info & Direct Links (5 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-5 flex flex-col justify-between gap-6"
        >
          <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)] flex flex-col justify-between h-full">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider border border-blue-200/50 dark:border-blue-900/50 mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                Liên hệ Trực tiếp
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
                Cùng nhau Tạo dựng Sản phẩm Tuyệt vời<span className="text-blue-600">.</span>
              </h2>

              <p className="mt-4 text-sm text-neutral-600 dark:text-zinc-300 leading-relaxed font-normal">
                Mình đang tích cực tìm kiếm cơ hội thực tập <span className="font-semibold text-neutral-900 dark:text-white">Kỹ sư Phần mềm</span>, <span className="font-semibold text-neutral-900 dark:text-white">Backend</span> và <span className="font-semibold text-neutral-900 dark:text-white">Frontend</span>.
                Dù bạn có cơ hội thực tập tại công ty, dự án cộng tác hay muốn trao đổi chuyên môn, hòm thư của mình luôn sẵn sàng.
              </p>

              {/* Email One-Click Copy Box */}
              <div className="mt-6 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/80">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 dark:text-zinc-400 block mb-1">
                  Địa chỉ Email Trực tiếp
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${candidateData.contacts.email}`}
                    className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate"
                  >
                    {candidateData.contacts.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-white dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 text-neutral-700 dark:text-zinc-200 hover:bg-neutral-50 dark:hover:bg-zinc-600 transition-colors cursor-pointer shrink-0"
                    title="Sao chép vào clipboard"
                    aria-label="Sao chép email"
                  >
                    {copiedEmail ? (
                      <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4 text-neutral-600 dark:text-zinc-300" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-1.5 block animate-in fade-in">
                    ✓ Đã sao chép email vào bộ nhớ tạm!
                  </span>
                )}
              </div>

              {/* Status pill */}
              <div className="mt-4 flex items-center gap-2 text-xs text-neutral-600 dark:text-zinc-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Thời gian phản hồi: Thường trong vòng 24 giờ</span>
              </div>
            </div>

            {/* Social Link Cards */}
            <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800 grid grid-cols-2 gap-3">
              <a
                href={candidateData.contacts.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200/70 dark:border-zinc-700 text-xs font-semibold text-neutral-800 dark:text-zinc-200 transition-all duration-200 hover:-translate-y-0.5"
              >
                <GithubIcon className="h-4 w-4 text-neutral-800 dark:text-zinc-200" />
                <span>Hồ sơ GitHub</span>
              </a>
              <a
                href={candidateData.contacts.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200/70 dark:border-zinc-700 text-xs font-semibold text-neutral-800 dark:text-zinc-200 transition-all duration-200 hover:-translate-y-0.5"
              >
                <LinkedinIcon className="h-4 w-4 text-blue-600" />
                <span>Hồ sơ LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form (7 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center gap-2 font-bold text-neutral-900 dark:text-zinc-100 text-base">
                <MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>Gửi Tin Nhắn</span>
              </div>
              <span className="text-xs text-neutral-400 dark:text-zinc-400 font-normal">Các trường * là bắt buộc</span>
            </div>

            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in-95">
                <div className="h-14 w-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 border border-emerald-200/60 dark:border-emerald-800/60">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-zinc-100">Đã Nhận Tin Nhắn!</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-zinc-300 max-w-sm">
                  Cảm ơn bạn đã liên hệ. Mình đã nhận được thông điệp và sẽ phản hồi trực tiếp tới email của bạn trong thời gian sớm nhất.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6"
                >
                  Gửi Tin Nhắn Khác
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-neutral-700 dark:text-zinc-300 mb-1.5">
                      Họ và Tên *
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="VD: Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value })
                        if (errors.name) setErrors({ ...errors, name: '' })
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-neutral-900 dark:text-zinc-100 placeholder:text-neutral-400 dark:placeholder:text-zinc-500 transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 ${
                        errors.name
                          ? 'border-red-400 bg-red-50/20 dark:bg-red-950/20'
                          : 'border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-600 focus:bg-white dark:focus:bg-zinc-800'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 dark:text-zinc-300 mb-1.5">
                      Địa chỉ Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="VD: recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value })
                        if (errors.email) setErrors({ ...errors, email: '' })
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-neutral-900 dark:text-zinc-100 placeholder:text-neutral-400 dark:placeholder:text-zinc-500 transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 ${
                        errors.email
                          ? 'border-red-400 bg-red-50/20 dark:bg-red-950/20'
                          : 'border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-600 focus:bg-white dark:focus:bg-zinc-800'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Opportunity Type */}
                  <div>
                    <label htmlFor="roleType" className="block text-xs font-semibold text-neutral-700 dark:text-zinc-300 mb-1.5">
                      Vị trí / Mục đích
                    </label>
                    <select
                      id="roleType"
                      value={formData.roleType}
                      onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/50 text-xs sm:text-sm text-neutral-900 dark:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-600 focus:bg-white dark:focus:bg-zinc-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 transition-colors"
                    >
                      <option value="Thực tập sinh Kỹ sư Phần mềm">Thực tập sinh Kỹ sư Phần mềm</option>
                      <option value="Thực tập sinh Backend Developer">Thực tập sinh Backend Developer</option>
                      <option value="Thực tập sinh Frontend Developer">Thực tập sinh Frontend Developer</option>
                      <option value="Hợp tác Dự án Full-stack">Hợp tác Dự án Công nghệ</option>
                      <option value="Các trao đổi khác">Các trao đổi khác</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-neutral-700 dark:text-zinc-300 mb-1.5">
                      Tiêu đề
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="VD: Cơ hội thực tập hè 2025"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/50 text-xs sm:text-sm text-neutral-900 dark:text-zinc-100 placeholder:text-neutral-400 dark:placeholder:text-zinc-500 hover:border-zinc-300 dark:hover:border-zinc-600 focus:bg-white dark:focus:bg-zinc-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-neutral-700 dark:text-zinc-300 mb-1.5">
                    Nội dung Tin nhắn *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Chia sẻ với mình về vị trí tuyển dụng, đội ngũ hoặc dự án..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value })
                      if (errors.message) setErrors({ ...errors, message: '' })
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-neutral-900 dark:text-zinc-100 placeholder:text-neutral-400 dark:placeholder:text-zinc-500 transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 resize-none ${
                      errors.message
                        ? 'border-red-400 bg-red-50/20 dark:bg-red-950/20'
                        : 'border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-600 focus:bg-white dark:focus:bg-zinc-800'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400 dark:text-zinc-400">
                    Gửi trực tiếp vào hòm thư ứng viên
                  </span>
                  <Button
                    type="submit"
                    variant="blue"
                    size="md"
                    disabled={isSubmitting}
                    icon={<Send className="h-4 w-4" />}
                    iconPosition="right"
                  >
                    {isSubmitting ? 'Đang gửi...' : 'Gửi Tin Nhắn'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
