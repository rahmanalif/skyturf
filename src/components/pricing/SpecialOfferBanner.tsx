import React from 'react';
import { Sparkles } from 'lucide-react';
export function SpecialOfferBanner() {
  return (
    <section className="bg-brand/10 border-y border-brand/20 py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-20 pointer-events-none"></div>
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand/20 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand/20 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-brand/20 text-brand">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-3xl font-bebas text-brand tracking-wide mb-1">
                Limited Time Offer
              </h3>
              <p className="text-white text-lg">
                Book 5+ hours in advance and get{' '}
                <span className="font-bold text-brand">
                  1 hour absolutely free!
                </span>
              </p>
            </div>
          </div>

          <button className="whitespace-nowrap bg-brand text-black font-bold px-8 py-4 rounded-xl hover:bg-brand-hover shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all transform hover:-translate-y-1">
            Claim Offer Now
          </button>
        </div>
      </div>
    </section>);

}