import { Send } from 'lucide-react'
import BTCPayMark from '@/components/BTCPayMark'

const LINKS = [
  { label: 'btcpayserver.org', href: 'https://btcpayserver.org' },
  { label: 'GitHub', href: 'https://github.com/btcpayserver/btcpay-day' },
  { label: 'X / Twitter', href: 'https://x.com/btcpayserver' },
  { label: 'Telegram', href: 'https://t.me/+h9RyKmiXBdhhM2I0', icon: <Send size={12} /> },
]

export default function Footer() {
  return (
    <footer className="border-t border-border mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <BTCPayMark className="h-7 w-auto opacity-80" />
            <span className="font-display font-bold text-sm text-foreground">BTCPay Day</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-muted-foreground">2026 BTCPay Foundation</p>
        </div>
      </div>
    </footer>
  )
}
