import { ExternalLink } from 'lucide-react'
import { speakers, type Speaker } from '@/data/speakers'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'

/** Simple X/Twitter icon */
function XIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  )
}

/** Placeholder avatar with initials when no photo is provided */
function Avatar({ speaker }: { speaker: Speaker }) {
  if (speaker.photo) {
    return (
      <img
        src={speaker.photo}
        alt={speaker.name}
        className="w-20 h-20 rounded-full object-cover ring-2 ring-border"
      />
    )
  }
  const initials = speaker.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
  return (
    <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center ring-2 ring-border shrink-0">
      <span className="font-display font-bold text-xl text-muted-foreground">{initials}</span>
    </div>
  )
}

function SpeakerCard({ speaker, index }: { speaker: Speaker; index: number }) {
  return (
    <div
      className={cn(
        'glass rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-200',
        'card-enter',
        `card-enter-${Math.min(index + 1, 6)}`
      )}
    >
      <div className="flex items-start gap-4">
        <Avatar speaker={speaker} />
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-base text-foreground leading-snug">{speaker.name}</h3>
          <p className="text-sm text-muted-foreground mt-0.5">{speaker.title}</p>
        </div>
      </div>

      <div className="flex-1">
        <p className="text-sm text-foreground font-medium leading-snug">{speaker.topic}</p>
        {speaker.timeSlot && (
          <span className="inline-block mt-2 text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
            {speaker.timeSlot}
          </span>
        )}
      </div>

      {(speaker.xHandle || speaker.website) && (
        <div className="flex items-center gap-3 pt-1 border-t border-border/60">
          {speaker.xHandle && (
            <a
              href={`https://x.com/${speaker.xHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${speaker.name} on X`}
              className="text-muted-foreground hover:text-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              <XIcon size={14} />
            </a>
          )}
          {speaker.website && (
            <a
              href={speaker.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${speaker.name}'s website`}
              className="text-muted-foreground hover:text-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default function Speakers() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="speakers" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={cn('mb-12 reveal', isVisible && 'visible')}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Confirmed speakers</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground">Speakers</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {speakers.map((speaker, i) => (
            <SpeakerCard key={`${speaker.name}-${i}`} speaker={speaker} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
