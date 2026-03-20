import React from 'react';
import { Star } from 'lucide-react';
import BorderGlow from './BorderGlow';
export function TestimonialsSection() {
  const testimonials = [
  {
    name: 'Mahmudur Rahman',
    role: 'Amateur Bombsquad Player',
    quote:
    'The turf quality is unmatched in the city. The floodlights make night games feel like professional matches. Highly recommend!',
    rating: 5
  },
  {
    name: 'Farizul Tanzil',
    role: 'Amateur Bombsquad Player',
    quote:
    'Booking is seamless, and the facilities are always spotless. The secure parking is a huge plus for our late-night games.',
    rating: 5
  },
  {
    name: 'Scamseam',
    role: 'Amateur Bombsquad Player',
    quote:
    'We host our weekly corporate matches here. The staff is friendly, and the changing rooms are top-notch. Best turf around.',
    rating: 5
  }];

  return (
    <section className="py-24 bg-dark-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bebas text-white mb-4">
            Player Reviews
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the players who call Sky
            Turf their home ground.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) =>
          <BorderGlow
            key={index}
            className="h-full"
            backgroundColor="#0a0a0a"
            borderRadius={24}
            glowRadius={24}
            glowColor="120 100 60"
            colors={['#39ff14', '#22c55e', '#38bdf8']}
            fillOpacity={0.18}>
            <div className="flex h-full flex-col border border-white/5 bg-dark p-8">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) =>
              <Star key={i} className="w-5 h-5 fill-brand text-brand" />
              )}
              </div>
              <p className="text-gray-300 italic mb-8 flex-grow">
                "{testimonial.quote}"
              </p>
              <div>
                <h4 className="text-white font-bold">{testimonial.name}</h4>
                <p className="text-brand text-sm">{testimonial.role}</p>
              </div>
            </div>
          </BorderGlow>
          )}
        </div>
      </div>
    </section>);

}
