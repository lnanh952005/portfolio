import React from 'react'
import { cn } from '../../lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'blue' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'left',
      className,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      primary:
        'bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm border border-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-950',
      secondary:
        'bg-zinc-100 text-zinc-900 hover:bg-zinc-200/80 border border-zinc-200/60 focus-visible:ring-2 focus-visible:ring-zinc-400',
      outline:
        'bg-white text-zinc-800 border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 focus-visible:ring-2 focus-visible:ring-zinc-400 shadow-2xs',
      blue:
        'bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-500/20 focus-visible:ring-2 focus-visible:ring-blue-600',
      ghost:
        'bg-transparent text-zinc-700 hover:bg-zinc-100/80 focus-visible:ring-2 focus-visible:ring-zinc-400'
    }

    const sizeStyles = {
      sm: 'h-9 px-3.5 text-xs rounded-xl font-medium gap-1.5',
      md: 'h-11 px-5 text-sm rounded-2xl font-medium gap-2',
      lg: 'h-13 px-6 text-base rounded-2xl font-semibold gap-2.5'
    }

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none active:scale-[0.98]',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'

