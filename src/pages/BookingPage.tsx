import React, { useEffect, useMemo, useState } from 'react';
import { Calendar } from '../components/booking/Calendar';
import { TimeSlots, TIME_SLOTS } from '../components/booking/TimeSlots';
import { BookingForm, FormData } from '../components/booking/BookingForm';
import { ConfirmationScreen } from '../components/booking/ConfirmationScreen';
interface BookingPageProps {
  onNavigateHome: () => void;
}
export function BookingPage({ onNavigateHome }: BookingPageProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<'booking' | 'confirmation'>(
    'booking'
  );
  const [referenceCode, setReferenceCode] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    teamName: '',
    paymentMethod: ''
  });
  // Reset selected slot when date changes
  useEffect(() => {
    setSelectedSlot(null);
  }, [selectedDate]);
  // Generate deterministic mock booked slots based on date string
  const bookedSlots = useMemo(() => {
    const dateStr = selectedDate.toISOString().split('T')[0];
    // Simple hash function to generate consistent random-looking indices
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
      hash = (hash << 5) - hash + dateStr.charCodeAt(i);
      hash |= 0;
    }
    const numBooked = Math.abs(hash % 4) + 1; // 1 to 4 booked slots
    const slots: string[] = [];
    for (let i = 0; i < numBooked; i++) {
      const slotIndex = Math.abs((hash + i * 17) % TIME_SLOTS.length);
      if (!slots.includes(TIME_SLOTS[slotIndex])) {
        slots.push(TIME_SLOTS[slotIndex]);
      }
    }
    return slots;
  }, [selectedDate]);
  const handleFormChange = (data: Partial<FormData>) => {
    setFormData((prev) => ({
      ...prev,
      ...data
    }));
  };
  const handleBookingSubmit = () => {
    // Generate random reference code
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = 'SKY-';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setReferenceCode(code);
    setCurrentStep('confirmation');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="pt-24 pb-20 min-h-screen bg-dark relative">
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {currentStep === 'booking' &&
        <div className="animate-in fade-in duration-500">
            <div className="mb-10 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bebas text-white mb-3 tracking-wide">
                Book Your Pitch
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl">
                Select a date and time to reserve your spot at Sky Turf.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-start">
              {/* Left Column: Calendar */}
              <div className="sticky top-28">
                <Calendar
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate} />
              
              </div>

              {/* Right Column: Time Slots & Form */}
              <div className="space-y-8">
                <TimeSlots
                selectedDate={selectedDate}
                selectedSlot={selectedSlot}
                onSelectSlot={setSelectedSlot}
                bookedSlots={bookedSlots} />
              

                <BookingForm
                formData={formData}
                onFormChange={handleFormChange}
                onSubmit={handleBookingSubmit}
                selectedDate={selectedDate}
                selectedSlot={selectedSlot} />
              
              </div>
            </div>
          </div>
        }

        {currentStep === 'confirmation' &&
        <div className="pt-10">
            <ConfirmationScreen
            bookingDetails={{
              formData,
              date: selectedDate,
              timeSlot: selectedSlot!,
              referenceCode
            }}
            onBackToHome={onNavigateHome} />
          
          </div>
        }
      </div>
    </div>);

}