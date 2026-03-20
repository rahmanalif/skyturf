import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface CalendarProps {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}
export function Calendar({ selectedDate, onSelectDate }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(
    new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)
  );
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };
  const prevMonth = () => {
    const newMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1
    );
    // Don't allow navigating to past months if the whole month is in the past
    const endOfNewMonth = new Date(
      newMonth.getFullYear(),
      newMonth.getMonth() + 1,
      0
    );
    if (endOfNewMonth >= today) {
      setCurrentMonth(newMonth);
    }
  };
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i));
  }
  const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'];

  const isPastDate = (date: Date) => {
    return date < today;
  };
  const isSelected = (date: Date) => {
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear());

  };
  const isToday = (date: Date) => {
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear());

  };
  return (
    <div className="bg-dark-surface border border-white/5 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bebas text-white tracking-wide">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={prevMonth}
            className="p-2 rounded-lg bg-dark hover:bg-white/5 text-gray-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={
            new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0) <
            today
            }>
            
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextMonth}
            className="p-2 rounded-lg bg-dark hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
            
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) =>
        <div
          key={day}
          className="text-center text-xs font-medium text-gray-500 py-2">
          
            {day}
          </div>
        )}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((date, index) => {
          if (!date)
          return <div key={`empty-${index}`} className="aspect-square"></div>;
          const past = isPastDate(date);
          const selected = isSelected(date);
          const current = isToday(date);
          return (
            <button
              key={date.toISOString()}
              onClick={() => !past && onSelectDate(date)}
              disabled={past}
              className={`
                aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-all
                ${past ? 'text-gray-600 cursor-not-allowed' : 'hover:bg-white/10 text-gray-300'}
                ${selected ? 'bg-brand text-black hover:bg-brand-hover shadow-[0_0_15px_rgba(57,255,20,0.4)]' : ''}
                ${current && !selected ? 'ring-1 ring-brand/50 text-brand' : ''}
              `}>
              
              {date.getDate()}
            </button>);

        })}
      </div>
    </div>);

}