import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, CalendarDays, Clock3, MapPin } from 'lucide-react';

type HeroPage = 'booking';

interface HeroSectionProps {
  onNavigate?: (page: HeroPage) => void;
}

const PARTICLES = [
  { left: '4%', top: '18%', size: 6, type: 'dot', duration: 10, delay: 0.2 },
  { left: '10%', top: '67%', size: 11, type: 'ball', duration: 13, delay: 1.3 },
  { left: '20%', top: '35%', size: 7, type: 'ring', duration: 11, delay: 0.6 },
  { left: '32%', top: '76%', size: 4, type: 'dot', duration: 12, delay: 1.5 },
  { left: '44%', top: '18%', size: 8, type: 'ball', duration: 9, delay: 0.7 },
  { left: '52%', top: '58%', size: 5, type: 'dot', duration: 14, delay: 0.4 },
  { left: '63%', top: '24%', size: 8, type: 'ring', duration: 10, delay: 1.1 },
  { left: '71%', top: '74%', size: 5, type: 'dot', duration: 13, delay: 1.7 },
  { left: '84%', top: '52%', size: 10, type: 'ball', duration: 10, delay: 0.9 },
  { left: '92%', top: '20%', size: 4, type: 'dot', duration: 12, delay: 0.5 },
];

const MATCH_NIGHTS = ['06 PM PRIME', '08 PM FAST BOOKING', '10 PM UNDER LIGHTS'];

