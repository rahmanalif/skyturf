import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

type Page = 'home' | 'booking' | 'pricing' | 'gallery' | 'about' | 'contact';

export function Navbar({ onNavigate }: { onNavigate?: (page: Page) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    page: Page,
  ) => {
    event.preventDefault();
    onNavigate?.(page);
    setIsOpen(false);
  };

  const navLinks: { name: string; page: Page }[] = [
    { name: 'Home', page: 'home' },
    { name: 'Book', page: 'booking' },
    { name: 'Pricing', page: 'pricing' },
    { name: 'Gallery', page: 'gallery' },
    { name: 'About', page: 'about' },
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-[26px] border border-white/10 bg-black/65 px-4 backdrop-blur-xl shadow-[0_16px_60px_rgba(0,0,0,0.35)] sm:px-6">
        <div className="flex h-20 items-center justify-between gap-4">
          <a
            href="#"
            onClick={(event) => handleNavClick(event, 'home')}
            className="inline-flex items-center gap-3"
          >
            <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.38em] text-brand">
              Dhaka Matchday
            </span>
            <div className="hidden sm:block">
              <div className="font-bebas text-[2rem] uppercase leading-none tracking-[0.18em] text-white">
                Sky Turf
              </div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
                Under the lights
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                onClick={(event) => handleNavClick(event, link.page)}
                className="rounded-full px-4 py-2 text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={(event) => handleNavClick(event, 'booking')}
              className="rounded-full border border-brand/40 bg-brand px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-black transition-transform duration-300 hover:-translate-y-0.5 hover:bg-brand-hover"
            >
              Book Now
            </button>
          </div>

          <button
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 transition-colors hover:text-white md:hidden"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  onClick={(event) => handleNavClick(event, link.page)}
                  className="rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3 text-sm uppercase tracking-[0.18em] text-gray-300 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={(event) => handleNavClick(event, 'booking')}
                className="mt-2 rounded-2xl bg-brand px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-black"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
