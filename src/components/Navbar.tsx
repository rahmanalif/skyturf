import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
export function Navbar({
  onNavigate




}: {onNavigate?: (page: 'home' | 'booking' | 'pricing' | 'gallery' | 'about' | 'contact') => void;}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  page?: 'home' | 'booking' | 'pricing' | 'gallery' | 'about' | 'contact') =>
  {
    if (page && onNavigate) {
      e.preventDefault();
      onNavigate(page);
      setIsOpen(false);
    }
  };
  const navLinks = [
  {
    name: 'Home',
    href: '#',
    page: 'home' as const
  },
  {
    name: 'Book',
    href: '#book',
    page: 'booking' as const
  },
  {
    name: 'Pricing',
    href: '#pricing',
    page: 'pricing' as const
  },
  {
    name: 'Gallery',
    href: '#gallery',
    page: 'gallery' as const
  },
  {
    name: 'About',
    href: '#about',
    page: 'about' as const
  },
  {
    name: 'Contact',
    href: '#contact',
    page: 'contact' as const
  }];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, '#', 'home')}
              className="inline-flex items-center gap-3">
              <img
                className="h-10 w-auto object-contain sm:h-28"
                src="/skyturf_logo_transparent.png"
                alt="Sky Turf logo" />
              
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8 lg:space-x-10">
              {navLinks.map((link) =>
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.page)}
                className="text-white hover:text-brand px-3 py-2 rounded-md text-sm font-medium transition-colors">
                
                  {link.name}
                </a>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center justify-self-end md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-surface focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand"
              aria-expanded="false">
              
              <span className="sr-only">Open main menu</span>
              {isOpen ?
              <X className="block h-6 w-6" aria-hidden="true" /> :

              <Menu className="block h-6 w-6" aria-hidden="true" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen &&
      <div className="md:hidden bg-dark-surface border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="text-gray-300 hover:text-brand block px-3 py-2 rounded-md text-base font-medium"
            onClick={(e) => handleNavClick(e, link.href, link.page)}>
            
                {link.name}
              </a>
          )}
          </div>
        </div>
      }
    </nav>);

}
