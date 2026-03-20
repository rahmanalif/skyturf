import React from 'react';
import { Map, Lightbulb, Shirt, Car } from 'lucide-react';
import BorderGlow from './BorderGlow';
export function FeaturesSection() {
  const features = [
  {
    icon: <Map className="w-8 h-8 text-brand" />,
    title: 'High-Quality Turf',
    description:
    'FIFA-approved artificial grass for the ultimate playing experience and safety.'
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-brand" />,
    title: 'Floodlit Night Games',
    description:
    'Professional stadium-grade LED lighting for perfect visibility after dark.'
  },
  {
    icon: <Shirt className="w-8 h-8 text-brand" />,
    title: 'Changing Rooms',
    description:
    'Clean, spacious locker rooms with hot showers and secure storage.'
  },
  {
    icon: <Car className="w-8 h-8 text-brand" />,
    title: 'Secure Parking',
    description:
    'Ample free parking space with 24/7 CCTV surveillance for your peace of mind.'
  }];

  return (
    <section className="py-24 bg-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bebas text-white mb-4">
            Premium Facilities
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need for the perfect match, built to professional
            standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) =>
          <BorderGlow
            key={index}
            className="group h-full"
            backgroundColor="#121212"
            borderRadius={24}
            glowRadius={24}
            glowColor="120 100 60"
            colors={['#39ff14', '#22c55e', '#38bdf8']}
            fillOpacity={0.22}>
            <div className="h-full border border-white/5 bg-dark-surface p-8 transition-colors">
              <div className="bg-dark w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bebas text-white mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </BorderGlow>
          )}
        </div>
      </div>
    </section>);

}
