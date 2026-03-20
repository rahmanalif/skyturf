import React from 'react';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a
              href="#"
              className="font-bebas text-3xl text-brand tracking-wider mb-6 block">
              
              SKY TURF
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The premier destination for football enthusiasts. Premium turf,
              professional lighting, and top-tier facilities for the ultimate
              playing experience.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-brand transition-colors">
                
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-brand transition-colors">
                
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-brand transition-colors">
                
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bebas text-xl mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-brand text-sm transition-colors">
                  
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#book"
                  className="text-gray-400 hover:text-brand text-sm transition-colors">
                  
                  Book a Pitch
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-brand text-sm transition-colors">
                  
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-brand text-sm transition-colors">
                  
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bebas text-xl mb-6 tracking-wide">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand text-sm transition-colors">
                  
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand text-sm transition-colors">
                  
                  Rules & Regulations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand text-sm transition-colors">
                  
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand text-sm transition-colors">
                  
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bebas text-xl mb-6 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand shrink-0" />
                <span className="text-gray-400 text-sm">
                  123 Stadium Road, Sports District, City 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand shrink-0" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand shrink-0" />
                <span className="text-gray-400 text-sm">hello@skyturf.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sky Turf. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors">
              
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors">
              
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}