import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';
type FilterType = 'All' | 'Night Games' | 'Teams' | 'Matches' | 'Facilities';
export function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const filters: FilterType[] = [
  'All',
  'Night Games',
  'Teams',
  'Matches',
  'Facilities'];

  const images = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1518605368461-1ee7c6848d66?auto=format&fit=crop&q=80&w=800',
    category: 'Night Games',
    title: 'Night match under floodlights',
    aspect: 'aspect-square'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=800',
    category: 'Teams',
    title: 'Team celebration',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=800',
    category: 'Facilities',
    title: 'Aerial turf view',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800',
    category: 'Matches',
    title: 'Players warming up',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=800',
    category: 'Matches',
    title: 'Turf close-up',
    aspect: 'aspect-square'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&q=80&w=800',
    category: 'Night Games',
    title: 'Goalkeeper save',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800',
    category: 'Teams',
    title: 'Crowd at sideline',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1583417267826-433ed785675e?auto=format&fit=crop&q=80&w=800',
    category: 'Facilities',
    title: 'Facility interior',
    aspect: 'aspect-square'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800',
    category: 'Matches',
    title: 'Post-match handshake',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&q=80&w=800',
    category: 'Teams',
    title: 'Pre-match huddle',
    aspect: 'aspect-square'
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80&w=800',
    category: 'Night Games',
    title: 'Under the lights',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800',
    category: 'Facilities',
    title: 'Parking Area',
    aspect: 'aspect-square'
  }];

  const filteredImages =
  activeFilter === 'All' ?
  images :
  images.filter((img) => img.category === activeFilter);
  return (
    <div className="pt-20 min-h-screen bg-dark">
      {/* Page Header */}
      <div className="bg-dark py-16 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bebas text-white tracking-wide">
            The Pitch in <span className="text-brand">Action</span>
          </h1>
          <div className="w-20 h-1 bg-brand mx-auto mt-4 mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real games, real moments at Sky Turf.
          </p>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {filters.map((filter) =>
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`
                px-5 py-2 rounded-full text-sm transition-all
                ${activeFilter === filter ? 'bg-brand text-black font-bold shadow-[0_0_15px_rgba(57,255,20,0.3)]' : 'bg-transparent border border-white/20 text-gray-400 hover:border-brand/50 hover:text-white font-medium'}
              `}>
            
              {filter}
            </button>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image) =>
          <div
            key={image.id}
            className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-dark-surface border border-white/5 ${image.aspect} animate-in fade-in duration-500`}>
            
              <img
              src={image.url}
              alt={image.title}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
            

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <ZoomIn className="text-white w-10 h-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 drop-shadow-lg" />
              </div>

              {/* Label Gradient */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-brand text-xs font-bold uppercase tracking-wider mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {image.category}
                </p>
                <h3 className="text-white font-bebas text-xl tracking-wide">
                  {image.title}
                </h3>
              </div>
            </div>
          )}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="border border-white/20 text-brand px-8 py-3 rounded-xl hover:bg-brand/10 hover:border-brand/50 font-bold transition-all">
            Load More Photos
          </button>
        </div>
      </div>
    </div>);

}