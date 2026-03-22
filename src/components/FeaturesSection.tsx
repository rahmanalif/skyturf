import React from 'react';
import { Car, Lightbulb, Map, Shirt } from 'lucide-react';

const features = [
  {
    icon: <Map className="h-6 w-6 text-brand" />,
    title: 'Elite Turf Surface',
    description:
      'FIFA-style artificial grass tuned for cleaner ball roll, safer footing, and a more serious match feel.',
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-brand" />,
    title: 'Floodlit Atmosphere',
    description:
      'Bright, even LED coverage keeps late fixtures sharp and camera-ready instead of dim and patchy.',
  },
  {
    icon: <Shirt className="h-6 w-6 text-brand" />,
    title: 'Clean Support Spaces',
    description:
      'Changing rooms, showers, and secure storage that feel ready for teams, not improvised for crowds.',
  },
  {
    icon: <Car className="h-6 w-6 text-brand" />,
    title: 'Easy Arrival',
    description:
      'Secure parking and smooth entry flow mean players spend less time waiting and more time warming up.',
  },
];

export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/6 bg-[#060706] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(57,255,20,0.08),transparent_24%),radial-gradient(circle_at_88%_80%,rgba(57,255,20,0.06),transparent_26%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="max-w-xl">
          <div className="text-[11px] uppercase tracking-[0.38em] text-brand">Why teams return</div>
          <h2 className="mt-4 text-[3.2rem] uppercase leading-[0.9] text-white sm:text-[4.4rem]">
            Built Like a
            <br />
            <span className="text-brand">Night Match Venue</span>
          </h2>
          <p className="mt-6 text-base leading-7 text-[#aab5a5]">
            Sky Turf should feel different before the whistle even blows. Every detail is aimed
            at making local football feel bigger, cleaner, and more worth organizing.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.8rem] border border-white/8 bg-white/[0.03] p-5">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Atmosphere</div>
              <div className="mt-3 font-bebas text-[2.2rem] uppercase leading-none tracking-[0.12em] text-white">
                Stadium lighting with street-level edge
              </div>
            </div>
            <div className="rounded-[1.8rem] border border-brand/20 bg-brand/[0.08] p-5">
              <div className="text-[10px] uppercase tracking-[0.3em] text-brand/70">Booking mindset</div>
              <div className="mt-3 font-bebas text-[2.2rem] uppercase leading-none tracking-[0.12em] text-white">
                Fast availability checks without the clutter
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`relative overflow-hidden rounded-[2rem] border p-6 ${
                index === 1
                  ? 'border-brand/25 bg-[linear-gradient(180deg,rgba(57,255,20,0.12),rgba(57,255,20,0.03))]'
                  : 'border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]'
              }`}
            >
              <div className="mb-16 inline-flex rounded-2xl border border-white/10 bg-black/30 p-4">
                {feature.icon}
              </div>
              <h3 className="max-w-[12rem] text-[2rem] uppercase leading-[0.92] tracking-[0.12em] text-white">
                {feature.title}
              </h3>
              <p className="mt-4 max-w-xs text-sm leading-6 text-[#a5b0a1]">{feature.description}</p>
              <div className="absolute right-4 top-4 text-[10px] uppercase tracking-[0.32em] text-gray-600">
                0{index + 1}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
