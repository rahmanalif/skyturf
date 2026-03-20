import React from 'react';
import { HourlyRates } from '../components/pricing/HourlyRates';
import { MembershipPackages } from '../components/pricing/MembershipPackages';
import { SpecialOfferBanner } from '../components/pricing/SpecialOfferBanner';
export function PricingPage() {
  return (
    <div className="pt-20 min-h-screen bg-dark">
      {/* Page Header */}
      <div className="bg-dark py-16 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bebas text-white mb-4 tracking-wide">
            Simple, Transparent <span className="text-brand">Pricing</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you're looking for a quick game or a regular spot for your
            team, we have a plan that fits your needs.
          </p>
        </div>
      </div>

      <HourlyRates />
      <SpecialOfferBanner />
      <MembershipPackages />
    </div>);

}