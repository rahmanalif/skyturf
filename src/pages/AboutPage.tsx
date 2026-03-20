import React from 'react';
import { Users, Leaf, Heart, MapPin } from 'lucide-react';
export function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-dark">
      {/* Page Hero */}
      <div className="bg-dark py-16 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bebas text-white mb-4 tracking-wide">
            About <span className="text-brand">Sky Turf</span>
          </h1>
          <p className="text-gray-400 text-sm uppercase tracking-widest">
            Home / About
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-brand rounded-tl-2xl z-10 -translate-x-2 -translate-y-2"></div>
            <div className="bg-dark-surface rounded-2xl aspect-video overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1518605368461-1ee7c6848d66?auto=format&fit=crop&q=80&w=1000"
                alt="Sky Turf at night"
                className="w-full h-full object-cover opacity-80" />
              
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent"></div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bebas text-white tracking-wide mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed mb-8">
              <p>
                Founded in 2023, Sky Turf was born out of a simple passion: to
                elevate the football culture in Bangladesh. We noticed a lack of
                premium, accessible, and safe playing environments for local
                enthusiasts and professional teams alike.
              </p>
              <p>
                Our mission is to make the beautiful game accessible to
                everyone, day or night. By introducing FIFA-grade artificial
                turf and professional stadium lighting, we've created a space
                where players can experience the thrill of the game at its
                highest standard.
              </p>
              <p>
                More than just a pitch, Sky Turf is a community hub. It's where
                friendships are forged, rivalries are settled, and the love for
                football brings people together.
              </p>
            </div>
            <button className="bg-brand text-black font-bold px-8 py-4 rounded-xl hover:bg-brand-hover shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all transform hover:-translate-y-1">
              Book a Session
            </button>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-dark-surface border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bebas text-white tracking-wide">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark rounded-2xl p-8 border border-white/5 hover:border-brand/30 transition-colors">
              <Users className="w-10 h-10 text-brand mb-6" />
              <h3 className="text-2xl font-bebas text-white tracking-wide mb-3">
                Community First
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We believe football is more than a game; it's a community. We
                strive to foster a welcoming environment for players of all
                skill levels to connect and grow.
              </p>
            </div>

            <div className="bg-dark rounded-2xl p-8 border border-white/5 hover:border-brand/30 transition-colors">
              <Leaf className="w-10 h-10 text-brand mb-6" />
              <h3 className="text-2xl font-bebas text-white tracking-wide mb-3">
                Quality Turf
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We never compromise on quality. Our FIFA-approved artificial
                grass ensures maximum performance, safety, and an authentic
                playing feel.
              </p>
            </div>

            <div className="bg-dark rounded-2xl p-8 border border-white/5 hover:border-brand/30 transition-colors">
              <Heart className="w-10 h-10 text-brand mb-6" />
              <h3 className="text-2xl font-bebas text-white tracking-wide mb-3">
                Football for Everyone
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Inclusivity is at our core. We maintain affordable rates and
                flexible hours to ensure everyone has the opportunity to play
                the sport they love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-bebas text-5xl text-brand mb-2">500+</p>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                Matches Hosted
              </p>
            </div>
            <div>
              <p className="font-bebas text-5xl text-brand mb-2">1000+</p>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                Happy Players
              </p>
            </div>
            <div>
              <p className="font-bebas text-5xl text-brand mb-2">4.9</p>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                Star Rating
              </p>
            </div>
            <div>
              <p className="font-bebas text-5xl text-brand mb-2">7</p>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                Days a Week
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bebas text-white tracking-wide">
            Our Facilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-dark-surface rounded-2xl overflow-hidden border border-white/5 group">
            <div className="aspect-video relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=800"
                alt="Main Turf"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
              
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bebas text-white tracking-wide">
                Main Turf
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Premium 5v5 / 7v7 artificial pitch with shock pads.
              </p>
            </div>
          </div>

          <div className="bg-dark-surface rounded-2xl overflow-hidden border border-white/5 group">
            <div className="aspect-video relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1583417267826-433ed785675e?auto=format&fit=crop&q=80&w=800"
                alt="Changing Rooms"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
              
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bebas text-white tracking-wide">
                Changing Rooms
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Clean, secure locker rooms with hot showers.
              </p>
            </div>
          </div>

          <div className="bg-dark-surface rounded-2xl overflow-hidden border border-white/5 group">
            <div className="aspect-video relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800"
                alt="Parking Area"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
              
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bebas text-white tracking-wide">
                Parking Area
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Ample secure parking with 24/7 CCTV surveillance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-dark-surface border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bebas text-white tracking-wide mb-4">
            Find Us
          </h2>
          <p className="text-gray-400 mb-12">
            123 Stadium Road, Sports District, City 10001
          </p>

          <div className="bg-dark rounded-2xl border border-white/5 h-80 overflow-hidden relative flex flex-col items-center justify-center group cursor-pointer hover:border-brand/30 transition-colors">
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                'radial-gradient(#39FF14 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}>
            </div>
            <MapPin className="w-16 h-16 text-brand mb-4 relative z-10 animate-pulse" />
            <p className="text-white font-bebas text-2xl tracking-wide relative z-10">
              Open in Google Maps
            </p>
          </div>
        </div>
      </section>
    </div>);

}