import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { BookingPage } from './pages/BookingPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
export function App() {
  const [currentPage, setCurrentPage] = useState<
    'home' | 'booking' | 'pricing' | 'gallery' | 'about' | 'contact'>(
    'home');
  return (
    <div className="min-h-screen bg-dark text-gray-300 selection:bg-brand selection:text-black">
      <Navbar onNavigate={setCurrentPage} />

      {currentPage === 'home' &&
      <main>
          <HeroSection onNavigate={setCurrentPage} />
          <FeaturesSection />
          <TestimonialsSection />
          <GallerySection onNavigate={setCurrentPage} />
        </main>
      }

      {currentPage === 'booking' &&
      <main>
          <BookingPage onNavigateHome={() => setCurrentPage('home')} />
        </main>
      }

      {currentPage === 'pricing' &&
      <main>
          <PricingPage />
        </main>
      }

      {currentPage === 'contact' &&
      <main>
          <ContactPage />
        </main>
      }

      {currentPage === 'about' &&
      <main>
          <AboutPage />
        </main>
      }

      {currentPage === 'gallery' &&
      <main>
          <GalleryPage />
        </main>
      }

      <Footer />
    </div>);

}
