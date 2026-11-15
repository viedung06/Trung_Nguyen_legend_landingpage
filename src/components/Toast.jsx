import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 px-5 py-4 rounded-2xl bg-coffee-900 text-cream-50 border border-gold-500 shadow-2xl animate-slideIn">
      <CheckCircle2 className="w-6 h-6 text-gold-400 shrink-0" />
      <div className="text-xs sm:text-sm font-medium">
        {message}
      </div>
      <button
        onClick={onClose}
        className="p-1 text-cream-300 hover:text-cream-50 rounded-lg transition-colors ml-2"
        aria-label="Đóng thông báo"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
