import { useState } from 'react'
import { Menu, X, Send } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'
import BTCPayMark from '@/components/BTCPayMark'

// TODO: Replace with your real ticket registration URL
const TICKET_URL = '#register'

const TELEGRAM_URL = 'https://t.me/+h9RyKmiXBdhhM2I0'

const NAV_LINKS = [
  { label: 'Speakers', href: '#speakers' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Location', href: '#location' },
  { label: 'Supporters', href: '#supporters' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40 transition-all duration-300" style={{ transform: 'translateZ(0)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-6">
          <a href="#home" aria-label="BTCPay Day home" className="flex items-center gap-2.5 shrink-0 group">
            <BTCPayMark className="h-8 w-auto transition-transform duration-300 group-hover:scale-105" />
            <span className="font-display leading-[1.1]">
              <span className="block font-bold text-sm tracking-tight text-foreground">BTCPay</span>
              <span className="block text-[10px] font-bold tracking-[0.14em] uppercase text-primary">Day</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 ml-auto">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join BTCPay Day on Telegram"
              className="flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150"
            >
              <Send size={15} />
            </a>
            <ThemeToggle />
            <a
              href={TICKET_URL}
              className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-150 ml-1"
            >
              Register Now
            </a>
            <button
              type="button"
              className="flex md:hidden items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150 ml-1"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col pt-20 px-8 pb-10 md:hidden">
          <nav className="flex flex-col gap-2 flex-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-4 text-3xl font-display font-bold text-foreground/80 hover:text-foreground border-b border-border/40 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={TICKET_URL}
            onClick={() => setMobileOpen(false)}
            className="mt-8 flex items-center justify-center py-4 rounded-2xl text-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Register Now
          </a>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm text-muted-foreground border border-border/60 hover:bg-muted transition-colors"
          >
            <Send size={14} />
            Join Telegram Community
          </a>
        </div>
      )}
    </>
  )
}
