import React from 'react'
import { cn } from '../../lib/utils'

export interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: React.ReactNode
  title?: string
  subtitle?: string
  footerLink?: {
    label: string
    href?: string
    onClick?: () => void
  }
  children?: React.ReactNode
  className?: string
  innerClassName?: string
  hoverEffect?: boolean
}

export const BentoCard: React.FC<BentoCardProps> = ({
  badge,
  title,
  subtitle,
  footerLink,
  children,
  className,
  innerClassName,
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-8',
        'bg-white dark:bg-zinc-900',
        'border border-zinc-200/90 dark:border-zinc-800',
        'shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)]',
        hoverEffect &&
          'transition-all duration-300 ease-out hover:-translate-y-1 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.4)]',
        className
      )}
      {...props}
    >
      <div className={cn('flex flex-col', innerClassName)}>
        {/* Card Header Badge */}
        {badge && (
          <div className="mb-4 flex items-center gap-2">
            {typeof badge === 'string' ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100/90 dark:bg-zinc-800 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50">
                {badge}
              </span>
            ) : (
              badge
            )}
          </div>
        )}

        {/* Card Title & Subtitle */}
        {title && (
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-zinc-100 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="mt-2 text-sm text-neutral-500 dark:text-zinc-400 leading-relaxed font-normal">
            {subtitle}
          </p>
        )}

        {/* Content */}
        {children && <div className={cn(title || badge ? 'mt-4' : '')}>{children}</div>}
      </div>

      {/* Card Footer Link */}
      {footerLink && (
        <div className="mt-6 pt-2">
          {footerLink.onClick ? (
            <button
              type="button"
              onClick={footerLink.onClick}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group/link transition-colors cursor-pointer"
            >
              <span>{footerLink.label}</span>
              <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
            </button>
          ) : (
            <a
              href={footerLink.href || '#'}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group/link transition-colors"
            >
              <span>{footerLink.label}</span>
              <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
            </a>
          )}
        </div>
      )}
    </div>
  )
}
