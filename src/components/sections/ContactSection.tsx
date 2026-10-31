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
    roleType: 'Software Engineering Intern',
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
      newErrors.name = 'Please provide your name.'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters.'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        roleType: 'Software Engineering Intern',
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
          <div className="rounded-3xl bg-white border border-zinc-200/90 p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider border border-blue-200/50 mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                Get in Touch
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                Let's Build Something Together<span className="text-blue-600">.</span>
              </h2>

              <p className="mt-4 text-sm text-neutral-600 leading-relaxed font-normal">
                I am actively seeking <span className="font-semibold text-neutral-900">Software Engineering</span>, <span className="font-semibold text-neutral-900">Backend</span>, and <span className="font-semibold text-neutral-900">Frontend</span> internship opportunities.
                Whether you have an opening on your team, an open source project, or simply want to chat about tech, my inbox is always open.
              </p>

              {/* Email One-Click Copy Box */}
              <div className="mt-6 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  Direct Email Address
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${candidateData.contacts.email}`}
                    className="text-xs sm:text-sm font-semibold text-neutral-900 hover:text-blue-600 transition-colors truncate"
                  >
                    {candidateData.contacts.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-white border border-zinc-200 text-neutral-700 hover:bg-neutral-50 transition-colors cursor-pointer shrink-0"
                    title="Copy to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="h-4 w-4 text-emerald-600" />
                    ) : (
                      <Copy className="h-4 w-4 text-neutral-600" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <span className="text-[11px] text-emerald-600 font-medium mt-1.5 block animate-in fade-in">
                    ✓ Email copied to clipboard!
                  </span>
                )}
              </div>

              {/* Status pill */}
              <div className="mt-4 flex items-center gap-2 text-xs text-neutral-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Response time: Usually within 24 hours</span>
              </div>
            </div>

            {/* Social Link Cards */}
            <div className="mt-6 pt-5 border-t border-zinc-100 grid grid-cols-2 gap-3">
              <a
                href={candidateData.contacts.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/70 text-xs font-semibold text-neutral-800 transition-all duration-200 hover:-translate-y-0.5"
              >
                <GithubIcon className="h-4 w-4 text-neutral-800" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={candidateData.contacts.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/70 text-xs font-semibold text-neutral-800 transition-all duration-200 hover:-translate-y-0.5"
              >
                <LinkedinIcon className="h-4 w-4 text-blue-600" />
                <span>LinkedIn Profile</span>
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
          <div className="rounded-3xl bg-white border border-zinc-200/90 p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-100">
              <div className="flex items-center gap-2 font-bold text-neutral-900 text-base">
                <MessageSquare className="h-4 w-4 text-blue-600" />
                <span>Send a Message</span>
              </div>
              <span className="text-xs text-neutral-400 font-normal">Fields with * are required</span>
            </div>

            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in-95">
                <div className="h-14 w-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-200/60">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Message Received!</h3>
                <p className="mt-2 text-sm text-neutral-600 max-w-sm">
                  Thank you for reaching out. I've received your note and will reply directly to your email soon.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value })
                        if (errors.name) setErrors({ ...errors, name: '' })
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 ${
                        errors.name ? 'border-red-400 bg-red-50/20' : 'border-zinc-200 bg-zinc-50/50 hover:border-zinc-300 focus:bg-white'
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
                    <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value })
                        if (errors.email) setErrors({ ...errors, email: '' })
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-zinc-200 bg-zinc-50/50 hover:border-zinc-300 focus:bg-white'
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
                    <label htmlFor="roleType" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Role / Purpose
                    </label>
                    <select
                      id="roleType"
                      value={formData.roleType}
                      onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-xs sm:text-sm text-neutral-900 hover:border-zinc-300 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 transition-colors"
                    >
                      <option value="Software Engineering Intern">Software Engineering Intern</option>
                      <option value="Backend Developer Intern">Backend Developer Intern</option>
                      <option value="Frontend Developer Intern">Frontend Developer Intern</option>
                      <option value="Fullstack Project Collaboration">Project Collaboration</option>
                      <option value="Other Inquiries">Other Inquiries</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="e.g. Summer 2025 Internship Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 hover:border-zinc-300 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about the role, team, or opportunity..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value })
                      if (errors.message) setErrors({ ...errors, message: '' })
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 resize-none ${
                      errors.message ? 'border-red-400 bg-red-50/20' : 'border-zinc-200 bg-zinc-50/50 hover:border-zinc-300 focus:bg-white'
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
                  <span className="text-[11px] text-neutral-400">
                    Direct delivery to candidate inbox
                  </span>
                  <Button
                    type="submit"
                    variant="blue"
                    size="md"
                    disabled={isSubmitting}
                    icon={<Send className="h-4 w-4" />}
                    iconPosition="right"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
