import { EVENT } from '@/data/event'

// Check once at module load — user must reload to pick up system-level changes,
// which is acceptable. Avoids a hook + subscriber just for a background video.
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 min-h-screen flex flex-col justify-center">

      {/* Solid dark base — always rendered so YouTube error UI never bleeds through */}
      <div className="absolute inset-0 z-0" style={{ background: 'hsl(216 28% 7%)' }} />

      {/* Video background — skipped entirely when OS reduces motion */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div style={{
            position: 'absolute',
            width: 'max(100%, 177.78vh)',
            height: 'max(100%, 56.25vw)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
            <iframe
              src={`https://www.youtube.com/embed/${EVENT.youtubeHeroId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${EVENT.youtubeHeroId}&playsinline=1`}
              title="BTCPay Day Prague background"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              className="w-full h-full"
              style={{ pointerEvents: 'none' }}
            />
          </div>
          {/* Dark overlay — heavy enough for text legibility at all video frames */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,15,6,0.68), rgba(0,10,4,0.78))' }} />
        </div>
      )}

      {/* Static gradient shown when motion is reduced (sits on top of dark base) */}
      {prefersReducedMotion && (
        <div className="absolute inset-0 z-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 30%, hsl(110 48% 14% / 0.7) 0%, transparent 70%)',
        }} />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center py-20 lg:py-28">

          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/50 bg-black/40 backdrop-blur-md mb-8">
            <span className="text-sm font-bold tracking-wide text-white">
              {EVENT.date} · {EVENT.time} · {EVENT.venue} · Prague
            </span>
          </div>

          <h1
            className="font-display font-bold uppercase leading-none tracking-tight text-white mb-10"
            style={{ fontSize: 'clamp(3rem, 9vw, 7rem)', textShadow: '0 2px 24px rgba(0,0,0,0.5)' }}
          >
            BTCPay Day<br />
            <span className="text-czech">Prague</span>
            {' '}2026
          </h1>

          <div className="flex items-center gap-4">
            <a
              href={EVENT.ticketUrl}
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.98] transition-all duration-150"
            >
              Register
            </a>
            <a
              href="#location"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl text-sm font-semibold border border-white/40 text-white hover:bg-white/10 active:scale-[0.98] transition-all duration-150"
            >
              Location
            </a>
          </div>

        </div>
      </div>

      {/* Fade to page background for smooth section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))' }} />

    </section>
  )
}
