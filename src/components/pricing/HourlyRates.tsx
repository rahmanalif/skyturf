import React from 'react';
import { Check } from 'lucide-react';
export function HourlyRates() {
  return (
    <section className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bebas text-white mb-4">
            Hourly Rates
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Simple, transparent pricing for casual games. Book exactly what you
            need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Daytime Card */}
          <div className="bg-dark-surface rounded-2xl border border-white/5 p-8 hover:border-brand/30 transition-colors flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bebas text-white tracking-wide mb-2">
                Daytime
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                6:00 AM &ndash; 6:00 PM
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bebas text-white tracking-wider">
                  ৳800
                </span>
                <span className="text-gray-500">/ hour</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-brand shrink-0" />
                <span>Premium Turf access</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-brand shrink-0" />
                <span>Changing room access</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-brand shrink-0" />
                <span>Secure parking</span>
              </li>
            </ul>

            <button className="w-full py-4 rounded-xl font-bold bg-dark border border-white/10 text-white hover:border-brand/50 hover:text-brand transition-all">
              Book Daytime Slot
            </button>
          </div>

          {/* Night Game Card */}
          <div className="bg-dark-surface rounded-2xl border-2 border-brand p-8 relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(57,255,20,0.1)] flex flex-col">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-black font-bold px-4 py-1 rounded-full text-sm">
              Most Popular
            </div>

            <div className="mb-8 mt-2">
              <h3 className="text-2xl font-bebas text-white tracking-wide mb-2">
                Night Game
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                6:00 PM &ndash; 10:00 PM
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bebas text-white tracking-wider">
                  ৳1200
                </span>
                <span className="text-gray-500">/ hour</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-brand shrink-0" />
                <span>Premium Turf access</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-brand shrink-0" />
                <span>Changing room access</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-brand shrink-0" />
                <span>Secure parking</span>
              </li>
              <li className="flex items-center gap-3 text-white font-medium">
                <Check className="w-5 h-5 text-brand shrink-0" />
                <span>Professional Floodlights included</span>
              </li>
            </ul>

            <button className="w-full py-4 rounded-xl font-bold bg-brand text-black hover:bg-brand-hover shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all">
              Book Night Slot
            </button>
          </div>
        </div>
      </div>
    </section>);

}