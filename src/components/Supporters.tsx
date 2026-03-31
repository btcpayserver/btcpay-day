import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'
import SupporterSprite from '@/components/SupporterSprite'

interface Supporter {
  name: string
  url: string
  svgId: string
  viewBox: string
  fillCurrentColor?: boolean
}

// Add entries here and a matching <symbol> in SupporterSprite.tsx
const SUPPORTERS: Supporter[] = [
  { name: 'BTCPay Foundation', url: 'https://btcpayfoundation.org',    svgId: 'supporter-btcpay-foundation', viewBox: '3.5 0 62 107.758' },
  { name: 'BTC Prague',        url: 'https://btcprague.com',           svgId: 'supporter-btcprague',         viewBox: '0 0 126 44',       fillCurrentColor: true },
  { name: 'Spiral',            url: 'https://spiral.xyz/',             svgId: 'supporter-spiral',            viewBox: '0 0 629 629' },
  { name: 'OpenSats',          url: 'https://opensats.org/',           svgId: 'supporter-opensats',          viewBox: '0 0 5220 720' },
  { name: 'Tether',            url: 'https://tether.to/',              svgId: 'supporter-tether',            viewBox: '0 0 111 90' },
  { name: 'HRF',               url: 'https://hrf.org/',                svgId: 'supporter-hrf',               viewBox: '0 0 3000 987.6',   fillCurrentColor: true },
  { name: 'LunaNode',          url: 'https://www.lunanode.com/',       svgId: 'supporter-lunanode',          viewBox: '0 0 194.219 193.977' },
  { name: 'Wallet of Satoshi', url: 'https://walletofsatoshi.com/',    svgId: 'supporter-walletofsatoshi',   viewBox: '0 0 313.1 76.32' },
  { name: 'Coincards',         url: 'https://coincards.com/',          svgId: 'supporter-coincards',         viewBox: '0 0 64 32' },
  { name: 'IVPN',              url: 'https://www.ivpn.net/',           svgId: 'supporter-ivpn',              viewBox: '0 0 84 29' },
  { name: 'Unbank',            url: 'https://www.unbank.com/',         svgId: 'supporter-unbank',            viewBox: '0 0 766 132',      fillCurrentColor: true },
]

export default function Supporters() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="supporters" className="py-24 px-4 sm:px-6">
      <SupporterSprite />
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={cn('mb-12 reveal', isVisible && 'visible')}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Sponsors</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground">Brought to you by</h2>
        </div>

        <div className={cn('grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 reveal', isVisible && 'visible')} style={{ transitionDelay: '80ms' }}>
          {SUPPORTERS.map((s, i) => (
            <a
              key={s.svgId}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              title={s.name}
              className="glass rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:-translate-y-1 hover:border-primary/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <svg
                viewBox={s.viewBox}
                className="max-h-10 w-auto max-w-[120px]"
                style={s.fillCurrentColor ? { fill: 'currentColor' } : undefined}
              >
                <use href={`#${s.svgId}`} />
              </svg>
              <span className="text-xs font-medium text-muted-foreground text-center leading-tight">{s.name}</span>
            </a>
          ))}
        </div>

        <p className={cn('text-center text-sm text-muted-foreground mt-10 reveal', isVisible && 'visible')} style={{ transitionDelay: '500ms' }}>
          Interested in supporting BTCPay Day?{' '}
          <a href="mailto:hello@btcpayserver.org" className="text-primary hover:underline underline-offset-2">
            Get in touch
          </a>
        </p>
      </div>
    </section>
  )
}
