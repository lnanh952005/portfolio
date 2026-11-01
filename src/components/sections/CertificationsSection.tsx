import React from 'react'
import { motion } from 'framer-motion'
import { Award, Cloud, Code, Trophy, ExternalLink } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { certificationsData } from '../../data/portfolioData'

export const CertificationsSection: React.FC = () => {
  const getCertIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Cloud':
        return <Cloud className="h-5 w-5 text-blue-600 dark:text-blue-400" />
      case 'Code':
        return <Code className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
      case 'Trophy':
        return <Trophy className="h-5 w-5 text-amber-500 dark:text-amber-400" />
      case 'Award':
      default:
        return <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
    }
  }

  return (
    <section id="certifications" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Chứng chỉ & Giải thưởng"
        title="Chứng nhận & Thành tựu"
        subtitle="Các chứng nhận uy tín từ các tổ chức công nghệ hàng đầu và thành tích giải thuật thi đấu."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certificationsData.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className="flex"
          >
            <div className="group relative flex flex-col justify-between w-full p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700">
                    {getCertIcon(cert.icon)}
                  </div>
                  <span className="text-[11px] font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-0.5 rounded-full border border-blue-200/40 dark:border-blue-900/40">
                    {cert.badgeText}
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {cert.title}
                </h3>

                <p className="mt-2 text-xs font-medium text-neutral-500 dark:text-zinc-400">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs text-neutral-400 dark:text-zinc-400">
                <span>{cert.date}</span>
                {cert.credentialUrl && cert.credentialUrl !== '#' && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    <span>Xác minh</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
