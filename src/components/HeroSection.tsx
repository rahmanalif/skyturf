import React, { useEffect, useRef } from 'react';
import { CalendarDays, Clock3 } from 'lucide-react';
import BorderGlow from './BorderGlow';

type HeroPage = 'booking';

interface HeroSectionProps {
  onNavigate?: (page: HeroPage) => void;
}

const PARTICLES = [
  { left: '5%', top: '16%', size: 5, type: 'dot', duration: 9, delay: 0.2 },
  { left: '12%', top: '62%', size: 10, type: 'ball', duration: 13, delay: 1.1 },
  { left: '18%', top: '34%', size: 7, type: 'ring', duration: 11, delay: 0.6 },
  { left: '24%', top: '74%', size: 4, type: 'dot', duration: 12, delay: 1.8 },
  { left: '31%', top: '21%', size: 8, type: 'ball', duration: 10, delay: 0.9 },
  { left: '38%', top: '56%', size: 5, type: 'dot', duration: 14, delay: 0.4 },
  { left: '45%', top: '28%', size: 6, type: 'ring', duration: 9, delay: 1.6 },
  { left: '52%', top: '67%', size: 4, type: 'dot', duration: 12, delay: 0.7 },
  { left: '59%', top: '13%', size: 9, type: 'ball', duration: 11, delay: 1.3 },
  { left: '66%', top: '42%', size: 5, type: 'dot', duration: 10, delay: 0.5 },
  { left: '72%', top: '77%', size: 8, type: 'ring', duration: 13, delay: 1.9 },
  { left: '79%', top: '32%', size: 5, type: 'dot', duration: 14, delay: 0.3 },
  { left: '86%', top: '57%', size: 10, type: 'ball', duration: 9, delay: 1.4 },
  { left: '92%', top: '20%', size: 4, type: 'dot', duration: 12, delay: 0.8 },
];

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const particlesLayerRef = useRef<HTMLDivElement>(null);
  const textLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    let rafId = 0;

    const updateParallax = () => {
      rafId = 0;

      const rect = section.getBoundingClientRect();
      const heroHeight = Math.max(section.offsetHeight, window.innerHeight);
      const progress = Math.min(Math.max(-rect.top / heroHeight, 0), 1.2);
      const isMobile = window.innerWidth < 768;
      const backgroundShift = progress * (isMobile ? 5 : 10);
      const particlesShift = progress * (isMobile ? 10 : 22);
      const textShift = progress * (isMobile ? 12 : 28);
      const fadeProgress = Math.min(Math.max((progress - 0.8) / 0.2, 0), 1);
      const opacity = 1 - fadeProgress;

      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translate3d(0, -${backgroundShift}vh, 0) scale(1.08)`;
      }

      if (particlesLayerRef.current) {
        particlesLayerRef.current.style.transform = `translate3d(0, -${particlesShift}vh, 0)`;
      }

      if (textLayerRef.current) {
        textLayerRef.current.style.transform = `translate3d(0, -${textShift}vh, 0)`;
      }

      section.style.opacity = `${opacity}`;
      section.style.filter = `blur(${fadeProgress * 6}px)`;
    };

    const requestUpdate = () => {
      if (rafId !== 0) {
        return;
      }

      rafId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }

      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex h-screen items-center overflow-hidden bg-[#0a0a0a] pt-20 transition-[opacity,filter] duration-300">
      <div className="absolute inset-0 bg-[#020403]" />

      <div
        ref={backgroundRef}
        className="absolute inset-[-8%]"
        style={{
          background:
            'linear-gradient(180deg, rgba(2,6,4,0.28) 0%, rgba(2,6,4,0.5) 42%, rgba(2,6,4,0.86) 100%), radial-gradient(circle at 50% 18%, rgba(57,255,20,0.12), transparent 28%), url("/bgturf.jpg")',
          backgroundPosition: 'center, center, center',
          backgroundSize: 'cover, cover, cover',
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(57,255,20,0.07),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.72))]" />

      <div className="absolute inset-x-0 bottom-[7%] h-[28%] bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.12),transparent_62%)] blur-3xl" />

      <div ref={particlesLayerRef} className="absolute inset-0 overflow-hidden">
        {PARTICLES.map((particle, index) => (
          <div
            key={`${particle.left}-${particle.top}`}
            className="absolute sky-hero-particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              transform: `translate3d(0, 0, 0) scale(${index % 3 === 0 ? 1.1 : 1})`,
            }}>
            {particle.type === 'dot' && (
              <span
                className="block rounded-full bg-brand shadow-[0_0_16px_rgba(57,255,20,0.55)]"
                style={{ width: particle.size, height: particle.size }}
              />
            )}
            {particle.type === 'ring' && (
              <span
                className="block rounded-full border border-brand/70 shadow-[0_0_16px_rgba(57,255,20,0.38)]"
                style={{ width: particle.size + 4, height: particle.size + 4 }}
              />
            )}
            {particle.type === 'ball' && (
              <span
                className="flex items-center justify-center rounded-full border border-brand/60 text-[8px] text-brand/90 shadow-[0_0_18px_rgba(57,255,20,0.35)]"
                style={{ width: particle.size + 6, height: particle.size + 6 }}>
                +
              </span>
            )}
          </div>
        ))}
      </div>

      <div
        ref={textLayerRef}
        className="relative z-10 mx-auto flex w-full max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center rounded-full border border-brand/25 bg-brand/8 px-4 py-2 text-[11px] uppercase tracking-[0.4em] text-brand/80 backdrop-blur-sm">
            Night Stadium Energy
          </div>

          <h1 className="text-5xl uppercase leading-[0.9] text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.45)] sm:text-6xl md:text-8xl lg:text-[7rem]">
            Play Under
            <br />
            the Sky at <span className="text-brand">Sky Turf</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-400 sm:text-lg md:text-xl">
            Book your match anytime, day or night.
          </p>

          {/* <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              className="sky-hero-cta rounded-xl bg-brand px-8 py-4 text-base font-bold text-black transition-transform duration-300 hover:scale-105"
              onClick={() => onNavigate?.('booking')}>
              Book Now
            </button>
            <button
              className="rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-colors duration-300 hover:border-brand/50 hover:text-brand"
              onClick={() => onNavigate?.('booking')}>
              Check Availability
            </button>
          </div> */}

          <BorderGlow
            className="mx-auto mt-12 w-full max-w-5xl"
            backgroundColor="rgba(23, 23, 23, 0.95)"
            borderRadius={28}
            glowRadius={24}
            glowColor="120 100 60"
            colors={['#39ff14', '#22c55e', '#38bdf8']}
            fillOpacity={0.18}>
            <div className="rounded-[28px] border border-white/10 bg-[#171717]/95 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1fr_220px] md:items-end">
                <div className="flex flex-col text-left">
                  <label className="mb-3 flex items-center gap-2 text-lg text-gray-300">
                    <CalendarDays className="h-5 w-5 text-brand" />
                    <span>Date</span>
                  </label>
                  <input
                    type="date"
                    className="h-14 rounded-xl border border-white/15 bg-[#111111] px-4 text-lg text-white outline-none transition-colors focus:border-brand"
                  />
                </div>

                <div className="flex flex-col text-left">
                  <label className="mb-3 flex items-center gap-2 text-lg text-gray-300">
                    <Clock3 className="h-5 w-5 text-brand" />
                    <span>Time Slot</span>
                  </label>
                  <select className="h-14 rounded-xl border border-white/15 bg-[#111111] px-4 text-lg text-white outline-none transition-colors focus:border-brand">
                    <option value="">Select a time</option>
                    <option value="18:00">18:00 - 19:00</option>
                    <option value="19:00">19:00 - 20:00</option>
                    <option value="20:00">20:00 - 21:00</option>
                    <option value="21:00">21:00 - 22:00</option>
                    <option value="22:00">22:00 - 23:00</option>
                  </select>
                </div>

                <button
                  className="h-14 rounded-xl bg-brand px-6 text-lg font-bold text-black transition-transform duration-300 hover:scale-[1.02] hover:bg-brand-hover"
                  onClick={() => onNavigate?.('booking')}>
                  Check Availability
                </button>
              </div>
            </div>
          </BorderGlow>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
    </section>
  );
}
