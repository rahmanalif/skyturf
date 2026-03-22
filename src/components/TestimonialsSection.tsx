import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Mahmudur Rahman',
    role: 'Weekend Team Organizer',
    quote:
      'The lighting changes everything. Night matches actually feel serious here, and booking a slot is fast enough that our group keeps coming back.',
  },
  {
    name: 'Farizul Tanzil',
    role: 'Regular 7v7 Player',
    quote:
      'Most turfs look fine online and feel average in person. Sky Turf actually carries that premium look through the whole experience.',
  },
  {
    name: 'Scamseam',
    role: 'Corporate Match Coordinator',
    quote:
      'For late-night fixtures, this is the easiest place to organize. Parking, lighting, and support spaces are all handled properly.',
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/6 bg-[#080908] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(57,255,20,0.04),transparent_20%),radial-gradient(circle_at_75%_18%,rgba(57,255,20,0.08),transparent_22%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="max-w-md">
            <div className="text-[11px] uppercase tracking-[0.38em] text-brand">Player verdict</div>
            <h2 className="mt-4 text-[3.1rem] uppercase leading-[0.9] text-white sm:text-[4.2rem]">
              Trusted by
              <br />
              <span className="text-brand">Teams Who Care</span>
            </h2>
            <p className="mt-6 text-base leading-7 text-[#a6b2a2]">
              The best signal is repeat booking. These are the players and organizers who judge
              the pitch after kickoff, not just from the photos.
            </p>

            <div className="mt-10 rounded-[2rem] border border-white/8 bg-white/[0.03] p-6">
              <div className="text-[10px] uppercase tracking-[0.32em] text-gray-500">Matchday standard</div>
              <div className="mt-3 font-bebas text-[2.5rem] uppercase leading-[0.92] tracking-[0.12em] text-white">
                Premium enough for content. Gritty enough for competition.
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.name}
                className={`flex h-full flex-col justify-between rounded-[2rem] border p-6 ${
                  index === 1
                    ? 'border-brand/25 bg-[linear-gradient(180deg,rgba(57,255,20,0.1),rgba(57,255,20,0.03))]'
                    : 'border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]'
                }`}
              >
                <div>
                  <div className="mb-6 flex gap-1 text-brand">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm leading-7 text-[#dde5d9]">&ldquo;{testimonial.quote}&rdquo;</p>
                </div>

                <div className="mt-10 border-t border-white/8 pt-5">
                  <div className="font-bebas text-[1.7rem] uppercase tracking-[0.1em] text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
