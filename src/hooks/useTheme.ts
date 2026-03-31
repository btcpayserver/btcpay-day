import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const THEME_COLORS: Record<Theme, string> = {
  dark:  '#0d1219',
  light: '#f7f8fa',
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.style.colorScheme = theme
  localStorage.setItem('theme', theme)
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', THEME_COLORS[theme])
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  // Enable smooth transitions only after first mount, not during initial paint
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      document.documentElement.classList.add('transitions-ready')
    })
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggle }
}
