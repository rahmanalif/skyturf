import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, CheckCircle2 } from 'lucide-react';
export function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <div className="pt-20 min-h-screen bg-dark">
      {/* Page Hero */}
      <div className="bg-dark py-16 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bebas text-white mb-4 tracking-wide">
            Get in <span className="text-brand">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're here to help &mdash; reach out anytime.
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bebas text-white tracking-wide">
              Contact Details
            </h2>

            <div className="space-y-4">
              {/* Phone Card */}
              <div className="bg-dark-surface rounded-2xl border border-white/5 p-6 flex items-center gap-4 hover:border-brand/30 transition-colors">
                <div className="p-3 bg-brand/10 rounded-xl">
                  <Phone className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Call Us</p>
                  <a
                    href="tel:+8801700000000"
                    className="text-xl font-bold text-white hover:text-brand transition-colors">
                    
                    +880 1XXX-XXXXXX
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-dark-surface rounded-2xl border border-white/5 p-6 flex items-center justify-between hover:border-brand/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#25D366]/10 rounded-xl">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">WhatsApp</p>
                    <p className="text-white font-medium">
                      Quick replies within 5 mins
                    </p>
                  </div>
                </div>
                <button className="bg-[#25D366] text-white font-bold px-4 py-2 rounded-xl hover:bg-[#20b858] transition-colors text-sm">
                  Chat on WhatsApp
                </button>
              </div>

              {/* Email Card */}
              <div className="bg-dark-surface rounded-2xl border border-white/5 p-6 flex items-center gap-4 hover:border-brand/30 transition-colors">
                <div className="p-3 bg-brand/10 rounded-xl">
                  <Mail className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email Us</p>
                  <a
                    href="mailto:info@skyturf.com"
                    className="text-lg font-medium text-white hover:text-brand transition-colors">
                    
                    info@skyturf.com
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-dark-surface rounded-2xl border border-white/5 p-6">
              <h3 className="text-xl font-bebas text-white tracking-wide mb-4">
                Business Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <span className="text-gray-400">
                    Saturday &ndash; Thursday
                  </span>
                  <span className="text-white font-medium">
                    6:00 AM &ndash; 10:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-gray-400">Friday</span>
                  <span className="text-white font-medium">
                    2:00 PM &ndash; 10:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-dark-surface rounded-2xl border border-white/5 h-64 overflow-hidden relative group cursor-pointer flex flex-col items-center justify-center hover:border-brand/30 transition-colors">
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
              {/* Fake map grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                  'radial-gradient(#39FF14 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}>
              </div>
              <MapPin className="w-12 h-12 text-brand mb-3 relative z-10 animate-bounce" />
              <p className="text-white font-bebas text-xl tracking-wide relative z-10">
                Sky Turf Location
              </p>
              <p className="text-gray-400 text-sm relative z-10 mt-1">
                Click to open in Google Maps
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-dark-surface rounded-2xl border border-white/5 p-8 h-fit">
            <h2 className="text-3xl font-bebas text-white tracking-wide mb-8">
              Send a Message
            </h2>

            {isSubmitted ?
            <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-brand" />
                </div>
                <h3 className="text-2xl font-bebas text-white tracking-wide mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400">
                  Thank you for reaching out. Our team will get back to you
                  shortly.
                </p>
                <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-brand hover:text-white transition-colors text-sm font-medium">
                
                  Send another message
                </button>
              </div> :

            <form
              onSubmit={handleSubmit}
              className="space-y-6 animate-in fade-in duration-500">
              
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Full Name *
                  </label>
                  <input
                  type="text"
                  required
                  className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                  placeholder="Enter your name" />
                
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Phone Number *
                  </label>
                  <input
                  type="tel"
                  required
                  className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                  placeholder="+880 1XXX-XXXXXX" />
                
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <select className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors appearance-none">
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking Help</option>
                    <option value="partnership">Partnership</option>
                    <option value="complaint">Complaint</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Message *
                  </label>
                  <textarea
                  required
                  rows={4}
                  className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors resize-none"
                  placeholder="How can we help you?">
                </textarea>
                </div>

                <button
                type="submit"
                className="w-full bg-brand text-black font-bold py-4 rounded-xl hover:bg-brand-hover shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all transform hover:-translate-y-1">
                
                  Send Message
                </button>
              </form>
            }
          </div>
        </div>
      </div>
    </div>);

}