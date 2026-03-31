import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'

const RIGA_VIDEO_ID = 'JWZPN-SAO3U'

const STATS = [
  { value: '3+', label: 'Past Editions' },
  { value: '200+', label: 'Attendees' },
  { value: '10+', label: 'Speakers' },
  { value: '1 Day', label: 'Packed Schedule' },
]

export default function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={cn('grid md:grid-cols-2 gap-12 lg:gap-20 items-center reveal', isVisible && 'visible')}
        >
          {/* Left: text + stats */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">About the event</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-6 leading-tight">
              What is BTCPay Day?
            </h2>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed mb-10">
              <p>
                Once a year, BTCPay Server contributors and community gather to celebrate achievements, network, and discuss the project's future.
              </p>
              <p>
                This year, brought to you by the{' '}
                <a href="https://btcpayfoundation.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-2">
                  BTCPay Foundation
                </a>{' '}
                and{' '}
                <a href="https://btcprague.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-2">
                  BTC Prague
                </a>
                , promises to be the most exciting yet: keynotes, spicy panels, and interactive Q&A sessions featuring surprise guests!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat) => (
                <div key={stat.label} className="glass rounded-xl px-4 py-5">
                  <p className="font-display font-bold text-3xl text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: video */}
          <div className="glass rounded-2xl overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${RIGA_VIDEO_ID}?start=6423`}
                title="BTCPay Day Riga 2024"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="px-4 py-3 border-t border-border/40">
              <p className="text-xs text-muted-foreground font-medium">BTCPay Day Riga 2024 · Previous edition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
