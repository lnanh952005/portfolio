import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { cn } from '../../lib/utils'

interface ThemeToggleProps {
  className?: string
  size?: 'sm' | 'md'
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className, size = 'md' }) => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
      title={isDark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
      className={cn(
        'relative inline-flex items-center justify-center rounded-xl transition-all duration-200 cursor-pointer',
        'border border-zinc-200/80 dark:border-zinc-700/80',
        'bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-200',
        'hover:bg-zinc-200/70 dark:hover:bg-zinc-700/70 hover:text-zinc-900 dark:hover:text-white',
        'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500/50',
        size === 'sm' ? 'h-8 w-8 p-1.5' : 'h-9 w-9 p-2',
        className
      )}
    >
      <span className="relative flex items-center justify-center">
        {isDark ? (
          <Sun className="h-4 w-4 text-amber-400 transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Moon className="h-4 w-4 text-neutral-700 transition-transform duration-300 rotate-0 scale-100" />
        )}
      </span>
    </button>
  )
}
