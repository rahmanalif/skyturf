import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const galleryItems = [
  {
    kicker: 'Match Surface',
    title: 'Floodlit Turf',
    copy: 'The pitch carries the section, showing the actual stage teams are booking for.',
    image: '/bgturf.jpg',
    className: 'md:col-span-8 md:row-span-2',
    imageClassName: 'object-cover opacity-90',
  },
  {
    kicker: 'Player Energy',
    title: 'Arrival Shot',
    copy: 'A campaign-style frame that gives the venue more edge than a standard booking site.',
    image: '/vini.png',
    className: 'md:col-span-4 md:row-span-1',
    imageClassName: 'object-contain object-bottom opacity-95 mix-blend-screen',
  },
  {
    kicker: 'Icon Frame',
    title: 'Big Match Mood',
    copy: 'The gallery sells atmosphere, not just availability.',
    image: '/Karim_Benzema_wallpaper-removebg-preview.png',
    className: 'md:col-span-4 md:row-span-1',
    imageClassName: 'object-contain object-bottom opacity-95 mix-blend-screen',
  },
];

const stripLabels = [
  'Floodlit nights',
  'Premium booking flow',
  'Local football culture',
  'Fast slot access',
  'Campaign-grade atmosphere',
];

export function GallerySection({
  onNavigate,
}: {
  onNavigate?: (page: 'gallery') => void;
}) {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden border-t border-white/6 bg-[#050605] py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(57,255,20,0.12),transparent_20%),radial-gradient(circle_at_84%_72%,rgba(57,255,20,0.08),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_22%)]" />
      <div className="stadium-grid absolute inset-0 opacity-[0.14]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          {stripLabels.map((label) => (
            <span
              key={label}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-gray-400"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="max-w-xl">
            <div className="text-[11px] uppercase tracking-[0.38em] text-brand">Gallery edit</div>
            <h2 className="mt-4 text-[3.2rem] uppercase leading-[0.88] text-white sm:text-[4.5rem]">
              Not a
              <br />
              <span className="text-brand">Photo Dump</span>
            </h2>
            <p className="mt-6 text-base leading-7 text-[#a8b4a5]">
              This section now behaves more like a football campaign spread. It frames the turf,
              the players, and the mood as part of one premium match-night identity.
            </p>

            <div className="mt-10 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6">
              <div className="text-[10px] uppercase tracking-[0.32em] text-gray-500">Section note</div>
              <div className="mt-3 font-bebas text-[2.5rem] uppercase leading-[0.92] tracking-[0.12em] text-white">
                Built to feel like a launch poster for local football.
              </div>
              <p className="mt-4 max-w-md text-sm leading-6 text-[#aeb9ab]">
                Stronger cropping, asymmetry, and captions make the visuals feel intentional
                instead of repeated cards.
              </p>
            </div>

            <button
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand transition-colors duration-300 hover:bg-brand hover:text-black"
              onClick={() => onNavigate?.('gallery')}
            >
              Open Full Gallery
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid auto-rows-[15rem] gap-4 md:grid-cols-12">
            {galleryItems.map((item, index) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-[2rem] border ${
                  index === 0
                    ? 'border-brand/20 bg-[linear-gradient(180deg,rgba(57,255,20,0.08),rgba(0,0,0,0.12))]'
                    : 'border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]'
                } ${item.className}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105 ${item.imageClassName}`}
                />
                <div
                  className={`absolute inset-0 ${
                    index === 0
                      ? 'bg-[linear-gradient(90deg,rgba(0,0,0,0.78),rgba(0,0,0,0.16)_50%,rgba(0,0,0,0.88))]'
                      : 'bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.84))]'
                  }`}
                />

                {index === 0 && (
                  <div className="absolute right-6 top-6 hidden rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-gray-300 md:block">
                    Prime venue frame
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <div className="text-[10px] uppercase tracking-[0.32em] text-brand/75">
                    0{index + 1} / {item.kicker}
                  </div>
                  <h3
                    className={`mt-3 uppercase leading-[0.9] tracking-[0.12em] text-white ${
                      index === 0 ? 'text-[2.8rem] sm:text-[3.6rem]' : 'text-[2rem]'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#c8d2c4]">{item.copy}</p>
                </div>
              </article>
            ))}

            <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-black/30 p-6 md:col-span-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(57,255,20,0.12),transparent_48%)]" />
              <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.32em] text-gray-500">What this section should say</div>
                  <div className="mt-3 font-bebas text-[2.4rem] uppercase leading-[0.92] tracking-[0.12em] text-white">
                    Serious turf. Real atmosphere. No generic sports-center energy.
                  </div>
                </div>
                <div className="rounded-full border border-brand/20 bg-brand/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand">
                  Electrifying. Gritty. Premium.
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 md:col-span-4">
              <div className="text-[10px] uppercase tracking-[0.32em] text-gray-500">Fast stat</div>
              <div className="mt-4 font-bebas text-[4rem] uppercase leading-none tracking-[0.12em] text-brand">
                3
              </div>
              <p className="mt-3 max-w-[14rem] text-sm leading-6 text-[#aeb9ab]">
                editorial panels working together instead of one repeated card pattern.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
