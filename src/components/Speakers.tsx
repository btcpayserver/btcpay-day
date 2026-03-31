import { speakers, type Speaker } from '@/data/speakers'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'

function Avatar({ speaker }: { speaker: Speaker }) {
  if (speaker.photo) {
    return <img src={speaker.photo} alt={speaker.name} className="w-12 h-12 rounded-full object-cover shrink-0" />
  }
  const initials = speaker.name.split(' ').map((n) => n[0]).slice(0, 2).join('')
  return (
    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
      <span className="font-display font-bold text-sm text-muted-foreground">{initials}</span>
    </div>
  )
}

function SpeakerCard({ speaker, index }: { speaker: Speaker; index: number }) {
  const content = (
    <div className={cn(
      'glass rounded-2xl px-4 py-3 flex items-center gap-3 hover:-translate-y-0.5 transition-transform duration-200',
      'card-enter', `card-enter-${Math.min(index + 1, 6)}`
    )}>
      <Avatar speaker={speaker} />
      <div className="flex-1 min-w-0">
        <p className="font-display font-semibold text-sm text-foreground leading-snug truncate">{speaker.name}</p>
        <p className="text-xs text-muted-foreground truncate">{speaker.title}</p>
      </div>
    </div>
  )

  if (speaker.xHandle) {
    return (
      <a href={`https://x.com/${speaker.xHandle}`} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    )
  }
  return content
}

export default function Speakers() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="speakers" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={cn('mb-12 reveal', isVisible && 'visible')}>
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Confirmed speakers</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground">Speakers</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {speakers.map((speaker, i) => (
            <SpeakerCard key={`${speaker.name}-${i}`} speaker={speaker} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
