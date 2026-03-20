import React from 'react';
import { Check } from 'lucide-react';
export function MembershipPackages() {
  const packages = [
  {
    name: 'Starter',
    price: '৳3,000',
    hours: '4 hours / month',
    features: [
    'Valid for daytime slots only',
    '1 week advance booking',
    'Free cancellation up to 48hrs',
    'Basic support'],

    highlighted: false
  },
  {
    name: 'Club',
    price: '৳7,500',
    hours: '10 hours / month',
    features: [
    'Valid for any time slot',
    '2 weeks advance booking',
    'Free cancellation up to 24hrs',
    'Priority support',
    '10% off on cafe items'],

    highlighted: false
  },
  {
    name: 'Elite',
    price: '৳14,000',
    hours: '20 hours / month',
    features: [
    'Valid for any time slot',
    '1 month advance booking',
    'Free cancellation up to 12hrs',
    'Dedicated account manager',
    '20% off on cafe items',
    'Free bibs and ball rental'],

    highlighted: true
  }];

  return (
    <section className="py-24 bg-dark-surface relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bebas text-white mb-4">
            Membership Packages
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Play regularly? Save more with our monthly membership packages
            designed for teams and enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) =>
          <div
            key={pkg.name}
            className={`
                bg-dark rounded-2xl p-8 flex flex-col relative overflow-hidden
                ${pkg.highlighted ? 'border-t-4 border-t-brand border-x border-b border-white/5 shadow-2xl' : 'border border-white/5'}
              `}>
            
              {pkg.highlighted &&
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
            }

              <div className="mb-8">
                <h3 className="text-2xl font-bebas text-white tracking-wide mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bebas text-brand tracking-wider">
                    {pkg.price}
                  </span>
                  <span className="text-gray-500">/ mo</span>
                </div>
                <p className="text-gray-300 font-medium">{pkg.hours}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, idx) =>
              <li
                key={idx}
                className="flex items-start gap-3 text-gray-400 text-sm">
                
                    <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
              )}
              </ul>

              <button
              className={`
                w-full py-3 rounded-xl font-bold transition-all
                ${pkg.highlighted ? 'bg-brand text-black hover:bg-brand-hover' : 'bg-dark-surface border border-white/10 text-white hover:border-brand/50 hover:text-brand'}
              `}>
              
                Get Started
              </button>
            </div>
          )}
        </div>
      </div>
    </section>);

}