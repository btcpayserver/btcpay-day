import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const THEME_COLORS: Record<Theme, string> = {
  dark:  '#0d1219',
  light: '#f7f8fa',
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  try {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored
  } catch { /* storage blocked — fall through to system preference */ }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.style.colorScheme = theme
  try {
    localStorage.setItem('theme', theme)
  } catch { /* storage blocked — theme works for this session only */ }
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
