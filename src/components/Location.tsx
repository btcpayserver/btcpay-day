import { MapPin, Clock, Calendar, ExternalLink } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'
import { EVENT } from '@/data/event'

// OpenStreetMap embed for Hotel Duo Praha (approx. coords: 50.1039, 14.4697)
const OSM_EMBED = 'https://www.openstreetmap.org/export/embed.html?bbox=14.449%2C50.094%2C14.490%2C50.114&layer=mapnik&marker=50.1039%2C14.4697'

export default function Location() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="location" className="py-24 px-4 sm:px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={cn('mb-12 reveal', isVisible && 'visible')}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Venue</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground">Location</h2>
        </div>

        <div className={cn('grid md:grid-cols-2 gap-6 reveal', isVisible && 'visible')} style={{ transitionDelay: '100ms' }}>
          {/* Venue details card */}
          <div className="glass rounded-2xl p-8 flex flex-col gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl text-foreground">{EVENT.venue}</h3>
              <p className="text-muted-foreground mt-1">{EVENT.address}</p>
              <p className="text-muted-foreground text-sm">{EVENT.city}</p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-foreground">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                  <Calendar size={14} className="text-primary" />
                </span>
                {EVENT.date}
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                  <Clock size={14} className="text-primary" />
                </span>
                Doors open at {EVENT.time}
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                  <MapPin size={14} className="text-primary" />
                </span>
                {EVENT.city}
              </div>
            </div>

            <a
              href={EVENT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors duration-150"
            >
              <ExternalLink size={13} />
              Get Directions
            </a>
          </div>

          {/* Map */}
          <div className="glass rounded-2xl overflow-hidden h-[300px] md:h-auto min-h-[280px]">
            <iframe
              src={OSM_EMBED}
              title="Hotel Duo Praha location on OpenStreetMap"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
