import React from 'react';
import BorderGlow from './BorderGlow';
export function GallerySection({
  onNavigate,
}: {
  onNavigate?: (page: 'gallery') => void;
}) {
  const images = [
  {
    url: 'https://images.unsplash.com/photo-1518605368461-1ee7c6848d66?auto=format&fit=crop&q=80&w=1000',
    alt: 'Football turf at night under floodlights',
    title: 'Night Games'
  },
  {
    url: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=1000',
    alt: 'Teams celebrating on the pitch',
    title: 'Match Day'
  },
  {
    url: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=1000',
    alt: 'Aerial view of the football pitch',
    title: 'Premium Pitch'
  }];

  return (
    <section
      id="gallery"
      className="py-24 bg-dark relative border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bebas text-white mb-4">
              The Gallery
            </h2>
            <p className="text-gray-400">
              Take a look at our state-of-the-art facilities.
            </p>
          </div>
          <button
            className="hidden md:block text-brand hover:text-white transition-colors font-medium"
            onClick={() => onNavigate?.('gallery')}>
            View All Photos &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) =>
          <BorderGlow
            key={index}
            className="group aspect-[4/5] cursor-pointer"
            backgroundColor="#111111"
            borderRadius={24}
            glowRadius={28}
            glowColor="120 100 60"
            colors={['#39ff14', '#22c55e', '#38bdf8']}
            fillOpacity={0.16}>
            <div className="relative aspect-[4/5] overflow-hidden bg-brand">
              <img
                src={image.url}
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 p-6 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-2xl font-bebas text-white tracking-wide">
                  {image.title}
                </h3>
              </div>
            </div>
          </BorderGlow>
          )}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button
            className="text-brand hover:text-white transition-colors font-medium"
            onClick={() => onNavigate?.('gallery')}>
            View All Photos &rarr;
          </button>
        </div>
      </div>
    </section>);

}
