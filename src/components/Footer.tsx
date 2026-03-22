import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#050605] pb-8 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 rounded-[2.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="text-[11px] uppercase tracking-[0.38em] text-brand">Sky Turf</div>
              <h2 className="mt-4 text-[3rem] uppercase leading-[0.9] text-white sm:text-[4rem]">
                Football booking
                <br />
                with a sharper edge.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-[#aab5a6]">
              Premium turf, floodlit nights, and a booking flow built for teams that do not want
              to waste time. Sky Turf is designed to feel like the city&apos;s football stage.
            </p>
          </div>
        </div>

        <div className="grid gap-10 border-b border-white/8 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-bebas text-[2.2rem] uppercase tracking-[0.16em] text-white">Sky Turf</div>
            <p className="mt-4 max-w-xs text-sm leading-7 text-[#8f9b8c]">
              Electrifying local football energy with a premium match-night atmosphere.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-300 transition-colors hover:text-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-gray-500">Navigate</div>
            <div className="mt-5 grid gap-3 text-sm uppercase tracking-[0.18em] text-gray-300">
              <a href="#home" className="transition-colors hover:text-brand">
                Home
              </a>
              <a href="#gallery" className="transition-colors hover:text-brand">
                Gallery
              </a>
              <a href="#pricing" className="transition-colors hover:text-brand">
                Pricing
              </a>
              <a href="#contact" className="transition-colors hover:text-brand">
                Contact
              </a>
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-gray-500">Need to know</div>
            <div className="mt-5 grid gap-3 text-sm uppercase tracking-[0.18em] text-gray-300">
              <a href="#" className="transition-colors hover:text-brand">
                Booking rules
              </a>
              <a href="#" className="transition-colors hover:text-brand">
                Slot policy
              </a>
              <a href="#" className="transition-colors hover:text-brand">
                Match prep
              </a>
              <a href="#" className="transition-colors hover:text-brand">
                Admin support
              </a>
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-gray-500">Contact</div>
            <div className="mt-5 grid gap-4 text-sm text-[#aab5a6]">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>123 Stadium Road, Sports District, Dhaka</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" />
                <span>+880 1234-567890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" />
                <span>hello@skyturf.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-xs uppercase tracking-[0.2em] text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Sky Turf. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-gray-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
