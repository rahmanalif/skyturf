import React, { useEffect, useState } from 'react';
import {
  CheckCircle2,
  Calendar,
  Clock,
  CreditCard,
  User,
  Hash } from
'lucide-react';
import { FormData } from './BookingForm';
interface ConfirmationScreenProps {
  bookingDetails: {
    formData: FormData;
    date: Date;
    timeSlot: string;
    referenceCode: string;
  };
  onBackToHome: () => void;
}
export function ConfirmationScreen({
  bookingDetails,
  onBackToHome
}: ConfirmationScreenProps) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  const { formData, date, timeSlot, referenceCode } = bookingDetails;
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const getPaymentMethodName = (id: string) => {
    switch (id) {
      case 'venue':
        return 'Pay at Venue';
      case 'mobile':
        return 'Bkash / Nagad';
      case 'card':
        return 'Card (Stripe)';
      default:
        return id;
    }
  };
  return (
    <div
      className={`max-w-2xl mx-auto w-full transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      
      <div className="bg-dark-surface border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-brand/5 blur-[100px] pointer-events-none"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand/10 mb-6">
            <CheckCircle2 className="w-12 h-12 text-brand" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bebas text-white mb-2 tracking-wide">
            Booking Confirmed!
          </h2>
          <p className="text-gray-400 mb-10">
            Your pitch has been successfully reserved. We've sent a confirmation
            SMS to your phone.
          </p>

          <div className="bg-dark rounded-2xl p-6 border border-white/5 text-left mb-10 space-y-4">
            <div className="flex items-start gap-4 pb-4 border-b border-white/5">
              <Hash className="w-5 h-5 text-brand mt-0.5" />
              <div>
                <p className="text-sm text-gray-500 font-medium">
                  Reference Code
                </p>
                <p className="text-xl font-mono text-brand font-bold tracking-wider">
                  {referenceCode}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Name</p>
                  <p className="text-white">{formData.name}</p>
                  {formData.teamName &&
                  <p className="text-sm text-gray-400">{formData.teamName}</p>
                  }
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Date</p>
                  <p className="text-white">{formattedDate}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Time Slot</p>
                  <p className="text-white">{timeSlot}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">
                    Payment Method
                  </p>
                  <p className="text-white">
                    {getPaymentMethodName(formData.paymentMethod)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={onBackToHome}
            className="bg-white text-black font-bold px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors">
            
            Back to Home
          </button>
        </div>
      </div>
    </div>);

}