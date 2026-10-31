import React from 'react'
import { cn } from '../../lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'neutral' | 'blue' | 'success' | 'outline'
  size?: 'sm' | 'md'
  dot?: boolean
  dotColor?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  dot = false,
  dotColor,
  className,
  ...props
}) => {
  const variantStyles = {
    neutral: 'bg-zinc-100 text-zinc-700 border-zinc-200/60',
    default: 'bg-neutral-900 text-white border-transparent',
    blue: 'bg-blue-50 text-blue-700 border-blue-200/60',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    outline: 'bg-transparent text-zinc-600 border-zinc-200 hover:border-zinc-300'
  }

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 font-medium',
    md: 'text-xs px-3 py-1 font-medium'
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            'inline-block h-2 w-2 rounded-full',
            dotColor || (variant === 'success' ? 'bg-emerald-500' : 'bg-blue-500')
          )}
        />
      )}
      {children}
    </span>
  )
}

