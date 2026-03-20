import React from 'react';
import { Clock } from 'lucide-react';
interface TimeSlotsProps {
  selectedDate: Date;
  selectedSlot: string | null;
  onSelectSlot: (slot: string) => void;
  bookedSlots: string[];
}
export const TIME_SLOTS = [
'6:00 AM - 8:00 AM',
'8:00 AM - 10:00 AM',
'10:00 AM - 12:00 PM',
'12:00 PM - 2:00 PM',
'2:00 PM - 4:00 PM',
'4:00 PM - 6:00 PM',
'6:00 PM - 8:00 PM',
'8:00 PM - 10:00 PM'];

export function TimeSlots({
  selectedDate,
  selectedSlot,
  onSelectSlot,
  bookedSlots
}: TimeSlotsProps) {
  const formattedDate = selectedDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  });
  return (
    <div className="bg-dark-surface border border-white/5 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-brand/10 rounded-lg">
          <Clock className="w-5 h-5 text-brand" />
        </div>
        <div>
          <h3 className="text-xl font-bebas text-white tracking-wide">
            Select Time Slot
          </h3>
          <p className="text-sm text-gray-400">{formattedDate}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {TIME_SLOTS.map((slot) => {
          const isBooked = bookedSlots.includes(slot);
          const isSelected = selectedSlot === slot;
          return (
            <button
              key={slot}
              onClick={() => !isBooked && onSelectSlot(slot)}
              disabled={isBooked}
              className={`
                relative px-4 py-3 rounded-xl border text-sm font-medium transition-all flex items-center justify-center
                ${isBooked ? 'bg-gray-800/50 border-transparent text-gray-600 cursor-not-allowed line-through' : isSelected ? 'bg-brand border-brand text-black shadow-[0_0_15px_rgba(57,255,20,0.2)]' : 'bg-dark border-white/10 text-gray-300 hover:border-brand/50 hover:text-white'}
              `}>
              
              {slot}
              {isBooked &&
              <span className="absolute -top-2 -right-2 bg-dark text-xs text-gray-500 px-2 py-0.5 rounded-full border border-gray-800 no-underline">
                  Booked
                </span>
              }
            </button>);

        })}
      </div>
    </div>);

}