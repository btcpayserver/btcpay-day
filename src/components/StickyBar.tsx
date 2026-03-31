import { useEffect, useState } from 'react'
import { EVENT } from '@/data/event'

export default function StickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('home')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  if (!visible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-40 animate-slide-down">
      <div className="bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <span className="text-sm font-medium text-foreground hidden sm:block">
            BTCPay Day ·{' '}
            <span className="text-muted-foreground">Prague · {EVENT.date} · {EVENT.time}</span>
          </span>
          <span className="text-sm font-medium text-foreground sm:hidden">BTCPay Day Prague 2026</span>
          <a
            href={EVENT.ticketUrl}
            className="shrink-0 flex items-center justify-center px-5 py-1.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-150"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  )
}
