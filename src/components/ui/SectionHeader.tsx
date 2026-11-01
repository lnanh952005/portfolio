import React from 'react'
import { cn } from '../../lib/utils'

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'left',
  className
}) => {
  return (
    <div
      className={cn(
        'mb-8 sm:mb-12 flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {badge && (
        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-900/50">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-zinc-100">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-neutral-500 dark:text-zinc-400 max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