const QUICK_FACTS = [
  { value: '7v7', label: 'match format' },
  { value: 'LED', label: 'stadium floodlights' },
  { value: '24/7', label: 'slot management' },
];

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLImageElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    let frame = 0;

    const updateParallax = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const height = Math.max(section.offsetHeight, window.innerHeight);
      const progress = Math.min(Math.max(-rect.top / height, 0), 1.1);
      const isMobile = window.innerWidth < 768;
      const bgShift = progress * (isMobile ? 4 : 10);
      const playerShift = progress * (isMobile ? 8 : 18);
      const copyShift = progress * (isMobile ? 5 : 12);

      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translate3d(0, -${bgShift}vh, 0) scale(1.06)`;
      }

      if (playerRef.current) {
        playerRef.current.style.transform = `translate3d(0, -${playerShift}vh, 0)`;
      }

      if (copyRef.current) {
        copyRef.current.style.transform = `translate3d(0, -${copyShift}vh, 0)`;
      }
    };

    const requestFrame = () => {
      if (frame !== 0) {
        return;
      }

      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener('scroll', requestFrame, { passive: true });
    window.addEventListener('resize', requestFrame);

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener('scroll', requestFrame);
      window.removeEventListener('resize', requestFrame);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden px-4 pb-10 pt-28 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[#040504]" />
      <div
        ref={backgroundRef}
        className="absolute inset-[-8%]"
        style={{
          background:
            'linear-gradient(90deg, rgba(4,5,4,0.94) 0%, rgba(4,5,4,0.86) 40%, rgba(4,5,4,0.68) 72%, rgba(4,5,4,0.92) 100%), radial-gradient(circle at 70% 22%, rgba(57,255,20,0.2), transparent 24%), url("/bgturf.jpg")',
          backgroundPosition: 'center, center, center',
          backgroundSize: 'cover, cover, cover',
        }}
      />
      <div className="stadium-grid absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.7)),radial-gradient(circle_at_72%_18%,rgba(57,255,20,0.12),transparent_20%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[36vh] bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.18),transparent_65%)] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        {PARTICLES.map((particle, index) => (
          <div
            key={`${particle.left}-${particle.top}`}
            className="absolute sky-hero-particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              transform: `translate3d(0, 0, 0) scale(${index % 2 === 0 ? 1 : 1.15})`,
            }}
          >
            {particle.type === 'dot' && (
              <span
                className="block rounded-full bg-brand shadow-[0_0_18px_rgba(57,255,20,0.55)]"
                style={{ width: particle.size, height: particle.size }}
              />
            )}
            {particle.type === 'ring' && (
              <span
                className="block rounded-full border border-brand/70 shadow-[0_0_18px_rgba(57,255,20,0.38)]"
                style={{ width: particle.size + 4, height: particle.size + 4 }}
              />
            )}
            {particle.type === 'ball' && (
              <span
                className="flex items-center justify-center rounded-full border border-brand/60 text-[8px] text-brand/90 shadow-[0_0_18px_rgba(57,255,20,0.35)]"
                style={{ width: particle.size + 6, height: particle.size + 6 }}
              >
                +
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(420px,0.85fr)]">
        <div ref={copyRef} className="relative z-10 max-w-3xl pt-10 lg:pt-16">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-brand/30 bg-black/50 px-4 py-2 text-[11px] uppercase tracking-[0.42em] text-brand backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_14px_rgba(57,255,20,0.7)]" />
            Bangladesh Night Football
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {MATCH_NIGHTS.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-gray-400"
              >
                {item}
              </span>
            ))}
          </div>

          <h1 className="max-w-4xl text-[4.4rem] uppercase leading-[0.86] text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.38)] sm:text-[5.7rem] lg:text-[8.4rem]">
            The Turf
            <br />
            That Feels
            <br />
            <span className="text-brand">Match Ready</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#b7c2b3] sm:text-lg">
            Built for late kickoffs, fast booking, and teams that want the city&apos;s sharpest
            football stage. Sky Turf brings pro-light atmosphere to every local fixture.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              className="sky-hero-cta inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-black transition-transform duration-300 hover:-translate-y-0.5 hover:bg-brand-hover"
              onClick={() => onNavigate?.('booking')}
            >
              Book a Slot
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <button
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:border-brand/30 hover:text-brand"
              onClick={() => onNavigate?.('booking')}
            >
              Check Tonight&apos;s Openings
            </button>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {QUICK_FACTS.map((fact) => (
              <div
                key={fact.label}
                className="rounded-[1.5rem] border border-white/8 bg-black/35 px-4 py-5 backdrop-blur-sm"
              >
                <div className="font-bebas text-3xl uppercase tracking-[0.14em] text-white">
                  {fact.value}
                </div>
                <div className="text-xs uppercase tracking-[0.22em] text-gray-500">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 lg:pb-6">
          <div className="pointer-events-none absolute right-[-5%] top-[-18%] hidden h-[36rem] w-[36rem] rounded-full bg-brand/10 blur-3xl lg:block" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="field-lines stadium-scan relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(10,14,10,0.9),rgba(5,7,5,0.96))] px-5 pb-5 pt-6 sm:px-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.34em] text-brand">Prime booking panel</div>
                  <div className="mt-2 font-bebas text-[2rem] uppercase leading-none tracking-[0.14em] text-white">
                    Lock Tonight&apos;s Pitch
                  </div>
                </div>
                <div className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand">
                  Fast confirm
                </div>
              </div>

              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-left">
                    <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-400">
                      <CalendarDays className="h-4 w-4 text-brand" />
                      Match Date
                    </span>
                    <input
                      type="date"
                      className="h-14 rounded-[1.1rem] border border-white/10 bg-black/45 px-4 text-sm uppercase tracking-[0.12em] text-white outline-none transition-colors focus:border-brand"
                    />
                  </label>
                  <label className="grid gap-2 text-left">
                    <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-400">
                      <Clock3 className="h-4 w-4 text-brand" />
                      Kickoff Window
                    </span>
                    <select className="h-14 rounded-[1.1rem] border border-white/10 bg-black/45 px-4 text-sm uppercase tracking-[0.12em] text-white outline-none transition-colors focus:border-brand">
                      <option value="">Select a time</option>
                      <option value="18:00">06:00 PM - 07:00 PM</option>
                      <option value="19:00">07:00 PM - 08:00 PM</option>
                      <option value="20:00">08:00 PM - 09:00 PM</option>
                      <option value="21:00">09:00 PM - 10:00 PM</option>
                      <option value="22:00">10:00 PM - 11:00 PM</option>
                    </select>
                  </label>
                </div>

                <button
                  className="inline-flex h-14 items-center justify-center rounded-[1.1rem] bg-brand px-6 text-sm font-semibold uppercase tracking-[0.22em] text-black transition-transform duration-300 hover:-translate-y-0.5 hover:bg-brand-hover"
                  onClick={() => onNavigate?.('booking')}
                >
                  Check Availability
                </button>

                <div className="grid gap-3 border-t border-white/8 pt-4 text-left sm:grid-cols-[1fr_auto] sm:items-end">
                  <div>
                    <div className="mb-1 text-[10px] uppercase tracking-[0.34em] text-gray-500">Venue pulse</div>
                    <div className="font-bebas text-[2.2rem] uppercase leading-none tracking-[0.12em] text-white">
                      Floodlit turf. Clean facilities. Fast turnaround.
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-gray-300">
                    <MapPin className="h-4 w-4 text-brand" />
                    Dhaka, Bangladesh
                  </div>
                </div>
              </div>
            </div>

            <img
              ref={playerRef}
              src="/vini.png"
              alt="Football player in motion"
              className="pointer-events-none absolute bottom-0 right-[-4%] hidden h-[34rem] object-contain opacity-95 mix-blend-lighten saturate-125 lg:block"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#050605]" />
    </section>
  );
}
