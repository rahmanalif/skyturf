import React from 'react';
import {
  User,
  Phone,
  Users,
  Banknote,
  Smartphone,
  CreditCard } from
'lucide-react';
export interface FormData {
  name: string;
  phone: string;
  teamName: string;
  paymentMethod: string;
}
interface BookingFormProps {
  formData: FormData;
  onFormChange: (data: Partial<FormData>) => void;
  onSubmit: () => void;
  selectedDate: Date;
  selectedSlot: string | null;
}
export function BookingForm({
  formData,
  onFormChange,
  onSubmit,
  selectedDate,
  selectedSlot
}: BookingFormProps) {
  const isFormValid =
  formData.name.trim() !== '' &&
  formData.phone.trim() !== '' &&
  formData.paymentMethod !== '' &&
  selectedSlot !== null;
  const paymentMethods = [
  {
    id: 'venue',
    name: 'Pay at Venue',
    icon: <Banknote className="w-6 h-6" />
  },
  {
    id: 'mobile',
    name: 'Bkash / Nagad',
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    id: 'card',
    name: 'Card (Stripe)',
    icon: <CreditCard className="w-6 h-6" />
  }];

  return (
    <div className="bg-dark-surface border border-white/5 rounded-2xl p-6 shadow-xl mt-8">
      <h3 className="text-xl font-bebas text-white tracking-wide mb-6">
        Booking Details
      </h3>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Full Name *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
              onFormChange({
                name: e.target.value
              })
              }
              className="block w-full pl-10 bg-dark border border-white/10 rounded-lg py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
              placeholder="Mahmudur Rahman" />
            
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
              onFormChange({
                phone: e.target.value
              })
              }
              className="block w-full pl-10 bg-dark border border-white/10 rounded-lg py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
              placeholder="+1 (555) 000-0000" />
            
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Team Name (Optional)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Users className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              value={formData.teamName}
              onChange={(e) =>
              onFormChange({
                teamName: e.target.value
              })
              }
              className="block w-full pl-10 bg-dark border border-white/10 rounded-lg py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
              placeholder="FC Sky" />
            
          </div>
        </div>

        <div className="pt-4">
          <label className="block text-sm font-medium text-gray-400 mb-3">
            Payment Method *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {paymentMethods.map((method) =>
            <button
              key={method.id}
              onClick={() =>
              onFormChange({
                paymentMethod: method.id
              })
              }
              className={`
                  flex flex-col items-center justify-center p-4 rounded-xl border transition-all
                  ${formData.paymentMethod === method.id ? 'bg-brand/10 border-brand text-brand' : 'bg-dark border-white/10 text-gray-400 hover:border-white/30 hover:text-white'}
                `}>
              
                <div className="mb-2">{method.icon}</div>
                <span className="text-xs font-medium">{method.name}</span>
              </button>
            )}
          </div>
        </div>

        <div className="pt-6">
          <button
            onClick={onSubmit}
            disabled={!isFormValid}
            className={`
              w-full py-4 rounded-xl font-bold text-lg transition-all
              ${isFormValid ? 'bg-brand text-black hover:bg-brand-hover shadow-[0_0_20px_rgba(57,255,20,0.3)] transform hover:-translate-y-1' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}
            `}>
            
            {selectedSlot ?
            `Confirm Booking for ${selectedSlot.split(' - ')[0]}` :
            'Select a Time Slot'}
          </button>
        </div>
      </div>
    </div>);

}