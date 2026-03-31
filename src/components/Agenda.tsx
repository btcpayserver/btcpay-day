import { agenda, type AgendaType } from '@/data/agenda'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'

const TYPE_LABEL: Record<AgendaType, string> = {
  registration: 'Registration',
  keynote:      'Keynote',
  panel:        'Panel',
  qa:           'Q&A',
  break:        'Break',
  networking:   'Networking',
  workshop:     'Workshop',
}

const IS_MINOR: Record<AgendaType, boolean> = {
  registration: true,
  break:        true,
  networking:   false,
  keynote:      false,
  panel:        false,
  qa:           false,
  workshop:     false,
}

export default function Agenda() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="agenda" className="py-24 px-4 sm:px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={cn('mb-12 reveal', isVisible && 'visible')}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Schedule</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground">Agenda</h2>
        </div>

        <div className="flex flex-col gap-2">
          {agenda.map((slot, i) => {
            const minor = IS_MINOR[slot.type]

            return (
              <div
                key={i}
                className={cn(
                  'flex items-center gap-4 sm:gap-6 px-5 py-4 rounded-2xl transition-colors duration-150 reveal',
                  isVisible && 'visible',
                  minor ? 'hover:bg-muted/40' : 'glass hover:border-primary/30'
                )}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-20 shrink-0 text-right">
                  <span className={cn(
                    'text-xs font-semibold tabular-nums',
                    minor ? 'text-muted-foreground/60' : 'text-muted-foreground'
                  )}>
                    {slot.time}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <p className={cn(
                    'font-display font-semibold leading-snug',
                    minor ? 'text-sm text-muted-foreground' : 'text-base text-foreground'
                  )}>
                    {slot.title}
                  </p>
                  {slot.speaker && (
                    <p className="text-xs text-muted-foreground/70 mt-0.5">{slot.speaker}</p>
                  )}
                </div>

                <span className={cn(
                  'hidden sm:block shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md',
                  minor ? 'text-muted-foreground/50' : 'text-primary/80 bg-primary/10'
                )}>
                  {TYPE_LABEL[slot.type]}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
